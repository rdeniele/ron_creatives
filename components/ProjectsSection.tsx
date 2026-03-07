"use client";

import React, { useState } from "react";

const projects = [
  { title: "Wisker Demo Ad", image: "/assets/wisker.png", link: "/projects/wisker-demo-ad", category: "Video", isVideo: true },
  { title: "Premium Edits", image: "/assets/arinapodcastcover.png", link: "/projects/premium-edits", category: "Video", isVideo: true },
  { title: "Hayde Park Hotel", image: "/assets/haydeparkhotel.png", link: "/projects/hayde-park-hotel", category: "Branding", isVideo: false },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}>
          Featured Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group block rounded-xl overflow-hidden border border-[#E5E5E5] bg-white transition-shadow hover:shadow-lg"
              style={{ textDecoration: 'none' }}
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
            </a>
          ))}
        </div>
        <div className="flex justify-center">
          <a
            href="/portfolio"
            className="px-8 py-3 rounded-full font-medium border border-black bg-white text-black transition-all duration-200 hover:bg-[#E5E5E5]"
            style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}
          >
            See All Work
          </a>
        </div>
      </div>
    </section>
  );
}
