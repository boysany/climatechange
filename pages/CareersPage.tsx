import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronDown, FileText, Mail, Send } from 'lucide-react';

export default function CareersPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [sent, setSent] = useState(false);

  const handleResume = (event: React.FormEvent) => {
    event.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');
    setSent(true);
  };

  const whyJoin = [
    ['01', 'Room to grow', 'Take ownership, learn by doing, and build a path that fits your strengths.'],
    ['02', 'Creative environment', 'Bring thoughtful ideas to a collaborative studio that values clarity and craft.'],
    ['03', 'Real-world projects', 'Work on meaningful digital products with visible outcomes for real teams and people.'],
    ['04', 'High standards, low ego', 'We care about the work, share context openly, and keep feedback constructive.'],
    ['05', 'Build your portfolio', 'Turn strong thinking and careful execution into work you are proud to show.'],
  ];

  const faqs = [
    ['Do I need agency experience?', 'Not necessarily. We look for curiosity, clear thinking, and evidence that you care about the work.'],
    ['Can freshers apply?', 'Yes. Internships and early-career opportunities are considered when there is a strong fit.'],
    ['What should I include with my resume?', 'Share your resume and, if relevant, a portfolio, GitHub, case study, or a short note about your interests.'],
  ];

  return <main className="careers-page">
    <section className="careers-hero section-pad">
      <div className="careers-hero-grid">
        <div>
          <span className="kicker">CAREERS AT CCDL</span>
          <h1>Do meaningful work with a <em>thoughtful team.</em></h1>
          <p>Climate Change Digital Labs is a digital studio building useful, well-crafted products. If you care about learning, clarity, and doing work that matters, we would like to hear from you.</p>
          <div className="careers-actions">
            <a className="careers-button careers-button-primary" href="#open-positions">View Open Positions <ArrowRight aria-hidden="true" /></a>
            <a className="careers-button careers-button-secondary" href="#send-resume">Send Resume <Send aria-hidden="true" /></a>
          </div>
        </div>
        <div className="careers-hero-note" aria-label="Careers at Climate Change Digital Labs">
          <span className="careers-note-number">CCDL / 2025</span>
          <strong>Good work starts with good questions.</strong>
          <span>Design · Engineering · Strategy</span>
        </div>
      </div>
    </section>

    <section className="section-pad careers-section">
      <div className="careers-section-heading"><span className="kicker">THE WAY WE WORK</span><h2>Why join us?</h2><p>We keep the team focused, supportive, and close to the work.</p></div>
      <div className="careers-reasons">{whyJoin.map(([number, title, text]) => <article className="careers-reason" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="section-pad careers-section careers-positions" id="open-positions">
      <div className="careers-section-heading"><span className="kicker">OPEN POSITIONS</span><h2>Find your next challenge.</h2><p>We do not have a public role list right now, but we are always open to meeting talented people.</p></div>
      <div className="careers-empty"><FileText aria-hidden="true" /><div><h3>We are always looking for talented people.</h3><p>Tell us what you are good at, what you want to learn, and the kind of problems you would like to solve.</p></div><a href="#send-resume" className="text-link">Share your profile <ArrowRight aria-hidden="true" /></a></div>
    </section>

    <section className="section-pad careers-split"><div><span className="kicker">STARTING OUT</span><h2>Internship and freshers</h2></div><p>Early-career talent brings new perspective. If you are building your first body of work, send us a note with your resume and a little about what you want to explore. We will respond when there is a relevant opportunity.</p></section>

    <section className="section-pad careers-apply" id="send-resume"><div className="careers-apply-copy"><span className="kicker">DON&apos;T SEE THE RIGHT OPENING?</span><h2>Make the first move.</h2><p>Send your resume and a short introduction. We review every thoughtful application and will keep your details on hand for relevant roles.</p></div><form onSubmit={handleResume} noValidate className="careers-form"><label htmlFor="careers-email">Email address</label><div className="careers-input-row"><input id="careers-email" type="email" value={email} onChange={(event) => { setEmail(event.target.value); setEmailError(''); }} aria-invalid={Boolean(emailError)} aria-describedby={emailError ? 'careers-email-error' : undefined} placeholder="you@example.com" /><button type="submit" aria-label="Send resume inquiry"><Mail aria-hidden="true" /></button></div>{emailError && <p className="careers-error" id="careers-email-error" role="alert">{emailError}</p>}{sent && <p className="careers-success" role="status"><CheckCircle2 aria-hidden="true" /> Thanks. We&apos;ll be in touch if there is a relevant fit.</p>}</form></section>

    <section className="section-pad careers-how"><div className="careers-section-heading"><span className="kicker">HOW TO APPLY</span><h2>Keep it simple.</h2></div><div className="careers-steps"><div><b>01</b><h3>Introduce yourself</h3><p>Tell us what you do and what interests you about CCDL.</p></div><div><b>02</b><h3>Share your work</h3><p>Add your resume and a portfolio, GitHub, or relevant examples.</p></div><div><b>03</b><h3>Start a conversation</h3><p>If there is a fit, we will reach out for a thoughtful conversation.</p></div></div></section>

    <section className="section-pad careers-faq"><div className="careers-section-heading"><span className="kicker">QUICK ANSWERS</span><h2>Frequently asked.</h2></div><div className="careers-faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<ChevronDown aria-hidden="true" /></summary><p>{answer}</p></details>)}</div></section>
    <section className="careers-final"><span className="kicker">YOUR NEXT CHAPTER</span><h2>Explore careers at CCDL.</h2><button onClick={() => document.getElementById('send-resume')?.scrollIntoView({ behavior: 'smooth' })}>Send your resume <ArrowRight aria-hidden="true" /></button></section>
  </main>;
}

