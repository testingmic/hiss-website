import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaMedal,
  FaHandsHelping,
  FaChalkboardTeacher,
} from "react-icons/fa";
import AnimatedSection from "../components/common/AnimatedSection";
import StaggeredAnimation from "../components/common/StaggeredAnimation";

import Mission from "../assets/gallery/gallery_34.jpeg";
import SchoolBuilding from "../assets/images/school_building.jpeg";
import HeadOfSchool from "../assets/images/h1.jpeg";
import DTL from "../assets/images/h2.jpeg";
import Administrator from "../assets/images/h3.jpeg";

const AboutPage = () => {
  // Core values
  const coreValues = [
    {
      title: "Spirit",
      description:
        "We nurture the intellectual, moral, and spiritual development of our students, encouraging a positive and enthusiastic approach to learning and life.",
      icon: <FaGraduationCap className="text-3xl" />,
      color: "bg-primary",
    },
    {
      title: "Skills",
      description:
        "We focus on developing essential academic, technical, social, and personal skills that prepare students for success in further education and in life.",
      icon: <FaMedal className="text-3xl" />,
      color: "bg-secondary",
    },
    {
      title: "Stewardship",
      description:
        "We teach our students to be good stewards of their talents, resources, and environment, fostering responsibility and respect.",
      icon: <FaHandsHelping className="text-3xl" />,
      color: "bg-accent",
    },
    {
      title: "Service",
      description:
        "We encourage our students to be active, contributing members of their community, developing a spirit of service and compassion for others.",
      icon: <FaChalkboardTeacher className="text-3xl" />,
      color: "bg-indigo-500",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - High International Standard School</title>
        <meta
          name="description"
          content="Learn about High International Standard School's vision, mission, and dedication to providing transformational educational opportunities for all our students."
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_#ffffff,_transparent_70%)]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Our School
            </motion.h1>

            <motion.p
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              High International Standard School (HISS) is committed to
              providing transformational educational opportunities for all our
              students to flourish as responsible global citizens.
            </motion.p>
          </div>
        </div>

        {/* Wave Separator */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,144C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <AnimatedSection animation="slideInLeft" className="relative">
              <div className="relative">
                <div className="rounded-lg overflow-hidden shadow-medium">
                  {/* This would be replaced with an actual image */}
                  <img
                    src={Mission}
                    alt="Mission"
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                {/* Quote Overlay */}
                <motion.div
                  className="absolute -bottom-10 -right-10 bg-white p-6 rounded-lg shadow-medium max-w-xs"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <p className="italic text-neutral-dark mb-3">
                    "Providing transformational educational opportunities for
                    all our students."
                  </p>
                  <div className="text-right text-primary font-semibold">
                    - HISS
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Right Column - Content */}
            <AnimatedSection animation="slideInRight" className="space-y-8">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Our Vision
                </div>
                <h2
                  className="text-3xl md:text-4xl font-bold text-neutral-darkest mb-4"
                  style={{ color: "#ff623e" }}
                >
                  Achieving High Standards
                </h2>
                <p className="text-neutral-dark">
                  High International Standard School, as part of the private
                  Schools in Ghana has the vision to provide transformational
                  educational opportunities for all its students. Through
                  quality first class teaching and learning, students at HISS
                  will be given the knowledge, skills and experiences required
                  to flourish as responsible global citizens, ready for their
                  next stages of their career.
                </p>
              </div>

              <div>
                <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium mb-4">
                  Our Mission
                </div>
                <h3
                  className="text-2xl font-bold text-neutral-darkest mb-4"
                  style={{ color: "#ff623e" }}
                >
                  Developing Future Leaders
                </h3>
                <p className="text-neutral-dark">
                  Through an ambitious curriculum and a broad range of
                  co-curricular opportunities, students at HISS will be given
                  the skills, knowledge and attributes required to succeed. The
                  school is committed to ensuring that all students are
                  developed as individuals through their learning experience
                  both in and out of the classroom based on the fundamental
                  pillars of Spirit, Skills, Stewardship and Service aimed at
                  achieving high standards.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-neutral-light">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Core Values
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-neutral-darkest mb-4"
              style={{ color: "#ff623e" }}
            >
              The Pillars of Our Philosophy
            </h2>
            <p className="text-neutral-dark max-w-2xl mx-auto">
              At High International Standard School, we are guided by four
              fundamental pillars that shape our educational approach and
              community culture.
            </p>
          </AnimatedSection>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 max-w-5xl mx-auto w-full">
            <StaggeredAnimation
              containerClass="grid grid-cols-1 md:grid-cols-2 gap-6"
              animation="fadeIn"
            >
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-soft overflow-hidden"
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`${value.color} p-6 text-white`}>
                    <div className="flex items-center">
                      <div className="bg-white/20 p-3 rounded-lg mr-4">
                        {value.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{value.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-neutral-dark">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </StaggeredAnimation>
          </div>
        </div>
      </section>

      {/* Educational Philosophy Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <AnimatedSection animation="slideInLeft" className="space-y-6">
              <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Our Educational Philosophy
              </div>
              <h2
                className="text-3xl md:text-4xl font-bold text-neutral-darkest mb-4"
                style={{ color: "#ff623e" }}
              >
                "Rigor, Fun Together"
              </h2>
              <p className="text-neutral-dark">
                We believe academic rigor and fun must coexist. We also believe
                in competitive cooperation. Children respond to being stretched
                and challenged. We will do that! In our view, it is that stretch
                and challenge that brings satisfaction and enjoyment.
              </p>
              <p className="text-neutral-dark">
                Children love to master difficult things and, in the best sense
                of the term, to "show off" their mastery. We will give them lots
                of opportunities to do that. Also, play is often talked about as
                if it were a break from serious learning. No! At High
                International Standard School, play is serious learning. We
                believe healthy play is really the work of childhood.
              </p>

              <div className="bg-neutral-light p-6 rounded-lg">
                <h3 className="text-xl font-bold text-neutral-darkest mb-3">
                  Our Teaching Approach
                </h3>
                <p className="text-neutral-dark">
                  We teach the Ghanaian curriculum using a proprietary teaching
                  and learning system modeled on the acclaimed Oxford learning
                  approach. The approach involves Inquiry-Based Teaching and
                  Learning, and Problem-Based Learning (PBL). We believe this
                  will help cultivate critical thinking, collaboration,
                  communication and leadership in our learners.
                </p>
              </div>
            </AnimatedSection>

            {/* Right Column - Image */}
            <AnimatedSection animation="slideInRight" className="relative">
              <div className="rounded-lg overflow-hidden shadow-medium">
                {/* This would be replaced with an actual image */}
                <img
                  src={SchoolBuilding}
                  alt="School Building"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Teaching & Learning Standards Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <div className="inline-block bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Teaching & Learning Policy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Commitment to Quality Education
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              We place the quality of teaching at the very top of our list of
              priorities, ensuring consistent standards across the school.
            </p>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Policy Aims</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="text-secondary mt-1 mr-3">
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
                      Establish a framework for quality first class teaching and
                      learning across the school.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-secondary mt-1 mr-3">
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
                      Ensure consistency across the school in terms of the
                      quality of teaching, learning and assessment.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-secondary mt-1 mr-3">
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
                      Inform teachers about how the quality of teaching and
                      learning will be monitored to ensure a self-improving
                      system.
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Teacher Standards
                </h3>
                <p className="mb-4">
                  Our teachers adhere to the highest professional standards,
                  including:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Planning & Preparation
                    </h4>
                    <p className="text-sm">
                      Teachers plan their lessons as part of wider schemes of
                      learning to ensure strategic delivery of curriculum
                      content.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Delivery of Lessons</h4>
                    <p className="text-sm">
                      Teachers deliver high-quality lessons using effective
                      scaffolding, modeling, explanation, questioning, and
                      feedback.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Assessment</h4>
                    <p className="text-sm">
                      Regular and meaningful feedback is provided to students to
                      accelerate learning progress.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Meeting Students' Needs
                    </h4>
                    <p className="text-sm">
                      Teachers tailor their teaching to support all students,
                      including those with special educational needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* School Leadership Section */}
      <section className="py-20">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              Our Leadership
            </div>
            <h2
              className="text-3xl md:text-4xl font-bold text-neutral-darkest mb-4"
              style={{ color: "#ff623e" }}
            >
              Meet Our Team
            </h2>
            <p className="text-neutral-dark max-w-2xl mx-auto">
              Our dedicated leadership team brings extensive experience in
              education to ensure the highest standards at HISS.
            </p>
          </AnimatedSection>

          {/* Leadership Team - This would be populated with actual staff members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Head of School */}
            <AnimatedSection animation="fadeIn" delay={0.1}>
              <div className="bg-white rounded-lg shadow-soft overflow-hidden text-center">
                <div className="h-64 bg-neutral-light flex items-center justify-center">
                  <img
                    src={HeadOfSchool}
                    alt="Head of School"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-darkest mb-1">
                    Frank K. Abankwa-Ntim
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    Head of School
                  </p>
                  <p className="text-sm text-neutral-dark">
                    M. Ed, M.A. Educ. Leadership, B. Ed DBE, Cert 'A'
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Director of Teaching & Learning */}
            <AnimatedSection animation="fadeIn" delay={0.2}>
              <div className="bg-white rounded-lg shadow-soft overflow-hidden text-center">
                <div className="h-64 bg-neutral-light flex items-center justify-center">
                  <img
                    src={DTL}
                    alt="DTL"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-darkest mb-1">
                    Director Name
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    Director of Teaching & Learning
                  </p>
                  <p className="text-sm text-neutral-dark">
                    Educational qualifications would go here
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Administrator */}
            <AnimatedSection animation="fadeIn" delay={0.3}>
              <div className="bg-white rounded-lg shadow-soft overflow-hidden text-center">
                <div className="h-64 bg-neutral-light flex items-center justify-center">
                  <img
                    src={Administrator}
                    alt="Administrator"
                    className="w-full h-[250px] object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-darkest mb-1">
                    Administrator Name
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    School Administrator
                  </p>
                  <p className="text-sm text-neutral-dark">
                    Educational qualifications would go here
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
