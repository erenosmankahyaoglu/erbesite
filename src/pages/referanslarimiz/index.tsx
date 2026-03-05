import React from 'react';
import Head from 'next/head';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const Referanslarimiz = () => {
    return (
        <>
            <Head>
                <title>Referanslarımız | Erbe Makine ve İnşaat</title>
                <meta name="description" content="Erbe Makine ve İnşaat'ın başarıyla tamamladığı projeler ve referansları." />
            </Head>

            <div className="bg-slate-50 min-h-screen pt-28 pb-fluid-xl px-fluid-md">
                <div className="container mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="text-center mb-fluid-xl lg:text-left">
                        <h1 className="text-3xl md:text-4xl lg:text-4xl font-extrabold text-secondary leading-tight">
                            Referanslarımız
                        </h1>
                        <p className="text-base md:text-lg text-slate-500 mt-4 max-w-2xl leading-relaxed">
                            Sektördeki tecrübemiz ve başarıyla tamamladığımız projelerle güven inşa ediyoruz.
                            Uzmanlık alanlarımıza göre şekillendirdiğimiz referans gruplarımız aşağıdadır.
                        </p>
                    </div>

                    {/* Fluid Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fluid-lg">

                        {[
                            { title: "Soma Termik Santral", image: "/references/soma.png", desc: "Süreç yönetimi ve mekanik bakım projelerimizle operasyonel mükemmelliğe destek veriyoruz.", isNextImage: true },
                            { title: "Kangal Termik Santral", image: "/references/kangal.png", desc: "Enerji üretim tesislerinde revizyon ve bakım hizmetleri ile enerji sürekliliği sağlıyoruz.", isNextImage: false },
                            { title: "Sivas İl Özel İdaresi", image: "/references/sivas.jpg", desc: "Kamu altyapı ve sosyal hizmet projelerinde güvenilir inşaat çözümlerimizle yer alıyoruz.", isNextImage: false },
                            { title: "Demir Export", image: "/references/demir_export.png", desc: "Madencilik sahalarında tesis kurulumu ve endüstriyel revizyon projelerini başarıyla yürütüyoruz.", isNextImage: false },
                            { title: "Aksu Group", image: null, desc: "5. referansımız için logo ve kısa tanıtım bilgisi buraya eklenecek.", isNextImage: false }
                        ].map((ref, i) => (
                            <div key={i} className="group bg-white p-fluid-lg rounded-3xl shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
                                <div className="aspect-video bg-white rounded-2xl mb-fluid-md flex items-center justify-center overflow-hidden border border-slate-50 p-6 md:p-8">
                                    {ref.image ? (
                                        ref.isNextImage ? (
                                            <Image src={ref.image} alt={ref.title} width={300} height={200} className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                                        ) : (
                                            <img src={ref.image} alt={ref.title} className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                                        )
                                    ) : (
                                        <div className="bg-slate-100 w-full h-full flex items-center justify-center">
                                            <span className="text-slate-300 font-bold uppercase tracking-widest text-xs">[Görsel - {i + 1}]</span>
                                        </div>
                                    )}
                                </div>
                                <div className="flex justify-between items-start mb-4">
                                    <h2 className="text-lg md:text-xl font-bold text-renk1">{ref.title}</h2>
                                    <div className="w-10 h-10 min-w-[40px] rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
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
