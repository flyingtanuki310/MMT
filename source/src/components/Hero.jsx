import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ULULE_URL = 'https://fr.ulule.com/meetmethere';
const REPLAY_URL = 'https://drive.google.com/file/d/1WpHCFwpYjztnZVXOqbEn0kElvPMO5kst/view';

const Hero = () => {
    const { t } = useTranslation();
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    className="h-full w-full object-cover scale-105 animate-kenburns"
                    alt="MeetMeThere - Paysage inspirant de voyage authentique et humain"
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
                    <h1 className="font-serif text-5xl md:text-7xl leading-tight text-white mb-6 drop-shadow-lg">
                        {t('hero.title1')} <br />
                        <span className="italic text-mmt-cream">{t('hero.title2')}</span>
                    </h1>

                    {/* Ulule CTA Block */}
                    <div className="flex flex-col items-center my-8">
                        <p className="font-serif text-2xl md:text-3xl text-mmt-gold drop-shadow-md mb-6 italic">
                            MeetMeThere est sur Ulule&nbsp;!
                        </p>
                        <a
                            href={ULULE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-10 py-4 bg-mmt-gold text-white font-serif text-xl italic rounded-full shadow-xl hover:brightness-110 transition-all duration-300 transform hover:scale-105"
                        >
                            Rejoindre la campagne <ArrowRight size={20} />
                        </a>
                        <a
                            href={REPLAY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center gap-1.5 text-white/50 text-xs tracking-wide hover:text-white/80 transition-colors duration-200 underline underline-offset-2"
                        >
                            <ExternalLink size={11} />
                            Replay du webinar du 27 mars
                        </a>
                    </div>

                    <p className="text-xl md:text-2xl text-white/90 font-light max-w-2xl mx-auto mb-10 drop-shadow-md font-serif italic leading-relaxed">
                        {t('hero.quoteLine1')} <br />
                        {t('hero.quoteLine2')}
                    </p>
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
