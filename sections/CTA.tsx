import React from 'react';
import { ArrowUpRight, MessageCircle, Sparkles, Zap, ShieldCheck, Clock, Mail } from 'lucide-react';
import TextReveal from '../components/TextReveal.tsx';
import ScrollReveal from '../components/ScrollReveal.tsx';

interface CTAProps {
  onNavigate?: (page: string) => void;
}

export default function CTA({ onNavigate }: CTAProps) {
  return (
    <section className="section-pad final-cta" id="home-cta-section">
      {/* Ambient background glow & architectural grid */}
      <div className="final-cta-ambient" aria-hidden="true">
        <div className="final-cta-glow-1" />
        <div className="final-cta-glow-2" />
        <div className="final-cta-grid-lines" />
      </div>

      <div className="final-cta-inner">
        {/* Top Meta Bar */}
        <div className="final-cta-topbar">
          <div
            className="final-cta-status-pill"
            onClick={() => onNavigate?.('contact')}
            style={{ cursor: 'pointer' }}
          >
            <span className="final-cta-live-dot" />
            <span className="final-cta-status-text">Studio Capacity: Accepting Q3/Q4 Projects</span>
          </div>
          <span className="final-cta-coord-tag">CLIMATE CHANGE DIGITAL LABS // INITIATION SUITE</span>
        </div>

        {/* Section Heading & Tagline */}
        <div className="final-cta-header">
          <span
            className="eyebrow final-cta-eyebrow"
            onClick={() => onNavigate?.('contact')}
            style={{ cursor: 'pointer' }}
          >
            Let's make something matter
          </span>

          <h2>
            <TextReveal>
              Have an ambitious idea? <em>Let's build it.</em>
            </TextReveal>
          </h2>

          <ScrollReveal delay={120}>
            <p className="final-cta-desc">
              Tell us what you're working on. We partner with ambitious founders, tech innovators,
              and enterprise leaders to turn vision into a flagship digital experience customers remember.
            </p>
          </ScrollReveal>
        </div>

        {/* Primary Action Buttons */}
        <ScrollReveal delay={200} className="final-cta-actions">
          <button
            onClick={() => onNavigate?.('contact')}
            className="final-cta-btn final-cta-btn-primary"
            id="final-cta-start-project"
            title="Start a Project with CCDL — Climate Change Digital Labs"
          >
            <div className="final-cta-btn-glow" />
            <Sparkles size={16} className="final-cta-icon" />
            <span className="final-cta-btn-label">Start a Project</span>
            <span className="final-cta-btn-tag">Quick Kickoff</span>
            <ArrowUpRight size={16} className="final-cta-arrow" />
          </button>

          <a
            href="https://wa.me/917852052323?text=Hello%2C%20I%20am%20interested%20in%20discussing%20a%20project%20with%20CCDL."
            target="_blank"
            rel="noopener noreferrer"
            className="final-cta-btn final-cta-btn-secondary"
            id="final-cta-whatsapp"
            title="Chat directly on WhatsApp"
            style={{ textDecoration: 'none' }}
          >
            <MessageCircle size={16} className="final-cta-icon" />
            <span className="final-cta-btn-label">WhatsApp Direct</span>
            <span className="final-cta-btn-tag">Instant</span>
            <ArrowUpRight size={16} className="final-cta-arrow" />
          </a>
        </ScrollReveal>

        {/* Trust Badges & Direct Studio Contact */}
        <ScrollReveal delay={240} className="final-cta-footer">
          <div className="final-cta-trust-row">
            <div className="final-cta-trust-item">
              <Zap size={14} className="final-cta-trust-icon" />
              <span>48h Rapid Onboarding</span>
            </div>
            <div className="final-cta-trust-sep">•</div>
            <div className="final-cta-trust-item">
              <Clock size={14} className="final-cta-trust-icon" />
              <span>Direct Founder Access</span>
            </div>
            <div className="final-cta-trust-sep">•</div>
            <div className="final-cta-trust-item">
              <ShieldCheck size={14} className="final-cta-trust-icon" />
              <span>Mutual NDA & IP Security</span>
            </div>
          </div>

          <div className="final-cta-direct-inquiry">
            <Mail size={13} className="final-cta-mail-icon" />
            <span>Prefer email? Write directly to </span>
            <a
              href="mailto:climatechangedigitallabs@gmail.com"
              className="final-cta-mail-link"
              title="Send Direct Email"
            >
              climatechangedigitallabs@gmail.com
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

