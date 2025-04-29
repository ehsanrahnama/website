import AppHeader from "../shared/AppHeader";
import AppFooter from "../shared/AppFooter";
import PagesMetaHead from "../PagesMetaHead";
import { AnimatePresence } from "framer-motion";

const DefaultLayout = ({ children }) => {
  return (
    <AnimatePresence>
      <PagesMetaHead />
      <AppHeader />
      {children}
      <AppFooter />
    </AnimatePresence>
  );
};

export default DefaultLayout;
