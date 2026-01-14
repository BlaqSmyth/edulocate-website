import AboutSection from "@/components/sections/about-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import ContactSection from "@/components/sections/contact-section";

export default function About() {
  return (
    <>
      <title>About Us - EduLocate</title>
      <meta name="description" content="Learn about EduLocate's 12+ years of experience helping international students achieve their educational dreams with expert guidance and support." />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--edu-dark)] mb-6">
              About EduLocate
            </h1>
            <p className="text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
              Your trusted partner in international education with over 12 years of experience helping students achieve their dreams.
            </p>
          </div>
        </div>
        
        <AboutSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </>
  );
}
