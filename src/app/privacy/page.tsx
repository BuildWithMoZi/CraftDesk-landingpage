import type { Metadata } from "next";
import { MainLayout } from "@/components/layout/main-layout";
import { LegalPolicyView } from "@/components/sections/legal-policy";
import { createMetadata } from "@/lib/metadata";
import { getLegalPolicy } from "@/lib/legal";

const policy = getLegalPolicy("privacy");

export const metadata: Metadata = createMetadata({
  title: policy.title,
  description: policy.description,
  path: policy.path,
});

export default function PrivacyPage() {
  return (
    <MainLayout>
      <LegalPolicyView policy={policy} />
    </MainLayout>
  );
}
