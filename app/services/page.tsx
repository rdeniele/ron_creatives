import ServicesSection from "../../components/ServicesSection";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full bg-white text-black font-sans flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center pt-24 py-20 bg-white text-black">
        <div className="max-w-3xl w-full mb-10 px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">What I Do</h1>
          <ul className="space-y-10 text-lg text-gray-700">
            {/* 1st item: image left, text right */}
            <li className="flex flex-col md:flex-row gap-6 items-center">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="AI Visual Design" className="w-full md:w-40 h-32 object-cover rounded-lg border border-[#E5E5E5]" />
              <div>
                <span className="font-bold text-black">AI Visual Design:</span> I create hundreds of AI-powered marketing visuals and social graphics tailored to your brand, helping you stand out online with unique, eye-catching content.
              </div>
            </li>
            {/* 2nd item: text left, image right */}
            <li className="flex flex-col md:flex-row-reverse gap-6 items-center">
              <img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Video Production" className="w-full md:w-40 h-32 object-cover rounded-lg border border-[#E5E5E5]" />
              <div>
                <span className="font-bold text-black">Video Production:</span> From short-form videos to campaign reels, I produce engaging video content that captures attention and drives results for your business or project.
              </div>
            </li>
            {/* 3rd item: image left, text right */}
            <li className="flex flex-col md:flex-row gap-6 items-center">
              <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Branding & Identity" className="w-full md:w-40 h-32 object-cover rounded-lg border border-[#E5E5E5]" />
              <div>
                <span className="font-bold text-black">Branding & Identity:</span> I design logos, style guides, and marketing layouts that define your brand’s identity and ensure consistency across all platforms.
              </div>
            </li>
            {/* 4th item: text left, image right */}
            <li className="flex flex-col md:flex-row-reverse gap-6 items-center">
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Web & Landing Pages" className="w-full md:w-40 h-32 object-cover rounded-lg border border-[#E5E5E5]" />
              <div>
                <span className="font-bold text-black">Web & Landing Pages:</span> I build fullstack and responsive landing pages that are modern, fast, and optimized for conversions, giving your business a strong online presence.
              </div>
            </li>
          </ul>
        </div>
        {/* Marketing/CTA Section */}
        <section className="w-full max-w-3xl mx-auto mt-12 px-4 py-10 bg-[#f9fafb] rounded-xl border border-[#E5E5E5] flex flex-col items-center text-center shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}>
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-lg text-gray-700 mb-6 max-w-xl" style={{ fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif' }}>
            I combine creativity, technology, and a passion for results to help businesses and creators stand out online. Whether you need a stunning website, a unique brand identity, or eye-catching visuals, I’m here to bring your vision to life. Let’s collaborate and make something amazing together!
          </p>
          <a href="#contact" className="inline-block px-8 py-3 rounded-full bg-black text-white font-semibold text-lg shadow hover:bg-[#1A1A1A] transition-all duration-200">
            Let's Work Together
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
}
