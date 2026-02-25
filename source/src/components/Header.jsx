import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Logo = () => (
    <svg viewBox="0 0 100 120" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#bc6c25" />
                <stop offset="100%" stopColor="#d4a373" />
            </linearGradient>
        </defs>
        <path d="M50 0C22.4 0 0 22.4 0 50C0 87.5 50 120 50 120C50 120 100 87.5 100 50C100 22.4 77.6 0 50 0Z" fill="url(#logoGradient)" />
        <path d="M25 45 L50 25 L75 45 L68 45 L50 30 L32 45 Z" fill="#fdfcf8" />
        <path d="M50 85 C50 85 28 68 28 52 C28 42 36 38 42 38 C47 38 50 42 50 42 C50 42 53 38 58 38 C64 38 72 42 72 52 C72 68 50 85 50 85Z" fill="#fdfcf8" />
    </svg>
);

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { href: '#philosophie', label: 'Philosophie' },
        { href: '#experience', label: "L'Expérience" },
        { href: '#constellation', label: 'La Constellation' },
        { href: '#equipe', label: "L'Équipage" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-stone-100 py-4 transition-all duration-500 ease-in-out">
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div
                    className="flex items-center gap-3 cursor-pointer group"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="transform group-hover:scale-105 transition-transform duration-300">
                        <Logo />
                    </div>
                    <span className="font-serif text-xl tracking-wide font-bold italic hidden sm:block text-mmt-dark group-hover:text-mmt-gold transition-colors duration-300">
                        MeetMeThere
                    </span>
                </div>
                <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
                    {links.map(link => (
                        <a key={link.href} href={link.href} className="hover:text-mmt-gold transition-colors font-serif italic text-lg">
                            {link.label}
                        </a>
                    ))}
                    <a href="#rejoindre" className="px-6 py-2 rounded-full border border-mmt-gold text-mmt-gold hover:bg-mmt-gold hover:text-white transition-all duration-300 font-serif italic text-lg">
                        Rejoindre le cercle
                    </a>
                </div>
                <button className="md:hidden text-stone-600" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {/* Mobile menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white border-t border-stone-100 px-6 py-4 space-y-4">
                    {links.map(link => (
                        <a key={link.href} href={link.href} className="block font-serif italic text-lg text-stone-600 hover:text-mmt-gold" onClick={() => setMobileOpen(false)}>
                            {link.label}
                        </a>
                    ))}
                    <a href="#rejoindre" className="block text-center px-6 py-2 rounded-full border border-mmt-gold text-mmt-gold font-serif italic text-lg" onClick={() => setMobileOpen(false)}>
                        Rejoindre le cercle
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Header;
