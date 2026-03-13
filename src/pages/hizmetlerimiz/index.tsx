import React from "react";
import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const SITE_URL = "https://www.erbemakine.com";
import {
  PencilRuler,
  Calculator,
  Globe,
  Kanban,
  Wrench,
  RefreshCw,
  ChevronRight,
  Hexagon,
} from "lucide-react";
import Link from "next/link";

const Hizmetlerimiz = () => {
  const services = [
    {
      title: "Mühendislik & Projelendirme:",
      desc: "Konsept tasarımdan uygulama projelerine uçtan uca mimari ve teknik çizim.",
      icon: <PencilRuler className="w-7 h-7" strokeWidth={1.5} />,
    },
    {
      title: "Keşif & Planlama:",
      desc: "İmalat kalemlerinin detaylı metrajlandırılması, maliyet analizi ve iş programı oluşturma.",
      icon: <Calculator className="w-7 h-7" strokeWidth={1.5} />,
    },
    {
      title: "Tedarik Organizasyonu:",
      desc: "Kalite, süre & bütçe kriterlerine uygun malzeme ve ekipman tedarik zinciri yönetimi.",
      icon: <Globe className="w-7 h-7" strokeWidth={1.5} />,
    },
    {
      title: "Proje Yönetimi:",
      desc: "Süreçlerin adım adım planlanması ve ekipler arası koordinasyonun sağlanması.",
      icon: <Kanban className="w-7 h-7" strokeWidth={1.5} />,
    },
    {
      title: "Şantiye & Saha Yönetimi:",
      desc: "Çok disiplinli ekiplerin ve alt yüklenicilerin İSG normlarında koordinasyonu.",
      icon: <Wrench className="w-7 h-7" strokeWidth={1.5} />,
    },
    {
      title: "Anahtar Teslim Uygulama:",
      desc: "Projelerin sözleşme kapsamına tam uygunlukla inşası ve montajı.",
      icon: <RefreshCw className="w-7 h-7" strokeWidth={1.5} />,
    },
    {
      title: "Test & Sözleşme Yönetimi:",
      desc: "Devreye alma, performans doğrulama, hakediş ve resmi kabul süreçlerinin yürütülmesi.",
      icon: <ChevronRight className="w-7 h-7" strokeWidth={1.5} />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f9] pt-20 pb-12">
      <Head>
        {generateNextSeo({
          title: "Hizmetlerimiz",
          description:
            "Erbe Makine ve İnşaat'ın mühendislik, proje yönetimi, anahtar teslim uygulama ve daha fazlası dahil bütüncül hizmet kapsamını keşfedin.",
          canonical: `${SITE_URL}/hizmetlerimiz`,
        })}
      </Head>

      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#013186]">
          {/* Background image removed due to 404 error */}
        </div>
        <div className="relative z-10 bg-white/95 backdrop-blur-md px-4 py-6 md:px-20 rounded-[30px] md:rounded-[40px] shadow-2xl max-w-5xl text-center mx-6">
          <SectionTitle
            variant="page"
            align="center"
            title="Bütüncül Hizmet Kapsamımız"
            subtitle="Mühendislikten anahtar teslim uygulamalara kadar, projenizin her aşamasında Erbe kalitesi ve güvencesi."
            noMargin
          />
        </div>
      </section>

      {/* Grid Layout Section */}
      <section className="py-12 relative overflow-hidden">
        {/* Subtle background industrial pattern */}
        <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none transform translate-x-1/4 translate-y-1/4">
          <Hexagon className="w-[400px] h-[400px] md:w-[800px] md:h-[800px] text-[#013186] stroke-[0.1]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-wrap justify-center gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative bg-white border border-slate-200/80 rounded-[24px] md:rounded-[28px] p-4 pl-14 md:pl-16 shadow-md shadow-slate-200/50 hover:shadow-xl transition-all duration-300 md:ml-8 flex flex-col justify-center min-h-[140px] w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-2rem)] max-w-[420px] group"
              >
                {/* Hexagon Box Protruding Left */}
                <div className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 w-16 h-16 md:w-[84px] md:h-[84px] flex items-center justify-center shrink-0">
                  <div className="absolute inset-2 md:inset-3 bg-white rounded-full"></div>
                  <Hexagon
                    fill="white"
                    className="absolute inset-0 w-full h-full text-[#cbd5e1] group-hover:text-[#0171de] transition-colors duration-300 stroke-[1.5]"
                  />
                  <div className="relative text-[#0171de] scale-75 md:scale-100">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="font-bold text-[#013186] text-base md:text-[17px] mb-2 leading-tight group-hover:text-[#0171de] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              href="/projelerimiz"
              className="bg-[#0171de] hover:bg-[#015bb3] text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-all hover:-translate-y-1 active:scale-95 text-base"
            >
              Projelerimizi Keşfedin
            </Link>
            <Link
              href="/referanslarimiz"
              className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all hover:-translate-y-1 active:scale-95 text-base"
            >
              Referanslarımız
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hizmetlerimiz;
