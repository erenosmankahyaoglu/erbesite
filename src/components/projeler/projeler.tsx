import React from 'react';
import { Factory, Construction, Pipette, Waves, Droplets, Settings } from 'lucide-react';

const projects = [
    {
        title: "Termik Santral Revizyonları",
        description: "Ünite Genel Revizyonu, Boru Hattı Yenileme, Cephe Sacı İmalat ve Montajı.",
        icon: Factory,
    },
    {
        title: "Endüstriyel Temel ve Yapılar",
        description: "Değirmen Kurulumu Radye Temel İmalatı, Konteyner Bina ve Yardımcı Şantiye Tesisleri.",
        icon: Construction,
    },
    {
        title: "Mekanik ve Borulama Hatları",
        description: "Isıtma (Basınçlı Buhar) Hatları Yenileme, Kömür Çıkarıcı Muhafaza İmalatı, Yardımcı Kazan Çatı Paneli Montajı.",
        icon: Settings,
    },
    {
        title: "Altyapı ve Hidrolik Yapılar",
        description: "Betonarme İçme Suyu Deposu ve İsale Hattı Yapımı, Endüstriyel İşletme Su Depoları.",
        icon: Droplets,
    }
];

function Projects() {
    return (
        <section className="py-fluid-xl px-fluid-md bg-slate-50/50">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-extrabold text-renk1 mb-fluid-xl">
                    Öne Çıkan Projelerimiz
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-fluid-lg">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white p-fluid-lg rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(1,49,134,0.15)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center h-full border border-slate-100"
                        >
                            <div className="w-20 h-20 md:w-24 md:h-24 mb-6 md:mb-8 flex items-center justify-center text-renk2 group">
                                <project.icon size={56} strokeWidth={1} className="transition-transform duration-300 group-hover:scale-110" />
                            </div>

                            <h3 className="text-lg font-bold text-renk1 mb-4 leading-tight">
                                {project.title}
                            </h3>

                            <p className="text-slate-500 text-sm md:text-base leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
