"use client";

import React from "react";

const experiences = [
  {
    title: "AI Developer",
    company: "Outrank Strategy • North, Centerville, UT",
    date: "Jun 2025 - Present • Remote Contract",
    current: true,
    color: "blue",
    highlights: [
      "Developed an AI automation platform with Next.js, TailwindCSS, and PostgreSQL",
      "Boosted team development speed by 60% through front-end and AI infrastructure contributions",
    ],
  },
  {
    title: "Web Designer/Developer",
    company: "The Rise Collective • Florida, USA",
    date: "Jan 2024 - Feb 2026 • Remote Contract",
    current: true,
    color: "purple",
    highlights: [
      "Designed 10+ real estate websites, increasing engagement by 30-35%",
      "Generated 300+ leads through optimized landing pages",
      "Reduced team turnaround time by 40% through global collaboration",
    ],
  },
  {
    title: "Data Analyst",
    company: "The Rise Collective • Florida, USA",
    date: "Dec 2025 - Jan 2026 • Remote Contract",
    current: false,
    color: "purple",
    highlights: [
      "Implemented Google Analytics and Tag Manager across 10+ websites to track user behavior and conversions",
      "Built reliable tracking setups and delivered performance reports to support data-driven decisions",
    ],
  },
  {
    title: "Web Developer",
    company: "The Rise Collective • Florida, USA",
    date: "Jan 2024 - Jan 2025 • Remote Contract",
    current: false,
    color: "purple",
    highlights: [
      "Designed and developed 5 professional websites, handling affiliate program landing pages with HubSpot and GoHighLevel",
      "Increased engagement by 35% and generated 100+ leads in 1 month",
      "Handled hosting and domain setup with near-zero downtime",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Green Module Systems • Florida, USA",
    date: "Jan 2024 - Jan 2025 • Remote",
    current: false,
    color: "green",
    highlights: [
      "Built finance and employment management systems with Laravel/CodeIgniter",
      "Improved system efficiency by 60% and reduced bug turnaround by 35%",
    ],
  },
];

function ExperienceCard({ exp }: { exp: typeof experiences[0] }) {
  return (
    <div
      className="group relative p-5 rounded-xl transition-all duration-300 bg-[#181825] border border-white/10"
    >
      {exp.current && (
        <div
          className="absolute top-5 right-5 px-2 py-1 rounded-full text-xs font-medium"
          style={{
            background: "rgba(34, 197, 94, 0.08)",
            color: "#4ade80",
            border: "none",
          }}
        >
          Current
        </div>
      )}
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{
            background:
              exp.color === "blue"
                ? "#3b82f6"
                : exp.color === "purple"
                ? "#a78bfa"
                : exp.color === "green"
                ? "#10b981"
                : "#8b5cf6",
          }}
        >
          <svg className="w-5 h-5 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold mb-1" style={{ fontFamily: 'Syne, sans-serif', color: '#fff' }}>{exp.title}</h3>
          <p className="text-xs mb-1" style={{ color: exp.color === 'blue' ? '#60a5fa' : exp.color === 'purple' ? '#a78bfa' : exp.color === 'green' ? '#34d399' : '#6b7280' }}>{exp.company}</p>
          <p className="text-xs mb-3" style={{ color: '#6b7280' }}>{exp.date}</p>
          <ul className="space-y-1" style={{ color: '#9ca3af' }}>
            {exp.highlights.map((h, i) => (
              <li key={i} className="flex items-start gap-2 text-xs">
                <span className={exp.color === 'blue' ? 'text-blue-400 mt-1' : exp.color === 'purple' ? 'text-purple-400 mt-1' : exp.color === 'green' ? 'text-emerald-400 mt-1' : ''}>▹</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-32 px-6" style={{ background: "linear-gradient(180deg, transparent 0%, rgba(59, 130, 246, 0.03) 50%, transparent 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 rounded-full text-xs font-medium tracking-wider mb-6" style={{ background: "rgba(59, 130, 246, 0.1)", color: "#60a5fa", border: "1px solid rgba(59, 130, 246, 0.2)" }}>MY JOURNEY</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif', color: '#ffffff' }}>
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 opacity-30 -translate-x-1/2" />
          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex md:flex-row flex-col items-center md:items-start gap-8">
                {/* Timeline Dot with interconnected lines */}
                <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex flex-col items-center z-10 w-8">
                  {/* Top connector for all except first */}
                  {idx > 0 && (
                    <div className="h-8 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 opacity-20" style={{ marginBottom: -8 }} />
                  )}
                  <div className={`w-6 h-6 rounded-full border-2 ${exp.color === 'blue' ? 'border-blue-400' : exp.color === 'purple' ? 'border-purple-400' : exp.color === 'green' ? 'border-emerald-400' : 'border-pink-400'} bg-[#181825]`} />
                  {/* Bottom connector for all except last */}
                  {idx < experiences.length - 1 && (
                    <div className="h-8 w-1 bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 opacity-20" style={{ marginTop: -8 }} />
                  )}
                </div>
                <div className="w-full md:ml-12">
                  <div className="transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
                    <ExperienceCard exp={exp} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
