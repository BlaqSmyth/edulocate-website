import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    university: "Oxford University, UK",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    testimonial: "EduGlobal made my dream of studying at Oxford a reality. Their guidance throughout the application process was invaluable, and I couldn't have done it without their support.",
  },
  {
    name: "Ahmed Hassan",
    university: "MIT, USA",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    testimonial: "The team helped me secure a full scholarship to MIT. Their expertise in essay writing and interview preparation was outstanding. Highly recommended!",
  },
  {
    name: "Li Wei",
    university: "University of Toronto, Canada",
    image: "https://pixabay.com/get/gbf820aa1e70792470522e3a2f5ad7ed91f4c827ba443dc76680b76bd931167be056f93a236753f76f3f58c969fdc4d801bc57c1cd2bc8918b371aac9a4e11a00_1280.jpg",
    testimonial: "From university selection to visa approval, EduGlobal handled everything professionally. I'm now pursuing my Masters in Computer Science at UofT thanks to their guidance.",
  },
  {
    name: "Carlos Rodriguez",
    university: "University of Sydney, Australia",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100",
    testimonial: "The support didn't end with admission. They helped me find accommodation and even provided pre-departure orientation. Truly comprehensive service!",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          {/* Success Stats Display */}
          <div className="bg-[var(--edu-blue)] p-8 rounded-2xl shadow-lg text-white md:col-span-2 lg:col-span-1">
            <h4 className="text-2xl font-bold mb-6">Our Track Record</h4>
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
      </div>
    </section>
  );
}
