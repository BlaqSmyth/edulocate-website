import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, BookOpen, Clock, Target, TrendingUp, CheckCircle } from "lucide-react";
import ContactSection from "@/components/sections/contact-section";

const tests = [
  {
    name: "IELTS Academic",
    fullName: "International English Language Testing System",
    description: "The most widely accepted English proficiency test for UK university admissions.",
    sections: ["Listening (30 min)", "Reading (60 min)", "Writing (60 min)", "Speaking (11-14 min)"],
    scoring: "Band scores from 1-9. Most UK universities require 6.0-7.0 overall.",
    tips: [
      "Practice with official Cambridge IELTS materials",
      "Focus on time management - strict limits apply",
      "Familiarize yourself with different accents for listening",
      "Practice writing Task 2 essays in 40 minutes",
    ],
    resources: [
      { name: "IELTS Official Practice", url: "https://www.ielts.org/for-test-takers/how-to-prepare" },
      { name: "British Council Free Course", url: "https://www.futurelearn.com/courses/understanding-ielts" },
    ],
  },
  {
    name: "TOEFL iBT",
    fullName: "Test of English as a Foreign Language",
    description: "American-style English test accepted by many UK universities.",
    sections: ["Reading (54-72 min)", "Listening (41-57 min)", "Speaking (17 min)", "Writing (50 min)"],
    scoring: "Total score out of 120. Most UK universities require 80-100+.",
    tips: [
      "Get comfortable with computer-based testing format",
      "Practice integrated tasks (reading + listening + speaking/writing)",
      "Use official ETS preparation materials",
      "Take full-length practice tests under timed conditions",
    ],
    resources: [
      { name: "ETS TOEFL Practice", url: "https://www.ets.org/toefl/test-takers/ibt/prepare" },
    ],
  },
  {
    name: "PTE Academic",
    fullName: "Pearson Test of English Academic",
    description: "Computer-based test with fast results (typically 48 hours).",
    sections: ["Speaking & Writing (77-93 min)", "Reading (32-41 min)", "Listening (45-57 min)"],
    scoring: "Score range 10-90. Most UK universities require 50-65+.",
    tips: [
      "Practice speaking clearly into a microphone",
      "Master the unique question types (Read Aloud, Re-tell Lecture)",
      "Use the official PTE practice tests",
      "Focus on pronunciation and oral fluency",
    ],
    resources: [
      { name: "PTE Academic Preparation", url: "https://www.pearsonpte.com/preparation" },
    ],
  },
];

const studySchedule = [
  { week: "Weeks 1-2", focus: "Diagnostic test and identify weaknesses", hours: "10-15 hrs/week" },
  { week: "Weeks 3-4", focus: "Focus on weakest sections with targeted practice", hours: "15-20 hrs/week" },
  { week: "Weeks 5-6", focus: "Full-length practice tests and review", hours: "15-20 hrs/week" },
  { week: "Weeks 7-8", focus: "Final practice tests and confidence building", hours: "10-15 hrs/week" },
];

const generalTips = [
  { icon: Clock, title: "Start Early", description: "Begin preparation at least 2-3 months before your test date" },
  { icon: Target, title: "Know Your Target", description: "Check your university's specific score requirements before starting" },
  { icon: BookOpen, title: "Use Official Materials", description: "Official practice tests most accurately reflect the real exam" },
  { icon: TrendingUp, title: "Track Progress", description: "Take practice tests regularly to measure improvement" },
];

export default function TestPrep() {
  return (
    <>
      <title>Test Prep Resources - EduLocate</title>
      <meta name="description" content="IELTS, TOEFL, PTE preparation materials, tips, and practice resources to boost your scores for UK university admission." />
      
      <div className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/resources">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-[var(--edu-dark)] mb-6">
                Test Prep Resources
              </h1>
              <p className="text-xl text-[var(--edu-gray)] mb-8">
                Comprehensive preparation materials and strategies for IELTS, TOEFL, PTE and other English proficiency tests required for UK university admission.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-green-800 font-medium">
                  📚 Need help choosing the right test? Our advisors can recommend the best option based on your target universities.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">General Preparation Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {generalTips.map((tip, index) => {
                const IconComponent = tip.icon;
                return (
                  <div key={index} className="bg-slate-50 rounded-xl p-6 text-center">
                    <div className="bg-amber-100 text-amber-600 p-3 rounded-full inline-block mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-[var(--edu-dark)] mb-2">{tip.title}</h3>
                    <p className="text-[var(--edu-gray)] text-sm">{tip.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">Test Overviews</h2>
            <div className="space-y-8">
              {tests.map((test, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="bg-[var(--edu-blue)] text-white p-6">
                    <h3 className="text-2xl font-bold">{test.name}</h3>
                    <p className="text-blue-100">{test.fullName}</p>
                  </div>
                  <div className="p-6">
                    <p className="text-[var(--edu-gray)] mb-6">{test.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-[var(--edu-dark)] mb-3">Test Sections</h4>
                        <ul className="space-y-2">
                          {test.sections.map((section, sIndex) => (
                            <li key={sIndex} className="flex items-center gap-2 text-[var(--edu-gray)]">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              {section}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--edu-dark)] mb-3">Scoring</h4>
                        <p className="text-[var(--edu-gray)]">{test.scoring}</p>
                      </div>
                    </div>

                    <div className="bg-slate-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[var(--edu-dark)] mb-3">Top Tips</h4>
                      <ul className="space-y-2">
                        {test.tips.map((tip, tIndex) => (
                          <li key={tIndex} className="flex items-start gap-2 text-[var(--edu-gray)]">
                            <Target className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">8-Week Study Schedule</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {studySchedule.map((week, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6">
                  <div className="text-[var(--edu-blue)] font-bold mb-2">{week.week}</div>
                  <p className="text-[var(--edu-dark)] font-medium mb-2">{week.focus}</p>
                  <p className="text-[var(--edu-gray)] text-sm">{week.hours}</p>
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
