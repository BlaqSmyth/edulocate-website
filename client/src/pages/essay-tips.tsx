import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, XCircle, Lightbulb, FileText, Target, Sparkles } from "lucide-react";
import ContactSection from "@/components/sections/contact-section";

const essayStructure = [
  {
    section: "Opening Hook",
    description: "Start with a compelling story, experience, or insight that captures attention and reveals something unique about you.",
    tips: ["Avoid clichés like 'I've always wanted to...'", "Be specific and personal", "Create intrigue"],
  },
  {
    section: "Academic Journey",
    description: "Explain your academic interests, what sparked them, and how they've developed over time.",
    tips: ["Show genuine passion", "Connect experiences to your subject choice", "Mention relevant reading or research"],
  },
  {
    section: "Extracurricular Activities",
    description: "Highlight experiences that demonstrate relevant skills, leadership, or commitment.",
    tips: ["Quality over quantity", "Explain what you learned", "Link activities to your course"],
  },
  {
    section: "Future Goals",
    description: "Connect your studies to your career aspirations and explain why this university is the right fit.",
    tips: ["Be realistic but ambitious", "Show you've researched the course", "Demonstrate long-term thinking"],
  },
];

const dosList = [
  "Start early - give yourself at least 2 months for drafts and revisions",
  "Be authentic - admissions tutors can spot generic statements",
  "Show, don't tell - use specific examples rather than vague claims",
  "Research thoroughly - mention specific modules or features that attract you",
  "Get feedback - have teachers, mentors, or our advisors review your draft",
  "Proofread multiple times - spelling and grammar errors create poor impressions",
];

const dontsList = [
  "Don't use quotes unless you genuinely engage with them",
  "Don't list achievements without reflection",
  "Don't write what you think they want to hear",
  "Don't plagiarize or use AI to write your statement",
  "Don't exceed the word/character limit",
  "Don't mention universities by name in UCAS personal statements",
];

const sampleOpeners = [
  {
    weak: "I have always been passionate about medicine and helping people.",
    strong: "Watching my grandmother's dignified battle with Parkinson's disease transformed my childhood curiosity about the brain into a determined pursuit of neurology.",
  },
  {
    weak: "Business is an interesting subject that I want to study.",
    strong: "At 16, I turned a £50 investment into a £2,000 resale business - but the spreadsheet errors that cost me £300 taught me more about financial management than any textbook.",
  },
];

export default function EssayTips() {
  return (
    <>
      <title>Essay Writing Tips - EduLocate</title>
      <meta name="description" content="Expert tips and templates for writing compelling personal statements and application essays for UK universities." />
      
      <div className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-to-br from-green-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/resources">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-[var(--edu-dark)] mb-6">
                Essay Writing Tips
              </h1>
              <p className="text-xl text-[var(--edu-gray)] mb-8">
                Master the art of writing compelling personal statements and application essays that make you stand out to UK university admissions teams.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-green-800 font-medium">
                  ✍️ Want expert feedback on your personal statement? Our advisors review essays for FREE as part of our admission support.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">Personal Statement Structure</h2>
            <div className="space-y-6">
              {essayStructure.map((item, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 text-green-600 p-3 rounded-lg">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-[var(--edu-dark)] mb-2">{item.section}</h3>
                      <p className="text-[var(--edu-gray)] mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tips.map((tip, tipIndex) => (
                          <span key={tipIndex} className="bg-white px-3 py-1 rounded-full text-sm text-[var(--edu-blue)] border border-blue-200">
                            {tip}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">Do's and Don'ts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-green-600 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" /> Do's
                </h3>
                <ul className="space-y-3">
                  {dosList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-[var(--edu-gray)]">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-red-600 mb-4 flex items-center gap-2">
                  <XCircle className="w-6 h-6" /> Don'ts
                </h3>
                <ul className="space-y-3">
                  {dontsList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-[var(--edu-gray)]">
                      <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">Weak vs Strong Openings</h2>
            <div className="space-y-6">
              {sampleOpeners.map((sample, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                      <h4 className="text-red-600 font-semibold mb-2 flex items-center gap-2">
                        <XCircle className="w-5 h-5" /> Weak Opening
                      </h4>
                      <p className="text-[var(--edu-gray)] italic">"{sample.weak}"</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                      <h4 className="text-green-600 font-semibold mb-2 flex items-center gap-2">
                        <Sparkles className="w-5 h-5" /> Strong Opening
                      </h4>
                      <p className="text-[var(--edu-gray)] italic">"{sample.strong}"</p>
                    </div>
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
