import React, { useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

const REVIEWS = [
  { name: 'David Vance', role: 'CTO, Global Talent Platforms', quote: 'CCDL transformed our complex product architecture into a seamless, high-speed experience.' },
  { name: 'Elena Rostova', role: 'VP Engineering, QuantumFin Protocol', quote: 'They delivered ultra-low latency charts and rock-solid state management under peak volatility.' },
  { name: 'Marcus Sterling', role: 'Founder, Apex Logistics SaaS', quote: 'From discovery sprint to global deployment, CCDL exceeded every milestone.' },
  { name: 'Priya Sundaram', role: 'Head of Product, MedPulse AI Systems', quote: 'Their UI craftsmanship and engineering depth compressed our roadmap into 14 weeks.' },
];

export default function WorkReviewsSection() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const review = REVIEWS[index];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          setIndex((current) => (current + 1) % REVIEWS.length);
          return 0;
        }
        return value + 2;
      });
    }, 100);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="work-reviews-container work-reviews-simple" id="work-client-reviews" aria-label="Client reviews">
      <div className="simple-review-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
      <div className="simple-review-slider" aria-live="polite">
        <Quote size={18} aria-hidden="true" />
        <p>{review.quote}</p>
        <div className="simple-review-attribution">
          <strong>{review.name}</strong>
          <span>{review.role}</span>
        </div>
      </div>
    </section>
  );
}
