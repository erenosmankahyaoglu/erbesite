import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { generateDefaultSeo } from "next-seo/pages";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const SITE_URL = "https://www.erbemakine.com";

const defaultSeoConfig = {
  titleTemplate: "%s | Erbe Makine ve İnşaat",
  defaultTitle: "Erbe Makine ve İnşaat",
  description:
    "Erbe Makine ve İnşaat olarak ağır sanayi sektöründe güvenilir çözümler ve profesyonel mühendislik hizmetleri sunuyoruz.",
  canonical: SITE_URL,
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Erbe Makine ve İnşaat",
    title: "Erbe Makine ve İnşaat",
    description:
      "Erbe Makine ve İnşaat olarak ağır sanayi sektöründe güvenilir çözümler ve profesyonel mühendislik hizmetleri sunuyoruz.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Erbe Makine ve İnşaat",
        type: "image/png",
      },
    ],
  },
  twitter: {
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    { name: "author", content: "Erbe Makine ve İnşaat" },
    { name: "robots", content: "index, follow" },
    { name: "referrer", content: "no-referrer-when-downgrade" },
  ],
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} ${montserrat.className}`}>
      <Head>{generateDefaultSeo(defaultSeoConfig)}</Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
