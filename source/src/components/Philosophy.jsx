import React from 'react';
import { Compass, BookOpen } from 'lucide-react';

const Philosophy = ({ onManifestClick }) => {
    return (
        <section id="philosophie" className="py-32 bg-[#0c0a09] relative overflow-hidden text-mmt-light">
            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mmt-gold rounded-full blur-[150px] opacity-10 animate-pulse-slow"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Image */}
                    <div className="relative group">
                        <div className="absolute -inset-2 bg-gradient-to-tr from-mmt-gold to-transparent opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-lg"></div>
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-white/10 shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-1000">
                            <img
                                alt="Campfire Discussion"
                                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                src="https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2667&auto=format&fit=crop"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700"></div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 text-mmt-gold/20 rotate-12">
                            <Compass size={120} strokeWidth={0.5} />
                        </div>
                    </div>

                    {/* Text */}
                    <div>
                        <span className="font-handwriting text-mmt-gold text-3xl block mb-4 rotate-1">L'Art de la Rencontre</span>
                        <h2 className="font-serif text-4xl md:text-5xl text-[#e7e5e4] mb-8 leading-tight">
                            La chaleur humaine comme seul repère dans la nuit.
                        </h2>
                        <div className="space-y-6 text-stone-400 font-light text-lg leading-relaxed">
                            <p>
                                Imaginez deux explorateurs qui se croisent au milieu de nulle part.
                                Ils ne se demandent pas "combien tu as payé pour être là ?",
                                mais "quelle est ton histoire ?".
                            </p>
                            <p>
                                <strong className="text-mmt-gold font-serif italic">MeetMeThere</strong>, c'est ce feu de camp numérique.
                                Un cercle de lumière où l'on dépose les masques,
                                où l'on partage un repas, une musique, un silence.
                            </p>
                            <p>
                                Ici, la monnaie n'est pas l'Euro, mais l'Attention que l'on porte à l'autre.
                            </p>
                        </div>
                        <div className="mt-10 flex gap-6 items-center">
                            <button onClick={onManifestClick} className="px-6 py-3 border border-white/20 text-white rounded-full font-serif italic hover:bg-white/10 transition-all duration-300 flex items-center gap-2">
                                <BookOpen size={18} className="text-mmt-gold" />
                                Lire le Manifeste
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
