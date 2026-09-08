import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Installations from "@/components/Installations";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import SolarSolutions from "@/components/SolarSolutions";
import FlexibleComponents from "@/components/FlexibleComponents";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Installations />
      <WhyChooseUs />
      <Services />
      
      <SolarSolutions />
      <FlexibleComponents />
      <ContactCTA />
      <Footer />
    </main>
  );
}