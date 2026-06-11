"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { budgetOptions } from "@/lib/data";
import { siteConfig } from "@/lib/metadata";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  SectionLayout,
  sectionHeadingVariant,
  type SectionVariant,
} from "@/components/home/section-layout";
import { homeSectionCardClass } from "@/components/home/home-section-shell";
import { cn } from "@/lib/utils";

interface ContactSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
}

export function ContactSection({
  variant = "default",
  sectionIndex,
}: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const hv = sectionHeadingVariant(variant);
  const isHome = variant === "home";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const panelClass = cn(
    "p-6 backdrop-blur-xl md:p-8",
    isHome ?
      homeSectionCardClass(sectionIndex ?? 9)
    : "rounded-2xl border border-white/10 bg-white/[0.03]"
  );

  return (
    <SectionLayout id="contact" variant={variant} sectionIndex={sectionIndex}>
      {!isHome && (
        <div className="absolute inset-0 bg-gradient-to-t from-orange-950/10 via-transparent to-transparent" />
      )}
      <SectionHeading
        variant={hv}
        badge="Contact"
        title="Let's Build Something Great"
        description="Ready to start your project? Fill out the form and our team will get back to you within 24 hours."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2"
        >
          <div className="space-y-4">
            <div className={panelClass}>
              <h3 className="mb-4 font-semibold text-[var(--foreground)]">Get in Touch</h3>
              <div className="space-y-4 text-sm text-white/45">
                <p>
                  <span className="block text-white/30">Email</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-[var(--orange)] hover:underline">
                    {siteConfig.email}
                  </a>
                </p>
                <p>
                  <span className="block text-white/30">Phone</span>
                  <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-[var(--orange)] hover:underline">
                    {siteConfig.phone}
                  </a>
                </p>
                <p>
                  <span className="block text-white/30">Address</span>
                  {siteConfig.address}
                </p>
              </div>
            </div>
            <div
              className={cn(
                "rounded-2xl border border-[var(--orange)]/20 bg-[var(--orange)]/5 p-6",
                isHome && "backdrop-blur-md"
              )}
            >
              <p className="text-sm text-white/70">
                <strong className="text-[var(--orange)]">Free Consultation:</strong> Schedule a
                no-obligation call to discuss your project requirements and get a custom quote.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          {submitted ?
            <div className="flex flex-col items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/5 p-12 text-center">
              <CheckCircle className="mb-4 h-12 w-12 text-green-400" />
              <h3 className="text-xl font-semibold text-[var(--foreground)]">Message Sent!</h3>
              <p className="mt-2 text-sm text-white/45">
                Thank you for reaching out. We&apos;ll get back to you within 24 hours.
              </p>
            </div>
          : <form onSubmit={handleSubmit} className={panelClass}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" name="name" required placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" name="email" type="email" required placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" name="company" placeholder="Your Company" />
                </div>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="budget">Project Budget</Label>
                <select
                  id="budget"
                  name="budget"
                  className="flex h-11 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
                >
                  <option value="" className="bg-zinc-900">Select budget range</option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option} className="bg-zinc-900">
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-5 space-y-2">
                <Label htmlFor="details">Project Details *</Label>
                <Textarea
                  id="details"
                  name="details"
                  required
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              <Button type="submit" className="mt-6 w-full sm:w-auto" size="lg">
                Send Message
                <Send className="h-4 w-4" />
              </Button>
            </form>
          }
        </motion.div>
      </div>
    </SectionLayout>
  );
}
