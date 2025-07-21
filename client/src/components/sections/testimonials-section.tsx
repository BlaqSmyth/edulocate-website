import { Star } from "lucide-react";
import chidiImage from "@assets/portrait-male-student-with-books_23-2148882426_1753087595010.avif";
import zaraImage from "@assets/istockphoto-1791833349-612x612_1753087696889.jpg";
import amaraImage from "@assets/smile-student-portrait-black-woman-with-face-mask-holding-file-university-covid-happy-excited-young-african-student-with-education-books-college-campus-pandemic_590464-88226_1753088039653.avif";

const testimonials = [
  {
    name: "Amara Okafor",
    university: "Harvard University, USA",
    image: amaraImage,
    testimonial: "From Lagos to Harvard! EduGlobal helped me secure a full scholarship for my MBA. Their essay guidance and interview prep were exceptional. I'm now living my American dream!",
  },
  {
    name: "Kwame Asante",
    university: "Cambridge University, UK",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    testimonial: "As a Ghanaian student, I thought Cambridge was impossible. EduGlobal showed me it wasn't! Their support from application to arrival in the UK was incredible.",
  },
  {
    name: "Fatima Kone",
    university: "University of Toronto, Canada",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    testimonial: "From Ivory Coast to Canada - EduGlobal made it happen! They helped with everything from university selection to visa processing. Now I'm studying Engineering at UofT.",
  },
  {
    name: "Chidi Okonkwo",
    university: "University of Melbourne, Australia",
    image: chidiImage,
    testimonial: "The journey from Nigeria to Australia seemed overwhelming until I found EduGlobal. They guided me every step of the way. Now I'm pursuing my PhD in Melbourne!",
  },
  {
    name: "Zara Mthembu",
    university: "Oxford University, UK",
    image: zaraImage,
    testimonial: "From South Africa to Oxford - what a journey! EduGlobal's expertise in Rhodes Scholarship applications was invaluable. I'm now studying International Relations at Oxford.",
  },
  {
    name: "Kofi Mensah",
    university: "Stanford University, USA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100",
    testimonial: "EduGlobal transformed my dreams into reality. From Ghana to Silicon Valley - I'm now at Stanford studying Computer Science. Their network and guidance are unmatched!",
  },
];

const stats = [
  { label: "Students Placed", value: "2500+" },
  { label: "Success Rate", value: "95%" },
  { label: "Countries", value: "15+" },
  { label: "Partner Universities", value: "500+" },
  { label: "Years Experience", value: "12+" },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--edu-dark)] mb-6">
            Success Stories from Our Students
          </h2>
          <p className="text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
            Hear from students who achieved their dreams with our guidance and support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-[var(--edu-dark)]">{testimonial.name}</h4>
                  <p className="text-[var(--edu-gray)] text-sm">{testimonial.university}</p>
                </div>
              </div>
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-[var(--edu-gray)] italic">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>

        {/* Success Stats Display */}
        <div className="bg-[var(--edu-blue)] p-8 rounded-2xl shadow-lg text-white max-w-md mx-auto">
          <h4 className="text-2xl font-bold mb-6 text-center">Our Track Record</h4>
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-blue-100">{stat.label}</span>
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
