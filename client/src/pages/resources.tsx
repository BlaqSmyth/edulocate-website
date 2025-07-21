import ResourcesSection from "@/components/sections/resources-section";
import ContactSection from "@/components/sections/contact-section";

export default function Resources() {
  return (
    <>
      <title>Resources & Guides - EduGlobal Consultancy</title>
      <meta name="description" content="Access comprehensive guides, tips, and resources for international education including university selection, essay writing, test preparation, and visa requirements." />
      
      <div className="pt-8">
        <ResourcesSection />
        <ContactSection />
      </div>
    </>
  );
}
