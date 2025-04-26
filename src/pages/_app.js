import DefaultLayout from "@/components/layout/DefaultLayout";
import "@/styles/globals.css";
import UseScrollToTop from '../hooks/useScrollToTop';
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function App({ Component, pageProps }) {
  return (
    <div className={`${geistSans.className} ${geistMono.className}  bg-secondary-light dark:bg-primary-dark transition duration-300`}>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      <UseScrollToTop />
    </div>
  )
}
