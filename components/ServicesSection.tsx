"use client";

const SERVICES = [
  {
    title: "AI Visual Design",
    description: "Hundreds of AI-powered marketing visuals & social graphics",
  },
  {
    title: "Video Production",
    description: "Short-form videos & campaign reels",
  },
  {
    title: "Branding & Identity",
    description: "Logos, style guides, marketing layouts",
  },
  {
    title: "Web & Landing Pages",
    description: "Fullstack & responsive landing page design",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif', color: '#000' }}>
          What I Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-white border border-[#E5E5E5] rounded-xl p-8 flex flex-col items-start shadow-none hover:shadow-md transition-shadow min-h-[180px]"
              style={{ minHeight: 160 }}
            >
              <h3 className="text-xl font-bold mb-3" style={{ color: '#000', fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif' }}>
                {service.title}
              </h3>
              <p className="text-base" style={{ color: '#A3A3A3', fontFamily: 'Inter, Helvetica Neue, Arial, sans-serif', fontWeight: 400 }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
