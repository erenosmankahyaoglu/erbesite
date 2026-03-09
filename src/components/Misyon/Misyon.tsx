import React from "react";
import { Target, Eye } from "lucide-react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

function MissionVision() {
  return (
    <section className="py-12 px-4 bg-slate-50">
      <SectionTitle
        title="Misyon & Vizyon"
        subtitle="Geleceği şekillendiren değerlerimiz ve hedeflerimiz"
      />

      {/* Kartlar */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* MİSYON Kartı */}
        <div className="group relative flex flex-col h-full">
          {/* Üst Renkli Alan */}
          <div className="w-full bg-gradient-to-br from-renk2 to-[#015bb3] pt-6 pb-12 flex flex-col items-center text-white relative transition-all duration-500 group-hover:shadow-xl group-hover:shadow-renk2/30 rounded-t-2xl">
            {/* Dekoratif daireler (Ayrı container ile overflow yönetimi) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />
            </div>

            <h3 className="text-xl font-bold tracking-wider mb-2 z-10 uppercase">
              Misyon
            </h3>

            {/* İkon Daire */}
            <div className="absolute -bottom-10 z-20 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-renk2 transition-transform duration-500 group-hover:scale-110">
              <Target className="w-9 h-9 text-renk2" strokeWidth={1.5} />
            </div>
          </div>

          {/* Altındaki çizgi aksan */}
          <div className="w-full h-1.5 bg-renk1 z-10" />

          {/* Alt Beyaz Alan */}
          <div className="w-full bg-white shadow-md pt-14 pb-4 px-4 text-center transition-all duration-500 group-hover:shadow-lg flex-1 rounded-b-2xl">
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              İş ortaklarımıza en yüksek kalitede hizmet sunarak, sektörde
              güvenilir bir çözüm ortağı olmak. Yenilikçi yaklaşımlarla
              sürdürülebilir büyüme sağlamak ve topluma değer katmak temel
              misyonumuzdur.
            </p>
          </div>
        </div>

        {/* VİZYON Kartı */}
        <div className="group relative flex flex-col h-full mt-6 md:mt-0">
          {/* Üst Renkli Alan */}
          <div className="w-full bg-gradient-to-br from-renk1 to-renk1 pt-6 pb-12 flex flex-col items-center text-white relative transition-all duration-500 group-hover:shadow-xl group-hover:shadow-renk1/30 rounded-t-2xl">
            {/* Dekoratif daireler (Ayrı container ile overflow yönetimi) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-white/5" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-white/5" />
            </div>

            <h3 className="text-xl font-bold tracking-wider mb-2 z-10 uppercase">
              Vizyon
            </h3>

            {/* İkon Daire */}
            <div className="absolute -bottom-10 z-20 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-renk1 transition-transform duration-500 group-hover:scale-110">
              <Eye className="w-9 h-9 text-renk1" strokeWidth={1.5} />
            </div>
          </div>

          {/* Altındaki çizgi aksan */}
          <div className="w-full h-1.5 bg-renk2 z-10" />

          {/* Alt Beyaz Alan */}
          <div className="w-full bg-white shadow-md pt-14 pb-4 px-4 text-center transition-all duration-500 group-hover:shadow-lg flex-1 rounded-b-2xl">
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Sektörümüzde öncü ve yenilikçi bir marka olarak, ulusal ve
              uluslararası arenada tanınan, sürdürülebilir çözümler üreten lider
              bir kuruluş olmayı hedefliyoruz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
