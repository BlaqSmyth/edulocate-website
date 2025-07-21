import { GraduationCap, FileText, IdCard, Languages, Home, Plane, Check } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "University Selection",
    description: "Expert guidance to find the perfect university match based on your academic profile, budget, and career goals.",
    features: ["Personalized university matching", "Course recommendation", "Scholarship guidance"],
    color: "bg-blue-50 text-[var(--edu-blue)]",
  },
  {
    icon: FileText,
    title: "Application Assistance",
    description: "Complete support for your university applications, essays, and documentation to maximize your chances of acceptance.",
    features: ["Essay writing support", "Document preparation", "Application review"],
    color: "bg-green-50 text-[var(--edu-green)]",
  },
  {
    icon: IdCard,
    title: "Visa Processing",
    description: "Streamlined visa application process with expert guidance to ensure successful visa approval.",
    features: ["Visa documentation", "Interview preparation", "Status tracking"],
    color: "bg-amber-50 text-[var(--edu-amber)]",
  },
  {
    icon: Languages,
    title: "Test Preparation",
    description: "Comprehensive preparation for IELTS, TOEFL, GRE, GMAT and other standardized tests.",
    features: ["Expert coaching", "Mock tests", "Score improvement"],
    color: "bg-purple-50 text-purple-600",
  },
  {
    icon: Home,
    title: "Accommodation",
    description: "Secure comfortable and affordable housing options near your university campus.",
    features: ["Housing search", "Booking assistance", "Local guidance"],
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Plane,
    title: "Pre-Departure Support",
    description: "Complete preparation for your journey including travel arrangements and cultural orientation.",
    features: ["Travel booking", "Cultural briefing", "Airport pickup"],
    color: "bg-orange-50 text-orange-600",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--edu-dark)] mb-6">
            Complete Support Throughout Your Journey
          </h2>
          <p className="text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
            From initial consultation to successful settlement, we support students pursuing Undergraduate, Postgraduate, and PhD programs at every step of their international education adventure.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 justify-center">
            <div className="bg-white border-2 border-[var(--edu-blue)] px-6 py-3 rounded-lg">
              <div className="text-lg font-semibold text-[var(--edu-blue)]">Bachelor's Degrees</div>
              <div className="text-sm text-[var(--edu-gray)]">3-4 year programs</div>
            </div>
            <div className="bg-white border-2 border-[var(--edu-green)] px-6 py-3 rounded-lg">
              <div className="text-lg font-semibold text-[var(--edu-green)]">Master's Degrees</div>
              <div className="text-sm text-[var(--edu-gray)]">1-2 year programs</div>
            </div>
            <div className="bg-white border-2 border-[var(--edu-amber)] px-6 py-3 rounded-lg">
              <div className="text-lg font-semibold text-[var(--edu-amber)]">PhD & Research</div>
              <div className="text-sm text-[var(--edu-gray)]">3-5 year programs</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-[var(--edu-dark)] mb-4">{service.title}</h3>
                <p className="text-[var(--edu-gray)] mb-6">{service.description}</p>
                <ul className="text-[var(--edu-gray)] space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-4 h-4 text-[var(--edu-green)] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
