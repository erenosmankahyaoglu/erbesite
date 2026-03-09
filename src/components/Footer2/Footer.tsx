import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ChevronUp } from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 pt-12 pb-4 px-4 border-t border-slate-200">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Logo */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="relative h-12 w-36">
              <Image
                src="/logo.svg"
                alt="Erbe Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* About Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Kurumsal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-slate-600 hover:text-renk2 transition-colors text-sm py-1 inline-block"
                >
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link
                  href="/hakkimizda"
                  className="text-slate-600 hover:text-renk2 transition-colors text-sm py-1 inline-block"
                >
                  Misyon & Vizyon
                </Link>
              </li>
              <li>
                <Link
                  href="/hizmetlerimiz"
                  className="text-slate-600 hover:text-renk2 transition-colors text-sm py-1 inline-block"
                >
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link
                  href="/projelerimiz"
                  className="text-slate-600 hover:text-renk2 transition-colors text-sm py-1 inline-block"
                >
                  Öne Çıkan Projeler
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              İletişim
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 group">
                <MapPin size={18} className="text-renk2 mt-1 flex-shrink-0" />
                <span className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-900 transition-colors">
                  Küçük Çiğli Mh. Anadolu Cad. No:934/A Çiğli/İZMİR
                </span>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone size={18} className="text-renk2 flex-shrink-0" />
                <a
                  href="tel:+905433644702"
                  className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors underline-offset-4 hover:underline"
                >
                  +90 543 364 47 02
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Mail size={18} className="text-renk2 flex-shrink-0" />
                <a
                  href="mailto:info@erbemakine.com"
                  className="text-slate-600 text-sm group-hover:text-slate-900 transition-colors underline-offset-4 hover:underline"
                >
                  info@erbemakine.com
                </a>
              </li>
            </ul>
          </div>

          {/* Connect (Links) */}
          <div className="space-y-6 lg:text-right flex flex-col items-start lg:items-end">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Bağlantı
            </h4>
            <button
              onClick={scrollToTop}
              aria-label="Sayfanın başına dön"
              className="flex items-center space-x-2 text-slate-500 hover:text-renk1 transition-colors font-bold text-sm uppercase tracking-tighter p-2 -ml-2 lg:ml-0 lg:-mr-2 cursor-pointer"
            >
              <span>Yukarı Dön</span>
              <ChevronUp size={18} />
            </button>
            <div className="mt-4">
              <p className="text-slate-500 text-xs italic">
                Güven ve mühendisliğin buluştuğu nokta.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-slate-200 flex justify-center items-center">
          <p className="text-slate-500 text-sm font-medium text-center">
            © {new Date().getFullYear()} Erbe Makine İnşaat. Tüm Hakları
            Saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
