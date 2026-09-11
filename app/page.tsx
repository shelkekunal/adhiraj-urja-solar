import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Installations from "@/components/Installations";
import WhyChooseUs from "@/components/WhyChooseUs";
import SolarSolutions from "@/components/SolarSolutions";
import FlexibleComponents from "@/components/FlexibleComponents";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Installations />
      <WhyChooseUs />
      <HowItWorks />
      <SolarSolutions />
      <FlexibleComponents />
      <ContactCTA />
      <Footer />
    </main>
  );
}