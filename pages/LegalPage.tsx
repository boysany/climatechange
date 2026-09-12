import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  FileText,
  RefreshCw,
  AlertTriangle,
  Eye,
  Mail,
  Phone,
  ArrowUpRight,
  CheckCircle2,
  Lock,
  Globe,
  HelpCircle,
  Clock,
  Building,
  Scale,
  Sparkles
} from 'lucide-react';
import { useSEO } from '../lib/useSEO';

export type LegalPageType =
  | 'privacy-policy'
  | 'terms-and-conditions'
  | 'refund-cancellation'
  | 'disclaimer'
  | 'legal-business-transparency';

interface LegalPageProps {
  pageId: string;
  onNavigate: (page: string) => void;
}

export default function LegalPage({ pageId }: LegalPageProps) {
  // Normalize aliases
  let currentDoc: LegalPageType = 'privacy-policy';
  if (pageId === 'privacy' || pageId === 'privacy-policy') {
    currentDoc = 'privacy-policy';
  } else if (
    pageId === 'terms' ||
    pageId === 'terms-of-service' ||
    pageId === 'terms-and-conditions'
  ) {
    currentDoc = 'terms-and-conditions';
  } else if (
    pageId === 'refund-cancellation' ||
    pageId === 'refund-policy' ||
    pageId === 'cancellation-policy'
  ) {
    currentDoc = 'refund-cancellation';
  } else if (pageId === 'disclaimer') {
    currentDoc = 'disclaimer';
  } else if (
    pageId === 'legal-business-transparency' ||
    pageId === 'transparency'
  ) {
    currentDoc = 'legal-business-transparency';
  }

  // SEO Configurations per page
  const seoConfig = {
    'privacy-policy': {
      title: 'Privacy Policy | Climate Change Digital Labs',
      description:
        'Official Privacy Policy for Climate Change Digital Labs, registered in India. Learn our responsible handling of client information, project data, and zero data selling.',
      keywords:
        'CCDL privacy policy, data protection, software agency privacy, Climate Change Digital Labs legal, GDPR compliance'
    },
    'terms-and-conditions': {
      title: 'Terms & Conditions | Climate Change Digital Labs',
      description:
        'Official Terms & Conditions of Climate Change Digital Labs. Clear scope boundaries, development charges, third-party costs, milestone sign-offs, and 100% IP transfer.',
      keywords:
        'CCDL terms and conditions, master service agreement, intellectual property transfer, software development contract'
    },
    'refund-cancellation': {
      title: 'Refund & Cancellation Policy | Climate Change Digital Labs',
      description:
        'Clear and transparent Refund & Cancellation Policy for Climate Change Digital Labs. Detailed guidelines on advance deposits, milestone payments, and custom software delivery.',
      keywords:
        'CCDL refund policy, cancellation terms, software milestone refunds, digital product agency refund policy'
    },
    disclaimer: {
      title: 'Disclaimer | Climate Change Digital Labs',
      description:
        'Official Legal Disclaimer for Climate Change Digital Labs. Important notices on performance benchmarks, third-party platforms, technology estimates, and business results.',
      keywords:
        'CCDL disclaimer, software warranty disclaimer, performance disclaimer, limitation of liability'
    },
    'legal-business-transparency': {
      title: 'Legal & Business Transparency | Climate Change Digital Labs',
      description:
        'Explore our official Business Transparency Statement. Learn how Climate Change Digital Labs ensures transparent pricing, ethical software development, and no misleading claims.',
      keywords:
        'business transparency, ethical software development, CCDL transparency, honest pricing agency, Building for the World'
    }
  }[currentDoc];

  useSEO({
    title: seoConfig.title,
    description: seoConfig.description,
    keywords: seoConfig.keywords,
    canonicalUrl: `https://climatechangedigitallabs.com/${currentDoc}`
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentDoc]);

  return (
    <div className="inner-page-wrap legal-hub-page">
      {/* Top Banner / Breadcrumb */}
      <section className="section-pad inner-hero-section">
        <div className="container">
          <div className="hero-badge-row" style={{ marginBottom: '1rem' }}>
            <span
              className="kicker-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase'
              }}
            >
              <Sparkles size={14} className="pill-spark" />
              AGENCY • REGISTERED IN INDIA
            </span>
          </div>

          <h1
            className="display-title"
            style={{
              fontSize: 'clamp(2.1rem, 4.5vw, 3.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.035em',
              lineHeight: 1.1,
              marginBottom: '0.85rem'
            }}
          >
            {currentDoc === 'privacy-policy' && 'Privacy Policy'}
            {currentDoc === 'terms-and-conditions' && 'Terms & Conditions'}
            {currentDoc === 'refund-cancellation' && 'Refund & Cancellation Policy'}
            {currentDoc === 'disclaimer' && 'Legal Disclaimer'}
            {currentDoc === 'legal-business-transparency' && 'Legal & Business Transparency'}
          </h1>

          <p
            className="hero-narrative"
            style={{
              maxWidth: '750px',
              fontSize: 'clamp(0.96rem, 1.6vw, 1.12rem)',
              lineHeight: 1.65,
              color: 'var(--muted)',
              marginBottom: '0.5rem'
            }}
          >
            {currentDoc === 'privacy-policy' &&
              'How Climate Change Digital Labs collects, safeguards, and isolates client information, codebase assets, and communications under strict data protection protocols.'}
            {currentDoc === 'terms-and-conditions' &&
              'The official Master Services Agreement governing our software engineering, UI/UX architecture, milestone releases, and irrevocable intellectual property transfer.'}
            {currentDoc === 'refund-cancellation' &&
              'Clear, transparent principles governing project cancellation, milestone disbursements, non-refundable third-party costs, and pro-rata deliverable calculations.'}
            {currentDoc === 'disclaimer' &&
              'Important clarifications regarding business metrics, third-party cloud platforms, Google ranking estimates, and professional technology advisories.'}
            {currentDoc === 'legal-business-transparency' &&
              'Our open commitment to honest communication, transparent pricing, ethical technology engineering, and no misleading claims. Building for the World.'}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-pad inner-legal-section">
        <div className="container">
          {/* Bento Summary Header */}
          <div className="legal-overview-bento">
            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <Building size={20} />
              </div>
              <h4>Climate Change Digital Labs</h4>
              <p>Registered in India. Global Digital Product & Software Collective.</p>
            </div>

            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <Globe size={20} />
              </div>
              <h4>Positioning & Ethos</h4>
              <p>"Building for the World" — Crafting resilient software for global founders.</p>
            </div>

            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <Lock size={20} />
              </div>
              <h4>Data & IP Protection</h4>
              <p>Air-gapped repositories, 2FA, NDAs, and 100% IP handover on completion.</p>
            </div>

            <div className="legal-bento-card">
              <div className="legal-bento-icon">
                <Mail size={20} />
              </div>
              <h4>Direct Inquiries</h4>
              <p className="legal-card-contact-text">
                <span className="legal-card-email">
                  climatechangedigitallabs<wbr />@gmail.com
                </span>
                <span className="legal-card-note">Direct senior team response.</span>
              </p>
            </div>
          </div>

          {/* DOCUMENT WRAPPER */}
          <div className="legal-doc-wrap">
            {/* Meta Strip */}
            <div className="legal-meta-strip">
              <div>
                <span>STATUS: </span>
                <strong style={{ color: 'var(--ink)' }}>OFFICIAL POLICY • ACTIVE</strong>
                <span style={{ margin: '0 0.5rem' }}>|</span>
                <span>JURISDICTION: </span>
                <strong style={{ color: 'var(--ink)' }}>INDIA</strong>
              </div>

              <div className="legal-badges-list">
                <span className="legal-badge-chip">TRANSPARENT PRICING</span>
                <span className="legal-badge-chip">ETHICAL CODE</span>
                <span className="legal-badge-chip">100% REPO TRANSFER</span>
              </div>
            </div>

            {/* DOCUMENT 1: PRIVACY POLICY */}
            {currentDoc === 'privacy-policy' && (
              <div className="legal-content-body">
                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">01</span>
                    <h3>Introduction</h3>
                  </div>
                  <p>
                    Climate Change Digital Labs (<strong>“CCDL”</strong>, <strong>“we”</strong>, <strong>“our”</strong>, or <strong>“us”</strong>) operates as a Global Digital Product &amp; Software Collective registered in India. Our foundational purpose is reflected in our guiding ethos: <em>“Building for the World.”</em>
                  </p>
                  <p>
                    We provide high-craft digital product design, full-stack software development, mobile application engineering, cloud infrastructure architecture, and technical consulting services. We hold ourselves to uncompromising standards regarding the privacy, security, and confidentiality of the individuals, founders, and enterprises who visit our website or partner with our collective.
                  </p>
                  <p>
                    This Privacy Policy explains how we collect, handle, utilize, store, and protect information when you browse our website (climatechangedigitallabs.com) or engage our services.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">02</span>
                    <h3>Information We Collect</h3>
                  </div>
                  <p>
                    We collect only information that is strictly necessary to communicate with you, evaluate technical scopes, deliver contracted software, and fulfill statutory tax and legal obligations:
                  </p>
                  <ul>
                    <li><strong>Direct Inquiry Data:</strong> Your name, business email address, phone number, organization name, and country/time zone submitted through contact forms, email inquiries, or discovery calls.</li>
                    <li><strong>Project &amp; Technical Requirements:</strong> Architectural briefs, wireframes, product requirements documents (PRDs), feature roadmaps, and technical specifications shared during proposal drafting or active sprint cycles.</li>
                    <li><strong>Billing &amp; Invoicing Details:</strong> Business billing address, entity registration name, and tax identification (such as GST or corporate tax numbers where applicable) for issuing commercial invoices.</li>
                    <li><strong>Technical Telemetry:</strong> Non-identifiable diagnostic metrics, including browser type, operating system, approximate geographic region, referral URL, and Core Web Vitals speed benchmarks used solely to maintain website performance.</li>
                  </ul>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">03</span>
                    <h3>How We Use Information</h3>
                  </div>
                  <p>
                    We process information strictly for legitimate commercial and technical purposes:
                  </p>
                  <ul>
                    <li>To architect, design, engineer, and deploy contracted web applications, mobile platforms, and design systems.</li>
                    <li>To prepare transparent project proposals, milestone schedules, and scope estimations.</li>
                    <li>To communicate sprint updates, deploy staging environments, and coordinate code reviews.</li>
                    <li>To respond directly to inquiries via email, phone, or verified messaging channels.</li>
                    <li>To satisfy statutory financial, auditing, and corporate accounting requirements under Indian law.</li>
                  </ul>
                  <div className="legal-highlight-box">
                    <CheckCircle2 size={20} />
                    <span><strong>No Data Monetization:</strong> We do not sell, rent, monetize, or disclose your contact information or project data to third-party advertisers, data syndicates, or marketing brokers. Period.</span>
                  </div>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">04</span>
                    <h3>Contact and Inquiry Information</h3>
                  </div>
                  <p>
                    When you contact Climate Change Digital Labs via our website, direct email (climatechangedigitallabs@gmail.com), phone (+91 78520 52323 / +91 80058 73764), or WhatsApp, your details are received directly by our core founding architects.
                  </p>
                  <p>
                    We retain correspondence histories solely to provide continuous support and context across subsequent sprint requests. You may request the deletion of non-statutory communication logs at any time.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">05</span>
                    <h3>Project and Client Information</h3>
                  </div>
                  <p>
                    Client confidentiality is paramount. All proprietary business models, workflows, custom database schemas, algorithms, and design tokens shared with CCDL remain the exclusive, confidential property of the Client.
                  </p>
                  <ul>
                    <li>We enforce strict repository permissions and least-privilege access across all development environments.</li>
                    <li>All senior engineers authenticate via hardware-enforced two-factor authentication (2FA).</li>
                    <li>We routinely execute standard Non-Disclosure Agreements (NDAs) prior to reviewing proprietary materials.</li>
                  </ul>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">06</span>
                    <h3>Payment Information</h3>
                  </div>
                  <p>
                    All financial transactions with Climate Change Digital Labs are conducted through verified, PCI-DSS compliant banking institutions, wire transfers, UPI pipelines, or certified payment gateway providers.
                  </p>
                  <p>
                    Climate Change Digital Labs never collects, stores, or processes raw credit card numbers, debit card PINs, or bank account credentials on our website servers. Billing records stored by CCDL are limited to tax-compliant invoice receipts and payment confirmation references.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">07</span>
                    <h3>Cookies and Analytics</h3>
                  </div>
                  <p>
                    Our website uses minimal, functional cookies necessary to ensure navigation states, theme preferences, and security token handling. We do not use intrusive cross-site advertising pixels or surveillance trackers.
                  </p>
                  <p>
                    Any telemetry gathered is anonymous and aggregated, focusing on Core Web Vitals (Largest Contentful Paint, Cumulative Layout Shift) to ensure our digital presence loads swiftly for visitors globally.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">08</span>
                    <h3>Third-Party Services</h3>
                  </div>
                  <p>
                    To deliver modern cloud applications, we collaborate with industry-standard platforms (such as AWS, Google Cloud, Cloudflare, Vercel, Supabase, and GitHub). When third-party platforms are incorporated into your project:
                  </p>
                  <ul>
                    <li>We recommend that clients maintain direct organizational accounts to preserve perpetual administrative control.</li>
                    <li>We configure third-party API keys securely through server-side environment variables and vault management, never hardcoding credentials.</li>
                  </ul>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">09</span>
                    <h3>Data Security</h3>
                  </div>
                  <p>
                    We implement defense-in-depth security measures to protect information against unauthorized access, alteration, disclosure, or destruction:
                  </p>
                  <ul>
                    <li>TLS 1.3 encryption for all data in transit across our digital properties.</li>
                    <li>Repository-level branch protection rules and mandatory peer-reviewed pull requests.</li>
                    <li>Encrypted developer workstations and zero-trust internal network practices.</li>
                  </ul>
                  <p>
                    While no method of digital transmission or storage is 100% impenetrable, we employ industry-standard protocols to safeguard your records.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">10</span>
                    <h3>Data Retention</h3>
                  </div>
                  <p>
                    We retain personal inquiry data and contractual records only for as long as necessary to fulfill the operational purposes for which they were gathered, including warranty support periods and statutory tax and legal recordkeeping mandated by the Government of India.
                  </p>
                  <p>
                    Upon completion of a project and settlement of all milestones, inactive staging builds and non-essential ephemeral test databases are securely decommissioned.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">11</span>
                    <h3>User Privacy Rights</h3>
                  </div>
                  <p>
                    Regardless of your geographic location, Climate Change Digital Labs respects your privacy rights:
                  </p>
                  <ul>
                    <li><strong>Right to Access:</strong> You may request a copy of the personal data we hold concerning your account.</li>
                    <li><strong>Right to Rectification:</strong> You may request correction of inaccurate or incomplete contact records.</li>
                    <li><strong>Right to Erasure:</strong> You may request that we delete non-statutory communication logs and records.</li>
                    <li><strong>Right to Object / Restrict:</strong> You may object to any processing of your data not required for contractual or legal compliance.</li>
                  </ul>
                  <p>
                    To exercise any of these rights, email our data desk at <strong>climatechangedigitallabs@gmail.com</strong>.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">12</span>
                    <h3>Children's Privacy</h3>
                  </div>
                  <p>
                    Our services and website are intended exclusively for founders, commercial enterprises, and adult professionals. We do not knowingly solicit or collect personal information from children under the age of 18. If you believe a minor has provided us with personal information, please notify us immediately for prompt deletion.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">13</span>
                    <h3>Policy Updates</h3>
                  </div>
                  <p>
                    We may update this Privacy Policy periodically to reflect enhancements in our security practices, changes in our engineering workflows, or statutory amendments in applicable regulations. Any modifications will be posted to this URL with an updated revision date.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">14</span>
                    <h3>Official Contact Information</h3>
                  </div>
                  <p>For questions or privacy inquiries, contact our team directly:</p>
                  <div className="footer-tagline-block" style={{ marginTop: '1rem' }}>
                    <span><strong>Agency:</strong> Climate Change Digital Labs</span>
                    <span><strong>Jurisdiction:</strong> Registered in India</span>
                    <span><strong>Email:</strong> climatechangedigitallabs@gmail.com</span>
                    <span><strong>Phone 1:</strong> +91 78520 52323</span>
                    <span><strong>Phone 2:</strong> +91 80058 73764</span>
                    <span><strong>Positioning:</strong> Global Digital Product &amp; Software Collective</span>
                    <span><strong>Tagline:</strong> “Building for the World”</span>
                  </div>
                </div>
              </div>
            )}

            {/* DOCUMENT 2: TERMS & CONDITIONS */}
            {currentDoc === 'terms-and-conditions' && (
              <div className="legal-content-body">
                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">01</span>
                    <h3>Introduction</h3>
                  </div>
                  <p>
                    These Terms and Conditions (<strong>“Terms”</strong>, <strong>“Agreement”</strong>) constitute a legally binding agreement between <strong>Climate Change Digital Labs</strong> (<strong>“CCDL”</strong>, <strong>“Agency”</strong>, <strong>“we”</strong>, <strong>“our”</strong>, or <strong>“us”</strong>) and the client (<strong>“Client”</strong>, <strong>“you”</strong>, or <strong>“your”</strong>) commissioning software development, user interface design, technical architecture, or consulting services.
                  </p>
                  <p>
                    By engaging our services, signing a Project Proposal, issuing a Purchase Order, or accessing our deliverables, you acknowledge that you have read, understood, and agreed to be bound by these Terms.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">02</span>
                    <h3>About Climate Change Digital Labs</h3>
                  </div>
                  <p>
                    Climate Change Digital Labs is an elite Global Digital Product &amp; Software Collective registered in India. Our mission is encapsulated in our corporate tagline: <em>“Building for the World.”</em>
                  </p>
                  <p>
                    We partner with ambitious founders, venture-backed startups, and growing enterprises to design, architect, engineer, and deploy high-performance software, modern web platforms, mobile applications, design systems, and digital infrastructure.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">03</span>
                    <h3>Services</h3>
                  </div>
                  <p>
                    The scope of services provided by CCDL includes, but is not limited to:
                  </p>
                  <ul>
                    <li>Custom Full-Stack Web Application Engineering (React, Next.js, TypeScript, Node.js).</li>
                    <li>Mobile Application Architecture (iOS and Android).</li>
                    <li>UI/UX Design Systems, Figma Interactive Prototyping, and Motion Design.</li>
                    <li>Backend REST/GraphQL API Design, Database Modeling, and Cloud Infrastructure.</li>
                    <li>E-Commerce Architectures and Friction-Free Checkout Funnels.</li>
                    <li>Technical SEO Audits, Core Web Vitals Optimization, and Codebase Modernization.</li>
                  </ul>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">04</span>
                    <h3>Project Scope</h3>
                  </div>
                  <p>
                    Each engagement is strictly defined by an approved Scope of Work (SOW), Project Proposal, or Written Technical Specification.
                  </p>
                  <p>
                    The SOW articulates specific deliverables, technical stack requirements, milestones, acceptance criteria, and delivery timelines. Any capability, feature, integration, screen, or customization not explicitly written in the SOW is deemed out-of-scope and will require a formal Change Order.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">05</span>
                    <h3>Proposals and Quotations</h3>
                  </div>
                  <p>
                    Formal proposals and commercial quotations issued by CCDL remain valid for thirty (30) calendar days from issuance.
                  </p>
                  <p>
                    Quotations are calculated based on estimated senior engineering hours, architectural complexity, and dedicated sprint capacity required to fulfill the client-provided specifications. If project initiation is delayed beyond thirty days, CCDL reserves the right to review and adjust estimates to reflect updated team availability and engineering schedules.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">06</span>
                    <h3>Client Responsibilities</h3>
                  </div>
                  <p>
                    Successful digital product engineering requires active, timely collaboration. The Client agrees to:
                  </p>
                  <ul>
                    <li>Provide clear project briefs, required branding assets, third-party credentials, copywriting, and feedback in a timely manner.</li>
                    <li>Designate a primary decision-maker empowered to approve milestone sign-offs and design iterations.</li>
                    <li>Review sprint deliverables within five (5) business days of presentation.</li>
                  </ul>
                  <p>
                    Delays by the Client in providing necessary access, feedback, or approvals will automatically extend projected delivery timelines.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">07</span>
                    <h3>Payments</h3>
                  </div>
                  <p>
                    Engagements are structured under agreed commercial models: milestone disbursements, sprint retainers, or fixed-scope contracts.
                  </p>
                  <ul>
                    <li>An initial advance deposit is required before scheduling engineering squads and initiating sprint discovery.</li>
                    <li>Subsequent milestone payments become due upon presentation and demonstration of the agreed deliverables.</li>
                    <li>Final code repository handover and production cloud deployment are executed upon receipt of full and final payment.</li>
                  </ul>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">08</span>
                    <h3>Development Charges</h3>
                  </div>
                  <p>
                    Development charges invoiced by CCDL cover professional services, including UI/UX design, software architecture, frontend and backend programming, code reviews, quality assurance, and project coordination.
                  </p>
                  <p>
                    Development charges do not encompass third-party recurring licensing, cloud infrastructure hosting, domain fees, or paid external APIs.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">09</span>
                    <h3>Domain, Hosting, and Third-Party Costs</h3>
                  </div>
                  <p>
                    <strong>Direct Ownership Principle:</strong> The Client is solely responsible for procuring and funding all necessary third-party infrastructure and services, including:
                  </p>
                  <ul>
                    <li>Domain registration and DNS management services.</li>
                    <li>Cloud hosting and server infrastructure (e.g., AWS, GCP, Vercel, Supabase, Cloudflare).</li>
                    <li>Paid software licenses, proprietary font packages, commercial stock assets, and SMS/Email gateway consumption (e.g., Twilio, SendGrid, Resend).</li>
                    <li>Third-party API consumption charges (e.g., OpenAI, Google Maps, payment gateways).</li>
                  </ul>
                  <p>
                    CCDL does not mark up or hold client hosting infrastructure hostage. Clients maintain direct administrative ownership of their hosting accounts.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">10</span>
                    <h3>Additional Features and Scope Changes</h3>
                  </div>
                  <p>
                    Any request to alter design layouts, add unquoted features, integrate additional APIs, or restructure system architecture after SOW approval will be treated as a Change Order.
                  </p>
                  <p>
                    Change Orders will be scoped, estimated, and submitted in writing for client sign-off before work commences. Change Orders may adjust delivery milestones and total development fees accordingly.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">11</span>
                    <h3>Project Timelines</h3>
                  </div>
                  <p>
                    Delivery dates and sprint durations represent professional engineering estimates prepared in good faith.
                  </p>
                  <p>
                    Actual shipping velocity is contingent on timely client feedback, third-party API stability, and clear scope boundaries. CCDL is not liable for schedule delays caused by third-party outages, scope expansion, or client approval bottlenecks.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">12</span>
                    <h3>Intellectual Property (100% Transfer)</h3>
                  </div>
                  <p>
                    <strong>Full &amp; Irrevocable Ownership:</strong> Upon receipt of full and final payment for all contracted development charges, 100% of the custom source code, UI designs, tokens, graphic assets, and project deliverables created specifically for the Client shall be transferred to the Client.
                  </p>
                  <p>
                    CCDL retains ownership of its pre-existing internal libraries, boilerplate developer utilities, and general technical know-how developed independently of client-specific business logic.
                  </p>
                  <p>
                    Unless explicitly prohibited by a signed bilateral NDA, CCDL reserves the right to showcase the completed work, project title, and screenshots in our professional portfolio and case studies.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">13</span>
                    <h3>Third-Party Software and Services</h3>
                  </div>
                  <p>
                    Our software builds leverage industry-standard open-source packages (e.g., React, Next.js, Tailwind CSS) and commercial third-party APIs.
                  </p>
                  <p>
                    CCDL does not warrant the continuous uptime, perpetual API compatibility, or price stability of third-party platforms. We engineer software following modern modular principles so third-party dependencies can be upgraded or substituted as needed.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">14</span>
                    <h3>Prohibited and Illegal Use</h3>
                  </div>
                  <p>
                    Clients represent and warrant that their applications and materials will not be used for unlawful purposes, including but not limited to:
                  </p>
                  <ul>
                    <li>Illegal gambling, fraud, money laundering, or financial pyramids.</li>
                    <li>Distribution of malicious software, spyware, or cyber-attack tools.</li>
                    <li>Intellectual property infringement or non-consensual surveillance.</li>
                    <li>Hate speech, defamation, or content violating the laws of India or international jurisdictions.</li>
                  </ul>
                  <p>
                    CCDL reserves the right to terminate any engagement immediately without refund if an engagement is found to involve illegal activities.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">15</span>
                    <h3>Service Limitations</h3>
                  </div>
                  <p>
                    Custom software is delivered on an “as-specified” basis following quality assurance and client acceptance testing.
                  </p>
                  <p>
                    To the maximum extent permitted by Indian law, CCDL shall not be liable for indirect, incidental, or consequential damages, including loss of profits, downtime, or data corruption arising from unauthorized client code modifications or third-party outages.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">16</span>
                    <h3>Communication</h3>
                  </div>
                  <p>
                    To ensure accountability and prevent misunderstandings, all formal approvals, scope adjustments, and milestone sign-offs must be transmitted via written digital records (email, documented project management systems, or official WhatsApp correspondence).
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">17</span>
                    <h3>Termination</h3>
                  </div>
                  <p>
                    Either party may terminate an engagement for material breach if such breach remains uncured for fourteen (14) calendar days following written notice.
                  </p>
                  <p>
                    Upon termination, the Client remains obligated to pay for all work, deliverables, and engineering hours completed up to the effective termination date. Completed work will be handed over to the Client upon settlement.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">18</span>
                    <h3>Changes to Terms</h3>
                  </div>
                  <p>
                    CCDL reserves the right to amend these Terms. Continued use of our website or commissioning of new engineering sprints following updates constitutes acceptance of the amended terms.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">19</span>
                    <h3>Contact Information</h3>
                  </div>
                  <p>For questions or formal notices regarding these Terms, contact:</p>
                  <div className="footer-tagline-block" style={{ marginTop: '1rem' }}>
                    <span><strong>Agency:</strong> Climate Change Digital Labs</span>
                    <span><strong>Jurisdiction:</strong> Registered in India</span>
                    <span><strong>Email:</strong> climatechangedigitallabs@gmail.com</span>
                    <span><strong>Phone:</strong> +91 78520 52323 | +91 80058 73764</span>
                    <span><strong>Tagline:</strong> “Building for the World”</span>
                  </div>
                </div>
              </div>
            )}

            {/* DOCUMENT 3: REFUND & CANCELLATION POLICY */}
            {currentDoc === 'refund-cancellation' && (
              <div className="legal-content-body">
                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">01</span>
                    <h3>General Policy</h3>
                  </div>
                  <p>
                    Climate Change Digital Labs operates as an elite digital product and software engineering collective. Because our services involve dedicated senior architect capacity, custom software development, UX architecture, and bespoke technical problem-solving, <strong>we do not offer automatic, unconditional, or standardized refunds</strong>.
                  </p>
                  <p>
                    Software design and development services are non-tangible, custom-tailored solutions. Refund eligibility is evaluated responsibly based on the stage of work, verified milestone deliverables, incurred third-party expenses, the governing project agreement, and applicable Indian statutory consumer and commercial contract laws.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">02</span>
                    <h3>Cancellation Before Work Starts</h3>
                  </div>
                  <p>
                    If the Client requests cancellation in writing before any discovery workshops, design wireframing, technical architecture drafting, or code implementation has commenced:
                  </p>
                  <ul>
                    <li>The Client may be eligible for a refund of the advance payment, minus a nominal administrative and onboarding fee (up to 10% of the deposit) to cover sprint reservation costs and administrative overhead.</li>
                    <li>Notice must be transmitted formally via email to <strong>climatechangedigitallabs@gmail.com</strong>.</li>
                  </ul>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">03</span>
                    <h3>Cancellation After Work Starts</h3>
                  </div>
                  <p>
                    Once active sprint cycles, user interface design, or codebase development have begun, advance payments and milestone disbursements become non-refundable to the extent of the labor, time, and engineering hours committed:
                  </p>
                  <ul>
                    <li>CCDL will conduct an audit of work completed against the approved Scope of Work.</li>
                    <li>If the value of verified work completed is less than the payments received, the unused balance will be refunded to the Client.</li>
                    <li>If the value of work completed exceeds payments received, the Client agrees to settle the pro-rata outstanding balance for hours worked.</li>
                    <li>All completed code files, Figma assets, and documentation completed up to the date of cancellation will be handed over to the Client upon financial settlement.</li>
                  </ul>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">04</span>
                    <h3>Advance Payments</h3>
                  </div>
                  <p>
                    Advance deposits secure dedicated senior engineering squad scheduling, architectural discovery, and sprint capacity.
                  </p>
                  <p>
                    Because scheduling our collective for your project precludes us from accepting competing client engagements during that window, advance deposits are non-refundable once sprint work has been initiated.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">05</span>
                    <h3>Milestone Payments</h3>
                  </div>
                  <p>
                    Projects are organized into distinct milestones (e.g., Milestone 1: UI Wireframes &amp; Tokens; Milestone 2: Frontend Engineering &amp; Staging; Milestone 3: API Integration &amp; Production Deployment).
                  </p>
                  <p>
                    Each milestone is presented for client review and acceptance testing. Once a milestone has been approved in writing or payment has been disbursed for that milestone, <strong>that payment is final and non-refundable</strong>.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">06</span>
                    <h3>Completed Work</h3>
                  </div>
                  <p>
                    No refunds will be granted for completed software features, accepted UI/UX screens, deployed databases, or production builds that have been signed off or integrated into the client's live infrastructure.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">07</span>
                    <h3>Third-Party Expenses</h3>
                  </div>
                  <p>
                    All disbursements made to third parties—including domain registration, cloud server instances (AWS, GCP, Cloudflare, Vercel), external API fees, commercial fonts, and third-party SaaS subscriptions—are <strong>strictly non-refundable</strong> under any circumstances. Third-party vendor policies govern these disbursements.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">08</span>
                    <h3>Client-Requested Changes &amp; Delays</h3>
                  </div>
                  <p>
                    Changes in client business plans, market pivots, loss of internal funding, or delays on the client side in providing feedback do not qualify as valid grounds for refund claims.
                  </p>
                  <p>
                    In the event of unforeseen client delays, CCDL will work collaboratively to pause or reschedule sprints within mutually reasonable windows.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">09</span>
                    <h3>Agency-Initiated Cancellation</h3>
                  </div>
                  <p>
                    In the improbable event that CCDL must cancel an engagement due to catastrophic operational emergencies or force majeure not caused by client breach, CCDL will issue a full refund of any unearned fees for uncompleted milestones, alongside handing over all work-in-progress code and assets.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">10</span>
                    <h3>Refund Request Process</h3>
                  </div>
                  <p>To submit a cancellation or refund inquiry:</p>
                  <ul>
                    <li>Email <strong>climatechangedigitallabs@gmail.com</strong> with the subject line: <em>Refund Request - [Project Name]</em>.</li>
                    <li>Include your formal agreement reference, primary contact details, and a clear explanation of your request.</li>
                    <li>Attach records of all milestone approvals and payment receipts.</li>
                  </ul>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">11</span>
                    <h3>Processing Time</h3>
                  </div>
                  <p>
                    All refund claims are reviewed by our founding leadership within seven (7) business days.
                  </p>
                  <p>
                    If an adjustment or refund is approved, it will be disbursed via the original payment method (bank wire, UPI, or merchant gateway) within ten (10) to fifteen (15) business days, subject to inter-bank clearing cycles.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">12</span>
                    <h3>Exceptions &amp; Good-Faith Rectification</h3>
                  </div>
                  <p>
                    We prioritize long-term client trust over disputes. If you believe a deliverable materially deviates from the agreed technical specifications in the SOW, we provide a <strong>14-day defect rectification sprint</strong> at no extra cost to bring the deliverable into full compliance with the agreed specifications.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">13</span>
                    <h3>Official Contact Information</h3>
                  </div>
                  <div className="footer-tagline-block">
                    <span><strong>Agency:</strong> Climate Change Digital Labs</span>
                    <span><strong>Jurisdiction:</strong> Registered in India</span>
                    <span><strong>Email:</strong> climatechangedigitallabs@gmail.com</span>
                    <span><strong>Phone:</strong> +91 78520 52323 | +91 80058 73764</span>
                    <span><strong>Tagline:</strong> “Building for the World”</span>
                  </div>
                </div>
              </div>
            )}

            {/* DOCUMENT 4: DISCLAIMER */}
            {currentDoc === 'disclaimer' && (
              <div className="legal-content-body">
                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">01</span>
                    <h3>General Information</h3>
                  </div>
                  <p>
                    The information published on the Climate Change Digital Labs website (climatechangedigitallabs.com), in our case studies, technical articles, and promotional materials, is presented for general informational, educational, and portfolio demonstration purposes only.
                  </p>
                  <p>
                    While we make every effort to maintain accurate and up-to-date content, we make no representations or warranties of any kind, express or implied, regarding the completeness, accuracy, or suitability of website copy.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">02</span>
                    <h3>No Guaranteed Business Results</h3>
                  </div>
                  <p>
                    <strong>Clear Business Realities:</strong> Climate Change Digital Labs does not promise or guarantee specific business, financial, or commercial outcomes. We do not guarantee:
                  </p>
                  <ul>
                    <li>Specific sales revenue, turnover, or gross margin figures.</li>
                    <li>Guaranteed venture capital investment or angel funding.</li>
                    <li>User acquisition counts, conversion rates, or customer retention metrics.</li>
                    <li>App store rankings or download volumes.</li>
                  </ul>
                  <p>
                    Any metrics highlighted in case studies (e.g., “+185% match rate”, “3.4x inquiries”, “&lt;250ms execution”) represent historical data and client-reported metrics achieved under specific project conditions. Past performance is no guarantee of future results for other products.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">03</span>
                    <h3>Digital Marketing &amp; SEO Results</h3>
                  </div>
                  <p>
                    While CCDL conducts technical SEO audits, optimizes Core Web Vitals, implements semantic schema data, and adheres to white-hat search engine guidelines, <strong>we do not guarantee #1 rankings on Google</strong> or specific keyword search positions.
                  </p>
                  <p>
                    Search engine ranking algorithms, third-party competitor bidding, and market dynamics are subject to continuous change outside the control of any digital agency.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">04</span>
                    <h3>Development Estimates</h3>
                  </div>
                  <p>
                    All delivery timelines, sprint schedules, and architectural cost models provided during discovery are professional engineering estimates based on initial project parameters.
                  </p>
                  <p>
                    Final delivery schedules are influenced by client feedback speed, scope adjustments, third-party API availability, and unforeseen technical dependencies.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">05</span>
                    <h3>Third-Party Platforms and APIs</h3>
                  </div>
                  <p>
                    Our software products may integrate with third-party software, cloud infrastructure providers (e.g., AWS, GCP, Cloudflare, Vercel, Supabase), and external APIs (e.g., Stripe, PayPal, OpenAI, Google Maps).
                  </p>
                  <p>
                    CCDL assumes no liability for service disruptions, rate limiting, pricing increases, security breaches, or API deprecations caused by third-party providers.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">06</span>
                    <h3>Website Information &amp; Code Snippets</h3>
                  </div>
                  <p>
                    Technical code samples, articles, and architectural patterns shared on our website and thought leadership dispatches are provided “as-is” for informational purposes. Implementation of any architectural pattern in production environments should be validated against your specific security and performance requirements.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">07</span>
                    <h3>External Links</h3>
                  </div>
                  <p>
                    Our website may contain links to external third-party websites, design platforms (e.g., Dribbble, Behance), code repositories (e.g., GitHub), or client websites.
                  </p>
                  <p>
                    CCDL has no control over the content, privacy practices, or availability of external websites, and the inclusion of external links does not imply endorsement.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">08</span>
                    <h3>Client-Provided Content</h3>
                  </div>
                  <p>
                    The Client warrants that all text, imagery, trademarks, logos, audio files, databases, and code supplied to CCDL for incorporation into projects are either owned by the Client or licensed with appropriate commercial permissions.
                  </p>
                  <p>
                    CCDL disclaims all liability for copyright, trademark, or intellectual property violations resulting from client-provided assets.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">09</span>
                    <h3>Intellectual Property &amp; Trademarks</h3>
                  </div>
                  <p>
                    All third-party brand names, technology frameworks (e.g., React, Next.js, TypeScript, Figma, Tailwind CSS), and trademarks mentioned on this website remain the property of their respective owners. Their mention does not imply affiliation or sponsorship.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">10</span>
                    <h3>Professional Advice Disclaimer</h3>
                  </div>
                  <p>
                    Nothing contained on this website or discussed during architectural discovery constitutes legal, financial, tax, or corporate regulatory advice. Clients should consult their own qualified legal and financial advisors regarding regulatory compliance in their respective business sectors.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">11</span>
                    <h3>Limitation of Information</h3>
                  </div>
                  <p>
                    To the fullest extent permitted by law, Climate Change Digital Labs shall not be liable for any direct, indirect, incidental, punitive, or consequential damages resulting from the use of our website, reliance on website materials, or technical implementations.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">12</span>
                    <h3>Contact Information</h3>
                  </div>
                  <div className="footer-tagline-block">
                    <span><strong>Agency:</strong> Climate Change Digital Labs</span>
                    <span><strong>Jurisdiction:</strong> Registered in India</span>
                    <span><strong>Email:</strong> climatechangedigitallabs@gmail.com</span>
                    <span><strong>Phone:</strong> +91 78520 52323 | +91 80058 73764</span>
                    <span><strong>Tagline:</strong> “Building for the World”</span>
                  </div>
                </div>
              </div>
            )}

            {/* DOCUMENT 5: LEGAL & BUSINESS TRANSPARENCY */}
            {currentDoc === 'legal-business-transparency' && (
              <div className="legal-content-body">
                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">01</span>
                    <h3>About Climate Change Digital Labs</h3>
                  </div>
                  <p>
                    Climate Change Digital Labs (<strong>“CCDL”</strong>) is a focused Global Digital Product &amp; Software Collective registered in India.
                  </p>
                  <p>
                    We operate with an uncompromising commitment to engineering craft, mathematical layout precision, scalable software architecture, and transparent business ethics. We build production-ready digital products for venture-backed founders, ambitious startups, and established enterprises across the globe under our foundational motto: <em>“Building for the World.”</em>
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">02</span>
                    <h3>Our Commitment to Transparency</h3>
                  </div>
                  <p>
                    We believe that trust is earned through clarity, reliability, and accountability. In an industry frequently clouded by vague scopes, undisclosed markups, and exaggerated promises, Climate Change Digital Labs holds itself to clear, unambiguous standards.
                  </p>
                  <p>
                    We are committed to transparent and responsible business practices across every stage of client engagement. We do not intentionally misrepresent our services, pricing, capabilities, or deliverables.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">03</span>
                    <h3>Clear Project Scope</h3>
                  </div>
                  <p>
                    We aim to communicate all applicable costs, deliverables, and project requirements clearly before work begins. Every engagement is governed by an explicit Scope of Work (SOW) articulating:
                  </p>
                  <ul>
                    <li>Specific sprint milestones, wireframes, and design token libraries.</li>
                    <li>Technical architecture, component structures, and database schemas.</li>
                    <li>Agreed delivery schedules and sprint dependencies.</li>
                    <li>Explicit boundaries separating included scope from future backlog enhancements.</li>
                  </ul>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">04</span>
                    <h3>Transparent Pricing</h3>
                  </div>
                  <p>
                    We practice transparent, predictable commercial pricing. We do not engage in bait-and-switch estimates or surprise administrative invoices.
                  </p>
                  <p>
                    When you receive a project quotation from CCDL, you receive a detailed breakdown of senior engineering hours, UI/UX design allocation, and quality assurance phases. Any proposed change in project direction is evaluated and quoted before execution.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">05</span>
                    <h3>Development Charges</h3>
                  </div>
                  <p>
                    Our development charges reflect the focused effort of experienced senior software architects, product designers, and creative engineers.
                  </p>
                  <p>
                    We operate under a strict <strong>Zero Junior Outsourcing</strong> policy. We do not delegate client projects to unvetted subcontractors or third-party sweatshops. Every line of TypeScript, React component, and Figma layout is designed and authored by vetted collective craftspeople.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">06</span>
                    <h3>Third-Party Costs Clarified</h3>
                  </div>
                  <p>
                    We maintain absolute clarity between agency development fees and third-party operational costs:
                  </p>
                  <ul>
                    <li>Development charges cover the creation of custom code, design tokens, and software architecture.</li>
                    <li>Hosting, cloud compute (AWS/GCP/Cloudflare/Vercel), domain names, database tiers, and paid APIs are third-party operational expenses.</li>
                    <li>We advise clients to maintain direct billing relationships with cloud providers so they retain full sovereignty over their digital infrastructure.</li>
                  </ul>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">07</span>
                    <h3>No Misleading Promises</h3>
                  </div>
                  <p>
                    We actively reject sensationalized claims, vanity promises, and marketing hype:
                  </p>
                  <ul>
                    <li>We never promise “guaranteed #1 Google search ranking in 7 days.”</li>
                    <li>We never claim “100% fraud-free transactions” or “zero risk.”</li>
                    <li>We never fabricate customer reviews, awards, or government accreditations.</li>
                    <li>We present empirical benchmarks, realistic engineering trade-offs, and transparent timelines.</li>
                  </ul>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">08</span>
                    <h3>Client Communication Standards</h3>
                  </div>
                  <p>
                    We communicate directly, candidly, and promptly:
                  </p>
                  <ul>
                    <li>Active clients are provided dedicated technical points of contact and direct Slack/WhatsApp channels.</li>
                    <li>We conduct regular milestone demonstrations and live staging reviews.</li>
                    <li>We strive for sub-2-hour turnaround times for urgent project inquiries during business days.</li>
                  </ul>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">09</span>
                    <h3>Client Data and Confidentiality</h3>
                  </div>
                  <p>
                    We protect client confidentiality with institutional diligence. All project repositories, database schemas, product roadmaps, and business logic are safeguarded through:
                  </p>
                  <ul>
                    <li>Standard bilateral Non-Disclosure Agreements (NDAs).</li>
                    <li>Air-gapped repository access with hardware 2FA enforcement.</li>
                    <li>Strict internal access controls ensuring only assigned engineers access client codebases.</li>
                    <li>Zero selling, leasing, or commercial sharing of client information.</li>
                  </ul>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">10</span>
                    <h3>Intellectual Property (IP) Ownership</h3>
                  </div>
                  <p>
                    We believe clients should own the software they fund. Upon settlement of agreed development charges, 100% of the custom source code, design assets, and production deliverables belong irrevocably to the Client.
                  </p>
                  <p>
                    We do not charge recurring licensing fees or royalties for custom code built specifically for your project.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">11</span>
                    <h3>Ethical Technology Practices</h3>
                  </div>
                  <p>
                    We build software according to rigorous ethical guidelines:
                  </p>
                  <ul>
                    <li><strong>Web Accessibility:</strong> We strive to meet WCAG AA standards for keyboard navigation, screen reader support, and color contrast.</li>
                    <li><strong>Clean Code:</strong> We prioritize modular, maintainable, self-documenting code with zero throwaway hacks.</li>
                    <li><strong>No Dark Patterns:</strong> We do not engineer deceptive user flows, hidden checkout additions, or artificial cancellation barriers.</li>
                    <li><strong>Sustainable Performance:</strong> We optimize asset sizes and bundle trees to minimize client device battery drain and cloud carbon footprints.</li>
                  </ul>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">12</span>
                    <h3>Prohibited Activities</h3>
                  </div>
                  <p>
                    CCDL strictly declines and terminates engagements involving unlawful, deceptive, or harmful activities, including financial fraud, malicious software, unauthorized surveillance, hate speech, or copyright infringement.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">13</span>
                    <h3>Complaints and Dispute Resolution</h3>
                  </div>
                  <p>
                    If you ever experience a concern regarding project pacing, communication, or code quality, we encourage direct escalation to our founding leadership.
                  </p>
                  <p>
                    We commit to auditing the issue against agreed SOW milestones within two (2) business days and initiating an expedited 14-day rectification sprint to resolve verified discrepancies.
                  </p>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">14</span>
                    <h3>Official Business &amp; Contact Details</h3>
                  </div>
                  <p>
                    For all official communications, legal correspondence, and business inquiries:
                  </p>
                  <div className="footer-tagline-block" style={{ marginTop: '1rem' }}>
                    <span><strong>Agency:</strong> Climate Change Digital Labs</span>
                    <span><strong>Entity Jurisdiction:</strong> Registered in India</span>
                    <span><strong>Official Inquiries:</strong> climatechangedigitallabs@gmail.com</span>
                    <span><strong>Direct Phone Line 1:</strong> +91 78520 52323</span>
                    <span><strong>Direct Phone Line 2:</strong> +91 80058 73764</span>
                    <span><strong>Positioning:</strong> Global Digital Product &amp; Software Collective</span>
                    <span><strong>Tagline:</strong> “Building for the World”</span>
                  </div>
                </div>

                <div className="legal-clause-block">
                  <div className="legal-clause-header">
                    <span className="legal-clause-num">15</span>
                    <h3>Transparency Statement</h3>
                  </div>
                  <p style={{ fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--ink)' }}>
                    “We operate with the firm conviction that trust is earned through consistent engineering craftsmanship, honest communication, and transparent business stewardship. Building for the world means holding ourselves to the highest global standard of professional integrity.”
                  </p>
                  <p style={{ textAlign: 'right', fontWeight: 700, color: 'var(--muted)', marginTop: '0.5rem' }}>
                    — Founding Collective, Climate Change Digital Labs
                  </p>
                </div>
              </div>
            )}

            {/* Quick Contact & Action Card */}
            <div className="legal-rights-action-card">
              <div className="legal-action-content">
                <h3>Need direct clarification on our policies or ready to start a project?</h3>
                <p>
                  Reach out to Climate Change Digital Labs directly. We respond to inquiries within 2 hours during business cycles.
                </p>
              </div>
              <div className="legal-action-buttons-group">
                <a
                  href="mailto:climatechangedigitallabs@gmail.com"
                  className="legal-action-btn legal-action-btn-primary"
                >
                  <Mail size={16} />
                  <span>Email Our Collective</span>
                </a>
                <a
                  href="tel:+917852052323"
                  className="legal-action-btn legal-action-btn-secondary"
                >
                  <Phone size={16} />
                  <span>Call +91 78520 52323</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
