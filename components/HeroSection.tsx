"use client";
export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center items-center bg-white px-6 text-center pt-28 md:pt-32">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl mx-auto gap-8 md:gap-12">
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-1/3 h-full mb-6 md:mb-0">
          <div className="w-40 h-56 md:w-full md:h-[420px] max-w-xs md:max-w-none">
            <img
              src="/assets/ronpic4.png"
              alt="Ron portrait"
              className="w-full h-full rounded-2xl object-cover shadow-lg border border-[#E5E5E5] bg-[#F5F5F5]"
              style={{ aspectRatio: '3 / 4' }}
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <h1
            className="text-4xl md:text-6xl font-bold mb-5 leading-tight tracking-tight"
            style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#111', letterSpacing: '-0.03em' }}
          >
            Digital Content &amp; AI <br className="hidden md:inline" /> Creative Production
          </h1>
          <p
            className="text-base md:text-xl mb-10 max-w-xl mx-auto md:mx-0 text-[#555] font-normal"
            style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}
          >
            I help brands transform ideas into visuals, video, branding, and web experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start items-center md:items-start w-full">
            <a
              href="#projects"
              className="w-full sm:w-auto px-7 py-2.5 rounded-full font-medium border border-[#222] bg-white text-[#111] hover:bg-[#F5F5F5] transition-colors duration-150 text-base md:text-lg shadow-sm"
              style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif' }}
            >
              See My Work
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-7 py-2.5 rounded-full font-medium border border-[#222] bg-[#111] text-white hover:bg-[#222] transition-colors duration-150 text-base md:text-lg shadow-sm"
              style={{ fontFamily: 'Poppins, Helvetica Neue, Arial, sans-serif' }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
