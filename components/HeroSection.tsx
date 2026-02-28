"use client";
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-16 px-6 md:px-12 lg:px-24">
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="slide-up stagger-1">
          <span className="inline-block px-4 py-2 rounded-full text-xs font-medium tracking-wider mb-8" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa', border: '1px solid rgba(59, 130, 246, 0.2)' }}>
            Available for work
          </span>
        </div>
        <div className="flex flex-col items-center justify-center mb-6">
          <img
            src="/assets/ronpic4.png"
            alt="Ron Deniele Paragoso profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-400 shadow-lg mb-4 slide-up stagger-2"
            style={{ background: '#181825' }}
          />
          <h1 id="hero-name" className="slide-up stagger-2 text-5xl md:text-7xl lg:text-8xl font-bold leading-tight" style={{ fontFamily: 'Syne, sans-serif', color: '#ffffff' }}>
            Ron Deniele<br /><span className="gradient-text">Paragoso</span>
          </h1>
        </div>
        <p id="hero-title" className="slide-up stagger-3 text-xl md:text-2xl mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#9ca3af' }}>
          Front-End Developer & Web Designer
        </p>
        <p className="slide-up stagger-4 text-base md:text-lg max-w-2xl mx-auto mb-10" style={{ fontFamily: 'Space Grotesk, sans-serif', color: '#6b7280' }}>
          Creating fast, clean, modern websites with seamless user experience and scalable design systems
        </p>
        <div className="relative flex flex-col items-center">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-[340px] h-[120px] md:w-[420px] md:h-[140px] pointer-events-none -z-10">
            <div className="absolute left-0 top-0 w-1/2 h-full rounded-full blur-2xl opacity-70" style={{ background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)' }}></div>
            <div className="absolute right-0 top-0 w-1/2 h-full rounded-full blur-2xl opacity-60" style={{ background: 'linear-gradient(90deg, #f472b6 0%, #a78bfa 100%)' }}></div>
            <div className="absolute left-1/4 top-1/2 w-1/2 h-2/3 rounded-full blur-3xl opacity-40" style={{ background: 'linear-gradient(90deg, #fff 0%, #8b5cf6 100%)' }}></div>
          </div>
          <div className="slide-up stagger-5 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="group px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2" style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', color: 'white' }}>
              View My Work
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/10" style={{ color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}>
              Get In Touch
            </a>
          </div>
          <div className="slide-up stagger-6 flex justify-center mt-6">
            <a href="https://ronparagoso.vercel.app" target="_blank" rel="noopener noreferrer" className="group px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 flex items-center gap-2" style={{ background: 'rgba(255, 255, 255, 0.1)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}>
              Visit My Developer Portfolio
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
        <div className="slide-up stagger-6 flex flex-col items-center p-4 mt-8">
          <div className="w-8 h-8 flex items-center justify-center mb-2">
            <svg className="w-8 h-8 text-blue-400 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" />
              <path d="M12 8v8m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-xs text-blue-400/80 tracking-wide">Scroll</span>
        </div>
      </div>
    </section>
  );
}
