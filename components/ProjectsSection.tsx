"use client";


import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import React, { useState } from "react";

type Project = {
  title: string;
  image: string;
  link: string;
  category: string;
  isVideo: boolean;
  description: string;
};

const projects: Project[] = [
  { title: "Wisker Demo Ad", image: "/assets/wisker.png", link: "/assets/Wisker demo_ad.mp4", category: "Video", isVideo: true, description: "A creative video ad for Wisker." },
  { title: "Premium Edits", image: "/assets/arinapodcastcover.png", link: "/assets/arina_podcast.mp4", category: "Video", isVideo: true, description: "Podcast cover and video edits for Arina." },
  { title: "Hayde Park Hotel", image: "/assets/haydeparkhotel.png", link: "/projects/hayde-park-hotel", category: "Branding", isVideo: false, description: "Branding and design for Hayde Park Hotel." },
];

export default function ProjectsSection() {
  const [modalProject, setModalProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setModalProject(project);
  };
  const closeModal = () => {
    setModalProject(null);
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <Parallax speed={-5}>
        <motion.div
          className="max-w-6xl mx-auto px-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 text-center"
            style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Featured Work
          </motion.h2>
          <div className="flex flex-col gap-8 mb-10 lg:grid lg:grid-cols-3">
            {projects.map((project, idx) => (
              <motion.button
                key={project.title}
                type="button"
                onClick={() => openModal(project)}
                className="group block rounded-xl overflow-hidden border border-[#E5E5E5] bg-white transition-shadow hover:shadow-lg focus:outline-none"
                style={{ textDecoration: 'none' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="aspect-[4/3] w-full bg-[#F5F5F5] overflow-hidden relative flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ display: 'block' }}
                  />
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
              </motion.button>
            ))}
          </div>
          <div className="flex justify-center">
            <motion.a
              href="/portfolio"
              className="px-8 py-3 rounded-full font-medium border border-black bg-white text-black transition-all duration-200 hover:bg-[#E5E5E5]"
              style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              See All Work
            </motion.a>
          </div>
        </motion.div>
      </Parallax>

      {/* Modal */}
      {modalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-2 sm:px-6"
          style={{ overscrollBehavior: 'contain' }}
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl p-4 sm:p-6 relative animate-fadeIn flex flex-col"
            style={{ maxHeight: '90vh', overflowY: 'auto' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl font-bold focus:outline-none"
              aria-label="Close modal"
              style={{ zIndex: 2 }}
            >
              &times;
            </button>
            <div className="mb-4 flex flex-col items-center">
              <div className="relative w-full mb-4 flex justify-center items-center">
                {modalProject.isVideo ? (
                  <video
                    src={modalProject.link}
                    controls
                    className="w-full max-h-56 sm:max-h-72 object-contain rounded-lg bg-black"
                    poster={modalProject.image}
                  >
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img src={modalProject.image} alt={modalProject.title} className="w-full max-h-56 sm:max-h-72 object-contain rounded-lg" />
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif' }}>{modalProject.title}</h3>
              <p className="text-xs sm:text-sm text-gray-600 mb-2 text-center">{modalProject.category}</p>
              <p className="mb-4 text-center" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>{modalProject.description}</p>
              <a href={modalProject.link} className="inline-block px-5 py-2 rounded-full font-medium border border-black bg-black text-white transition-all duration-200 hover:bg-[#1A1A1A] text-sm sm:text-base" style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}>
                View Project
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
