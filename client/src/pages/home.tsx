import Hero from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services-section";
import DestinationsSection from "@/components/sections/destinations-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import AboutSection from "@/components/sections/about-section";
import ResourcesSection from "@/components/sections/resources-section";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <>
      <title>StudyPlug - Your Gateway to Global Education</title>
      <meta name="description" content="Expert international education consulting services helping students secure admission to top universities worldwide. Complete support from application to settlement." />
      
      <Hero />
      <ServicesSection />
      <DestinationsSection />
      <TestimonialsSection />
      <AboutSection />
      <ResourcesSection />
      <ContactSection />
    </>
  );
}
