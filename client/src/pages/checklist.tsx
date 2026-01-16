import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckSquare, FileText, Plane, Home, CreditCard, Heart, Phone } from "lucide-react";
import ContactSection from "@/components/sections/contact-section";

const checklistSections = [
  {
    title: "Documents & Paperwork",
    icon: FileText,
    color: "bg-blue-100 text-blue-600",
    items: [
      "Valid passport (with at least 6 months validity beyond your course end date)",
      "UK Student Visa (Tier 4/Student Route) - apply at least 3 months before travel",
      "CAS (Confirmation of Acceptance for Studies) from your university",
      "University acceptance letter and enrollment documents",
      "Academic transcripts and certificates (originals and copies)",
      "English language test results (IELTS/TOEFL/PTE)",
      "Financial documents proving you can support yourself",
      "TB test results (if required for your country)",
      "Passport-sized photographs (at least 10 copies)",
      "Travel insurance documents",
    ],
  },
  {
    title: "Financial Preparation",
    icon: CreditCard,
    color: "bg-green-100 text-green-600",
    items: [
      "Open a UK bank account (many banks allow pre-arrival applications)",
      "Notify your home bank of international travel",
      "Get an international debit/credit card",
      "Bring some British pounds for initial expenses (£200-300 cash)",
      "Set up a money transfer service (Wise, Remitly, etc.)",
      "Understand the UK cost of living in your city",
      "Budget for first month expenses before student loan/funding arrives",
    ],
  },
  {
    title: "Accommodation",
    icon: Home,
    color: "bg-amber-100 text-amber-600",
    items: [
      "Confirm university accommodation booking or private rental",
      "Understand your tenancy agreement and deposit requirements",
      "Arrange temporary accommodation if needed for first few days",
      "Research the area - shops, transport, safety",
      "Know the check-in date and process",
      "Arrange bedding/kitchen essentials or know where to buy them",
      "Set up utility accounts if in private accommodation",
    ],
  },
  {
    title: "Travel Arrangements",
    icon: Plane,
    color: "bg-purple-100 text-purple-600",
    items: [
      "Book flights well in advance for better prices",
      "Check baggage allowance (usually 23kg per checked bag)",
      "Arrange airport pickup or know public transport options",
      "Download offline maps of your destination city",
      "Have accommodation address and contact details printed",
      "Pack UK plug adapters (Type G, 3-pin)",
      "Prepare for jet lag - arrive a few days early if possible",
    ],
  },
  {
    title: "Health & Wellbeing",
    icon: Heart,
    color: "bg-red-100 text-red-600",
    items: [
      "Pay Immigration Health Surcharge (IHS) as part of visa application",
      "Get any required vaccinations before travel",
      "Bring prescription medications with doctor's letter (3-month supply)",
      "Get copies of your medical records and prescriptions",
      "Register with a local GP (doctor) after arrival",
      "Know the NHS emergency number (999) and non-emergency (111)",
      "Pack a basic first aid kit",
    ],
  },
  {
    title: "Communication & Connectivity",
    icon: Phone,
    color: "bg-teal-100 text-teal-600",
    items: [
      "Unlock your phone for UK SIM cards",
      "Research UK mobile providers (Giffgaff, Voxi, Three are popular)",
      "Download communication apps (WhatsApp, Skype for family)",
      "Save emergency contact numbers from your university",
      "Join university social media groups to connect with other students",
      "Download useful UK apps (Trainline, CityMapper, banking apps)",
    ],
  },
];

const packingEssentials = [
  { category: "Clothing", items: "Warm layers, waterproof jacket, comfortable walking shoes, formal outfit for events" },
  { category: "Electronics", items: "Laptop, phone, chargers, UK adapters, portable power bank" },
  { category: "Study Materials", items: "Notebooks, stationery, any required textbooks" },
  { category: "Personal Items", items: "Toiletries (travel size for flight), glasses/contacts, comfort items from home" },
  { category: "Important Documents", items: "All documents in a carry-on bag, not checked luggage" },
];

export default function Checklist() {
  return (
    <>
      <title>Pre-Departure Checklist - EduLocate</title>
      <meta name="description" content="Complete checklist of everything you need to do before departing for your UK university studies." />
      
      <div className="pt-20">
        <section className="py-16 lg:py-24 bg-gradient-to-br from-teal-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/resources">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Resources
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <h1 className="text-4xl lg:text-5xl font-bold text-[var(--edu-dark)] mb-6">
                Pre-Departure Checklist
              </h1>
              <p className="text-xl text-[var(--edu-gray)] mb-8">
                Everything you need to prepare before leaving for your UK university. Use this comprehensive checklist to ensure you don't miss anything important.
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                <p className="text-green-800 font-medium">
                  ✈️ Need help with pre-departure preparation? Our advisors provide FREE guidance on visa applications, accommodation, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {checklistSections.map((section, sIndex) => {
                const IconComponent = section.icon;
                return (
                  <div key={sIndex} className="bg-slate-50 rounded-2xl p-6 lg:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`${section.color} p-3 rounded-lg`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <h2 className="text-2xl font-bold text-[var(--edu-dark)]">{section.title}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {section.items.map((item, iIndex) => (
                        <div key={iIndex} className="flex items-start gap-3 bg-white rounded-lg p-3">
                          <CheckSquare className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-[var(--edu-gray)]">{item}</span>
                        </div>
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
            <h2 className="text-3xl font-bold text-[var(--edu-dark)] mb-8">Packing Essentials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packingEssentials.map((pack, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-semibold text-[var(--edu-dark)] mb-2">{pack.category}</h3>
                  <p className="text-[var(--edu-gray)] text-sm">{pack.items}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[var(--edu-blue)] rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">First Week in the UK Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Day 1-2</h3>
                  <p className="text-blue-100 text-sm">Settle into accommodation, buy essentials, get a UK SIM card, explore the local area</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Day 3-4</h3>
                  <p className="text-blue-100 text-sm">Complete university registration, collect student ID, attend orientation events</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">Day 5-7</h3>
                  <p className="text-blue-100 text-sm">Open bank account, register with GP, join societies, meet coursemates</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </div>
    </>
  );
}
