import "@/styles/globals.css";
import { Inter, Manrope } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export default function App({ Component, pageProps }) {
  return (
    <main className={`${inter.variable} ${manrope.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
