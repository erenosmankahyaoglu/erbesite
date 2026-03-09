import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  // Sayfa kaydırıldığında navbar'ın görünümünü değiştir
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Anasayfa", path: "/" },
    { name: "Hakkımızda", path: "/hakkimizda" },
    { name: "Hizmetlerimiz", path: "/hizmetlerimiz" },
    { name: "Projelerimiz", path: "/projelerimiz" },
    { name: "Referanslarımız", path: "/referanslarimiz" },
    { name: "İletişim", path: "/iletisim" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen
          ? "bg-transparent"
          : scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
      }`}
    >
      <div
        className={`container mx-auto px-4 md:px-6 flex justify-between items-center transition-opacity duration-300 ${
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-40 h-10 md:w-48 md:h-12">
            <Image
              src="/logo.svg"
              alt="Erbe Makine Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Masaüstü Menü */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={`text-sm font-semibold tracking-wide transition-all duration-200 hover:text-renk2 relative group ${
                router.pathname === link.path ? "text-renk2" : "text-slate-800"
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-renk2 transition-all duration-300 group-hover:w-full ${
                  router.pathname === link.path ? "w-full" : ""
                }`}
              ></span>
            </Link>
          ))}

          {/* İletişim Butonu */}
          <Link
            href="/iletisim"
            className="bg-renk1 hover:bg-[#015bb3] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Teklif Al
          </Link>
        </div>

        {/* Mobil Hamburger Buton */}
        <button
          className="lg:hidden text-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-renk2 focus-visible:ring-offset-2 rounded-md p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={() => setIsOpen(true)}
          aria-label="Menüyü Aç"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobil Menü Paneli */}
      <div
        className={`lg:hidden fixed inset-0 z-[100] w-full bg-white transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* h-full yerine h-[100dvh] (Dynamic Viewport Height) kullanıyoruz */}
        <div className="flex flex-col h-[100dvh] bg-slate-50">
          <div className="flex items-center justify-between px-4 py-6 border-b bg-white">
            <div className="relative w-36 h-9">
              <Image
                src="/logo.svg"
                alt="Erbe Makine Logo"
                fill
                className="object-contain"
              />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-800 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Menüyü Kapat"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-1 p-4 overflow-y-auto bg-slate-50 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={`text-xl font-bold py-5 px-2 border-b border-slate-200/50 transition-colors ${
                  router.pathname === link.path
                    ? "text-renk2"
                    : "text-slate-900 hover:text-renk2"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="p-4 bg-white border-t mt-auto shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
            <p className="text-slate-500 text-sm mb-4">
              Mühendislik ve inşaatta güvenilir ortağınız.
            </p>
            <Link
              href="/iletisim"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-renk2 text-white py-4 rounded-xl font-bold shadow-lg text-lg active:scale-95 transition-transform"
            >
              Teklif Alın
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
