import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  Linkedin,
  MessageCircle,
  MessageSquare,
  PhoneCall,
  Share2,
  Sparkles,
  Tag,
  Twitter,
  User,
  Zap,
} from 'lucide-react';
import { BLOG_POSTS, BlogPost } from './BlogPage.tsx';
import { useSEO } from '../lib/useSEO.ts';

// Fallback image utility
const defaultCover = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=85&w=1400';

interface SingleArticlePageProps {
  slug?: string;
  onNavigate: (route: string) => void;
}

export const SingleArticlePage: React.FC<SingleArticlePageProps> = ({ slug, onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const [copiedSnippetIndex, setCopiedSnippetIndex] = useState<number | null>(null);

  // Reading scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Clean slug
  const cleanSlug = (slug || '')
    .trim()
    .replace(/^article\//, '')
    .replace(/^blog\//, '')
    .replace(/^insights\//, '')
    .replace(/\/$/, '');

  // Find post by slug or default to first post
  const post: BlogPost =
    BLOG_POSTS.find((p) => p.slug === cleanSlug) ||
    BLOG_POSTS.find((p) => p.slug.toLowerCase() === cleanSlug.toLowerCase()) ||
    BLOG_POSTS[0];

  // Related posts from other dispatches (excluding current post)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  // Next post for direct continuation
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const nextPost = BLOG_POSTS[(currentIndex + 1) % BLOG_POSTS.length];

  // Scroll to top on mount or when slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [post.slug]);

  // Dynamic SEO Injection
  useSEO({
    title: `${post.title} | Selmedic Digital Labs`,
    description: post.excerpt,
    keywords: post.tags ? post.tags.join(', ') : `${post.category}, software architecture`,
    canonicalUrl: `https://selmedicdigitallabs.com/article/${post.slug}`,
    ogImage: post.coverImage,
    ogType: 'article',
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      image: post.coverImage,
      datePublished: post.date,
      author: {
        '@type': 'Person',
        name: post.author.name,
        jobTitle: post.author.role,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Selmedic Digital Labs',
        url: 'https://selmedicdigitallabs.com',
      },
    },
  });

  const handleShare = () => {
    const url = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleCopySnippet = (code: string, idx: number) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code);
      setCopiedSnippetIndex(idx);
      setTimeout(() => setCopiedSnippetIndex(null), 2500);
    }
  };

  return (
    <div className="single-article-page-root" id="single-article-root">
      {/* Top Reading Progress Bar */}
      <motion.div
        {...({
          className: "reading-progress-bar",
          style: { scaleX },
          'aria-hidden': 'true'
        } as any)}
      />

      {/* Article Inner Container */}
      <article className="single-article-container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-24">
        {/* Navigation & Breadcrumb Row */}
        <div className="article-nav-row flex items-center justify-between flex-wrap gap-4 mb-8">
          <button
            onClick={() => onNavigate('blog')}
            className="article-back-button inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[var(--muted)] hover:text-[var(--blue)] transition-colors py-2 px-3 rounded-full hover:bg-[var(--paper-card)]"
            aria-label="Back to all articles"
          >
            <ArrowLeft size={16} />
            <span>Back to All Dispatches</span>
          </button>

          <div className="article-breadcrumbs hidden sm:flex items-center gap-2 text-xs font-mono text-[var(--muted)]">
            <span onClick={() => onNavigate('home')} className="hover:underline cursor-pointer">
              HOME
            </span>
            <span>/</span>
            <span onClick={() => onNavigate('blog')} className="hover:underline cursor-pointer">
              BLOG
            </span>
            <span>/</span>
            <span className="text-[var(--ink)] font-semibold truncate max-w-[220px]">
              {post.category.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Header Metadata Pill Bar */}
        <header className="article-header mb-10">
          <div className="article-meta-badges flex flex-wrap items-center gap-3 mb-6">
            <span className="article-category-badge inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              {post.category}
            </span>
            <span className="article-meta-chip inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[var(--muted)] bg-[var(--paper-card)] border border-[var(--line)]">
              <Calendar size={13} className="text-[var(--muted)]" />
              {post.date}
            </span>
            <span className="article-meta-chip inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[var(--muted)] bg-[var(--paper-card)] border border-[var(--line)]">
              <Clock size={13} className="text-[var(--muted)]" />
              {post.readTime}
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="article-main-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--ink)] leading-[1.14] mb-6">
            {post.title}
          </h1>

          {/* Lead Intro Excerpt */}
          <p className="article-lead-text text-lg sm:text-xl text-[var(--muted)] leading-relaxed mb-8 max-w-3xl">
            {post.excerpt}
          </p>

          {/* Author Card & Social Share Bar */}
          <div className="article-author-share-bar flex flex-wrap items-center justify-between gap-6 py-5 border-y border-[var(--line)]">
            <div className="author-identity-wrap flex items-center gap-3.5">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="author-avatar w-12 h-12 rounded-full object-cover border-2 border-white/20 shadow-sm"
              />
              <div className="author-details">
                <div className="author-name font-bold text-base text-[var(--ink)] leading-snug">
                  {post.author.name}
                </div>
                <div className="author-role text-xs sm:text-sm text-[var(--muted)]">
                  {post.author.role} • <span className="text-[var(--blue)] font-medium">CCDL Studio</span>
                </div>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div className="article-share-actions flex items-center gap-2">
              <span className="text-xs font-mono text-[var(--muted)] uppercase mr-1 hidden sm:inline-block">
                Share:
              </span>
              <button
                onClick={handleShare}
                className="share-btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--paper-card)] hover:bg-[var(--paper)] text-[var(--ink)] border border-[var(--line)] transition-all cursor-pointer shadow-sm hover:shadow"
                title="Copy link to clipboard"
              >
                {copied ? <Check size={14} className="text-emerald-500" /> : <Share2 size={14} />}
                <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
              </button>

              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - Read more: ${typeof window !== 'undefined' ? window.location.href : ''}`)}`}
                target="_blank"
                rel="noreferrer"
                className="share-social-btn p-2 rounded-full bg-[var(--paper-card)] hover:bg-emerald-500/10 text-[var(--muted)] hover:text-emerald-500 border border-[var(--line)] transition-colors"
                title="Share on WhatsApp"
                aria-label="Share on WhatsApp"
              >
                <MessageCircle size={15} />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noreferrer"
                className="share-social-btn p-2 rounded-full bg-[var(--paper-card)] hover:bg-sky-500/10 text-[var(--muted)] hover:text-sky-500 border border-[var(--line)] transition-colors"
                title="Share on X"
                aria-label="Share on X"
              >
                <Twitter size={15} />
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noreferrer"
                className="share-social-btn p-2 rounded-full bg-[var(--paper-card)] hover:bg-blue-600/10 text-[var(--muted)] hover:text-blue-600 border border-[var(--line)] transition-colors"
                title="Share on LinkedIn"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>
        </header>

        {/* Featured Cover Media */}
        <figure className="article-hero-figure mb-12 rounded-2xl sm:rounded-3xl overflow-hidden border border-[var(--line)] shadow-xl bg-[var(--paper-card)]">
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
            <img
              src={post.coverImage || defaultCover}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
          </div>
          <figcaption className="p-3 sm:px-5 sm:py-3 text-xs font-mono text-[var(--muted)] border-t border-[var(--line)] bg-[var(--paper-card)] flex items-center justify-between">
            <span>Fig 1.0 // Architectural breakdown &amp; system telemetry</span>
            <span>CCDL ENGINEERING ARCHIVE</span>
          </figcaption>
        </figure>

        {/* Core Architectural Takeaways Callout Card */}
        {post.takeaways && post.takeaways.length > 0 && (
          <div className="article-takeaways-card mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[var(--paper-card)] to-blue-500/5 border border-blue-500/25 shadow-md">
            <div className="takeaways-header flex items-center gap-2.5 mb-4 text-base sm:text-lg font-bold text-[var(--ink)]">
              <Sparkles size={20} className="text-blue-500 flex-shrink-0" />
              <span>Key Enterprise Takeaways</span>
            </div>
            <ul className="takeaways-list space-y-3">
              {post.takeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[var(--ink)] leading-relaxed">
                  <CheckCircle2 size={18} className="text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content Sections */}
        <div className="article-body-content space-y-12">
          {post.contentSections.map((section, idx) => (
            <section key={idx} className="article-section-block">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--ink)] mb-5">
                {section.heading}
              </h2>

              <div className="article-paragraphs space-y-4 text-base sm:text-lg text-[var(--ink)]/90 leading-[1.78]">
                {section.body.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Callout Quote Block */}
              {section.callout && (
                <blockquote className="article-quote-block my-8 p-6 sm:p-7 rounded-xl sm:rounded-2xl bg-[var(--paper-card)] border-l-4 border-[var(--blue)] shadow-sm">
                  <div className="text-3xl sm:text-4xl text-[var(--blue)] leading-none mb-2 font-serif">“</div>
                  <p className="text-base sm:text-lg font-medium italic text-[var(--ink)] leading-relaxed">
                    {section.callout}
                  </p>
                </blockquote>
              )}

              {/* Syntax Highlighted Code Box with Mac Window Controls & Copy */}
              {section.codeSnippet && (
                <div className="article-code-wrapper my-8 rounded-xl sm:rounded-2xl overflow-hidden border border-[var(--line)] bg-[#0c0f17] text-slate-100 shadow-xl">
                  <div className="code-box-header flex items-center justify-between px-4 py-2.5 bg-[#141926] border-b border-slate-800 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                      <span className="text-slate-400 ml-2 font-medium">TypeScript / Production Architecture</span>
                    </div>
                    <button
                      onClick={() => handleCopySnippet(section.codeSnippet!, idx)}
                      className="copy-code-btn inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer py-1 px-2 rounded hover:bg-slate-800"
                    >
                      {copiedSnippetIndex === idx ? (
                        <>
                          <Check size={13} className="text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="p-4 sm:p-6 overflow-x-auto text-xs sm:text-sm font-mono text-slate-200 leading-relaxed scrollbar-thin">
                    <code>{section.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Tags Cloud */}
        {post.tags && post.tags.length > 0 && (
          <div className="article-tags-wrap my-10 pt-8 border-t border-[var(--line)] flex items-center flex-wrap gap-2">
            <span className="text-xs font-mono text-[var(--muted)] uppercase mr-2 flex items-center gap-1">
              <Tag size={13} /> Topics:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="article-tag-chip px-3 py-1 rounded-full text-xs font-mono font-medium bg-[var(--paper-card)] border border-[var(--line)] text-[var(--muted)] hover:text-[var(--blue)] hover:border-[var(--blue)] transition-colors cursor-pointer"
                onClick={() => onNavigate('blog')}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Signature Box */}
        <div className="author-bio-signature my-12 p-6 sm:p-8 rounded-2xl bg-[var(--paper-card)] border border-[var(--line)] flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-sm">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-white/20 flex-shrink-0 shadow"
          />
          <div className="bio-copy flex-1">
            <span className="text-xs font-mono uppercase text-blue-500 font-bold tracking-wider">
              AUTHOR PERSPECTIVE
            </span>
            <h3 className="text-xl font-bold text-[var(--ink)] mt-0.5">{post.author.name}</h3>
            <p className="text-sm font-medium text-[var(--muted)] mb-2">{post.author.role}</p>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              {post.author.bio ||
                'Senior product architect specializing in mathematical design systems, resilient cloud infrastructure, and enterprise high-velocity software engineering.'}
            </p>
          </div>
        </div>

        {/* Explore Next Dispatch Recommendation Box */}
        {nextPost && (
          <div className="next-dispatch-card my-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[var(--paper-card)] via-[var(--paper-card)] to-blue-500/5 border border-[var(--line)] shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="next-copy max-w-xl">
              <span className="text-xs font-mono uppercase text-[var(--muted)] font-bold tracking-wider block mb-1">
                CONTINUE READING →
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-[var(--ink)] leading-snug">
                {nextPost.title}
              </h4>
              <p className="text-xs sm:text-sm text-[var(--muted)] mt-1.5 line-clamp-2">
                {nextPost.excerpt}
              </p>
            </div>
            <button
              onClick={() => {
                onNavigate(`article/${nextPost.slug}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="button button-dark flex-shrink-0 inline-flex items-center gap-2 text-sm cursor-pointer"
            >
              <span>Read Next Dispatch</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* Related Dispatches Grid */}
        {relatedPosts.length > 0 && (
          <div className="related-dispatches-section my-16 pt-12 border-t border-[var(--line)]">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div>
                <span className="text-xs font-mono text-blue-500 uppercase tracking-wider font-bold block mb-1">
                  MORE FROM OUR COLLECTIVE
                </span>
                <h3 className="text-2xl font-bold text-[var(--ink)]">Related Dispatches</h3>
              </div>
              <button
                onClick={() => onNavigate('blog')}
                className="text-xs sm:text-sm font-semibold text-[var(--muted)] hover:text-[var(--blue)] inline-flex items-center gap-1.5"
              >
                <span>View Complete Archive</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  onClick={() => {
                    onNavigate(`article/${rel.slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="related-card group cursor-pointer p-5 rounded-2xl bg-[var(--paper-card)] border border-[var(--line)] hover:border-[var(--blue)] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 bg-slate-900">
                      <img
                        src={rel.coverImage}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase bg-black/60 backdrop-blur-md text-white border border-white/10">
                        {rel.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono text-[var(--muted)] mb-2">
                      <span>{rel.date}</span>
                      <span>•</span>
                      <span>{rel.readTime}</span>
                    </div>

                    <h4 className="text-base font-bold text-[var(--ink)] group-hover:text-[var(--blue)] transition-colors line-clamp-2 mb-2 leading-snug">
                      {rel.title}
                    </h4>

                    <p className="text-xs text-[var(--muted)] line-clamp-2 mb-4 leading-relaxed">
                      {rel.excerpt}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[var(--line)] flex items-center justify-between text-xs font-semibold text-[var(--muted)] group-hover:text-[var(--blue)]">
                    <span>Read Article</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Consultation Callout CTA */}
        <div className="article-cta-box mt-16 p-8 sm:p-12 rounded-3xl bg-[var(--paper-card)] border border-[var(--line)] shadow-2xl text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/10 pointer-events-none" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 mb-4">
              <Sparkles size={13} />
              PARTNER WITH CCDL STUDIO
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink)] tracking-tight mb-3">
              Ready to engineer your next high-impact product?
            </h3>
            <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mb-6">
              Work directly with our senior collective to bring your product vision to market with
              mathematical precision, zero bloat, and sub-second performance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => onNavigate('book-call')}
                className="button button-dark inline-flex items-center gap-2 cursor-pointer"
              >
                <PhoneCall size={15} />
                <span>Schedule Discovery Consultation</span>
                <ArrowUpRight size={16} />
              </button>
              <a
                href="https://wa.me/917852052323?text=Hello%20CCDL%2C%20I%20read%20your%20dispatch%20and%20want%20to%20consult%20with%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="button alien-hero-btn-outline inline-flex items-center gap-2"
              >
                <MessageSquare size={15} />
                <span>WhatsApp Architect</span>
              </a>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
