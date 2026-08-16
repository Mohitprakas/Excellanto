import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Industries",
};

/** Industries content lives on service pages (e.g. Mobile App Development). */
export default function IndustriesPage() {
  redirect("/services/mobile-app-development");
}
