import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Expert Team",
    description: "Certified counselors with extensive knowledge of international education systems",
  },
  {
    title: "Personalized Approach",
    description: "Tailored solutions based on your academic profile, interests, and career goals",
  },
  {
    title: "End-to-End Support",
    description: "Complete assistance from university selection to successful settlement abroad",
  },
];

const trustIndicators = [
  {
    icon: "🏆",
    title: "ICEF Certified",
    description: "International quality standards",
  },
  {
    icon: "🤝",
    title: "Official Partners",
    description: "500+ university partnerships",
  },
  {
    icon: "🏅",
    title: "Award Winning",
    description: "Best consultancy 2023",
  },
  {
    icon: "👥",
    title: "Student-Centric",
    description: "95% satisfaction rate",
  },
];

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--edu-dark)] mb-6">
              About EduGlobal Consultancy
            </h2>
            <p className="text-xl text-[var(--edu-gray)] mb-6">
              For over 12 years, we've been helping students from around the world achieve their educational dreams. Our team of experienced counselors and education experts are dedicated to providing personalized guidance at every step of your journey.
            </p>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircle className="text-[var(--edu-green)] w-6 h-6 mr-4 mt-1" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--edu-dark)]">{feature.title}</h4>
                    <p className="text-[var(--edu-gray)]">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button 
              size="lg"
              className="bg-[var(--edu-blue)] text-white px-8 py-4 text-lg hover:bg-blue-700 shadow-lg"
            >
              Learn More About Our Team
            </Button>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Education consultants meeting with students"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-center text-[var(--edu-dark)] mb-12">
            Trusted by Students Worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{indicator.icon}</div>
                <h4 className="font-semibold text-[var(--edu-dark)]">{indicator.title}</h4>
                <p className="text-sm text-[var(--edu-gray)]">{indicator.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
