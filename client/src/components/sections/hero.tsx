import { Link } from "wouter";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import graduationImage from "@assets/istockphoto-483505143-612x612_1753086066260.jpg";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-5 lg:text-left">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg mb-6 text-center">
              <span className="text-lg font-bold">🎓 FREE ADMISSION PROCESSING</span>
              <span className="text-sm ml-2">No Hidden Fees • No Application Charges</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-[var(--edu-dark)] leading-tight">
              Your Gateway to{" "}
              <span className="text-[var(--edu-blue)]">Global Education</span>
            </h1>
            <p className="mt-6 text-xl text-[var(--edu-gray)] leading-relaxed">
              We guide international students through every step of their educational journey - from Undergraduate to Postgraduate programs, covering university admission to landing in your dream destination. <strong className="text-[var(--edu-green)]">Completely FREE admission processing!</strong>
            </p>
            <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="bg-[var(--edu-blue)] text-white px-4 py-2 rounded-lg text-sm font-medium">
                Undergraduate Programs
              </div>
              <div className="bg-[var(--edu-green)] text-white px-4 py-2 rounded-lg text-sm font-medium">
                Postgraduate Programs
              </div>
              <div className="bg-[var(--edu-amber)] text-white px-4 py-2 rounded-lg text-sm font-medium">
                PhD & Research
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row sm:gap-4">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-[var(--edu-green)] text-white px-8 py-4 text-lg hover:bg-green-700 shadow-lg"
                >
                  Get FREE Admission Processing
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
                <div className="text-2xl font-bold text-[var(--edu-green)]">FREE</div>
                <div className="text-sm text-[var(--edu-gray)]">Admission Processing</div>
              </div>
            </div>
          </div>
          <div className="mt-16 relative sm:max-w-lg sm:mx-auto lg:mt-8 lg:max-w-none lg:mx-0 lg:col-span-7 lg:flex lg:items-center">
            <div className="relative w-full max-w-2xl mx-auto">
              <img
                src={graduationImage}
                alt="Happy international students celebrating graduation ceremony"
                className="w-full h-auto object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
