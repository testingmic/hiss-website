import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptop,
  FaFlask,
  FaFootballBall,
  FaBook,
  FaBriefcaseMedical,
  FaChalkboardTeacher,
} from "react-icons/fa";
import AnimatedSection from "../common/AnimatedSection";

import ClassRoom from "../../assets/images/class.jpeg";
import ScienceLab from "../../assets/images/science.jpeg";
import Playground from "../../assets/images/img1.jpeg";
import Library from "../../assets/images/library.jpeg";
import Sickbay from "../../assets/images/sick.jpeg";

interface Facility {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  image: string; // In a real app, this would be the path to the image
}

const facilities: Facility[] = [
  {
    id: 1,
    title: "Computer Lab",
    description:
      "Well-furnished computer lab with high-speed internet access for digital learning and research.",
    icon: <FaLaptop className="text-3xl" />,
    color: "bg-blue-500",
    image: ClassRoom, // Placeholder
  },
  {
    id: 2,
    title: "Science Lab",
    description:
      "Fully equipped science laboratory for practical experiments and hands-on learning experiences.",
    icon: <FaFlask className="text-3xl" />,
    color: "bg-green-500",
    image: ScienceLab, // Placeholder
  },
  {
    id: 3,
    title: "Modern Playgrounds",
    description:
      "Spacious playgrounds with modern equipment for sports, recreation, and physical development.",
    icon: <FaFootballBall className="text-3xl" />,
    color: "bg-orange-500",
    image: Playground, // Placeholder
  },
  {
    id: 4,
    title: "Library",
    description:
      "Comprehensive library with a wide selection of books, resources, and quiet study spaces.",
    icon: <FaBook className="text-3xl" />,
    color: "bg-purple-500",
    image: Library, // Placeholder
  },
  {
    id: 5,
    title: "Sickbay",
    description:
      "Well-equipped sickbay with trained staff to attend to medical emergencies and student health needs.",
    icon: <FaBriefcaseMedical className="text-3xl" />,
    color: "bg-red-500",
    image: Sickbay, // Placeholder
  },
  {
    id: 6,
    title: "Modern Classrooms",
    description:
      "Purpose-built classrooms with modern technology and multimedia contents for personalized learning.",
    icon: <FaChalkboardTeacher className="text-3xl" />,
    color: "bg-yellow-500",
    image: ClassRoom, // Placeholder
  },
];

const FacilitiesShowcase = () => {
  const [activeFacility, setActiveFacility] = useState<Facility | null>(
    facilities[0]
  );

  return (
    <section className="py-20 bg-neutral-light">
      <div className="container-custom">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Facilities
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-neutral-darkest mb-4"
            style={{ color: "#ff623e" }}
          >
            State-of-the-Art Facilities
          </h2>
          <p className="text-neutral-dark max-w-2xl mx-auto">
            We provide modern facilities to enhance learning experiences and
            ensure all-round development of our students.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Facility Image */}
          <div className="relative h-[500px] rounded-lg overflow-hidden shadow-medium bg-white object-cover">
            <AnimatePresence mode="wait">
              {activeFacility && (
                <motion.div
                  key={activeFacility.id}
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* This would be replaced with an actual image */}
                  <div className="w-full h-full bg-neutral-light flex items-center justify-center object-cover">
                    <img
                      src={activeFacility.image}
                      alt={activeFacility.title}
                      className="w-full h-full object-cover"
                    />
                    {/* glass effect */}
                    <div className="text-center p-6 absolute bottom-0 left-0 right-0 bg-white/50 backdrop-blur-sm">
                      <div
                        className={`mx-auto w-20 h-20 ${activeFacility.color} rounded-full flex items-center justify-center text-white mb-4`}
                      >
                        {activeFacility.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">
                        {activeFacility.title}
                      </h3>
                      <p className="text-neutral-darkest">
                        {activeFacility.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column - Facility Selection */}
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {facilities.map((facility) => (
                <motion.div
                  key={facility.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeFacility?.id === facility.id
                      ? "bg-primary text-white shadow-medium scale-105"
                      : "bg-white hover:bg-primary/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveFacility(facility)}
                >
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-12 h-12 rounded-full ${
                        activeFacility?.id === facility.id
                          ? facility.color
                          : facility.color
                      } flex items-center justify-center ${
                        activeFacility?.id === facility.id
                          ? `text-${facility.color.split("-")[1]}`
                          : "text-white"
                      } mb-2`}
                    >
                      {facility.icon}
                    </div>
                    <h4 className="font-semibold text-sm">{facility.title}</h4>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/facilities" className="btn-primary">
                Explore All Facilities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesShowcase;
