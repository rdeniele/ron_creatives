"use client";

import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}>
          Contact
        </h2>
        <form className="flex flex-col gap-6 mb-10" onSubmit={e => { e.preventDefault(); alert('Message sent!'); }}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="px-5 py-3 rounded-lg border border-[#E5E5E5] bg-white text-black placeholder-[#A3A3A3] focus:outline-none focus:border-black transition"
            style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: 400 }}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="px-5 py-3 rounded-lg border border-[#E5E5E5] bg-white text-black placeholder-[#A3A3A3] focus:outline-none focus:border-black transition"
            style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: 400 }}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={5}
            className="px-5 py-3 rounded-lg border border-[#E5E5E5] bg-white text-black placeholder-[#A3A3A3] focus:outline-none focus:border-black transition"
            style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: 400 }}
          />
          <button
            type="submit"
            className="w-full md:w-auto px-8 py-3 rounded-full font-medium border border-black bg-black text-white transition-all duration-200 hover:bg-[#1A1A1A]"
            style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}
          >
            Send Message
          </button>
        </form>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-center">
          <a href="mailto:work.rparagoso@gmail.com" className="underline text-black text-base hover:text-[#1A1A1A] transition" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>
            work.rparagoso@gmail.com
          </a>
          <span className="hidden md:inline-block text-[#E5E5E5]">|</span>
          <a href="https://linkedin.com/in/ron-paragoso" target="_blank" rel="noopener noreferrer" className="underline text-black text-base hover:text-[#1A1A1A] transition" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
