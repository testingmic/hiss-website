import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaImage, FaVideo, FaTimes } from "react-icons/fa";
import AnimatedSection from "../components/common/AnimatedSection";
import StaggeredAnimation from "../components/common/StaggeredAnimation";
import CampusMainBuilding from "../assets/images/img1.jpeg";
import Library from "../assets/images/ing5.jpeg";
import Playground from "../assets/images/img4.jpeg";
import ScienceLab from "../assets/images/img2.jpeg";
import SportsDay from "../assets/images/img3.jpeg";
import CulturalDay from "../assets/images/library.jpeg";
import ArtsFacility from "../assets/images/img6.jpeg";

// Import all gallery images
import Gallery1 from "../assets/gallery/gallery_1.jpeg";
import Gallery2 from "../assets/gallery/gallery_2.jpeg";
import Gallery3 from "../assets/gallery/gallery_3.jpeg";
import Gallery4 from "../assets/gallery/gallery_4.jpeg";
import Gallery5 from "../assets/gallery/gallery_5.jpeg";
import Gallery6 from "../assets/gallery/gallery_6.jpeg";
import Gallery7 from "../assets/gallery/gallery_7.jpeg";
import Gallery8 from "../assets/gallery/gallery_8.jpeg";
import Gallery9 from "../assets/gallery/gallery_9.jpeg";
import Gallery10 from "../assets/gallery/gallery_10.jpeg";
import Gallery11 from "../assets/gallery/gallery_11.jpeg";
import Gallery12 from "../assets/gallery/gallery_12.jpeg";
import Gallery13 from "../assets/gallery/gallery_13.jpeg";
import Gallery14 from "../assets/gallery/gallery_14.jpeg";
import Gallery15 from "../assets/gallery/gallery_15.jpeg";
import Gallery16 from "../assets/gallery/gallery_16.jpeg";
import Gallery17 from "../assets/gallery/gallery_17.jpeg";
import Gallery18 from "../assets/gallery/gallery_18.jpeg";
import Gallery19 from "../assets/gallery/gallery_19.jpeg";
import Gallery20 from "../assets/gallery/gallery_20.jpeg";
import Gallery21 from "../assets/gallery/gallery_21.jpeg";
import Gallery22 from "../assets/gallery/gallery_22.jpeg";
import Gallery23 from "../assets/gallery/gallery_23.jpeg";
import Gallery24 from "../assets/gallery/gallery_24.jpeg";
import Gallery25 from "../assets/gallery/gallery_25.jpeg";
import Gallery26 from "../assets/gallery/gallery_26.jpeg";
import Gallery27 from "../assets/gallery/gallery_27.jpeg";
import Gallery28 from "../assets/gallery/gallery_28.jpeg";
import Gallery29 from "../assets/gallery/gallery_29.jpeg";
import Gallery30 from "../assets/gallery/gallery_30.jpeg";
import Gallery31 from "../assets/gallery/gallery_31.jpeg";
import Gallery32 from "../assets/gallery/gallery_32.jpeg";
import Gallery33 from "../assets/gallery/gallery_33.jpeg";
import Gallery34 from "../assets/gallery/gallery_34.jpeg";
import Gallery35 from "../assets/gallery/gallery_35.jpeg";

// Define types for gallery items
interface GalleryPhoto {
  id: number;
  category: string;
  title: string;
  src: string;
}

interface GalleryVideo {
  id: number;
  category: string;
  title: string;
  thumbnail: string;
  videoUrl: string;
}

