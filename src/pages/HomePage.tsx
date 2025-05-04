import { Helmet } from "react-helmet";
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import FacilitiesShowcase from "../components/home/FacilitiesShowcase";
import ProgramsSection from "../components/home/ProgramsSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import CTASection from "../components/home/CTASection";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>
          High International Standard School - Achieving High Standards
        </title>
        <meta
          name="description"
          content="High International Standard School (HISS) in Accra, Ghana provides transformational educational opportunities for all our students to flourish as responsible global citizens."
        />
      </Helmet>

      {/* Hero Section */}
      <Hero />

      {/* About Preview Section */}
      <AboutPreview />

      {/* Programs Section */}
      <ProgramsSection />

      {/* Facilities Showcase */}
      <FacilitiesShowcase />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action Section */}
      <CTASection />
    </>
  );
};

export default HomePage;
