import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import type { ContactFormData } from "@shared/schema";

const contactInfo = [
  {
    icon: MapPin,
    title: "Main Office",
    details: "411 Ilford Lane, Ilford\nEngland, IG1 2SN",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "07438974271",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@edulocate.org",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: "Mon-Fri: 9AM-6PM\nSat: 10AM-4PM",
  },
];

const quickStats = [
  { label: "Admission Processing", value: "100% FREE", highlight: true },
  { label: "Consultation", value: "FREE", highlight: true },
  { label: "Success Rate", value: "95%" },
  { label: "Hidden Fees", value: "ZERO", highlight: true },
];

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Using FormSubmit.co - works with any domain including Replit
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone || "Not provided");
      formData.append("destination", data.country || "Not specified");
      formData.append("message", data.message || "No message provided");
      formData.append("_subject", "New Consultation Request - EduLocate");
      formData.append("_captcha", "false");
      formData.append("_template", "table");
      
      const response = await fetch("https://formsubmit.co/ajax/info@edulocate.org", {
        method: "POST",
        body: formData
      });
      
      const result = await response.json();
      console.log("FormSubmit response:", result);
      
      if (result.success === "true" || result.success === true) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your inquiry. Our team will contact you within 24 hours.",
        });
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
      
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Please contact us directly",
        description: "Email: info@edulocate.org | Phone: 07438974271 for immediate assistance.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 sm:px-8 py-3 sm:py-4 rounded-xl mb-8 inline-block">
            <div className="text-lg sm:text-2xl font-bold">🎓 FREE CONSULTATION & ADMISSION PROCESSING</div>
            <div className="text-xs sm:text-sm mt-1">Zero Cost • Expert Guidance • Guaranteed Results</div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--edu-dark)] mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-lg sm:text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
            Get in touch with our expert counselors for a <strong className="text-[var(--edu-green)]">completely FREE consultation and admission processing</strong>. Take the first step towards your international education dreams at absolutely no cost.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[var(--edu-dark)] mb-6">Get FREE Consultation & Admission Processing</h3>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                <p className="text-green-800 font-medium">🎓 100% FREE admission processing - No application fees, no hidden charges!</p>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="Enter your phone number" value={field.value || ""} onChange={field.onChange} onBlur={field.onBlur} name={field.name} ref={field.ref} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Preferred Destination</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value || ""}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select destination" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="uk">United Kingdom</SelectItem>
                              <SelectItem value="usa">United States</SelectItem>
                              <SelectItem value="canada">Canada</SelectItem>
                              <SelectItem value="australia">Australia</SelectItem>
                              <SelectItem value="newzealand">New Zealand</SelectItem>
                              <SelectItem value="germany">Germany</SelectItem>
                              <SelectItem value="netherlands">Netherlands</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your educational goals and any specific questions you have..."
                            className="min-h-[120px]"
                            value={field.value || ""}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            name={field.name}
                            ref={field.ref}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[var(--edu-blue)] text-white hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 lg:mt-0 lg:col-span-4">
            <div className="space-y-8">
              {/* Office Info */}
              <div className="bg-[var(--edu-blue)] rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <IconComponent className="w-6 h-6 mt-1 mr-4 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">{info.title}</h4>
                          <p className="text-blue-100 whitespace-pre-line">{info.details}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-[var(--edu-dark)] mb-6">Why Choose Us?</h4>
                <div className="space-y-4">
                  {quickStats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-[var(--edu-gray)]">{stat.label}</span>
                      <span className={`font-semibold ${stat.highlight ? 'text-[var(--edu-green)]' : 'text-[var(--edu-dark)]'}`}>
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
