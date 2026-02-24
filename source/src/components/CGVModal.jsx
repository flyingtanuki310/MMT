import React from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';

const CGVModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
            <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm" onClick={onClose}></div>
            <div className="bg-[#fdfcf8] w-full max-w-3xl h-[85vh] rounded-2xl shadow-2xl relative overflow-hidden flex flex-col z-10">
                <div className="p-8 border-b border-stone-100 flex justify-between items-center bg-white sticky top-0 z-10">
                    <div>
                        <span className="font-handwriting text-mmt-gold text-xl rotate-[-2deg] inline-block mb-1">MeetMeThere</span>
                        <h2 className="font-serif text-2xl md:text-3xl text-[#1c1917] uppercase tracking-wide">Conditions Générales de Vente</h2>
                        <p className="text-stone-500 italic font-serif text-sm">Dernière mise à jour : Février 2026</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-500 shadow-sm border border-stone-100">
                        <X size={24} />
                    </button>
                </div>
                <div className="overflow-y-auto p-8 md:p-12 space-y-10 text-stone-700 leading-relaxed font-light text-base">
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">Article 1 – Objet</h3>
                        <p className="text-justify">Les présentes Conditions Générales de Vente (CGV) régissent l'ensemble des relations entre MeetMeThere (ci-après "la Plateforme") et ses utilisateurs (ci-après "les Membres"). Toute inscription sur la Plateforme implique l'acceptation pleine et entière des présentes CGV.</p>
                    </section>
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">Article 2 – Description du Service</h3>
                        <p className="text-justify">MeetMeThere est une plateforme communautaire de mise en relation entre voyageurs et hôtes, fondée sur un système d'échange non-monétaire basé sur des "Cœurs". La Plateforme facilite les rencontres humaines authentiques à travers l'hospitalité partagée.</p>
                    </section>
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">Article 3 – Inscription et Adhésion</h3>
                        <p className="mb-3 text-justify">L'accès aux services de la Plateforme nécessite une inscription préalable et le paiement d'une cotisation annuelle dont le montant varie selon le palier d'adhésion :</p>
                        <ul className="space-y-2 ml-4 border-l-2 border-mmt-gold/30 pl-4">
                            <li><strong className="text-mmt-gold">Pionnier (Palier 1) :</strong> 5€/an pour les 500 premiers membres fondateurs.</li>
                            <li><strong className="text-mmt-gold">Palier 2 :</strong> 30€/an (membres 501 à 1000).</li>
                            <li><strong className="text-mmt-gold">Palier 3 :</strong> 60€/an (membres 1001 à 1500).</li>
                            <li><strong className="text-mmt-gold">Explorateur :</strong> 96€/an (tarif standard).</li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">Article 4 – Le Système de Cœurs</h3>
                        <p className="text-justify">Le système de Cœurs constitue l'unité d'échange interne à la Plateforme. Un Cœur est gagné lorsqu'un Membre accueille un voyageur, et dépensé lorsqu'il séjourne chez un autre Membre. Le Demi-Cœur (½) s'applique aux prestations légères (parking, canapé). Les Cœurs ne sont ni remboursables, ni convertibles en monnaie.</p>
                    </section>
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">Article 5 – Vérification d'Identité</h3>
                        <p className="text-justify">Chaque Membre s'engage à fournir des informations exactes lors de son inscription. La Plateforme se réserve le droit de procéder à une vérification d'identité et de refuser ou révoquer toute inscription ne respectant pas ses critères de confiance.</p>
                    </section>
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">Article 6 – Responsabilités</h3>
                        <p className="text-justify">MeetMeThere agit en qualité d'intermédiaire technique. La Plateforme ne saurait être tenue responsable des relations entre Membres, des conditions d'hébergement, ni des dommages directs ou indirects résultant de l'utilisation du service.</p>
                    </section>
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">Article 7 – Droit de Rétractation</h3>
                        <p className="text-justify">Conformément à l'article L221-18 du Code de la consommation, tout Membre dispose d'un délai de 14 jours à compter de la date de souscription pour exercer son droit de rétractation, sans avoir à justifier de motif.</p>
                    </section>
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">Article 8 – Protection des Données</h3>
                        <p className="text-justify">MeetMeThere s'engage à protéger les données personnelles de ses Membres conformément au Règlement Général sur la Protection des Données (RGPD). Les données collectées sont nécessaires au fonctionnement du service et ne sont jamais cédées à des tiers.</p>
                    </section>
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">Article 9 – Droit Applicable</h3>
                        <p className="text-justify">Les présentes CGV sont soumises au droit français. Tout litige relatif à leur interprétation ou à leur exécution relève de la compétence exclusive des tribunaux français.</p>
                    </section>
                    <section className="bg-stone-100 p-6 rounded-xl text-center">
                        <p className="text-sm text-stone-500">
                            MeetMeThere • Mougins, France<br />
                            Contact : contact@meetmethere.fr
                        </p>
                    </section>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default CGVModal;
