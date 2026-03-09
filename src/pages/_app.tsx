import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${montserrat.variable} ${montserrat.className}`}>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}
