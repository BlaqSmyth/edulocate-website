import { Download, ExternalLink, Play, ArrowRight, Search, Check } from "lucide-react";
import { Link } from "wouter";

const resources = [
  {
    title: "University Selection Guide",
    description: "Comprehensive guide to choosing the right university based on your academic goals and budget.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    icon: Download,
    action: "View Guide",
    url: "/resources/university-guide",
  },
  {
    title: "Essay Writing Tips",
    description: "Expert tips and templates for writing compelling personal statements and application essays.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    icon: ExternalLink,
    action: "Read Tips",
    url: "/resources/essay-tips",
  },
  {
    title: "Test Prep Resources",
    description: "IELTS, TOEFL, GRE, and GMAT preparation materials and practice tests to boost your scores.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
    icon: Play,
    action: "Start Prep",
    url: "/resources/test-prep",
  },
];

const additionalResources = [
  {
    title: "Visa Requirements",
    description: "Detailed visa requirements and documentation checklists for UK student visas.",
    icon: ArrowRight,
    action: "View Requirements",
    color: "bg-blue-50 text-[var(--edu-blue)]",
    url: "/destinations",
  },
  {
    title: "Scholarship Database",
    description: "Extensive database of scholarships and funding opportunities for international students.",
    icon: Search,
    action: "Find Scholarships",
    color: "bg-green-50 text-[var(--edu-green)]",
    url: "/resources/scholarships",
  },
  {
    title: "Pre-Departure Checklist",
    description: "Complete checklist of things to do before departing for your international education journey.",
    icon: Check,
    action: "Get Checklist",
    color: "bg-amber-50 text-[var(--edu-amber)]",
    url: "/resources/checklist",
  },
];

export default function ResourcesSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--edu-dark)] mb-6">
            Helpful Resources & Guides
          </h2>
          <p className="text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
            Access our comprehensive collection of guides, tips, and resources to help you navigate your study abroad journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Image-based resources */}
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Link key={index} href={resource.url}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer hover:scale-[1.02] h-full">
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[var(--edu-dark)] mb-3">{resource.title}</h3>
                    <p className="text-[var(--edu-gray)] mb-4">{resource.description}</p>
                    <span className="text-[var(--edu-blue)] hover:text-blue-700 font-medium inline-flex items-center">
                      {resource.action} <IconComponent className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}

          {/* Icon-based resources */}
          {additionalResources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Link key={index} href={resource.url}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer hover:scale-[1.02] h-full">
                  <div className="p-6">
                    <div className={`w-16 h-16 ${resource.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--edu-dark)] mb-3">{resource.title}</h3>
                    <p className="text-[var(--edu-gray)] mb-4">{resource.description}</p>
                    <span className="text-[var(--edu-blue)] hover:text-blue-700 font-medium inline-flex items-center">
                      {resource.action} <IconComponent className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
