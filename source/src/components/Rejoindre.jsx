import React from 'react';
import { Compass, Check, ArrowRight } from 'lucide-react';

const Rejoindre = () => {
    return (
        <section id="rejoindre" className="py-24 bg-[#f5f5f4] border-t border-stone-200 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <Compass size={48} strokeWidth={1} className="mx-auto text-mmt-gold mb-6 animate-spin-slow" />
                    <h2 className="font-serif text-4xl text-mmt-dark mb-6">Rejoindre le Cercle</h2>
                    <p className="text-stone-600 text-lg font-light max-w-2xl mx-auto">
                        Nous ouvrons les portes progressivement. Les premiers arrivés bâtissent les fondations.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Curieux */}
                    <div className="opacity-50 grayscale pointer-events-none p-8 border border-stone-200 rounded-2xl text-center">
                        <h3 className="font-serif text-2xl text-stone-500 mb-2">Curieux</h3>
                        <p className="text-sm text-stone-400 mb-6">Accès Découverte</p>
                        <span className="text-3xl font-serif text-stone-300 block mb-6">Gratuit</span>
                        <ul className="text-sm text-stone-400 space-y-3 mb-8">
                            <li>Accès Carte (Limité)</li>
                            <li>Pas d'hébergement</li>
                        </ul>
                        <button className="px-6 py-2 border border-stone-200 rounded-full text-stone-400 text-sm">Bientôt</button>
                    </div>

                    {/* Pionnier */}
                    <div className="relative bg-mmt-light p-8 md:p-10 shadow-2xl scale-105 z-10 transform rotate-1 border border-mmt-sand hover:rotate-0 transition-transform duration-300">
                        <div className="absolute inset-0 bg-mmt-sand/10 mix-blend-multiply pointer-events-none"></div>
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-mmt-gold to-transparent"></div>
                        <div className="relative z-10 text-center">
                            <div className="inline-block bg-mmt-gold text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">Lancement Imminent</div>
                            <h3 className="font-serif text-4xl text-mmt-dark mb-2">Pionnier</h3>
                            <p className="font-handwriting text-xl text-mmt-gold mb-8">Devenez Membre Fondateur</p>
                            <div className="mb-8 text-left">
                                <div className="flex justify-between text-xs font-bold text-mmt-gold mb-1">
                                    <span>Palier 1 : À venir</span>
                                    <span>0 / 500</span>
                                </div>
                                <div className="w-full h-3 bg-stone-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-mmt-gold w-[0%] rounded-full relative"></div>
                                </div>
                            </div>
                            <div className="space-y-4 mb-8 bg-[#f5f5f4]/50 p-4 rounded-lg border border-mmt-sand/30">
                                <div className="flex justify-between items-center text-mmt-dark font-bold">
                                    <span className="flex items-center gap-2"><Check size={14} /> 0 - 500</span>
                                    <span className="text-xl">5€ <span className="text-xs font-normal text-stone-500">/ an</span></span>
                                </div>
                                <div className="flex justify-between items-center text-stone-400 text-sm">
                                    <span className="flex items-center gap-2 decoration-stone-300 line-through">501 - 1000</span>
                                    <span className="grayscale">30€</span>
                                </div>
                                <div className="flex justify-between items-center text-stone-400 text-sm">
                                    <span className="flex items-center gap-2 decoration-stone-300 line-through">1001 - 1500</span>
                                    <span className="grayscale">60€</span>
                                </div>
                            </div>
                            <div className="text-sm text-stone-600 mb-6 italic">
                                <p><strong className="text-mmt-gold">-50% À VIE</strong> sur le renouvellement.</p>
                            </div>
                            <div className="mb-8 p-4 bg-stone-100/50 rounded-xl border border-stone-200 text-center">
                                <p className="text-xs uppercase tracking-widest text-stone-500 mb-1 font-sans">Tarif public post-Ulule</p>
                                <p className="font-serif text-2xl text-mmt-dark">120€ <span className="text-sm font-sans text-stone-500">/ an</span></p>
                            </div>
                            <a href="https://fr.ulule.com/meetmethere" className="w-full py-4 bg-mmt-dark text-mmt-light font-serif text-xl italic hover:bg-[#1c1917] transition-colors shadow-lg flex items-center justify-center gap-2">
                                Bientôt sur Ulule <ArrowRight size={18} />
                            </a>
                            <p className="mt-4 text-[10px] text-stone-400 uppercase tracking-widest">Soyez prêts • Places Limitées</p>
                        </div>
                    </div>

                    {/* Explorateur */}
                    <div className="opacity-50 grayscale pointer-events-none p-8 border border-stone-200 rounded-2xl text-center">
                        <h3 className="font-serif text-2xl text-stone-500 mb-2">Explorateur</h3>
                        <p className="text-sm text-stone-400 mb-6">Accès Voyageur</p>
                        <span className="text-3xl font-serif text-stone-300 block mb-6">96€</span>
                        <ul className="text-sm text-stone-400 space-y-3 mb-8 text-left mx-auto max-w-[200px]">
                            <li className="flex gap-2"><Check size={14} /> Soutien des 4 IA (Quatuor Réactif)</li>
                            <li className="flex gap-2"><Check size={14} /> Hébergement Disponible</li>
                            <li className="flex gap-2"><Check size={14} /> Activités Disponibles</li>
                        </ul>
                        <button className="px-6 py-2 border border-stone-200 rounded-full text-stone-400 text-sm">Bientôt</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rejoindre;
