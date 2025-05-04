import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaArrowRight,
  FaGraduationCap,
  FaUniversity,
  FaUsers,
  FaAward,
} from "react-icons/fa";
import AnimatedSection from "../common/AnimatedSection";

const CounterAnimation = ({
  end,
  duration = 2,
  title,
  icon,
}: {
  end: number;
  duration?: number;
  title: string;
  icon: React.ReactNode;
}) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const countRef = useRef<number>(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (inView) {
      const step = Math.ceil(end / (duration * 60));

      if (intervalRef.current) window.clearInterval(intervalRef.current);

      intervalRef.current = window.setInterval(() => {
        if (countRef.current < end) {
          const nextCount = Math.min(countRef.current + step, end);
          countRef.current = nextCount;
          setCount(nextCount);
        } else {
          if (intervalRef.current) window.clearInterval(intervalRef.current);
        }
      }, 1000 / 60);
    }

    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [inView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <h3 className="text-4xl font-bold mb-2">{count}+</h3>
      <p className="text-neutral-dark">{title}</p>
    </div>
  );
};

const AboutPreview = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-tr-full"></div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image with Animation */}
          <AnimatedSection animation="slideInLeft" className="relative">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-medium">
                {/* This would be replaced with an actual image */}
                <div className="w-full h-[500px] bg-neutral-light flex items-center justify-center">
                  <span className="text-neutral-dark text-lg">
                    School Building Image
                  </span>
                </div>
              </div>

              {/* Floating Card 1 */}
              <motion.div
                className="absolute -top-10 -right-10 bg-white p-4 rounded-lg shadow-medium max-w-[200px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-secondary/20 text-secondary p-2 rounded-full">
                    <FaAward />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-darkest">
                      Excellence
                    </h4>
                    <p className="text-sm text-neutral-dark">in every aspect</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                className="absolute -bottom-10 -left-10 bg-white p-4 rounded-lg shadow-medium max-w-[240px]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/20 text-primary p-2 rounded-full">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-darkest">
                      Quality Education
                    </h4>
                    <p className="text-sm text-neutral-dark">
                      for all students
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Right Column - Content */}
          <AnimatedSection animation="slideInRight" className="space-y-6">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              About Our School
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-neutral-darkest">
              Providing Quality Education Since Our Foundation
            </h2>

            <p className="text-neutral-dark">
              High International Standard School (HISS) aims to help children
              become mature, respectful, thoughtful and caring young people who
              later in life will make a strong contribution to their
              communities.
            </p>

            <p className="text-neutral-dark">
              Our curriculum mantra is, "rigor, fun together". We believe
              academic rigor and fun must coexist. We also believe in
              competitive cooperation. Children respond to being stretched and
              challenged, and that's what brings satisfaction and enjoyment.
            </p>

            <div className="py-4">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="text-accent mt-1 mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span>
                    Quality first class teaching by well-trained graduate
                    teachers
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="text-accent mt-1 mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span>Inquiry-Based Teaching and Problem-Based Learning</span>
                </li>
                <li className="flex items-start">
                  <div className="text-accent mt-1 mr-3">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span>
                    Special STEM Programme including coding and robotics
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center font-medium text-primary hover:text-primary-dark transition-colors duration-300"
              >
                Learn More About Us <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats Section */}
        <div className="mt-24">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-darkest mb-4">
              Our School in Numbers
            </h2>
            <p className="text-neutral-dark max-w-2xl mx-auto">
              At High International Standard School, we take pride in our
              achievements and continuous growth.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CounterAnimation
              end={500}
              title="Happy Students"
              icon={<FaUsers className="text-2xl" />}
            />
            <CounterAnimation
              end={30}
              title="Expert Teachers"
              icon={<FaGraduationCap className="text-2xl" />}
            />
            <CounterAnimation
              end={15}
              title="Modern Classrooms"
              icon={<FaUniversity className="text-2xl" />}
            />
            <CounterAnimation
              end={25}
              title="Awards Won"
              icon={<FaAward className="text-2xl" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
