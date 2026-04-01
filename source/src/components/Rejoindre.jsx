import React from 'react';
import { Compass, Check, ArrowRight } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';

const ULULE_URL = 'https://fr.ulule.com/meetmethere';

const tiers = [
    { range: '0 – 500',       price: '5€' },
    { range: '501 – 1 000',   price: '30€' },
    { range: '1 001 – 1 500', price: '60€' },
];

const Rejoindre = () => {
    const { t } = useTranslation();
    return (
        <section id="rejoindre" className="py-24 bg-[#f5f5f4] border-t border-stone-200 scroll-mt-20">
            <div className="max-w-2xl mx-auto px-6">
                <div className="text-center mb-16">
                    <Compass size={48} strokeWidth={1} className="mx-auto text-mmt-gold mb-6 animate-spin-slow" />
                    <h2 className="font-serif text-4xl text-mmt-dark mb-6">{t('rejoindre.tag')}</h2>
                    <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto">
                        {t('rejoindre.desc')}
                    </p>
                </div>

                {/* Pionnier card */}
                <div className="relative bg-mmt-light shadow-2xl border border-mmt-sand transition-shadow duration-300">
                    <div className="absolute inset-0 bg-mmt-sand/10 mix-blend-multiply pointer-events-none"></div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mmt-gold to-transparent"></div>

                    <div className="relative z-10 p-8 md:p-12 text-center">
                        {/* Badge */}
                        <div className="inline-block bg-mmt-gold text-white px-5 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
                            Prenez votre place
                        </div>

                        <h3 className="font-serif text-4xl text-mmt-dark mb-2">{t('rejoindre.pionnier')}</h3>
                        <p className="font-handwriting text-xl text-mmt-gold mb-10">{t('rejoindre.pionnier_desc')}</p>

                        {/* Pricing tiers — Pionniers */}
                        <div className="mb-4 bg-[#f5f5f4]/60 rounded-xl border border-mmt-sand/30 overflow-hidden">
                            <div className="px-5 py-3 border-b border-mmt-sand/20 text-left">
                                <span className="text-[10px] uppercase tracking-widest text-mmt-gold font-bold">
                                    Places Pionniers — -50% à vie sur le renouvellement
                                </span>
                            </div>
                            {tiers.map(({ range, price }) => (
                                <div key={range} className="flex justify-between items-center px-5 py-3 border-b border-stone-100 last:border-0">
                                    <span className="flex items-center gap-2 text-mmt-dark font-medium text-sm">
                                        <Check size={13} className="text-mmt-gold shrink-0" />
                                        {range} premiers membres
                                    </span>
                                    <div className="text-right">
                                        <span className="font-serif text-lg text-mmt-dark">{price}</span>
                                        <span className="text-xs text-stone-400 ml-1">/an</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Post-1500 offer */}
                        <div className="mb-8 bg-stone-100/70 rounded-xl border border-stone-200 overflow-hidden">
                            <div className="px-5 py-3 border-b border-stone-200 text-left">
                                <span className="text-[10px] uppercase tracking-widest text-stone-500 font-bold">
                                    Au-delà des 1 500 premiers
                                </span>
                            </div>
                            <div className="flex justify-between items-center px-5 py-3">
                                <span className="text-stone-600 text-sm">Offre de lancement — 20% de remise</span>
                                <div className="text-right">
                                    <span className="font-serif text-lg text-stone-700">96€</span>
                                    <span className="text-xs text-stone-400 ml-1">/1ʳᵉ année</span>
                                </div>
                            </div>
                        </div>

                        {/* Price reference */}
                        <div className="mb-8 p-4 bg-stone-100/50 rounded-xl border border-stone-200 text-center">
                            <p className="text-xs uppercase tracking-widest text-stone-500 mb-1 font-sans">{t('rejoindre.public_price')}</p>
                            <p className="font-serif text-2xl text-mmt-dark">120€ <span className="text-sm font-sans text-stone-500">{t('rejoindre.per_year')}</span></p>
                        </div>

                        <a
                            href={ULULE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 bg-mmt-dark text-mmt-light font-serif text-xl italic hover:bg-[#1c1917] transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            Accéder à la campagne sur Ulule <ArrowRight size={18} />
                        </a>
                        <p className="mt-4 text-[10px] text-stone-400 uppercase tracking-widest">{t('rejoindre.limited')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rejoindre;
