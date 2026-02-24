import React from 'react';
import { ShieldCheck, Heart, Wind } from 'lucide-react';

const pactItems = [
    {
        icon: ShieldCheck,
        title: 'Confiance Absolue',
        subtitle: 'Identité Vérifiée',
        description: "Pas de faux-semblants. Chaque membre passe par une vérification d'identité sécurisée. Nous savons qui frappe à la porte.",
        color: 'text-[#283618]',
        bg: 'bg-[#283618]/5',
        border: 'border-[#283618]/10',
    },
    {
        icon: Heart,
        title: "L'Économie du Coeur",
        subtitle: '1 Reçu = 1 Gagné',
        description: "La règle d'or : Accueillir vous fait gagner 1 Coeur. Partir à l'aventure vous en coûte 1. Une boucle vertueuse de générosité.",
        color: 'text-[#bc6c25]',
        bg: 'bg-[#bc6c25]/5',
        border: 'border-[#bc6c25]/10',
    },
    {
        icon: Wind,
        title: "L'Esprit Bohème",
        subtitle: 'Le Demi-Coeur (½)',
        description: "Pour les Vanlifers (Parking + Douche) ou l'hospitalité simple (Canapé). Une option plus légère pour les passages éclairs.",
        color: 'text-[#606c38]',
        bg: 'bg-[#606c38]/5',
        border: 'border-[#606c38]/10',
    },
];

const Pact = () => {
    return (
        <section id="pacte" className="py-24 bg-[#fdfcf8] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="font-handwriting text-mmt-gold text-3xl block mb-2">Le Pacte</span>
                    <h2 className="font-serif text-4xl md:text-5xl text-mmt-dark">Les Règles du Jeu</h2>
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
