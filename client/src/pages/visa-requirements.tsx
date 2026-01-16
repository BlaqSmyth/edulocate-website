import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText, Clock, PoundSterling, CheckCircle, AlertCircle, Calendar, Globe } from "lucide-react";
import ContactSection from "@/components/sections/contact-section";

const visaTypes = [
  {
    name: "Student Visa (formerly Tier 4)",
    duration: "Length of course + additional months",
    cost: "£490 from outside UK",
    description: "The main visa for international students studying courses longer than 6 months in the UK.",
    requirements: [
      "Confirmation of Acceptance for Studies (CAS) from a licensed sponsor",
      "Proof of English language ability (IELTS, TOEFL, etc.)",
      "Proof of financial support (tuition + living costs)",
      "Valid passport or travel document",
      "TB test results (if from listed countries)",
    ],
  },
  {
    name: "Short-term Study Visa",
    duration: "Up to 6 or 11 months",
    cost: "£200 (6 months) / £400 (11 months)",
    description: "For short courses, English language courses, or research projects under 6 months.",
    requirements: [
      "Acceptance letter from accredited institution",
      "Proof of sufficient funds",
      "Evidence of accommodation arrangements",
      "Return travel plans",
      "No intention to work or extend stay",
    ],
  },
  {
    name: "Child Student Visa",
    duration: "Length of course",
    cost: "£490 from outside UK",
    description: "For students aged 4-17 studying at independent schools in the UK.",
    requirements: [
      "CAS from licensed child student sponsor",
      "Parental consent",
      "Proof of adequate care arrangements",
      "Proof of financial support",
      "Valid passport",
    ],
  },
];

const applicationSteps = [
  {
    step: 1,
    title: "Receive Your CAS",
    description: "Your university will send you a Confirmation of Acceptance for Studies (CAS) after you accept your offer and pay any required deposit.",
    timeframe: "After accepting offer",
  },
  {
    step: 2,
    title: "Gather Documents",
    description: "Collect all required documents including passport, financial evidence, English test results, and TB test certificate if required.",
    timeframe: "1-2 weeks",
  },
  {
    step: 3,
    title: "Complete Online Application",
    description: "Fill out the visa application form on the UK government website. Pay the visa fee and Immigration Health Surcharge (IHS).",
    timeframe: "1-2 hours",
  },
  {
    step: 4,
    title: "Book Biometrics Appointment",
    description: "Visit a visa application centre to provide your fingerprints and photograph. Bring all original documents.",
    timeframe: "1 day",
  },
  {
    step: 5,
    title: "Wait for Decision",
    description: "Standard processing takes 3 weeks. Priority service (5 working days) available in some countries for additional fee.",
    timeframe: "3-8 weeks",
  },
  {
    step: 6,
    title: "Collect Visa & Travel",
    description: "Collect your passport with visa vignette. You can enter the UK up to 1 month before your course starts.",
    timeframe: "Before course start",
  },
];

const financialRequirements = [
  {
    location: "London",
    monthly: "£1,334/month",
    nineMonths: "£12,006",
    description: "Required for courses in inner London boroughs",
  },
  {
    location: "Outside London",
    monthly: "£1,023/month",
    nineMonths: "£9,207",
    description: "Required for courses outside inner London",
  },
];

const commonMistakes = [
  "Applying too late - apply at least 6 weeks before travel",
  "Insufficient funds shown for required period (usually 28 days)",
  "Documents not translated into English by certified translator",
  "CAS details not matching passport exactly",
  "Not paying the Immigration Health Surcharge",
  "Using bank statements older than 31 days",
  "Not providing evidence of English if required",
];

const ihsInfo = {
  rate: "£776 per year (as of 2024)",
  description: "The Immigration Health Surcharge gives you access to the NHS during your stay. It must be paid upfront as part of your visa application.",
  coverage: "Covers GP visits, hospital treatment, and most NHS services",
};

