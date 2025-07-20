import DestinationsSection from "@/components/sections/destinations-section";
import ContactSection from "@/components/sections/contact-section";

export default function Destinations() {
  return (
    <>
      <title>Study Destinations - EduGlobal Consultancy</title>
      <meta name="description" content="Explore top study destinations including UK, USA, Canada, Australia, New Zealand, and Europe. Find the perfect country for your international education." />
      
      <div className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--edu-dark)] mb-6">
              Study Destinations Worldwide
            </h1>
            <p className="text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
              Discover world-class education opportunities across multiple countries and find your perfect academic destination with our expert guidance.
            </p>
          </div>
        </div>
        
        <DestinationsSection />
        <ContactSection />
      </div>
    </>
  );
}
