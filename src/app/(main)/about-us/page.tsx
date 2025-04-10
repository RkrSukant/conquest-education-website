"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TeamCard from "@/components/about-us/team-card";
import StatsCounter from "@/components/about-us/stats-counter";
import Footer from "@/components/common/Footer";
import { FaLightbulb, FaHandshake, FaRocket } from "react-icons/fa";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Raghav Thapaliya",
      role: "Founder & CEO",
      bio: "20+ years in international education consulting",
      image: "/images/team/placeholder_profile.jpg"
    },
    {
      name: "Gokul Pradhan",
      role: "Documentation Officer",
      bio: "Former university admissions officer with 15 years experience",
      image: "/images/team/placeholder_profile.jpg"
    },
    {
      name: "Rushali Kapali",
      role: "Communication Officer",
      bio: "Helped 500+ students find their ideal programs",
      image: "/images/team/placeholder_profile.jpg"

    },
    {
      name: "Kushal Malla",
      role: "Visa Lodgement",
      bio: "Immigration law expert with 12 years in student visas",
      image: "/images/team/placeholder_profile.jpg"
    }
  ];
  const values = [
    {
      title: "Innovation",
      description: "We constantly push boundaries to create cutting-edge solutions.",
      icon: FaLightbulb, // Icon component
    },
    {
      title: "Integrity",
      description: "We build trust through transparency and honesty.",
      icon: FaHandshake, // Icon component
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we do.",
      icon: FaRocket, // Icon component
    },
  ];

  const stats = [
    { value: 12, label: "Years Experience", suffix: "+" },
    { value: 5000, label: "Students Helped", suffix: "+" },
    { value: 98, label: "Success Rate", suffix: "%" },
    { value: 200, label: "Partner Institutions", suffix: "+" }
  ];

  return (
    <div className="bg-white">
      <section className="relative h-96 md:h-[500px]">
        <Image
          src="/images/about-us/about-conquest.jpg"
          alt="Our team helping students"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center">
          <div className="container mx-auto px-6 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              About CEC
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto"
            >
              Empowering students to achieve global education dreams since 2012
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2012, Conquest Education began with a simple mission: to make quality international education accessible to all. What started as a small consultancy in New Delhi has grown into a trusted global education partner.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have helped thousands of students from 15 countries achieve their academic dreams at top institutions worldwide.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-xl overflow-hidden shadow-xl"
            >
              <Image
                src="/images/about-us/our-story.jpg"
                alt="Our office and team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#327fc7] text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <StatsCounter 
                  value={stat.value}
                  suffix={stat.suffix}
                  duration={1.5}
                  className="text-4xl md:text-5xl font-bold mb-2" 
                />
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <div className="inline-block mb-6">
        <div className="w-16 h-1 bg-[#327fc7] rounded-full"></div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Our Values
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        The foundation of every decision we make and action we take
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-10">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          viewport={{ once: true }}
          whileHover={{ y: -10 }}
          className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#327fc7]"
        >
          <div className="w-14 h-14 bg-[#327fc7]/10 rounded-full flex items-center justify-center mb-6">
            <value.icon className="w-6 h-6 text-[#327fc7]" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-5">{value.title}</h3>
          <p className="text-gray-600 leading-relaxed">{value.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
      </section>
    </div>
  );
};

export default AboutUs;