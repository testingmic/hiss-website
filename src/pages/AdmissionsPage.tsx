import { useState } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaInfoCircle,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import AnimatedSection from "../components/common/AnimatedSection";
import StaggeredAnimation from "../components/common/StaggeredAnimation";

const AdmissionsPage = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Admission process steps
  const admissionSteps = [
    {
      title: "Submit Application",
      description:
        "Complete and submit the application form with all required documents.",
      icon: "📝",
    },
    {
      title: "Assessment",
      description:
        "Student undergoes an appropriate assessment based on their age and applying grade level.",
      icon: "✏️",
    },
    {
      title: "Interview",
      description:
        "Parents and student attend an interview with school administrators.",
      icon: "🗣️",
    },
    {
      title: "Acceptance",
      description:
        "Receive admission decision and welcome package if accepted.",
      icon: "🎉",
    },
    {
      title: "Fee Payment",
      description:
        "Pay initial fees to secure your child's place at the school.",
      icon: "💳",
    },
    {
      title: "Orientation",
      description:
        "Attend orientation session to learn about school policies and procedures.",
      icon: "🏫",
    },
  ];

  // Fee structure
  const feeStructure = [
    {
      title: "Admission Fee",
      amount: "GH₵ 2,550.00",
      description: "One-time fee, payable in installments",
      details:
        "Monthly installment: GH₵ 1,400 after successful assessment and GH₵ 420 per month for three months during the term.",
    },
    {
      title: "Tuition Fee",
      amount: "GH₵ 1,900.00",
      description: "Per term",
      details: "This covers all regular academic programs and activities.",
    },
    {
      title: "Transport Fee (Optional)",
      amount: "GH₵ 1,000.00 - 1,600.00",
      description: "Per term",
      details: "Varies depending on location.",
    },
    {
      title: "Extra-curricular Fee (Optional)",
      amount: "GH₵ 200.00 - 450.00",
      description: "Per term",
      details: "For specialized activities beyond the regular curriculum.",
    },
    {
      title: "Feeding Fee (Optional)",
      amount: "GH₵ 945.00 - 1,890.00",
      description: "Per term",
      details: "For school meal services.",
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What documents are required for admission?",
      answer:
        "Required documents include birth certificate, previous school reports (if applicable), passport photos, and health records including immunization history.",
    },
    {
      question: "What age requirements apply for different grade levels?",
      answer:
        "Pre-Kindergarten: Ages 2-3, Kindergarten: Ages 4-5, Primary School: Ages 6-11, Junior High School: Ages 12-14. Children should typically be within these age ranges for their respective grade levels.",
    },
    {
      question:
        "Are there any discounts available for families with multiple children?",
      answer:
        "Yes, we offer sibling discounts: 25% for the third child, 35% for the fourth child, and 40% for the fifth child and beyond.",
    },
    {
      question: "What is the school's policy on mid-term admissions?",
      answer:
        "Mid-term admissions are possible subject to availability of places. Students will be assessed to determine if they can integrate well into ongoing programs.",
    },
    {
      question: "Do you offer scholarships or financial aid?",
      answer:
        "We have a limited number of scholarships based on academic merit and financial need. Please inquire with our admissions office for current opportunities and application requirements.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Admissions - High International Standard School</title>
        <meta
          name="description"
          content="Join the High International Standard School family. Learn about our admission process, fees, and apply today to provide your child with quality education."
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
              Join Our School Family
            </motion.h1>

            <motion.p
              className="text-xl text-white/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We welcome students who are eager to learn and grow in a
              supportive educational environment. Our admission process is
              designed to ensure that we can meet each student's educational
              needs.
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

      {/* Admission Process Section */}
      <section className="py-20">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-neutral-darkest mb-4"
              style={{ color: "#ff623e" }}
            >
              Admission Process
            </h2>
            <p className="text-neutral-dark max-w-2xl mx-auto">
              Our admission process is designed to be straightforward while
              ensuring that we can properly assess each student's needs and
              abilities.
            </p>
          </AnimatedSection>

          {/* Steps */}
          <div className="max-w-5xl mx-auto">
            <div className="relative after:absolute after:top-0 after:bottom-0 after:left-1/2 after:-ml-0.5 after:w-1 after:bg-primary/20">
              <StaggeredAnimation
                containerClass="space-y-12"
                animation="fadeIn"
              >
                {admissionSteps.map((step, index) => (
                  <div key={index} className="relative z-10">
                    <div
                      className={`flex items-start ${
                        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                      }`}
                    >
                      {/* Icon */}
                      <div className="flex-shrink-0 z-10">
                        <div
                          className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl shadow-md"
                          style={{ backgroundColor: "#ff623e" }}
                        >
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <div
                        className={`${
                          index % 2 === 0 ? "ml-8 mr-auto" : "mr-8 ml-auto"
                        } bg-white rounded-lg shadow-soft p-6 max-w-md`}
                      >
                        <div className="flex items-center mb-3">
                          <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mr-3">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-neutral-darkest">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-neutral-dark">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </StaggeredAnimation>
            </div>
          </div>

          {/* Apply Button */}
          <div className="text-center mt-16">
            <a
              href="#application-form"
              className="btn-primary text-lg px-8 py-4"
              style={{ backgroundColor: "#ff623e" }}
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="py-20 bg-neutral-light">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-darkest mb-4">
              Fee Structure
            </h2>
            <p className="text-neutral-dark max-w-2xl mx-auto">
              We strive to provide quality education at an affordable price.
              Below is our fee structure for the current academic year.
            </p>
          </AnimatedSection>

          {/* Fee Cards */}
          <div className="grid grid-cols-1  gap-6 max-w-5xl mx-auto w-full">
            <StaggeredAnimation
              containerClass="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              className="h-full"
              animation="fadeIn"
            >
              {feeStructure.map((fee, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-soft overflow-hidden h-full"
                >
                  <div
                    className="bg-primary p-6 text-white"
                    style={{ backgroundColor: "#ff623e" }}
                  >
                    <h3 className="text-xl font-bold mb-1">{fee.title}</h3>
                    <p className="text-white/80 text-sm">{fee.description}</p>
                  </div>
                  <div className="p-6">
                    <div className="text-3xl font-bold text-neutral-darkest mb-4">
                      {fee.amount}
                    </div>
                    <p className="text-neutral-dark text-sm">{fee.details}</p>
                  </div>
                </div>
              ))}
            </StaggeredAnimation>
          </div>

          {/* Additional Notes */}
          <AnimatedSection
            animation="fadeIn"
            className="mt-12 bg-white rounded-lg shadow-soft p-6 max-w-4xl mx-auto"
          >
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <FaInfoCircle className="text-primary text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-neutral-darkest mb-2">
                  Additional Information
                </h3>
                <ul className="space-y-2 text-neutral-dark">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>
                      All monthly installments should be paid in advance, on or
                      before the 7th day of every month.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Parents with three (3) or more children get discounts: 25%
                      for third child, 35% for fourth child, 40% for fifth child
                      and beyond.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>
                      School uniform, textbooks, workbooks, and all assessments
                      are included in the tuition fee.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-accent mt-1 mr-2 flex-shrink-0" />
                    <span>
                      Parents wishing to use the shuttle, enroll for
                      extra-curricular activity, and canteen services should
                      kindly reserve their place at the start of each term.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-neutral-darkest mb-4"
              style={{ color: "#ff623e" }}
            >
              Frequently Asked Questions
            </h2>
            <p className="text-neutral-dark max-w-2xl mx-auto">
              Find answers to common questions about our admissions process.
            </p>
          </AnimatedSection>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto">
            {faqItems.map((item, index) => (
              <AnimatedSection
                key={index}
                animation="fadeIn"
                delay={index * 0.1}
                className="mb-4"
              >
                <div
                  className={`border ${
                    activeAccordion === index
                      ? "border-primary"
                      : "border-neutral"
                  } rounded-lg overflow-hidden transition-all duration-300`}
                >
                  <button
                    className={`w-full p-4 text-left font-medium flex items-center justify-between ${
                      activeAccordion === index
                        ? "bg-primary text-white"
                        : "bg-white text-neutral-darkest"
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span>{item.question}</span>
                    {activeAccordion === index ? (
                      <FaAngleUp className="flex-shrink-0 ml-2" />
                    ) : (
                      <FaAngleDown className="flex-shrink-0 ml-2" />
                    )}
                  </button>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeAccordion === index ? "auto" : 0,
                      opacity: activeAccordion === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden bg-white"
                  >
                    <div className="p-4 border-t border-neutral">
                      <p className="text-neutral-dark">{item.answer}</p>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-20 bg-neutral-light">
        <div className="container-custom">
          <AnimatedSection animation="fadeIn" className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold text-neutral-darkest mb-4"
              style={{ color: "#ff623e" }}
            >
              Apply Now
            </h2>
            <p className="text-neutral-dark max-w-2xl mx-auto">
              Complete the form below to start your child's application process.
              Our admissions team will contact you within 2-3 business days.
            </p>
          </AnimatedSection>

          {/* Form */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-medium p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="child-first-name"
                    className="block text-neutral-darkest font-medium mb-2"
                  >
                    Child's First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="child-first-name"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="child-last-name"
                    className="block text-neutral-darkest font-medium mb-2"
                  >
                    Child's Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="child-last-name"
                    className="input-field"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label
                    htmlFor="child-dob"
                    className="block text-neutral-darkest font-medium mb-2"
                  >
                    Date of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="child-dob"
                    className="input-field"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="child-gender"
                    className="block text-neutral-darkest font-medium mb-2"
                  >
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select id="child-gender" className="input-field" required>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="applying-for"
                    className="block text-neutral-darkest font-medium mb-2"
                  >
                    Applying For <span className="text-red-500">*</span>
                  </label>
                  <select id="applying-for" className="input-field" required>
                    <option value="">Select Grade</option>
                    <option value="pre-kg">Pre-Kindergarten</option>
                    <option value="kg">Kindergarten</option>
                    <option value="p1">Primary 1</option>
                    <option value="p2">Primary 2</option>
                    <option value="p3">Primary 3</option>
                    <option value="p4">Primary 4</option>
                    <option value="p5">Primary 5</option>
                    <option value="p6">Primary 6</option>
                    <option value="jhs1">JHS 1</option>
                    <option value="jhs2">JHS 2</option>
                    <option value="jhs3">JHS 3</option>
                  </select>
                </div>
              </div>

              <div className="border-t border-neutral-light pt-6">
                <h3 className="text-xl font-semibold text-neutral-darkest mb-4">
                  Parent/Guardian Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="parent-name"
                      className="block text-neutral-darkest font-medium mb-2"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="parent-name"
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="relationship"
                      className="block text-neutral-darkest font-medium mb-2"
                    >
                      Relationship to Child{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select id="relationship" className="input-field" required>
                      <option value="">Select Relationship</option>
                      <option value="parent">Parent</option>
                      <option value="guardian">Guardian</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-neutral-darkest font-medium mb-2"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="input-field"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-neutral-darkest font-medium mb-2"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input-field"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="address"
                  className="block text-neutral-darkest font-medium mb-2"
                >
                  Residential Address <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="address"
                  rows={3}
                  className="input-field w-full"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-neutral-darkest font-medium mb-2"
                >
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="input-field w-full"
                  placeholder="Please share any additional information that you think would be helpful for us to know"
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  className="mt-1 mr-3"
                  required
                />
                <label htmlFor="terms" className="text-sm text-neutral-dark">
                  I confirm that the information provided is accurate and I
                  understand that submitting this application does not guarantee
                  admission. I agree to the school's{" "}
                  <a href="#" className="text-primary underline">
                    terms and conditions
                  </a>
                  .
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary text-lg px-12 py-4"
                  style={{ backgroundColor: "#ff623e" }}
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdmissionsPage;
