import React, { useEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import { MapPin, Star } from 'lucide-react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Custom marker icons
const createIcon = (type) => {
    const color = type === 'founder' ? '#fbbf24' : '#ffffff';
    const glow = type === 'founder' ? 'drop-shadow(0 0 8px #fbbf24)' : 'drop-shadow(0 0 6px rgba(255,255,255,0.6))';
    const size = type === 'founder' ? 14 : 10;

    return L.divIcon({
        className: 'custom-marker',
        html: `<div style="
            width: ${size}px; height: ${size}px;
            background: ${color};
            border-radius: 50%;
            filter: ${glow};
            border: 2px solid ${type === 'founder' ? '#d97706' : 'rgba(255,255,255,0.3)'};
            animation: pulse-marker 2s ease-in-out infinite;
        "></div>`,
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
    });
};

// Component to auto-fit bounds when markers change
const AutoFitBounds = ({ members }) => {
    const map = useMap();

    useEffect(() => {
        if (members.length === 0) return;

        const bounds = L.latLngBounds(members.map(m => [m.lat, m.lng]));
        map.fitBounds(bounds, { padding: [50, 50], maxZoom: 8 });
    }, [members, map]);

    return null;
};

const Constellation = () => {
    const [members, setMembers] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('/members.json')
            .then(res => res.ok ? res.json() : [])
            .then(data => {
                setMembers(data);
                setCount(data.length);
            })
            .catch(() => {
                // Fallback: show Romain as founder
                const fallback = [{
                    id: 'founder-romain',
                    city: 'Mougins',
                    country: 'France',
                    name: 'Romain',
                    lat: 43.6007,
                    lng: 6.9956,
                    type: 'founder'
                }];
                setMembers(fallback);
                setCount(fallback.length);
            });
    }, []);

    return (
        <section id="constellation" className="scroll-mt-20">
            <section className="py-24 bg-[#1c1917] overflow-hidden relative flex flex-col items-center">
                {/* Background texture */}
                <div
                    className="absolute inset-0 opacity-40 pointer-events-none z-0"
                    style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/dark-leather.png')" }}
                ></div>

                {/* Heading */}
                <div className="relative z-10 text-center mb-16 px-6">
                    <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-stone-800/80 border border-stone-700/50 text-stone-300 text-xs font-bold uppercase tracking-widest mb-4 shadow-lg backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                        Live Map
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl text-stone-200 mb-4 drop-shadow-md">La Constellation MMT</h2>
                    <p className="text-stone-400 max-w-xl mx-auto font-light text-sm leading-relaxed">
                        Naviguez dans la communauté en temps réel. Chaque nouvel arrivant allume une lumière, révélant de nouvelles opportunités de voyage.<br />
                        <span className="text-white font-medium drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">Argent</span> = Membre • <span className="text-[#fbbf24] font-medium drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">Or</span> = Fondateur
                    </p>
                </div>

                {/* Map Container */}
                <div className="relative w-full max-w-4xl h-[600px] rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,1),0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.1)] bg-[#0a0a0b] overflow-hidden group transform hover:scale-[1.005] transition-transform duration-700 ease-out z-10">
                    {/* Overlay textures */}
                    <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')" }}></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent h-32 pointer-events-none z-20"></div>

                    <MapContainer
                        center={[46.8, 2.5]}
                        zoom={6}
                        style={{ width: '100%', height: '100%', background: '#0a0a0b' }}
                        zoomControl={false}
                        attributionControl={true}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
                        />
                        {members.map(member => (
                            <Marker
                                key={member.id}
                                position={[member.lat, member.lng]}
                                icon={createIcon(member.type)}
                            />
                        ))}
                        <AutoFitBounds members={members} />
                    </MapContainer>

                    {/* Bottom status bar */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-3 rounded-full shadow-2xl flex items-center gap-4 z-[1000] whitespace-nowrap">
                        <div className="p-1.5 rounded-full bg-white/10 text-white">
                            <MapPin size={14} />
                        </div>
                        <div>
                            <p className="text-stone-200 text-sm font-medium">
                                {count > 0 ? `${count} lumière${count > 1 ? 's' : ''} allumée${count > 1 ? 's' : ''}` : 'La carte est en cours de construction...'}
                            </p>
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes pulse-marker {
                        0%, 100% { opacity: 0.8; transform: scale(1); }
                        50% { opacity: 1; transform: scale(1.3); }
                    }
                    .custom-marker {
                        background: transparent !important;
                        border: none !important;
                    }
                `}</style>
            </section>
        </section>
    );
};

export default Constellation;
