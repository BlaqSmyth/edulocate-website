import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import ServicesSection from "@/components/sections/services-section";
import ContactSection from "@/components/sections/contact-section";

export default function Services() {
  return (
    <>
      <title>Our Services - EduLocate</title>
      <meta name="description" content="Comprehensive international education services including university selection, application assistance, visa processing, test preparation, and pre-departure support." />
      
      <div className="pt-20">
        <ServicesSection />
        
        <section className="py-16 bg-gradient-to-r from-[var(--edu-blue)] to-blue-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Book a free 30-minute consultation with our UK education experts
            </p>
            <Link href="/booking">
              <Button size="lg" className="bg-white text-[var(--edu-blue)] hover:bg-blue-50 text-lg px-8 py-6">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free 1-on-1 Consultation
              </Button>
            </Link>
          </div>
        </section>
        
        <ContactSection />
      </div>
    </>
  );
}
