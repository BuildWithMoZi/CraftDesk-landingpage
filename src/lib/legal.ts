import { siteConfig } from "@/lib/metadata";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalPolicy = {
  slug: "terms" | "privacy";
  path: string;
  /** Short label shown in the sidebar navigation */
  navLabel: string;
  title: string;
  description: string;
  lastUpdated: string;
  effective: string;
  jurisdiction: string;
  /** Optional highlighted note shown near the top of the page */
  note?: string;
  sections: LegalSection[];
};

const lastUpdated = "20 June 2026";
const effective = "20 June 2026";
const jurisdiction = "India";

const company = siteConfig.name;
const email = siteConfig.email;
const phone = siteConfig.phone;
const fullAddress = siteConfig.address;

export const legalPolicies: LegalPolicy[] = [
  {
    slug: "terms",
    path: "/terms",
    navLabel: "Terms of Use",
    title: "Terms of Use",
    description: `The agreement between you and ${company} when you visit our website, request a quote, or engage us for software design, development, and maintenance services. Please read it carefully.`,
    lastUpdated,
    effective,
    jurisdiction,
    note: `These Terms of Use govern your access to and use of ${company}'s website and services. By using our website or engaging us, you agree to these Terms and to our Privacy Policy.`,
    sections: [
      {
        heading: "1. Acceptance of these terms",
        paragraphs: [
          `These Terms of Use (the "Terms") constitute a binding legal agreement between you (the "Client," "you" or "your") and ${company} ("${siteConfig.brand}," "we," "us" or "our").`,
          "By accessing our website, submitting an enquiry, requesting a quote, accepting a proposal, or otherwise engaging our services, you agree to be bound by these Terms and by our Privacy Policy. If you are entering into these Terms on behalf of a company or other legal entity, you represent that you have authority to bind that entity. If you do not agree, do not use our website or services.",
        ],
      },
      {
        heading: "2. Definitions",
        bullets: [
          `"Services" means the software design, development, consulting, maintenance and related services that ${company} provides, including MVP development, custom web applications, mobile (React Native) applications, landing pages, and ongoing support.`,
          '"Website" means our marketing website and any related pages, content and forms we make available online.',
          '"Proposal" means the written quote, scope document, or statement of work that describes the deliverables, timeline, and fees for a specific engagement.',
          '"Deliverables" means the source code, designs, documentation, and other materials we produce for you under a Proposal.',
          '"Client Materials" means content, data, branding, credentials, and other materials you provide to us for use in an engagement.',
        ],
      },
      {
        heading: "3. The Services",
        paragraphs: [
          `${company} is a software development company based in Nashik, Maharashtra. We design and build digital products for startups and businesses, including:`,
        ],
        bullets: [
          "MVP and product development for new ventures.",
          "Custom web application design and development.",
          "Cross-platform mobile app development using React Native.",
          "Landing page and marketing website development.",
          "Maintenance, support, and feature enhancement for existing products.",
        ],
      },
      {
        heading: "3.1 Website vs. engagements",
        paragraphs: [
          "Our Website is informational and is intended to help you understand our offerings and contact us. No engagement, contract, or obligation to deliver Services arises until we have a mutually agreed Proposal and any required deposit has been received. We may add, modify, or remove Website content and service offerings at any time.",
        ],
      },
      {
        heading: "4. Eligibility & engagement",
        bullets: [
          "You must be at least 18 years old and capable of entering into a binding contract.",
          "You agree to provide accurate, current, and complete information when requesting a quote or engaging us.",
          "You are responsible for the security of any credentials, repositories, or third-party accounts you share with us, and for promptly revoking access when an engagement ends.",
          `Notify us immediately at ${email} if you suspect any unauthorised use of access you have granted us.`,
        ],
      },
      {
        heading: "5. Project scope & proposals",
        paragraphs: [
          "Each engagement is defined by a Proposal that sets out the scope, deliverables, milestones, timeline, and fees. The Proposal, together with these Terms, forms the agreement for that engagement.",
          "Work requested outside the agreed scope (\"change requests\") will be quoted separately and may affect the timeline and fees. We will not begin out-of-scope work without your written approval.",
        ],
      },
      {
        heading: "6. Acceptable use",
        paragraphs: ["You agree NOT to use our Website or Services to:"],
        bullets: [
          "Build, host, or distribute anything illegal, fraudulent, defamatory, infringing, or harmful.",
          "Develop products intended to send spam, phishing, malware, or content that violates the rights of others.",
          "Reverse-engineer, copy, or resell our proprietary tools, templates, or internal frameworks without consent.",
          "Misrepresent ownership of Client Materials or provide content you do not have the right to use.",
          "Interfere with, probe, or attempt to gain unauthorised access to our systems or those of our providers.",
          "Violate any applicable law, regulation, or third-party right.",
        ],
      },
      {
        heading: "7. Client responsibilities",
        paragraphs: [
          "Timely delivery depends on your cooperation. You agree to:",
        ],
        bullets: [
          "Provide accurate Client Materials, content, and feedback within agreed timeframes.",
          "Make available a point of contact empowered to review work and approve milestones.",
          "Obtain all licences, consents, and permissions for any Client Materials you supply.",
          "Procure and pay for third-party services required for your product (hosting, domains, API subscriptions, app store accounts, paid licences) unless the Proposal states otherwise.",
        ],
      },
      {
        heading: "8. Fees, billing & payments",
        paragraphs: [
          "Fees, payment schedule, and currency are set out in your Proposal. All fees are quoted in Indian Rupees (₹) unless stated otherwise.",
        ],
      },
      {
        heading: "8.1 Deposits & milestones",
        paragraphs: [
          "Most engagements require an upfront deposit before work begins, with the balance billed against agreed milestones or on a monthly basis. Work on a milestone may pause until the corresponding invoice is settled.",
        ],
      },
      {
        heading: "8.2 Invoicing & due dates",
        paragraphs: [
          "Invoices are payable within the period stated on the invoice (typically 7 days). We may suspend work and access to in-progress Deliverables on overdue accounts.",
        ],
      },
      {
        heading: "8.3 Retainers & maintenance",
        paragraphs: [
          "Maintenance and support are billed as a recurring retainer or per-incident, as agreed. Recurring retainers renew automatically each period until cancelled with reasonable written notice.",
        ],
      },
      {
        heading: "8.4 Late payment",
        paragraphs: [
          "Invoices outstanding for more than 30 days may be paused, escalated, or pursued under applicable Indian law. We reserve the right to charge reasonable late-payment interest where permitted.",
        ],
      },
      {
        heading: "9. Taxes",
        paragraphs: [
          "All prices are exclusive of applicable taxes (including GST) unless stated otherwise. You are responsible for any taxes, duties, or government charges on your purchase of the Services, except for taxes based on our net income. If you are required by law to deduct any tax from a payment to us, you must gross-up the payment so that we receive the full invoice amount.",
        ],
      },
      {
        heading: "10. Refunds & cancellation",
        bullets: [
          "Deposits reserve our team's capacity and are generally non-refundable once work has commenced.",
          "Fees for work already performed or milestones already delivered are non-refundable.",
          "Either party may terminate an engagement with written notice as described in Section 16; you remain liable for work completed up to the termination date.",
          `Where we fail to deliver Services substantially as described for reasons attributable to us, you may request a review by emailing ${email}; we may issue a discretionary refund or service credit at our reasonable discretion.`,
        ],
      },
      {
        heading: "11. Timelines, delivery & support",
        paragraphs: [
          "Timelines in a Proposal are good-faith estimates and depend on timely Client input, scope stability, and third-party dependencies. Delays caused by late feedback, scope changes, or third-party services are not our responsibility and may shift the schedule.",
          "Unless otherwise agreed, Deliverables are subject to a defined review window during which you may report defects. A reasonable defect-fix period is included; new features or changes after sign-off are treated as change requests.",
        ],
      },
      {
        heading: "12. Intellectual property",
        paragraphs: [
          `Our pre-existing tools, libraries, frameworks, templates, and know-how ("Background IP") remain the property of ${company}. Subject to full payment, we grant you a perpetual, non-exclusive licence to use our Background IP solely as embedded in your Deliverables.`,
          "Upon full payment for an engagement, ownership of the custom Deliverables created specifically for you transfers to you, except for Background IP and any third-party or open-source components, which remain governed by their own licences.",
          `The ${siteConfig.brand} name, logo, and product names are our trademarks and may not be used without our prior written consent.`,
        ],
      },
      {
        heading: "13. Client data & feedback",
        paragraphs: [
          "You retain all rights in your Client Materials. You grant us a limited licence to host, copy, and process Client Materials solely as necessary to provide the Services. You are responsible for the accuracy, legality, and integrity of Client Materials and for obtaining all necessary consents.",
          "We may showcase non-confidential work (for example, screenshots or a case study) in our portfolio unless you ask us in writing not to. If you provide feedback or suggestions about our Services or tools, you grant us a perpetual, royalty-free licence to use that feedback to improve our offerings.",
        ],
      },
      {
        heading: "14. Confidentiality",
        paragraphs: [
          "Each party may access the other's confidential information (including business plans, technical information, and pricing). Each party agrees to use such information only to perform under these Terms, to protect it with at least reasonable care, and not to disclose it to third parties except to personnel and sub-processors bound by similar obligations on a need-to-know basis.",
          "These obligations do not apply to information that is public, independently developed, rightfully received from a third party, or required to be disclosed by law (with reasonable advance notice where legally permitted).",
        ],
      },
      {
        heading: "15. Warranties & maintenance",
        paragraphs: [
          "We warrant that the Services will be performed in a professional and workmanlike manner. For a reasonable period after delivery (as stated in the Proposal, or 30 days if unspecified), we will correct defects in Deliverables that fail to materially conform to the agreed scope, at no additional charge.",
          "This warranty does not cover issues caused by Client Materials, third-party services, modifications made by anyone other than us, or use of the Deliverables outside their intended purpose.",
        ],
      },
      {
        heading: "16. Suspension & termination",
        paragraphs: [
          "Either party may terminate an engagement for convenience with reasonable written notice, subject to payment for work performed. We may suspend or terminate an engagement immediately if you materially breach these Terms, fail to pay amounts due after a 7-day cure period, or if your use poses a security, legal, or reputational risk.",
          "Upon termination: (a) you remain liable for all fees accrued before termination; (b) we will, upon settlement of outstanding amounts, hand over completed and paid-for Deliverables; and (c) provisions that by their nature should survive (including Confidentiality, IP, Disclaimers, Liability, and Governing Law) will survive.",
        ],
      },
      {
        heading: "17. Disclaimers",
        paragraphs: [
          'Except as expressly stated in these Terms, our Website and Services are provided "AS IS" and "AS AVAILABLE" without warranties of any kind, whether express, implied, or statutory, including warranties of merchantability, fitness for a particular purpose, non-infringement, or uninterrupted or error-free operation.',
          "We do not warrant any specific business outcome, revenue, user growth, ranking, or commercial result from any Deliverable. Performance of software depends on hosting, third-party services, end-user devices, and other factors outside our control.",
        ],
      },
      {
        heading: "18. Limitation of liability",
        paragraphs: [
          "To the maximum extent permitted by law, in no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits, lost revenue, lost data, or business interruption, arising out of or relating to these Terms or the Services, even if advised of the possibility of such damages.",
          "Our aggregate liability for all claims arising out of or relating to these Terms, regardless of the form of action, shall not exceed the total fees actually paid by you to us for the specific engagement giving rise to the claim in the twelve (12) months preceding the event.",
        ],
      },
      {
        heading: "19. Indemnification",
        paragraphs: [
          "You agree to defend, indemnify, and hold us harmless from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or connected with your use of the Services in violation of these Terms or law, your Client Materials (including any claim that they infringe a third party's rights), or your operation of the delivered product after handover.",
        ],
      },
      {
        heading: "20. Force majeure",
        paragraphs: [
          "Neither party shall be liable for any failure or delay in performance (other than payment obligations) caused by events beyond its reasonable control, including acts of God, natural disasters, war, terrorism, civil unrest, fire, flood, network or power failures, strikes, pandemic, or the acts or omissions of third-party providers.",
        ],
      },
      {
        heading: "21. Governing law & jurisdiction",
        paragraphs: [
          "These Terms are governed by and construed in accordance with the laws of India, without regard to conflict-of-laws rules. Subject to mandatory consumer-law protections, the courts at Nashik, Maharashtra shall have exclusive jurisdiction over any dispute arising out of or relating to these Terms or the Services. The parties agree to attempt in good faith to resolve disputes through negotiation before initiating legal proceedings.",
        ],
      },
      {
        heading: "22. Changes to these terms",
        paragraphs: [
          'We may revise these Terms from time to time. The most current version will always be posted on this page with the "Last updated" date refreshed. For material changes we will provide reasonable advance notice where practical. Your continued use of our Website or Services after the effective date of the revised Terms constitutes your acceptance of them.',
        ],
      },
      {
        heading: "23. Miscellaneous",
        bullets: [
          "Entire agreement. These Terms, together with the Privacy Policy and any Proposal executed between us, constitute the entire agreement regarding the Services and supersede all prior agreements.",
          "Severability. If any provision is held invalid or unenforceable, the remaining provisions remain in full force and effect.",
          "No waiver. Failure or delay in exercising any right does not operate as a waiver of that right.",
          "Assignment. You may not assign these Terms without our prior written consent. We may assign these Terms in connection with a merger, acquisition, or sale of assets.",
          "Independent contractors. The parties are independent contractors; these Terms do not create any partnership, joint venture, or agency relationship.",
        ],
      },
      {
        heading: "24. Contact",
        paragraphs: [
          "If you have questions about these Terms, please contact us at:",
        ],
        bullets: [`Email: ${email}`, `Phone: ${phone}`, `Address: ${fullAddress}`],
      },
    ],
  },
  {
    slug: "privacy",
    path: "/privacy",
    navLabel: "Privacy Policy",
    title: "Privacy Policy",
    description: `How ${company} collects, uses, shares, and protects your personal information when you use our website and engage our software development services.`,
    lastUpdated,
    effective,
    jurisdiction,
    note: "India DPDP Act 2023 + GDPR-aligned. This policy explains what personal information we collect, why we collect it, how we use and share it, and the rights and choices you have.",
    sections: [
      {
        heading: "1. Introduction",
        paragraphs: [
          `${company} ("${siteConfig.brand}," "we," "us," "our") is committed to protecting your privacy. This Privacy Policy explains what personal information we collect, why we collect it, how we use and share it, and the rights and choices you have.`,
          "This policy applies to information collected through our website, our enquiry and newsletter forms, and our communications and services. By using our website or engaging us, you confirm that you have read and understood this policy. If you do not agree, please do not use our website or services.",
        ],
      },
      {
        heading: "2. Who we are",
        paragraphs: [
          `${company} is a software development company based in Nashik, Maharashtra, India. We design and build MVPs, custom web applications, and mobile applications for startups and businesses.`,
          'For the purposes of the Digital Personal Data Protection Act, 2023 (India) ("DPDP Act") and, where applicable, the EU/UK General Data Protection Regulation ("GDPR"), we act as a Data Fiduciary / Controller for information about our prospects, clients, and website visitors, and as a Data Processor / Processor for personal data contained within Client Materials that you ask us to handle during an engagement.',
        ],
      },
      {
        heading: "3. Scope of this policy",
        paragraphs: [
          "This policy describes our general practices. Specific engagements may be governed by additional terms in a Proposal or data-processing agreement that supplement this policy. Where we process personal data on your behalf as part of building or maintaining your product, you remain the controller of that data and are responsible for its lawful collection and use.",
        ],
      },
      {
        heading: "4. Information we collect",
        paragraphs: ["We collect information in three broad ways:"],
      },
      {
        heading: "4.1 Information you give us",
        bullets: [
          "Contact & identity: your name, business name, email address, phone number, and role.",
          "Project details: information you share when requesting a quote or consultation, including your requirements, budget range, and timelines.",
          "Engagement & billing: billing name, address, GSTIN (where applicable), and invoice history. Payment credentials are processed directly by our payment partners and are not stored on our servers.",
          "Client Materials: content, credentials, designs, and data you provide so we can deliver the Services.",
          "Support & communications: emails, chat messages, and call notes when you contact us.",
        ],
      },
      {
        heading: "4.2 Information we collect automatically",
        bullets: [
          "Usage data: pages visited, links clicked, and basic interaction data used to improve the website.",
          "Device & network: IP address, browser type and version, operating system, language, time zone, and referring URL.",
          "Cookies & local storage: see Section 13.",
        ],
      },
      {
        heading: "4.3 Information from third parties",
        bullets: [
          "Analytics providers: aggregated, pseudonymised statistics about website usage.",
          "Payment providers: transaction status, reference IDs, and limited masked payment metadata.",
          "Public sources: publicly available business information used to understand enquiries and prevent fraud.",
        ],
      },
      {
        heading: "5. How we use your information",
        bullets: [
          "Respond to enquiries, prepare quotes, schedule consultations, and set up engagements.",
          "Provide, manage, and improve the Services you request.",
          "Process billing, generate invoices, take payments, and detect fraud.",
          "Send service communications (project updates, security, billing) and, where you have opted in, newsletters and marketing.",
          "Maintain the security and reliability of our website and systems.",
          "Comply with legal, tax, and accounting obligations.",
        ],
      },
      {
        heading: "6. Legal bases for processing",
        paragraphs: [
          "Where the GDPR or comparable laws apply, we rely on the following legal bases:",
        ],
        bullets: [
          "Performance of a contract — to provide the Services you engaged us for.",
          "Legitimate interests — to operate, secure, and improve our website and Services and to prevent fraud, balanced against your privacy rights.",
          "Consent — for optional processing such as marketing emails and non-essential cookies; you can withdraw consent at any time.",
          "Legal obligation — to comply with applicable laws, regulations, and tax / accounting requirements.",
        ],
      },
      {
        heading: "7. Sharing & disclosure",
        paragraphs: ["We do not sell your personal data. We share it only as described below:"],
        bullets: [
          "With sub-processors that help us run our business (hosting, analytics, email, payments) — see Section 8.",
          "With professional advisors such as auditors, lawyers, and accountants under confidentiality obligations.",
          "For legal reasons where we believe in good faith that disclosure is necessary to comply with law, enforce our terms, or protect rights, property, or safety.",
          "In a business transaction such as a merger, acquisition, or sale of assets, subject to standard confidentiality protections.",
        ],
      },
      {
        heading: "8. Sub-processors",
        paragraphs: [
          "We engage carefully selected sub-processors to help operate our website and Services. These typically include cloud hosting and CDN providers, transactional email providers, analytics tools, and payment processors. Each is bound by confidentiality and limited-use obligations.",
          `For an up-to-date list of key sub-processors, or to be notified of changes, email ${email}.`,
        ],
      },
      {
        heading: "9. International data transfers",
        paragraphs: [
          "We are based in India and primarily process data on infrastructure located in India. Some sub-processors may process data in other regions, including the United States and the European Union. Where we transfer personal data internationally, we rely on appropriate safeguards such as Standard Contractual Clauses or recognised adequacy mechanisms.",
        ],
      },
      {
        heading: "10. Data retention",
        bullets: [
          "Enquiry and prospect data — kept for as long as needed to respond and follow up, then deleted or anonymised.",
          "Client account and project data — for the life of the engagement and a reasonable period afterwards to satisfy audit and dispute-resolution needs.",
          "Billing records & invoices — retained as long as required by Indian tax and accounting regulations (typically up to 8 years).",
          "Backups — rolling encrypted backups; deleted data is purged within the backup cycle.",
        ],
      },
      {
        heading: "11. Security",
        paragraphs: [
          "We apply reasonable administrative, technical, and physical safeguards to protect personal data, including encryption in transit, access controls on a least-privilege basis, secure handling of credentials, and regular review of our practices.",
          `No system is completely secure. If you believe your data has been compromised or you discover a vulnerability, please email ${email} immediately.`,
        ],
      },
      {
        heading: "12. Your rights & choices",
        paragraphs: [
          "Subject to applicable law (including the DPDP Act and the GDPR), you have the following rights regarding your personal data:",
        ],
        bullets: [
          "Access — request a copy of the personal data we hold about you.",
          "Correction — ask us to correct inaccurate or incomplete data.",
          "Erasure — request deletion of your personal data, subject to legal retention requirements.",
          "Restriction & objection — ask us to pause certain processing or object to processing based on legitimate interests.",
          "Portability — receive your data in a structured, commonly used, machine-readable format.",
          "Withdraw consent — where we rely on consent, you can withdraw it at any time without affecting prior processing.",
          "Complain — lodge a complaint with the Data Protection Board of India or your local supervisory authority.",
        ],
      },
      {
        heading: "13. Cookies & similar technologies",
        paragraphs: [
          "We use a small number of cookies and similar technologies to keep our website working and to understand usage:",
        ],
        bullets: [
          "Strictly necessary — for core site functionality and security.",
          "Preferences — to remember settings such as theme.",
          "Analytics — aggregated, pseudonymised usage statistics. We avoid third-party advertising cookies.",
        ],
      },
      {
        heading: "14. Children's privacy",
        paragraphs: [
          `Our website and Services are intended for businesses and adults aged 18 or older. We do not knowingly collect personal data from children. If you believe a child has provided us personal data, please contact ${email} and we will take appropriate steps to delete it.`,
        ],
      },
      {
        heading: "15. Changes to this policy",
        paragraphs: [
          'We may update this Privacy Policy from time to time. When we make material changes we will update the "Last updated" date at the top of this page and, where appropriate, notify you. Your continued use of our website or Services after the changes take effect constitutes your acceptance of the updated policy.',
        ],
      },
      {
        heading: "16. Grievance officer (India)",
        paragraphs: [
          "In accordance with the Information Technology Act, 2000, the related Intermediary Guidelines, and the DPDP Act, 2023, you may contact our Grievance Officer for any privacy-related complaint. We acknowledge complaints promptly and aim to resolve them within the timeframes required by law.",
        ],
        bullets: [
          `Grievance & Data Protection contact: ${company}`,
          `Email: ${email}`,
          `Phone: ${phone}`,
          `Address: ${fullAddress}`,
        ],
      },
      {
        heading: "17. How to contact us",
        paragraphs: ["For any privacy-related question or request, contact us at:"],
        bullets: [`Email: ${email}`, `Phone: ${phone}`, `Address: ${fullAddress}`],
      },
    ],
  },
];

export function getLegalPolicy(slug: LegalPolicy["slug"]): LegalPolicy {
  const policy = legalPolicies.find((p) => p.slug === slug);
  if (!policy) {
    throw new Error(`Unknown legal policy: ${slug}`);
  }
  return policy;
}
