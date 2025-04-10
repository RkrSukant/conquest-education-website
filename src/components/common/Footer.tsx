"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about-us" },
      { name: "Our Team", path: "/about-us" },
      { name: "Testimonials", path: "/testimonials" },
      { name: "Careers", path: "/careers" }
    ],
    services: [
      { name: "University Selection", path: "/services/university-selection" },
      { name: "Visa Assistance", path: "/services/visa" },
      { name: "Scholarship Help", path: "/services/scholarships" },
      { name: "Test Preparation", path: "/services/test-prep" }
    ],
    resources: [
      { name: "Blog", path: "/blog" },
      { name: "FAQs", path: "/faqs" },
    ]
  };

  const socialMedia = [
    { name: "Facebook", icon: "/images/icons/ic_facebook.png", url: "https://www.facebook.com/p/Conquest-Education-Consultancy-61550937393666/" },
    { name: "LinkedIn", icon: "/images/icons/ic_linkedin.png", url: "https://www.linkedin.com/in/conquest-education-consultancy-675821288/" },
    { name: "Instagram", icon: "/images/icons/ic_instagram.png", url: "https://www.instagram.com/conquest_education/" },
    {name: "tiktok", url: "https://www.tiktok.com/@conquest_education", icon: "/images/icons/ic_tiktok.png",},
    {name: "whatsapp", url: "https://wa.me/+9779709200560", icon: "/images/icons/ic_whatsapp.png",},
  ];

  return (
    <footer className="bg-[#1a1a2e] text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Link href="/" className="flex items-center">
              <Image 
                src="/main-logo.png" 
                alt="Conquest Education Consultancy"
                width={400}
                height={100}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Icchumati park, Adwait Marg, Kathmandu
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                +977 01-5919439
              </p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                frontdesk@conquestnepal.com
              </p>
            </div>
            <div className="flex space-x-4">
              {socialMedia.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url}
                  target="_blank"
                  className="text-gray-400 hover:text-[#327fc7] transition-colors"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                </a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold capitalize">
                {category.replace(/([A-Z])/g, ' $1').trim()}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.path} 
                      className="text-gray-400 hover:text-[#327fc7] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-[#16213e] my-8"
        />

        <div className="flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            © {currentYear} Conquest Education Consultancy. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex space-x-4 mt-4 md:mt-0"
          >
            <Link href="/privacy" className="hover:text-[#327fc7] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#327fc7] transition-colors">
              Terms of Service
            </Link>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;