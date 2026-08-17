import type { Metadata } from "next";
import { ContactClient } from "./contact-client";
import { getContactPage, getSiteSettings } from "@/lib/cms/content";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const [contact, settings] = await Promise.all([getContactPage(), getSiteSettings()]);
  return {
    title: contact.seoTitle || contact.eyebrow,
    description:
      contact.seoDescription ||
      `${contact.title}. Contact ${settings.name} at ${settings.email} or ${settings.phone}. ${settings.address}`,
  };
}

export default async function ContactPage() {
  const contact = await getContactPage();
  return <ContactClient page={contact} />;
}
