import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Award, GraduationCap, Globe, PoundSterling, Calendar, ExternalLink } from "lucide-react";
import ContactSection from "@/components/sections/contact-section";

const scholarshipTypes = [
  {
    title: "University Scholarships",
    description: "Offered directly by UK universities based on academic merit, country of origin, or specific subjects.",
    examples: ["Chancellor's Scholarships", "International Excellence Awards", "Department-specific bursaries"],
    icon: GraduationCap,
  },
  {
    title: "Government Scholarships",
    description: "Funded by the UK government or international governments for outstanding students.",
    examples: ["Chevening Scholarships", "Commonwealth Scholarships", "GREAT Scholarships"],
    icon: Globe,
  },
  {
    title: "External Scholarships",
    description: "Offered by private organizations, charities, and companies.",
    examples: ["Rhodes Scholarship", "Gates Cambridge", "Rotary Foundation"],
    icon: Award,
  },
];

const majorScholarships = [
  {
    name: "Chevening Scholarships",
    funder: "UK Government",
    value: "Full funding (tuition + living expenses)",
    eligibility: "Postgraduate students with leadership potential",
    deadline: "Usually November",
    website: "https://www.chevening.org",
  },
  {
    name: "Commonwealth Scholarships",
    funder: "UK Government",
    value: "Full funding for Master's and PhD",
    eligibility: "Students from Commonwealth countries",
    deadline: "Varies by country",
    website: "https://cscuk.fcdo.gov.uk",
  },
  {
    name: "GREAT Scholarships",
    funder: "British Council + UK Universities",
    value: "£10,000 minimum towards tuition",
    eligibility: "Students from selected countries",
    deadline: "Varies by university",
    website: "https://study-uk.britishcouncil.org/scholarships",
  },
  {
    name: "Gates Cambridge Scholarship",
    funder: "Bill & Melinda Gates Foundation",
    value: "Full funding (tuition + maintenance)",
    eligibility: "Outstanding applicants to Cambridge",
    deadline: "October/December",
    website: "https://www.gatescambridge.org",
  },
  {
    name: "Rhodes Scholarship",
    funder: "Rhodes Trust",
    value: "Full funding for Oxford",
    eligibility: "Students showing leadership and commitment to service",
    deadline: "Varies by country (usually June-October)",
    website: "https://www.rhodeshouse.ox.ac.uk",
  },
];

const applicationTips = [
  "Start searching at least 12 months before your intended start date",
  "Apply to multiple scholarships to increase your chances",
  "Tailor each application to the specific scholarship criteria",
  "Get strong references from academics who know your work well",
  "Highlight leadership experience and community involvement",
  "Proofread applications multiple times before submission",
  "Keep track of all deadlines in a calendar",
  "Prepare for interviews - many major scholarships require them",
];

export default function Scholarships() {
  return (
    <>
      <title>Scholarship Database - EduLocate</title>
      <meta name="description" content="Comprehensive database of scholarships and funding opportunities for international students studying in the UK." />
      
      <div className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/resources">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-[var(--edu-dark)] mb-6">
                Scholarship Database
              </h1>
              <p className="text-xl text-[var(--edu-gray)] mb-8">
                Discover funding opportunities to support your UK education journey. From government-funded programs to university-specific awards.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-green-800 font-medium">
                  💰 Our advisors help you identify and apply for scholarships that match your profile - completely FREE.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">Types of Scholarships</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {scholarshipTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <div key={index} className="bg-slate-50 rounded-xl p-6">
                    <div className="bg-purple-100 text-purple-600 p-3 rounded-lg inline-block mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--edu-dark)] mb-2">{type.title}</h3>
                    <p className="text-[var(--edu-gray)] mb-4">{type.description}</p>
                    <div className="space-y-1">
                      {type.examples.map((example, eIndex) => (
                        <span key={eIndex} className="inline-block bg-white px-3 py-1 rounded-full text-sm text-purple-600 border border-purple-200 mr-2 mb-2">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">Major Scholarship Programs</h2>
            <div className="space-y-6">
              {majorScholarships.map((scholarship, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[var(--edu-dark)] mb-1">{scholarship.name}</h3>
                      <p className="text-[var(--edu-blue)] font-medium">{scholarship.funder}</p>
                    </div>
                    <a 
                      href={scholarship.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[var(--edu-blue)] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Visit Website <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 pt-4 border-t border-slate-100">
                    <div className="flex items-start gap-2">
                      <PoundSterling className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-[var(--edu-gray)]">Value</div>
                        <div className="font-medium text-[var(--edu-dark)]">{scholarship.value}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <GraduationCap className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-[var(--edu-gray)]">Eligibility</div>
                        <div className="font-medium text-[var(--edu-dark)]">{scholarship.eligibility}</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="w-5 h-5 text-amber-500 flex-shrink-0" />
                      <div>
                        <div className="text-sm text-[var(--edu-gray)]">Deadline</div>
                        <div className="font-medium text-[var(--edu-dark)]">{scholarship.deadline}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">Application Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {applicationTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 bg-slate-50 rounded-lg p-4">
                  <Award className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <p className="text-[var(--edu-gray)]">{tip}</p>
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
