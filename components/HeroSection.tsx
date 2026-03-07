"use client";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center bg-white px-6 text-center pt-28 md:pt-32 pb-40">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto gap-8 md:gap-12">
        <Parallax speed={-10} className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-1/3 h-full mb-6 md:mb-0">
          <motion.div
            className="w-40 h-56 md:w-full md:h-[420px] max-w-xs md:max-w-none"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="/assets/ronpic4.png"
              alt="Ron portrait"
              className="w-full h-full rounded-2xl object-cover shadow-lg border border-[#E5E5E5] bg-[#F5F5F5]"
              style={{ aspectRatio: '3 / 4' }}
            />
          </motion.div>
        </Parallax>
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-5 leading-tight tracking-tight"
            style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#111', letterSpacing: '-0.03em' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Digital Content & AI <br className="hidden md:inline" /> Creative Production
          </motion.h1>
          <motion.p
            className="text-base md:text-xl mb-10 max-w-xl mx-auto md:mx-0 text-[#555] font-normal"
            style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            I help brands transform ideas into visuals, video, branding, and web experiences.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start items-center md:items-start w-full">
            <motion.a
              href="#projects"
              className="w-full sm:w-auto px-7 py-2.5 rounded-full font-medium border border-[#222] bg-white text-[#111] hover:bg-[#F5F5F5] transition-colors duration-150 text-base md:text-lg shadow-sm"
              style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              See My Work
            </motion.a>
            <motion.a
              href="#contact"
              className="w-full sm:w-auto px-7 py-2.5 rounded-full font-medium border border-[#222] bg-[#111] text-white hover:bg-[#222] transition-colors duration-150 text-base md:text-lg shadow-sm"
              style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
      {/* Scroll Down Mouse Icon: Desktop (absolute at bottom) */}
      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 flex-col items-center z-10 hidden md:flex">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          {/* Free SVG mouse icon from Heroicons (MIT) - smaller size */}
          <svg width="22" height="32" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="20" height="30" rx="10" stroke="#222" strokeWidth="2.2" fill="white"/>
            <motion.circle
              cx="11"
              cy="9"
              r="2.1"
              fill="#222"
              animate={{ cy: [9, 15, 9] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
        <span className="text-xs mt-2 text-[#222] opacity-70 select-none" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>Scroll down</span>
      </div>

      {/* Scroll Down Mouse Icon: Mobile/Tablet (below buttons) */}
      <div className="flex flex-col items-center mt-8 md:hidden">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <svg width="22" height="32" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="20" height="30" rx="10" stroke="#222" strokeWidth="2.2" fill="white"/>
            <motion.circle
              cx="11"
              cy="9"
              r="2.1"
              fill="#222"
              animate={{ cy: [9, 15, 9] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
          </svg>
        </motion.div>
        <span className="text-xs mt-2 text-[#222] opacity-70 select-none" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>Scroll down</span>
      </div>
    </section>
  );
}
