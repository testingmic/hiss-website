import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

import hLogo from "../../assets/images/hlogo.jpeg";

// This would be replaced with actual school logo
const Logo = ({ isScrolled }: { isScrolled: boolean }) => (
  <div className="flex items-center">
    <img src={hLogo} alt="Hiss Logo" className={`w-12 h-12 rounded-full `} />
    <div className="ml-2">
      <h1 className="text-lg md:text-xl font-bold text-[#F0270E]">
        High International
      </h1>
      <p
        className={`text-xs ${isScrolled ? "text-primary-dark" : "text-white"}`}
      >
        Standard School
      </p>
    </div>
  </div>
);

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Academics", path: "/academics" },
  { name: "Admissions", path: "/admissions" },
  { name: "Facilities", path: "/facilities" },
  { name: "Gallery", path: "/gallery" },
  { name: "News", path: "/news" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu animations
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1,
      },
    },
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 },
  };

  // Close mobile menu when screen resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-medium py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="block">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo isScrolled={scrolled} />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:block"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <ul className="flex space-x-6">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
              >
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `font-medium relative px-1 py-2 transition-colors duration-300 hover:text-primary-light ${
                      isActive
                        ? "text-[#F0270E] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#F0270E]"
                        : scrolled
                        ? "!text-neutral-darkest"
                        : "!text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </motion.li>
            ))}
          </ul>
        </motion.nav>

        {/* Admission Button (Desktop) */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/admissions" className="btn-primary text-sm py-2">
            Apply Now
          </Link>
          <Link
            to="https://app.hisschoolgh.com"
            className="btn-primary !bg-orange-500 text-sm py-2 ml-2"
          >
            Login
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden text-primary text-xl focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white shadow-medium overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <motion.ul className="container-custom flex flex-col py-4 space-y-3">
              {navLinks.map((link) => (
                <motion.li key={link.path} variants={itemVariants}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block py-2 px-4 font-medium rounded-md transition-colors ${
                        isActive
                          ? "bg-primary-light/10 text-primary"
                          : "text-neutral-darkest hover:bg-neutral-light"
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                </motion.li>
              ))}
              <motion.li variants={itemVariants}>
                <Link
                  to="/admissions"
                  className="block py-2 px-4 my-2 bg-primary text-white font-medium rounded-md text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Apply Now
                </Link>
                <Link
                  to="https://app.hisschoolgh.com"
                  className="block py-2 px-4 my-2 bg-orange-500 text-white font-medium rounded-md text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
