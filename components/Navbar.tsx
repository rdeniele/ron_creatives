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
          <a href="#home" className="flex items-center gap-2 text-2xl font-bold" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000', letterSpacing: '-0.02em' }}>
            {/* Apple logo SVG, free to use */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-black"><path d="M16.68 1.93c0 1.14-.93 2.07-2.07 2.07-.02-1.18.95-2.07 2.07-2.07zm2.23 2.13c-1.14-.07-2.1.65-2.65.65-.55 0-1.39-.63-2.29-.61-.88.02-1.7.51-2.16 1.29-.92 1.59-.24 3.94.66 5.23.44.64.97 1.36 1.67 1.33.67-.03.92-.43 1.72-.43.8 0 1.02.43 1.72.42.71-.01 1.16-.65 1.6-1.29.5-.73.7-1.44.71-1.48-.02-.01-1.36-.52-1.38-2.07-.01-1.29 1.05-1.89 1.1-1.92-.6-.87-1.54-.97-1.87-.99zm-4.13 12.13c-.04-.09-.08-.18-.13-.27-.32-.56-.66-1.13-1.19-1.13-.53 0-.7.36-1.31.36-.61 0-.8-.36-1.31-.36-.53 0-.89.57-1.2 1.13-.34.6-.67 1.19-1.17 1.19-.5 0-.66-.39-1.29-.39-.63 0-.81.39-1.3.39-.5 0-.84-.58-1.18-1.18-.81-1.41-1.43-4-1.19-6.36.14-1.36.99-2.18 2.01-2.18.54 0 1.13.37 1.87.37.74 0 1.25-.37 1.87-.37.99 0 1.7.62 1.99 1.67.02.07.13.11.19.11.06 0 .17-.04.19-.11.29-1.05 1-1.67 1.99-1.67.62 0 1.13.37 1.87.37.74 0 1.33-.37 1.87-.37 1.02 0 1.87.82 2.01 2.18.24 2.36-.38 4.95-1.19 6.36-.34.6-.68 1.18-1.18 1.18-.5 0-.67-.39-1.3-.39-.63 0-.79.39-1.29.39-.5 0-.83-.59-1.17-1.19z"/></svg>
            <span>RP</span>
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
