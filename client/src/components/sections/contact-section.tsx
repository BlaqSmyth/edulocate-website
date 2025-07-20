import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import type { InsertContactInquiry } from "@shared/schema";

const contactInfo = [
  {
    icon: MapPin,
    title: "Main Office",
    details: "123 Education Street\nGlobal City, GC 12345",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@eduglobal.com",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: "Mon-Fri: 9AM-6PM\nSat: 10AM-4PM",
  },
];

const quickStats = [
  { label: "Response Time", value: "< 24 Hours" },
  { label: "Consultation", value: "Free", highlight: true },
  { label: "Success Rate", value: "95%" },
  { label: "Experience", value: "12+ Years" },
];

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    contactMutation.mutate(data);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--edu-dark)] mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-[var(--edu-gray)] max-w-3xl mx-auto">
            Get in touch with our expert counselors for a free consultation and take the first step towards your international education dreams.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-8">
            <div className="bg-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-[var(--edu-dark)] mb-6">Get Free Consultation</h3>
              
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
                            <Input type="tel" placeholder="Enter your phone number" {...field} />
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
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
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
                            {...field}
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
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
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
