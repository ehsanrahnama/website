import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiX, FiMenu } from "react-icons/fi";
import HireMeModal from "../HireMeModal";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import { FiLinkedin, FiGithub } from "react-icons/fi";
// import logo from "../../../public/images/Logo_E_2.jpg";
import logo from "../../../public/images/logo1.png";





function AppHeader() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTheme, setTheme] = useThemeSwitcher();

  function toggleMenu() {
    if (!showMenu) {
      setShowMenu(true);
    } else {
      setShowMenu(false);
    }
  }

  function showHireMeModal() {
    if (!showModal) {
      document
        .getElementsByTagName("html")[0]
        .classList.add("overflow-y-hidden");
      setShowModal(true);
    } else {
      document
        .getElementsByTagName("html")[0]
        .classList.remove("overflow-y-hidden");
      setShowModal(false);
    }
  }

  function renderSocialIcons() {
    return (
      <div className="flex items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/ehsan-rahnama-05294154"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light"
        >
          <FiLinkedin className="text-2xl" />
        </a>
        <a
          href="https://github.com/ehsanrahnama"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light"
        >
          <FiGithub className="text-2xl" />
        </a>
      </div>
    );
  }
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      {/* Header */}
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        {/* Header menu links and small screen hamburger menu */}
              <div className="flex justify-between items-center px-4 sm:px-0">
              <div className="flex items-center">
                <Link href="/">
                <Image
                  src={logo}
                  className="w-30 cursor-pointer"
                  alt="logo"
                  width={500}
                  height={300}
                />
                </Link>
                {/* <span className="ml-2 text-xl font-bold text-primary-dark dark:text-ternary-light" style={{ lineHeight: '40px' }}>
                Rahi
                </span> */}
              </div>

              {/* Small screen hamburger menu */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="focus:outline-none"
              aria-label="Hamburger Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light"
              >
                {showMenu ? (
                  <FiX className="text-3xl" />
                ) : (
                  <FiMenu className="text-3xl" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Header links small screen */}
        <div
          className={
            showMenu
              ? "block m-0 sm:ml-4 sm:mt-3 md:flex px-5 py-3 sm:p-0 justify-between items-center shadow-lg sm:shadow-none"
              : "hidden"
          }
        >
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <Link href="/" aria-label="Home">
              Home
            </Link>
          </div>
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <Link href="/about" aria-label="About Me">
              About Me
            </Link>
          </div>
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">
            <Link href="/projects" aria-label="Projects">
              Projects
            </Link>
          </div>

          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <Link href="/publications" aria-label="Publications">
              Publications & Certificates
            </Link>
          </div>
          <div className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <Link href="/advantures" aria-label="Advantures">
              Advantures
            </Link>
          </div>
        </div>

        {/* Header links large screen */}
        <div className=" hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none">
          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Home"
          >
            <Link href="/">Home</Link>
          </div>
          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="About Me"
          >
            <Link href="/about">About Me</Link>
          </div>
          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Projects"
          >
            <Link href="/projects">Projects</Link>
          </div>

          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Publications"
          >
            <Link href="/publications">Publications & Certificates</Link>
          </div>

          <div
            className="block text-left text-lg font-medium text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2"
            aria-label="Advantures">
            <Link href="/advantures">Advantures</Link>
          </div>

        </div>
        {/* Social Icons */}
        <div className="flex justify-center mt-4 sm:mt-0">
          {renderSocialIcons()}
        </div>
      </div>
      <div></div>
    </motion.nav>
  );
}

export default AppHeader;
