import React, { useState } from 'react';
import { X, Compass } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useTranslation, Trans } from 'react-i18next';

const ManifestModal = ({ isOpen, onClose }) => {
    const { t } = useTranslation();

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
                        <span className="font-handwriting text-mmt-gold text-xl rotate-[-2deg] inline-block mb-1">{t('manifest.tag')}</span>
                        <h2 className="font-serif text-2xl md:text-3xl text-[#1c1917] uppercase tracking-wide">{t('manifest.title')}</h2>
                        <p className="text-stone-500 italic font-serif text-sm">{t('manifest.subtitle')}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-stone-100 rounded-full transition-colors text-stone-500 shadow-sm border border-stone-100">
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="overflow-y-auto p-8 md:p-12 space-y-12 text-stone-700 leading-relaxed font-light text-lg">
                    <section>
                        <h3 className="font-serif text-2xl text-mmt-dark uppercase tracking-wider mb-4">{t('manifest.s1_title')}</h3>
                        <p className="mb-4 text-justify">
                            {t('manifest.s1_p1')}
                        </p>
                        <p className="text-justify">
                            {t('manifest.s1_p2')}
                        </p>
                    </section>

                    <section>
                        <h3 className="font-serif text-2xl text-mmt-dark uppercase tracking-wider mb-4">{t('manifest.s2_title')}</h3>
                        <p className="mb-4 text-justify">
                            {t('manifest.s2_p1')}
                        </p>
                        <p className="text-justify">
                            {t('manifest.s2_p2')}
                        </p>
                    </section>

                    <section>
                        <h3 className="font-serif text-2xl text-mmt-dark uppercase tracking-wider mb-4">{t('manifest.s3_title')}</h3>
                        <p className="mb-4 text-justify">
                            <Trans i18nKey="manifest.s3_p1" components={[<strong />]} />
                        </p>
                        <p className="text-justify">
                            {t('manifest.s3_p2')}
                        </p>
                    </section>

                    <section>
                        <h3 className="font-serif text-2xl text-mmt-dark uppercase tracking-wider mb-4">{t('manifest.s4_title')}</h3>
                        <p className="mb-6 text-justify">
                            {t('manifest.s4_p1')}
                        </p>
                        <ul className="space-y-4 ml-4 border-l-2 border-mmt-gold/30 pl-4">
                            <li>
                                <Trans i18nKey="manifest.s4_li1" components={[<strong className="text-mmt-gold" />]} />
                            </li>
                            <li>
                                <Trans i18nKey="manifest.s4_li2" components={[<strong className="text-mmt-gold" />]} />
                            </li>
                            <li>
                                <Trans i18nKey="manifest.s4_li3" components={[<strong className="text-mmt-gold" />]} />
                            </li>
                        </ul>
                    </section>

                    <section className="bg-mmt-gold/10 p-8 md:p-12 rounded-2xl relative overflow-hidden text-center mt-8">
                        <div className="relative z-10">
                            <h3 className="font-serif text-2xl text-mmt-dark uppercase tracking-wider mb-6">{t('manifest.s5_title')}</h3>
                            <p className="mb-6 text-lg">
                                {t('manifest.s5_p1')}
                            </p>
                            <p className="mb-8">
                                {t('manifest.s5_p2')}
                            </p>
                            <blockquote className="font-serif italic text-2xl text-[#1c1917] leading-relaxed relative">
                                <span className="text-6xl text-mmt-gold/20 absolute -top-4 -left-4 font-serif">"</span>
                                {t('manifest.quote')}
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
