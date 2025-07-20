import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import DestinationsSection from "@/components/sections/destinations-section";
import ContactSection from "@/components/sections/contact-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Star, ExternalLink, ArrowLeft } from "lucide-react";

const universitiesByCountry = {
  uk: {
    name: "United Kingdom",
    universities: [
      {
        name: "University of Oxford",
        location: "Oxford, England",
        ranking: "#2 World University Rankings 2024",
        description: "One of the oldest and most prestigious universities in the English-speaking world.",
        courses: ["Medicine", "Law", "Engineering", "Business", "Computer Science"],
        tuition: "£9,250 - £37,510",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Cambridge",
        location: "Cambridge, England",
        ranking: "#3 World University Rankings 2024",
        description: "Historic university known for academic excellence and Nobel Prize winners.",
        courses: ["Mathematics", "Natural Sciences", "Economics", "Engineering", "Medicine"],
        tuition: "£9,250 - £33,825",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Imperial College London",
        location: "London, England",
        ranking: "#6 World University Rankings 2024",
        description: "Leading science, engineering, medicine and business university.",
        courses: ["Engineering", "Medicine", "Business", "Computing", "Natural Sciences"],
        tuition: "£9,250 - £32,000",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  },
  usa: {
    name: "United States",
    universities: [
      {
        name: "Harvard University",
        location: "Cambridge, Massachusetts",
        ranking: "#3 World University Rankings 2024",
        description: "Ivy League research university with a global reputation for excellence.",
        courses: ["Business", "Medicine", "Law", "Engineering", "Computer Science"],
        tuition: "$51,925 - $73,800",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "MIT",
        location: "Cambridge, Massachusetts",
        ranking: "#1 World University Rankings 2024",
        description: "World's leading university in technology, engineering, and innovation.",
        courses: ["Engineering", "Computer Science", "Physics", "Mathematics", "Business"],
        tuition: "$57,986 - $77,020",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Stanford University",
        location: "Stanford, California",
        ranking: "#5 World University Rankings 2024",
        description: "Leading research university known for entrepreneurship and innovation.",
        courses: ["Computer Science", "Engineering", "Business", "Medicine", "Psychology"],
        tuition: "$56,169 - $74,570",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  },
  canada: {
    name: "Canada",
    universities: [
      {
        name: "University of Toronto",
        location: "Toronto, Ontario",
        ranking: "#18 World University Rankings 2024",
        description: "Canada's leading research university with global recognition.",
        courses: ["Medicine", "Engineering", "Business", "Computer Science", "Law"],
        tuition: "CAD $6,100 - $61,850",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "McGill University",
        location: "Montreal, Quebec",
        ranking: "#30 World University Rankings 2024",
        description: "Internationally renowned university with a diverse student body.",
        courses: ["Medicine", "Engineering", "Business", "Arts", "Science"],
        tuition: "CAD $4,361 - $51,000",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of British Columbia",
        location: "Vancouver, British Columbia",
        ranking: "#40 World University Rankings 2024",
        description: "Public research university known for innovation and sustainability.",
        courses: ["Engineering", "Business", "Medicine", "Computer Science", "Arts"],
        tuition: "CAD $5,729 - $51,320",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  },
  australia: {
    name: "Australia",
    universities: [
      {
        name: "University of Melbourne",
        location: "Melbourne, Victoria",
        ranking: "#14 World University Rankings 2024",
        description: "Australia's leading university with a strong research focus.",
        courses: ["Medicine", "Engineering", "Business", "Law", "Arts"],
        tuition: "AUD $32,000 - $47,000",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Australian National University",
        location: "Canberra, ACT",
        ranking: "#34 World University Rankings 2024",
        description: "National research university with strong government connections.",
        courses: ["Politics", "Economics", "Engineering", "Computer Science", "Medicine"],
        tuition: "AUD $31,000 - $46,000",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Sydney",
        location: "Sydney, New South Wales",
        ranking: "#41 World University Rankings 2024",
        description: "Historic university known for academic excellence and beautiful campus.",
        courses: ["Medicine", "Business", "Engineering", "Law", "Arts"],
        tuition: "AUD $31,500 - $50,000",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  },
  newzealand: {
    name: "New Zealand",
    universities: [
      {
        name: "University of Auckland",
        location: "Auckland, North Island",
        ranking: "#68 World University Rankings 2024",
        description: "New Zealand's largest and highest-ranked university.",
        courses: ["Engineering", "Medicine", "Business", "Arts", "Science"],
        tuition: "NZD $27,000 - $42,000",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Otago",
        location: "Dunedin, South Island",
        ranking: "#201-250 World University Rankings 2024",
        description: "Oldest university in New Zealand with strong medical programs.",
        courses: ["Medicine", "Dentistry", "Pharmacy", "Arts", "Science"],
        tuition: "NZD $25,000 - $40,000",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  },
  europe: {
    name: "Europe",
    universities: [
      {
        name: "ETH Zurich",
        location: "Zurich, Switzerland",
        ranking: "#11 World University Rankings 2024",
        description: "Leading European university for science, technology, engineering and mathematics.",
        courses: ["Engineering", "Computer Science", "Physics", "Mathematics", "Architecture"],
        tuition: "CHF 580 - 1,460",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Technical University of Munich",
        location: "Munich, Germany",
        ranking: "#37 World University Rankings 2024",
        description: "Germany's top technical university with strong industry connections.",
        courses: ["Engineering", "Computer Science", "Medicine", "Management", "Natural Sciences"],
        tuition: "€0 - €3,000",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Amsterdam",
        location: "Amsterdam, Netherlands",
        ranking: "#53 World University Rankings 2024",
        description: "Leading Dutch university with strong international programs.",
        courses: ["Business", "Economics", "Psychology", "Computer Science", "Arts"],
        tuition: "€2,314 - €18,500",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  }
};

export default function Destinations() {
  const [location] = useLocation();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  
  useEffect(() => {
    const searchParams = location.includes('?') ? location.split('?')[1] : '';
    const urlParams = new URLSearchParams(searchParams);
    const country = urlParams.get('country');
    console.log('Current location:', location);
    console.log('Search params:', searchParams);
    console.log('Country from URL:', country);
    
    if (country && universitiesByCountry[country as keyof typeof universitiesByCountry]) {
      console.log('Setting selected country:', country);
      setSelectedCountry(country);
    } else {
      setSelectedCountry(null);
    }
  }, [location]);

  const showingUniversities = selectedCountry && universitiesByCountry[selectedCountry as keyof typeof universitiesByCountry];

  return (
    <>
      <title>Study Destinations - EduGlobal Consultancy</title>
      <meta name="description" content="Explore top study destinations including UK, USA, Canada, Australia, New Zealand, and Europe. Find the perfect country for your international education." />
      
      <div className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            {showingUniversities ? (
              <>
                <div className="flex justify-center mb-6">
                  <Button
                    variant="ghost"
                    onClick={() => setSelectedCountry(null)}
                    className="text-[var(--edu-blue)] hover:text-blue-700"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to All Destinations
                  </Button>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-[var(--edu-dark)] mb-6">
                  Universities in {universitiesByCountry[selectedCountry as keyof typeof universitiesByCountry].name}
                </h1>
                <p className="text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
                  Explore top-ranked universities and find your perfect academic match in {universitiesByCountry[selectedCountry as keyof typeof universitiesByCountry].name}.
                </p>
              </>
            ) : (
              <>
                <h1 className="text-4xl lg:text-6xl font-bold text-[var(--edu-dark)] mb-6">
                  Study Destinations Worldwide
                </h1>
                <p className="text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
                  Discover world-class education opportunities across multiple countries and find your perfect academic destination with our expert guidance.
                </p>
              </>
            )}
          </div>
        </div>
        
        {showingUniversities ? (
          <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {universitiesByCountry[selectedCountry as keyof typeof universitiesByCountry].universities.map((university, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="relative">
                      <img
                        src={university.image}
                        alt={university.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-[var(--edu-blue)] text-white">
                          <Star className="w-3 h-3 mr-1" />
                          {university.ranking}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl text-[var(--edu-dark)]">{university.name}</CardTitle>
                      <CardDescription className="flex items-center text-[var(--edu-gray)]">
                        <MapPin className="w-4 h-4 mr-1" />
                        {university.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-[var(--edu-gray)] mb-4">{university.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-[var(--edu-dark)] mb-2">Popular Courses:</h4>
                        <div className="flex flex-wrap gap-2">
                          {university.courses.map((course, courseIndex) => (
                            <Badge key={courseIndex} variant="secondary">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-sm text-[var(--edu-gray)]">Annual Tuition:</span>
                          <div className="font-semibold text-[var(--edu-dark)]">{university.tuition}</div>
                        </div>
                        <Button className="bg-[var(--edu-blue)] text-white hover:bg-blue-700">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          Learn More
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        ) : (
          <DestinationsSection />
        )}
        
        <ContactSection />
      </div>
    </>
  );
}