// Mocked gallery data
const galleryData = {
  photos: [
    {
      id: 1,
      category: "campus",
      title: "Campus Main Building",
      src: CampusMainBuilding,
    },
    {
      id: 2,
      category: "campus",
      title: "Library",
      src: Library,
    },
    {
      id: 3,
      category: "campus",
      title: "Playground",
      src: Playground,
    },
    {
      id: 4,
      category: "campus",
      title: "Science Lab",
      src: ScienceLab,
    },
    {
      id: 5,
      category: "events",
      title: "Sports Day",
      src: SportsDay,
    },
    {
      id: 6,
      category: "events",
      title: "Cultural Day",
      src: CulturalDay,
    },
    {
      id: 7,
      category: "events",
      title: "Graduation Ceremony",
      src: CulturalDay,
    },
    {
      id: 8,
      category: "classrooms",
      title: "Pre-School Classroom",
      src: CampusMainBuilding,
    },
    {
      id: 9,
      category: "classrooms",
      title: "Primary Classroom",
      src: CampusMainBuilding,
    },
    {
      id: 10,
      category: "classrooms",
      title: "JHS Classroom",
      src: CampusMainBuilding,
    },
    {
      id: 11,
      category: "activities",
      title: "Science Fair",
      src: ScienceLab,
    },
    {
      id: 12,
      category: "activities",
      title: "Art Exhibition",
      src: ArtsFacility,
    },
    // Add gallery images
    {
      id: 13,
      category: "gallery",
      title: "School Gallery - Image 1",
      src: Gallery1,
    },
    {
      id: 14,
      category: "gallery",
      title: "School Gallery - Image 2",
      src: Gallery2,
    },
    {
      id: 15,
      category: "gallery",
      title: "School Gallery - Image 3",
      src: Gallery3,
    },
    {
      id: 16,
      category: "gallery",
      title: "School Gallery - Image 4",
      src: Gallery4,
    },
    {
      id: 17,
      category: "gallery",
      title: "School Gallery - Image 5",
      src: Gallery5,
    },
    {
      id: 18,
      category: "gallery",
      title: "School Gallery - Image 6",
      src: Gallery6,
    },
    {
      id: 19,
      category: "gallery",
      title: "School Gallery - Image 7",
      src: Gallery7,
    },
    {
      id: 20,
      category: "gallery",
      title: "School Gallery - Image 8",
      src: Gallery8,
    },
    {
      id: 21,
      category: "gallery",
      title: "School Gallery - Image 9",
      src: Gallery9,
    },
    {
      id: 22,
      category: "gallery",
      title: "School Gallery - Image 10",
      src: Gallery10,
    },
    {
      id: 23,
      category: "gallery",
      title: "School Gallery - Image 11",
      src: Gallery11,
    },
    {
      id: 24,
      category: "gallery",
      title: "School Gallery - Image 12",
      src: Gallery12,
    },
    {
      id: 25,
      category: "gallery",
      title: "School Gallery - Image 13",
      src: Gallery13,
    },
    {
      id: 26,
      category: "gallery",
      title: "School Gallery - Image 14",
      src: Gallery14,
    },
    {
      id: 27,
      category: "gallery",
      title: "School Gallery - Image 15",
      src: Gallery15,
    },
    {
      id: 28,
      category: "gallery",
      title: "School Gallery - Image 16",
      src: Gallery16,
    },
    {
      id: 29,
      category: "gallery",
      title: "School Gallery - Image 17",
      src: Gallery17,
    },
    {
      id: 30,
      category: "gallery",
      title: "School Gallery - Image 18",
      src: Gallery18,
    },
    {
      id: 31,
      category: "gallery",
      title: "School Gallery - Image 19",
      src: Gallery19,
    },
    {
      id: 32,
      category: "gallery",
      title: "School Gallery - Image 20",
      src: Gallery20,
    },
    {
      id: 33,
      category: "gallery",
      title: "School Gallery - Image 21",
      src: Gallery21,
    },
    {
      id: 34,
      category: "gallery",
      title: "School Gallery - Image 22",
      src: Gallery22,
    },
    {
      id: 35,
      category: "gallery",
      title: "School Gallery - Image 23",
      src: Gallery23,
    },
    {
      id: 36,
      category: "gallery",
      title: "School Gallery - Image 24",
      src: Gallery24,
    },
    {
      id: 37,
      category: "gallery",
      title: "School Gallery - Image 25",
      src: Gallery25,
    },
    {
      id: 38,
      category: "gallery",
      title: "School Gallery - Image 26",
      src: Gallery26,
    },
    {
      id: 39,
      category: "gallery",
      title: "School Gallery - Image 27",
      src: Gallery27,
    },
    {
      id: 40,
      category: "gallery",
      title: "School Gallery - Image 28",
      src: Gallery28,
    },
    {
      id: 41,
      category: "gallery",
      title: "School Gallery - Image 29",
      src: Gallery29,
    },
    {
      id: 42,
      category: "gallery",
      title: "School Gallery - Image 30",
      src: Gallery30,
    },
    {
      id: 43,
      category: "gallery",
      title: "School Gallery - Image 31",
      src: Gallery31,
    },
    {
      id: 44,
      category: "gallery",
      title: "School Gallery - Image 32",
      src: Gallery32,
    },
    {
      id: 45,
      category: "gallery",
      title: "School Gallery - Image 33",
      src: Gallery33,
    },
    {
      id: 46,
      category: "gallery",
      title: "School Gallery - Image 34",
      src: Gallery34,
    },
    {
      id: 47,
      category: "gallery",
      title: "School Gallery - Image 35",
      src: Gallery35,
    },
  ] as GalleryPhoto[],
  videos: [] as GalleryVideo[],
};

// Gallery categories
const categories = ["all", "campus", "events", "classrooms", "activities", "gallery"];

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
          (video: any) => video?.category === selectedCategory
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
            <h2
              className="text-3xl font-bold text-center mb-16 text-blue-900"
              style={{ color: "#ff623e" }}
            >
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

              {filteredVideos.map((video: any) => (
                <motion.div
                  key={video?.id}
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
            <h2 className="text-3xl font-bold mb-6 text-blue-900"
              style={{ color: "#ff623e" }}
            >
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
