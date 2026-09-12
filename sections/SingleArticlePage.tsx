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
    title: `${post.title} | CCDL — Climate Change Digital Labs`,
    description: post.excerpt,
    keywords: post.tags ? post.tags.join(', ') : `${post.category}, CCDL, software architecture`,
    canonicalUrl: `https://climatechangedigitallabs.com/article/${post.slug}`,
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
        name: 'Climate Change Digital Labs',
        alternateName: 'CCDL',
        url: 'https://climatechangedigitallabs.com',
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
      <article className="single-article-container">
        {/* Navigation & Breadcrumb Row */}
        <div className="article-nav-row">
          <button
            onClick={() => onNavigate('blog')}
            className="article-back-button"
            aria-label="Back to all articles"
          >
            <ArrowLeft size={16} />
            <span>Back to All Dispatches</span>
          </button>

          <div className="article-breadcrumbs">
            <span onClick={() => onNavigate('home')} className="article-crumb-link">
              HOME
            </span>
            <span>/</span>
            <span onClick={() => onNavigate('blog')} className="article-crumb-link">
              BLOG
            </span>
            <span>/</span>
            <span className="article-crumb-current">
              {post.category.toUpperCase()}
            </span>
          </div>
        </div>

        {/* Header Metadata Pill Bar */}
        <header className="article-header">
          <div className="article-meta-badges">
            <span className="article-category-badge">
              <span className="article-pulse-dot" />
              <span>{post.category}</span>
            </span>
            <span className="article-meta-chip">
              <Calendar size={13} />
              <span>{post.date}</span>
            </span>
            <span className="article-meta-chip">
              <Clock size={13} />
              <span>{post.readTime}</span>
            </span>
          </div>

          {/* Main Display Headline */}
          <h1 className="article-main-heading">
            {post.title}
          </h1>

          {/* Lead Intro Excerpt */}
          <p className="article-lead-text">
            {post.excerpt}
          </p>

          {/* Author Card & Social Share Bar */}
          <div className="article-author-share-bar">
            <div className="author-identity-wrap">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="author-avatar"
              />
              <div className="author-details">
                <div className="author-name">
                  {post.author.name}
                </div>
                <div className="author-role">
                  {post.author.role} • <span>CCDL Studio</span>
                </div>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div className="article-share-actions">
              <span className="share-label">Share:</span>
              <button
                onClick={handleShare}
                className="share-btn"
                title="Copy link to clipboard"
              >
                {copied ? <Check size={14} style={{ color: '#10b981' }} /> : <Share2 size={14} />}
                <span>{copied ? 'Link Copied!' : 'Copy Link'}</span>
              </button>

              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - Read more: ${typeof window !== 'undefined' ? window.location.href : ''}`)}`}
                target="_blank"
                rel="noreferrer"
                className="share-social-btn whatsapp-share"
                title="Share on WhatsApp"
                aria-label="Share on WhatsApp"
              >
                <MessageCircle size={16} />
              </a>

              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noreferrer"
                className="share-social-btn twitter-share"
                title="Share on X"
                aria-label="Share on X"
              >
                <Twitter size={16} />
              </a>

              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                target="_blank"
                rel="noreferrer"
                className="share-social-btn linkedin-share"
                title="Share on LinkedIn"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </header>

        {/* Featured Cover Media */}
        <figure className="article-hero-figure">
          <div className="article-hero-media">
            <img
              src={post.coverImage || defaultCover}
              alt={post.title}
            />
            <div className="article-hero-media-overlay" />
          </div>
          <figcaption className="article-hero-figcaption">
            <span>Fig 1.0 // Architectural breakdown &amp; system telemetry</span>
            <span>CCDL ENGINEERING ARCHIVE</span>
          </figcaption>
        </figure>

        {/* Core Architectural Takeaways Callout Card */}
        {post.takeaways && post.takeaways.length > 0 && (
          <div className="article-takeaways-card">
            <div className="takeaways-header">
              <Sparkles size={20} style={{ color: 'var(--blue)', flexShrink: 0 }} />
              <span>Key Enterprise Takeaways</span>
            </div>
            <ul className="takeaways-list">
              {post.takeaways.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle2 size={18} style={{ color: 'var(--blue)', flexShrink: 0, marginTop: '2px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Content Sections */}
        <div className="article-body-content">
          {post.contentSections.map((section, idx) => (
            <section key={idx} className="article-section-block">
              <h2>
                {section.heading}
              </h2>

              <div className="article-paragraphs">
                {section.body.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>

              {/* Callout Quote Block */}
              {section.callout && (
                <blockquote className="article-quote-block">
                  <div className="article-quote-symbol">“</div>
                  <p>{section.callout}</p>
                </blockquote>
              )}

              {/* Syntax Highlighted Code Box with Mac Window Controls & Copy */}
              {section.codeSnippet && (
                <div className="article-code-wrapper">
                  <div className="code-box-header">
                    <div className="code-mac-controls">
                      <span className="code-mac-dot" style={{ background: '#f43f5e' }} />
                      <span className="code-mac-dot" style={{ background: '#f59e0b' }} />
                      <span className="code-mac-dot" style={{ background: '#10b981' }} />
                      <span className="code-box-title">TypeScript / Production Architecture</span>
                    </div>
                    <button
                      onClick={() => handleCopySnippet(section.codeSnippet!, idx)}
                      className="copy-code-btn"
                    >
                      {copiedSnippetIndex === idx ? (
                        <>
                          <Check size={13} style={{ color: '#34d399' }} />
                          <span style={{ color: '#34d399' }}>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={13} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre>
                    <code>{section.codeSnippet}</code>
                  </pre>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Tags Cloud */}
        {post.tags && post.tags.length > 0 && (
          <div className="article-tags-wrap">
            <span className="article-tags-label">
              <Tag size={13} /> Topics:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="article-tag-chip"
                onClick={() => onNavigate('blog')}
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Author Bio Signature Box */}
        <div className="author-bio-signature">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="author-bio-avatar"
          />
          <div className="author-bio-copy">
            <span className="author-bio-badge">
              AUTHOR PERSPECTIVE
            </span>
            <h3 className="author-bio-name">{post.author.name}</h3>
            <div className="author-bio-role">{post.author.role}</div>
            <p className="author-bio-desc">
              {post.author.bio ||
                'Senior product architect specializing in mathematical design systems, resilient cloud infrastructure, and enterprise high-velocity software engineering.'}
            </p>
          </div>
        </div>

        {/* Explore Next Dispatch Recommendation Box */}
        {nextPost && (
          <div className="next-dispatch-card">
            <div className="next-copy">
              <span className="next-kicker">
                CONTINUE READING →
              </span>
              <h4 className="next-title">
                {nextPost.title}
              </h4>
              <p className="next-desc">
                {nextPost.excerpt}
              </p>
            </div>
            <button
              onClick={() => {
                onNavigate(`article/${nextPost.slug}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="button button-dark"
              style={{ cursor: 'pointer', flexShrink: 0 }}
            >
              <span>Read Next Dispatch</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* Related Dispatches Grid */}
        {relatedPosts.length > 0 && (
          <div className="related-dispatches-section">
            <div className="related-section-header">
              <div>
                <span className="related-header-kicker">
                  MORE FROM OUR COLLECTIVE
                </span>
                <h3 className="related-header-title">Related Dispatches</h3>
              </div>
              <button
                onClick={() => onNavigate('blog')}
                className="related-view-all-btn"
              >
                <span>View Complete Archive</span>
                <ArrowRight size={14} />
              </button>
            </div>

            <div className="related-grid">
              {relatedPosts.map((rel) => (
                <div
                  key={rel.slug}
                  onClick={() => {
                    onNavigate(`article/${rel.slug}`);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="related-card"
                >
                  <div>
                    <div className="related-card-media">
                      <img
                        src={rel.coverImage}
                        alt={rel.title}
                        loading="lazy"
                      />
                      <span className="related-card-category">
                        {rel.category}
                      </span>
                    </div>

                    <div className="related-card-meta">
                      <span>{rel.date}</span>
                      <span>•</span>
                      <span>{rel.readTime}</span>
                    </div>

                    <h4 className="related-card-title">
                      {rel.title}
                    </h4>

                    <p className="related-card-desc">
                      {rel.excerpt}
                    </p>
                  </div>

                  <div className="related-card-footer">
                    <span>Read Article</span>
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Consultation Callout CTA */}
        <div className="article-cta-box">
          <div className="article-cta-ambient" aria-hidden="true" />
          <div className="article-cta-inner">
            <span className="article-cta-pill">
              <Sparkles size={13} />
              <span>PARTNER WITH CCDL STUDIO</span>
            </span>
            <h3 className="article-cta-title">
              Ready to engineer your next high-impact product?
            </h3>
            <p className="article-cta-desc">
              Work directly with our senior collective to bring your product vision to market with
              mathematical precision, zero bloat, and sub-second performance.
            </p>
            <div className="article-cta-actions">
              <button
                onClick={() => onNavigate('contact')}
                className="button button-dark"
                style={{ cursor: 'pointer' }}
              >
                <PhoneCall size={15} />
                <span>Start a Project Brief</span>
                <ArrowUpRight size={16} />
              </button>
              <a
                href="https://wa.me/917852052323?text=Hello%20CCDL%2C%20I%20read%20your%20dispatch%20and%20want%20to%20consult%20with%20your%20team."
                target="_blank"
                rel="noopener noreferrer"
                className="button alien-hero-btn-outline"
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
