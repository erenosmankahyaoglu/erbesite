import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

export default function Hakkimizda() {
    return (
        <>
            <Head>
                <title>Hakkımızda | Erbe Makine ve İnşaat</title>
                <meta name="description" content="Erbe Makine ve İnşaat hakkında detaylı bilgi. Biz kimiz, ne yapıyoruz?" />
            </Head>

            <div className="bg-slate-50 min-h-screen pt-28 pb-16 px-6 md:px-12 lg:px-24">
                <div className="container mx-auto max-w-6xl space-y-8 md:space-y-12">

                    {/* Top Section: Logo & Main Intro */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
                        {/* Left Box: Logo Placement */}
                        <div className="bg-[#f0f0f0] p-12 flex items-center justify-center min-h-[400px] rounded-2xl">
                            <div className="relative group">
                                <Image
                                    src="/logo.svg"
                                    alt="Erbe Logo"
                                    width={300}
                                    height={300}
                                    className="w-full h-auto opacity-90"
                                />
                            </div>
                        </div>

                        {/* Right Box: Title & Lead Text */}
                        <div className="bg-white p-6 md:p-12 lg:p-16 flex flex-col justify-center rounded-2xl shadow-sm overflow-hidden">
                            <h1 className="text-3xl md:text-4xl font-extrabold text-secondary leading-tight mb-4 text-center lg:text-left break-words">
                                Hakkımızda
                            </h1>
                            <h2 className="text-primary font-bold text-sm md:text-base mb-6 md:mb-8 uppercase tracking-widest text-center lg:text-left">
                                Geleceği Güvenle İnşa Ediyoruz
                            </h2>
                            <p className="text-slate-600 text-base md:text-lg leading-relaxed text-center lg:text-left">
                                Erbe Makine ve İnşaat, ağır sanayi ve mühendislik çözümleri alanında yılların verdiği tecrübe ile faaliyet göstermektedir.
                                Sektördeki yenilikleri yakından takip eden uzman kadromuzla, projelerinizde kalite ve güveni bir araya getiriyoruz.
                                Müşteri memnuniyetini odağımıza alarak, her projede mükemmelliği hedefliyoruz.
                            </p>
                        </div>
                    </div>

                    {/* Middle Section: Detailed Description (Full Width Block) */}
                    <div className="bg-white p-8 md:p-16 rounded-2xl shadow-sm">
                        <p className="text-slate-600 text-base md:text-lg leading-relaxed text-center max-w-4xl mx-auto">
                            Kurulduğumuz günden bu yana, modern mühendislik yaklaşımlarını geleneksel ustalıkla birleştirerek; mekanik hatlar, hidrolik yapılar
                            ve endüstriyel tesisler konusunda öncü adımlar attık. Erbe Makine ve İnşaat olarak, sadece yapılar değil, aynı zamanda
                            geleceğin endüstriyel standartlarını inşa ediyoruz. Sürdürülebilirlik ve emniyet, imzamızı attığımız her işin temelini oluşturur.
                        </p>
                    </div>

                    {/* Bottom Section: Summary & Socials Box */}
                    <div className="flex justify-end">
                        <div className="bg-white p-10 md:p-12 shadow-xl border-l-4 border-primary max-w-md rounded-2xl rounded-tl-none">
                            <p className="text-slate-600 leading-relaxed mb-8 italic">
                                "Güven, kalitenin temelidir. Biz Erbe Makine olarak her adımda bu güveni tesis ediyoruz."
                            </p>

                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary transition-all">
                                    <Linkedin size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary transition-all">
                                    <Facebook size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary transition-all">
                                    <Instagram size={18} />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-secondary hover:border-secondary transition-all">
                                    <Youtube size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
