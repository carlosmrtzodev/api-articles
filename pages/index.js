import Head from "next/head";
import Search from "../components/elements/Search";
import Section from "../components/containers/Section";
export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <title>Articulos de Salud y Nutrición</title>
        <meta
          name="description"
          content="API Rest Website with search products in Next.js with Tailwind."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#00A400" />
        <meta property="og:title" content="Articulos de Salud y Nutrición" />
        <meta property="og:url" content="pomodoro-app-sage.vercel.app/" />
        <meta property="og:image" content="/OGimage.png" />
        <meta
          property="og:description"
          content="API Rest Website with search products in Next.js with Tailwind."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="es_ES" />
        <link rel="apple-touch-icon" href="/Logo.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <Section>
        <Search route="" />
      </Section>
    </>
  );
}
