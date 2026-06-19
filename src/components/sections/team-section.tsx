"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { teamMembers, type TeamMember } from "@/lib/data";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  SectionLayout,
  sectionHeadingVariant,
  type SectionVariant,
} from "@/components/home/home-section-shell";
import { cn } from "@/lib/utils";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: LinkedInIcon,
  Twitter: TwitterIcon,
  Gmail: Mail,
  Instagram: InstagramIcon,
};

function TeamAvatar({ member }: { member: TeamMember }) {
  if (member.image) {
    return (
      <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-[var(--border)] shadow-lg sm:h-36 sm:w-36">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="144px"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-[var(--border)] bg-gradient-to-br text-2xl font-bold text-white shadow-lg sm:h-36 sm:w-36 sm:text-3xl",
        member.gradient,
      )}
    >
      {member.initials}
    </div>
  );
}

function TeamMemberCard({
  member,
  index,
}: {
  member: TeamMember;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center text-center"
    >
      <TeamAvatar member={member} />

      <h3 className="mt-5 text-lg font-bold text-[var(--foreground)] sm:text-xl">
        {member.name}
      </h3>
      <p className="mt-1 text-sm text-[var(--muted-foreground)]">{member.role}</p>

      <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--muted-foreground)]">
        {member.bio}
      </p>

      <div className="mt-4 flex items-center justify-center gap-3">
        {member.social.map((link) => {
          const Icon = socialIcons[link.name];
          if (!Icon) return null;

          return (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              className="flex h-8 w-8 items-center justify-center rounded-full text-[var(--muted-foreground)] transition-colors hover:text-[var(--orange)]"
              aria-label={`${member.name} on ${link.name}`}
            >
              <Icon className="h-4 w-4" />
            </a>
          );
        })}
      </div>
    </motion.article>
  );
}

interface TeamSectionProps {
  variant?: SectionVariant;
  sectionIndex?: number;
}

export function TeamSection({
  variant = "default",
  sectionIndex,
}: TeamSectionProps) {
  const hv = sectionHeadingVariant(variant);

  return (
    <SectionLayout
      id="team"
      variant={variant}
      sectionIndex={sectionIndex}
      compact
    >
      <SectionHeading
        variant={hv}
        title="Who We Are? Meet Our Team!"
        description="We listen, we discuss, we advise and develop. We love to learn and use the latest technologies."
      />

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={member.id} member={member} index={index} />
        ))}
      </div>
    </SectionLayout>
  );
}
