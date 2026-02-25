#!/usr/bin/env node
/**
 * Script de synchronisation Brevo → members.json
 * 
 * Récupère les contacts Brevo ayant un attribut VILLE,
 * géocode leur ville via Nominatim (OpenStreetMap), 
 * et génère un fichier JSON statique pour la carte.
 * 
 * Usage: node scripts/sync-brevo.mjs
 * 
 * Nécessite la variable VITE_BREVO_API_KEY dans .env
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env manually (no dotenv dependency needed)
const envPath = resolve(__dirname, '..', '.env');
const envContent = readFileSync(envPath, 'utf-8');
const envVars = {};
envContent.split('\n').forEach(line => {
    const [key, ...rest] = line.split('=');
    if (key && rest.length) envVars[key.trim()] = rest.join('=').trim();
});

const API_KEY = envVars.VITE_BREVO_API_KEY;
if (!API_KEY) {
    console.error('❌ VITE_BREVO_API_KEY manquante dans .env');
    process.exit(1);
}

const BREVO_API = 'https://api.brevo.com/v3';

// Geocode cache to avoid duplicate requests
const geocodeCache = {};

async function geocode(city, country = 'France') {
    const key = `${city}-${country}`.toLowerCase();
    if (geocodeCache[key]) return geocodeCache[key];

    try {
        const q = encodeURIComponent(`${city}, ${country}`);
        const res = await fetch(
            `https://nominatim.openstreetmap.org/search?q=${q}&format=json&limit=1`,
            { headers: { 'User-Agent': 'MeetMeThere-Sync/1.0' } }
        );
        const data = await res.json();
        if (data.length > 0) {
            const result = { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
            geocodeCache[key] = result;
            // Rate limit: Nominatim asks for 1 req/sec
            await new Promise(r => setTimeout(r, 1100));
            return result;
        }
    } catch (err) {
        console.warn(`⚠️  Geocoding failed for ${city}, ${country}:`, err.message);
    }
    return null;
}

async function fetchAllContacts() {
    const contacts = [];
    let offset = 0;
    const limit = 50;

    while (true) {
        const res = await fetch(`${BREVO_API}/contacts?limit=${limit}&offset=${offset}`, {
            headers: { 'api-key': API_KEY, 'accept': 'application/json' }
        });
        const data = await res.json();
        if (!data.contacts || data.contacts.length === 0) break;
        contacts.push(...data.contacts);
        if (contacts.length >= data.count) break;
        offset += limit;
    }

    return contacts;
}

async function main() {
    console.log('🔄 Récupération des contacts Brevo...');
    const contacts = await fetchAllContacts();
    console.log(`📋 ${contacts.length} contacts trouvés`);

    const members = [];

    for (const contact of contacts) {
        const ville = contact.attributes?.VILLE;
        const pays = contact.attributes?.PAYS || 'France';
        const prenom = contact.attributes?.PRENOM || '';

        if (!ville) {
            console.log(`   ⏩ ${contact.email || 'sans email'} — pas de ville, ignoré`);
            continue;
        }

        console.log(`   📍 Géocodage de ${ville}, ${pays}...`);
        const coords = await geocode(ville, pays);

        if (coords) {
            members.push({
                id: contact.id,
                city: ville,
                country: pays,
                name: prenom,
                lat: coords.lat,
                lng: coords.lng,
                type: 'member'
            });
            console.log(`   ✅ ${prenom || 'Anonyme'} → ${ville} (${coords.lat}, ${coords.lng})`);
        } else {
            console.log(`   ❌ Impossible de géocoder ${ville}, ${pays}`);
        }
    }

    // Add Romain as founder (always visible)
    members.push({
        id: 'founder-romain',
        city: 'Mougins',
        country: 'France',
        name: 'Romain',
        lat: 43.6007,
        lng: 6.9956,
        type: 'founder'
    });

    const outputPath = resolve(__dirname, '..', 'public', 'members.json');
    writeFileSync(outputPath, JSON.stringify(members, null, 2));
    console.log(`\n🎉 ${members.length} membres exportés vers ${outputPath}`);
}

main().catch(err => {
    console.error('❌ Erreur:', err);
    process.exit(1);
});
