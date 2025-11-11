import "@/styles/globals.css";
import "yet-another-react-lightbox/styles.css";

import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { ThemeProvider } from "@/components/ThemeProvider";
import { CartProvider } from "@/components/Cart";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <Head>
            <title>Cheese Stick Koe: Makanan Ringan Bekasi</title>
            <meta
              name="title"
              content="Cheese Stick Koe: Makanan Ringan Bekasi"
            />
            <meta
              name="description"
              content="Temukan cheese sticks terbaik dan enak untuk makanan ringan sehat dan praktis. Kami menyediakan berbagai pilihan rasa dan bahan yang berkualitas."
            />
            <meta
              name="keywords"
              content="jual cheese stick bekasi, toko makanan ringan bekasi, cheese stick keju edam, jual cheese stick, bolu homemade, kue kering, es yakult"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1, maximum-scale=5"
            />

            <link rel="canonical" href="https://www.cheesestick-koe.my.id/" />

            <link rel="icon" href="/favicon.ico" />
            <link rel="apple-touch-icon" href="/img/apple-touch-icon.png" />

            <meta property="og:type" content="website" />
            <meta
              property="og:url"
              content="https://www.cheesestick-koe.my.id/"
            />
            <meta
              property="og:title"
              content="Cheese Stick Koe: Makanan Ringan Bekasi"
            />
            <meta
              property="og:description"
              content="Temukan cheese sticks terbaik dan enak untuk makanan ringan sehat dan praktis. Kami menyediakan berbagai pilihan rasa dan bahan yang berkualitas."
            />
            <meta
              property="og:image"
              content="https://www.cheesestick-koe.my.id/img/cheese_stick_banner.png"
            />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content="Cheese Stick Koe" />
            <meta property="og:locale" content="id_ID" />
            <meta property="og:site_name" content="Cheese Stick Koe" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta
              name="twitter:url"
              content="https://www.cheesestick-koe.my.id/"
            />
            <meta
              name="twitter:title"
              content="Cheese Stick Koe: Makanan Ringan Bekasi"
            />
            <meta
              name="twitter:description"
              content="Temukan cheese sticks terbaik dan enak untuk makanan ringan sehat dan praktis. Kami menyediakan berbagai pilihan rasa dan bahan yang berkualitas."
            />
            <meta
              name="twitter:image"
              content="https://www.cheesestick-koe.my.id/img/cheese_stick_banner.png"
            />
          </Head>

          <Component {...pageProps} />
          <Analytics />
        </CartProvider>
      </ThemeProvider>
    </>
  );
}
