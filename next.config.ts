import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/Urunlerimiz-kesiciler.html",
        destination: "/hizmetlerimiz",
        permanent: true,
      },
      {
        source: "/Urunlerimiz-bantlar.html",
        destination: "/hizmetlerimiz",
        permanent: true,
      },
      {
        source: "/Urunlerimiz-is-guvenligi.html",
        destination: "/hizmetlerimiz",
        permanent: true,
      },
      {
        source: "/Urunlerimiz-slikon-tabancalari.html",
        destination: "/hizmetlerimiz",
        permanent: true,
      },
      {
        source: "/Urunlerimiz-kopukler-ve-slikonlar.html",
        destination: "/hizmetlerimiz",
        permanent: true,
      },
      {
        source: "/Urunlerimiz-cizmeler-ve-botlar.html",
        destination: "/hizmetlerimiz",
        permanent: true,
      },
      {
        source: "/Urunlerimiz.html",
        destination: "/hizmetlerimiz",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
