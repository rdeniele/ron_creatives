"use client";

import React from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold" style={{ fontFamily: 'Syne, sans-serif' }}>
            <span className="gradient-text">RP</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-gray-300 hover:text-white transition-colors text-sm tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', color: 'white' }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
