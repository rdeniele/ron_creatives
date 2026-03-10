"use client";

const experiences = [
  {
    title: "AI Developer",
    company: "Outrank Strategy • North, Centerville, UT",
    date: "Jun 2025 - Present • Remote Contract",
    current: true,
    summary: "Developed an AI automation platform and boosted team speed by 60% through front-end and AI infrastructure.",
  },
  {
    title: "Web Designer/Developer",
    company: "The Rise Collective • Florida, USA",
    date: "Jan 2024 - Feb 2026 • Remote Contract",
    current: true,
    summary: "Designed 10+ real estate sites, generated 300+ leads, and reduced turnaround by 40% via global collaboration.",
  },
  {
    title: "Data Analyst",
    company: "The Rise Collective • Florida, USA",
    date: "Dec 2025 - Jan 2026 • Remote Contract",
    current: false,
    summary: "Implemented analytics and tracking for 10+ sites, delivering actionable performance insights.",
  },
  {
    title: "Web Developer",
    company: "The Rise Collective • Florida, USA",
    date: "Jan 2024 - Jan 2025 • Remote Contract",
    current: false,
    summary: "Developed 5 professional sites, managed affiliate landing pages, and ensured near-zero downtime.",
  },
  {
    title: "Software Developer Intern",
    company: "Green Module Systems • Florida, USA",
    date: "Jan 2024 - Jan 2025 • Remote",
    current: false,
    summary: "Built finance and HR systems, improving efficiency by 60% and reducing bug turnaround by 35%.",
  },
];


import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";


export default function AboutMeSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <Parallax speed={-3}>
        <motion.div
          className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 md:gap-16 bg-white/90 rounded-2xl p-8 md:p-12 border border-[#E5E5E5] shadow-none hover:shadow-md transition-shadow"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex-shrink-0 flex justify-center items-center w-full md:w-auto"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/ronpic4.png"
              alt="Ron Deniele Paragoso"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-black bg-white"
            />
          </motion.div>
          <motion.div
            className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <h2
              className="text-xl md:text-2xl font-bold mb-2"
              style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}
            >
              About Me
            </h2>
            <p
              className="text-base max-w-xl mb-2"
              style={{ color: '#222', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: 400 }}
            >
              Hi, I’m Ron Deniele Paragoso — a creative technologist fusing design, code, and AI to craft standout digital experiences. I help brands grow with modern web solutions, compelling content, and a passion for innovation.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-3 mt-3 rounded-full font-medium border border-black bg-white text-black transition-all duration-200 hover:bg-[#E5E5E5] group"
                style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}
                aria-label="Discover My Story"
              >
                Discover My Story
                <FaArrowRight className="text-black text-sm group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </Parallax>
    </section>
  );
}
