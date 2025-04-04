"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const StudyInPage = () => {
  const countries = [
    {
      name: "United States",
      image: "/images/study-in/usa.jpg",
      description: "Home to world-renowned universities with cutting-edge research facilities",
      stats: {
        students: "1.1M+",
        universities: "4,000+",
        popular: "Computer Science, Business"
      }
    },
    {
      name: "Canada",
      image: "/images/study-in/canada.jpg",
      description: "High-quality education with post-study work opportunities",
      stats: {
        students: "642K+",
        universities: "100+",
        popular: "Engineering, Healthcare"
      }
    },
    {
      name: "United Kingdom",
      image: "/images/study-in/uk.jpg",
      description: "World-class institutions with rich academic heritage",
      stats: {
        students: "679K+",
        universities: "160+",
        popular: "Law, Finance"
      }
    },
    {
      name: "Australia",
      image: "/images/study-in/australia.jpg",
      description: "Innovative programs with stunning campus environments",
      stats: {
        students: "758K+",
        universities: "43+",
        popular: "Marine Biology, Arts"
      }
    },
    {
      name: "Germany",
      image: "/images/study-in/germany.jpg",
      description: "Tuition-free education at top technical universities",
      stats: {
        students: "374K+",
        universities: "400+",
        popular: "Engineering, Automotive"
      }
    },
    {
      name: "France",
      image: "/images/study-in/france.jpg",
      description: "Cultural excellence with affordable tuition fees",
      stats: {
        students: "370K+",
        universities: "3,500+",
        popular: "Fashion, Culinary Arts"
      }
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
            Study Around the World
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Discover your ideal study destination with our global partners
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {countries.map((country, index) => (
              <motion.div
                key={country.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48">
                  <Image
                    src={country.image}
                    alt={country.name}
                    fill
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{country.name}</h3>
                  <p className="text-gray-600 mb-6">{country.description}</p>
                  
                  <div className="space-y-4 border-t border-gray-100 pt-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#327fc7]/10 flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-[#327fc7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">International Students</p>
                        <p className="font-semibold text-gray-800">{country.stats.students}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#327fc7]/10 flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-[#327fc7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Universities</p>
                        <p className="font-semibold text-gray-800">{country.stats.universities}</p>
                      </div>
                    </div>

                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-[#327fc7]/10 flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-[#327fc7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Popular Programs</p>
                        <p className="font-semibold text-gray-800">{country.stats.popular}</p>
                      </div>
                    </div>
                  </div>

                  <button className="mt-6 w-full bg-[#327fc7] hover:bg-[#2a6cb3] text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center">
                    Explore {country.name}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
            Need Help Choosing a Country?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl mb-8 max-w-2xl mx-auto"
          >
            Our experts will match you with the perfect destination based on your goals
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#327fc7] hover:bg-gray-100 font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            Get Personalized Advice
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default StudyInPage;