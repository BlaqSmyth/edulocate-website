import { Link } from "wouter";

import { Button } from "@/components/ui/button";
import graduationImage from "@assets/istockphoto-483505143-612x612_1753086066260.jpg";

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 lg:pt-12 lg:pb-24">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:pr-8 mt-8 lg:mt-0">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-6 py-3 rounded-lg mb-6 text-center">
              <div className="text-sm sm:text-lg font-bold">🎓 FREE ADMISSION PROCESSING</div>
              <div className="text-xs sm:text-sm mt-1">No Hidden Fees • No Application Charges</div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[var(--edu-dark)] leading-tight">
              Your Gateway to{" "}
              <span className="text-[var(--edu-blue)]">Study in the UK</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-[var(--edu-gray)] leading-relaxed">
              We guide international students through every step of their UK educational journey - from Undergraduate to Postgraduate programs, covering university admission to landing in the United Kingdom. <strong className="text-[var(--edu-green)]">Completely FREE admission processing!</strong>
            </p>
            <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4 justify-center lg:justify-start">
              <div className="bg-[var(--edu-blue)] text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium">
                Undergraduate Programs
              </div>
              <div className="bg-[var(--edu-green)] text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium">
                Postgraduate Programs
              </div>
              <div className="bg-[var(--edu-amber)] text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium">
                PhD & Research
              </div>
            </div>
            <div className="mt-6 sm:mt-8">
              <Link href="/contact">
                <Button 
                  size="lg"
                  className="bg-[var(--edu-green)] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover:bg-green-700 shadow-lg w-full sm:w-auto"
                >
                  Get FREE Admission Processing
                </Button>
              </Link>
            </div>
            <div className="mt-6 sm:mt-8 flex items-center justify-center lg:justify-start space-x-4 sm:space-x-8">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[var(--edu-blue)]">2500+</div>
                <div className="text-xs sm:text-sm text-[var(--edu-gray)]">Students Placed</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[var(--edu-blue)]">95%</div>
                <div className="text-xs sm:text-sm text-[var(--edu-gray)]">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-[var(--edu-green)]">FREE</div>
                <div className="text-xs sm:text-sm text-[var(--edu-gray)]">Admission Processing</div>
              </div>
            </div>
          </div>
          <div className="relative sm:max-w-lg sm:mx-auto lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center lg:pl-8">
            <div className="relative w-full">
              <img
                src={graduationImage}
                alt="Happy international students celebrating graduation ceremony"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
