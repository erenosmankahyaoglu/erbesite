import React from "react";
import { Factory, Construction, Droplets, Settings } from "lucide-react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const projects = [
  {
    title: "Termik Santral Revizyonları",
    description:
      "Enerji üretim tesislerinde ünite genel revizyonundan boru hattı yenilemeye, cephe sacı imalat ve montajına kadar kapsamlı mühendislik çözümleri sunuyoruz.",
    icon: Factory,
  },
  {
    title: "Endüstriyel Temel ve Yapılar",
    description:
      "Radye temel imalatından konteyner bina inşaatına kadar, endüstriyel tesislerin altyapı ve üstyapı ihtiyaçlarını anahtar teslim karşılıyoruz.",
    icon: Construction,
  },
  {
    title: "Mekanik ve Borulama Hatları",
    description:
      "Basınçlı buhar hatları, kömür çıkarıcı muhafaza sistemleri ve kazan paneli montajı gibi kritik mekanik projelerde güvenilir çözümler üretiyoruz.",
    icon: Settings,
  },
  {
    title: "Altyapı ve Hidrolik Yapılar",
    description:
      "Betonarme içme suyu depoları ve isale hatlarından endüstriyel su depolarına kadar, su yapıları alanında uçtan uca proje yönetimi sağlıyoruz.",
    icon: Droplets,
  },
];

function Projelerimiz() {
  return (
    <section className="py-12 px-4 bg-slate-50/50">
      <div className="container mx-auto max-w-7xl">
        <SectionTitle
          title="Öne Çıkan Projelerimiz"
          subtitle="Başarıyla tamamladığımız endüstriyel projelerimiz"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_20px_60px_-15px_rgba(1,49,134,0.15)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center h-full border border-slate-100 cursor-pointer"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mb-6 md:mb-8 flex items-center justify-center text-renk2 group">
                <project.icon
                  size={56}
                  strokeWidth={1}
                  className="transition-transform duration-300 group-hover:scale-110"
                />
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

export default Projelerimiz;
