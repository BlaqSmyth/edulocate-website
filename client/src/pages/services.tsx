import ServicesSection from "@/components/sections/services-section";
import ContactSection from "@/components/sections/contact-section";

export default function Services() {
  return (
    <>
      <title>Our Services - EduGlobal Consultancy</title>
      <meta name="description" content="Comprehensive international education services including university selection, application assistance, visa processing, test preparation, and pre-departure support." />
      
      <div className="pt-8">
        <ServicesSection />
        <ContactSection />
      </div>
    </>
  );
}
