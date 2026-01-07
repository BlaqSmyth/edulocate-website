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
    totalUniversities: "200+",
    universities: [
      {
        name: "University of Cambridge",
        location: "Cambridge, England",
        ranking: "#1 Complete University Guide 2025",
        description: "World's oldest English-speaking university with outstanding research and teaching excellence.",
        courses: ["Mathematics", "Natural Sciences", "Economics", "Engineering", "Medicine"],
        website: "https://www.cam.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Oxford",
        location: "Oxford, England",
        ranking: "#2 Complete University Guide 2025",
        description: "One of the oldest and most prestigious universities in the English-speaking world.",
        courses: ["Medicine", "Law", "Engineering", "Business", "Computer Science"],
        website: "https://www.ox.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "London School of Economics",
        location: "London, England",
        ranking: "#3 Complete University Guide 2025",
        description: "World-leading social science institution with exceptional research quality.",
        courses: ["Economics", "Politics", "Sociology", "International Relations", "Management"],
        website: "https://www.lse.ac.uk",
        image: "https://images.unsplash.com/photo-1520637736862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of St Andrews",
        location: "St Andrews, Scotland",
        ranking: "#4 Complete University Guide 2025",
        description: "Ancient Scottish university with excellent student satisfaction and teaching quality.",
        courses: ["International Relations", "Philosophy", "Psychology", "Computer Science", "Medicine"],
        website: "https://www.st-andrews.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Imperial College London",
        location: "London, England",
        ranking: "#5 Complete University Guide 2025",
        description: "Leading science, engineering, medicine and business university with exceptional graduate prospects.",
        courses: ["Engineering", "Medicine", "Business", "Computing", "Natural Sciences"],
        website: "https://www.imperial.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Warwick",
        location: "Coventry, England",
        ranking: "#6 Complete University Guide 2025",
        description: "Dynamic research university with world-class business and economics programs.",
        courses: ["Business", "Economics", "Engineering", "Computer Science", "Mathematics"],
        website: "https://warwick.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University College London",
        location: "London, England",
        ranking: "#7 Complete University Guide 2025",
        description: "Diverse and inclusive university with strength across multiple disciplines.",
        courses: ["Medicine", "Architecture", "Psychology", "Engineering", "Law"],
        website: "https://www.ucl.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Bath",
        location: "Bath, England",
        ranking: "#8 Complete University Guide 2025",
        description: "Modern campus university with outstanding graduate employment rates.",
        courses: ["Engineering", "Management", "Architecture", "Psychology", "Computer Science"],
        website: "https://www.bath.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Durham University",
        location: "Durham, England",
        ranking: "#9 Complete University Guide 2025",
        description: "Collegiate university with stunning cathedral city campus and excellent teaching.",
        courses: ["Business", "Law", "Engineering", "Natural Sciences", "Humanities"],
        website: "https://www.dur.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "King's College London",
        location: "London, England",
        ranking: "#10 Complete University Guide 2025",
        description: "Historic institution with particular strength in health sciences and humanities.",
        courses: ["Medicine", "Law", "International Studies", "Dentistry", "War Studies"],
        website: "https://www.kcl.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Edinburgh",
        location: "Edinburgh, Scotland",
        ranking: "#11 Complete University Guide 2025",
        description: "Scotland's premier university with beautiful campus and strong research programs.",
        courses: ["Medicine", "Veterinary Science", "Engineering", "Arts", "Informatics"],
        website: "https://www.ed.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Birmingham",
        location: "Birmingham, England",
        ranking: "#12 Complete University Guide 2025",
        description: "Leading research university and founding member of the Russell Group.",
        courses: ["Medicine", "Engineering", "Business", "Psychology", "Law"],
        website: "https://www.birmingham.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Lancaster University",
        location: "Lancaster, England",
        ranking: "#13 Complete University Guide 2025",
        description: "Campus university with outstanding research and excellent student experience.",
        courses: ["Management", "Psychology", "Engineering", "Computer Science", "Environmental Science"],
        website: "https://www.lancaster.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Exeter",
        location: "Exeter, England",
        ranking: "#14 Complete University Guide 2025",
        description: "Beautiful campus university with excellent teaching and research reputation.",
        courses: ["Medicine", "Business", "Psychology", "Engineering", "Environmental Science"],
        website: "https://www.exeter.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Bristol",
        location: "Bristol, England",
        ranking: "#16 Complete University Guide 2025",
        description: "Leading research university known for innovation and engineering excellence.",
        courses: ["Engineering", "Computer Science", "Medicine", "Law", "Economics"],
        website: "https://www.bristol.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of York",
        location: "York, England",
        ranking: "#17 Complete University Guide 2025",
        description: "Modern research university with beautiful campus and strong academic reputation.",
        courses: ["Psychology", "Computer Science", "Economics", "Medicine", "Law"],
        website: "https://www.york.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Sheffield",
        location: "Sheffield, England",
        ranking: "#18 Complete University Guide 2025",
        description: "Russell Group university with outstanding engineering and medical programs.",
        courses: ["Engineering", "Medicine", "Architecture", "Computer Science", "Psychology"],
        website: "https://www.sheffield.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Liverpool",
        location: "Liverpool, England",
        ranking: "#19 Complete University Guide 2025",
        description: "Historic Russell Group university with strong research and teaching traditions.",
        courses: ["Medicine", "Veterinary Science", "Engineering", "Business", "Computer Science"],
        website: "https://www.liverpool.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Southampton",
        location: "Southampton, England",
        ranking: "#20 Complete University Guide 2025",
        description: "Leading research university with particular strength in engineering and computer science.",
        courses: ["Engineering", "Computer Science", "Medicine", "Business", "Maritime Studies"],
        website: "https://www.southampton.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Glasgow",
        location: "Glasgow, Scotland",
        ranking: "#21 Complete University Guide 2025",
        description: "Ancient Scottish university with beautiful Gothic campus and strong research tradition.",
        courses: ["Medicine", "Engineering", "Law", "Arts", "Veterinary Medicine"],
        website: "https://www.gla.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Nottingham",
        location: "Nottingham, England",
        ranking: "#22 Complete University Guide 2025",
        description: "Research-intensive university with beautiful campus and global campuses.",
        courses: ["Medicine", "Veterinary Science", "Engineering", "Business", "Pharmacy"],
        website: "https://www.nottingham.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Queen Mary University of London",
        location: "London, England",
        ranking: "#23 Complete University Guide 2025",
        description: "Russell Group university with strong research reputation and diverse student body.",
        courses: ["Medicine", "Dentistry", "Law", "Engineering", "Computer Science"],
        website: "https://www.qmul.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Manchester",
        location: "Manchester, England",
        ranking: "#24 Complete University Guide 2025",
        description: "Large research university with comprehensive programs and vibrant student life.",
        courses: ["Engineering", "Computer Science", "Business", "Medicine", "Materials Science"],
        website: "https://www.manchester.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Leeds",
        location: "Leeds, England",
        ranking: "#26 Complete University Guide 2025",
        description: "Russell Group university offering wide range of subjects with excellent facilities.",
        courses: ["Medicine", "Engineering", "Business", "Psychology", "Textiles"],
        website: "https://www.leeds.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Newcastle University",
        location: "Newcastle, England",
        ranking: "#27 Complete University Guide 2025",
        description: "Russell Group university with outstanding research and vibrant city campus.",
        courses: ["Medicine", "Engineering", "Architecture", "Psychology", "Marine Sciences"],
        website: "https://www.ncl.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Cardiff University",
        location: "Cardiff, Wales",
        ranking: "#28 Complete University Guide 2025",
        description: "Leading Welsh university with excellent research reputation and student satisfaction.",
        courses: ["Medicine", "Journalism", "Engineering", "Psychology", "Architecture"],
        website: "https://www.cardiff.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Queen's University Belfast",
        location: "Belfast, Northern Ireland",
        ranking: "#29 Complete University Guide 2025",
        description: "Russell Group university with strong research tradition and beautiful campus.",
        courses: ["Medicine", "Engineering", "Law", "Psychology", "Pharmacy"],
        website: "https://www.qub.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Sussex",
        location: "Brighton, England",
        ranking: "#30 Complete University Guide 2025",
        description: "Innovative university with strong research reputation and beautiful campus near Brighton.",
        courses: ["Psychology", "International Relations", "Computer Science", "Medicine", "Business"],
        website: "https://www.sussex.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Coventry University",
        location: "Coventry, West Midlands",
        ranking: "#32 Complete University Guide 2025",
        description: "Dynamic modern university with excellent student satisfaction and industry partnerships.",
        courses: ["Engineering", "Business", "Design", "Health Sciences", "Computing"],
        website: "https://www.coventry.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Loughborough University",
        location: "Loughborough, Leicestershire",
        ranking: "#40 Complete University Guide 2025",
        description: "Leading university for sport and engineering with outstanding student experience.",
        courses: ["Sport Science", "Engineering", "Business", "Design", "Computer Science"],
        website: "https://www.lboro.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  }
};

export default function Destinations() {
  const [location] = useLocation();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const country = urlParams.get('country');
    
    if (country && universitiesByCountry[country as keyof typeof universitiesByCountry]) {
      setSelectedCountry(country);
    } else {
      setSelectedCountry(null);
    }
  }, [location]);

  useEffect(() => {
    const handleStorageChange = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const country = urlParams.get('country');
      
      if (country && universitiesByCountry[country as keyof typeof universitiesByCountry]) {
        setSelectedCountry(country);
      } else {
        setSelectedCountry(null);
      }
    };

    window.addEventListener('popstate', handleStorageChange);
    
    const originalPushState = history.pushState;
    history.pushState = function(...args: [any, string, string | URL | null | undefined]) {
      originalPushState.apply(history, args);
      setTimeout(handleStorageChange, 0);
    };

    return () => {
      window.removeEventListener('popstate', handleStorageChange);
      history.pushState = originalPushState;
    };
  }, []);

  const showingUniversities = selectedCountry && universitiesByCountry[selectedCountry as keyof typeof universitiesByCountry];

  return (
    <>
      <title>Study in the UK - StudyPlug</title>
      <meta name="description" content="Explore top UK universities including Oxford, Cambridge, and Imperial College. Find your perfect university in England, Scotland, Wales, or Northern Ireland." />
      
      <div className="pt-20">
        {showingUniversities && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <Button
                  variant="ghost"
                  onClick={() => setSelectedCountry(null)}
                  className="text-[var(--edu-blue)] hover:text-blue-700"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to UK Regions
                </Button>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[var(--edu-dark)] mb-6">
                Top UK Universities
              </h1>
              <p className="text-lg sm:text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
                Explore top-ranked universities and find your perfect academic match in the United Kingdom.
              </p>
            </div>
          </div>
        )}
        
        {showingUniversities ? (
          <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {universitiesByCountry[selectedCountry as keyof typeof universitiesByCountry].universities.map((university, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow" data-testid={`card-university-${index}`}>
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
                      <CardTitle className="text-xl sm:text-2xl text-[var(--edu-dark)]">{university.name}</CardTitle>
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
                        <Button 
                          className="bg-[var(--edu-blue)] text-white hover:bg-blue-700"
                          onClick={() => window.open(university.website, '_blank')}
                          data-testid={`button-learn-more-${index}`}
                        >
                          <GraduationCap className="w-4 h-4 mr-2" />
                          Learn More
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {universitiesByCountry[selectedCountry as keyof typeof universitiesByCountry].totalUniversities && (
                <div className="mt-12">
                  <div className="bg-[var(--edu-blue)] text-white rounded-2xl p-6 sm:p-8 text-center">
                    <GraduationCap className="w-12 h-12 mx-auto mb-4 text-amber-300" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      {universitiesByCountry[selectedCountry as keyof typeof universitiesByCountry].totalUniversities} Universities Available
                    </h3>
                    <p className="text-blue-100 mb-4">
                      We've shown you some of the top-ranked universities in the United Kingdom. 
                      Many more excellent institutions are available for your studies.
                    </p>
                    <div className="flex items-center justify-center space-x-2 text-blue-100">
                      <span>Contact us to explore all your options</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              )}
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
