import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Layers,
  ShieldCheck,
  Zap,
  Code2,
  Clock,
  Sparkles,
  PhoneCall,
  MessageSquare,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Target,
  Award,
  Globe
} from 'lucide-react';
import { ServiceDetail, SEO_SERVICES_MAP } from '../lib/seoData';
import { useSEO } from '../lib/useSEO';

interface ServiceDetailPageProps {
  service: ServiceDetail;
  onNavigate: (route: string) => void;
  onOpenConsultation?: () => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  service,
  onNavigate,
  onOpenConsultation
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Dynamic SEO Injection for Google Crawlers and Live Users
  useSEO({
    title: service.seoTitle,
    description: service.metaDesc,
    keywords: `${service.primaryKeyword}, ${service.secondaryKeywords.join(', ')}`,
    canonicalUrl: `https://selmedicdigitallabs.com/services/${service.slug}`,
    ogType: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          '@id': `https://selmedicdigitallabs.com/services/${service.slug}#service`,
          'name': service.title,
          'serviceType': service.shortTitle,
          'provider': {
            '@type': 'Organization',
            'name': 'Selmedic Digital Labs',
            'url': 'https://selmedicdigitallabs.com'
          },
          'description': service.metaDesc,
          'areaServed': [
            { '@type': 'Country', 'name': 'India' },
            { '@type': 'Country', 'name': 'United States' },
            { '@type': 'Country', 'name': 'United Kingdom' },
            { '@type': 'Country', 'name': 'United Arab Emirates' }
          ],
          'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': service.title,
            'itemListElement': service.features.map((f, i) => ({
              '@type': 'Offer',
              'itemOffered': {
                '@type': 'Service',
                'name': f.title,
                'description': f.desc
              }
            }))
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `https://selmedicdigitallabs.com/services/${service.slug}#breadcrumb`,
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://selmedicdigitallabs.com/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': 'Services',
              'item': 'https://selmedicdigitallabs.com/services'
            },
            {
              '@type': 'ListItem',
              'position': 3,
              'name': service.shortTitle,
              'item': `https://selmedicdigitallabs.com/services/${service.slug}`
            }
          ]
        },
        {
          '@type': 'FAQPage',
          '@id': `https://selmedicdigitallabs.com/services/${service.slug}#faq`,
          'mainEntity': service.faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.q,
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': faq.a
            }
          }))
        }
      ]
    }
  });

  return (
    <div className="service-detail-page w-full min-h-screen bg-[#f6f5f2] dark:bg-[#090c13] text-[#0d1017] dark:text-[#f3f5f9] pt-24 pb-20 transition-colors duration-300">
      {/* 1. Breadcrumbs Navigation for SEO Hierarchy */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6">
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-mono tracking-wider text-[#6e7587] dark:text-[#8b93a7]">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            HOME
          </button>
          <span>/</span>
          <button
            onClick={() => onNavigate('services')}
            className="hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
          >
            SERVICES
          </button>
          <span>/</span>
          <span className="text-[#0d1017] dark:text-[#f3f5f9] font-bold uppercase truncate max-w-[200px] sm:max-w-none">
            {service.shortTitle}
          </span>
        </nav>
      </div>

      {/* 2. Hero Section */}
      <header className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="border border-[#e2dfd7] dark:border-[#1f2637] bg-white/70 dark:bg-[#0f1422]/80 backdrop-blur-md p-6 sm:p-10 lg:p-12 shadow-sm relative overflow-hidden">
          {/* Subtle decorative background accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 dark:bg-cyan-500/5 blur-3xl pointer-events-none rounded-full" />

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-mono tracking-wider uppercase font-bold bg-blue-50 dark:bg-cyan-950/40 text-blue-700 dark:text-cyan-400 border border-blue-200 dark:border-cyan-800/60">
              <Sparkles className="w-3 h-3" />
              {service.tag}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 text-[11px] font-mono tracking-wider uppercase text-[#6e7587] dark:text-[#8b93a7] border border-[#e2dfd7] dark:border-[#222b40]">
              <Globe className="w-3 h-3 text-emerald-500" />
              INDIA HQ • GLOBAL DELIVERY
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6 text-[#0d1017] dark:text-[#f3f5f9]">
            {service.heroHeadline}
          </h1>

          <p className="text-base sm:text-lg text-[#555d71] dark:text-[#9ea7bc] max-w-3xl leading-relaxed mb-8">
            {service.heroSubheadline}
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-[#e2dfd7] dark:border-[#1f2637] mb-8">
            {service.keyBenefits.map((benefit, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-cyan-400 font-mono">
                  {benefit.stat || '99.9%'}
                </div>
                <div className="text-xs font-semibold text-[#0d1017] dark:text-[#e4e7ee]">
                  {benefit.title}
                </div>
              </div>
            ))}
          </div>

          {/* Conversion CTA Group */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => onOpenConsultation ? onOpenConsultation() : onNavigate('contact')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider bg-blue-600 hover:bg-blue-700 dark:bg-cyan-500 dark:hover:bg-cyan-400 text-white dark:text-[#090c13] transition-all shadow-md active:scale-95"
            >
              <PhoneCall className="w-4 h-4" />
              Book Discovery Session
            </button>
            <a
              href="https://wa.me/917852052323?text=Hello%20Selmedic%20Digital%20Labs%2C%20I%20am%20interested%20in%20your%20services"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-700 text-white transition-all shadow-md active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Direct Chat
            </a>
            <button
              onClick={() => onNavigate('portfolio')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider border border-[#d2cebe] dark:border-[#2e374d] hover:bg-[#eae7df] dark:hover:bg-[#161c2d] transition-all"
            >
              View Case Studies
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* 3. Deep Service Architecture & Challenges Solved */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 space-y-6">
            <div className="border border-[#e2dfd7] dark:border-[#1f2637] bg-white/70 dark:bg-[#0f1422]/80 p-8">
              <span className="text-[11px] font-mono tracking-widest text-blue-600 dark:text-cyan-400 uppercase font-bold block mb-2">
                EXECUTIVE OVERVIEW
              </span>
              <h2 className="text-2xl font-bold tracking-tight mb-4">
                Engineered for High-Scale Production
              </h2>
              <p className="text-sm sm:text-base text-[#555d71] dark:text-[#9ea7bc] leading-relaxed mb-6">
                {service.overview}
              </p>

              <h3 className="text-base font-bold uppercase tracking-wider font-mono mb-4 text-[#0d1017] dark:text-[#f3f5f9] flex items-center gap-2">
                <Target className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                Critical Challenges We Eliminate
              </h3>
              <ul className="space-y-3">
                {service.challengesSolved.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#434b5d] dark:text-[#b4bccf]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Core Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="border border-[#e2dfd7] dark:border-[#1f2637] bg-white/50 dark:bg-[#0f1422]/50 p-6 space-y-2"
                >
                  <div className="w-8 h-8 rounded bg-blue-50 dark:bg-cyan-950/40 border border-blue-200 dark:border-cyan-800/60 flex items-center justify-center text-blue-600 dark:text-cyan-400 mb-3">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold tracking-tight text-[#0d1017] dark:text-[#f3f5f9]">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#555d71] dark:text-[#9ea7bc] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Why Choose Selmedic Digital Labs + Tech Stack */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[#e2dfd7] dark:border-[#1f2637] bg-white/70 dark:bg-[#0f1422]/80 p-8 space-y-6">
              <span className="text-[11px] font-mono tracking-widest text-blue-600 dark:text-cyan-400 uppercase font-bold block">
                WHY OUR AGENCY
              </span>
              <h2 className="text-xl font-bold tracking-tight">
                The Indian Engineering & Global Standard Advantage
              </h2>

              <div className="space-y-4">
                {service.whyChooseUs.map((reason, idx) => (
                  <div key={idx} className="border-l-2 border-blue-600 dark:border-cyan-400 pl-4 py-1 space-y-1">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#0d1017] dark:text-[#f3f5f9]">
                      {reason.title}
                    </h3>
                    <p className="text-xs text-[#555d71] dark:text-[#9ea7bc] leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Chips */}
              <div className="pt-4 border-t border-[#e2dfd7] dark:border-[#1f2637]">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider mb-3 text-[#6e7587] dark:text-[#8b93a7] flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                  Production Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-[11px] font-mono font-medium bg-[#eae7df] dark:bg-[#161c2d] text-[#0d1017] dark:text-[#d1d7e5] border border-[#d2cebe] dark:border-[#2a3349]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Inbound Direct Contact Widget */}
            <div className="border border-blue-200 dark:border-cyan-800/60 bg-blue-50/50 dark:bg-cyan-950/20 p-6 space-y-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-500" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 dark:text-cyan-300">
                  NDA & IP Security Guarantee
                </span>
              </div>
              <p className="text-xs text-[#434b5d] dark:text-[#a0a9bd] leading-relaxed">
                We sign mutual Non-Disclosure Agreements (NDAs) before discovery. You retain 100% intellectual property ownership of all repositories and design systems.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full py-2.5 text-xs font-mono font-bold uppercase tracking-wider bg-[#0d1017] dark:bg-white text-white dark:text-[#0d1017] hover:opacity-90 transition-opacity text-center"
                >
                  Request Technical Estimate
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 5-Stage Engineering Lifecycle Process */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="border border-[#e2dfd7] dark:border-[#1f2637] bg-white/70 dark:bg-[#0f1422]/80 p-8 sm:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-blue-600 dark:text-cyan-400 uppercase font-bold block mb-1">
                SPRINT BLUEPRINT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Our 5-Stage Structured Delivery Process
              </h2>
            </div>
            <span className="text-xs font-mono text-[#6e7587] dark:text-[#8b93a7] border border-[#e2dfd7] dark:border-[#222b40] px-3 py-1.5">
              AVERAGE SPRINT: 4 TO 8 WEEKS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.process.map((stage, idx) => (
              <div
                key={idx}
                className="border border-[#e2dfd7] dark:border-[#1f2637] bg-white/40 dark:bg-[#090c13]/40 p-5 space-y-3 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xl font-mono font-extrabold text-blue-600 dark:text-cyan-400">
                      {stage.step}
                    </span>
                    <span className="text-[10px] font-mono text-[#6e7587] dark:text-[#8b93a7] bg-[#eae7df] dark:bg-[#161c2d] px-2 py-0.5">
                      {stage.duration}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider font-mono text-[#0d1017] dark:text-[#f3f5f9] mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[#555d71] dark:text-[#9ea7bc] leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Comprehensive FAQs with JSON-LD Schema */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="border border-[#e2dfd7] dark:border-[#1f2637] bg-white/70 dark:bg-[#0f1422]/80 p-8 sm:p-10">
          <div className="mb-8">
            <span className="text-[11px] font-mono tracking-widest text-blue-600 dark:text-cyan-400 uppercase font-bold block mb-1">
              QUESTIONS & TRANSPARENCY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Frequently Asked Questions About {service.shortTitle}
            </h2>
          </div>

          <div className="space-y-3">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-[#e2dfd7] dark:border-[#1f2637] bg-white/50 dark:bg-[#090c13]/50 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base hover:bg-[#eae7df]/50 dark:hover:bg-[#161c2d]/50 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#6e7587] dark:text-[#8b93a7] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600 dark:text-cyan-400' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="px-5 pb-5 text-xs sm:text-sm text-[#555d71] dark:text-[#9ea7bc] leading-relaxed border-t border-[#e2dfd7] dark:border-[#1f2637] pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Interlinked Related Services */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
        <div className="mb-6">
          <span className="text-[11px] font-mono tracking-widest text-[#6e7587] dark:text-[#8b93a7] uppercase font-bold block mb-1">
            CROSS-DISCIPLINARY CAPABILITIES
          </span>
          <h2 className="text-xl font-bold tracking-tight">
            Complementary Software & Design Services
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {service.relatedServices.map((relSlug, idx) => {
            const rel = SEO_SERVICES_MAP[relSlug];
            if (!rel) return null;
            return (
              <button
                key={idx}
                onClick={() => onNavigate(`service-${rel.slug}`)}
                className="text-left border border-[#e2dfd7] dark:border-[#1f2637] bg-white/60 dark:bg-[#0f1422]/60 p-5 hover:border-blue-500 dark:hover:border-cyan-400 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-blue-600 dark:text-cyan-400 uppercase font-bold block">
                    {rel.category}
                  </span>
                  <h3 className="text-sm font-bold group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {rel.shortTitle}
                  </h3>
                  <p className="text-xs text-[#555d71] dark:text-[#9ea7bc] line-clamp-2">
                    {rel.metaDesc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#e2dfd7] dark:border-[#1f2637] flex items-center justify-between text-xs font-mono text-[#6e7587] dark:text-[#8b93a7] group-hover:text-blue-600 dark:group-hover:text-cyan-400">
                  <span>EXPLORE SERVICE</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 7. Conversion Footer Banner */}
      <footer className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="border border-blue-300 dark:border-cyan-800 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-[#0f1a2e] dark:via-[#10223b] dark:to-[#09101c] p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="text-xs font-mono tracking-widest text-cyan-200 uppercase font-bold">
              START YOUR PROJECT TODAY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
              Ready to build high-impact {service.shortTitle.toLowerCase()} with Selmedic Digital Labs?
            </h2>
            <p className="text-sm text-blue-100 dark:text-slate-300 leading-relaxed">
              Our founding engineering and UI/UX design collective is ready to scope your requirements and provide an itemized sprint roadmap within 4 hours.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenConsultation ? onOpenConsultation() : onNavigate('contact')}
                className="px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider bg-white text-blue-900 hover:bg-slate-100 transition-colors shadow-md"
              >
                Schedule Architecture Review
              </button>
              <a
                href="tel:+917852052323"
                className="px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-wider border border-white/40 hover:bg-white/10 transition-colors flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                +91 78520 52323
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
