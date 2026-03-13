import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        {/* ── Favicon Suite ────────────────────────────────────────── */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        {/* ── Apple Touch Icon ─────────────────────────────────────── */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* ── Web App Manifest & Theme ──────────────────────────────── */}
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#013186" />

        {/* ── Apple PWA ────────────────────────────────────────────── */}
        {/* apple-mobile-web-app-capable deprecated 2025 — manifest handles this */}
        <meta name="apple-mobile-web-app-title" content="Erbe Makine" />

        {/* ── Microsoft Tile ───────────────────────────────────────── */}
        <meta name="msapplication-TileColor" content="#013186" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* ── Phone Auto-detection & Performance ───────────────────── */}
        <meta name="format-detection" content="telephone=no" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* ── Structured Data (JSON-LD) ───────────────────────────── */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Erbe Makine ve İnşaat",
              image: "https://www.erbemakine.com/og-image.png",
              "@id": "https://www.erbemakine.com",
              url: "https://www.erbemakine.com",
              telephone: "+90 543 364 47 02",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Küçük Çiğli Mh. Anadolu Cad. No:934/A",
                addressLocality: "Çiğli",
                addressRegion: "İzmir",
                postalCode: "35610",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 38.4883446,
                longitude: 27.0396444,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "08:30",
                closes: "19:00",
              },
              sameAs: [
                "https://www.erbemakine.com/hakkimizda",
                "https://www.erbemakine.com/iletisim",
              ],
            }),
          }}
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
