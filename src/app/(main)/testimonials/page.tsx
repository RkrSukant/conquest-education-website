"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Priya K.",
      country: "Canada",
      program: "MSc Computer Science",
      image: "/images/team/placeholder_profile.jpg",
      quote: "The guidance I received helped me secure admission at my dream university with a 50% scholarship. The visa process was seamless!",
      achievement: "Scholarship secured at University of Toronto",
      year: "2023"
    },
    {
      name: "Rahul S.",
      country: "Germany",
      program: "Mechanical Engineering",
      image: "/images/team/placeholder_profile.jpg",
      quote: "From zero German to studying at TU Munich - I couldn't have done it without Conquest's language prep and application support.",
      achievement: "Admitted to TU Munich with language prep",
      year: "2022"
    },
    {
      name: "Aisha M.",
      country: "UK",
      program: "LLB Law",
      image: "/images/team/placeholder_profile.jpg",
      quote: "They matched me with the perfect UK university that aligned with my career goals in international law. The personal statement help was invaluable.",
      achievement: "Matched with ideal law program",
      year: "2023"
    },
    {
      name: "David L.",
      country: "USA",
      program: "MBA",
      image: "/images/team/placeholder_profile.jpg",
      quote: "The interview preparation was incredible - got accepted to 3 top business schools with funding offers. My counselor knew exactly what each school wanted.",
      achievement: "Multiple top MBA acceptances",
      year: "2021"
    },
    {
      name: "Sophie T.",
      country: "Australia",
      program: "Marine Biology",
      image: "/images/team/placeholder_profile.jpg",
      quote: "Conquest found programs I didn't even know existed. The scholarship they helped me uncover made studying abroad affordable.",
      achievement: "Discovered niche program + funding",
      year: "2022"
    },
    {
      name: "James L.",
      country: "France",
      program: "Culinary Arts",
      image: "/images/team/placeholder_profile.jpg",
      quote: "As a non-traditional student, I needed special guidance. The team tailored their approach to my unique situation perfectly.",
      achievement: "Non-traditional student success",
      year: "2023"
    }
  ];

  return (
    <div className="bg-white">
      <section className="relative h-96 bg-[#327fc7] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#327fc7] to-[#2a6cb3] opacity-90"></div>
        <div className="container mx-auto px-6 text-center text-white relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Student Success Stories
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto font-light"
          >
            Hear from students who achieved their global education dreams with our support
          </motion.p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-500"
              >
                <div className="p-10 h-full flex flex-col">
                  <div className="flex items-center mb-8">
                    <div className="relative h-20 w-20 rounded-full overflow-hidden border-4 border-[#327fc7]/20 mr-6">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">{testimonial.name}</h3>
                      <p className="text-gray-500 font-medium">
                        {testimonial.program} • {testimonial.country}
                      </p>
                    </div>
                  </div>

                  <div className="relative mb-8 flex-grow">
                    <svg
                      className="absolute -top-8 -left-8 w-20 h-20 text-[#327fc7]/10"
                      fill="currentColor"
                      viewBox="0 0 100 100"
                    >
                      <path d="M30 20v40h40v-40h-40zm-10-10h60v60h-60v-60z" />
                    </svg>
                    <blockquote className="text-xl text-gray-700 pl-10 relative z-10 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>

                  <div className="mt-auto pt-8 border-t border-gray-100">
                    <div className="flex items-center">
                      <div className="bg-[#327fc7]/10 p-3 rounded-lg mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-[#327fc7]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-[#327fc7] font-semibold">{testimonial.achievement}</p>
                        <p className="text-gray-400 text-sm">{testimonial.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-r from-[#327fc7] to-[#2a6cb3] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Begin Your Success Story
            </h2>
            <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-light">
              Our students' achievements start with a conversation
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white text-[#327fc7] hover:bg-gray-50 font-semibold py-4 px-12 rounded-full shadow-xl transition-all duration-300 text-lg"
            >
              Book Your Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsPage;