import ResourcesSection from "@/components/sections/resources-section";
import ContactSection from "@/components/sections/contact-section";

export default function Resources() {
  return (
    <>
      <title>Resources & Guides - EduGlobal Consultancy</title>
      <meta name="description" content="Access comprehensive guides, tips, and resources for international education including university selection, essay writing, test preparation, and visa requirements." />
      
      <div className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--edu-dark)] mb-6">
              Resources & Study Guides
            </h1>
            <p className="text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
              Access our comprehensive collection of guides, tips, and resources to help you navigate your study abroad journey successfully.
            </p>
          </div>
        </div>
        
        <ResourcesSection />
        <ContactSection />
      </div>
    </>
  );
}
