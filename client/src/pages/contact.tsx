import ContactSection from "@/components/sections/contact-section";

export default function Contact() {
  return (
    <>
      <title>Contact Us - EduGlobal Consultancy</title>
      <meta name="description" content="Get in touch with EduGlobal Consultancy for a free consultation. Expert guidance for your international education journey with 24-hour response time." />
      
      <div className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--edu-dark)] mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
              Ready to start your international education journey? Contact our expert counselors for a free consultation and personalized guidance.
            </p>
          </div>
        </div>
        
        <ContactSection />
      </div>
    </>
  );
}
