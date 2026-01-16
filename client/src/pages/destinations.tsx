import { useState, useEffect } from "react";
import { useLocation, Link } from "wouter";
import DestinationsSection from "@/components/sections/destinations-section";
import ContactSection from "@/components/sections/contact-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Star, ExternalLink, ArrowLeft, Calendar } from "lucide-react";

const universitiesByRegion: Record<string, {
  name: string;
  totalUniversities: string;
  universities: Array<{
    name: string;
    location: string;
    ranking: string;
    description: string;
    courses: string[];
    website: string;
    image: string;
  }>;
}> = {
  england: {
    name: "England",
    totalUniversities: "130+",
    universities: [
      {
        name: "University of Cambridge",
        location: "Cambridge",
        ranking: "#1 Complete University Guide 2025",
        description: "World's oldest English-speaking university with outstanding research and teaching excellence.",
        courses: ["Mathematics", "Natural Sciences", "Economics", "Engineering", "Medicine"],
        website: "https://www.cam.ac.uk",
        image: "https://images.unsplash.com/photo-1580491934786-c68c68c9b794?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Oxford",
        location: "Oxford",
        ranking: "#2 Complete University Guide 2025",
        description: "One of the oldest and most prestigious universities in the English-speaking world.",
        courses: ["Medicine", "Law", "Engineering", "Business", "Computer Science"],
        website: "https://www.ox.ac.uk",
        image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Warwick",
        location: "Coventry",
        ranking: "#6 Complete University Guide 2025",
        description: "Dynamic research university with world-class business and economics programs.",
        courses: ["Business", "Economics", "Engineering", "Computer Science", "Mathematics"],
        website: "https://warwick.ac.uk",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Bath",
        location: "Bath",
        ranking: "#8 Complete University Guide 2025",
        description: "Modern campus university with outstanding graduate employment rates.",
        courses: ["Engineering", "Management", "Architecture", "Psychology", "Computer Science"],
        website: "https://www.bath.ac.uk",
        image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Durham University",
        location: "Durham",
        ranking: "#9 Complete University Guide 2025",
        description: "Collegiate university with stunning cathedral city campus and excellent teaching.",
        courses: ["Business", "Law", "Engineering", "Natural Sciences", "Humanities"],
        website: "https://www.dur.ac.uk",
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Birmingham",
        location: "Birmingham",
        ranking: "#12 Complete University Guide 2025",
        description: "Leading research university and founding member of the Russell Group.",
        courses: ["Medicine", "Engineering", "Business", "Psychology", "Law"],
        website: "https://www.birmingham.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Lancaster University",
        location: "Lancaster",
        ranking: "#13 Complete University Guide 2025",
        description: "Campus university with outstanding research and excellent student experience.",
        courses: ["Management", "Psychology", "Engineering", "Computer Science", "Environmental Science"],
        website: "https://www.lancaster.ac.uk",
        image: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Exeter",
        location: "Exeter",
        ranking: "#14 Complete University Guide 2025",
        description: "Beautiful campus university with excellent teaching and research reputation.",
        courses: ["Medicine", "Business", "Psychology", "Engineering", "Environmental Science"],
        website: "https://www.exeter.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Bristol",
        location: "Bristol",
        ranking: "#16 Complete University Guide 2025",
        description: "Leading research university known for innovation and engineering excellence.",
        courses: ["Engineering", "Computer Science", "Medicine", "Law", "Economics"],
        website: "https://www.bristol.ac.uk",
        image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of York",
        location: "York",
        ranking: "#17 Complete University Guide 2025",
        description: "Modern research university with beautiful campus and strong academic reputation.",
        courses: ["Psychology", "Computer Science", "Economics", "Medicine", "Law"],
        website: "https://www.york.ac.uk",
        image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Sheffield",
        location: "Sheffield",
        ranking: "#18 Complete University Guide 2025",
        description: "Russell Group university with outstanding engineering and medical programs.",
        courses: ["Engineering", "Medicine", "Architecture", "Computer Science", "Psychology"],
        website: "https://www.sheffield.ac.uk",
        image: "https://images.unsplash.com/photo-1559135197-8a45ea74d367?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Liverpool",
        location: "Liverpool",
        ranking: "#19 Complete University Guide 2025",
        description: "Historic Russell Group university with strong research and teaching traditions.",
        courses: ["Medicine", "Veterinary Science", "Engineering", "Business", "Computer Science"],
        website: "https://www.liverpool.ac.uk",
        image: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Southampton",
        location: "Southampton",
        ranking: "#20 Complete University Guide 2025",
        description: "Leading research university with particular strength in engineering and computer science.",
        courses: ["Engineering", "Computer Science", "Medicine", "Business", "Maritime Studies"],
        website: "https://www.southampton.ac.uk",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Nottingham",
        location: "Nottingham",
        ranking: "#22 Complete University Guide 2025",
        description: "Research-intensive university with beautiful campus and global campuses.",
        courses: ["Medicine", "Veterinary Science", "Engineering", "Business", "Pharmacy"],
        website: "https://www.nottingham.ac.uk",
        image: "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Manchester",
        location: "Manchester",
        ranking: "#24 Complete University Guide 2025",
        description: "Large research university with comprehensive programs and vibrant student life.",
        courses: ["Engineering", "Computer Science", "Business", "Medicine", "Materials Science"],
        website: "https://www.manchester.ac.uk",
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Leeds",
        location: "Leeds",
        ranking: "#26 Complete University Guide 2025",
        description: "Russell Group university offering wide range of subjects with excellent facilities.",
        courses: ["Medicine", "Engineering", "Business", "Psychology", "Textiles"],
        website: "https://www.leeds.ac.uk",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Newcastle University",
        location: "Newcastle",
        ranking: "#27 Complete University Guide 2025",
        description: "Russell Group university with outstanding research and vibrant city campus.",
        courses: ["Medicine", "Engineering", "Architecture", "Psychology", "Marine Sciences"],
        website: "https://www.ncl.ac.uk",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Northumbria University",
        location: "Newcastle",
        ranking: "#47 Complete University Guide 2025",
        description: "Modern university with strong business, design and health programs in vibrant Newcastle.",
        courses: ["Business", "Design", "Nursing", "Computer Science", "Law"],
        website: "https://www.northumbria.ac.uk",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Sussex",
        location: "Brighton",
        ranking: "#30 Complete University Guide 2025",
        description: "Innovative university with strong research reputation near beautiful Brighton.",
        courses: ["Psychology", "International Relations", "Computer Science", "Medicine", "Business"],
        website: "https://www.sussex.ac.uk",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Surrey",
        location: "Guildford",
        ranking: "#31 Complete University Guide 2025",
        description: "Top university for graduate employment with strong industry connections.",
        courses: ["Engineering", "Hospitality", "Veterinary Medicine", "Music", "Business"],
        website: "https://www.surrey.ac.uk",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Coventry University",
        location: "Coventry",
        ranking: "#32 Complete University Guide 2025",
        description: "Dynamic modern university with excellent student satisfaction and industry partnerships.",
        courses: ["Engineering", "Business", "Design", "Health Sciences", "Computing"],
        website: "https://www.coventry.ac.uk",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of East Anglia",
        location: "Norwich",
        ranking: "#36 Complete University Guide 2025",
        description: "Beautiful campus university with world-leading environmental and creative writing programs.",
        courses: ["Environmental Sciences", "Creative Writing", "Medicine", "Psychology", "Law"],
        website: "https://www.uea.ac.uk",
        image: "https://images.unsplash.com/photo-1569447891824-7a1758aa73a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Reading",
        location: "Reading",
        ranking: "#37 Complete University Guide 2025",
        description: "Research-intensive university with strengths in agriculture, meteorology and real estate.",
        courses: ["Agriculture", "Meteorology", "Real Estate", "Psychology", "Pharmacy"],
        website: "https://www.reading.ac.uk",
        image: "https://images.unsplash.com/photo-1571019613914-85f342c6a11e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Loughborough University",
        location: "Loughborough",
        ranking: "#40 Complete University Guide 2025",
        description: "Leading university for sport and engineering with outstanding student experience.",
        courses: ["Sport Science", "Engineering", "Business", "Design", "Computer Science"],
        website: "https://www.lboro.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Leicester",
        location: "Leicester",
        ranking: "#41 Complete University Guide 2025",
        description: "Research-led university famous for discovering Richard III and DNA fingerprinting.",
        courses: ["Medicine", "Law", "Psychology", "Computer Science", "Chemistry"],
        website: "https://www.le.ac.uk",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Aston University",
        location: "Birmingham",
        ranking: "#43 Complete University Guide 2025",
        description: "Business-focused university in Birmingham city centre with excellent graduate prospects.",
        courses: ["Business", "Engineering", "Optometry", "Pharmacy", "Languages"],
        website: "https://www.aston.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Kent",
        location: "Canterbury",
        ranking: "#46 Complete University Guide 2025",
        description: "Beautiful campus university with strong arts and social sciences programs.",
        courses: ["Law", "Drama", "Politics", "Computer Science", "Architecture"],
        website: "https://www.kent.ac.uk",
        image: "https://images.unsplash.com/photo-1564429238909-a9693abfe1d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Essex",
        location: "Colchester",
        ranking: "#50 Complete University Guide 2025",
        description: "Research-intensive university with top-ranked government and politics department.",
        courses: ["Politics", "Economics", "Psychology", "Computer Science", "Law"],
        website: "https://www.essex.ac.uk",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  },
  scotland: {
    name: "Scotland",
    totalUniversities: "19",
    universities: [
      {
        name: "University of St Andrews",
        location: "St Andrews",
        ranking: "#4 Complete University Guide 2025",
        description: "Ancient Scottish university with excellent student satisfaction and teaching quality.",
        courses: ["International Relations", "Philosophy", "Psychology", "Computer Science", "Medicine"],
        website: "https://www.st-andrews.ac.uk",
        image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Edinburgh",
        location: "Edinburgh",
        ranking: "#11 Complete University Guide 2025",
        description: "Scotland's premier university with beautiful campus and strong research programs.",
        courses: ["Medicine", "Veterinary Science", "Engineering", "Arts", "Informatics"],
        website: "https://www.ed.ac.uk",
        image: "https://images.unsplash.com/photo-1599927314586-b1e2f3a3dbc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Glasgow",
        location: "Glasgow",
        ranking: "#21 Complete University Guide 2025",
        description: "Ancient Scottish university with beautiful Gothic campus and strong research tradition.",
        courses: ["Medicine", "Engineering", "Law", "Arts", "Veterinary Medicine"],
        website: "https://www.gla.ac.uk",
        image: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Aberdeen",
        location: "Aberdeen",
        ranking: "#35 Complete University Guide 2025",
        description: "One of the oldest universities in the UK with strong oil and gas industry links.",
        courses: ["Medicine", "Engineering", "Law", "Sciences", "Business"],
        website: "https://www.abdn.ac.uk",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Strathclyde",
        location: "Glasgow",
        ranking: "#42 Complete University Guide 2025",
        description: "Leading technological university with strong industry partnerships.",
        courses: ["Engineering", "Business", "Science", "Pharmacy", "Law"],
        website: "https://www.strath.ac.uk",
        image: "https://images.unsplash.com/photo-1564429238909-a9693abfe1d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Heriot-Watt University",
        location: "Edinburgh",
        ranking: "#45 Complete University Guide 2025",
        description: "International university with strengths in science, engineering and business.",
        courses: ["Engineering", "Actuarial Science", "Business", "Computing", "Design"],
        website: "https://www.hw.ac.uk",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Dundee",
        location: "Dundee",
        ranking: "#48 Complete University Guide 2025",
        description: "Research-intensive university with world-leading life sciences programs.",
        courses: ["Life Sciences", "Medicine", "Dentistry", "Art & Design", "Engineering"],
        website: "https://www.dundee.ac.uk",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Stirling",
        location: "Stirling",
        ranking: "#52 Complete University Guide 2025",
        description: "Beautiful campus university known for sports and environmental sciences.",
        courses: ["Sports Studies", "Environmental Science", "Psychology", "Business", "Nursing"],
        website: "https://www.stir.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  },
  wales: {
    name: "Wales",
    totalUniversities: "8",
    universities: [
      {
        name: "Cardiff University",
        location: "Cardiff",
        ranking: "#28 Complete University Guide 2025",
        description: "Leading Welsh university with excellent research reputation and student satisfaction.",
        courses: ["Medicine", "Journalism", "Engineering", "Psychology", "Architecture"],
        website: "https://www.cardiff.ac.uk",
        image: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Swansea University",
        location: "Swansea",
        ranking: "#38 Complete University Guide 2025",
        description: "Beachside campus university with strong engineering and sports science programs.",
        courses: ["Engineering", "Medicine", "Sports Science", "Computer Science", "Business"],
        website: "https://www.swansea.ac.uk",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Aberystwyth University",
        location: "Aberystwyth",
        ranking: "#55 Complete University Guide 2025",
        description: "Historic seaside university with strong agricultural and environmental sciences.",
        courses: ["Agriculture", "Geography", "Computer Science", "International Politics", "Welsh"],
        website: "https://www.aber.ac.uk",
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Bangor University",
        location: "Bangor",
        ranking: "#58 Complete University Guide 2025",
        description: "Beautiful location in North Wales with strong marine and environmental programs.",
        courses: ["Psychology", "Ocean Sciences", "Music", "Sports Science", "Nursing"],
        website: "https://www.bangor.ac.uk",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Cardiff Metropolitan University",
        location: "Cardiff",
        ranking: "#75 Complete University Guide 2025",
        description: "Modern university focused on professional and vocational education.",
        courses: ["Sport", "Art & Design", "Education", "Health Sciences", "Business"],
        website: "https://www.cardiffmet.ac.uk",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of South Wales",
        location: "Pontypridd",
        ranking: "#95 Complete University Guide 2025",
        description: "One of UK's largest universities with strong industry links and practical courses.",
        courses: ["Nursing", "Criminology", "Engineering", "Business", "Creative Industries"],
        website: "https://www.southwales.ac.uk",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  },
  northernireland: {
    name: "Northern Ireland",
    totalUniversities: "2",
    universities: [
      {
        name: "Queen's University Belfast",
        location: "Belfast",
        ranking: "#29 Complete University Guide 2025",
        description: "Russell Group university with strong research tradition and beautiful campus.",
        courses: ["Medicine", "Engineering", "Law", "Psychology", "Pharmacy"],
        website: "https://www.qub.ac.uk",
        image: "https://images.unsplash.com/photo-1569447891824-7a1758aa73a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Ulster University",
        location: "Belfast, Coleraine, Derry, Jordanstown",
        ranking: "#62 Complete University Guide 2025",
        description: "Multi-campus university with strong creative arts and business programs.",
        courses: ["Art & Design", "Nursing", "Business", "Computer Science", "Engineering"],
        website: "https://www.ulster.ac.uk",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  },
  london: {
    name: "London",
    totalUniversities: "40+",
    universities: [
      {
        name: "London School of Economics",
        location: "Central London",
        ranking: "#3 Complete University Guide 2025",
        description: "World-leading social science institution with exceptional research quality.",
        courses: ["Economics", "Politics", "Sociology", "International Relations", "Management"],
        website: "https://www.lse.ac.uk",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Imperial College London",
        location: "South Kensington",
        ranking: "#5 Complete University Guide 2025",
        description: "Leading science, engineering, medicine and business university with exceptional graduate prospects.",
        courses: ["Engineering", "Medicine", "Business", "Computing", "Natural Sciences"],
        website: "https://www.imperial.ac.uk",
        image: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University College London",
        location: "Bloomsbury",
        ranking: "#7 Complete University Guide 2025",
        description: "Diverse and inclusive university with strength across multiple disciplines.",
        courses: ["Medicine", "Architecture", "Psychology", "Engineering", "Law"],
        website: "https://www.ucl.ac.uk",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "King's College London",
        location: "Strand, London",
        ranking: "#10 Complete University Guide 2025",
        description: "Historic institution with particular strength in health sciences and humanities.",
        courses: ["Medicine", "Law", "International Studies", "Dentistry", "War Studies"],
        website: "https://www.kcl.ac.uk",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Queen Mary University of London",
        location: "Mile End",
        ranking: "#23 Complete University Guide 2025",
        description: "Russell Group university with strong research reputation and diverse student body.",
        courses: ["Medicine", "Dentistry", "Law", "Engineering", "Computer Science"],
        website: "https://www.qmul.ac.uk",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "SOAS University of London",
        location: "Bloomsbury",
        ranking: "#33 Complete University Guide 2025",
        description: "Specialist university focused on Asia, Africa and the Middle East.",
        courses: ["Languages", "Development Studies", "Law", "Politics", "Economics"],
        website: "https://www.soas.ac.uk",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Royal Holloway, University of London",
        location: "Egham",
        ranking: "#34 Complete University Guide 2025",
        description: "Beautiful campus with strong arts and sciences programs.",
        courses: ["Drama", "Psychology", "Computer Science", "Management", "Media Arts"],
        website: "https://www.royalholloway.ac.uk",
        image: "https://images.unsplash.com/photo-1580491934786-c68c68c9b794?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "City, University of London",
        location: "Islington",
        ranking: "#44 Complete University Guide 2025",
        description: "Business-focused university with strong journalism and law programs.",
        courses: ["Business", "Journalism", "Law", "Health Sciences", "Computing"],
        website: "https://www.city.ac.uk",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Brunel University London",
        location: "Uxbridge",
        ranking: "#51 Complete University Guide 2025",
        description: "Campus university with strong engineering and design programs.",
        courses: ["Engineering", "Design", "Business", "Sports Science", "Psychology"],
        website: "https://www.brunel.ac.uk",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Goldsmiths, University of London",
        location: "New Cross",
        ranking: "#66 Complete University Guide 2025",
        description: "Creative university known for arts, design and social sciences.",
        courses: ["Art", "Design", "Media", "Psychology", "Sociology"],
        website: "https://www.gold.ac.uk",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Birkbeck, University of London",
        location: "Bloomsbury",
        ranking: "#78 Complete University Guide 2025",
        description: "Specialist evening university ideal for working professionals and mature students.",
        courses: ["Psychology", "Law", "Business", "Sciences", "Arts"],
        website: "https://www.bbk.ac.uk",
        image: "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Kingston University",
        location: "Kingston upon Thames",
        ranking: "#82 Complete University Guide 2025",
        description: "Creative university with excellent design, architecture and pharmacy programs.",
        courses: ["Design", "Architecture", "Pharmacy", "Nursing", "Business"],
        website: "https://www.kingston.ac.uk",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Westminster",
        location: "Central London",
        ranking: "#85 Complete University Guide 2025",
        description: "Central London university with strong media, architecture and fashion programs.",
        courses: ["Media", "Architecture", "Fashion", "Business", "Languages"],
        website: "https://www.westminster.ac.uk",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "London Metropolitan University",
        location: "Holloway & Aldgate",
        ranking: "#120 Complete University Guide 2025",
        description: "Diverse university with strong focus on employability and practical skills.",
        courses: ["Business", "Architecture", "Law", "Computing", "Social Work"],
        website: "https://www.londonmet.ac.uk",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Greenwich",
        location: "Greenwich",
        ranking: "#92 Complete University Guide 2025",
        description: "Beautiful historic campus with strong engineering and business programs.",
        courses: ["Engineering", "Business", "Architecture", "Computing", "Education"],
        website: "https://www.gre.ac.uk",
        image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  },
  russellgroup: {
    name: "Russell Group",
    totalUniversities: "24",
    universities: [
      {
        name: "University of Cambridge",
        location: "Cambridge, England",
        ranking: "#1 Complete University Guide 2025",
        description: "World's oldest English-speaking university with outstanding research and teaching excellence.",
        courses: ["Mathematics", "Natural Sciences", "Economics", "Engineering", "Medicine"],
        website: "https://www.cam.ac.uk",
        image: "https://images.unsplash.com/photo-1580491934786-c68c68c9b794?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Oxford",
        location: "Oxford, England",
        ranking: "#2 Complete University Guide 2025",
        description: "One of the oldest and most prestigious universities in the English-speaking world.",
        courses: ["Medicine", "Law", "Engineering", "Business", "Computer Science"],
        website: "https://www.ox.ac.uk",
        image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "London School of Economics",
        location: "London",
        ranking: "#3 Complete University Guide 2025",
        description: "World-leading social science institution with exceptional research quality.",
        courses: ["Economics", "Politics", "Sociology", "International Relations", "Management"],
        website: "https://www.lse.ac.uk",
        image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Imperial College London",
        location: "London",
        ranking: "#5 Complete University Guide 2025",
        description: "Leading science, engineering, medicine and business university.",
        courses: ["Engineering", "Medicine", "Business", "Computing", "Natural Sciences"],
        website: "https://www.imperial.ac.uk",
        image: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University College London",
        location: "London",
        ranking: "#7 Complete University Guide 2025",
        description: "Diverse university with strength across multiple disciplines.",
        courses: ["Medicine", "Architecture", "Psychology", "Engineering", "Law"],
        website: "https://www.ucl.ac.uk",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Durham University",
        location: "Durham, England",
        ranking: "#9 Complete University Guide 2025",
        description: "Collegiate university with stunning cathedral city campus.",
        courses: ["Business", "Law", "Engineering", "Natural Sciences", "Humanities"],
        website: "https://www.dur.ac.uk",
        image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "King's College London",
        location: "London",
        ranking: "#10 Complete University Guide 2025",
        description: "Historic institution with strength in health sciences and humanities.",
        courses: ["Medicine", "Law", "International Studies", "Dentistry", "War Studies"],
        website: "https://www.kcl.ac.uk",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Edinburgh",
        location: "Edinburgh, Scotland",
        ranking: "#11 Complete University Guide 2025",
        description: "Scotland's premier university with strong research programs.",
        courses: ["Medicine", "Veterinary Science", "Engineering", "Arts", "Informatics"],
        website: "https://www.ed.ac.uk",
        image: "https://images.unsplash.com/photo-1599927314586-b1e2f3a3dbc1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Bristol",
        location: "Bristol, England",
        ranking: "#16 Complete University Guide 2025",
        description: "Leading research university known for innovation.",
        courses: ["Engineering", "Computer Science", "Medicine", "Law", "Economics"],
        website: "https://www.bristol.ac.uk",
        image: "https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Glasgow",
        location: "Glasgow, Scotland",
        ranking: "#21 Complete University Guide 2025",
        description: "Ancient Scottish university with beautiful Gothic campus.",
        courses: ["Medicine", "Engineering", "Law", "Arts", "Veterinary Medicine"],
        website: "https://www.gla.ac.uk",
        image: "https://images.unsplash.com/photo-1548625149-fc4a29cf7092?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "University of Manchester",
        location: "Manchester, England",
        ranking: "#24 Complete University Guide 2025",
        description: "Large research university with comprehensive programs.",
        courses: ["Engineering", "Computer Science", "Business", "Medicine", "Materials Science"],
        website: "https://www.manchester.ac.uk",
        image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      },
      {
        name: "Queen's University Belfast",
        location: "Belfast, Northern Ireland",
        ranking: "#29 Complete University Guide 2025",
        description: "Russell Group university with strong research tradition.",
        courses: ["Medicine", "Engineering", "Law", "Psychology", "Pharmacy"],
        website: "https://www.qub.ac.uk",
        image: "https://images.unsplash.com/photo-1569447891824-7a1758aa73a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300"
      }
    ]
  }
};

export default function Destinations() {
  const [location] = useLocation();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const region = urlParams.get('region');
    
    if (region && universitiesByRegion[region]) {
      setSelectedRegion(region);
    } else {
      setSelectedRegion(null);
    }
  }, [location]);

  useEffect(() => {
    const handleStorageChange = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const region = urlParams.get('region');
      
      if (region && universitiesByRegion[region]) {
        setSelectedRegion(region);
      } else {
        setSelectedRegion(null);
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

  const showingUniversities = selectedRegion && universitiesByRegion[selectedRegion];

  return (
    <>
      <title>Study in the UK - EduLocate</title>
      <meta name="description" content="Explore top UK universities including Oxford, Cambridge, and Imperial College. Find your perfect university in England, Scotland, Wales, or Northern Ireland." />
      
      <div className="pt-20">
        {showingUniversities && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <Button
                  variant="ghost"
                  onClick={() => setSelectedRegion(null)}
                  className="text-[var(--edu-blue)] hover:text-blue-700"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to All Regions
                </Button>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-[var(--edu-dark)] mb-6">
                Universities in {universitiesByRegion[selectedRegion].name}
              </h1>
              <p className="text-lg sm:text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
                Explore top-ranked universities in {universitiesByRegion[selectedRegion].name} and find your perfect academic match.
              </p>
            </div>
          </div>
        )}
        
        {showingUniversities ? (
          <section className="py-16 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {universitiesByRegion[selectedRegion].universities.map((university, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow" data-testid={`card-university-${index}`}>
                    <div className="relative">
                      <img
                        src={university.image}
                        alt={university.name}
                        className="w-full h-48 object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300";
                        }}
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
              
              {universitiesByRegion[selectedRegion].totalUniversities && (
                <div className="mt-12">
                  <div className="bg-[var(--edu-blue)] text-white rounded-2xl p-6 sm:p-8 text-center">
                    <GraduationCap className="w-12 h-12 mx-auto mb-4 text-amber-300" />
                    <h3 className="text-xl sm:text-2xl font-bold mb-2">
                      {universitiesByRegion[selectedRegion].totalUniversities} Universities in {universitiesByRegion[selectedRegion].name}
                    </h3>
                    <p className="text-blue-100 mb-6">
                      We've shown you some of the top-ranked universities in {universitiesByRegion[selectedRegion].name}. 
                      Many more excellent institutions are available for your studies.
                    </p>
                    <Link href="/booking">
                      <Button size="lg" className="bg-white text-[var(--edu-blue)] hover:bg-blue-50">
                        <Calendar className="w-5 h-5 mr-2" />
                        Book a Free 1-on-1 Consultation
                      </Button>
                    </Link>
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
