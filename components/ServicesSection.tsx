"use client";

import { FaArrowRight } from "react-icons/fa6";

const SERVICES = [
  {
    title: "AI Visual Design",
    description: "Hundreds of AI-powered marketing visuals & social graphics",
  },
  {
    title: "Video Production",
    description: "Short-form videos & campaign reels",
  },
  {
    title: "Branding & Identity",
    description: "Logos, style guides, marketing layouts",
  },
  {
    title: "Web & Landing Pages",
    description: "Fullstack & responsive landing page design",
  },
];

import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <Parallax speed={-5}>
        <motion.div
          className="max-w-5xl mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            What I Do
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {SERVICES.map((service, idx) => (
              <motion.div
                key={service.title}
                className="bg-white border border-[#E5E5E5] rounded-xl p-8 flex flex-col items-start shadow-none hover:shadow-md transition-shadow min-h-[180px]"
                style={{ minHeight: 160 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-xl font-bold mb-3" style={{ color: '#000', fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif' }}>
                  {service.title}
                </h3>
                <p className="text-base" style={{ color: '#A3A3A3', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: 400 }}>
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center">
            <motion.a
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-medium border border-black bg-white text-black transition-all duration-200 hover:bg-[#E5E5E5] group"
              style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              See All Services
              <FaArrowRight className="text-black text-sm group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </Parallax>
    </section>
  );
}
