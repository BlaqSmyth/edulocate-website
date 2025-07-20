import { contactInquiries, type ContactInquiry, type InsertContactInquiry } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

export interface IStorage {
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
}

export class DatabaseStorage implements IStorage {
  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const [inquiry] = await db
      .insert(contactInquiries)
      .values({
        name: insertInquiry.name,
        email: insertInquiry.email,
        phone: insertInquiry.phone || "",
        country: insertInquiry.country || "",
        message: insertInquiry.message || "",
      })
      .returning();
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    const inquiries = await db
      .select()
      .from(contactInquiries)
      .orderBy(desc(contactInquiries.createdAt));
    return inquiries;
  }
}

export const storage = new DatabaseStorage();
