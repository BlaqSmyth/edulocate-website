import { Button } from "@/components/ui/button";
import { ArrowRight, Building } from "lucide-react";
import { Link } from "wouter";

const destinations = [
  {
    name: "United Kingdom",
    description: "Home to world-renowned institutions like Oxford, Cambridge, and Imperial College London.",
    universities: "200+ Universities",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    slug: "uk",
  },
  {
    name: "United States",
    description: "Access to Ivy League schools and world-class research universities across America.",
    universities: "4000+ Universities",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    slug: "usa",
  },
  {
    name: "Canada",
    description: "Quality education with excellent post-study work opportunities and immigration pathways.",
    universities: "100+ Universities",
    image: "https://pixabay.com/get/g3c28c5a77cabb33daeef85f9156ceba445ca465fc148d6dd9ee2da6a1eabcb4cadc557153c03efc7a60ff908ca4b93a5a8ae02db9666c3f1f315a79673074c78_1280.jpg",
    slug: "canada",
  },
  {
    name: "Australia",
    description: "World-class education in a vibrant multicultural environment with stunning landscapes.",
    universities: "43 Universities",
    image: "https://pixabay.com/get/g4d95ad1af3f0338697770030777165a3459bcc0a63e2dbb2ae78ca1641210b4e691761560e9d13aac9a801bcb682f1e0306bec2d13027906d8b48893102f2341_1280.jpg",
    slug: "australia",
  },
  {
    name: "New Zealand",
    description: "Innovation-focused education in one of the world's safest and most beautiful countries.",
    universities: "8 Universities",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    slug: "newzealand",
  },
  {
    name: "Europe",
    description: "Affordable quality education across Germany, Netherlands, France, and other European nations.",
    universities: "1000+ Universities",
    image: "https://pixabay.com/get/g2905ce67b2fc6fe30bdd8803d210d1730049c9998dc5ece142cd64d94c6908c2a99b5b365ec89eb97d223a72be2ba307f8c1ca0cbb5772f854e32004b3acd8ea_1280.jpg",
    slug: "europe",
  },
];

export default function DestinationsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--edu-dark)] mb-6">
            Study Destinations Around the World
          </h2>
          <p className="text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
            Explore world-class education opportunities across multiple countries and find your perfect academic destination.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
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
                  <Link href={`/destinations?country=${destination.slug}`}>
                    <Button
                      size="sm"
                      className="bg-white text-[var(--edu-blue)] hover:bg-gray-100"
                      onClick={() => console.log(`Navigating to: /destinations?country=${destination.slug}`)}
                    >
                      Explore <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
