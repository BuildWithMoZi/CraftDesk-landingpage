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

const socialIcons: Record<
  string,
  React.ComponentType<{ className?: string }>
> = {
  Gmail: Mail,
};

function TeamAvatar({ member }: { member: TeamMember }) {
  if (member.image) {
    return (
      <div className='relative mx-auto h-32 w-32 overflow-hidden rounded-full border-4 border-[var(--border)] shadow-lg sm:h-36 sm:w-36'>
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes='144px'
          className='object-cover'
        />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-[var(--border)] bg-gradient-to-br text-2xl font-bold text-white shadow-lg sm:h-36 sm:w-36 sm:text-3xl",
        member.gradient,
      )}>
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
      className='flex flex-col items-center text-center'>
      <TeamAvatar member={member} />

      <h3 className='mt-5 text-lg font-bold text-[var(--foreground)] sm:text-xl'>
        {member.name}
      </h3>
      <p className='mt-1 text-sm text-[var(--muted-foreground)]'>
        {member.role}
      </p>

      <p className='mt-3 max-w-xs text-sm leading-relaxed text-[var(--muted-foreground)]'>
        {member.bio}
      </p>

      <div className='mt-4 flex items-center justify-center gap-3'>
        {member.social.map((link) => {
          const Icon = socialIcons[link.name];
          if (!Icon) return null;

          return (
            <a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:") ?
                  undefined
                : "noopener noreferrer"
              }
              className='flex h-8 w-8 items-center justify-center rounded-full text-[var(--muted-foreground)] transition-colors hover:text-[var(--orange)]'
              aria-label={`${member.name} on ${link.name}`}>
              <Icon className='h-4 w-4' />
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
      id='team'
      variant={variant}
      sectionIndex={sectionIndex}
      compact>
      <SectionHeading
        variant={hv}
        title='Who We Are? Meet Our Team!'
        description='We listen, we discuss, we advise and develop. We love to learn and use the latest technologies.'
      />

      <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8'>
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={member.id} member={member} index={index} />
        ))}
      </div>
    </SectionLayout>
  );
}
