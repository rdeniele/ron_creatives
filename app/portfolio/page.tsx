"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";


// Manually define each project for easy editing
const allProjects = [
  // Short-form works
  {
    title: "Wisker Demo Ad",
    image: undefined,
    video: "/assets/Wisker demo_ad.mp4",
    category: "Short-form works",
    isVideo: true,
    description: "AI-powered ad for Wisker. Video production, editing, and creative direction.",
  },
  {
    title: "Premium Edits",
    image: undefined,
    video: "/assets/arina_podcast.mp4",
    category: "Short-form works",
    isVideo: true,
    description: "Podcast and social video edits for creators. Workflow automation and style guides.",
  },
  // Logo works
  {
    title: "Legality Logo",
    image: "/assets/legality.png",
    video: undefined,
    category: "Logo works",
    isVideo: false,
    description: "Legality logo and digital assets.",
  },
  // Layout and design
  {
    title: "Handy Ranie Layout",
    image: "/assets/handyranie.png",
    video: undefined,
    category: "Layout and design",
    isVideo: false,
    description: "Handy Ranie branding and illustration.",
  },
  {
    title: "Wisker 2",
    image: "/assets/wisker2.jpg",
    video: undefined,
    category: "Layout and design",
    isVideo: false,
    description: "Wisker 2 layout design.",
  },
  {
    title: "Thoughts Visual",
    image: "/assets/thoughts.png",
    video: undefined,
    category: "Logo works",
    isVideo: false,
    description: "Thoughts campaign visual.",
  },
  {
    title: "Hayde Park Hotel Website",
    image: "/assets/haydeparkhotel.png",
    video: undefined,
    category: "Logo works",
    isVideo: false,
    description: "Branding and web for Hayde Park Hotel. Logo, site, and digital assets.",
  },
  {
    title: "Haulivo Web Assets",
    image: "/assets/haulivo.png",
    video: undefined,
    category: "Logo works",
    isVideo: false,
    description: "Haulivo web and branding assets.",
  },
  {
    title: "Vireonest Web Assets",
    image: "/assets/vireonest.png",
    video: undefined,
    category: "Logo works",
    isVideo: false,
    description: "Vireonest branding and web assets.",
  },
  // Layout and design
  {
    title: "Wisker Pubmat",
    image: "/assets/wiskerpubmat.png",
    video: undefined,
    category: "Layout and design",
    isVideo: false,
    description: "Wisker publication material design.",
  },

  // Web design and development (public/assets/web)
  
  
  {
    title: "HTC",
    image: "/assets/web/design/HTC-2wqgoYH4.png",
    video: undefined,
    category: "Web design and development",
    isVideo: false,
    description: "HTC web design.",
  },
  {
    title: "ritwal",
    image: "/assets/web/design/ritwal.png",
    video: undefined,
    category: "Web design and development",
    isVideo: false,
    description: "ritwal web design.",
  },
  {
    title: "Bean Brewing Cafe",
    image: "/assets/web/design/bean-brewing-cafe.png",
    video: undefined,
    category: "Web design and development",
    isVideo: false,
    description: "Bean Brewing Cafe web design.",
  },
    {
    title: "Dwell",
    image: "/assets/web/design/Dwell-JnIKZ48V.png",
    video: undefined,
    category: "Web design and development",
    isVideo: false,
    description: "Dwell web design.",
  },
  
  {
    title: "donmacc",
    image: "/assets/web/design/donmacc.png",
    video: undefined,
    category: "Web design and development",
    isVideo: false,
    description: "donmacc web design.",
  },
  {
    title: "Haulivo Web Design",
    image: "/assets/web/design/Haulivo.png",
    video: undefined,
    category: "Web design and development",
    isVideo: false,
    description: "Haulivo web design (design folder).",
  },
  {
    title: "HTLR",
    image: "/assets/web/design/HTLR-4QtHt9Li.png",
    video: undefined,
    category: "Web design and development",
    isVideo: false,
    description: "HTLR web design.",
  },
  {
    title: "noteJewel AI",
    image: "/assets/web/design/noteJewel_AI.png",
    video: undefined,
    category: "Web design and development",
    isVideo: false,
    description: "noteJewel AI web UI.",
  },
  {
    title: "Simplabots",
    image: "/assets/web/design/simplabots_AI.png",
    video: undefined,
    category: "Web design and development",
    isVideo: false,
    description: "Simplabots blurred UI concept.",
  },
  
  {
    title: "BudYet",
    image: "/assets/web/BudYet.png",
    video: undefined,
    category: "Web design and development",
    isVideo: false,
    description: "BudYet web app UI design.",
  },
];




export default function PortfolioPage() {
  // Track modal open state per project title
  const [openModal, setOpenModal] = useState("");

  return (
    <>
      <Navbar />
      <section className="py-24 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}>
            All Projects
          </h1>
          {/* Category sections */}
          {[
            "Short-form works",
            "Logo works",
            "Layout and design",
            "Web design and development",
          ].map((cat) => (
            <div key={cat} className="mb-12">
              <h2 className="text-2xl font-bold mb-6 mt-2 text-left" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}>{cat}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {allProjects.filter((p) => p.category === cat).map((project, idx) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
                    viewport={{ once: true }}
                  >
                    <motion.button
                      className="group block rounded-xl overflow-hidden border border-[#E5E5E5] bg-white transition-shadow hover:shadow-lg focus:outline-none text-left"
                      style={{ textDecoration: 'none' }}
                      onClick={() => setOpenModal(project.title)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="aspect-[4/3] w-full bg-[#F5F5F5] overflow-hidden relative flex items-center justify-center">
                        {project.isVideo ? (
                          <video controls className="w-full h-full object-cover">
                            <source src={project.video} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                        ) : (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            style={{ display: 'block' }}
                          />
                        )}
                        {project.isVideo && (
                          <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="drop-shadow-md">
                              <circle cx="28" cy="28" r="28" fill="rgba(0,0,0,0.45)" />
                              <polygon points="23,18 40,28 23,38" fill="#fff" />
                            </svg>
                          </span>
                        )}
                        <div className="absolute inset-0 bg-[#E5E5E5]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center">
                          <span className="w-full text-center py-3 text-lg font-bold text-black bg-white/80" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif' }}>{project.title}</span>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="text-sm text-[#6b7280] mb-1">{project.category}</div>
                        <div className="text-xs text-[#444] mb-2">{project.description}</div>
                      </div>
                    </motion.button>
                    {/* Modal for this project */}
                    <AnimatePresence>
                      {openModal === project.title && (
                        <motion.div
                          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                          onClick={() => setOpenModal("")}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <motion.div
                            className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative flex flex-col items-center"
                            onClick={e => e.stopPropagation()}
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <button
                              className="absolute top-3 right-3 text-2xl text-[#888] hover:text-black focus:outline-none"
                              onClick={() => setOpenModal("")}
                              aria-label="Close"
                            >
                              &times;
                            </button>
                            {project.isVideo ? (
                              <video controls className="w-full rounded-lg mb-4">
                                <source src={project.video} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            ) : (
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full rounded-lg mb-4"
                              />
                            )}
                            <h2 className="text-xl font-bold mb-2 text-center" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}>{project.title}</h2>
                            <div className="text-sm text-[#444] text-center mb-2">{project.description}</div>
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
