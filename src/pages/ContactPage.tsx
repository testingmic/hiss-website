import { useForm } from "react-hook-form";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaCheck,
} from "react-icons/fa";
import AnimatedSection from "../components/common/AnimatedSection";
import StaggeredAnimation from "../components/common/StaggeredAnimation";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // In a real implementation, you would send this data to your server
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="fadeIn">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl max-w-3xl">
              We're here to answer your questions and help you discover the HISS
              difference.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <AnimatedSection animation="slideInLeft">
              <h2
                className="text-3xl font-bold mb-10 text-blue-900"
                style={{ color: "#ff623e" }}
              >
                Get in Touch
              </h2>
              <StaggeredAnimation animation="fadeIn" staggerDelay={0.1}>
                <div className="flex items-start mb-8">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Our Location</h3>
                    <p className="text-gray-600">
                      123 Education Street, Accra, Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaPhone className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Phone Numbers
                    </h3>
                    <p className="text-gray-600">Main Office: 024-234-3408</p>
                    <p className="text-gray-600">Admissions: 024-555-6789</p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      Email Addresses
                    </h3>
                    <p className="text-gray-600">
                      General Inquiries: high_international@yahoo.com
                    </p>
                    <p className="text-gray-600">
                      Admissions: admissions@hiss.edu.gh
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaClock className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">School Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 7:30 AM - 3:30 PM
                    </p>
                    <p className="text-gray-600">
                      Office Hours: 8:00 AM - 5:00 PM
                    </p>
                  </div>
                </div>
              </StaggeredAnimation>
            </AnimatedSection>

            <AnimatedSection animation="slideInRight" delay={0.2}>
              <h2
                className="text-3xl font-bold mb-8 text-blue-900"
                style={{ color: "#ff623e" }}
              >
                Send a Message
              </h2>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <div className="bg-green-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <FaCheck className="text-green-600 text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700">
                    Thank you for contacting us. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                        errors.name ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                        errors.email ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      {...register("phone")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                        errors.subject ? "border-red-500" : "border-gray-300"
                      }`}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-gray-700 font-medium mb-2"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      {...register("message", {
                        required: "Message is required",
                      })}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                        errors.message ? "border-red-500" : "border-gray-300"
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                    style={{ backgroundColor: "#ff623e" }}
                  >
                    Send Message
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection animation="slideUp">
            <h2
              className="text-3xl font-bold text-center mb-16 text-blue-900"
              style={{ color: "#ff623e" }}
            >
              Find Us
            </h2>
            <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg overflow-hidden">
              {/* In a real implementation, replace this with an actual Google Maps embed */}
              <div className="w-full h-full flex items-center justify-center bg-blue-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.9500000000003!2d-0.18150000000000002!3d5.5540000000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf92024f477791%3A0x2d40da2ad8321e46!2sHigh%20International%20Standard%20School!5e0!3m2!1sen!2sgh!4v1718432400000!5m2!1sen!2sgh"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <AnimatedSection animation="fadeIn">
            <h2
              className="text-3xl font-bold text-center mb-16 text-blue-900"
              style={{ color: "#ff623e" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">
                  How can I schedule a school tour?
                </h3>
                <p className="text-gray-700">
                  You can schedule a tour by filling out the contact form above,
                  calling our admissions office at 024-555-6789, or emailing
                  admissions@hiss.edu.gh.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">
                  What are the admission requirements?
                </h3>
                <p className="text-gray-700">
                  Our admission requirements vary by grade level. Please visit
                  our Admissions page for detailed information or contact our
                  admissions office directly.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">
                  Do you offer transportation services?
                </h3>
                <p className="text-gray-700">
                  Yes, we offer transportation services for students living
                  within certain areas around Accra. Contact our office for
                  specific route information and fees.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">
                  Are there after-school programs available?
                </h3>
                <p className="text-gray-700">
                  Yes, we offer various after-school programs including sports,
                  arts, music, and academic enrichment activities. These
                  programs run until 5:00 PM on weekdays.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
