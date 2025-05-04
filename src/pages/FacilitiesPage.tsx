import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaChevronRight,
  FaBuilding,
  FaFlask,
  FaLaptop,
  FaFutbol,
  FaBook,
  FaPalette,
} from "react-icons/fa";
import AnimatedSection from "../components/common/AnimatedSection";
import StaggeredAnimation from "../components/common/StaggeredAnimation";

// Facility Types
const facilityTypes = [
  { id: "academic", icon: <FaBuilding />, label: "Academic Buildings" },
  { id: "science", icon: <FaFlask />, label: "Science Facilities" },
  { id: "tech", icon: <FaLaptop />, label: "Technology Resources" },
  { id: "sports", icon: <FaFutbol />, label: "Sports Facilities" },
  { id: "library", icon: <FaBook />, label: "Libraries" },
  { id: "arts", icon: <FaPalette />, label: "Arts Facilities" },
];

// Facility Details
const facilityDetails = {
  academic: [
    {
      id: 1,
      name: "Main Academic Building",
      description:
        "Our state-of-the-art main academic building houses modern classrooms equipped with the latest educational technology.",
      image: "https://placehold.co/800x600?text=Main+Academic+Building",
      features: [
        "24 Spacious Classrooms",
        "Digital Whiteboards",
        "Comfortable Seating",
        "Excellent Acoustics",
        "Natural Lighting",
      ],
    },
    {
      id: 2,
      name: "Early Childhood Center",
      description:
        "A purpose-built facility designed specifically for our youngest learners with age-appropriate learning spaces.",
      image: "https://placehold.co/800x600?text=Early+Childhood+Center",
      features: [
        "Child-Friendly Design",
        "Interactive Learning Areas",
        "Indoor & Outdoor Play Spaces",
        "Nap Area",
        "Dedicated Washrooms",
      ],
    },
    {
      id: 3,
      name: "Junior High Building",
      description:
        "A dedicated building for our JHS students with specialized classrooms and collaborative spaces.",
      image: "https://placehold.co/800x600?text=Junior+High+Building",
      features: [
        "Subject-Specific Classrooms",
        "Group Study Areas",
        "Student Lockers",
        "Career Guidance Office",
        "Exam Hall",
      ],
    },
  ],
  science: [
    {
      id: 4,
      name: "Science Laboratories",
      description:
        "Fully-equipped laboratories for physics, chemistry, and biology experiments and research.",
      image: "https://placehold.co/800x600?text=Science+Laboratories",
      features: [
        "Physics Lab",
        "Chemistry Lab",
        "Biology Lab",
        "Safety Equipment",
        "Demonstration Areas",
      ],
    },
    {
      id: 5,
      name: "Environmental Science Garden",
      description:
        "An outdoor learning space where students can study plants, ecosystems, and sustainable practices.",
      image: "https://placehold.co/800x600?text=Environmental+Science+Garden",
      features: [
        "Vegetable Garden",
        "Weather Station",
        "Composting Area",
        "Greenhouse",
        "Outdoor Classroom",
      ],
    },
  ],
  tech: [
    {
      id: 6,
      name: "Computer Labs",
      description:
        "Modern computer laboratories equipped with the latest hardware and software for technology education.",
      image: "https://placehold.co/800x600?text=Computer+Labs",
      features: [
        "50+ Workstations",
        "High-Speed Internet",
        "Coding Software",
        "3D Printing",
        "Robotics Equipment",
      ],
    },
    {
      id: 7,
      name: "Digital Media Studio",
      description:
        "A creative space for students to explore digital art, animation, and multimedia production.",
      image: "https://placehold.co/800x600?text=Digital+Media+Studio",
      features: [
        "Video Editing Suite",
        "Audio Recording Booth",
        "Digital Art Workstations",
        "Green Screen",
        "Presentation Area",
      ],
    },
  ],
  sports: [
    {
      id: 8,
      name: "Sports Complex",
      description:
        "A comprehensive sports facility supporting various athletic activities and physical education.",
      image: "https://placehold.co/800x600?text=Sports+Complex",
      features: [
        "Football Field",
        "Basketball Court",
        "Volleyball Court",
        "Running Track",
        "Changing Rooms",
      ],
    },
    {
      id: 9,
      name: "Swimming Pool",
      description:
        "A temperature-controlled swimming pool for swimming lessons and recreational activities.",
      image: "https://placehold.co/800x600?text=Swimming+Pool",
      features: [
        "25-Meter Pool",
        "Shallow Learning Area",
        "Certified Lifeguards",
        "Spectator Seating",
        "Changing Facilities",
      ],
    },
  ],
  library: [
    {
      id: 10,
      name: "Main Library",
      description:
        "Our central library houses a vast collection of books, periodicals, and digital resources.",
      image: "https://placehold.co/800x600?text=Main+Library",
      features: [
        "20,000+ Books",
        "Digital Catalog",
        "Reading Nooks",
        "Research Stations",
        "Quiet Study Areas",
      ],
    },
    {
      id: 11,
      name: "Early Readers' Library",
      description:
        "A specialized library for younger students with age-appropriate books and interactive reading areas.",
      image: "https://placehold.co/800x600?text=Early+Readers+Library",
      features: [
        "Picture Books",
        "Reading Circles",
        "Storytelling Area",
        "Interactive E-books",
        "Comfortable Seating",
      ],
    },
  ],
  arts: [
    {
      id: 12,
      name: "Performing Arts Center",
      description:
        "A dedicated facility for music, dance, and drama performances and instruction.",
      image: "https://placehold.co/800x600?text=Performing+Arts+Center",
      features: [
        "250-Seat Auditorium",
        "Music Practice Rooms",
        "Dance Studio",
        "Drama Room",
        "Costume and Prop Storage",
      ],
    },
    {
      id: 13,
      name: "Visual Arts Studio",
      description:
        "A bright, spacious studio for painting, drawing, sculpture, and other visual arts.",
      image: "https://placehold.co/800x600?text=Visual+Arts+Studio",
      features: [
        "Painting Area",
        "Pottery Wheels",
        "Kiln",
        "Exhibition Space",
        "Art Supply Storage",
      ],
    },
  ],
};

