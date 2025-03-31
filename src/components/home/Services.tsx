"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Services = () => {
  const services = [
    {
      title: "University Selection",
      description: "Personalized university matching based on your academic profile and career goals",
      icon: "/icons/university.svg"
    },
    {
      title: "Application Processing",
      description: "End-to-end application support with 99% success rate",
      icon: "/icons/application.svg"
    },
    {
      title: "Scholarship Assistance",
      description: "Access to $5M+ in exclusive scholarships and financial aid",
      icon: "/icons/scholarship.svg"
    },
    {
      title: "Visa Guidance",
      description: "Expert visa consultation with 98% approval rate",
      icon: "/icons/visa.svg"
    },
    {
      title: "Test Preparation",
      description: "IELTS/TOEFL coaching with score improvement guarantee",
      icon: "/icons/test-prep.svg"
    },
    {
      title: "Pre-Departure Briefing",
      description: "Comprehensive orientation for your study abroad journey",
      icon: "/icons/departure.svg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-blue-600 font-semibold text-lg mb-2 block">OUR SERVICES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Study Abroad Support
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial consultation to post-arrival support, we're with you at every step
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 mb-6 mx-auto bg-blue-50 rounded-full flex items-center justify-center">
                <Image 
                  src={service.icon}
                  alt={service.title}
                  width={32}
                  height={32}
                  className="text-blue-600"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="text-blue-600 font-medium hover:text-blue-800 transition-colors flex items-center justify-center mx-auto">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            View All Services
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Services;