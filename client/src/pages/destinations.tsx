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
        name: "University of Leicester",
        location: "Leicester, England",
        ranking: "#25 Complete University Guide 2025",
        description: "Compact campus university with strong research reputation and supportive environment.",
        courses: ["Medicine", "Psychology", "Engineering", "Law", "Criminology"],
        website: "https://www.leicester.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
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
        name: "University of Hertfordshire",
        location: "Hatfield, Hertfordshire",
        ranking: "#31 Complete University Guide 2025",
        description: "Modern university with strong industry connections and excellent graduate employment rates.",
        courses: ["Business", "Engineering", "Computer Science", "Health Sciences", "Creative Arts"],
        website: "https://www.herts.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
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
        name: "University of Portsmouth",
        location: "Portsmouth, Hampshire",
        ranking: "#33 Complete University Guide 2025",
        description: "Coastal university with strong research reputation and excellent student support services.",
        courses: ["Marine Sciences", "Engineering", "Business", "Psychology", "Pharmacy"],
        website: "https://www.port.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Salford",
        location: "Salford, Greater Manchester",
        ranking: "#34 Complete University Guide 2025",
        description: "Industry-focused university with strong links to business and excellent practical training.",
        courses: ["Media", "Engineering", "Business", "Health Sciences", "Built Environment"],
        website: "https://www.salford.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Greenwich",
        location: "Greenwich, London",
        ranking: "#35 Complete University Guide 2025",
        description: "Historic university with beautiful campus and strong professional programs.",
        courses: ["Architecture", "Engineering", "Business", "Computing", "Education"],
        website: "https://www.gre.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of East London",
        location: "London, England",
        ranking: "#36 Complete University Guide 2025",
        description: "Diverse London university with strong community focus and professional programs.",
        courses: ["Psychology", "Business", "Law", "Health Sciences", "Architecture"],
        website: "https://www.uel.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Essex",
        location: "Colchester, Essex",
        ranking: "#37 Complete University Guide 2025",
        description: "Research-intensive university with strong social sciences and excellent international reputation.",
        courses: ["Political Science", "Economics", "Psychology", "Computer Science", "Law"],
        website: "https://www.essex.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Northumbria University",
        location: "Newcastle, England",
        ranking: "#38 Complete University Guide 2025",
        description: "Modern university with excellent industry connections and strong graduate employment.",
        courses: ["Business", "Engineering", "Law", "Design", "Health Sciences"],
        website: "https://www.northumbria.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Brunel University London",
        location: "Uxbridge, London",
        ranking: "#39 Complete University Guide 2025",
        description: "Technology-focused university with strong industry partnerships and excellent facilities.",
        courses: ["Engineering", "Design", "Business", "Computer Science", "Health Sciences"],
        website: "https://www.brunel.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Loughborough University",
        location: "Loughborough, Leicestershire",
        ranking: "#40 Complete University Guide 2025",
        description: "Leading university for sport and engineering with outstanding student experience.",
        courses: ["Sport Science", "Engineering", "Business", "Design", "Computer Science"],
        website: "https://www.lboro.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Reading",
        location: "Reading, Berkshire",
        ranking: "#41 Complete University Guide 2025",
        description: "Research-intensive university with beautiful campus and strong academic reputation.",
        courses: ["Agriculture", "Business", "Psychology", "Meteorology", "Real Estate"],
        website: "https://www.reading.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Kent",
        location: "Canterbury, Kent",
        ranking: "#42 Complete University Guide 2025",
        description: "European university with beautiful campus and strong international connections.",
        courses: ["Law", "Psychology", "Business", "Computer Science", "Social Sciences"],
        website: "https://www.kent.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Stirling",
        location: "Stirling, Scotland",
        ranking: "#43 Complete University Guide 2025",
        description: "Beautiful Scottish campus university with excellent student support and research.",
        courses: ["Psychology", "Education", "Sport", "Business", "Media"],
        website: "https://www.stir.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Kingston University",
        location: "Kingston upon Thames, London",
        ranking: "#44 Complete University Guide 2025",
        description: "Modern London university with strong creative and professional programs.",
        courses: ["Art & Design", "Business", "Engineering", "Health Sciences", "Computing"],
        website: "https://www.kingston.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Oxford Brookes University",
        location: "Oxford, England",
        ranking: "#45 Complete University Guide 2025",
        description: "Modern university in historic Oxford with excellent teaching and student satisfaction.",
        courses: ["Architecture", "Business", "Health Sciences", "Psychology", "Planning"],
        website: "https://www.brookes.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Huddersfield",
        location: "Huddersfield, West Yorkshire",
        ranking: "#46 Complete University Guide 2025",
        description: "Student-focused university with excellent graduate employment and industry links.",
        courses: ["Engineering", "Business", "Health Sciences", "Computing", "Music"],
        website: "https://www.hud.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Lincoln",
        location: "Lincoln, Lincolnshire",
        ranking: "#47 Complete University Guide 2025",
        description: "Modern university with beautiful waterfront campus and strong student satisfaction.",
        courses: ["Psychology", "Engineering", "Business", "Computer Science", "Health Sciences"],
        website: "https://www.lincoln.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Central Lancashire",
        location: "Preston, Lancashire",
        ranking: "#48 Complete University Guide 2025",
        description: "Comprehensive university with diverse programs and strong community engagement.",
        courses: ["Medicine", "Engineering", "Business", "Media", "Social Work"],
        website: "https://www.uclan.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Manchester Metropolitan University",
        location: "Manchester, England",
        ranking: "#49 Complete University Guide 2025",
        description: "Large metropolitan university with strong creative and professional programs.",
        courses: ["Art & Design", "Business", "Education", "Health Sciences", "Computing"],
        website: "https://www.mmu.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Bradford",
        location: "Bradford, West Yorkshire",
        ranking: "#50 Complete University Guide 2025",
        description: "Diverse university with strong focus on applied research and professional development.",
        courses: ["Engineering", "Health Sciences", "Business", "Social Sciences", "Computing"],
        website: "https://www.bradford.ac.uk",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  },
  usa: {
    name: "United States",
    totalUniversities: "4,000+",
    universities: [
      {
        name: "Princeton University",
        location: "Princeton, NJ",
        ranking: "#1 US News 2025",
        description: "Elite Ivy League university with outstanding undergraduate education and research excellence.",
        courses: ["Engineering", "Public Policy", "Economics", "Physics", "Computer Science"],
        website: "https://www.princeton.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Massachusetts Institute of Technology",
        location: "Cambridge, MA",
        ranking: "#2 US News 2025",
        description: "World's leading technology and engineering research university.",
        courses: ["Engineering", "Computer Science", "Physics", "Mathematics", "Business"],
        website: "https://www.mit.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Harvard University",
        location: "Cambridge, MA",
        ranking: "#3 US News 2025",
        description: "America's oldest higher education institution with unparalleled academic excellence.",
        courses: ["Medicine", "Business", "Law", "Engineering", "Liberal Arts"],
        website: "https://www.harvard.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Stanford University",
        location: "Stanford, CA",
        ranking: "#3 US News 2025",
        description: "Leading research university in Silicon Valley known for innovation and entrepreneurship.",
        courses: ["Computer Science", "Engineering", "Business", "Medicine", "Social Sciences"],
        website: "https://www.stanford.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Yale University",
        location: "New Haven, CT",
        ranking: "#5 US News 2025",
        description: "Historic Ivy League institution with strong liberal arts tradition and research excellence.",
        courses: ["Liberal Arts", "Medicine", "Law", "Business", "Drama"],
        website: "https://www.yale.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Pennsylvania",
        location: "Philadelphia, PA",
        ranking: "#6 US News 2025",
        description: "Ivy League university with the prestigious Wharton School of Business.",
        courses: ["Business", "Engineering", "Medicine", "Nursing", "Social Sciences"],
        website: "https://www.upenn.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "California Institute of Technology",
        location: "Pasadena, CA",
        ranking: "#7 US News 2025",
        description: "Elite science and engineering institute known for cutting-edge research and innovation.",
        courses: ["Engineering", "Physics", "Chemistry", "Biology", "Computer Science"],
        website: "https://www.caltech.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Duke University",
        location: "Durham, NC",
        ranking: "#7 US News 2025",
        description: "Premier research university with strong programs in medicine, business, and engineering.",
        courses: ["Medicine", "Business", "Engineering", "Public Policy", "Law"],
        website: "https://www.duke.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Brown University",
        location: "Providence, RI",
        ranking: "#9 US News 2025",
        description: "Ivy League university known for academic freedom and innovative curriculum.",
        courses: ["Liberal Arts", "Medicine", "Engineering", "International Relations", "Computer Science"],
        website: "https://www.brown.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Johns Hopkins University",
        location: "Baltimore, MD",
        ranking: "#9 US News 2025",
        description: "Leading research university renowned for medicine, public health, and international studies.",
        courses: ["Medicine", "Public Health", "Engineering", "International Studies", "Nursing"],
        website: "https://www.jhu.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Northwestern University",
        location: "Evanston, IL",
        ranking: "#9 US News 2025",
        description: "Elite private university with outstanding journalism, business, and medical programs.",
        courses: ["Journalism", "Business", "Medicine", "Engineering", "Communications"],
        website: "https://www.northwestern.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Columbia University",
        location: "New York, NY",
        ranking: "#12 US News 2025",
        description: "Ivy League university in Manhattan with strong journalism and business programs.",
        courses: ["Journalism", "Business", "Medicine", "Law", "Engineering"],
        website: "https://www.columbia.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Cornell University",
        location: "Ithaca, NY",
        ranking: "#12 US News 2025",
        description: "Ivy League institution with diverse programs including agriculture, engineering, and business.",
        courses: ["Engineering", "Agriculture", "Veterinary Medicine", "Business", "Hotel Administration"],
        website: "https://www.cornell.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Chicago",
        location: "Chicago, IL",
        ranking: "#12 US News 2025",
        description: "Research powerhouse known for economics, social sciences, and rigorous academics.",
        courses: ["Economics", "Business", "Medicine", "Law", "Social Sciences"],
        website: "https://www.uchicago.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of California, Berkeley",
        location: "Berkeley, CA",
        ranking: "#15 US News 2025",
        description: "Top public university known for academic excellence and research innovation.",
        courses: ["Engineering", "Computer Science", "Business", "Public Policy", "Natural Sciences"],
        website: "https://www.berkeley.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of California, Los Angeles",
        location: "Los Angeles, CA",
        ranking: "#15 US News 2025",
        description: "Premier public research university with outstanding programs across all disciplines.",
        courses: ["Film", "Medicine", "Engineering", "Business", "Psychology"],
        website: "https://www.ucla.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Rice University",
        location: "Houston, TX",
        ranking: "#17 US News 2025",
        description: "Small private research university known for engineering, business, and liberal arts.",
        courses: ["Engineering", "Business", "Architecture", "Music", "Natural Sciences"],
        website: "https://www.rice.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Dartmouth College",
        location: "Hanover, NH",
        ranking: "#18 US News 2025",
        description: "Ivy League college with strong alumni network and outdoor recreation culture.",
        courses: ["Liberal Arts", "Business", "Engineering", "Medicine", "Environmental Studies"],
        website: "https://www.dartmouth.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Vanderbilt University",
        location: "Nashville, TN",
        ranking: "#18 US News 2025",
        description: "Private research university with strong programs in education, medicine, and music.",
        courses: ["Education", "Medicine", "Engineering", "Business", "Music"],
        website: "https://www.vanderbilt.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Notre Dame",
        location: "Notre Dame, IN",
        ranking: "#20 US News 2025",
        description: "Catholic research university with strong undergraduate education and business programs.",
        courses: ["Business", "Engineering", "Liberal Arts", "Architecture", "Science"],
        website: "https://www.nd.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Michigan",
        location: "Ann Arbor, MI",
        ranking: "#21 US News 2025",
        description: "Top public research university with excellent programs across all fields.",
        courses: ["Engineering", "Business", "Medicine", "Law", "Public Policy"],
        website: "https://www.umich.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Georgetown University",
        location: "Washington, DC",
        ranking: "#22 US News 2025",
        description: "Prestigious Catholic university known for international affairs and law programs.",
        courses: ["International Affairs", "Law", "Business", "Medicine", "Public Policy"],
        website: "https://www.georgetown.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of North Carolina at Chapel Hill",
        location: "Chapel Hill, NC",
        ranking: "#22 US News 2025",
        description: "Public research university with strong liberal arts and professional programs.",
        courses: ["Journalism", "Business", "Medicine", "Public Health", "Liberal Arts"],
        website: "https://www.unc.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Carnegie Mellon University",
        location: "Pittsburgh, PA",
        ranking: "#24 US News 2025",
        description: "Research university known for computer science, engineering, and robotics programs.",
        courses: ["Computer Science", "Engineering", "Robotics", "Business", "Fine Arts"],
        website: "https://www.cmu.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Emory University",
        location: "Atlanta, GA",
        ranking: "#24 US News 2025",
        description: "Private research university with outstanding medical and business programs.",
        courses: ["Medicine", "Business", "Nursing", "Public Health", "Liberal Arts"],
        website: "https://www.emory.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Virginia",
        location: "Charlottesville, VA",
        ranking: "#24 US News 2025",
        description: "Public university founded by Thomas Jefferson with honor code tradition.",
        courses: ["Business", "Law", "Medicine", "Engineering", "Liberal Arts"],
        website: "https://www.virginia.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Washington University in St. Louis",
        location: "St. Louis, MO",
        ranking: "#24 US News 2025",
        description: "Private research university with strong programs in medicine and engineering.",
        courses: ["Medicine", "Engineering", "Business", "Arts & Sciences", "Social Work"],
        website: "https://www.wustl.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of California, Davis",
        location: "Davis, CA",
        ranking: "#28 US News 2025",
        description: "Public research university known for agriculture, veterinary medicine, and environmental science.",
        courses: ["Agriculture", "Veterinary Medicine", "Engineering", "Medicine", "Environmental Science"],
        website: "https://www.ucdavis.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of California, San Diego",
        location: "San Diego, CA",
        ranking: "#28 US News 2025",
        description: "Public research university known for science, engineering, and ocean studies.",
        courses: ["Engineering", "Medicine", "Computer Science", "Marine Science", "Biology"],
        website: "https://www.ucsd.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Florida",
        location: "Gainesville, FL",
        ranking: "#28 US News 2025",
        description: "Large public research university with strong programs across multiple disciplines.",
        courses: ["Business", "Engineering", "Medicine", "Journalism", "Agriculture"],
        website: "https://www.ufl.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Southern California",
        location: "Los Angeles, CA",
        ranking: "#28 US News 2025",
        description: "Private research university known for cinema, business, and engineering programs.",
        courses: ["Cinema", "Business", "Engineering", "Medicine", "Communications"],
        website: "https://www.usc.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Texas at Austin",
        location: "Austin, TX",
        ranking: "#32 US News 2025",
        description: "Major public research university with strong programs in business and engineering.",
        courses: ["Business", "Engineering", "Computer Science", "Communications", "Liberal Arts"],
        website: "https://www.utexas.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Georgia Institute of Technology",
        location: "Atlanta, GA",
        ranking: "#33 US News 2025",
        description: "Public research university renowned for engineering, computing, and business programs.",
        courses: ["Engineering", "Computer Science", "Business", "Architecture", "Sciences"],
        website: "https://www.gatech.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of California, Irvine",
        location: "Irvine, CA",
        ranking: "#33 US News 2025",
        description: "Public research university known for computer science, medicine, and engineering.",
        courses: ["Computer Science", "Medicine", "Engineering", "Business", "Social Sciences"],
        website: "https://www.uci.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "New York University",
        location: "New York, NY",
        ranking: "#35 US News 2025",
        description: "Private research university in Manhattan with strong arts, business, and law programs.",
        courses: ["Business", "Arts", "Law", "Medicine", "Social Work"],
        website: "https://www.nyu.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of California, Santa Barbara",
        location: "Santa Barbara, CA",
        ranking: "#35 US News 2025",
        description: "Public research university known for engineering, sciences, and liberal arts.",
        courses: ["Engineering", "Computer Science", "Environmental Science", "Psychology", "Liberal Arts"],
        website: "https://www.ucsb.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Illinois Urbana-Champaign",
        location: "Urbana, IL",
        ranking: "#35 US News 2025",
        description: "Public research university with top-ranked engineering and computer science programs.",
        courses: ["Engineering", "Computer Science", "Business", "Agriculture", "Liberal Arts"],
        website: "https://www.illinois.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Wisconsin-Madison",
        location: "Madison, WI",
        ranking: "#35 US News 2025",
        description: "Public research university known for liberal arts, engineering, and business programs.",
        courses: ["Engineering", "Business", "Medicine", "Liberal Arts", "Agriculture"],
        website: "https://www.wisc.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Boston College",
        location: "Chestnut Hill, MA",
        ranking: "#39 US News 2025",
        description: "Catholic research university with strong liberal arts and business programs.",
        courses: ["Business", "Liberal Arts", "Education", "Social Work", "Nursing"],
        website: "https://www.bc.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Rutgers University",
        location: "New Brunswick, NJ",
        ranking: "#40 US News 2025",
        description: "Public research university with comprehensive programs and strong research output.",
        courses: ["Engineering", "Business", "Medicine", "Pharmacy", "Liberal Arts"],
        website: "https://www.rutgers.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Tufts University",
        location: "Medford, MA",
        ranking: "#40 US News 2025",
        description: "Private research university known for international relations and liberal arts.",
        courses: ["International Relations", "Medicine", "Engineering", "Liberal Arts", "Veterinary Medicine"],
        website: "https://www.tufts.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Washington",
        location: "Seattle, WA",
        ranking: "#40 US News 2025",
        description: "Public research university with strong medicine, engineering, and computer science programs.",
        courses: ["Medicine", "Engineering", "Computer Science", "Business", "Public Health"],
        website: "https://www.uw.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Boston University",
        location: "Boston, MA",
        ranking: "#43 US News 2025",
        description: "Private research university with strong programs in communications and medicine.",
        courses: ["Communications", "Medicine", "Business", "Engineering", "Liberal Arts"],
        website: "https://www.bu.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "The Ohio State University",
        location: "Columbus, OH",
        ranking: "#43 US News 2025",
        description: "Large public research university with comprehensive programs and strong athletics.",
        courses: ["Engineering", "Business", "Medicine", "Agriculture", "Liberal Arts"],
        website: "https://www.osu.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Purdue University",
        location: "West Lafayette, IN",
        ranking: "#43 US News 2025",
        description: "Public research university renowned for engineering, agriculture, and technology programs.",
        courses: ["Engineering", "Agriculture", "Technology", "Business", "Sciences"],
        website: "https://www.purdue.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Maryland, College Park",
        location: "College Park, MD",
        ranking: "#46 US News 2025",
        description: "Public research university with strong programs in engineering, business, and journalism.",
        courses: ["Engineering", "Business", "Journalism", "Computer Science", "Public Policy"],
        website: "https://www.umd.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Lehigh University",
        location: "Bethlehem, PA",
        ranking: "#47 US News 2025",
        description: "Private research university known for engineering and business programs.",
        courses: ["Engineering", "Business", "Arts & Sciences", "Education", "Health"],
        website: "https://www.lehigh.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Texas A&M University",
        location: "College Station, TX",
        ranking: "#47 US News 2025",
        description: "Public research university with strong engineering, agriculture, and business programs.",
        courses: ["Engineering", "Agriculture", "Business", "Veterinary Medicine", "Architecture"],
        website: "https://www.tamu.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Georgia",
        location: "Athens, GA",
        ranking: "#47 US News 2025",
        description: "Public research university with strong programs in business, journalism, and agriculture.",
        courses: ["Business", "Journalism", "Agriculture", "Veterinary Medicine", "Public Health"],
        website: "https://www.uga.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Rochester",
        location: "Rochester, NY",
        ranking: "#47 US News 2025",
        description: "Private research university known for medicine, engineering, and music programs.",
        courses: ["Medicine", "Engineering", "Music", "Business", "Optics"],
        website: "https://www.rochester.edu",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Virginia Tech",
        location: "Blacksburg, VA",
        ranking: "#47 US News 2025",
        description: "Public research university with outstanding engineering and architecture programs.",
        courses: ["Engineering", "Architecture", "Agriculture", "Business", "Veterinary Medicine"],
        website: "https://www.vt.edu",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Wake Forest University",
        location: "Winston-Salem, NC",
        ranking: "#47 US News 2025",
        description: "Private liberal arts university with strong business and medical programs.",
        courses: ["Business", "Medicine", "Liberal Arts", "Law", "Divinity"],
        website: "https://www.wfu.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  },
  canada: {
    name: "Canada",
    totalUniversities: "100+",
    universities: [
      {
        name: "University of Toronto",
        location: "Toronto, Ontario",
        ranking: "#18 World University Rankings 2024",
        description: "Canada's leading research university with global recognition.",
        courses: ["Medicine", "Engineering", "Business", "Computer Science", "Law"],
        website: "https://www.utoronto.ca",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "McGill University",
        location: "Montreal, Quebec",
        ranking: "#30 World University Rankings 2024",
        description: "Internationally renowned university with a diverse student body.",
        courses: ["Medicine", "Engineering", "Business", "Arts", "Science"],
        website: "https://www.mcgill.ca",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of British Columbia",
        location: "Vancouver, British Columbia",
        ranking: "#40 World University Rankings 2024",
        description: "Public research university known for innovation and sustainability.",
        courses: ["Engineering", "Business", "Medicine", "Computer Science", "Arts"],
        website: "https://www.ubc.ca",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Alberta",
        location: "Edmonton, Alberta",
        ranking: "#6 Research Infosource 2024",
        description: "Major research university with strength in energy and health sciences.",
        courses: ["Engineering", "Medicine", "Business", "Agriculture", "Petroleum Engineering"],
        website: "https://www.ualberta.ca",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "McMaster University",
        location: "Hamilton, Ontario",
        ranking: "#4 Research Infosource 2024",
        description: "Innovative university known for problem-based learning and medical research.",
        courses: ["Medicine", "Engineering", "Business", "Health Sciences", "Nuclear Engineering"],
        website: "https://www.mcmaster.ca",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Montreal",
        location: "Montreal, Quebec",
        ranking: "#5 Research Infosource 2024",
        description: "Leading French-language university with strong research programs.",
        courses: ["Medicine", "Engineering", "Business", "Computer Science", "Law"],
        website: "https://www.umontreal.ca",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Waterloo",
        location: "Waterloo, Ontario",
        ranking: "#7 Research Infosource 2024",
        description: "Leading technology university with world-renowned co-operative education programs.",
        courses: ["Computer Science", "Engineering", "Mathematics", "Business", "Applied Health Sciences"],
        website: "https://uwaterloo.ca",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Calgary",
        location: "Calgary, Alberta",
        ranking: "#8 Research Infosource 2024",
        description: "Dynamic research university known for energy studies and medicine.",
        courses: ["Engineering", "Medicine", "Business", "Veterinary Medicine", "Geoscience"],
        website: "https://www.ucalgary.ca",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Queen's University",
        location: "Kingston, Ontario",
        ranking: "#9 Research Infosource 2024",
        description: "Historic university with strong traditions and excellent undergraduate programs.",
        courses: ["Business", "Engineering", "Medicine", "Law", "Arts & Science"],
        website: "https://www.queensu.ca",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Western University",
        location: "London, Ontario",
        ranking: "#10 Research Infosource 2024",
        description: "Research-intensive university with beautiful campus and strong alumni network.",
        courses: ["Business", "Medicine", "Engineering", "Music", "Social Science"],
        website: "https://www.uwo.ca",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Simon Fraser University",
        location: "Burnaby, British Columbia",
        ranking: "#11 Research Infosource 2024",
        description: "Innovative university with interdisciplinary programs and beautiful mountain campus.",
        courses: ["Computing Science", "Business", "Communication", "Health Sciences", "Applied Sciences"],
        website: "https://www.sfu.ca",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Dalhousie University",
        location: "Halifax, Nova Scotia",
        ranking: "#12 Research Infosource 2024",
        description: "Maritime university known for ocean research and professional programs.",
        courses: ["Medicine", "Engineering", "Dentistry", "Law", "Ocean Studies"],
        website: "https://www.dal.ca",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Ottawa",
        location: "Ottawa, Ontario",
        ranking: "#13 Research Infosource 2024",
        description: "Bilingual university in Canada's capital with strong government connections.",
        courses: ["Medicine", "Engineering", "Law", "Business", "Public Administration"],
        website: "https://www.uottawa.ca",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "York University",
        location: "Toronto, Ontario",
        ranking: "#14 Research Infosource 2024",
        description: "Large comprehensive university with diverse programs and student body.",
        courses: ["Business", "Engineering", "Liberal Arts", "Health", "Fine Arts"],
        website: "https://www.yorku.ca",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Université Laval",
        location: "Quebec City, Quebec",
        ranking: "#15 Research Infosource 2024",
        description: "Historic French-language university with strong research programs in Quebec City.",
        courses: ["Medicine", "Engineering", "Business", "Forestry", "Agriculture"],
        website: "https://www.ulaval.ca",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Saskatchewan",
        location: "Saskatoon, Saskatchewan",
        ranking: "#16 Research Infosource 2024",
        description: "Research university known for agriculture, veterinary medicine, and health sciences.",
        courses: ["Agriculture", "Veterinary Medicine", "Engineering", "Medicine", "Pharmacy"],
        website: "https://www.usask.ca",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Victoria",
        location: "Victoria, British Columbia",
        ranking: "#17 Research Infosource 2024",
        description: "Beautiful west coast university known for environmental studies and co-op programs.",
        courses: ["Engineering", "Business", "Computer Science", "Environmental Studies", "Law"],
        website: "https://www.uvic.ca",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Carleton University",
        location: "Ottawa, Ontario",
        ranking: "#18 Research Infosource 2024",
        description: "Capital university known for journalism, engineering, and public affairs.",
        courses: ["Journalism", "Engineering", "Public Affairs", "Business", "Computer Science"],
        website: "https://www.carleton.ca",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Memorial University",
        location: "St. John's, Newfoundland",
        ranking: "#19 Research Infosource 2024",
        description: "Atlantic Canada's largest university with strong marine and petroleum programs.",
        courses: ["Engineering", "Medicine", "Business", "Marine Studies", "Education"],
        website: "https://www.mun.ca",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Guelph",
        location: "Guelph, Ontario",
        ranking: "#20 Research Infosource 2024",
        description: "Renowned for agriculture, veterinary medicine, and life sciences programs.",
        courses: ["Veterinary Medicine", "Agriculture", "Life Sciences", "Engineering", "Business"],
        website: "https://www.uoguelph.ca",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Concordia University",
        location: "Montreal, Quebec",
        ranking: "#21 Research Infosource 2024",
        description: "Dynamic English-language university in Montreal with strong business and engineering programs.",
        courses: ["Business", "Engineering", "Fine Arts", "Computer Science", "Communications"],
        website: "https://www.concordia.ca",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Ryerson University (Toronto Metropolitan)",
        location: "Toronto, Ontario",
        ranking: "#22 Research Infosource 2024",
        description: "Urban university focused on innovation, career-focused education, and diversity.",
        courses: ["Engineering", "Business", "Media", "Health Sciences", "Arts"],
        website: "https://www.torontomu.ca",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Manitoba",
        location: "Winnipeg, Manitoba",
        ranking: "#23 Research Infosource 2024",
        description: "Western Canada's first university with comprehensive programs and research facilities.",
        courses: ["Medicine", "Engineering", "Agriculture", "Business", "Architecture"],
        website: "https://www.umanitoba.ca",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of New Brunswick",
        location: "Fredericton, New Brunswick",
        ranking: "#24 Research Infosource 2024",
        description: "Canada's oldest English-language university with strong engineering and forestry programs.",
        courses: ["Engineering", "Forestry", "Business", "Computer Science", "Education"],
        website: "https://www.unb.ca",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
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
        website: "https://www.unimelb.edu.au",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Australian National University",
        location: "Canberra, ACT",
        ranking: "#34 World University Rankings 2024",
        description: "National research university with strong government connections.",
        courses: ["Politics", "Economics", "Engineering", "Computer Science", "Medicine"],
        website: "https://www.anu.edu.au",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Sydney",
        location: "Sydney, New South Wales",
        ranking: "#41 World University Rankings 2024",
        description: "Historic university known for academic excellence and beautiful campus.",
        courses: ["Medicine", "Business", "Engineering", "Law", "Arts"],
        website: "https://www.sydney.edu.au",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of New South Wales",
        location: "Sydney, New South Wales",
        ranking: "#19 World University Rankings 2024",
        description: "Dynamic university known for innovation and industry connections.",
        courses: ["Engineering", "Business", "Medicine", "Art & Design", "Computer Science"],
        website: "https://www.unsw.edu.au",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Monash University",
        location: "Melbourne, Victoria",
        ranking: "#42 World University Rankings 2024",
        description: "Large research university with campuses across Australia and internationally.",
        courses: ["Medicine", "Engineering", "Business", "Pharmacy", "Education"],
        website: "https://www.monash.edu",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Queensland",
        location: "Brisbane, Queensland",
        ranking: "#40 World University Rankings 2024",
        description: "Leading research university with beautiful St Lucia campus.",
        courses: ["Medicine", "Engineering", "Business", "Agriculture", "Veterinary Science"],
        website: "https://www.uq.edu.au",
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
        website: "https://www.auckland.ac.nz",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Otago",
        location: "Dunedin, South Island",
        ranking: "#201-250 World University Rankings 2024",
        description: "Oldest university in New Zealand with strong medical programs.",
        courses: ["Medicine", "Dentistry", "Pharmacy", "Arts", "Science"],
        website: "https://www.otago.ac.nz",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Victoria University of Wellington",
        location: "Wellington",
        ranking: "#236 World University Rankings 2024",
        description: "Capital city university with strong programs in law and public policy.",
        courses: ["Law", "Public Policy", "Creative Arts", "Sciences", "International Relations"],
        website: "https://www.wgtn.ac.nz",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Canterbury",
        location: "Christchurch",
        ranking: "#256 World University Rankings 2024",
        description: "Leading engineering and science university rebuilding after earthquakes.",
        courses: ["Engineering", "Sciences", "Forestry", "Fine Arts", "Computer Science"],
        website: "https://www.canterbury.ac.nz",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Massey University",
        location: "Palmerston North, Auckland, Wellington",
        ranking: "#292 World University Rankings 2024",
        description: "Multi-campus university with strength in agriculture and veterinary science.",
        courses: ["Agriculture", "Veterinary Science", "Aviation", "Creative Arts", "Business"],
        website: "https://www.massey.ac.nz",
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
        website: "https://ethz.ch",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Technical University of Munich",
        location: "Munich, Germany",
        ranking: "#37 World University Rankings 2024",
        description: "Germany's top technical university with strong industry connections.",
        courses: ["Engineering", "Computer Science", "Medicine", "Management", "Natural Sciences"],
        website: "https://www.tum.de",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Amsterdam",
        location: "Amsterdam, Netherlands",
        ranking: "#53 World University Rankings 2024",
        description: "Leading Dutch university with strong international programs.",
        courses: ["Business", "Economics", "Psychology", "Computer Science", "Arts"],
        website: "https://www.uva.nl",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Sorbonne University",
        location: "Paris, France",
        ranking: "#46 World University Rankings 2024",
        description: "Historic Parisian university formed by merger of Paris-Sorbonne and UPMC.",
        courses: ["Medicine", "Sciences", "Literature", "Engineering", "Arts"],
        website: "https://www.sorbonne-universite.fr",
        image: "https://images.unsplash.com/photo-1520637836862-4d197d17c766?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Delft University of Technology",
        location: "Delft, Netherlands",
        ranking: "#47 World University Rankings 2024",
        description: "Premier Dutch technical university with cutting-edge research facilities.",
        courses: ["Engineering", "Architecture", "Applied Sciences", "Technology", "Aerospace"],
        website: "https://www.tudelft.nl",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "KU Leuven",
        location: "Leuven, Belgium",
        ranking: "#48 World University Rankings 2024",
        description: "Belgium's largest and oldest university with excellent research.",
        courses: ["Medicine", "Engineering", "Business", "Humanities", "Social Sciences"],
        website: "https://www.kuleuven.be",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  }
};

export default function Destinations() {
  const [location] = useLocation();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  
  useEffect(() => {
    // Parse URL parameters from window.location.search
    const urlParams = new URLSearchParams(window.location.search);
    const country = urlParams.get('country');
    console.log('Full URL:', window.location.href);
    console.log('Search string:', window.location.search);
    console.log('Country from URL:', country);
    
    if (country && universitiesByCountry[country as keyof typeof universitiesByCountry]) {
      console.log('Setting selected country:', country);
      setSelectedCountry(country);
    } else {
      console.log('Country not found in universitiesByCountry. Available keys:', Object.keys(universitiesByCountry));
      console.log('Received country:', country);
      setSelectedCountry(null);
    }
  }, [location]);

  // Additional effect to handle URL changes when already on destinations page
  useEffect(() => {
    const handleStorageChange = () => {
      // Re-parse URL parameters when navigation occurs
      const urlParams = new URLSearchParams(window.location.search);
      const country = urlParams.get('country');
      
      if (country && universitiesByCountry[country as keyof typeof universitiesByCountry]) {
        setSelectedCountry(country);
      } else {
        setSelectedCountry(null);
      }
    };

    window.addEventListener('popstate', handleStorageChange);
    
    // Also listen for any URL changes
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
      <title>Study Destinations - StudyPlug</title>
      <meta name="description" content="Explore top study destinations including UK, USA, Canada, Australia, New Zealand, and Europe. Find the perfect country for your international education." />
      
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
                  Back to All Destinations
                </Button>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-[var(--edu-dark)] mb-6">
                Universities in {universitiesByCountry[selectedCountry as keyof typeof universitiesByCountry].name}
              </h1>
              <p className="text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
                Explore top-ranked universities and find your perfect academic match in {universitiesByCountry[selectedCountry as keyof typeof universitiesByCountry].name}.
              </p>
            </div>
          </div>
        )}
        
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
                        <Button 
                          className="bg-[var(--edu-blue)] text-white hover:bg-blue-700"
                          onClick={() => window.open(university.website, '_blank')}
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
              
              {/* Show More Indicator */}
              {universitiesByCountry[selectedCountry as keyof typeof universitiesByCountry].totalUniversities && (
                <div className="mt-12">
                  <div className="bg-[var(--edu-blue)] text-white rounded-2xl p-8 text-center">
                    <GraduationCap className="w-12 h-12 mx-auto mb-4 text-amber-300" />
                    <h3 className="text-2xl font-bold mb-2">
                      {universitiesByCountry[selectedCountry as keyof typeof universitiesByCountry].totalUniversities} Universities Available
                    </h3>
                    <p className="text-blue-100 mb-4">
                      We've shown you some of the top-ranked universities in {universitiesByCountry[selectedCountry as keyof typeof universitiesByCountry].name}. 
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
