"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block px-4 py-2 rounded-full text-xs font-medium tracking-wider mb-6" style={{ background: "rgba(59, 130, 246, 0.1)", color: "#60a5fa", border: "1px solid rgba(59, 130, 246, 0.2)" }}>GET IN TOUCH</span>
        <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Syne, sans-serif', color: '#ffffff' }}>
          Let's Create Something <span className="gradient-text">Amazing</span>
        </h2>
        <p id="about-text" className="text-lg mb-12 max-w-2xl mx-auto" style={{ color: "#9ca3af" }}>
          Have a project in mind? Let's collaborate and build something extraordinary together. I'm always excited to work on new challenges.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a href="mailto:work.rparagoso@gmail.com" className="group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, rgba(15, 15, 25, 0.8) 0%, rgba(20, 20, 35, 0.8) 100%)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110" style={{ background: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)" }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h3 className="font-bold mb-2" style={{ color: "#ffffff" }}>Email</h3>
            <p id="email-display" className="text-sm" style={{ color: "#60a5fa" }}>work.rparagoso@gmail.com</p>
          </a>
          {/* Location */}
          <div className="group p-6 rounded-2xl" style={{ background: "linear-gradient(135deg, rgba(15, 15, 25, 0.8) 0%, rgba(20, 20, 35, 0.8) 100%)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)" }}>
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <h3 className="font-bold mb-2" style={{ color: "#ffffff" }}>Location</h3>
            <p id="location-display" className="text-sm" style={{ color: "#a78bfa" }}>Philippines</p>
          </div>
          {/* LinkedIn */}
          <a href="https://linkedin.com/in/ron-paragoso" target="_blank" rel="noopener noreferrer" className="group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1" style={{ background: "linear-gradient(135deg, rgba(15, 15, 25, 0.8) 0%, rgba(20, 20, 35, 0.8) 100%)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110" style={{ background: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)" }}>
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </div>
            <h3 className="font-bold mb-2" style={{ color: "#ffffff" }}>LinkedIn</h3>
            <p className="text-sm" style={{ color: "#f472b6" }}>Connect with me</p>
          </a>
        </div>
        <a href="https://ronparagoso.vercel.app" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105" style={{ background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)", color: "white" }}>
          Visit My Website
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </a>
      </div>
    </section>
  );
}
