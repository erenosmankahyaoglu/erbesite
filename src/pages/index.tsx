import React from "react";
import Services from "@/components/Services/Services";
import MissionVision from "@/components/Misyon/Misyon";
import Projelerimiz from "@/components/Projelerimiz/Projelerimiz";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center bg-slate-50 pt-28 lg:pt-20">
        <div className="container mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-4 text-center lg:text-left">
            <SectionTitle
              variant="page"
              align="left"
              badge="Geleceği İnşa Ediyoruz"
              title={
                <>
                  Endüstriyel Gücün{" "}
                  <span className="text-renk2 italic">İnşası.</span>
                </>
              }
              subtitle="Erbe Makine ve İnşaat olarak, ağır sanayi sektöründe güvenilir çözümler ve profesyonel mühendislik hizmetleri sunuyoruz."
              noMargin
            />
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <Link
                href="/hizmetlerimiz"
                className="bg-renk2 hover:bg-[#015bb3] text-white px-8 py-4 rounded-xl font-bold shadow-xl transition-all hover:scale-105 active:scale-95 text-base min-h-[44px] flex items-center"
              >
                Hizmetlerimizi Keşfedin
              </Link>
              <Link
                href="/referanslarimiz"
                className="bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all text-base min-h-[44px] flex items-center"
              >
                Referanslarımız
              </Link>
            </div>
          </div>
          <div className="relative h-[180px] sm:h-[280px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-3xl shadow-2xl">
            <div className="absolute inset-0 bg-renk1/10 flex items-center justify-center p-8 sm:p-6">
              {/* Buraya bir sanayi resmi gelebilir */}
              <Image
                src="/logo.svg"
                alt="Erbe Logo"
                width={500}
                height={500}
                className="w-full max-w-[150px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-md opacity-90 transition-opacity hover:opacity-100"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <Services />
      <MissionVision />
      <Projelerimiz />
    </>
  );
}
