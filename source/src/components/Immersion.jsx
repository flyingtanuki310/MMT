import React from 'react';
import { useTranslation } from 'react-i18next';

const Immersion = () => {
    const { t } = useTranslation();
    return (
        <section id="immersion" className="py-24 bg-[#f5f5f4] relative overflow-hidden">
            {/* Decorative backgrounds */}
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e7e5e4] rounded-full blur-[100px] opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-mmt-sand rounded-full blur-[120px] opacity-10 pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
                <div className="mb-16">
                    <span className="font-handwriting text-mmt-gold text-4xl block mb-3 rotate-1">{t('immersion.tag')}</span>
                    <h2 className="font-serif text-4xl md:text-6xl text-mmt-dark leading-tight">{t('immersion.title')}</h2>
                </div>

                {/* Polaroid-style video frame */}
                <div className="relative inline-block w-full max-w-4xl">
                    <div className="bg-white p-4 pb-16 shadow-2xl rotate-1 transform transition-transform duration-500 hover:rotate-0 border border-stone-100 rounded-sm">
                        <div className="relative w-full aspect-video overflow-hidden bg-stone-100 shadow-inner">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/YmrfryG07E8?si=_0lVqtungpsfqaU3"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-16 flex items-center justify-center pointer-events-none">
                            <span className="font-handwriting text-2xl text-stone-400 opacity-80">{t('immersion.videoTag')}</span>
                        </div>
                    </div>
                    {/* Tape decoration */}
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-mmt-cream/80 backdrop-blur-sm -rotate-2 shadow-sm border border-mmt-sand/20 z-20"></div>
                </div>
            </div>
        </section>
    );
};

export default Immersion;
