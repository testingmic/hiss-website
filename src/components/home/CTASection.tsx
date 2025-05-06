import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaEnvelope, FaPhone } from "react-icons/fa";
import AnimatedSection from "../common/AnimatedSection";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection
            animation="fadeIn"
            className="bg-white rounded-2xl shadow-medium overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Image Column */}
              <div className="relative h-80 md:h-auto overflow-hidden">
                {/* This would be replaced with an actual image */}
                <div className="absolute inset-0 bg-primary">
                  <div className="flex items-center justify-center h-full">
                    <motion.div
                      className="bg-white/10 backdrop-blur-md rounded-lg p-8 text-white text-center max-w-xs"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-xl font-bold mb-2">
                        Join Our Community
                      </h3>
                      <p>
                        Be part of a school that values excellence, character,
                        and innovation.
                      </p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="p-8 md:p-12">
                <div className="space-y-6">
                  <h2
                    className="text-3xl md:text-4xl font-bold text-neutral-darkest"
                    style={{ color: "#ff623e" }}
                  >
                    Ready to Give Your Child the Best Education?
                  </h2>

                  <p className="text-neutral-dark">
                    High International Standard School is accepting applications
                    for all class levels from Pre-Kindergarten to Junior High
                    School.
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-primary"
                      style={{ color: "#ff623e" }}
                    >
                      Why Choose HISS:
                    </h4>
                    <ul className="space-y-2">
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
                          Quality education by well-trained graduate teachers
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
                        <span>
                          Modern facilities and technology-enhanced learning
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
                        <span>
                          Special STEM program including coding and robotics
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link
                      to="/admissions"
                      className="btn-primary text-lg px-8 py-4 flex items-center gap-2"
                    >
                      Apply Now <FaArrowRight />
                    </Link>
                    <Link
                      to="/contact"
                      className="btn-outline border-primary text-primary hover:bg-primary hover:text-white text-lg px-8 py-4"
                    >
                      Contact Us
                    </Link>
                  </div>

                  <div className="pt-4 space-y-2 text-neutral-dark">
                    <div className="flex items-center">
                      <FaPhone className="text-primary mr-2" />
                      <span>024-234-3408</span>
                    </div>
                    <div className="flex items-center">
                      <FaEnvelope className="text-primary mr-2" />
                      <span>high_international@yahoo.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
