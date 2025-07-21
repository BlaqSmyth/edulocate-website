import ServicesSection from "@/components/sections/services-section";
import ContactSection from "@/components/sections/contact-section";

export default function Services() {
  return (
    <>
      <title>Our Services - EduGlobal Consultancy</title>
      <meta name="description" content="Comprehensive international education services including university selection, application assistance, visa processing, test preparation, and pre-departure support." />
      
      <div className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--edu-dark)] mb-6">
              Our Comprehensive Services
            </h1>
            <p className="text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
              From initial consultation to successful settlement abroad, we provide end-to-end support for Undergraduate, Postgraduate, and PhD programs across your international education journey.
            </p>
          </div>
        </div>
        
        <ServicesSection />
        <ContactSection />
      </div>
    </>
  );
}
