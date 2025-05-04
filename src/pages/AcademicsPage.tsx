import {
  FaGraduationCap,
  FaBook,
  FaLightbulb,
  FaChalkboardTeacher,
} from "react-icons/fa";
import AnimatedSection from "../components/common/AnimatedSection";
import StaggeredAnimation from "../components/common/StaggeredAnimation";

const AcademicsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-5xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-xl max-w-3xl">
              Our curriculum is designed to foster critical thinking,
              creativity, and a lifelong love of learning in a supportive and
              challenging environment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="slideUp">
            <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">
              Our Educational Philosophy
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection animation="slideInLeft" delay={0.1}>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <FaLightbulb className="text-4xl text-yellow-500 mr-4" />
                  <h3 className="text-2xl font-semibold">
                    Holistic Development
                  </h3>
                </div>
                <p className="text-gray-700">
                  We believe in developing the whole child — intellectually,
                  physically, socially, and emotionally — preparing them to
                  thrive in an ever-changing world.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight" delay={0.2}>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                  <FaGraduationCap className="text-4xl text-blue-600 mr-4" />
                  <h3 className="text-2xl font-semibold">Academic Rigor</h3>
                </div>
                <p className="text-gray-700">
                  Our challenging curriculum pushes students to reach their full
                  potential while providing the support needed for success.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="slideUp">
            <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">
              Curriculum Overview
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeIn" delay={0.1}>
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                  Pre-School (Ages 3-5)
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <span>Play-based learning approach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <span>Early literacy and numeracy skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <span>Social and emotional development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <span>Creative arts and expression</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <span>Physical development</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={0.2}>
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                  Primary School (Ages 6-11)
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <span>Core subjects: Mathematics, English, Science</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <span>Global languages program</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <span>STEM projects and activities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <span>Arts, music, and physical education</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <span>Character development</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={0.3}>
              <div className="border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">
                  JHS (Ages 12-14)
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <span>Advanced core curriculum</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <span>Critical thinking and problem solving</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <span>Research and project-based learning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <span>Technology integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      ✓
                    </span>
                    <span>Leadership and community service</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="slideUp">
            <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">
              Our Teaching Approach
            </h2>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <p className="text-lg text-gray-700">
                At HISS, we combine traditional and innovative teaching methods
                to create an engaging learning environment that challenges
                students while supporting their individual needs.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            <StaggeredAnimation animation="slideUp" staggerDelay={0.15}>
              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-600 rounded-full p-3 text-white">
                    <FaChalkboardTeacher className="text-2xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">
                    Inquiry-Based Learning
                  </h3>
                  <p className="text-gray-700">
                    Students are encouraged to ask questions, investigate
                    problems, and discover solutions through hands-on
                    experiences.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-600 rounded-full p-3 text-white">
                    <FaBook className="text-2xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">
                    Differentiated Instruction
                  </h3>
                  <p className="text-gray-700">
                    We recognize that each student learns differently and adapt
                    our teaching methods to meet individual needs.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-600 rounded-full p-3 text-white">
                    <FaLightbulb className="text-2xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">
                    Collaborative Learning
                  </h3>
                  <p className="text-gray-700">
                    Students work together on projects and activities that
                    develop teamwork, communication, and leadership skills.
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-4">
                  <div className="bg-blue-600 rounded-full p-3 text-white">
                    <FaGraduationCap className="text-2xl" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-blue-800">
                    Technology Integration
                  </h3>
                  <p className="text-gray-700">
                    We incorporate technology throughout our curriculum to
                    enhance learning and prepare students for the digital world.
                  </p>
                </div>
              </div>
            </StaggeredAnimation>

            <AnimatedSection animation="slideInRight" delay={0.3}>
              <img
                src="/src/assets/images/teaching-approach.jpg"
                alt="Students in classroom"
                className="rounded-lg shadow-xl object-cover w-full h-full"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/600x400?text=Teaching+Approach";
                }}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-900 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl font-bold mb-6">
              Experience Our Academic Excellence
            </h2>
            <p className="text-xl mb-10">
              Schedule a visit to see our exceptional curriculum and teaching
              methods in action.
            </p>
            <a
              href="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Schedule a Visit
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default AcademicsPage;
