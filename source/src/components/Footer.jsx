import React from 'react';
import { useTranslation } from 'react-i18next';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Logo = () => (
    <img src="/logo.png" alt="MeetMeThere" className="h-16 w-auto opacity-80" />
);

const Footer = ({ onManifestClick, onCGVClick, onContactClick }) => {
    const { t } = useTranslation();
    
    // Social Media Links (Update these with your actual URLs)
    const SOCIAL_LINKS = {
        facebook: "https://www.facebook.com/meetmethere.club",
        instagram: "https://www.instagram.com/meetmethere.club",
        linkedin: "https://www.linkedin.com/company/meetmethere"
    };

    return (
        <footer className="py-16 bg-[#1c1917] text-mmt-light text-center">
            <div className="flex justify-center mb-8">
                <Logo />
            </div>
            
            {/* Social Media Links */}
            <div className="flex justify-center gap-6 mb-8 text-stone-500">
                <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-mmt-gold transition-colors" aria-label="Facebook">
                    <Facebook size={20} />
                </a>
                <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-mmt-gold transition-colors" aria-label="Instagram">
                    <Instagram size={20} />
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-mmt-gold transition-colors" aria-label="LinkedIn">
                    <Linkedin size={20} />
                </a>
            </div>

            <p className="font-serif italic text-xl text-stone-400 mb-8 max-w-2xl mx-auto px-6">
                {t('footer.quote')}
            </p>
            {/* Navigation links */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-stone-500 text-sm tracking-widest uppercase px-4 mb-6">
                <a href="#philosophie" className="hover:text-mmt-gold transition-colors">{t('header.philosophie')}</a>
                <a href="#experience" className="hover:text-mmt-gold transition-colors">{t('header.experience')}</a>
                <a href="#constellation" className="hover:text-mmt-gold transition-colors">{t('header.constellation')}</a>
                <a href="#equipe" className="hover:text-mmt-gold transition-colors">{t('header.equipe')}</a>
                <a href="#rejoindre" className="hover:text-mmt-gold transition-colors">{t('header.rejoindre')}</a>
            </div>
            {/* Secondary links */}
            <div className="flex justify-center gap-6 md:gap-8 text-stone-600 text-xs tracking-widest uppercase mb-12">
                <button onClick={onManifestClick} className="hover:text-mmt-gold transition-colors">{t('footer.manifesto')}</button>
                <button onClick={onCGVClick} className="hover:text-mmt-gold transition-colors">{t('footer.cgv')}</button>
                <button onClick={onContactClick} className="hover:text-mmt-gold transition-colors">{t('footer.contact')}</button>
            </div>
            <p className="text-stone-600 text-xs">
                © {new Date().getFullYear()} MeetMeThere • {t('footer.made_with')}
            </p>
        </footer>
    );
};

export default Footer;
