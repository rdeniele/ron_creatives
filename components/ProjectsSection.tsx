"use client";
import React, { useState } from "react";

type Project = {
  type: "image" | "video";
  image?: string;
  video?: string;
  poster?: string;
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    type: "video",
    video: "/assets/Wisker demo_ad.mp4",
    poster: "/assets/wikser_cover.png",
    title: "Wisker Demo Ad",
    description: "Promotional video for Wisker app, showcasing features and user experience."
  },
  {
    type: "video",
    video: "/assets/arina_podcast.mp4",
    poster: "/assets/arinapodcastcover.png",
    title: "Arina Podcast",
    description: "Podcast episode production and editing for Arina."
  },
  {
    type: "image",
    image: "/assets/haydeparkhotel.png",
    title: "Hayde Park Hotel",
    description: "Branding and web design for Hayde Park Hotel."
  },
  {
    type: "image",
    image: "/assets/wiskerpubmat.png",
    title: "Wisker Pubmat",
    description: "Social media marketing material for Wisker."
  },
  {
    type: "image",
    image: "/assets/haulivo.png",
    title: "Haulivo",
    description: "Brand identity and logo design for Haulivo."
  },
  {
    type: "image",
    image: "/assets/legality.png",
    title: "Legality",
    description: "Legal services branding and web assets."
  },
  {
    type: "image",
    image: "/assets/handyranie.png",
    title: "Handy Ranie",
    description: "Mobile app UI/UX and logo for Handy Ranie."
  },
  {
    type: "image",
    image: "/assets/thoughts.png",
    title: "Thoughts",
    description: "Personal blog graphics and branding."
  },
  {
    type: "image",
    image: "/assets/vireonest.png",
    title: "VireoNest",
    description: "Startup branding and pitch deck visuals."
  },
];

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const perSlide = 3;
  const totalSlides = Math.ceil(projects.length / perSlide);
  const goPrev = () => setCurrent((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const goNext = () => setCurrent((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  const startIdx = current * perSlide;
  const visibleProjects = projects.slice(startIdx, startIdx + perSlide);

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full text-xs font-medium tracking-wider mb-6" style={{ background: "rgba(236, 72, 153, 0.1)", color: "#f472b6", border: "1px solid rgba(236, 72, 153, 0.2)" }}>
            PORTFOLIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Syne, sans-serif", color: "#ffffff" }}>
            Creative <span className="gradient-text">Works</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
            A curated collection of branding, logo, UI/UX design, and video projects
          </p>
        </div>
        <div className="flex items-center justify-center gap-6">
          <button aria-label="Previous" className="p-3 rounded-full bg-pink-400/20 text-pink-400 hover:bg-pink-400/40 transition" onClick={goPrev}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/></svg>
          </button>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
            {visibleProjects.map((project, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#181825] to-[#23233a] border border-white/5 hover:scale-105 transition-transform duration-300">
                <div className="w-full h-64 flex items-center justify-center bg-black/10">
                  {project.type === "image" ? (
                    <img src={project.image} alt={project.title} className="object-contain h-full w-full transition-transform duration-300 group-hover:scale-105" style={{ background: "#fff" }} />
                  ) : (
                    <video src={project.video} poster={project.poster} controls className="object-contain h-full w-full bg-black">
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "Syne, sans-serif", color: "#ffffff" }}>
                    {project.title}
                  </h3>
                  <p className="text-sm" style={{ color: "#9ca3af" }}>
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button aria-label="Next" className="p-3 rounded-full bg-blue-400/20 text-blue-400 hover:bg-blue-400/40 transition" onClick={goNext}>
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button key={idx} className={`w-3 h-3 rounded-full ${idx === current ? 'bg-pink-400' : 'bg-white/20'} transition`} onClick={() => setCurrent(idx)} aria-label={`Go to slide ${idx + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
