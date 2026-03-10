

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <div className="bg-white min-h-screen w-full font-sans text-black">
      <Navbar />
      <main className="flex flex-col gap-0">
        {/* Hero */}
        <HeroSection />

        {/* What I Do */}
        <section id="services" className="bg-[#f9f9f9]">
          <ServicesSection />
        </section>

        {/* Featured Work */}
        <section id="projects" className="bg-[#f9f9f9]">
          <ProjectsSection />
        </section>

        {/* About Me */}
        <section id="about" className="bg-[#f9f9f9]">
          <AboutMeSection />
        </section>

        {/* Contact */}
        <section id="contact" className="bg-[#f9f9f9]">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
