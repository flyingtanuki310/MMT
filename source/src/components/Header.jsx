import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Logo = () => (
    <img src="/logo.png" alt="MeetMeThere" className="h-10 w-auto" />
);

const Header = () => {
    const { t, i18n } = useTranslation();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const links = [
        { href: '#philosophie', label: t('header.philosophie') },
        { href: '#experience', label: t('header.experience') },
        { href: '#constellation', label: t('header.constellation') },
        { href: '#equipe', label: t('header.equipe') },
    ];

    const LanguageSwitcher = ({ className = "" }) => (
        <div className={`flex gap-3 items-center text-sm font-sans font-medium tracking-widest ${className}`}>
            <button
                onClick={() => { i18n.changeLanguage('fr'); setMobileOpen(false); }}
                className={`hover:text-mmt-gold transition-colors ${i18n.language?.startsWith('fr') ? 'text-mmt-gold font-bold' : 'text-stone-400'}`}
            >
                FR
            </button>
            <span className="text-stone-300">|</span>
            <button
                onClick={() => { i18n.changeLanguage('en'); setMobileOpen(false); }}
                className={`hover:text-mmt-gold transition-colors ${i18n.language?.startsWith('en') ? 'text-mmt-gold font-bold' : 'text-stone-400'}`}
            >
                EN
            </button>
        </div>
    );

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
                        {t('header.rejoindre')}
                    </a>
                    <div className="pl-4 border-l border-stone-200">
                        <LanguageSwitcher />
                    </div>
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
                    <a href="#rejoindre" className="block text-center px-6 py-2 rounded-full border border-mmt-gold text-mmt-gold font-serif italic text-lg mb-4" onClick={() => setMobileOpen(false)}>
                        {t('header.rejoindre')}
                    </a>
                    <div className="flex justify-center pt-4 border-t border-stone-100">
                        <LanguageSwitcher />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
