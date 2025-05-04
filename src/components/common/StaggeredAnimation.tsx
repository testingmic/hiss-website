import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface StaggeredAnimationProps {
  children: React.ReactNode[];
  className?: string;
  containerClass?: string;
  staggerDelay?: number;
  duration?: number;
  animation?:
    | "fadeIn"
    | "slideUp"
    | "slideDown"
    | "slideInLeft"
    | "slideInRight"
    | "scale";
  once?: boolean;
  threshold?: number;
}

const animations = {
  fadeIn: {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  },
  slideUp: {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 50 },
  },
  slideDown: {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -50 },
  },
  slideInLeft: {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -50 },
  },
  slideInRight: {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 50 },
  },
  scale: {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.8 },
  },
};

const StaggeredAnimation: React.FC<StaggeredAnimationProps> = ({
  children,
  className = "",
  containerClass = "",
  staggerDelay = 0.1,
  duration = 0.5,
  animation = "fadeIn",
  once = true,
  threshold = 0.1,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: once,
    threshold: threshold,
  });

  const selectedAnimation = animations[animation];

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const childVariants = {
    hidden: selectedAnimation.hidden,
    visible: {
      ...selectedAnimation.visible,
      transition: { duration },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={containerClass}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} className={className} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StaggeredAnimation;
