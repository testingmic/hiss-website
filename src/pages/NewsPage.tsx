import { useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaAngleRight,
  FaSearch,
} from "react-icons/fa";
import AnimatedSection from "../components/common/AnimatedSection";
import StaggeredAnimation from "../components/common/StaggeredAnimation";

import ScienceCompetition from "../assets/images/img1.jpeg";
import ArtsCenter from "../assets/images/ing5.jpeg";
import CulturalDiversity from "../assets/images/library.jpeg";
import ExamResults from "../assets/images/img2.jpeg";

// Sample news data
const newsArticles = [
  {
    id: 1,
    title: "HISS Students Win National Science Competition",
    excerpt:
      "Our talented science team took first place at the National Science Olympiad, demonstrating exceptional knowledge and creativity in their projects.",
    content:
      "We are proud to announce that High International Standard School's science team has won the National Science Olympiad for the second consecutive year. The team, comprised of students from Years 8 and 9, impressed the judges with their innovative solutions to real-world problems. Their project on sustainable water filtration systems earned the highest marks for originality and practical application. The competition, which featured over 50 schools from across the country, tested students' knowledge in various scientific disciplines including physics, chemistry, and biology. Our students' success is a testament to their dedication and the quality of our science curriculum. We extend our congratulations to the students and their teachers for this outstanding achievement.",
    author: "HISS Administration",
    date: "June 12, 2023",
    readTime: "4 min read",
    category: "Academic Excellence",
    image: ScienceCompetition,
  },
  {
    id: 2,
    title: "New Arts Center Opening Next Month",
    excerpt:
      "We're excited to announce the completion of our state-of-the-art performing arts center, which will open its doors next month with a special inaugural performance.",
    content:
      "High International Standard School is thrilled to announce the completion of our new Performing Arts Center, a facility designed to nurture creativity and artistic expression among our students. The center, which includes a 250-seat auditorium, music practice rooms, a dance studio, and a drama room, will officially open on July 15th. The inaugural ceremony will feature performances by current students and alumni, showcasing the diverse talents within our school community. This facility represents our commitment to providing a well-rounded education that values artistic expression alongside academic excellence. The Performing Arts Center will support our existing music, dance, and drama programs while allowing us to expand our offerings in the coming academic year. We invite all parents and community members to join us for the opening celebration and to see this wonderful new addition to our campus.",
    author: "John Smith, Arts Director",
    date: "May 28, 2023",
    readTime: "5 min read",
    category: "Campus Development",
    image: ArtsCenter,
  },
  {
    id: 3,
    title: "HISS Celebrates Cultural Diversity Week",
    excerpt:
      "Students and staff participated in a vibrant week-long celebration of our school's cultural diversity through performances, cuisine, and traditional clothing.",
    content:
      "Last week, High International Standard School held its annual Cultural Diversity Week, a celebration that highlights the rich tapestry of cultures represented in our school community. Throughout the week, students participated in various activities designed to promote cultural understanding and appreciation. Monday featured an international food fair where families shared traditional dishes from their home countries. On Tuesday and Wednesday, students presented cultural performances including traditional dances, songs, and theatrical pieces from around the world. Thursday was dedicated to traditional clothing, with both students and staff proudly wearing attire representing their cultural heritage. The week concluded with a grand exhibition of student projects exploring different cultures and their contributions to global society. Cultural Diversity Week is one of our most anticipated events of the year, embodying our commitment to fostering a global mindset and mutual respect among our diverse student population.",
    author: "Sarah Johnson, Cultural Coordinator",
    date: "April 15, 2023",
    readTime: "6 min read",
    category: "School Events",
    image: CulturalDiversity,
  },
  {
    id: 4,
    title: "HISS Students Achieve Outstanding Results in National Exams",
    excerpt:
      "We are proud to announce that our students have once again excelled in the national examinations, with 95% scoring above the national average.",
    content:
      "The results of this year's national examinations have been released, and High International Standard School students have continued their tradition of academic excellence. With a 95% rate of students scoring above the national average, our school has maintained its position among the top educational institutions in the country. Particularly noteworthy are the achievements in mathematics and science, where 40% of our students received the highest possible grades. These results reflect the hard work of our students, the dedication of our teaching staff, and the effectiveness of our academic programs. They also validate our approach to education, which emphasizes critical thinking, problem-solving, and a deep understanding of concepts rather than rote memorization. We congratulate all our students on their achievements and look forward to their continued success in future academic endeavors.",
    author: "Dr. Elizabeth Taylor, Academic Director",
    date: "March 2, 2023",
    readTime: "4 min read",
    category: "Academic Excellence",
    image: ExamResults,
  },
];

// Sample upcoming events
const upcomingEvents = [
  {
    id: 101,
    title: "Annual Sports Day",
    date: "July 10, 2023",
    time: "8:00 AM - 4:00 PM",
    location: "School Sports Complex",
    description:
      "A day of athletic competition and team spirit for all grade levels.",
  },
  {
    id: 102,
    title: "Parent-Teacher Conference",
    date: "July 25-26, 2023",
    time: "1:00 PM - 6:00 PM",
    location: "School Classrooms",
    description:
      "Individual meetings between parents and teachers to discuss student progress.",
  },
  {
    id: 103,
    title: "Science Fair",
    date: "August 15, 2023",
    time: "9:00 AM - 3:00 PM",
    location: "School Auditorium",
    description:
      "Students present their research projects and scientific experiments.",
  },
  {
    id: 104,
    title: "Career Day",
    date: "September 5, 2023",
    time: "10:00 AM - 2:00 PM",
    location: "School Assembly Hall",
    description:
      "Professionals from various fields discuss career paths with JHS students.",
  },
];

