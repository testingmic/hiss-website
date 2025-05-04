import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  animation?:
    | "fadeIn"
    | "slideUp"
    | "slideDown"
    | "slideInLeft"
    | "slideInRight"
    | "scale"
    | "none";
  once?: boolean;
  threshold?: number;
}

const animations = {
  fadeIn: {
    visible: { opacity: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0 },
  },
  slideUp: {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, y: 50 },
  },
  slideDown: {
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, y: -50 },
  },
  slideInLeft: {
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, x: -50 },
  },
  slideInRight: {
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
    hidden: { opacity: 0, x: 50 },
  },
  scale: {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    hidden: { opacity: 0, scale: 0.8 },
  },
  none: {
    visible: {},
    hidden: {},
  },
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  animation = "fadeIn",
  once = true,
  threshold = 0.1,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  const selectedAnimation = animations[animation];
  const customTransition = { delay, duration };

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={selectedAnimation}
      transition={customTransition}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
