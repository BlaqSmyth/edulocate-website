import { z } from "zod";

// Contact form schema for Formspree integration
export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  country: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