const NewsPage = () => {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter news articles based on search query
  const filteredArticles = searchQuery
    ? newsArticles.filter(
        (article) =>
          article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : newsArticles;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-5xl font-bold mb-6">News & Events</h1>
            <p className="text-xl max-w-3xl">
              Stay updated with the latest news, announcements, and upcoming
              events at High International Standard School.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* News Articles */}
            <div className="lg:col-span-2">
              <AnimatedSection animation="slideUp">
                <div className="flex justify-between items-center mb-10">
                  <h2 className="text-3xl font-bold text-blue-900"
                    style={{ color: "#ff623e" }}
                  >
                    Latest News
                  </h2>

                  {/* Search Bar */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search news..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </div>
              </AnimatedSection>

              {selectedArticle === null ? (
                <StaggeredAnimation animation="fadeIn" staggerDelay={0.1}>
                  {filteredArticles.map((article) => (
                    <div
                      key={article.id}
                      className="mb-12 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <div className="mb-4 flex flex-wrap gap-2">
                          <span className="text-xs font-semibold bg-blue-100 text-blue-800 rounded-full px-3 py-1">
                            {article.category}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-3 text-blue-900">
                          {article.title}
                        </h3>
                        <p className="text-gray-700 mb-4">{article.excerpt}</p>
                        <div className="flex items-center mb-4 text-sm text-gray-600">
                          <FaUser className="mr-1" />
                          <span className="mr-4">{article.author}</span>
                          <FaCalendarAlt className="mr-1" />
                          <span className="mr-4">{article.date}</span>
                          <FaClock className="mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                        <button
                          onClick={() => setSelectedArticle(article.id)}
                          className="flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                        >
                          Read More
                          <FaAngleRight className="ml-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </StaggeredAnimation>
              ) : (
                <AnimatedSection animation="fadeIn">
                  {newsArticles.map(
                    (article) =>
                      article.id === selectedArticle && (
                        <div
                          key={article.id}
                          className="bg-white rounded-lg shadow-md p-6"
                        >
                          <button
                            onClick={() => setSelectedArticle(null)}
                            className="mb-6 flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                          >
                            <FaAngleRight className="transform rotate-180 mr-1" />
                            Back to All News
                          </button>

                          <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-96 object-cover rounded-lg mb-6"
                          />

                          <div className="mb-4 flex flex-wrap gap-2">
                            <span className="text-xs font-semibold bg-blue-100 text-blue-800 rounded-full px-3 py-1">
                              {article.category}
                            </span>
                          </div>

                          <h1 className="text-3xl font-bold mb-4 text-blue-900">
                            {article.title}
                          </h1>

                          <div className="flex items-center mb-6 text-sm text-gray-600">
                            <FaUser className="mr-1" />
                            <span className="mr-4">{article.author}</span>
                            <FaCalendarAlt className="mr-1" />
                            <span className="mr-4">{article.date}</span>
                            <FaClock className="mr-1" />
                            <span>{article.readTime}</span>
                          </div>

                          <div className="prose max-w-none text-gray-700">
                            <p className="mb-4 leading-relaxed">
                              {article.content}
                            </p>
                          </div>
                        </div>
                      )
                  )}
                </AnimatedSection>
              )}

              {filteredArticles.length === 0 && (
                <AnimatedSection animation="fadeIn">
                  <div className="text-center py-12">
                    <p className="text-gray-600 text-lg">
                      No news articles found matching your search.
                    </p>
                  </div>
                </AnimatedSection>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <AnimatedSection animation="slideInRight" delay={0.2}>
                {/* Upcoming Events */}
                <div className="bg-gray-50 rounded-lg shadow-md p-6 mb-10">
                  <h3 className="text-xl font-bold mb-6 text-blue-900"
                    style={{ color: "#ff623e" }}
                  >
                    Upcoming Events
                  </h3>
                  <StaggeredAnimation animation="fadeIn" staggerDelay={0.1}>
                    {upcomingEvents.map((event) => (
                      <div
                        key={event.id}
                        className="mb-6 border-b border-gray-200 pb-6 last:border-b-0 last:pb-0"
                      >
                        <h4 className="font-semibold text-lg mb-2">
                          {event.title}
                        </h4>
                        <div className="flex items-start mb-2">
                          <FaCalendarAlt className="text-blue-600 mt-1 mr-2" />
                          <div>
                            <p className="text-gray-700">{event.date}</p>
                            <p className="text-gray-700">{event.time}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-2">{event.location}</p>
                        <p className="text-gray-600 text-sm">
                          {event.description}
                        </p>
                      </div>
                    ))}
                  </StaggeredAnimation>
                  <a
                    href="/contact"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300 mt-4"
                  >
                    View Full Calendar
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <AnimatedSection animation="fadeIn">
            <h2
              className="text-3xl font-bold mb-6 text-blue-900"
              style={{ color: "#ff623e" }}
            >
              Join Our School Community
            </h2>
            <p className="text-xl mb-10 text-gray-700">
              Interested in giving your child the gift of excellent education?
              Learn more about admission to HISS.
            </p>
            <a
              href="/admissions"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300"
              style={{ backgroundColor: "#ff623e" }}
            >
              Apply Now
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
