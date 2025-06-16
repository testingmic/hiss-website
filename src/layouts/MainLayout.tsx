import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.href} />
        <meta
          property="og:title"
          content="High International Standard School - Achieving High Standards"
        />
        <meta
          property="og:description"
          content="High International Standard School (HISS) in Accra, Ghana provides transformational educational opportunities for all our students to flourish as responsible global citizens."
        />
        <meta property="og:image" content="/hlogo.ico" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={window.location.href} />
        <meta
          name="twitter:title"
          content="High International Standard School - Achieving High Standards"
        />
        <meta
          name="twitter:description"
          content="High International Standard School (HISS) in Accra, Ghana provides transformational educational opportunities for all our students to flourish as responsible global citizens."
        />
        <meta name="twitter:image" content="/hlogo.ico" />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
