import React, { useState } from 'react';
import { ArrowUpRight, Calendar, Check, CheckCircle2, Code2, Copy, ExternalLink, GitBranch, HeartHandshake, Laptop, MessageSquare, Send, Sparkles, Star, Terminal, Users, X } from 'lucide-react';
import sandeepAvatar from '../src/assets/images/sandeep_barupal_1787155579146.jpg';
import gaganAvatar from '../src/assets/images/gagan_chouhan_1787155556813.jpg';
import jaspalAvatar from '../src/assets/images/jaspal_byavat_1787155617742.jpg';
import sahiramAvatar from '../src/assets/images/sahiram_nayak_1787155597072.jpg';

interface CommunityPageProps { onNavigate: (page: string) => void; }
type EventItem = { title: string; type: string; date: string; description: string; host: string; avatar: string };
const repos = [
  { name: 'react-enterprise-boilerplate', desc: 'A production-ready React, TypeScript, and Tailwind starter for teams shipping serious products.', tech: 'React / TypeScript', stars: '420+', url: 'https://github.com' },
  { name: 'figma-tokens-exporter', desc: 'Sync Figma variables and styles into CSS custom properties and Tailwind theme definitions.', tech: 'Figma / Node.js', stars: '280+', url: 'https://github.com' },
  { name: 'node-api-resilience', desc: 'Express middleware for rate limiting, structured logging, caching, and graceful degradation.', tech: 'Node.js / Redis', stars: '340+', url: 'https://github.com' },
];
const people = [
  ['Aarav Mehta', 'Frontend Developer', 'React, motion systems, accessibility', sandeepAvatar],
  ['Mira Kapoor', 'Product Designer', 'Design systems, research, prototyping', gaganAvatar],
  ['Rohan Verma', 'Backend Architect', 'APIs, databases, platform reliability', jaspalAvatar],
  ['Nisha Rao', 'Cloud Engineer', 'DevOps, security, observability', sahiramAvatar],
  ['Ishita Sen', 'Growth & Marketing', 'Launch strategy, content, partnerships', gaganAvatar],
  ['Dev Malhotra', 'Full Stack Developer', 'Next.js, Node.js, product delivery', sandeepAvatar],
  ['Kavya Iyer', 'UX Researcher', 'Workshops, discovery, user insight', jaspalAvatar],
  ['Arjun Rao', 'Community Lead', 'Events, open source, peer learning', sahiramAvatar],
];
const events: EventItem[] = [
  { title: 'React Performance Clinic', type: 'WORKSHOP', date: '19 SEP 2026', description: 'A practical teardown of animation, loading, and Core Web Vitals patterns.', host: 'Aarav Mehta', avatar: sandeepAvatar },
  { title: 'Node.js Architecture AMA', type: 'AMA / DISCUSSION', date: '01 OCT 2026', description: 'Bring your toughest API, database, and scaling questions to the collective.', host: 'Rohan Verma', avatar: jaspalAvatar },
  { title: 'Design Systems Studio', type: 'DESIGN CLINIC', date: '17 OCT 2026', description: 'Live portfolio reviews and a focused session on tokens, rhythm, and reusable UI.', host: 'Mira Kapoor', avatar: gaganAvatar },
];
const benefits = [
  [HeartHandshake, 'Learn', 'Practical sessions, honest teardown, and resources you can use immediately.'],
  [Users, 'Collaborate', 'Meet thoughtful builders and find the right people for your next project.'],
  [Code2, 'Build', 'Ship open-source ideas with feedback, accountability, and experienced guidance.'],
  [Sparkles, 'Grow', 'Make your work visible and keep developing your craft with the community.'],
];

