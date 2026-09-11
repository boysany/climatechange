import React from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer({
  onNavigate,
}: {
  onNavigate?: (page: string) => void;
  isDark?: boolean;
  toggleTheme?: () => void;
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLegalClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    onNavigate?.(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" id="site-footer">
      <div className="footer-container">
        {/* Column 1: Reach Us */}
        <div className="footer-reach-col">
          <h3 className="footer-section-title">Reach Us</h3>

          <a href="tel:+917852052323" className="footer-contact-link" title="Call Line 1">
            <span className="footer-country-tag" aria-label="India">
              <span className="footer-flag-emoji">🇮🇳</span>
            </span>
            <span>78520 52323</span>
          </a>

          <a href="tel:+918005873764" className="footer-contact-link" title="Call Line 2">
            <span className="footer-country-tag" aria-label="India">
              <span className="footer-flag-emoji">🇮🇳</span>
            </span>
            <span>80058 73764</span>
          </a>

          <a href="mailto:climatechangedigitallabs@gmail.com" className="footer-contact-link" title="Email Inquiries">
            <span>climatechangedigitallabs@gmail.com</span>
            <ArrowUpRight size={16} className="footer-arrow" />
          </a>

          <a
            href="/careers"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.('careers');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="footer-contact-link"
            title="Careers at CCDL"
          >
            <span>We're Hiring, Join Us!</span>
            <ArrowUpRight size={16} className="footer-arrow" />
          </a>

          <div className="footer-tagline-block">
            <span>AGENCY • REGISTERED IN INDIA.</span>
            <span>"GLOBAL DIGITAL PRODUCT & SOFTWARE COLLECTIVE, BUILDING FOR THE WORLD"</span>
          </div>
        </div>

        {/* Column 2: Social */}
        <div className="footer-social-col">
          <h3 className="footer-section-title">Social</h3>

          <div className="footer-social-grid">
            {/* Sub-column 1 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <a
                href="https://www.behance.net/climatedigital1"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-row"
              >
                <span>Behance</span>
                <ArrowUpRight size={16} className="footer-arrow" />
              </a>
              <a
                href="https://www.instagram.com/climate_change_digital_labs/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-row"
              >
                <span>Instagram</span>
                <ArrowUpRight size={16} className="footer-arrow" />
              </a>
            </div>

            {/* Sub-column 2 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <a
                href="https://x.com/DD_Digitallabs"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-row"
              >
                <span>Twitter / X</span>
                <ArrowUpRight size={16} className="footer-arrow" />
              </a>
              <a
                href="https://wa.me/917852052323"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link-row"
                title="WhatsApp Direct"
              >
                <span>WhatsApp</span>
                <ArrowUpRight size={16} className="footer-arrow" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 3: Legal & Trust */}
        <div className="footer-legal-col">
          <h3 className="footer-section-title">Legal & Trust</h3>

          <a
            href="/privacy"
            onClick={(e) => handleLegalClick(e, 'privacy')}
            className="footer-link-row"
          >
            <span>Privacy Policy</span>
            <ArrowUpRight size={16} className="footer-arrow" />
          </a>

          <a
            href="/terms"
            onClick={(e) => handleLegalClick(e, 'terms')}
            className="footer-link-row"
          >
            <span>Terms of Service</span>
            <ArrowUpRight size={16} className="footer-arrow" />
          </a>

          <a
            href="/security"
            onClick={(e) => handleLegalClick(e, 'security')}
            className="footer-link-row"
          >
            <span>Security & Compliance</span>
            <ArrowUpRight size={16} className="footer-arrow" />
          </a>

          <a
            href="/cookies"
            onClick={(e) => handleLegalClick(e, 'cookies')}
            className="footer-link-row"
          >
            <span>Cookie Policy</span>
            <ArrowUpRight size={16} className="footer-arrow" />
          </a>

          <a
            href="/faqs"
            onClick={(e) => handleLegalClick(e, 'faqs')}
            className="footer-link-row"
          >
            <span>Frequently Asked Questions</span>
            <ArrowUpRight size={16} className="footer-arrow" />
          </a>

          <a
            href="/contact"
            onClick={(e) => handleLegalClick(e, 'contact')}
            className="footer-link-row"
          >
            <span>Contact & Inquiries</span>
            <ArrowUpRight size={16} className="footer-arrow" />
          </a>
        </div>

        {/* Scroll To Top Button */}
        <div className="footer-scroll-top-wrap">
          <button
            onClick={scrollToTop}
            className="footer-scroll-top-btn"
            aria-label="Scroll to top of page"
          >
            <ArrowUp size={22} strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </footer>
  );
}
