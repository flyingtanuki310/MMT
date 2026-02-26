import React from 'react';
import { Compass, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    className="h-full w-full object-cover scale-105 animate-kenburns"
                    alt="Travel Landscape"
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2921&auto=format&fit=crop"
                />
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mt-20">
                <div className="bg-black/20 backdrop-blur-sm p-12 md:p-16 border border-white/10 shadow-2xl mb-12 md:mb-0">
                    <span className="font-handwriting text-3xl md:text-5xl text-white/90 block mb-6 rotate-2 drop-shadow-md">
                        {t('hero.subtitle')}
                    </span>
                    <h1 className="font-serif text-5xl md:text-7xl leading-tight text-white mb-8 drop-shadow-lg">
                        {t('hero.title1')} <br />
                        <span className="italic text-mmt-cream">{t('hero.title2')}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto mb-10 drop-shadow-md font-serif italic leading-relaxed">
                        {t('hero.quoteLine1')} <br />
                        {t('hero.quoteLine2')}
                    </p>
                    <button onClick={() => document.getElementById('rejoindre')?.scrollIntoView({ behavior: 'smooth' })} className="px-8 py-4 bg-mmt-light text-mmt-dark rounded-full font-serif text-xl italic hover:bg-mmt-cream transition-colors shadow-xl flex items-center gap-3 mx-auto transform hover:scale-105 duration-300">
                        <Compass size={24} strokeWidth={1.5} />
                        {t('hero.cta')}
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2 animate-bounce">
                <span className="text-xs tracking-widest uppercase">{t('hero.discover')}</span>
                <ArrowRight size={20} className="rotate-90" />
            </div>
        </section>
    );
};

export default Hero;
