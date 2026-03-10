import ContactSection from "../../components/ContactSection";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-20">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
