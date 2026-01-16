import { useEffect } from "react";
import { CheckCircle, Clock, Video, Globe } from "lucide-react";

const benefits = [
  {
    icon: CheckCircle,
    title: "100% Free",
    description: "No hidden fees - our consultation and admission processing is completely free",
  },
  {
    icon: Clock,
    title: "30 Minutes",
    description: "Get personalized guidance on your UK university journey",
  },
  {
    icon: Video,
    title: "Zoom Call",
    description: "Convenient online meeting from anywhere in the world",
  },
  {
    icon: Globe,
    title: "Expert Advisors",
    description: "Speak with experienced UK education consultants",
  },
];

export default function Booking() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <title>Book Free Consultation - EduLocate</title>
      <meta name="description" content="Schedule your free 30-minute consultation with EduLocate's UK education experts. Get personalized guidance on university admissions, visas, and more." />
      
      <div className="pt-20">
        <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-[var(--edu-dark)] mb-6">
                Book Your Free Consultation
              </h1>
              <p className="text-xl text-[var(--edu-gray)]">
                Take the first step towards your UK education journey. Schedule a free 30-minute call with our expert advisors.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm">
                    <div className="bg-blue-100 text-[var(--edu-blue)] p-3 rounded-full inline-block mb-3">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-[var(--edu-dark)] mb-1">{benefit.title}</h3>
                    <p className="text-[var(--edu-gray)] text-sm">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-50 rounded-2xl p-4 lg:p-8 shadow-lg">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/edulocate3/30min?hide_gdpr_banner=1&primary_color=1e40af"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--edu-dark)] mb-4">What to Expect</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6">
                <div className="text-3xl font-bold text-[var(--edu-blue)] mb-2">1</div>
                <h3 className="font-semibold text-[var(--edu-dark)] mb-2">Book a Time</h3>
                <p className="text-[var(--edu-gray)] text-sm">Choose a convenient time slot from the calendar above</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-3xl font-bold text-[var(--edu-blue)] mb-2">2</div>
                <h3 className="font-semibold text-[var(--edu-dark)] mb-2">Join the Call</h3>
                <p className="text-[var(--edu-gray)] text-sm">You'll receive a Zoom link via email confirmation</p>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-3xl font-bold text-[var(--edu-blue)] mb-2">3</div>
                <h3 className="font-semibold text-[var(--edu-dark)] mb-2">Get Your Plan</h3>
                <p className="text-[var(--edu-gray)] text-sm">Receive personalized advice for your UK education journey</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
