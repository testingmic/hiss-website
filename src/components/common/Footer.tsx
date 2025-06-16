import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

import hLogo from "../../assets/images/hlogo.jpeg";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <motion.div
        className="container-custom"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* School Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-4">
              <img
                src={hLogo}
                alt="Hiss Logo"
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-2">
                <h3 className="text-xl font-bold">High International</h3>
                <p className="text-sm text-neutral-light">Standard School</p>
              </div>
            </div>

            <p className="text-neutral-light mb-6">
              Providing transformational educational opportunities for all our
              students to flourish as responsible global citizens.
            </p>

            <div className="space-y-3">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-secondary mr-3" />
                <p className="text-sm">P.O. BOX MB 688, Accra, Ghana</p>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-secondary mr-3" />
                <p className="text-sm">024-234-3408</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-secondary mr-3" />
                <p className="text-sm">high_international@yahoo.com</p>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-secondary after:-mb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-neutral-light hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/academics"
                  className="text-neutral-light hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Academic Programs
                </Link>
              </li>
              <li>
                <Link
                  to="/admissions"
                  className="text-neutral-light hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Admissions
                </Link>
              </li>
              <li>
                <Link
                  to="/facilities"
                  className="text-neutral-light hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-neutral-light hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="text-neutral-light hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> News & Events
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-neutral-light hover:text-white transition-colors duration-300 flex items-center"
                >
                  <span className="mr-2">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* School Hours */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-secondary after:-mb-2">
              School Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-neutral-light">Monday - Friday:</span>
                <span>7:30 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-neutral-light">
                  After School (Primary & JHS):
                </span>
                <span>3:00 PM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-neutral-light">Homework Support:</span>
                <span>4:00 PM - 5:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span className="text-neutral-light">Weekend:</span>
                <span>Closed</span>
              </li>
              <li className="text-neutral-light mt-4">
                <strong className="text-white">Note:</strong> The school is
                closed on public holidays and during scheduled vacations.
              </li>
            </ul>
          </motion.div>

          {/* Connect With Us */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-10 after:h-1 after:bg-secondary after:-mb-2">
              Connect With Us
            </h3>
            <div className="flex space-x-3 mb-6">
              <a
                href="#"
                title="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                title="Twitter"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                title="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                title="Youtube"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors duration-300"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                title="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors duration-300"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <h4 className="text-lg font-semibold mb-3">
              Subscribe to Our Newsletter
            </h4>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-secondary text-white rounded-md hover:bg-secondary-dark transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
          variants={itemVariants}
        >
          <p className="text-neutral-light text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} High International Standard
            School. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-neutral-light">
            <Link
              to="/privacy-policy"
              className="hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="hover:text-white transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/sitemap"
              className="hover:text-white transition-colors duration-300"
            >
              Sitemap
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