const FacilitiesPage = () => {
  const [selectedType, setSelectedType] = useState<string>("academic");
  const [selectedFacility, setSelectedFacility] = useState<number | null>(null);

  const facilities =
    facilityDetails[selectedType as keyof typeof facilityDetails] || [];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-5xl font-bold mb-6">Our Facilities</h1>
            <p className="text-xl max-w-3xl">
              Discover the exceptional facilities at HISS designed to support
              academic excellence, creativity, and well-rounded development.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="slideUp">
            <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">
              World-Class Facilities
            </h2>
          </AnimatedSection>

          {/* Facility Type Navigation */}
          <div className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {facilityTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
                    selectedType === type.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <div className="text-2xl mb-3">{type.icon}</div>
                  <span className="text-sm font-medium text-center">
                    {type.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Facility Details */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* Facility List */}
            <AnimatedSection animation="slideInLeft" delay={0.1}>
              <div className="bg-gray-50 rounded-lg p-6 shadow-md">
                <h3 className="text-2xl font-semibold mb-6 text-blue-900">
                  {
                    facilityTypes.find((type) => type.id === selectedType)
                      ?.label
                  }
                </h3>
                <StaggeredAnimation
                  animation="fadeIn"
                  staggerDelay={0.1}
                  className="mb-4"
                >
                  {facilities.map((facility) => (
                    <div
                      key={facility.id}
                      onClick={() => setSelectedFacility(facility.id)}
                      className={`p-4 rounded-lg cursor-pointer flex items-center transition-colors ${
                        selectedFacility === facility.id
                          ? "bg-blue-100 border-l-4 border-blue-600"
                          : "bg-white hover:bg-gray-100 border-l-4 border-transparent"
                      }`}
                    >
                      <div className="mr-4">
                        <div
                          className={`p-3 rounded-full ${
                            selectedFacility === facility.id
                              ? "bg-blue-600 text-white"
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {
                            facilityTypes.find(
                              (type) => type.id === selectedType
                            )?.icon
                          }
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-lg font-semibold mb-1">
                          {facility.name}
                        </h4>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {facility.description}
                        </p>
                      </div>
                      <FaChevronRight
                        className={`transition-colors ${
                          selectedFacility === facility.id
                            ? "text-blue-600"
                            : "text-gray-400"
                        }`}
                      />
                    </div>
                  ))}
                </StaggeredAnimation>
              </div>
            </AnimatedSection>

            {/* Facility Detail View */}
            <AnimatedSection animation="slideInRight" delay={0.2}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <AnimatePresence mode="wait">
                  {selectedFacility ? (
                    <motion.div
                      key={selectedFacility}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {facilities.map(
                        (facility) =>
                          facility.id === selectedFacility && (
                            <div key={facility.id}>
                              <img
                                src={facility.image}
                                alt={facility.name}
                                className="w-full h-64 object-cover"
                              />
                              <div className="p-6">
                                <h3 className="text-2xl font-bold mb-4 text-blue-900">
                                  {facility.name}
                                </h3>
                                <p className="text-gray-700 mb-6">
                                  {facility.description}
                                </p>

                                <h4 className="text-lg font-semibold mb-3 text-blue-800">
                                  Key Features:
                                </h4>
                                <ul className="grid grid-cols-2 gap-3">
                                  {facility.features.map((feature, index) => (
                                    <li
                                      key={index}
                                      className="flex items-center text-gray-700"
                                    >
                                      <div className="bg-blue-100 p-1 rounded-full mr-2">
                                        <div className="bg-blue-600 rounded-full w-2 h-2"></div>
                                      </div>
                                      {feature}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )
                      )}
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center h-64 p-6 text-center"
                    >
                      <div>
                        <div className="text-5xl text-blue-200 mb-4">
                          {
                            facilityTypes.find(
                              (type) => type.id === selectedType
                            )?.icon
                          }
                        </div>
                        <p className="text-gray-500">
                          Select a facility to view details
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Campus Map Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">
              Campus Map
            </h2>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                {/* In a real implementation, this would be an interactive campus map */}
                <p className="text-gray-700 text-lg font-semibold">
                  Interactive Campus Map
                </p>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-700 mb-4">
                  Explore our campus from above and locate all our key
                  facilities.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
                >
                  Schedule a Campus Tour
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <AnimatedSection animation="slideUp">
            <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">
              What Our Community Says
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection animation="fadeIn" delay={0.1}>
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-blue-600">
                <p className="text-gray-700 mb-6 italic">
                  "The science laboratories at HISS are impressive. My daughter
                  has developed a real passion for chemistry because of the
                  hands-on experiments she gets to conduct regularly."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                    PN
                  </div>
                  <div>
                    <h4 className="font-semibold">Parent Name</h4>
                    <p className="text-sm text-gray-600">
                      Parent of Year 8 Student
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={0.2}>
              <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-green-600">
                <p className="text-gray-700 mb-6 italic">
                  "The library has been my favorite place to study. It's quiet,
                  well-stocked with resources, and the librarians are always
                  helpful when I'm researching for projects."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold mr-4">
                    SN
                  </div>
                  <div>
                    <h4 className="font-semibold">Student Name</h4>
                    <p className="text-sm text-gray-600">Year 9 Student</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-900 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl font-bold mb-6">
              Experience Our Campus In Person
            </h2>
            <p className="text-xl mb-10">
              Join us for a personalized campus tour to see our world-class
              facilities firsthand.
            </p>
            <a
              href="/contact"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Schedule a Tour
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;
