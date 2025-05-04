import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaImage, FaVideo, FaTimes } from "react-icons/fa";
import AnimatedSection from "../components/common/AnimatedSection";
import StaggeredAnimation from "../components/common/StaggeredAnimation";

// Mocked gallery data
const galleryData = {
  photos: [
    {
      id: 1,
      category: "campus",
      title: "Campus Main Building",
      src: "https://placehold.co/800x600?text=Campus+Main+Building",
    },
    {
      id: 2,
      category: "campus",
      title: "Library",
      src: "https://placehold.co/800x600?text=Library",
    },
    {
      id: 3,
      category: "campus",
      title: "Playground",
      src: "https://placehold.co/800x600?text=Playground",
    },
    {
      id: 4,
      category: "campus",
      title: "Science Lab",
      src: "https://placehold.co/800x600?text=Science+Lab",
    },
    {
      id: 5,
      category: "events",
      title: "Sports Day",
      src: "https://placehold.co/800x600?text=Sports+Day",
    },
    {
      id: 6,
      category: "events",
      title: "Cultural Day",
      src: "https://placehold.co/800x600?text=Cultural+Day",
    },
    {
      id: 7,
      category: "events",
      title: "Graduation Ceremony",
      src: "https://placehold.co/800x600?text=Graduation+Ceremony",
    },
    {
      id: 8,
      category: "classrooms",
      title: "Pre-School Classroom",
      src: "https://placehold.co/800x600?text=Pre-School+Classroom",
    },
    {
      id: 9,
      category: "classrooms",
      title: "Primary Classroom",
      src: "https://placehold.co/800x600?text=Primary+Classroom",
    },
    {
      id: 10,
      category: "classrooms",
      title: "JHS Classroom",
      src: "https://placehold.co/800x600?text=JHS+Classroom",
    },
    {
      id: 11,
      category: "activities",
      title: "Science Fair",
      src: "https://placehold.co/800x600?text=Science+Fair",
    },
    {
      id: 12,
      category: "activities",
      title: "Art Exhibition",
      src: "https://placehold.co/800x600?text=Art+Exhibition",
    },
  ],
  videos: [
    {
      id: 101,
      category: "campus",
      title: "Campus Tour",
      thumbnail: "https://placehold.co/800x600?text=Campus+Tour+Video",
    },
    {
      id: 102,
      category: "events",
      title: "Annual Day Celebration",
      thumbnail: "https://placehold.co/800x600?text=Annual+Day+Video",
    },
  ],
};

// Gallery categories
const categories = ["all", "campus", "events", "classrooms", "activities"];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<null | {
    id: number;
    title: string;
    src: string;
  }>(null);

  // Filter gallery items based on selected category
  const filteredPhotos =
    selectedCategory === "all"
      ? galleryData.photos
      : galleryData.photos.filter(
          (photo) => photo.category === selectedCategory
        );

  const filteredVideos =
    selectedCategory === "all"
      ? galleryData.videos
      : galleryData.videos.filter(
          (video) => video.category === selectedCategory
        );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl max-w-3xl">
              Take a visual journey through our facilities, events, and student
              activities at High International Standard School.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="slideUp">
            <h2 className="text-3xl font-bold text-center mb-16 text-blue-900">
              Explore Our School
            </h2>
          </AnimatedSection>

          {/* Gallery Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <StaggeredAnimation
              animation="fadeIn"
              containerClass="flex flex-wrap justify-center gap-4"
              className=""
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </StaggeredAnimation>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filteredPhotos.map((photo) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
                  onClick={() => setSelectedImage(photo)}
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-semibold text-lg">
                        {photo.title}
                      </h3>
                      <div className="flex items-center mt-2">
                        <FaImage className="text-white mr-2" />
                        <span className="text-white text-sm">
                          {photo.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {filteredVideos.map((video) => (
                <motion.div
                  key={video.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md"
                >
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <h3 className="text-white font-semibold text-lg">
                        {video.title}
                      </h3>
                      <div className="flex items-center mt-2">
                        <FaVideo className="text-white mr-2" />
                        <span className="text-white text-sm">
                          {video.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-blue-600 rounded-full p-4 opacity-90">
                      <FaVideo className="text-white text-2xl" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection animation="fadeIn">
            <h2 className="text-3xl font-bold mb-6 text-blue-900">
              Want to Experience Our School in Person?
            </h2>
            <p className="text-xl mb-10 text-gray-700">
              Schedule a visit to HISS and see our facilities and vibrant
              learning environment first-hand.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
            >
              Contact Us to Arrange a Visit
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Lightbox Modal for Images */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 bg-white/20 rounded-full p-2 text-white hover:bg-white/40 transition-colors z-10"
                onClick={() => setSelectedImage(null)}
                title="Close image"
                aria-label="Close image"
              >
                <FaTimes className="text-xl" />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-semibold">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryPage;
