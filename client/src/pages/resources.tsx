import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import ResourcesSection from "@/components/sections/resources-section";
import ContactSection from "@/components/sections/contact-section";

export default function Resources() {
  return (
    <>
      <title>Resources & Guides - EduLocate</title>
      <meta name="description" content="Access comprehensive guides, tips, and resources for international education including university selection, essay writing, test preparation, and visa requirements." />
      
      <div className="pt-20">
        <ResourcesSection />
        
        <section className="py-16 bg-gradient-to-r from-purple-600 to-purple-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Need Personalized Guidance?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Our experts can answer all your questions in a free consultation
            </p>
            <Link href="/booking">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6">
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
