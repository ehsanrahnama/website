import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowDownCircle } from "react-icons/fi";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
// import video from "../../public/video/d.webm";
function AppBanner() {
  const [activeTheme] = useThemeSwitcher();

  return (
    <div className="w-full bg-[url('/website/images/bg1.jpg')] bg-center bg-cover bg-no-repeat h-[90vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] xl:h-[100vh]">
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex container min-h-[90vh] flex-col sm:justify-between md:pb-40 items-center sm:flex-row mt-5 md:mt-2 mx-auto"
      >
        <div className="w-full md:w-1/3 text-left">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.1,
            }}
            className="font-bold text-2xl lg:text-3xl xl:text-4xl text-center sm:text-left text-ternary-dark dark:text-primary-light uppercase"
          >
            Hi, I am Ehsan Rahnama
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.2,
            }}
            className=" mt-4 text-lg md:text-xl lg:text-2xl xl:text-3xl text-center sm:text-left leading-normal text-blue-800 dark:text-gray-450"
          >
            ML Engineer
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 0.9,
              delay: 0.3,
            }}
            className="flex justify-center sm:block"
          >
            <a
              download="EhsanRahnamaCV.pdf"
              href="https://ehsanrahnama.github.io/website/files/EhsanRahnama.pdf"
              className=" flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
              aria-label="Download Resume"
            >
              <FiArrowDownCircle className="ml-0 sm:ml-1 mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"></FiArrowDownCircle>
              <span className="text-sm sm:text-lg duration-100">
                Download CV
              </span>
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
          className="w-full sm:w-2/3 text-right float-right mt-8 sm:mt-0 p-15"
        >
          {/* <Image
          layout="responsive"
          src={activeTheme === "dark" ? darkImage : lightImage}
          alt="Developer"
          /> */}
          <video controls autoPlay loop className="w-full h-full rounded-lg">
            <source
              src={`https://ehsanrahnama.github.io/website/video/d.webm`}
            />
          </video>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default AppBanner;
