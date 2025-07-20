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

        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Cambridge",
        location: "Cambridge, England",
        ranking: "#3 World University Rankings 2024",
        description: "Historic university known for academic excellence and Nobel Prize winners.",
        courses: ["Mathematics", "Natural Sciences", "Economics", "Engineering", "Medicine"],

        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Imperial College London",
        location: "London, England",
        ranking: "#6 World University Rankings 2024",
        description: "Leading science, engineering, medicine and business university.",
        courses: ["Engineering", "Medicine", "Business", "Computing", "Natural Sciences"],

        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "London School of Economics",
        location: "London, England",
        ranking: "#7 World University Rankings 2024",
        description: "Premier institution for social sciences, economics, and political studies.",
        courses: ["Economics", "Politics", "Sociology", "International Relations", "Management"],
        image: "https://images.unsplash.com/photo-1520637736862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University College London",
        location: "London, England",
        ranking: "#8 World University Rankings 2024",
        description: "Diverse and inclusive university with strength across multiple disciplines.",
        courses: ["Medicine", "Architecture", "Psychology", "Engineering", "Law"],
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "King's College London",
        location: "London, England",
        ranking: "#9 World University Rankings 2024",
        description: "Historic institution with particular strength in health sciences and humanities.",
        courses: ["Medicine", "Law", "International Studies", "Dentistry", "War Studies"],
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Edinburgh",
        location: "Edinburgh, Scotland",
        ranking: "#10 World University Rankings 2024",
        description: "Scotland's premier university with beautiful campus and strong research programs.",
        courses: ["Medicine", "Veterinary Science", "Engineering", "Arts", "Informatics"],
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Manchester",
        location: "Manchester, England",
        ranking: "#11 World University Rankings 2024",
        description: "Large research university with comprehensive programs and vibrant student life.",
        courses: ["Engineering", "Computer Science", "Business", "Medicine", "Materials Science"],
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
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

        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "MIT",
        location: "Cambridge, Massachusetts",
        ranking: "#1 World University Rankings 2024",
        description: "World's leading university in technology, engineering, and innovation.",
        courses: ["Engineering", "Computer Science", "Physics", "Mathematics", "Business"],

        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Stanford University",
        location: "Stanford, California",
        ranking: "#5 World University Rankings 2024",
        description: "Leading research university known for entrepreneurship and innovation.",
        courses: ["Computer Science", "Engineering", "Business", "Medicine", "Psychology"],

        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Yale University",
        location: "New Haven, Connecticut",
        ranking: "#4 World University Rankings 2024",
        description: "Prestigious Ivy League institution known for liberal arts and research excellence.",
        courses: ["Law", "Medicine", "Drama", "Liberal Arts", "Public Health"],
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Princeton University",
        location: "Princeton, New Jersey",
        ranking: "#6 World University Rankings 2024",
        description: "Elite Ivy League university with strong undergraduate focus and beautiful campus.",
        courses: ["Engineering", "Public Policy", "Economics", "Physics", "Computer Science"],
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Pennsylvania",
        location: "Philadelphia, Pennsylvania",
        ranking: "#12 World University Rankings 2024",
        description: "Ivy League institution with top-ranked business and medical schools.",
        courses: ["Business", "Medicine", "Engineering", "Nursing", "Veterinary Medicine"],
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Columbia University",
        location: "New York, New York",
        ranking: "#13 World University Rankings 2024",
        description: "Prestigious Ivy League university in the heart of Manhattan.",
        courses: ["Journalism", "Medicine", "Business", "Engineering", "International Affairs"],
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Chicago",
        location: "Chicago, Illinois",
        ranking: "#14 World University Rankings 2024",
        description: "Renowned for rigorous academics and influential research contributions.",
        courses: ["Economics", "Business", "Medicine", "Law", "Social Sciences"],
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
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

        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "McGill University",
        location: "Montreal, Quebec",
        ranking: "#30 World University Rankings 2024",
        description: "Internationally renowned university with a diverse student body.",
        courses: ["Medicine", "Engineering", "Business", "Arts", "Science"],

        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of British Columbia",
        location: "Vancouver, British Columbia",
        ranking: "#40 World University Rankings 2024",
        description: "Public research university known for innovation and sustainability.",
        courses: ["Engineering", "Business", "Medicine", "Computer Science", "Arts"],

        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Alberta",
        location: "Edmonton, Alberta",
        ranking: "#125 World University Rankings 2024",
        description: "Major research university with strength in energy and health sciences.",
        courses: ["Engineering", "Medicine", "Business", "Agriculture", "Petroleum Engineering"],
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "McMaster University",
        location: "Hamilton, Ontario",
        ranking: "#152 World University Rankings 2024",
        description: "Innovative university known for problem-based learning and research.",
        courses: ["Medicine", "Engineering", "Business", "Health Sciences", "Nuclear Engineering"],
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Waterloo",
        location: "Waterloo, Ontario",
        ranking: "#112 World University Rankings 2024",
        description: "Leading technology university with strong co-operative education programs.",
        courses: ["Computer Science", "Engineering", "Mathematics", "Business", "Applied Health Sciences"],
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

        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Australian National University",
        location: "Canberra, ACT",
        ranking: "#34 World University Rankings 2024",
        description: "National research university with strong government connections.",
        courses: ["Politics", "Economics", "Engineering", "Computer Science", "Medicine"],

        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Sydney",
        location: "Sydney, New South Wales",
        ranking: "#41 World University Rankings 2024",
        description: "Historic university known for academic excellence and beautiful campus.",
        courses: ["Medicine", "Business", "Engineering", "Law", "Arts"],

        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of New South Wales",
        location: "Sydney, New South Wales",
        ranking: "#19 World University Rankings 2024",
        description: "Dynamic university known for innovation and industry connections.",
        courses: ["Engineering", "Business", "Medicine", "Art & Design", "Computer Science"],
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Monash University",
        location: "Melbourne, Victoria",
        ranking: "#42 World University Rankings 2024",
        description: "Large research university with campuses across Australia and internationally.",
        courses: ["Medicine", "Engineering", "Business", "Pharmacy", "Education"],
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Queensland",
        location: "Brisbane, Queensland",
        ranking: "#40 World University Rankings 2024",
        description: "Leading research university with beautiful St Lucia campus.",
        courses: ["Medicine", "Engineering", "Business", "Agriculture", "Veterinary Science"],
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

        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Otago",
        location: "Dunedin, South Island",
        ranking: "#201-250 World University Rankings 2024",
        description: "Oldest university in New Zealand with strong medical programs.",
        courses: ["Medicine", "Dentistry", "Pharmacy", "Arts", "Science"],

        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Victoria University of Wellington",
        location: "Wellington",
        ranking: "#236 World University Rankings 2024",
        description: "Capital city university with strong programs in law and public policy.",
        courses: ["Law", "Public Policy", "Creative Arts", "Sciences", "International Relations"],
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Canterbury",
        location: "Christchurch",
        ranking: "#256 World University Rankings 2024",
        description: "Leading engineering and science university rebuilding after earthquakes.",
        courses: ["Engineering", "Sciences", "Forestry", "Fine Arts", "Computer Science"],
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Massey University",
        location: "Palmerston North, Auckland, Wellington",
        ranking: "#292 World University Rankings 2024",
        description: "Multi-campus university with strength in agriculture and veterinary science.",
        courses: ["Agriculture", "Veterinary Science", "Aviation", "Creative Arts", "Business"],
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

        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Technical University of Munich",
        location: "Munich, Germany",
        ranking: "#37 World University Rankings 2024",
        description: "Germany's top technical university with strong industry connections.",
        courses: ["Engineering", "Computer Science", "Medicine", "Management", "Natural Sciences"],

        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Amsterdam",
        location: "Amsterdam, Netherlands",
        ranking: "#53 World University Rankings 2024",
        description: "Leading Dutch university with strong international programs.",
        courses: ["Business", "Economics", "Psychology", "Computer Science", "Arts"],

        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Sorbonne University",
        location: "Paris, France",
        ranking: "#46 World University Rankings 2024",
        description: "Historic Parisian university formed by merger of Paris-Sorbonne and UPMC.",
        courses: ["Medicine", "Sciences", "Literature", "Engineering", "Arts"],
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Delft University of Technology",
        location: "Delft, Netherlands",
        ranking: "#47 World University Rankings 2024",
        description: "Premier Dutch technical university with cutting-edge research facilities.",
        courses: ["Engineering", "Architecture", "Applied Sciences", "Technology", "Aerospace"],
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "KU Leuven",
        location: "Leuven, Belgium",
        ranking: "#48 World University Rankings 2024",
        description: "Belgium's largest and oldest university with excellent research.",
        courses: ["Medicine", "Engineering", "Business", "Humanities", "Social Sciences"],
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  }
};

export default function Destinations() {
  const [location] = useLocation();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  
  useEffect(() => {
    // Parse URL parameters from window.location.search instead of wouter location
    const urlParams = new URLSearchParams(window.location.search);
    const country = urlParams.get('country');
    console.log('Full URL:', window.location.href);
    console.log('Search string:', window.location.search);
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
                      
                      <div className="flex justify-end">
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
