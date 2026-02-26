import React from 'react';
import { MapPin, Coffee, Globe, Wind, Sun, Compass } from 'lucide-react';
import { useTranslation, Trans } from 'react-i18next';
import hubertImg from '../assets/romain-CFzwc-Iu.png';
import romainImg from '../assets/hubert-D4TCNl1Q.png';

const Team = ({ onJoinClick }) => {
    const { t } = useTranslation();
    return (
        <section id="equipe" className="py-24 bg-[#f5f5f4] border-t border-stone-200 scroll-mt-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="font-handwriting text-mmt-gold text-4xl block mb-2">{t('team.tag')}</span>
                    <h2 className="font-serif text-5xl text-mmt-dark">{t('team.title')}</h2>
                </div>
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Romain */}
                    <div className="bg-white p-8 shadow-xl relative rotate-1 transition-transform duration-500 hover:rotate-0">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/50 backdrop-blur-sm -rotate-2 transform shadow-sm border border-yellow-200/50 z-10"></div>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-1/2">
                                <div className="mx-auto w-40 h-40 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative shadow-md border-4 border-white mb-4">
                                    <img alt="Romain Avon" className="w-full h-full object-cover" src={romainImg} />
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="font-handwriting text-2xl text-[#1c1917] mb-0">Romain</p>
                                    <p className="font-serif text-[10px] uppercase tracking-widest text-mmt-gold font-bold">{t('team.romain_role')}</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <blockquote className="italic text-stone-600 mb-6 font-serif text-lg leading-snug">
                                    {t('team.romain_quote')}
                                </blockquote>
                                <ul className="space-y-4 text-sm text-stone-600 font-light">
                                    <li className="flex gap-2">
                                        <MapPin size={14} className="text-mmt-gold shrink-0 mt-1" />
                                        <span><Trans i18nKey="team.romain_location" components={[<strong />]} /></span>
                                    </li>
                                    <li className="flex gap-2">
                                        <Coffee size={14} className="text-mmt-gold shrink-0 mt-1" />
                                        <span><Trans i18nKey="team.romain_exp" components={[<strong />]} /></span>
                                    </li>
                                    <li className="flex gap-2">
                                        <Globe size={14} className="text-mmt-gold shrink-0 mt-1" />
                                        <span><Trans i18nKey="team.romain_vision" components={[<strong />]} /></span>
                                    </li>
                                </ul>
                                <a href="https://www.linkedin.com/in/romainavon/" target="_blank" rel="noreferrer" className="inline-block mt-6 text-mmt-gold font-serif italic border-b border-mmt-gold hover:text-mmt-dark hover:border-mmt-dark transition-colors">
                                    {t('team.romain_link')}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Hubert */}
                    <div className="bg-white p-8 shadow-xl relative -rotate-1 transition-transform duration-500 hover:rotate-0">
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-100/50 backdrop-blur-sm rotate-2 transform shadow-sm border border-yellow-200/50 z-10"></div>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className="w-full md:w-1/2">
                                <div className="mx-auto w-40 h-40 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative shadow-md border-4 border-white mb-4">
                                    <img alt="Hubert Fromont-Riquet" className="w-full h-full object-cover" src={hubertImg} />
                                </div>
                                <div className="mt-4 text-center">
                                    <p className="font-handwriting text-2xl text-[#1c1917] mb-0">Hubert</p>
                                    <p className="font-serif text-[10px] uppercase tracking-widest text-mmt-gold font-bold">{t('team.hubert_role')}</p>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <blockquote className="italic text-stone-600 mb-6 font-serif text-lg leading-snug">
                                    {t('team.hubert_quote')}
                                </blockquote>
                                <ul className="space-y-4 text-sm text-stone-600 font-light">
                                    <li className="flex gap-2">
                                        <Wind size={14} className="text-mmt-gold shrink-0 mt-1" />
                                        <span><Trans i18nKey="team.hubert_exp1" components={[<strong />]} /></span>
                                    </li>
                                    <li className="flex gap-2">
                                        <Sun size={14} className="text-mmt-gold shrink-0 mt-1" />
                                        <span><Trans i18nKey="team.hubert_exp2" components={[<strong />]} /></span>
                                    </li>
                                    <li className="flex gap-2">
                                        <Compass size={14} className="text-mmt-gold shrink-0 mt-1" />
                                        <span><Trans i18nKey="team.hubert_mission" components={[<strong />]} /></span>
                                    </li>
                                </ul>
                                <button onClick={onJoinClick} className="inline-block mt-6 text-mmt-gold font-serif italic border-b border-mmt-gold hover:text-mmt-dark hover:border-mmt-dark transition-colors">
                                    {t('team.hubert_link')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
