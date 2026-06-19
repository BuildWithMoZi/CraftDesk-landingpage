import type { Metadata } from "next";
import { HomePage } from "@/components/home/home-page";
import { JsonLd } from "@/components/seo/json-ld";
import { createMetadata } from "@/lib/metadata";
import { homePageSchemas } from "@/lib/schema";

export const metadata: Metadata = createMetadata({
  title: "Web & Mobile App Development in Nashik",
  description:
    "CraftDesk Solutions builds custom web apps, React Native mobile apps, and startup MVPs in Nashik, Maharashtra — fixed timelines and transparent pricing for founders across India.",
  path: "/",
  keywords: [
    "software development company Nashik",
    "web app development India",
    "Website development company Nashik",
    "startup MVP development",
    "custom software development Maharashtra",
    "CraftDesk Solutions",
    "Website development company Nashik",
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd data={homePageSchemas()} />
      <HomePage />
    </>
  );
}
