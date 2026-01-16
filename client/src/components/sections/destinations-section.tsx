import { Button } from "@/components/ui/button";
import { ArrowRight, Building, Calendar } from "lucide-react";
import { useLocation, Link } from "wouter";

const ukRegions = [
  {
    name: "England",
    description: "Home to Oxford, Cambridge, and world-renowned institutions across historic cities.",
    universities: "130+ Universities",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    slug: "england",
  },
  {
    name: "Scotland",
    description: "Ancient universities including Edinburgh and St Andrews with stunning campuses.",
    universities: "19 Universities",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    slug: "scotland",
  },
  {
    name: "Wales",
    description: "Quality education with beautiful landscapes and strong community spirit.",
    universities: "8 Universities",
    image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    slug: "wales",
  },
  {
    name: "Northern Ireland",
    description: "Welcoming universities with excellent student support and affordable living.",
    universities: "2 Universities",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    slug: "northernireland",
  },
  {
    name: "London",
    description: "Global capital with Imperial, UCL, LSE and many other prestigious institutions.",
    universities: "40+ Universities",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    slug: "london",
  },
  {
    name: "Russell Group",
    description: "24 leading UK research universities offering world-class academic excellence.",
    universities: "24 Universities",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    slug: "russellgroup",
  },
];

export default function DestinationsSection() {
  const [, navigate] = useLocation();

  const handleExploreClick = (regionSlug: string) => {
    console.log(`Navigating to: /destinations?region=${regionSlug}`);
    // Force reload if already on destinations page
    if (window.location.pathname === '/destinations') {
      window.location.href = `/destinations?region=${regionSlug}`;
    } else {
      navigate(`/destinations?region=${regionSlug}`);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--edu-dark)] mb-6">
            Study in the United Kingdom
          </h2>
          <p className="text-lg sm:text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
            Explore 200+ world-class universities across England, Scotland, Wales, and Northern Ireland. Your UK education journey starts here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ukRegions.map((destination, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
              <img
                src={destination.image}
                alt={`${destination.name} University Campus`}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                <p className="text-white/90 mb-4">{destination.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm flex items-center">
                    <Building className="w-4 h-4 mr-1" />
                    {destination.universities}
                  </div>
                  <Button
                    size="sm"
                    className="bg-white text-[var(--edu-blue)] hover:bg-gray-100"
                    onClick={() => handleExploreClick(destination.slug)}
                  >
                    Explore <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[var(--edu-blue)] to-blue-700 text-white rounded-2xl p-8 inline-block">
            <h3 className="text-2xl font-bold mb-2">Not Sure Which University Is Right for You?</h3>
            <p className="text-blue-100 mb-6">Our experts will help you find the perfect match based on your goals</p>
            <Link href="/booking">
              <Button size="lg" className="bg-white text-[var(--edu-blue)] hover:bg-blue-50">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free 1-on-1 Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
