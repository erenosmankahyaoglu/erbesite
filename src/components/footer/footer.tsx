import React from 'react';
import { Linkedin, Facebook, Instagram, Youtube, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-50 pt-fluid-xl pb-fluid-md px-fluid-md border-t border-slate-200">
            <div className="container mx-auto max-w-7xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-fluid-lg mb-fluid-xl">

                    {/* Logo & Social */}
                    <div className="space-y-6">
                        <img src="/logo.svg" alt="Erbe Logo" className="h-12 w-auto" />
                        <div className="flex space-x-3">
                            <a
                                href="#"
                                className="w-11 h-11 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm hover:shadow-md"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="#"
                                className="w-11 h-11 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm hover:shadow-md"
                                aria-label="Facebook"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="#"
                                className="w-11 h-11 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm hover:shadow-md"
                                aria-label="Instagram"
                            >
                                <Instagram size={20} />
                            </a>
                            <a
                                href="#"
                                className="w-11 h-11 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all shadow-sm hover:shadow-md"
                                aria-label="YouTube"
                            >
                                <Youtube size={20} />
                            </a>
                        </div>
                    </div>

                    {/* About Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Kurumsal</h4>
                        <ul className="space-y-4">
                            <li><a href="#hakkimizda" className="text-slate-600 hover:text-primary transition-colors text-sm">Hakkımızda</a></li>
                            <li><a href="#misyon-vizyon" className="text-slate-600 hover:text-primary transition-colors text-sm">Misyon & Vizyon</a></li>
                            <li><a href="#hizmetler" className="text-slate-600 hover:text-primary transition-colors text-sm">Hizmetlerimiz</a></li>
                            <li><a href="#projeler" className="text-slate-600 hover:text-primary transition-colors text-sm">Öne Çıkan Projeler</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">İletişim</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start space-x-3 group">
                                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                                <span className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-900 transition-colors">
                                    Küçük Çiğli Mh. Anadolu Cad. No:934/A Çiğli/İZMİR
                                </span>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <Phone size={18} className="text-primary flex-shrink-0" />
                                <a href="tel:+905433644702" className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors underline-offset-4 hover:underline">
                                    +90 543 364 47 02
                                </a>
                            </li>
                            <li className="flex items-center space-x-3 group">
                                <Mail size={18} className="text-primary flex-shrink-0" />
                                <a href="mailto:info@erbemakine.com" className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors underline-offset-4 hover:underline">
                                    info@erbemakine.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Connect (Links) */}
                    <div className="space-y-6 lg:text-right flex flex-col items-start lg:items-end">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Bağlantı</h4>
                        <button
                            onClick={scrollToTop}
                            className="flex items-center space-x-2 text-slate-500 hover:text-secondary transition-colors font-bold text-sm uppercase tracking-tighter p-2 -ml-2 lg:ml-0 lg:-mr-2"
                        >
                            <span>Yukarı Dön</span>
                            <ChevronUp size={18} />
                        </button>
                        <div className="mt-4">
                            <p className="text-slate-400 text-xs italic">
                                Güven ve mühendisliğin buluştuğu nokta.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-fluid-md border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-400 text-sm font-medium text-center md:text-left">
                        © {new Date().getFullYear()} Erbe Makine İnşaat. Tüm Hakları Saklıdır.
                    </p>
                    <div className="flex space-x-8">
                        <a href="#" className="text-slate-400 hover:text-slate-600 text-xs font-bold uppercase tracking-widest transition-colors">KVKK</a>
                        <a href="#" className="text-slate-400 hover:text-slate-600 text-xs font-bold uppercase tracking-widest transition-colors">Çerez Politikası</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
