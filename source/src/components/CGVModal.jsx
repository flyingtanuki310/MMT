import React from 'react';
import { X } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useTranslation, Trans } from 'react-i18next';

const CGVModal = ({ isOpen, onClose }) => {
    const { t } = useTranslation();

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
            <div className="absolute inset-0 bg-stone-900/80 backdrop-blur-sm" onClick={onClose}></div>
            <div className="bg-[#fdfcf8] w-full max-w-3xl h-[85vh] rounded-2xl shadow-2xl relative overflow-hidden flex flex-col z-10">
                <div className="p-8 border-b border-stone-100 flex justify-between items-center bg-white sticky top-0 z-10">
                    <div>
                        <span className="font-handwriting text-mmt-gold text-xl rotate-[-2deg] inline-block mb-1">{t('cgv.tag')}</span>
                        <h2 className="font-serif text-2xl md:text-3xl text-[#1c1917] uppercase tracking-wide">{t('cgv.title')}</h2>
                        <p className="text-stone-500 italic font-serif text-sm">{t('cgv.last_update')}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-500 shadow-sm border border-stone-100">
                        <X size={24} />
                    </button>
                </div>
                <div className="overflow-y-auto p-8 md:p-12 space-y-10 text-stone-700 leading-relaxed font-light text-base">
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">{t('cgv.a1_title')}</h3>
                        <p className="text-justify">{t('cgv.a1_p')}</p>
                    </section>
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">{t('cgv.a2_title')}</h3>
                        <p className="text-justify">{t('cgv.a2_p')}</p>
                    </section>
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">{t('cgv.a3_title')}</h3>
                        <p className="mb-3 text-justify">{t('cgv.a3_p')}</p>
                        <ul className="space-y-2 ml-4 border-l-2 border-mmt-gold/30 pl-4">
                            <li><Trans i18nKey="cgv.a3_li1" components={[<strong className="text-mmt-gold" />]} /></li>
                            <li><Trans i18nKey="cgv.a3_li2" components={[<strong className="text-mmt-gold" />]} /></li>
                            <li><Trans i18nKey="cgv.a3_li3" components={[<strong className="text-mmt-gold" />]} /></li>
                            <li><Trans i18nKey="cgv.a3_li4" components={[<strong className="text-mmt-gold" />]} /></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">{t('cgv.a4_title')}</h3>
                        <p className="text-justify">{t('cgv.a4_p')}</p>
                    </section>
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">{t('cgv.a5_title')}</h3>
                        <p className="text-justify">{t('cgv.a5_p')}</p>
                    </section>
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">{t('cgv.a6_title')}</h3>
                        <p className="text-justify">{t('cgv.a6_p')}</p>
                    </section>
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">{t('cgv.a7_title')}</h3>
                        <p className="text-justify">{t('cgv.a7_p')}</p>
                    </section>
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">{t('cgv.a8_title')}</h3>
                        <p className="text-justify">{t('cgv.a8_p')}</p>
                    </section>
                    <section>
                        <h3 className="font-serif text-xl text-mmt-dark uppercase tracking-wider mb-3">{t('cgv.a9_title')}</h3>
                        <p className="text-justify">{t('cgv.a9_p')}</p>
                    </section>
                    <section className="bg-stone-100 p-6 rounded-xl text-center">
                        <p className="text-sm text-stone-500">
                            <Trans i18nKey="cgv.footer" components={[<br />]} />
                        </p>
                    </section>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default CGVModal;
