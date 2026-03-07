import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="bg-[#0a0a0f] min-h-screen w-full font-sans text-white">
      <Navbar />
      <main className="flex flex-col gap-0">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutMeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
