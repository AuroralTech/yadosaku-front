import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Geist } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${geist.variable} font-geist flex flex-col min-h-screen bg-background`}
    >
      <LanguageProvider>
        <div className="w-full lg:w-1/3 mx-auto bg-container shadow-[0_0_15px_rgba(0,0,0,0.05)]">
          <Component {...pageProps} />
        </div>
      </LanguageProvider>
    </div>
  );
}
