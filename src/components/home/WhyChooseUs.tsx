"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const WhyChooseUs = () => {
  const features = [
    { 
      title: "Experienced Advisors", 
      description: "Our expert consultants with 10+ years experience provide personalized guidance tailored to your goals.",
      icon: "/images/why-us/advisor.jpg",
      bgColor: "bg-blue-50"
    },
    { 
      title: "University Partnerships", 
      description: "Exclusive partnerships with 500+ top-ranked institutions across 30 countries.",
      icon: "/images/why-us/partner.jpg",
      bgColor: "bg-green-50"
    },
    { 
      title: "Visa Assistance", 
      description: "98% success rate with dedicated visa specialists handling your entire application.",
      icon: "/images/why-us/visa.jpg",
      bgColor: "bg-purple-50"
    },
    {
      title: "Scholarship Guidance",
      description: "Access to $5M+ in exclusive scholarships and financial aid opportunities.",
      icon: "/images/why-us/scholarship.jpg",
      bgColor: "bg-amber-50"
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
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#327fc7] font-semibold mb-3 block">WHY CHOOSE US</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Your Pathway to Global Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We go beyond counseling to provide end-to-end support for your international education journey.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`${feature.bgColor} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center`}
            >
              <div className="w-20 h-20 mb-6 rounded-full bg-white shadow-md overflow-hidden">
                <Image 
                  src={feature.icon} 
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <button className="mt-auto text-[#327fc7] font-medium hover:text-[#2a6cb3] transition-colors">
                Learn more →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;