"use client";
export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center bg-white px-6 text-center pt-28 md:pt-32">
      <h1
        className="text-5xl md:text-7xl font-bold mb-8"
        style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000', letterSpacing: '-0.02em', lineHeight: 1.1 }}
      >
        Digital Content & AI<br className="hidden md:inline" /> Creative Production
      </h1>
      <p
        className="text-lg md:text-2xl mb-12 max-w-2xl mx-auto"
        style={{ color: '#444', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: 400 }}
      >
        I help brands transform ideas into visuals, video, branding, and web experiences.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="#projects"
          className="px-8 py-3 rounded-full font-medium border border-black bg-white text-black transition-all duration-200 hover:bg-[#F5F5F5]"
          style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}
        >
          See My Work
        </a>
        <a
          href="#contact"
          className="px-8 py-3 rounded-full font-medium border border-black bg-black text-white transition-all duration-200 hover:bg-[#1A1A1A]"
          style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif', fontWeight: 500 }}
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
