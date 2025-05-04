import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGraduationCap,
  FaBook,
  FaLaptopCode,
} from "react-icons/fa";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const scrollY = window.scrollY;
      const heroElement = heroRef.current;

      // Apply parallax effect to different elements
      const heroContent = heroElement.querySelector(
        ".hero-content"
      ) as HTMLElement;
      const heroBg = heroElement.querySelector(".hero-bg") as HTMLElement;
      const heroShapes = heroElement.querySelector(
        ".hero-shapes"
      ) as HTMLElement;

      if (heroContent) {
        heroContent.style.transform = `translateY(${scrollY * 0.2}px)`;
      }

      if (heroBg) {
        heroBg.style.transform = `translateY(${scrollY * 0.4}px)`;
      }

      if (heroShapes) {
        heroShapes.style.transform = `translateY(${-scrollY * 0.15}px) rotate(${
          scrollY * 0.02
        }deg)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const shapeVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut",
    },
  };

  return (
    <div
      ref={heroRef}
      className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-primary-dark"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 hero-bg">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#1a4b8e,_transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_#2e9c5f,_transparent_70%)]"></div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden hero-shapes">
        <motion.div
          className="absolute top-[15%] right-[10%] w-32 h-32 rounded-full bg-secondary/20 blur-xl"
          initial="hidden"
          animate="visible"
          variants={shapeVariants}
          custom={1}
        />
        <motion.div
          className="absolute top-[50%] left-[5%] w-48 h-48 rounded-full bg-accent/20 blur-xl"
          initial="hidden"
          animate="visible"
          variants={shapeVariants}
          custom={2}
        />
        <motion.div
          className="absolute bottom-[20%] right-[15%] w-40 h-40 rounded-full bg-primary-light/20 blur-xl"
          initial="hidden"
          animate="visible"
          variants={shapeVariants}
          custom={3}
        />

        {/* Floating Icons */}
        <motion.div
          className="absolute top-[30%] left-[20%] w-16 h-16 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center text-primary-light text-2xl"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: floatingAnimation.y,
          }}
          transition={{
            opacity: { delay: 1.2 },
            y: floatingAnimation.transition,
          }}
        >
          <FaGraduationCap />
        </motion.div>
        <motion.div
          className="absolute top-[20%] right-[30%] w-14 h-14 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center text-secondary text-xl"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: floatingAnimation.y,
          }}
          transition={{
            opacity: { delay: 1.5 },
            y: { ...floatingAnimation.transition, delay: 0.5 },
          }}
        >
          <FaBook />
        </motion.div>
        <motion.div
          className="absolute bottom-[30%] left-[25%] w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center text-accent text-lg"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            y: floatingAnimation.y,
          }}
          transition={{
            opacity: { delay: 1.8 },
            y: { ...floatingAnimation.transition, delay: 1 },
          }}
        >
          <FaLaptopCode />
        </motion.div>
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex items-center z-10 hero-content">
        <div className="container-custom">
          <motion.div
            className="max-w-3xl text-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="text-white">Achieving</span>{" "}
              <span className="text-secondary">High</span>{" "}
              <span className="text-white">Standards</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 text-white/80"
              variants={itemVariants}
            >
              Providing transformational educational opportunities for all our
              students to flourish as responsible global citizens.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              variants={itemVariants}
            >
              <Link
                to="/admissions"
                className="btn-secondary text-lg px-8 py-4 flex items-center gap-2"
              >
                Apply Now <FaArrowRight />
              </Link>
              <Link
                to="/about"
                className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                Explore More
              </Link>
            </motion.div>

            <motion.div
              className="mt-16 flex flex-wrap gap-8 items-center"
              variants={itemVariants}
            >
              <div className="flex items-center">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3">
                  <FaGraduationCap className="text-secondary text-2xl" />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold">Quality Education</h3>
                  <p className="text-sm text-white/70">
                    Excellence in teaching and learning
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-3">
                  <FaBook className="text-secondary text-2xl" />
                </div>
                <div className="ml-3">
                  <h3 className="font-semibold">Holistic Development</h3>
                  <p className="text-sm text-white/70">
                    Spirit, Skills, Stewardship & Service
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L60,213.3C120,203,240,181,360,181.3C480,181,600,203,720,218.7C840,235,960,245,1080,229.3C1200,213,1320,171,1380,149.3L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
