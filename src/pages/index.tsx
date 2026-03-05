import React from 'react';
import Services from '@/components/Services/Services';
import MissionVision from '@/components/Misyon/m-v';
import Projects from '@/components/projeler/projeler';
import Image from 'next/image'; // Added Image import

export default function Home() {
    return (
        <>
            <section className="min-h-screen flex items-center bg-slate-50 pt-28 lg:pt-20">
                <div className="container mx-auto px-fluid-md lg:px-fluid-lg grid grid-cols-1 lg:grid-cols-2 gap-fluid-lg items-center">
                    <div className="space-y-fluid-md text-center lg:text-left">
                        <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-xs font-bold tracking-wider uppercase">
                            Geleceği İnşa Ediyoruz
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-tight">
                            Endüstriyel Gücün <span className="text-primary italic">İnşası.</span>
                        </h1>
                        <p className="text-base md:text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Erbe Makine ve İnşaat olarak, ağır sanayi sektöründe güvenilir çözümler ve
                            profesyonel mühendislik hizmetleri sunuyoruz.
                        </p>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                            <button className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-all hover:scale-105 active:scale-95 text-base min-h-[44px]">
                                Hizmetlerimizi Keşfedin
                            </button>
                            <button className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all text-base min-h-[44px]">
                                Referanslarımız
                            </button>
                        </div>
                    </div>
                    <div className="relative h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
                        <div className="absolute inset-0 bg-secondary/10 flex items-center justify-center p-fluid-lg">
                            {/* Buraya bir sanayi resmi gelebilir */}
                            <Image
                                src="/logo.svg"
                                alt="Erbe Logo"
                                width={500} // Added width
                                height={500} // Added height
                                className="w-full max-w-[300px] sm:max-w-md opacity-90 transition-opacity hover:opacity-100"
                                priority // Added priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            <Services />
            <MissionVision />
            <Projects />
        </>
    );
}
