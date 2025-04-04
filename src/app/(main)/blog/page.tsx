"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const BlogPage = () => {
  const allBlogs = [
    {
      id: "choosing-right-university",
      title: "How to Choose the Right University Abroad",
      excerpt: "A step-by-step guide to finding your perfect international university match.",
      image: "/blog/university-selection.jpg",
      date: "May 15, 2023",
      readTime: "8 min read",
      category: "Admissions"
    },
    {
      id: "scholarship-strategies",
      title: "Top 10 Scholarship Strategies",
      excerpt: "Proven methods to secure funding for your overseas education.",
      image: "/blog/scholarships.jpg",
      date: "April 28, 2023",
      readTime: "10 min read",
      category: "Funding"
    },
    {
      id: "visa-success-guide",
      title: "The Ultimate Student Visa Success Guide",
      excerpt: "Avoid common pitfalls and maximize your chances of visa approval.",
      image: "/blog/visa-guide.jpg",
      date: "March 10, 2023",
      readTime: "12 min read",
      category: "Visa"
    },
    {
      id: "cultural-adjustment",
      title: "Cultural Adjustment: Thriving in a New Country",
      excerpt: "Practical advice for overcoming culture shock abroad.",
      image: "/blog/culture.jpg",
      date: "February 22, 2023",
      readTime: "6 min read",
      category: "Student Life"
    },
    {
      id: "ielts-preparation",
      title: "IELTS Preparation: Beyond Practice Tests",
      excerpt: "Advanced strategies to boost your IELTS score.",
      image: "/blog/ielts.jpg",
      date: "January 15, 2023",
      readTime: "9 min read",
      category: "Testing"
    },
    {
      id: "post-study-options",
      title: "Post-Study Work Options by Country",
      excerpt: "Comparison of work rights after graduation.",
      image: "/blog/work-options.jpg",
      date: "December 5, 2022",
      readTime: "11 min read",
      category: "Career"
    },
    {
      id: "application-timeline",
      title: "The Perfect Application Timeline",
      excerpt: "When to start preparing for each application component.",
      image: "/blog/timeline.jpg",
      date: "November 18, 2022",
      readTime: "7 min read",
      category: "Admissions"
    },
    {
      id: "statement-guide",
      title: "Writing a Winning Personal Statement",
      excerpt: "What admissions officers really look for.",
      image: "/blog/statement.jpg",
      date: "October 30, 2022",
      readTime: "9 min read",
      category: "Application"
    },
    {
      id: "budgeting-guide",
      title: "Budgeting for Study Abroad",
      excerpt: "How to plan your finances for international study.",
      image: "/blog/budget.jpg",
      date: "September 12, 2022",
      readTime: "8 min read",
      category: "Finances"
    },
    {
      id: "housing-guide",
      title: "International Student Housing Guide",
      excerpt: "On-campus vs off-campus housing options worldwide.",
      image: "/blog/housing.jpg",
      date: "August 5, 2022",
      readTime: "10 min read",
      category: "Student Life"
    },
    {
      id: "health-insurance",
      title: "Understanding Health Insurance Abroad",
      excerpt: "Navigating healthcare systems in different countries.",
      image: "/blog/health.jpg",
      date: "July 20, 2022",
      readTime: "6 min read",
      category: "Student Life"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = allBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(allBlogs.length / blogsPerPage);

  return (
    <div className="bg-white">
      <section className="relative h-64 md:h-[400px] bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center">
        <div className="container mx-auto px-6 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Education Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl max-w-2xl mx-auto"
          >
            Expert insights and advice for your study abroad journey
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl"
              >
                <Link href={`/blog/${blog.id}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      priority={index < 6}
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                      <span className="text-gray-500 text-sm">{blog.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{blog.title}</h3>
                    <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-sm">{blog.date}</span>
                      <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors flex items-center gap-1 group">
                        Read more 
                        <span className="inline-block group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {allBlogs.length > blogsPerPage && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center mt-12"
            >
              <nav className="flex items-center gap-1">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-50 transition-colors group"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-blue-600 group-hover:text-blue-800 group-disabled:text-gray-400 transition-colors" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <motion.button
                    key={page}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                      currentPage === page
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
                    } transition-all duration-200`}
                  >
                    {page}
                  </motion.button>
                ))}

                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-50 transition-colors group"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-blue-600 group-hover:text-blue-800 group-disabled:text-gray-400 transition-colors" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </nav>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;