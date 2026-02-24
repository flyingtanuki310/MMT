import React, { useState } from 'react';
import { X, Compass } from 'lucide-react';
import { createPortal } from 'react-dom';

const ManifestModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm" onClick={onClose}></div>

            {/* Modal */}
            <div className="bg-[#fdfcf8] w-full max-w-3xl h-[85vh] rounded-2xl shadow-2xl relative overflow-hidden flex flex-col z-10">
                {/* Header */}
                <div className="p-8 border-b border-stone-100 flex justify-between items-center bg-white sticky top-0 z-10">
                    <div>
                        <span className="font-handwriting text-mmt-gold text-xl rotate-[-2deg] inline-block mb-1">MeetMeThere OS</span>
                        <h2 className="font-serif text-2xl md:text-3xl text-[#1c1917] uppercase tracking-wide">Le Manifeste du Club Souverain</h2>
                        <p className="text-stone-500 italic font-serif text-sm">L'Humain comme ultime destination.</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-500 shadow-sm border border-stone-100">
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto p-8 md:p-12 space-y-12 text-stone-700 leading-relaxed font-light text-lg">
                    <section>
                        <h3 className="font-serif text-2xl text-mmt-dark uppercase tracking-wider mb-4">Le Paradoxe de Notre Époque : L'Épidémie de Solitude</h3>
                        <p className="mb-4 text-justify">
                            Nous vivons le drame silencieux de la modernité : jamais nous n'avons été aussi connectés technologiquement, et pourtant, jamais nous n'avons été aussi profondément isolés. L'Organisation Mondiale de la Santé classe désormais cette épidémie de solitude comme un risque de santé publique majeur, comparable aux ravages du tabagisme.
                        </p>
                        <p className="text-justify">
                            En France, des millions de personnes se déclarent en situation d'isolement relationnel. Les réseaux qui promettaient de nous rapprocher n'ont fait qu'ériger de nouvelles barrières, transformant l'Autre en un simple flux de revenus ou une commodité évaluable.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-serif text-2xl text-mmt-dark uppercase tracking-wider mb-4">La Mort du Voyage Authentique</h3>
                        <p className="mb-4 text-justify">
                            Face à cet isolement, le voyage aurait dû rester notre remède, notre pont vers l'inconnu. Mais le voyage moderne s'est aseptisé jusqu'à l'effacement total de la rencontre. L'industrialisation du tourisme a remplacé l'hospitalité par une logistique froide et transactionnelle.
                        </p>
                        <p className="text-justify">
                            Entre les chaînes d'hôtels standardisées aux couloirs interchangeables et les locations saisonnières gérées par des conciergeries automatiques équipées de boîtes à clés anonymes, la raison d'être originelle du déplacement a disparu. Nous avons imposé au voyage le logiciel toxique de la comptabilité marchande : on compte les nuits comme des denrées, on calcule le rendement à l'heure. Cette logique a tué la spontanéité, créant une fracture économique où l'évasion devient un luxe inaccessible pour la majorité, et où l'invité n'est plus qu'un client à facturer.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-serif text-2xl text-mmt-dark uppercase tracking-wider mb-4">Notre Réponse : Un Système d'Exploitation de la Bienveillance</h3>
                        <p className="mb-4 text-justify">
                            <strong>MeetMeThere OS</strong> n'est pas une énième application de réservation. C'est une réponse philosophique et technologique radicale à ce monde qui s'isole. Nous construisons le système d'exploitation d'une nouvelle Nation d'Hospitalité.
                        </p>
                        <p className="text-justify">
                            Nous croyons que la technologie ne doit pas être un mur, mais un « facilitateur de courage ». Elle doit agir comme un bouclier invisible et infaillible qui garantit la sécurité totale (via notre protocole d'impunité zéro) et la confiance absolue, permettant à chacun d'oser, à nouveau, franchir le seuil d'une porte étrangère.
                        </p>
                    </section>

                    <section>
                        <h3 className="font-serif text-2xl text-mmt-dark uppercase tracking-wider mb-4">Le Nouveau Paradigme : L'Hospitalité comme Moteur de Liberté</h3>
                        <p className="mb-6 text-justify">
                            Dans cet écosystème souverain, nous abolissons la froideur de la transaction financière pour embrasser l'économie de la Vitalité. L'accueil devient le carburant de sa propre liberté de mouvement.
                        </p>
                        <ul className="space-y-4 ml-4 border-l-2 border-mmt-gold/30 pl-4">
                            <li>
                                <strong className="text-mmt-gold">La fin du "Voyageur-Consommateur" :</strong> Place au "Citoyen-Contributeur". L'expérience ne s'achète plus, elle se mérite par l'engagement, la réciprocité et la générosité.
                            </li>
                            <li>
                                <strong className="text-mmt-gold">Le foyer comme port d'embarquement :</strong> Même immobile, l'acte d'accueillir transmute un simple logement (un Node) en une fenêtre sur le monde. En voyageant par procuration, le membre laisse les récits de ses invités redessiner les murs de son salon, tout en accumulant l'énergie sociale (la Vitalité) pour ses propres futures évasions.
                            </li>
                            <li>
                                <strong className="text-mmt-gold">L'Aventure plutôt que la nuitée :</strong> Nous rejetons la logique comptable de la nuit d'hôtel. Chaque échange, chaque projet partagé, chaque repas orchestré est une "Aventure" : une unité d'expérience indivisible dont la valeur dépend de l'intensité du lien humain, et non du temps qui passe.
                            </li>
                        </ul>
                    </section>

                    <section className="bg-mmt-gold/10 p-8 md:p-12 rounded-2xl relative overflow-hidden text-center mt-8">
                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl text-mmt-dark uppercase tracking-wider mb-6">Le Serment du Citoyen Souverain</h3>
                            <p className="mb-6 text-lg">
                                Rejoindre MeetMeThere, ce n'est pas télécharger un service, c'est adhérer à une vision du monde. C'est le retour de l'hospitalité véritable, où la technologie s'efface pour laisser toute la place à l'imprévu du réel et à la magie du hasard maîtrisé.
                            </p>
                            <p className="mb-8">
                                Ici, chaque échange, chaque silence complice partagé ou chaque collaboration improvisée au coin d'une table est une destination finale en soi. L'humanité, débarrassée des scories de la marchandisation, reste notre plus beau et notre plus vaste territoire à explorer.
                            </p>
                            <blockquote className="font-serif italic text-2xl text-[#1c1917] leading-relaxed relative">
                                <span className="text-6xl text-mmt-gold/20 absolute -top-4 -left-4 font-serif">"</span>
                                Je ne suis pas ici pour consommer l'espace de l'autre, mais pour enrichir son temps. Ma porte est le passeport d'un autre, son foyer est ma destination. La plus belle aventure est, et restera toujours, celle qui nous mène avec audace vers l'Autre.
                                <span className="text-6xl text-mmt-gold/20 absolute -bottom-10 -right-4 font-serif">"</span>
                            </blockquote>
                        </div>
                        <div className="absolute -right-20 -bottom-20 text-mmt-gold/5 rotate-12 pointer-events-none">
                            <Compass size={400} strokeWidth={0.5} />
                        </div>
                    </section>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ManifestModal;
