import ServicesSection from "@/components/sections/services-section";
import ContactSection from "@/components/sections/contact-section";

export default function Services() {
  return (
    <>
      <title>Our Services - StudyPlug</title>
      <meta name="description" content="Comprehensive international education services including university selection, application assistance, visa processing, test preparation, and pre-departure support." />
      
      <div className="pt-20">
        <ServicesSection />
        <ContactSection />
      </div>
    </>
  );
}