export const CommunityPage: React.FC<CommunityPageProps> = ({ onNavigate }) => {
  const [copied, setCopied] = useState<string | null>(null);
  const [activeEvent, setActiveEvent] = useState<EventItem | null>(null);
  const [registered, setRegistered] = useState(false);
  const copy = async (value: string) => { await navigator.clipboard?.writeText(value); setCopied(value); setTimeout(() => setCopied(null), 1800); };
  return <div className="community-new-page" id="community-page-container">
    {activeEvent && <div className="community-modal-backdrop" onClick={() => setActiveEvent(null)}><div className="community-modal-box" onClick={(e) => e.stopPropagation()}><button className="community-modal-close" onClick={() => setActiveEvent(null)} aria-label="Close"><X size={18} /></button>{registered ? <div className="community-rsvp-confirmed"><CheckCircle2 size={38} /><h3>You&apos;re registered.</h3><p>We&apos;ll send the session details and recording link to your inbox.</p></div> : <><span className="community-eyebrow">{activeEvent.type}</span><h2>{activeEvent.title}</h2><p>{activeEvent.description}</p><div className="community-modal-meta"><span><Calendar size={14} /> {activeEvent.date}</span><span><Users size={14} /> Hosted by {activeEvent.host}</span></div><form onSubmit={(e) => { e.preventDefault(); setRegistered(true); }} className="community-rsvp-form"><input required type="text" placeholder="Your name" aria-label="Your name" /><input required type="email" placeholder="Email address" aria-label="Email address" /><button className="button button-dark" type="submit">Reserve my spot <ArrowUpRight size={16} /></button></form></>}</div></div>}
    <main className="community-new-shell">
      <nav className="community-new-breadcrumb"><button onClick={() => onNavigate('home')}>HOME</button><span>/</span><span>COMMUNITY</span></nav>
      <section className="community-new-hero"><div className="community-new-hero-copy"><span className="community-eyebrow">THE SELMEDIC BUILDER COLLECTIVE</span><h1>Build together.<br /><em>Go further.</em></h1><p>A focused community for developers, designers, and creators who learn in public, collaborate generously, and ship better digital products.</p><div className="community-new-actions"><button className="button button-dark" onClick={() => document.getElementById('community-activities')?.scrollIntoView({ behavior: 'smooth' })}>Join the community <ArrowUpRight size={16} /></button><button className="button button-outline" onClick={() => document.getElementById('community-open-source')?.scrollIntoView({ behavior: 'smooth' })}>Explore projects <ArrowUpRight size={16} /></button></div><div className="community-hero-points"><span><Code2 size={16} /> Learn by building</span><span><Users size={16} /> Meet your people</span><span><Sparkles size={16} /> Share your craft</span></div></div><div className="community-new-visual"><img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=85&w=1200" alt="A diverse team collaborating around a table" /><div className="community-floating-card top"><Users size={18} /><strong>1,200+</strong><span>builders learning together</span></div><div className="community-floating-card bottom"><GitBranch size={18} /><strong>24/7</strong><span>open discussions</span></div></div></section>
      <section className="community-stat-grid" aria-label="Community stats">{[['1,200+', 'Developers & Designers', 'A thoughtful network of makers', Users], ['4', 'Open Source Projects', 'Tools built in the open', GitBranch], ['18+', 'Client Projects', 'Real product lessons shared', Code2], ['98%', 'Satisfied Clients', 'Trust built through delivery', HeartHandshake]].map(([num, title, desc, Icon]) => <div className="community-stat-card-new" key={String(title)}><Icon size={19} /><strong>{num}</strong><h3>{title}</h3><p>{desc}</p></div>)}</section>
      <section className="community-new-section" id="community-open-source"><div className="community-section-intro"><span className="community-eyebrow">01 / OPEN SOURCE</span><h2>Useful tools, shared openly.</h2><p>Production-minded projects and practical building blocks for teams that care about quality.</p></div><div className="community-repo-grid-new">{repos.map((repo) => <article className="community-repo-card-new" key={repo.name}><div className="repo-icon"><Terminal size={18} /></div><div className="repo-meta"><span>{repo.tech}</span><span><Star size={13} /> {repo.stars}</span></div><h3>{repo.name}</h3><p>{repo.desc}</p><div className="repo-actions"><button onClick={() => copy(`git clone ${repo.url}/${repo.name}.git`)}>{copied?.includes(repo.name) ? <Check size={14} /> : <Copy size={14} />} {copied?.includes(repo.name) ? 'Copied' : 'Clone command'}</button><a href={repo.url} target="_blank" rel="noreferrer">View project <ExternalLink size={14} /></a></div></article>)}</div></section>
      <section className="community-new-section"><div className="community-section-intro"><span className="community-eyebrow">02 / WHY JOIN</span><h2>Progress feels better together.</h2></div><div className="community-benefit-grid">{benefits.map(([Icon, title, text]) => <article className="community-benefit-card" key={String(title)}><Icon size={21} /><h3>{String(title)}</h3><p>{String(text)}</p></article>)}</div></section>
      <section className="community-new-section"><div className="community-section-intro"><span className="community-eyebrow">03 / THE PEOPLE</span><h2>Meet the builders behind the work.</h2><p>Fictional profiles representing the kinds of specialists who make this collective useful, generous, and ambitious.</p></div><div className="community-people-grid">{people.map(([name, role, bio, avatar]) => <article className="community-person-card" key={String(name)}><img src={String(avatar)} alt="" /><div><h3>{String(name)}</h3><span>{String(role)}</span><p>{String(bio)}</p></div></article>)}</div></section>
      <section className="community-new-section" id="community-activities"><div className="community-section-intro"><span className="community-eyebrow">04 / ACTIVITIES</span><h2>Make time for better conversations.</h2></div><div className="community-event-grid-new">{events.map((event) => <article className="community-event-card-new" key={event.title}><span>{event.type}</span><time>{event.date}</time><h3>{event.title}</h3><p>{event.description}</p><button className="text-link" onClick={() => { setActiveEvent(event); setRegistered(false); }}>Reserve a place <ArrowUpRight size={15} /></button></article>)}</div></section>
      <section className="community-new-section community-faq-section"><div className="community-section-intro"><span className="community-eyebrow">05 / FAQ</span><h2>Good questions welcome.</h2></div><div className="community-faq-list">{[['Who is the community for?', 'Developers, designers, founders, marketers, and curious people who enjoy making useful things.'], ['Is it free to join?', 'Yes. Events, discussions, and open-source resources are free to explore.'], ['Can I share a project?', 'Absolutely. Bring a prototype, repo, case study, or question and the community will help you move it forward.'], ['How do I get involved?', 'Start with a project or event, introduce yourself, and take part in a conversation.']].map(([q, a]) => <details key={q}><summary>{q}<ArrowUpRight size={16} /></summary><p>{a}</p></details>)}</div></section>
      <section className="community-final-cta"><span className="community-eyebrow">THE NEXT STEP IS YOURS</span><h2>Build, learn & grow together.</h2><p>Bring your curiosity. Leave with better work, stronger connections, and a clearer next move.</p><button className="button button-dark" onClick={() => document.getElementById('community-activities')?.scrollIntoView({ behavior: 'smooth' })}>Join the community <ArrowUpRight size={16} /></button></section>
    </main>
  </div>;
};
export default CommunityPage;
