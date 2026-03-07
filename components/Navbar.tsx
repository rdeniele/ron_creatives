"use client";

import React from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Portfolio" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-[#E5E5E5]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 text-2xl font-bold" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000', letterSpacing: '-0.02em' }}>
            {/* Cat icon from Phosphor Icons (MIT License) */}
            <svg width="32" height="32" viewBox="0 0 256 256" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black">
              <path d="M128 32c-16 0-32 8-44.8 22.4C70.4 66.4 64 80 64 96c0 32 32 64 64 64s64-32 64-64c0-16-6.4-29.6-19.2-41.6C160 40 144 32 128 32zm0 112c-26.4 0-48-21.6-48-48 0-10.4 4-20 11.2-28.8C99.2 59.2 113.6 52 128 52s28.8 7.2 36.8 15.2C200 76 204 85.6 204 96c0 26.4-21.6 48-48 48z" fill="#222"/>
              <ellipse cx="104" cy="112" rx="8" ry="12" fill="#fff"/>
              <ellipse cx="152" cy="112" rx="8" ry="12" fill="#fff"/>
              <ellipse cx="104" cy="112" rx="4" ry="6" fill="#222"/>
              <ellipse cx="152" cy="112" rx="4" ry="6" fill="#222"/>
              <path d="M120 136c2.4 2.4 6.4 4 8 4s5.6-1.6 8-4" stroke="#222" strokeWidth="4" strokeLinecap="round"/>
            </svg>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-black hover:underline transition-colors text-sm tracking-wide font-medium"
                style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="px-6 py-2 rounded-full text-sm font-medium border border-black bg-black text-white transition-all duration-200 hover:bg-[#1A1A1A]"
            style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
