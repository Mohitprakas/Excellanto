import type { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get AI automation solutions for your business. Contact Excellanto at support@excellanto.com or +91 96677 97078. 191-192 Neelkanth Plaza, East of Kailash, New Delhi.",
};

export default function ContactPage() {
  return <ContactClient />;
}
