"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    { 
      name: "Raghav Rags", 
      text: "Thanks to Conquest Education Consultancy, I got admitted to my dream university with a 50% scholarship! The counselors understood my profile perfectly.",
      role: "MS in Computer Science, University of Toronto",
      avatar: "/images/icons/ic_profile.png"
    },
    { 
      name: "Sagun GunsyBoi", 
      text: "Highly professional and supportive team. They handled everything from applications to visa processing seamlessly.",
      role: "MBA, London Business School",
      avatar: "/images/icons/ic_profile.png"
    },
    { 
      name: "Shambhav ZiMow", 
      text: "Even after I switched consultancies mid-process, the Conquest team still helped me get into my top choice. Their dedication is unmatched!",
      role: "BSc Economics, University of Sydney",
      avatar: "/images/icons/ic_profile.png"
    },
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

  const renderStars = (rating: number) => {
    return (
      <div className="flex justify-center mt-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
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
          <span className="text-[#327fc7] font-semibold text-lg mb-2 block">TESTIMONIALS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success Stories From Our Students
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from students who achieved their study abroad dreams with our help
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex flex-col items-center mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-[#327fc7]/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <blockquote className="text-gray-700 italic mb-6">
                "{testimonial.text}"
              </blockquote>
              <div className="text-center">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#327fc7] hover:bg-[#2a6cb3] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
          >
            Read More Success Stories
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;