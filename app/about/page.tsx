"use client";
// import AboutMeSection from "../../components/AboutMeSection";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import React, { useState } from "react";

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

export default function AboutPage() {
  const [slide, setSlide] = useState(0);
  const perSlide = 3;
  const totalSlides = Math.ceil(experiences.length / perSlide);

  const goPrev = () => setSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const goNext = () => setSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  return (
    <div className="min-h-screen w-full bg-white text-black font-sans flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center py-20 bg-white text-black">
        <section id="about" className="py-20 bg-white w-full">
          <Parallax speed={-3}>
            <motion.div
              className="max-w-6xl mx-auto px-6 flex flex-col items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <motion.h2
                className="text-2xl md:text-3xl font-bold mb-8 text-center"
                style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                About Me
              </motion.h2>
              <div className="flex flex-col lg:flex-row items-center gap-12 w-full">
                <motion.img
                src="/assets/rongradpic2.png"
                alt="Ron Deniele Paragoso"
                className="w-full lg:w-1/3 max-w-md lg:max-w-none h-auto object-cover rounded-lg border border-black bg-white"
                style={{ boxShadow: '0 4px 16px 0 rgba(0,0,0,0.08)' }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                viewport={{ once: true }}
              />
                <motion.p
                  className="text-base text-left leading-relaxed lg:w-2/3"
                  style={{ color: '#222', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: 400 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
                  viewport={{ once: true }}
                >
                Hi, I'm Ron Deniele Paragoso — a creative technologist and storyteller at heart. I started as a kid who loved digital and traditional art, spending hours sketching and painting, while also breaking apart my gadgets just to rebuild them again. This unique blend of creativity and technology became the foundation of who I am today.<br /><br />
                Over the years, I've merged these passions into a career helping brands and businesses stand out in the digital age. Whether I'm building a sleek landing page, crafting a brand identity, or generating AI-powered visuals, I approach every project with the same curiosity and drive that sparked my journey as a kid.<br /><br />
                My work is about more than pixels and code — it’s about telling stories, solving problems, and creating experiences that connect with people. I believe that great design is invisible, but its impact is unforgettable.<br /><br />
                When I’m not working, you’ll find me exploring new creative tools, collaborating with teams around the globe, or simply enjoying a good cup of coffee while brainstorming my next big idea.
                </motion.p>
              </div>
            </motion.div>
          </Parallax>
        </section>
        <section id="experience" className="py-10 w-full">
          <Parallax speed={-3}>
            <motion.div
              className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-lg font-semibold mb-5 text-center"
                style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >Experience</motion.h3>
              <div className="flex flex-col items-center">
                <div className="flex flex-row items-center gap-4">
                  <motion.button
                    aria-label="Previous Experience"
                    onClick={goPrev}
                    className="rounded-full border border-[#E5E5E5] w-8 h-8 flex items-center justify-center bg-white hover:bg-[#F5F5F5] transition"
                    style={{ fontSize: 20, color: '#888' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    &#8592;
                  </motion.button>
                  <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
                    {experiences.slice(slide * perSlide, slide * perSlide + perSlide).map((exp, idx) => (
                      <motion.div
                        key={exp.title + exp.date}
                        className="flex flex-col items-center min-w-[180px] max-w-[240px]"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 + idx * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      >
                        <span className={`w-3 h-3 rounded-full border-2 mb-2 ${exp.current ? 'bg-black border-black' : 'bg-[#E5E5E5] border-[#E5E5E5]'}`}></span>
                        <div className="bg-white border border-[#E5E5E5] rounded-lg p-3 text-center min-w-[180px] max-w-[220px]">
                          <div className="text-sm font-bold mb-1" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}>{exp.title}</div>
                          <div className="text-xs mb-0.5" style={{ color: '#6b7280', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>{exp.company}</div>
                          <div className="text-xs mb-1" style={{ color: '#A3A3A3', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>{exp.date}</div>
                          <div className="text-xs mt-1" style={{ color: '#444', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontSize: '13px' }}>{exp.summary}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <motion.button
                    aria-label="Next Experience"
                    onClick={goNext}
                    className="rounded-full border border-[#E5E5E5] w-8 h-8 flex items-center justify-center bg-white hover:bg-[#F5F5F5] transition"
                    style={{ fontSize: 20, color: '#888' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    &#8594;
                  </motion.button>
                </div>
                <div className="flex flex-row gap-1 mt-3">
                  {Array.from({ length: totalSlides }).map((_, i) => (
                    <span
                      key={i}
                      className={`w-2 h-2 rounded-full ${i === slide ? 'bg-black' : 'bg-[#E5E5E5]'}`}
                      style={{ display: 'inline-block' }}
                    ></span>
                  ))}
                </div>
              </div>
            </motion.div>
          </Parallax>
        </section>
        <section id="dev-work" className="py-16 w-full bg-white">
          <Parallax speed={-2}>
            <motion.div
              className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-lg font-semibold mb-4 text-center"
                style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
              >Development Work</motion.h3>
              <motion.p
                className="text-base text-center max-w-2xl leading-relaxed"
                style={{ color: '#444', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                Beyond design, I specialize in full-stack web development, creating responsive, performant applications using modern technologies like React, Next.js, TypeScript, and Node.js. I build everything from sleek landing pages to complex web applications, always focusing on clean code, optimal user experience, and scalable architecture.
              </motion.p>
              <motion.a
                href="https://ronparagoso.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-white rounded-lg font-semibold hover:from-purple-700 hover:via-pink-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif' }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Development Portfolio →
              </motion.a>
            </motion.div>
          </Parallax>
        </section>
        <section id="interests" className="py-16 w-full bg-white">
          <Parallax speed={-2}>
            <motion.div
              className="max-w-3xl mx-auto px-6 flex flex-col items-center gap-10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <motion.h3
                className="text-lg font-semibold mb-4 text-center"
                style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                viewport={{ once: true }}
              >Personal Interests</motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {/* Art */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80"
                    alt="Digital and Traditional Art"
                    className="w-full h-40 object-cover rounded-lg border border-[#E5E5E5] mb-3"
                  />
                  <div className="text-center">
                    <span className="font-bold text-black">Art (Digital & Traditional)</span>
                    <p className="text-gray-700 text-sm mt-1">I love expressing ideas through both digital illustration and traditional sketching. Art is my way to relax, explore creativity, and bring concepts to life visually.</p>
                  </div>
                </div>
                {/* Coding */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
                    alt="Coding"
                    className="w-full h-40 object-cover rounded-lg border border-[#E5E5E5] mb-3"
                  />
                  <div className="text-center">
                    <span className="font-bold text-black">Coding</span>
                    <p className="text-gray-700 text-sm mt-1">Building things with code is both my profession and my passion. I enjoy solving problems, automating tasks, and experimenting with new technologies.</p>
                  </div>
                </div>
                {/* Working Out */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&w=400&q=80"
                    alt="Working Out"
                    className="w-full h-40 object-cover rounded-lg border border-[#E5E5E5] mb-3"
                  />
                  <div className="text-center">
                    <span className="font-bold text-black">Working Out</span>
                    <p className="text-gray-700 text-sm mt-1">Staying active is important to me. Whether it’s lifting, running, or just moving, working out helps me stay focused, energized, and balanced.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Parallax>
        </section>
      </main>
      <Footer />
    </div>
  );
}
