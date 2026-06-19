import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { ContactSection } from "@/components/sections/contact-section";
import { JsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/metadata";
import { contactPageSchemas } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact CraftDesk Solutions — IT agency on Ashoka Marg, Nashik. Book a free discovery call for MVP, web, and mobile app development across India.",
  path: "/contact",
  keywords: [
    "contact CraftDesk Solutions",
    "software development Nashik contact",
    "hire web developers Nashik",
    "MVP development consultation",
  ],
});

export default function ContactPage() {
  return (
    <MainLayout>
      <JsonLd data={contactPageSchemas()} />
      <div className="pt-[calc(var(--site-marquee-height)+2rem)]">
        <ContactSection />
      </div>
    </MainLayout>
  );
}
