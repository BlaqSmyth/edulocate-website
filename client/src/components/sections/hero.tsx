import { Link } from "wouter";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--edu-dark)] leading-tight">
              Your Gateway to{" "}
              <span className="text-[var(--edu-blue)]">Global Education</span>
            </h1>
            <p className="mt-6 text-xl text-[var(--edu-gray)] leading-relaxed">
              We guide international students through every step of their educational journey - from university admission to landing in your dream destination.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row sm:gap-4">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-[var(--edu-blue)] text-white px-8 py-4 text-lg hover:bg-blue-700 shadow-lg"
                >
                  Start Your Journey
                </Button>
              </Link>
              <Button 
                variant="outline"
                size="lg"
                className="mt-4 sm:mt-0 border-2 border-[var(--edu-blue)] text-[var(--edu-blue)] px-8 py-4 text-lg hover:bg-[var(--edu-blue)] hover:text-white"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Success Stories
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--edu-blue)]">2500+</div>
                <div className="text-sm text-[var(--edu-gray)]">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--edu-blue)]">95%</div>
                <div className="text-sm text-[var(--edu-gray)]">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[var(--edu-blue)]">50+</div>
                <div className="text-sm text-[var(--edu-gray)]">Partner Universities</div>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <img
              src="https://images.unsplash.com/photo-1627556704259-8e4a99ea4aca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600"
              alt="Happy international students celebrating graduation ceremony"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
