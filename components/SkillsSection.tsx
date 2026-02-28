
"use client";

import React from "react";

type SkillCardProps = {
  title: string;
  color: string;
  skills: string[];
};

function SkillCard({ title, color, skills }: SkillCardProps) {
  return (
    <div
      className="p-6 rounded-2xl"
      style={{
        background:
          color === "blue"
            ? "linear-gradient(135deg, rgba(15, 15, 25, 0.8) 0%, rgba(20, 20, 35, 0.8) 100%)"
            : color === "purple"
            ? "linear-gradient(135deg, rgba(15, 15, 25, 0.8) 0%, rgba(20, 20, 35, 0.8) 100%)"
            : color === "pink"
            ? "linear-gradient(135deg, rgba(15, 15, 25, 0.8) 0%, rgba(20, 20, 35, 0.8) 100%)"
            : color === "green"
            ? "linear-gradient(135deg, rgba(15, 15, 25, 0.8) 0%, rgba(20, 20, 35, 0.8) 100%)"
            : "linear-gradient(135deg, rgba(15, 15, 25, 0.8) 0%, rgba(20, 20, 35, 0.8) 100%)",
        border: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <h3
        className="text-lg font-bold mb-4"
        style={{
          fontFamily: "Syne, sans-serif",
          color:
            color === "blue"
              ? "#60a5fa"
              : color === "purple"
              ? "#a78bfa"
              : color === "pink"
              ? "#f472b6"
              : color === "green"
              ? "#34d399"
              : "#ffffff",
        }}
      >
        {title}
      </h3>
      <div className="space-y-3">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div
              className="w-2 h-2 rounded-full"
              style={{
                background:
                  color === "blue"
                    ? "#60a5fa"
                    : color === "purple"
                    ? "#a78bfa"
                    : color === "pink"
                    ? "#f472b6"
                    : color === "green"
                    ? "#34d399"
                    : "#ffffff",
              }}
            ></div>
            <span style={{ color: "#9ca3af" }}>{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      className="relative py-32 px-6"
      style={{
        background:
          "linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.03) 50%, transparent 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span
            className="inline-block px-4 py-2 rounded-full text-xs font-medium tracking-wider mb-6"
            style={{
              background: "rgba(139, 92, 246, 0.1)",
              color: "#a78bfa",
              border: "1px solid rgba(139, 92, 246, 0.2)",
            }}
          >
            TECH STACK
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "Syne, sans-serif", color: "#ffffff" }}
          >
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillCard
            title="Web Development"
            color="blue"
            skills={["HTML / CSS / JavaScript", "Next.js / React", "Tailwind / Bootstrap", "Responsive Design"]}
          />
          <SkillCard
            title="Software & AI"
            color="purple"
            skills={["PHP / Laravel / Python / Django", "Unity / C#", "Machine Learning", "AI APIs Integration"]}
          />
          <SkillCard
            title="Platforms & Builders"
            color="pink"
            skills={["WordPress / Webflow / HubSpot / Guesty", "Affiliate Landing Pages", "Hosting & Domain Setup"]}
          />
          <SkillCard
            title="Creative & Data Tools"
            color="green"
            skills={["2D & 3D Artworks / Blender", "Google Analytics / Tag Manager", "MySQL / PostgreSQL / Supabase", "Git / GitHub / Trello"]}
          />
        </div>
      </div>
    </section>
  );
}
