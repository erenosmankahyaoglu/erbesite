import React from "react";
import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";

const SITE_URL = "https://www.erbemakine.com";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const Referanslarimiz = () => {
  return (
    <>
      <Head>
        {generateNextSeo({
          title: "Referanslarımız",
          description:
            "Soma ve Kangal Termik Santrali, Sivas İl Özel İdaresi, Demir Export ve daha fazlası ile gerçekleştirdiğimiz referans projelerimizi inceleyin.",
          canonical: `${SITE_URL}/referanslarimiz`,
        })}
      </Head>

      <div className="bg-slate-50 min-h-screen pt-28 pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <SectionTitle
            variant="page"
            align="left"
            title="Referanslarımız"
            subtitle="Sektördeki tecrübemiz ve başarıyla tamamladığımız projelerle güven inşa ediyoruz. Uzmanlık alanlarımıza göre şekillendirdiğimiz referans gruplarımız aşağıdadır."
          />

          {/* Fluid Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Soma Termik Santral",
                image: "/references/soma_termik_santral_referans.webp",
                desc: "Süreç yönetimi ve mekanik bakım projelerimizle operasyonel mükemmelliğe destek veriyoruz.",
              },
              {
                title: "Kangal Termik Santral",
                image: "/references/kangal_termik_santral_referans.webp",
                desc: "Enerji üretim tesislerinde revizyon ve bakım hizmetleri ile enerji sürekliliği sağlıyoruz.",
              },
              {
                title: "Sivas İl Özel İdaresi",
                image: "/references/sivas_il_ozel_idaresi_referans.webp",
                desc: "Kamu altyapı ve sosyal hizmet projelerinde güvenilir inşaat çözümlerimizle yer alıyoruz.",
              },
              {
                title: "Demir Export",
                image: "/references/demir_export_referans.webp",
                desc: "Madencilik sahalarında tesis kurulumu ve endüstriyel revizyon projelerini başarıyla yürütüyoruz.",
              },
              {
                title: "Aksu Group",
                image: "/references/aksu_group_referans.webp",
                desc: "Endüstriyel tesislerde proje yönetimi ve mühendislik çözümleri alanında güvenilir iş ortağımız.",
              },
            ].map((ref, i) => (
              <div
                key={i}
                className="group bg-white p-6 rounded-3xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="aspect-video bg-white rounded-2xl mb-4 flex items-center justify-center overflow-hidden border border-slate-50 p-6 md:p-8 relative">
                  {ref.image ? (
                    <Image
                      src={ref.image}
                      alt={ref.title}
                      width={300}
                      height={200}
                      className="max-h-full max-w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="bg-slate-100 w-full h-full flex items-center justify-center">
                      <span className="text-slate-300 font-bold uppercase tracking-widest text-xs">
                        [Görsel - {i + 1}]
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-lg md:text-xl font-bold text-renk1">
                    {ref.title}
                  </h2>
                  <div className="w-10 h-10 min-w-[40px] rounded-full bg-slate-50 flex items-center justify-center text-renk2 group-hover:bg-renk2 group-hover:text-white transition-all">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
                <p className="text-sm md:text-base text-slate-500 leading-relaxed mt-auto">
                  {ref.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Referanslarimiz;
