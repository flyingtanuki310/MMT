#!/bin/bash
set -e

echo "🔄 Sync contacts Brevo..."
node source/scripts/sync-brevo.mjs

echo "🏗️  Build de production..."
cd source
npm run build
cd ..

echo "📦 Copie du build à la racine..."
cp -r source/dist/* .

echo "🚀 Push vers GitHub..."
git add -A
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M')" || echo "Rien à commiter"
git push origin main

echo "✅ Déployé sur meetmethere.club !"
