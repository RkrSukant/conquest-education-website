"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ServicesPage = () => {
  const serviceCategories = [
    {
      title: "Admissions Guidance",
      services: [
        {
          title: "University Selection",
          description: "Personalized matching with top global institutions",
          icon: "/images/services/university-selection.jpg",
          features: [
            "Best-fit university shortlisting",
            "Admission probability analysis",
            "5+ backup options"
          ]
        },
        {
          title: "Application Processing",
          description: "End-to-end support for flawless applications",
          icon: "/images/services/application-processing.jpg",
          features: [
            "Document preparation",
            "Essay/LOR review",
            "Deadline management"
          ]
        },
        {
          title: "Scholarship Assistance",
          description: "Maximize your funding opportunities",
          icon: "/images/services/scholarship-assistance.jpg",
          features: [
            "$5M+ scholarship database",
            "Application strategy",
            "Financial aid negotiation"
          ]
        }
      ]
    },
    {
      title: "Visa & Preparation",
      services: [
        {
          title: "Visa Guidance",
          description: "98% approval rate across all countries",
          icon: "/images/services/visa.jpg",
          features: [
            "Document checklist",
            "Mock interviews",
            "Appeal support"
          ]
        },
        {
          title: "Test Preparation",
          description: "Score improvement guaranteed",
          icon: "/images/services/test-preparations.jpg",
          features: [
            "IELTS/TOEFL coaching",
            "GRE/GMAT training",
            "Practice tests"
          ]
        },
        {
          title: "Pre-Departure Briefing",
          description: "Smooth transition to your new country",
          icon: "/images/services/briefing.jpg",
          features: [
            "Accommodation support",
            "Cultural orientation",
            "Travel checklist"
          ]
        }
      ]
    }
  ];

  return (
    <div className="bg-white">
      <section className="relative h-64 md:h-[400px] bg-[#327fc7] flex items-center justify-center">
        <div className="container mx-auto px-6 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Comprehensive support for your global education journey
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-16 last:mb-0"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="h-48 relative overflow-hidden">
                      <Image 
                        src={service.icon} 
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3 text-center">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 text-center">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <svg className="h-5 w-5 text-[#327fc7] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="px-6 pb-6 text-center">
                      <button className="text-[#327fc7] font-medium hover:text-[#2a6cb3] transition-colors flex items-center justify-center mx-auto">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#327fc7]">
        <div className="container mx-auto px-4 text-center text-white">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Start Your Journey Today
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <button className="bg-white text-[#327fc7] hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300 inline-flex items-center">
              Book Free Consultation
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;