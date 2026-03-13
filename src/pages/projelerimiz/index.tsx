import React from "react";
import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";

const SITE_URL = "https://www.erbemakine.com";
import Link from "next/link";
import {
  Factory,
  Construction,
  Settings,
  Droplets,
  Hammer,
  Flame,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const projectCategories = [
  {
    title: "Termik Santral Revizyonları",
    icon: Factory,
    color: "renk1",
    items: [
      "Ünite Genel Revizyonu",
      "Boru Hattı Yenileme",
      "Cephe Sacı İmalat ve Montajı",
      "Kazan Bakım ve Onarım",
    ],
    description:
      "Enerji üretim tesislerinde kapsamlı revizyon ve modernizasyon projeleri yürütüyoruz.",
  },
  {
    title: "Endüstriyel Temel ve Yapılar",
    icon: Construction,
    color: "renk2",
    items: [
      "Radye Temel İmalatı",
      "Konteyner Bina İnşaatı",
      "Yardımcı Şantiye Tesisleri",
      "Değirmen Kurulum Projeleri",
    ],
    description:
      "Radye temel imalatından konteyner bina inşaatına kadar endüstriyel tesislerin altyapısını oluşturuyoruz.",
  },
  {
    title: "Mekanik ve Borulama Hatları",
    icon: Settings,
    color: "renk1",
    items: [
      "Basınçlı Buhar Hatları Yenileme",
      "Kömür Çıkarıcı Muhafaza İmalatı",
      "Kazan Çatı Paneli Montajı",
      "Endüstriyel Boru Sistemleri",
    ],
    description:
      "Kritik mekanik projelerde basınçlı sistemlerden boru hatlarına güvenilir çözümler üretiyoruz.",
  },
  {
    title: "Altyapı ve Hidrolik Yapılar",
    icon: Droplets,
    color: "renk2",
    items: [
      "Betonarme İçme Suyu Deposu",
      "İsale Hattı Yapımı",
      "Endüstriyel Su Depoları",
      "Drenaj ve Kanalizasyon Sistemleri",
    ],
    description:
      "Su yapıları alanında uçtan uca proje yönetimi ve mühendislik çözümleri sağlıyoruz.",
  },
];

const stats = [
  { value: "40+", label: "Tamamlanan Proje" },
  { value: "10+", label: "Yıllık Deneyim" },
  { value: "30+", label: "Uzman Kadro" },
  { value: "4", label: "Faaliyet Alanı" },
];

const ProjelerimizPage = () => {
  return (
    <>
      <Head>
        {generateNextSeo({
          title: "Projelerimiz",
          description:
            "Termik santral revizyonları, endüstriyel yapılar, mekanik borulama ve altyapı projelerinde 50'den fazla başarılı proje deneyimi.",
          canonical: `${SITE_URL}/projelerimiz`,
        })}
      </Head>

      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-4 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-renk2/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-renk1/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="container mx-auto max-w-7xl relative z-10">
            <SectionTitle
              variant="page"
              align="left"
              badge="Proje Portföyümüz"
              title={
                <>
                  Endüstriyel <span className="text-renk2">Uzmanlığımız,</span>{" "}
                  Somut Sonuçlarımız
                </>
              }
              subtitle="Ağır sanayi, enerji üretimi ve altyapı sektörlerinde yılların verdiği tecrübeyle tamamladığımız proje kategorilerimizi keşfedin."
            />
          </div>
        </section>

        {/* Stats Bar */}
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-3xl md:text-4xl font-extrabold text-renk2 mb-1">
                    {stat.value}
                  </p>
                  <p className="text-slate-500 text-sm font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Categories Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {projectCategories.map((category, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-500 flex flex-col"
                >
                  {/* Card Header */}
                  <div
                    className={`p-6 md:p-8 ${i % 2 === 0 ? "bg-gradient-to-r from-renk1 to-renk1/90" : "bg-gradient-to-r from-renk2 to-renk2/90"} text-white relative overflow-hidden`}
                  >
                    <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/5" />
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-white/5" />

                    <div className="relative z-10 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <category.icon size={28} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold leading-tight">
                          {category.title}
                        </h3>
                        <p className="text-white/70 text-sm mt-1">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Body — Checklist */}
                  <div className="p-6 md:p-8 flex-1">
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                      Kapsam
                    </p>
                    <ul className="space-y-3">
                      {category.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-3 text-slate-600 text-sm md:text-base"
                        >
                          <CheckCircle2
                            size={18}
                            className="text-renk2 mt-0.5 flex-shrink-0"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="relative bg-renk1 rounded-3xl p-8 md:p-14 text-center text-white overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-renk2/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

              <div className="relative z-10">
                <Hammer
                  size={40}
                  className="mx-auto mb-4 text-white/50"
                  strokeWidth={1}
                />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Projeniz İçin Çözüm Ortağınız
                </h2>
                <p className="text-white/70 max-w-lg mx-auto mb-8 text-base leading-relaxed">
                  Her proje benzersizdir. Sizin ihtiyaçlarınıza özel mühendislik
                  çözümleri için bizimle iletişime geçin.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link
                    href="/iletisim"
                    className="bg-renk2 hover:bg-[#015bb3] text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-all hover:scale-[1.02] active:scale-95 flex items-center gap-2 min-h-[44px]"
                  >
                    Teklif Alın
                    <ArrowRight size={18} />
                  </Link>
                  <Link
                    href="/referanslarimiz"
                    className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all min-h-[44px]"
                  >
                    Referanslarımız
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjelerimizPage;
