import React from 'react';
import { ShieldCheck, Heart, Wind } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Pact = () => {
    const { t } = useTranslation();

    const pactItems = [
        {
            icon: ShieldCheck,
            title: t('pact.c1_title'),
            subtitle: t('pact.c1_subtitle', 'Identité Vérifiée'),
            description: t('pact.c1_desc'),
            color: 'text-[#283618]',
            bg: 'bg-[#283618]/5',
            border: 'border-[#283618]/10',
        },
        {
            icon: Heart,
            title: t('pact.c2_title'),
            subtitle: t('pact.c2_subtitle', '1 Reçu = 1 Gagné'),
            description: t('pact.c2_desc'),
            color: 'text-[#bc6c25]',
            bg: 'bg-[#bc6c25]/5',
            border: 'border-[#bc6c25]/10',
        },
        {
            icon: Wind,
            title: t('pact.c3_title'),
            subtitle: t('pact.c3_subtitle', 'Le Demi-Coeur (½)'),
            description: t('pact.c3_desc'),
            color: 'text-[#606c38]',
            bg: 'bg-[#606c38]/5',
            border: 'border-[#606c38]/10',
        },
    ];

    return (
        <section id="pacte" className="py-24 bg-[#fdfcf8] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="font-handwriting text-mmt-gold text-3xl block mb-2">{t('pact.tag')}</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-mmt-dark">{t('pact.title')}</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {pactItems.map((item, i) => (
                        <div key={i} className={`relative p-8 rounded-2xl border ${item.border} ${item.bg} hover:bg-white hover:shadow-xl transition-all duration-300 group`}>
                            <div className={`w-14 h-14 rounded-full ${item.bg} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                                <item.icon size={28} className={item.color} strokeWidth={1.5} />
                            </div>
                            <div className="text-center">
                                <h3 className={`font-serif text-2xl mb-1 ${item.color}`}>{item.title}</h3>
                                <p className="font-handwriting text-lg text-stone-500 mb-4">{item.subtitle}</p>
                                <p className="text-stone-600 font-light leading-relaxed text-sm md:text-base">{item.description}</p>
                            </div>
                            <div className={`absolute top-4 right-4 w-2 h-2 rounded-full ${item.bg.replace('/5', '')} opacity-20`}></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pact;
