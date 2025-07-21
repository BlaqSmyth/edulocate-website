import { FileText, Building, Globe, Plane, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const processSteps = [
  {
    step: "STEP 1",
    icon: FileText,
    title: "FILL FORM",
    description: "Complete our online form, providing details about your academic goals and preferences.",
    color: "bg-pink-500",
    buttonText: "Apply now",
    buttonLink: "/contact"
  },
  {
    step: "STEP 2", 
    icon: Building,
    title: "UNIVERSITY APPLICATION",
    description: "Our experts guide you through selecting and applying to the ideal university.",
    color: "bg-pink-500",
    buttonText: "Apply now",
    buttonLink: "/services"
  },
  {
    step: "STEP 3",
    icon: Globe,
    title: "VISA APPLICATION", 
    description: "We assist with all visa requirements, ensuring a seamless process.",
    color: "bg-pink-500",
    buttonText: "Apply now",
    buttonLink: "/contact"
  },
  {
    step: "STEP 4",
    icon: Plane,
    title: "WELCOME ABROAD",
    description: "Arrive at your dream destination, ready to embark on your global adventure.",
    color: "bg-pink-500",
    buttonText: "Read More",
    buttonLink: "/about"
  }
];

export default function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--edu-dark)] mb-6">
            Just <span className="italic text-[var(--edu-blue)]">4 Easy</span> steps to achieving your{" "}
            <span className="italic text-[var(--edu-blue)]">Dream</span>
          </h2>
          <p className="text-lg text-[var(--edu-gray)] max-w-3xl mx-auto mb-2">
            Experience the thrill of international education with ease.
          </p>
          <p className="text-lg text-[var(--edu-gray)] max-w-3xl mx-auto mb-2">
            Our community makes studying abroad a reality at your fingertips.
          </p>
          <p className="text-lg text-[var(--edu-gray)] max-w-3xl mx-auto">
            The only challenge? Deciding which world-class university to attend!
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {processSteps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Step Number Badge */}
                <div className="absolute -top-3 left-4 z-10">
                  <div className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {step.step}
                  </div>
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl p-8 pt-12 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center h-full flex flex-col">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[var(--edu-dark)] mb-4">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[var(--edu-gray)] mb-8 flex-grow">
                    {step.description}
                  </p>

                  {/* Action Button */}
                  <Link href={step.buttonLink}>
                    <Button 
                      className="bg-[var(--edu-blue)] hover:bg-blue-700 text-white w-full rounded-full py-3 font-medium transition-colors"
                    >
                      {step.buttonText}
                    </Button>
                  </Link>
                </div>

                {/* Arrow connector (hidden on mobile and last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-pink-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Free Service Banner */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-6 rounded-2xl inline-block shadow-lg">
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="text-2xl font-bold">🎓 100% FREE PROCESS</div>
              <div className="text-lg">•</div>
              <div className="text-lg font-medium">Zero Hidden Charges</div>
              <div className="text-lg">•</div>
              <div className="text-lg font-medium">Expert Guidance Included</div>
            </div>
            <div className="text-sm mt-2 opacity-90">
              Complete admission processing at absolutely no cost to you
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}