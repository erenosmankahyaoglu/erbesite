import React from "react";
import Head from "next/head";
import { generateNextSeo } from "next-seo/pages";
import Image from "next/image";
import { Shield, Target, Users, Award } from "lucide-react";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

const SITE_URL = "https://www.erbemakine.com";

const values = [
  {
    icon: Shield,
    title: "Güvenilirlik",
    desc: "Her projede kalite standartlarına bağlılık.",
  },
  {
    icon: Target,
    title: "Hassasiyet",
    desc: "Mühendislik çözümlerinde detaylara odaklanma.",
  },
  {
    icon: Users,
    title: "İş Birliği",
    desc: "Müşterilerimizle güçlü ve sürdürülebilir ortaklıklar.",
  },
  {
    icon: Award,
    title: "Deneyim",
    desc: "Yılların birikimi ile sektörde öncü adımlar.",
  },
];

export default function Hakkimizda() {
  return (
    <>
      <Head>
        {generateNextSeo({
          title: "Hakkımızda",
          description:
            "Erbe Makine ve İnşaat hakkında detaylı bilgi. Ağır sanayi ve mühendislik alanında yılların deneyimiyle faaliyet gösteren uzman kadromuzla tanışın.",
          canonical: `${SITE_URL}/hakkimizda`,
        })}
      </Head>

      <div className="bg-slate-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-renk2/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-renk1/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text */}
              <div className="space-y-2">
                <SectionTitle
                  variant="page"
                  align="left"
                  badge="Biz Kimiz?"
                  title={
                    <>
                      Geleceği Güvenle{" "}
                      <span className="text-renk2">İnşa Ediyoruz</span>
                    </>
                  }
                  subtitle="Erbe Makine ve İnşaat, ağır sanayi ve mühendislik çözümleri alanında yılların verdiği tecrübe ile faaliyet göstermektedir. Sektördeki yenilikleri yakından takip eden uzman kadromuzla, projelerinizde kalite ve güveni bir araya getiriyoruz."
                  noMargin
                />
              </div>

              {/* Right: Logo */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full max-w-sm aspect-square bg-white rounded-3xl shadow-xl border border-slate-100 flex items-center justify-center p-12 group">
                  <div className="absolute inset-0 bg-gradient-to-br from-renk2/5 to-renk1/5 rounded-3xl" />
                  <Image
                    src="/logo.svg"
                    alt="Erbe Logo"
                    width={280}
                    height={280}
                    className="relative z-10 w-full h-auto opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="relative bg-white rounded-3xl shadow-lg border border-slate-100 p-8 md:p-14">
              <div className="absolute top-0 left-8 w-1 h-16 bg-gradient-to-b from-renk2 to-renk1 rounded-full -translate-y-8" />
              <blockquote className="text-slate-600 text-base md:text-lg leading-relaxed text-center italic">
                &ldquo;Kurulduğumuz günden bu yana, modern mühendislik
                yaklaşımlarını geleneksel ustalıkla birleştirerek; mekanik
                hatlar, hidrolik yapılar ve endüstriyel tesisler konusunda öncü
                adımlar attık. Erbe Makine ve İnşaat olarak, sadece yapılar
                değil, aynı zamanda geleceğin endüstriyel standartlarını inşa
                ediyoruz.&rdquo;
              </blockquote>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-6">
          <div className="container mx-auto max-w-6xl">
            <SectionTitle
              title="Değerlerimiz"
              subtitle="Bizi biz yapan temel ilkeler"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-renk2/10 flex items-center justify-center text-renk2 group-hover:bg-renk2 group-hover:text-white transition-all duration-300">
                    <item.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-renk1 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
