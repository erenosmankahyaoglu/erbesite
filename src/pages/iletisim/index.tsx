import React from 'react';
import Head from 'next/head';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export default function Iletisim() {
    return (
        <>
            <Head>
                <title>İletişim | Erbe Makine ve İnşaat</title>
                <meta name="description" content="Erbe Makine ve İnşaat iletişim sayfası. Bizimle iletişime geçin." />
            </Head>

            <div className="bg-slate-50 min-h-screen pb-12">
                {/* Banner / Header Space */}
                <div className="pt-28 pb-6 bg-white border-b border-slate-100 px-4">
                    <div className="container mx-auto max-w-7xl">
                        <SectionTitle
                            variant="page"
                            align="left"
                            title="İletişim"
                            subtitle="Sorularınız, iş birliği teklifleriniz veya talepleriniz için bize ulaşmaktan çekinmeyin."
                            noMargin
                        />
                    </div>
                </div>

                {/* Map Section */}
                <div className="w-full h-[300px] md:h-[400px] bg-slate-200 relative overflow-hidden">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3122.956623631481!2d27.039644376510304!3d38.48834457181344!2m3!1f0!2f0!3f0!3m2!1i1024!2i1024!4f13.1!3m3!1m2!1s0x14bbd91619669527%3A0x6b3b2b2b2b2b2b2b!2zS8O8w6fDvGsgw4dpxJ9saSwgQW5hZG9sdSBDYWQuIE5vOjkzNC9BLCAzNTYxMCBDacSfbGkvxLB6bWly!5e0!3m2!1str!2str!4v1709632800000!5m2!1str!2str"
                        className="absolute inset-0 w-full h-full border-0 grayscale opacity-80"
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Form & Info Section */}
                <div className="container mx-auto max-w-7xl px-4 -mt-12 md:-mt-20 relative z-10">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                            {/* Left: Contact Form */}
                            <div className="lg:w-2/3 p-6 md:p-12">
                                <h2 className="text-2xl md:text-3xl font-bold text-renk1 mb-4">İletişim Formu</h2>

                                <form className="space-y-2 md:space-y-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 ml-1">Adınız Soyadınız</label>
                                            <input
                                                type="text"
                                                placeholder="Örn: Ahmet Erbe"
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-renk2/20 focus:border-renk2 transition-all text-sm md:text-base"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 ml-1">E-Posta Adresiniz</label>
                                            <input
                                                type="email"
                                                placeholder="Örn: ahmet@erbemakine.com"
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-renk2/20 focus:border-renk2 transition-all text-sm md:text-base"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 ml-1">Konu</label>
                                            <input
                                                type="text"
                                                placeholder="Hizmetlerimiz hakkında"
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-renk2/20 focus:border-renk2 transition-all text-sm md:text-base"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-semibold text-slate-700 ml-1">Telefon</label>
                                            <input
                                                type="tel"
                                                placeholder="+90 5XX XXX XX XX"
                                                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-renk2/20 focus:border-renk2 transition-all text-sm md:text-base"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-slate-700 ml-1">Mesajınız</label>
                                        <textarea
                                            rows={5}
                                            placeholder="Size nasıl yardımcı olabiliriz?"
                                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-renk2/20 focus:border-renk2 transition-all resize-none text-sm md:text-base"
                                        ></textarea>
                                    </div>

                                    <button className="bg-renk2 hover:bg-[#015bb3] text-white px-10 py-4 rounded-xl font-bold shadow-xl transition-all hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-3 w-full md:w-auto min-h-[44px] text-base">
                                        <span>Gönder</span>
                                        <Send size={18} />
                                    </button>
                                </form>
                            </div>

                            {/* Right: Sidebar Info */}
                            <div className="lg:w-1/3 bg-renk1 p-6 md:p-12 text-white flex flex-col justify-between">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Bize Ulaşın</h2>

                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-5">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                                <MapPin size={24} className="text-white/70" />
                                            </div>
                                            <div>
                                                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Adresimiz</p>
                                                <p className="text-base font-medium leading-relaxed">
                                                    Küçük Çiğli Mh. Anadolu Cad. No:934/A
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-5">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                                <Phone size={24} className="text-white/70" />
                                            </div>
                                            <div>
                                                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Telefon</p>
                                                <a href="tel:+905433644702" className="text-base font-medium hover:text-white/80 transition-colors">
                                                    +90 543 364 47 02
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-5">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                                <Mail size={24} className="text-white/70" />
                                            </div>
                                            <div>
                                                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">E-Posta</p>
                                                <a href="mailto:info@erbemakine.com" className="text-base font-medium hover:text-white/80 transition-colors">
                                                    info@erbemakine.com
                                                </a>
                                            </div>
                                        </div>

                                        <div className="flex items-start space-x-5">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                                                <Clock size={24} className="text-white/70" />
                                            </div>
                                            <div>
                                                <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-1">Çalışma Saatleri</p>
                                                <p className="text-base font-medium leading-relaxed">Pzt - Cmt: 08:30 - 19:00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
