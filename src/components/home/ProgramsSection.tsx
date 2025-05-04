import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaChild,
  FaSchool,
  FaUserGraduate,
} from "react-icons/fa";
import AnimatedSection from "../common/AnimatedSection";
import StaggeredAnimation from "../common/StaggeredAnimation";

interface Program {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  ageRange: string;
  features: string[];
}

const programs: Program[] = [
  {
    id: "pre-kg",
    title: "Pre-Kindergarten",
    description:
      "Our Pre-Kindergarten program creates a nurturing environment where children learn through play and discovery.",
    icon: <FaChild className="text-3xl" />,
    ageRange: "Ages 2-3",
    features: [
      "Early literacy and numeracy development",
      "Play-based learning activities",
      "Social skills development",
      "Fine and gross motor skills development",
      "Creative expression through art and music",
    ],
  },
  {
    id: "kg-primary",
    title: "Kindergarten & Primary",
    description:
      "Our Kindergarten and Primary programs provide a solid foundation for academic success and personal growth.",
    icon: <FaSchool className="text-3xl" />,
    ageRange: "Ages 4-11",
    features: [
      "Comprehensive curriculum following Ghana national standards",
      "Inquiry-based and problem-based learning",
      "Focus on core subjects: English, Mathematics, Science, Social Studies",
      "Computer skills, French, and Ghanaian Language",
      "Creative Arts and Physical Education",
    ],
  },
  {
    id: "jhs",
    title: "Junior High School",
    description:
      "Our Junior High School program prepares students for higher education through rigorous academic standards.",
    icon: <FaUserGraduate className="text-3xl" />,
    ageRange: "Ages 12-14",
    features: [
      "Advanced curriculum following Ghana national standards",
      "Enhanced focus on Mathematics, English, Science, and Social Studies",
      "Career Technology, Computing, and Religious and Moral Education",
      "Preparation for national examinations",
      "Leadership and character development opportunities",
    ],
  },
];

const ProgramsSection = () => {
  const [activeProgram, setActiveProgram] = useState(programs[0]);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-40 left-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl"></div>

      <div className="container-custom">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Academic Programs
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-darkest mb-4">
            Providing Quality Education at All Levels
          </h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            Our curriculum mantra is "rigor, fun together". We believe academic
            rigor and fun must coexist to create an engaging learning
            environment.
          </p>
        </AnimatedSection>

        {/* Program Selection Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {programs.map((program) => (
            <motion.button
              key={program.id}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeProgram.id === program.id
                  ? "bg-primary text-white shadow-medium"
                  : "bg-neutral-light text-neutral-dark hover:bg-primary/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveProgram(program)}
            >
              {program.title}
            </motion.button>
          ))}
        </div>

        {/* Program Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProgram.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
          >
            {/* Icon and Title */}
            <div className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                {activeProgram.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{activeProgram.title}</h3>
              <p className="text-secondary font-medium mb-4">
                {activeProgram.ageRange}
              </p>
              <p className="text-neutral-dark">{activeProgram.description}</p>
              <Link
                to={`/academics#${activeProgram.id}`}
                className="mt-6 inline-flex items-center font-medium text-primary hover:text-primary-dark transition-colors duration-300"
              >
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Program Features */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-soft p-6">
              <h4 className="text-xl font-semibold mb-6 pb-4 border-b border-neutral-light">
                Program Features
              </h4>
              <StaggeredAnimation
                containerClass="space-y-4"
                animation="slideUp"
              >
                {activeProgram.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-accent mt-1 mr-3 flex-shrink-0">
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
                    <p className="text-neutral-dark">{feature}</p>
                  </div>
                ))}
              </StaggeredAnimation>

              {/* Program Illustration */}
              <div className="mt-8 p-6 bg-neutral-light rounded-lg">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="mb-4 sm:mb-0">
                    <h5 className="font-semibold mb-2">Teaching Approach</h5>
                    <p className="text-sm text-neutral-dark">
                      We employ an inquiry-based teaching and learning system
                      modeled on the acclaimed Oxford learning approach,
                      incorporating Problem-Based Learning (PBL) to cultivate
                      critical thinking, collaboration, communication, and
                      leadership in our learners.
                    </p>
                  </div>
                  <div className="w-24 h-24 flex-shrink-0 bg-white rounded-full flex items-center justify-center">
                    <span className="text-primary text-4xl font-bold">
                      HISS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <AnimatedSection animation="fadeIn" className="mt-16 text-center">
          <Link to="/academics" className="btn-primary text-lg px-8 py-4">
            Explore All Programs
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProgramsSection;
