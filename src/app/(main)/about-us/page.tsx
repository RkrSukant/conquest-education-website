"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import TeamCard from "@/components/about-us/team-card";
import StatsCounter from "@/components/about-us/stats-counter";

const AboutUs = () => {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Founder & CEO",
      bio: "20+ years in international education consulting",
      image: "/team/john.jpg"
    },
    {
      name: "Sarah Johnson",
      role: "Head of Admissions",
      bio: "Former university admissions officer with 15 years experience",
      image: "/team/sarah.jpg"
    },
    {
      name: "Michael Chen",
      role: "Visa Specialist",
      bio: "Immigration law expert with 12 years in student visas",
      image: "/team/michael.jpg"
    },
    {
      name: "Priya Patel",
      role: "Student Counselor",
      bio: "Helped 500+ students find their ideal programs",
      image: "/team/priya.jpg"
    }
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
          src="/about-hero.jpg"
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
              About Conquest Education
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
                Founded in 2012, Conquest Education began with a simple mission: to make quality international education accessible to all.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have helped thousands of students from 15 countries achieve their academic dreams.
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
                src="/about-story.jpg"
                alt="Our office and team"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-600 text-white">
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
      <section className="py-20">
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Student First",
                description: "Every decision prioritizes students' long-term success and wellbeing."
              },
              {
                title: "Integrity",
                description: "We maintain the highest ethical standards in all our advice."
              },
              {
                title: "Excellence",
                description: "We continuously improve and stay updated with global trends."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;