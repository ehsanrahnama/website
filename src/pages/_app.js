import DefaultLayout from "@/components/layout/DefaultLayout";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import UseScrollToTop from '../hooks/useScrollToTop';

export default function App({ Component, pageProps }) {
  return (
    <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
      <UseScrollToTop />
    </div>
  )
}
