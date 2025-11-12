import Head from "next/head";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import AIAdvantage from "@/components/AIAdvantage";
import Compare from "@/components/Compare";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        {/* Basic Meta */}
        <title>AgoraCRE — AI-powered Liquidity & Pricing for Real Estate</title>
        <meta
          name="description"
          content="AgoraCRE brings continuous pricing, digital twins, and compliant SPV tokenization to institutional real estate — powered by AI."
        />

        {/* Open Graph / LinkedIn Preview */}
        <meta
          property="og:title"
          content="AgoraCRE — AI-powered Liquidity & Pricing for Real Estate"
        />
        <meta
          property="og:description"
          content="Unlock institutional real estate liquidity with digital twins, live yield bands, and compliant SPV tokenization."
        />
        <meta property="og:image" content="/hero-dashboard.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://agoracre.vercel.app" />

        {/* Twitter Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="AgoraCRE — AI-powered Liquidity & Pricing for Real Estate"
        />
        <meta
          name="twitter:description"
          content="AgoraCRE brings live yield bands, digital twins, and compliant SPV tokenization to institutional real estate."
        />
        <meta name="twitter:image" content="/hero-dashboard.png" />

        {/* Favicons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#0B0F14" />
      </Head>

      <Navbar />
      <main>
        <Hero />
        <Product />
        <AIAdvantage />
        <Compare />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
