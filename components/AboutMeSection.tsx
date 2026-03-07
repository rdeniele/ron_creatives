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

import React, { useState } from "react";


export default function AboutMeSection() {
  const [slide, setSlide] = useState(0);
  const perSlide = 3;
  const totalSlides = Math.ceil(experiences.length / perSlide);

  const goPrev = () => setSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const goNext = () => setSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-2xl mx-auto px-6 flex flex-col items-center gap-8">
        <img
          src="/assets/ronpic4.png"
          alt="Ron Deniele Paragoso"
          className="w-28 h-28 rounded-full object-cover border border-black bg-white mb-2"
          style={{ boxShadow: '0 2px 8px 0 rgba(0,0,0,0.03)' }}
        />
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-center" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}>
          About Me
        </h2>
        <p className="text-base max-w-lg mb-4 text-center" style={{ color: '#222', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: 400 }}>
          Hi, I’m Ron Deniele Paragoso — a creative technologist passionate about blending design, technology, and AI to help brands stand out. I specialize in digital content, branding, and web experiences that are clean, modern, and impactful.
        </p>
        <div className="w-full mt-2">
          <h3 className="text-lg font-semibold mb-5 text-center" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}>Experience</h3>
          <div className="flex flex-col items-center">
            <div className="flex flex-row items-center gap-4">
              <button
                aria-label="Previous Experience"
                onClick={goPrev}
                className="rounded-full border border-[#E5E5E5] w-8 h-8 flex items-center justify-center bg-white hover:bg-[#F5F5F5] transition"
                style={{ fontSize: 20, color: '#888' }}
              >
                &#8592;
              </button>
              <div className="flex flex-row gap-6 md:gap-8 items-center">
                {experiences.slice(slide * perSlide, slide * perSlide + perSlide).map((exp, idx) => (
                  <div key={exp.title + exp.date} className="flex flex-col items-center min-w-[180px] max-w-[240px]">
                    <span className={`w-3 h-3 rounded-full border-2 mb-2 ${exp.current ? 'bg-black border-black' : 'bg-[#E5E5E5] border-[#E5E5E5]'}`}></span>
                    <div className="bg-white border border-[#E5E5E5] rounded-lg p-3 text-center min-w-[180px] max-w-[220px]">
                      <div className="text-sm font-bold mb-1" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}>{exp.title}</div>
                      <div className="text-xs mb-0.5" style={{ color: '#6b7280', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>{exp.company}</div>
                      <div className="text-xs mb-1" style={{ color: '#A3A3A3', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>{exp.date}</div>
                      <div className="text-xs mt-1" style={{ color: '#444', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontSize: '13px' }}>{exp.summary}</div>
                    </div>
                  </div>
                ))}
              </div>
              <button
                aria-label="Next Experience"
                onClick={goNext}
                className="rounded-full border border-[#E5E5E5] w-8 h-8 flex items-center justify-center bg-white hover:bg-[#F5F5F5] transition"
                style={{ fontSize: 20, color: '#888' }}
              >
                &#8594;
              </button>
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
        </div>
      </div>
    </section>
  );
}
