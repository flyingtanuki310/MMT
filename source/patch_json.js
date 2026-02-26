const fs = require('fs');
const frPath = './src/locales/fr/translation.json';
const enPath = './src/locales/en/translation.json';

const frData = JSON.parse(fs.readFileSync(frPath));
frData.countdown = {
    days: "Jours",
    hours: "Heures",
    minutes: "Minutes",
    seconds: "Secondes",
    launched: "C'est l'heure !"
};
fs.writeFileSync(frPath, JSON.stringify(frData, null, 4));

const enData = JSON.parse(fs.readFileSync(enPath));
enData.countdown = {
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",
    launched: "It's time!"
};
fs.writeFileSync(enPath, JSON.stringify(enData, null, 4));
