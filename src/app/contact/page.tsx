import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { ContactSection } from "@/components/sections/contact-section";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Get in touch with Kyron Solutions for a free consultation. Tell us about your project and we'll respond within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="pt-8">
        <ContactSection />
      </div>
    </MainLayout>
  );
}