export default function VisaRequirements() {
  return (
    <>
      <title>UK Student Visa Requirements - EduLocate</title>
      <meta name="description" content="Complete guide to UK student visa requirements, application process, costs, and documentation for international students." />
      
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
                UK Student Visa Requirements
              </h1>
              <p className="text-xl text-[var(--edu-gray)] mb-8">
                Everything you need to know about applying for a UK student visa, including required documents, costs, and step-by-step application guidance.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-green-800 font-medium">
                  🛂 We provide FREE visa application guidance as part of our admission support. Our team will help you navigate the entire process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">Types of UK Student Visas</h2>
            <div className="space-y-6">
              {visaTypes.map((visa, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--edu-dark)]">{visa.name}</h3>
                      <p className="text-[var(--edu-gray)] mt-2">{visa.description}</p>
                    </div>
                    <div className="flex gap-4 flex-wrap">
                      <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-blue-500" />
                        <span className="text-[var(--edu-dark)] font-medium">{visa.duration}</span>
                      </div>
                      <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2">
                        <PoundSterling className="w-5 h-5 text-green-500" />
                        <span className="text-[var(--edu-dark)] font-medium">{visa.cost}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--edu-dark)] mb-3">Key Requirements:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {visa.requirements.map((req, rIndex) => (
                        <div key={rIndex} className="flex items-start gap-2 bg-white rounded-lg p-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-[var(--edu-gray)]">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">Application Process</h2>
            <div className="relative">
              <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
              <div className="space-y-6">
                {applicationSteps.map((step, index) => (
                  <div key={index} className="relative flex gap-6">
                    <div className="hidden lg:flex flex-shrink-0 w-16 h-16 bg-[var(--edu-blue)] text-white rounded-full items-center justify-center text-xl font-bold z-10">
                      {step.step}
                    </div>
                    <div className="flex-1 bg-white rounded-xl p-6 shadow-lg">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="lg:hidden bg-[var(--edu-blue)] text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                          {step.step}
                        </span>
                        <h3 className="text-xl font-semibold text-[var(--edu-dark)]">{step.title}</h3>
                      </div>
                      <p className="text-[var(--edu-gray)] mb-3">{step.description}</p>
                      <div className="flex items-center gap-2 text-[var(--edu-blue)]">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{step.timeframe}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">Financial Requirements</h2>
            <p className="text-[var(--edu-gray)] mb-6">
              You must show you have enough money to cover your tuition fees plus living costs for up to 9 months. The funds must have been held for at least 28 consecutive days.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {financialRequirements.map((req, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-[var(--edu-blue)]" />
                    <h3 className="text-xl font-semibold text-[var(--edu-dark)]">{req.location}</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-[var(--edu-gray)]">Monthly Requirement</div>
                      <div className="text-2xl font-bold text-[var(--edu-blue)]">{req.monthly}</div>
                    </div>
                    <div>
                      <div className="text-sm text-[var(--edu-gray)]">9 Months Total</div>
                      <div className="text-2xl font-bold text-[var(--edu-green)]">{req.nineMonths}</div>
                    </div>
                  </div>
                  <p className="text-[var(--edu-gray)] text-sm mt-3">{req.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 text-blue-600 p-3 rounded-lg">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[var(--edu-dark)] mb-2">Immigration Health Surcharge (IHS)</h3>
                  <p className="text-[var(--edu-gray)] mb-2">{ihsInfo.description}</p>
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="bg-white px-3 py-1 rounded-full text-[var(--edu-blue)] font-semibold">{ihsInfo.rate}</span>
                    <span className="text-[var(--edu-gray)] text-sm">{ihsInfo.coverage}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">Common Mistakes to Avoid</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {commonMistakes.map((mistake, index) => (
                <div key={index} className="flex items-start gap-3 bg-white rounded-lg p-4 shadow">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-[var(--edu-gray)]">{mistake}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[var(--edu-blue)] rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Need Help With Your Visa Application?</h2>
              <p className="text-xl text-blue-100 mb-6 max-w-2xl mx-auto">
                Our experienced team provides FREE guidance throughout the entire visa application process. We'll help you prepare documents, avoid common mistakes, and submit a strong application.
              </p>
              <Link href="/booking">
                <Button size="lg" className="bg-white text-[var(--edu-blue)] hover:bg-blue-50">
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}
