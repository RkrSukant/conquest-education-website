"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {

  const socials= [
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/conquest-education-consultancy-675821288/",
      icon: "/images/icons/ic_linkedin.png",
    },
    {
      name: "facebook",
      link: "https://www.facebook.com/p/Conquest-Education-Consultancy-61550937393666/",
      icon: "/images/icons/ic_facebook.png",
    },
    {
      name: "instagram",
      link: "https://www.instagram.com/conquest_education/",
      icon: "/images/icons/ic_instagram.png",
    },
    {
      name: "tiktok",
      link: "https://www.tiktok.com/@conquest_education",
      icon: "/images/icons/ic_tiktok.png",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    course: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white">
      <section className="relative h-64 md:h-96 bg-gradient-to-r from-[#327fc7] to-[#2a6cb3]">
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl"
            >
              We're here to help with your education journey
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 mb-20">      
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-10 rounded-2xl shadow-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">

                <a href="tel:+977015919439" className="flex items-start group">
                  <div className="bg-[#327fc7]/10 p-3 rounded-full mr-6 group-hover:bg-[#327fc7]/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#327fc7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#327fc7] transition-colors">Phone</h3>
                    <p className="text-gray-600 group-hover:text-[#2a6cb3] transition-colors">+977 01-5919439</p>
                  </div>
                </a>
                
                <a href="https://wa.me/+9779843576100" target= "_blank" className="flex items-start group">
                  <div className="bg-[#327fc7]/10 p-3 rounded-full mr-6 group-hover:bg-[#327fc7]/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#327fc7]" viewBox="0 0 24 24" fill="currentColor">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
</svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#327fc7] transition-colors">Whatsapp</h3>
                    <p className="text-gray-600 group-hover:text-[#2a6cb3] transition-colors">+977 01-5919439</p>
                  </div>
                </a>

                <a href="mailto:info@conquesteducation.com" className="flex items-start group">
                  <div className="bg-[#327fc7]/10 p-3 rounded-full mr-6 group-hover:bg-[#327fc7]/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#327fc7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#327fc7] transition-colors">Email</h3>
                    <p className="text-gray-600 group-hover:text-[#2a6cb3] transition-colors">info@conquesteducation.com</p>
                  </div>
                </a>

                <div className="flex items-start">
                  <div className="bg-[#327fc7]/10 p-3 rounded-full mr-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#327fc7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">Icchumati Park, Adwait Marg<br />Kathmandu, KTM 44600</p>
                  </div>
                </div>

                <div className="pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    {socials.map((social) => (
                      <a 
                        key={social.name} 
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-200 hover:bg-[#327fc7]/10 p-3 rounded-full transition-colors"
                        aria-label={social.name}
                      >
                        <img 
                          src={social.icon} 
                          alt={social.name} 
                          className="w-6 h-6"
                        />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#327fc7] focus:border-[#327fc7] transition-all text-gray-800"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#327fc7] focus:border-[#327fc7] transition-all text-gray-800"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#327fc7] focus:border-[#327fc7] transition-all text-gray-800"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">Preferred Country</label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#327fc7] focus:border-[#327fc7] transition-all text-gray-800"
                  >
                    <option value="" className="text-gray-400">Select a country</option>
                    <option value="USA" className="text-gray-800">United States</option>
                    <option value="Canada" className="text-gray-800">Canada</option>
                    <option value="UK" className="text-gray-800">United Kingdom</option>
                    <option value="Australia" className="text-gray-800">Australia</option>
                    <option value="Germany" className="text-gray-800">Germany</option>
                    <option value="Other" className="text-gray-800">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-2">Preferred Course</label>
                  <textarea
                    id="course"
                    name="course"
                    rows={3}
                    value={formData.course}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#327fc7] focus:border-[#327fc7] transition-all text-gray-800 resize-none"
                    placeholder="e.g. Computer Science, Business Administration..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#327fc7] hover:bg-[#2a6cb3] text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Location</h2>
            
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.454859089913!2d85.3188612745763!3d27.70323897618494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196125600bd1%3A0x966b0a8e83ff10bf!2sConquest%20Education%20Consultancy%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1743510998293!5m2!1sen!2snp"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
              
              <div className="bg-gray-50 p-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Conquest Education Consultancy</h3>
                    <p className="text-gray-600">Near Shankar Dev Campus, Adwait Marg<br />Putalisadak, Kathmandu, Nepal</p>
                  </div>
                  <a
                    href="https://maps.app.goo.gl/5RuwfLhGezJD7ZEw8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 md:mt-0 bg-[#327fc7] hover:bg-[#2a6cb3] text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;