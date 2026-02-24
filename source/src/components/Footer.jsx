import React from 'react';

const Logo = () => (
    <svg viewBox="0 0 100 120" className="h-16 w-auto opacity-80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="footerLogoGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#bc6c25" />
                <stop offset="100%" stopColor="#d4a373" />
            </linearGradient>
        </defs>
        <path d="M50 0C22.4 0 0 22.4 0 50C0 87.5 50 120 50 120C50 120 100 87.5 100 50C100 22.4 77.6 0 50 0Z" fill="url(#footerLogoGradient)" />
        <path d="M25 45 L50 25 L75 45 L68 45 L50 30 L32 45 Z" fill="#fdfcf8" />
        <path d="M50 85 C50 85 28 68 28 52 C28 42 36 38 42 38 C47 38 50 42 50 42 C50 42 53 38 58 38 C64 38 72 42 72 52 C72 68 50 85 50 85Z" fill="#fdfcf8" />
    </svg>
);

const Footer = ({ onManifestClick, onCGVClick }) => {
    return (
        <footer className="py-16 bg-[#1c1917] text-mmt-light text-center">
            <div className="flex justify-center mb-8">
                <Logo />
            </div>
            <p className="font-serif italic text-xl text-stone-400 mb-8">
                "Le voyage est la seule chose qu'on achète qui nous rend plus riche."
            </p>
            {/* Navigation links */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-stone-500 text-sm tracking-widest uppercase px-4 mb-6">
                <a href="#philosophie" className="hover:text-mmt-gold transition-colors">Philosophie</a>
                <a href="#experience" className="hover:text-mmt-gold transition-colors">Expérience</a>
                <a href="#constellation" className="hover:text-mmt-gold transition-colors">Constellation</a>
                <a href="#equipe" className="hover:text-mmt-gold transition-colors">L'Équipe</a>
                <a href="#rejoindre" className="hover:text-mmt-gold transition-colors">Rejoindre</a>
            </div>
            {/* Secondary links */}
            <div className="flex justify-center gap-6 md:gap-8 text-stone-600 text-xs tracking-widest uppercase mb-12">
                <button onClick={onManifestClick} className="hover:text-mmt-gold transition-colors">Manifeste</button>
                <button onClick={onCGVClick} className="hover:text-mmt-gold transition-colors">CGV</button>
                <a href="#" className="hover:text-mmt-gold transition-colors">Contact</a>
            </div>
            <p className="text-stone-600 text-xs">
                © {new Date().getFullYear()} MeetMeThere • Fait avec ❤️ à Mougins
            </p>
        </footer>
    );
};

export default Footer;
