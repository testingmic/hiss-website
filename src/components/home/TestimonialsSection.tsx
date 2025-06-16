import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AnimatedSection from "../common/AnimatedSection";

import Parent1 from "../../assets/images/p1.jpg";
import Parent2 from "../../assets/images/p2.jpg";
import Parent3 from "../../assets/images/p3.jpg";
import Parent4 from "../../assets/images/p4.jpg";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string; // In a real app, this would be the path to the image
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "High International Standard School has transformed my child's approach to learning. The 'rigor, fun together' philosophy really works - my daughter is challenged academically but loves going to school every day.",
    name: "Sarah Johnson",
    role: "Parent of Primary 4 Student",
    image: Parent1, // Placeholder
  },
  {
    id: 2,
    quote:
      "The teachers at HISS are exceptional. They take the time to understand each child's learning style and provide personalized attention. My son has grown tremendously both academically and socially.",
    name: "Michael Addo",
    role: "Parent of JHS 2 Student",
    image: Parent2, // Placeholder
  },
  {
    id: 3,
    quote:
      "As a former student, I can say that HISS prepared me incredibly well for senior high school. The problem-based learning approach taught me critical thinking skills that I use every day.",
    name: "Abena Mensah",
    role: "Former Student",
    image: Parent3, // Placeholder
  },
  {
    id: 4,
    quote:
      "HISS stands out among schools in Accra with its focus on both academic excellence and character development. The school truly lives up to its motto of 'Achieving High Standards'.",
    name: "Dr. Emmanuel Osei",
    role: "Education Consultant & Parent",
    image: Parent4, // Placeholder
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const intervalRef = useRef<number | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) return;

    intervalRef.current = window.setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();

    return () => {
      stopAutoPlay();
    };
  }, []);

  const handlePrev = () => {
    stopAutoPlay();
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    startAutoPlay();
  };

  const handleNext = () => {
    stopAutoPlay();
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    startAutoPlay();
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -500 : 500,
      opacity: 0,
    }),
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,_white,_transparent_70%)]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,_white,_transparent_70%)]"></div>
      </div>

      <div className="container-custom">
        <AnimatedSection animation="fadeIn" className="text-center mb-16">
          <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Community Says
          </h2>
          <p className="max-w-2xl mx-auto opacity-80">
            Hear from parents, students, and educators about their experiences
            with High International Standard School.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Slider */}
          <div className="relative h-[400px] md:h-[300px]">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col md:flex-row items-center gap-8 bg-white/10 backdrop-blur-md rounded-2xl p-8"
              >
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-secondary">
                    {/* This would be replaced with an actual image */}
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow text-center md:text-left">
                  <FaQuoteLeft className="text-secondary text-opacity-70 text-4xl mb-4 mx-auto md:mx-0" />
                  <p className="text-lg mb-6">{currentTestimonial.quote}</p>
                  <div>
                    <h4 className="font-bold text-xl">
                      {currentTestimonial.name}
                    </h4>
                    <p className="text-white text-opacity-80">
                      {currentTestimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    stopAutoPlay();
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                    startAutoPlay();
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                    index === currentIndex
                      ? "bg-secondary w-6"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-300 focus:outline-none"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
