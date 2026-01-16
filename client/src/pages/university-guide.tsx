import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, BookOpen, GraduationCap, PoundSterling, MapPin } from "lucide-react";
import ContactSection from "@/components/sections/contact-section";

const selectionCriteria = [
  {
    title: "Academic Reputation",
    description: "Check university rankings (QS, Times Higher Education), research output, and department-specific strengths.",
    icon: GraduationCap,
  },
  {
    title: "Course Content",
    description: "Review module options, teaching methods, industry placements, and accreditation by professional bodies.",
    icon: BookOpen,
  },
  {
    title: "Location & Lifestyle",
    description: "Consider city vs campus life, cost of living, transport links, and proximity to industry hubs.",
    icon: MapPin,
  },
  {
    title: "Financial Considerations",
    description: "Compare tuition fees, available scholarships, part-time work opportunities, and living expenses.",
    icon: PoundSterling,
  },
];

const topUKUniversities = [
  { name: "University of Oxford", rank: 1, strengths: "Humanities, Medicine, Law" },
  { name: "University of Cambridge", rank: 2, strengths: "Sciences, Engineering, Mathematics" },
  { name: "Imperial College London", rank: 3, strengths: "Engineering, Medicine, Business" },
  { name: "UCL (University College London)", rank: 4, strengths: "Architecture, Medicine, Law" },
  { name: "London School of Economics", rank: 5, strengths: "Economics, Politics, Social Sciences" },
  { name: "University of Edinburgh", rank: 6, strengths: "Medicine, Arts, Informatics" },
  { name: "King's College London", rank: 7, strengths: "Law, Medicine, Humanities" },
  { name: "University of Manchester", rank: 8, strengths: "Engineering, Business, Sciences" },
  { name: "University of Bristol", rank: 9, strengths: "Engineering, Sciences, Veterinary" },
  { name: "University of Warwick", rank: 10, strengths: "Business, Economics, Mathematics" },
];

const applicationTimeline = [
  { month: "September - October", task: "Research universities and courses, attend virtual open days" },
  { month: "October - November", task: "Prepare personal statement and gather references" },
  { month: "November - January", task: "Submit UCAS application (January 15 deadline for most courses)" },
  { month: "January - March", task: "Prepare for interviews if required" },
  { month: "March - May", task: "Receive offers and make decisions" },
  { month: "June - August", task: "Meet conditions, apply for visa, arrange accommodation" },
];

export default function UniversityGuide() {
  return (
    <>
      <title>University Selection Guide - EduLocate</title>
      <meta name="description" content="Comprehensive guide to choosing the right UK university based on your academic goals, budget, and career aspirations." />
      
      <div className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/resources">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-[var(--edu-dark)] mb-6">
                University Selection Guide
              </h1>
              <p className="text-xl text-[var(--edu-gray)] mb-8">
                A comprehensive guide to help you choose the perfect UK university based on your academic goals, career aspirations, and personal preferences.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-green-800 font-medium">
                  🎓 Need personalized guidance? Our advisors provide FREE consultation to help you find your ideal university match.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">Key Selection Criteria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectionCriteria.map((criteria, index) => {
                const IconComponent = criteria.icon;
                return (
                  <div key={index} className="bg-slate-50 rounded-xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-blue-100 text-[var(--edu-blue)] p-3 rounded-lg">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-[var(--edu-dark)] mb-2">{criteria.title}</h3>
                        <p className="text-[var(--edu-gray)]">{criteria.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">Top 10 UK Universities (2025 Rankings)</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-[var(--edu-blue)] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Rank</th>
                    <th className="px-6 py-4 text-left">University</th>
                    <th className="px-6 py-4 text-left hidden md:table-cell">Key Strengths</th>
                  </tr>
                </thead>
                <tbody>
                  {topUKUniversities.map((uni) => (
                    <tr key={uni.rank} className="border-b border-slate-100 hover:bg-slate-50">
                      <td className="px-6 py-4 font-semibold text-[var(--edu-blue)]">#{uni.rank}</td>
                      <td className="px-6 py-4 font-medium text-[var(--edu-dark)]">{uni.name}</td>
                      <td className="px-6 py-4 text-[var(--edu-gray)] hidden md:table-cell">{uni.strengths}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">Application Timeline</h2>
            <div className="space-y-4">
              {applicationTimeline.map((item, index) => (
                <div key={index} className="flex items-start gap-4 bg-slate-50 rounded-xl p-6">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-[var(--edu-dark)]">{item.month}</h3>
                    <p className="text-[var(--edu-gray)]">{item.task}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}
