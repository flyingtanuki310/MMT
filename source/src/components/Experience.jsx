import React from 'react';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-[#f5f5f4] overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                    {/* Polaroid 1 */}
                    <div className="bg-white p-4 pb-16 shadow-lg rotate-2 max-w-sm w-full relative">
                        <img
                            className="w-full aspect-[4/5] object-cover filter sepia-[0.3]"
                            alt="Friends"
                            src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2832&auto=format&fit=crop"
                        />
                        <p className="font-handwriting text-2xl text-stone-600 absolute bottom-6 left-0 right-0 text-center">
                            Soirée à Biarritz, 2024
                        </p>
                    </div>
                    {/* Polaroid 2 */}
                    <div className="bg-white p-4 pb-16 shadow-lg -rotate-3 max-w-sm w-full relative mt-12 md:mt-0">
                        <img
                            className="w-full aspect-[4/5] object-cover filter sepia-[0.3]"
                            alt="Dinner"
                            src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2940&auto=format&fit=crop"
                        />
                        <p className="font-handwriting text-2xl text-stone-600 absolute bottom-6 left-0 right-0 text-center">
                            Le fameux dîner de Pierre
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
