
import React from 'react';
import { motion as m } from 'framer-motion';
import { 
  ArrowLeft, ArrowUpRight, Zap, Shield, Globe, Users, 
  Star, Heart, Calendar, User, Send, HelpCircle, Mail, Phone, MapPin, Plus, Minus, MessageCircle, FileText, Scale, Download, ExternalLink, Box, Camera, Newspaper, Briefcase, LifeBuoy, BookOpen, Share2, Bell, CheckCircle, Activity, Layout, Terminal, Code, Palette
} from 'lucide-react';
import PremiumButton from '../components/PremiumButton.tsx';

// Cast motion to any to bypass strict type checking on motion props
const motion = m as any;

interface StaticPageProps {
  pageId: string;
  isDark: boolean;
  onBack: () => void;
}

const StaticPage: React.FC<StaticPageProps> = ({ pageId, isDark, onBack }) => {
  const [activeFaq, setActiveFaq] = React.useState<number | null>(0);

  const getPageData = (id: string) => {
    const baseTitle = id.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    
    const data: Record<string, any> = {
      'about': {
        title: "Pioneering Experience",
        subtitle: "The CCDL Story",
        heroImg: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600",
        icon: <Users className="text-blue-600" size={32} />,
        type: 'generic',
        content: "CC Digital Labs (CCDL) is a high-precision digital product studio based in Near Bikaner Bypass, Anupgarh, Sri Ganganagar, Rajasthan, India. We combine strategic product thinking, world-class UI/UX design, and full-stack software engineering to deliver robust platforms, mobile apps, and enterprise solutions for ambitious brands globally."
      },
      'contact': {
        title: "Let's Build the Future",
        subtitle: "Direct Access",
        heroImg: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600",
        icon: <Mail className="text-blue-600" size={32} />,
        type: 'contact-layout',
        info: [
          { icon: <Mail size={24} />, label: "Email", value: "climatechangedigitallabs@gmail.com", href: "mailto:climatechangedigitallabs@gmail.com" },
          { icon: <Phone size={24} />, label: "Call Line 1", value: "+91 78520 52323", href: "tel:+917852052323" },
          { icon: <Phone size={24} />, label: "Call Line 2", value: "+91 80058 73764", href: "tel:+918005873764" },
          { icon: <MessageCircle size={24} />, label: "WhatsApp 1", value: "+91 78520 52323", href: "https://wa.me/917852052323" },
          { icon: <MessageCircle size={24} />, label: "WhatsApp 2", value: "+91 80058 73764", href: "https://wa.me/918005873764" },
          { icon: <MapPin size={24} />, label: "Studio", value: "Near Bikaner Bypass, Anupgarh, Sri Ganganagar, Rajasthan, India" }
        ]
      },
      'careers': {
        title: "Join the Collective",
        subtitle: "Open Roles",
        heroImg: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600",
        icon: <Briefcase className="text-blue-600" size={32} />,
        type: 'jobs-list',
        jobs: [
          { title: "Senior UI/UX Designer", team: "Design", location: "Sri Ganganagar / Hybrid", type: "Full-time", icon: <Palette size={20}/> },
          { title: "Senior Full-Stack Engineer (React/Node)", team: "Engineering", location: "Sri Ganganagar / Remote", type: "Full-time", icon: <Terminal size={20}/> },
          { title: "Backend Cloud Architect", team: "Engineering", location: "Sri Ganganagar / Remote", type: "Full-time", icon: <Box size={20}/> }
        ]
      },
      'faqs': {
        title: "Common Inquiries",
        subtitle: "Expert Answers",
        heroImg: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600",
        icon: <HelpCircle className="text-blue-600" size={32} />,
        type: 'faq-list',
        items: [
          { q: "What is your typical project timeline?", a: "Most focused web & mobile application sprints take 4 to 8 weeks from discovery to production deployment." },
          { q: "Do you offer full-stack engineering alongside design?", a: "Yes. CCDL provides end-to-end delivery: research, UX wireframing, high-fidelity UI design, frontend development, and secure cloud backend architecture." },
          { q: "How do you handle post-launch support?", a: "Every build comes with 30-day warranty support and optional monthly retainer maintenance for updates and scaling." }
        ]
      },
      'partnerships': {
        title: "Synergetic Growth",
        subtitle: "Partner Program",
        heroImg: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600",
        icon: <Globe className="text-blue-600" size={32} />,
        type: 'partners-grid',
        tiers: [
          { title: "Venture Partners", desc: "For founders seeking technical co-investment and design leadership.", icon: <Zap size={24} />, perks: ["Product Roadmaps", "MVP Acceleration", "Technical Advisory"] },
          { title: "Strategic Alliances", desc: "For agencies looking to augment their production capacity.", icon: <Globe size={24} />, perks: ["White-label Delivery", "Dedicated Sprints", "Shared Pipeline"] },
          { title: "Creative Affiliates", desc: "For partners referring high-impact projects to the studio.", icon: <Star size={24} />, perks: ["Referral Commissions", "CCDL Network Access", "Priority Scheduling"] }
        ]
      },
      'support': {
        title: "Active Sentinel",
        subtitle: "Support Center",
        heroImg: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=1600",
        icon: <LifeBuoy className="text-blue-600" size={32} />,
        type: 'support-portal',
        status: "All Systems Operational",
        channels: [
          { title: "WhatsApp Direct Line 1", desc: "+91 78520 52323 instant response for active clients.", icon: <Activity size={24} />, link: "https://wa.me/917852052323" },
          { title: "WhatsApp Direct Line 2", desc: "+91 80058 73764 for urgent production & tech sync.", icon: <MessageCircle size={24} />, link: "https://wa.me/918005873764" },
          { title: "Direct Studio Line 1", desc: "+91 78520 52323 (Mon-Sat 9AM-8PM IST).", icon: <Phone size={24} />, link: "tel:+917852052323" },
          { title: "Direct Studio Line 2", desc: "+91 80058 73764 (Mon-Sat 9AM-8PM IST).", icon: <Phone size={24} />, link: "tel:+918005873764" },
          { title: "Client Support Email", desc: "climatechangedigitallabs@gmail.com for tickets & milestone reviews.", icon: <Mail size={24} />, link: "mailto:climatechangedigitallabs@gmail.com" }
        ]
      },
      'help-center': {
        title: "Knowledge Archive",
        subtitle: "Documentation",
        heroImg: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1600",
        icon: <BookOpen className="text-blue-600" size={32} />,
        type: 'faq-list',
        items: [
          { q: "Production Handoff Protocol", a: "We provide comprehensive Figma tokens, clean React/TypeScript architectures, and complete documentation." },
          { q: "Infrastructure Guidelines", a: "CCDL builds on high-performance infrastructure including Vercel, AWS, GCP, and Cloudflare." },
          { q: "Security Best Practices", a: "All applications follow OWASP guidelines, encrypted environment variables, and strict access controls." }
        ]
      },
      'events': {
        title: "Studio Gatherings",
        subtitle: "Upcoming Events",
        heroImg: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1600",
        icon: <Calendar className="text-blue-600" size={32} />,
        type: 'events-list',
        upcoming: [
          { title: "Next-Gen Product Design Workshop", date: "Coming Soon", location: "Jaipur Studio & Virtual", type: "Workshop" },
          { title: "Full-Stack Web Performance Meetup", date: "Quarterly", location: "Jaipur, India", type: "Meetup" }
        ]
      },
      'community': {
        title: "The CCDL Collective",
        subtitle: "Our Ecosystem",
        heroImg: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600",
        icon: <Users className="text-blue-600" size={32} />,
        type: 'community-hub',
        stats: [
          { label: "Projects Delivered", value: "40+" },
          { label: "Client Satisfaction", value: "99%" },
          { label: "Core Engineers", value: "4+" }
        ]
      },
      'social-media': {
        title: "Visual Intelligence",
        subtitle: "Social Feed",
        heroImg: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1600",
        icon: <Share2 className="text-blue-600" size={32} />,
        type: 'social-feed',
        channels: [
          { name: "LinkedIn", value: "Climate Change Digital Labs", url: "https://www.linkedin.com/in/climate-change-digital-labs-3796b1431/", icon: <ArrowUpRight size={24} /> },
          { name: "Instagram", value: "@climate_change_digital_labs", url: "https://www.instagram.com/climate_change_digital_labs/", icon: <Camera size={24} /> },
          { name: "Twitter / X", value: "@DD_Digitallabs", url: "https://x.com/DD_Digitallabs", icon: <Share2 size={24} /> },
          { name: "Dribbble", value: "climate-change-digital-labs", url: "https://dribbble.com/climate-change-digital-labs", icon: <Star size={24} /> },
          { name: "Behance", value: "climatedigital1", url: "https://www.behance.net/climatedigital1", icon: <Star size={24} /> }
        ]
      },
      'newsletter': {
        title: "The Pulse",
        subtitle: "Studio Insights",
        heroImg: "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&q=80&w=1600",
        icon: <Send className="text-blue-600" size={32} />,
        type: 'newsletter-promo',
        topics: ["UI/UX Trends", "Full-Stack Performance", "Case Studies & Breakdown"]
      },
      'subscribe': {
        title: "Join the Elite",
        subtitle: "Stay Updated",
        heroImg: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1600",
        icon: <Bell className="text-blue-600" size={32} />,
        type: 'subscribe-flow'
      },
      'blog': {
        title: "Design Intelligence",
        subtitle: "Insights & Trends",
        heroImg: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1600",
        icon: <Zap className="text-blue-600" size={32} />,
        type: 'blog-grid',
        posts: [
          { title: "Obsidian Design Trends 2025", category: "Trends", date: "Nov 12, 2024", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800", excerpt: "Depth, glass, and fluid motion are redefining the luxury web experience." },
          { title: "Performance in Web3", category: "Engineering", date: "Nov 08, 2024", img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800", excerpt: "How we reduced dApp latency by 60% using edge caching." }
        ]
      },
      'press': {
        title: "Media Room",
        subtitle: "Media & Press",
        heroImg: "https://images.unsplash.com/photo-1504711432869-efd597cdd047?auto=format&fit=crop&q=80&w=1600",
        icon: <Newspaper className="text-blue-600" size={32} />,
        type: 'press-kit',
        releases: [
          { title: "CCDL Recognized for High-Performance Digital Products", date: "Oct 14, 2024", outlet: "Design & Tech Weekly" }
        ],
        assets: [
          { title: "Official CCDL Studio Brand Assets", type: "RAW/SVG/PNG", size: "24MB", icon: <Camera size={20} /> }
        ]
      },
      'terms-of-service': {
        title: "Terms of Service",
        subtitle: "Legal Framework",
        heroImg: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1600",
        icon: <Scale className="text-blue-600" size={32} />,
        type: 'document',
        articles: [
          { title: "Engagement & Acceptance", content: "By accessing the CCDL (CC Digital Labs) website or commissioning our engineering services, you enter into a binding legal agreement. This framework is designed to protect both the visionary creative process and the strategic interests of our clients." },
          { title: "Intellectual Property Protocols", content: "Upon full project completion and final milestone settlement, CCDL grants clients an exclusive, perpetual license for the final visual and technical source artifacts delivered." },
          { title: "Client Stewardship", content: "Successful digital transformation requires active client participation. You agree to provide feedback and necessary brand assets within our agreed-upon sprint timelines to maintain our high-fidelity standards." },
          { title: "Payment Milestones", content: "All creative and engineering investments are structured on transparent sprint-based milestones. Upfront deposits initiate deep discovery, sprint scoping, and architectural planning." },
          { title: "Limitation of Liability", content: "While we strive for absolute engineering precision and quality, CCDL shall not be held liable for indirect, incidental, or third-party API outage damages." },
          { title: "Confidentiality & Non-Disclosure", content: "The details of our collaboration and your internal business strategy are held under strict non-disclosure (NDA) protection. We protect your product IP as our highest priority." }
        ]
      },
      'privacy-policy': {
        title: "Privacy Policy",
        subtitle: "Data Protection",
        heroImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
        icon: <Shield className="text-blue-600" size={32} />,
        type: 'document',
        articles: [
          { title: "Data Collection Ethos", content: "We collect only essential information required to communicate and deliver software projects. This includes professional identity data and project requirements shared via our contact channels." },
          { title: "Cookie Policy", content: "Our website utilizes lightweight session storage tokens to remember your theme preference (Dark/Light mode) without invasive third-party ad tracking." },
          { title: "Usage & Orchestration", content: "Your data is never sold or shared with external marketing brokers. We use your contact information exclusively for client communications, project updates, and direct studio coordination." },
          { title: "Security Standards", content: "We employ industry-standard encryption and secure edge protocols to safeguard client communication and project repositories." },
          { title: "Your Digital Rights", content: "In alignment with data protection standards, you maintain control over your contact records. You may request an audit or deletion of your contact data at any time via climatechangedigitallabs@gmail.com." }
        ]
      }
    };

    return data[id] || {
      title: baseTitle,
      subtitle: "Digital Excellence",
      heroImg: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1600",
      icon: <Globe className="text-blue-600" size={32} />,
      type: 'generic',
      content: "This section is currently undergoing a high-fidelity audit. Our editorial team is curating the most relevant content for your journey."
    };
  };

  const page = getPageData(pageId);

  return (
    <motion.div className="pt-24 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-700 relative overflow-hidden">
      
      {/* Mesh Atmosphere Decor */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-5%] right-[-5%] w-[60%] h-[50%] bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-[140px] transition-colors" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[50%] h-[50%] bg-indigo-100/40 dark:bg-indigo-900/10 rounded-full blur-[140px] transition-colors" />
      </div>

      {/* Hero */}
      <motion.section className="static-page-hero relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <motion.img 
            src={page.heroImg} 
            className="w-full h-full object-cover dark:opacity-40" 
            alt={page.title} 
            loading="eager"
          />
          <motion.div className="absolute inset-0 bg-white/60 dark:bg-slate-950/70 backdrop-blur-[2px] transition-colors" />
          <motion.div className="absolute inset-0 bg-gradient-to-b from-white dark:from-slate-950 via-transparent to-white dark:to-slate-950 transition-colors" />
        </motion.div>

        <motion.div className="relative z-10 text-center max-w-4xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <motion.div className="w-12 h-12 glass rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/10 dark:shadow-blue-500/5">
              {page.icon}
            </motion.div>
            <motion.span className="text-blue-600 dark:text-blue-500 font-bold uppercase tracking-[0.4em] text-xs">
              {page.subtitle}
            </motion.span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-medium text-slate-900 dark:text-white tracking-tighter leading-[0.95] mb-8 transition-colors"
          >
            {page.title}<motion.span className="text-blue-600">.</motion.span>
          </motion.h1>
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 font-bold mx-auto transition-colors group uppercase tracking-widest text-[10px]"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Main Content Areas */}
      <motion.section className="static-page-content py-24 px-6 relative z-10">
        <motion.div className="max-w-7xl mx-auto min-w-0">
          
          {/* JOBS LIST */}
          {page.type === 'jobs-list' && (
            <div className="grid gap-6">
              {page.jobs.map((job: any, i: number) => (
                <motion.div key={i} className="glass p-10 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-10 group cursor-pointer hover:shadow-2xl transition-all">
                  <div className="flex items-center gap-8">
                    <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
                      {job.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-medium text-slate-900 dark:text-white tracking-tight">{job.title}</h3>
                      <div className="flex items-center gap-4 text-slate-400 font-medium text-xs mt-1">
                        <span className="text-blue-600">{job.team}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800" />
                        <span>{job.location}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800" />
                        <span>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  <PremiumButton text="Apply Now" variant="primary" />
                </motion.div>
              ))}
            </div>
          )}

          {/* PARTNERS GRID */}
          {page.type === 'partners-grid' && (
            <div className="grid md:grid-cols-3 gap-10">
              {page.tiers.map((tier: any, i: number) => (
                <motion.div key={i} className="glass p-12 rounded-[3.5rem] flex flex-col group hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                    {tier.icon}
                  </div>
                  <h3 className="text-3xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight">{tier.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 font-medium mb-10 text-lg">{tier.desc}</p>
                  <ul className="space-y-4 mb-12">
                    {tier.perks.map((p: string, j: number) => (
                      <li key={j} className="flex items-center gap-3 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                        <CheckCircle size={14} className="text-blue-600" /> {p}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-auto text-blue-600 font-black uppercase tracking-[0.3em] text-[10px] hover:gap-4 transition-all flex items-center gap-2">Inquire Now <ArrowUpRight size={14} /></button>
                </motion.div>
              ))}
            </div>
          )}

          {/* SUPPORT PORTAL */}
          {page.type === 'support-portal' && (
            <div className="space-y-24">
              <div className="glass p-10 rounded-full flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
                  <span className="font-black text-slate-900 dark:text-white uppercase tracking-widest text-xs">{page.status}</span>
                </div>
                <div className="text-slate-400 font-medium text-xs">Direct Studio Hotline Active</div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {page.channels.map((ch: any, i: number) => (
                  <motion.div key={i} className="bg-slate-50 dark:bg-slate-900/50 p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 hover:shadow-xl transition-all group flex flex-col">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {ch.icon}
                    </div>
                    <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2 tracking-tight">{ch.title}</h3>
                    <p className="text-slate-500 font-medium text-sm mb-6 flex-grow">{ch.desc}</p>
                    {ch.link ? (
                      <a
                        href={ch.link}
                        target={ch.link.startsWith('http') ? '_blank' : undefined}
                        rel={ch.link.startsWith('http') ? 'noreferrer' : undefined}
                        className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-blue-600/30 text-blue-600 font-black uppercase tracking-widest text-[10px] group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all text-center"
                      >
                        <span>Access Channel</span>
                        <ArrowUpRight size={14} />
                      </a>
                    ) : (
                      <PremiumButton text="Access Channel" variant="secondary" className="!px-6 !py-2" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* CONTACT LAYOUT */}
          {page.type === 'contact-layout' && (
            <div className="space-y-16 max-w-5xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {page.info.map((item: any, i: number) => (
                  <motion.div
                    key={i}
                    className="glass p-8 rounded-[2.5rem] flex flex-col group hover:shadow-2xl transition-all"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md">
                      {item.icon}
                    </div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="text-lg font-medium text-slate-900 dark:text-white mb-6 tracking-tight">{item.value}</div>
                    {item.href && (
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                        className="mt-auto inline-flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-[10px] hover:gap-3 transition-all"
                      >
                        <span>Connect Now</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* EVENTS LIST */}
          {page.type === 'events-list' && (
            <div className="grid gap-8">
              {page.upcoming.map((ev: any, i: number) => (
                <motion.div key={i} className="glass p-10 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-10 group cursor-pointer hover:shadow-2xl transition-all">
                  <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="text-center md:text-left">
                      <div className="text-3xl font-medium text-slate-900 dark:text-white tracking-tighter mb-1">{ev.date}</div>
                      <div className="text-blue-600 font-black text-[10px] uppercase tracking-widest">{ev.type}</div>
                    </div>
                    <div className="h-10 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />
                    <div>
                      <h3 className="text-2xl font-medium text-slate-900 dark:text-white tracking-tight mb-2">{ev.title}</h3>
                      <div className="flex items-center gap-2 text-slate-400 font-medium text-xs">
                        <MapPin size={14} className="text-blue-600" /> {ev.location}
                      </div>
                    </div>
                  </div>
                  <PremiumButton text="Register Interest" variant="primary" />
                </motion.div>
              ))}
            </div>
          )}

          {/* COMMUNITY HUB */}
          {page.type === 'community-hub' && (
            <div className="space-y-32">
              <div className="grid md:grid-cols-3 gap-10">
                {page.stats.map((st: any, i: number) => (
                  <div key={i} className="text-center p-12 glass rounded-[3rem]">
                    <div className="text-6xl font-medium text-blue-600 mb-4 tracking-tighter">{st.value}</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em]">{st.label}</div>
                  </div>
                ))}
              </div>
              <div className="max-w-4xl mx-auto glass p-16 rounded-[4rem] text-center">
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <MessageCircle size={32} />
                </div>
                <h2 className="text-4xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight">Connect with the CCDL Team.</h2>
                <p className="text-xl text-slate-500 font-medium mb-12">Connect with our core team in Sri Ganganagar, discuss your product roadmap, and get direct technical feedback.</p>
                <PremiumButton text="Contact Studio" variant="secondary" className="mx-auto" />
              </div>
            </div>
          )}

          {/* SOCIAL FEED */}
          {page.type === 'social-feed' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {page.channels.map((ch: any, i: number) => (
                <motion.div key={i} className="glass p-10 rounded-[2.5rem] group hover:bg-slate-950 transition-all text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-[1.5rem] bg-slate-50 dark:bg-slate-800 text-blue-600 mx-auto flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner">
                    {ch.icon}
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 dark:text-white group-hover:text-white mb-1 transition-colors">{ch.name}</h3>
                  <p className="text-slate-400 font-bold text-[10px] uppercase tracking-widest mb-8 group-hover:text-slate-500 transition-colors">{ch.value}</p>
                  <a
                    href={ch.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-blue-600/30 text-blue-600 font-black uppercase tracking-widest text-[10px] group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all"
                  >
                    <span>Follow Studio</span>
                    <ArrowUpRight size={12} />
                  </a>
                </motion.div>
              ))}
            </div>
          )}

          {/* NEWSLETTER PROMO */}
          {page.type === 'newsletter-promo' && (
            <div className="max-w-4xl mx-auto glass p-12 md:p-24 rounded-[4rem] flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-10 shadow-xl">
                <Newspaper size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight leading-tight">Digital product curation for <br /> <span className="italic font-serif font-normal text-blue-600">Ambitious Founders</span>.</h2>
              <p className="text-xl text-slate-500 font-medium mb-12 max-w-lg">Insights on full-stack web applications, product engineering, and modern interface architecture.</p>
              <div className="grid sm:grid-cols-3 gap-4 mb-16 w-full">
                {page.topics.map((t: string, i: number) => (
                  <div key={i} className="bg-slate-50 dark:bg-slate-900 px-6 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400">{t}</div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <input type="email" placeholder="Your business email" className="flex-1 bg-slate-50 dark:bg-slate-900 border-none px-8 py-5 rounded-full font-medium outline-none" />
                <PremiumButton text="Subscribe Pulse" variant="primary" />
              </div>
            </div>
          )}

          {/* SUBSCRIBE FLOW */}
          {page.type === 'subscribe-flow' && (
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-20">
                <div className="w-20 h-20 rounded-[2rem] bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mx-auto mb-8 animate-bounce">
                  <Bell size={32} />
                </div>
                <h2 className="text-5xl font-medium text-slate-900 dark:text-white mb-6 tracking-tighter">Stay Connected with CCDL.</h2>
                <p className="text-xl text-slate-400 font-medium">Join founders receiving studio insights on modern product development.</p>
              </div>
              <div className="glass p-12 md:p-16 rounded-[4rem] shadow-2xl space-y-8">
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block text-left ml-6">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 dark:bg-slate-900 border-none px-8 py-5 rounded-full" />
                </div>
                <div className="space-y-4">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block text-left ml-6">Business Email</label>
                  <input type="email" className="w-full bg-slate-50 dark:bg-slate-900 border-none px-8 py-5 rounded-full" />
                </div>
                <PremiumButton text="Confirm Subscription" variant="primary" className="w-full justify-center" />
              </div>
            </div>
          )}

          {/* BLOG GRID */}
          {page.type === 'blog-grid' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
              {page.posts.map((post: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  <motion.div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-[16/10] mb-8 glass shadow-2xl transition-all">
                    <motion.img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0 dark:opacity-70 group-hover:opacity-100" 
                    />
                    <motion.div className="absolute top-6 left-6 glass px-5 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest text-slate-900 dark:text-white shadow-xl">
                      {post.category}
                    </motion.div>
                  </motion.div>
                  
                  <div className="flex flex-col flex-grow">
                    <motion.div className="flex items-center gap-4 mb-4 text-slate-400 dark:text-slate-500 font-bold text-[9px] uppercase tracking-widest">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-blue-600" /> {post.date}
                      </div>
                      <motion.span className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800" />
                      <div className="flex items-center gap-1.5">
                        <User size={12} className="text-blue-600" /> By CCDL
                      </div>
                    </motion.div>
                    
                    <motion.h3 className="text-2xl font-medium text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors tracking-tight leading-tight mb-4">
                      {post.title}
                    </motion.h3>
                    
                    <motion.p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed text-sm mb-8 line-clamp-3">
                      {post.excerpt}
                    </motion.p>
                    
                    <motion.div className="mt-auto flex items-center gap-2 text-blue-600 dark:text-blue-500 font-black text-[10px] uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                      Read Intelligence <ArrowUpRight size={14} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* PRESS KIT LAYOUT */}
          {page.type === 'press-kit' && (
            <div className="space-y-32">
              <div>
                <motion.h2 className="text-4xl font-medium text-slate-900 dark:text-white mb-16 tracking-tight">Recent Coverage.</motion.h2>
                <div className="grid gap-6">
                  {page.releases.map((rel: any, i: number) => (
                    <motion.div key={i} className="glass p-8 md:p-10 rounded-[2.5rem] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-xl transition-all cursor-pointer group">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-blue-600 font-black text-[9px] uppercase tracking-widest">{rel.outlet}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-200 dark:bg-slate-800" />
                          <span className="text-slate-400 font-bold text-[9px] uppercase tracking-widest">{rel.date}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl font-medium text-slate-900 dark:text-white tracking-tight group-hover:text-blue-600 transition-colors">{rel.title}</h3>
                      </div>
                      <ExternalLink className="text-slate-300 dark:text-slate-700 group-hover:text-blue-600 transition-colors" size={24} />
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="bg-slate-50/50 dark:bg-slate-900/50 p-12 md:p-24 rounded-[3rem] md:rounded-[5rem] transition-colors">
                <motion.h2 className="text-4xl font-medium text-slate-900 dark:text-white mb-16 tracking-tight text-center">Brand Assets Kit.</motion.h2>
                <div className="grid md:grid-cols-3 gap-10">
                  {page.assets.map((asset: any, i: number) => (
                    <motion.div key={i} className="text-center group">
                      <div className="w-20 h-20 glass rounded-3xl flex items-center justify-center text-blue-600 mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform">
                        {asset.icon}
                      </div>
                      <h4 className="text-xl font-medium text-slate-900 dark:text-white mb-2 tracking-tight">{asset.title}</h4>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">{asset.type} • {asset.size}</p>
                      <button className="text-blue-600 font-black uppercase tracking-widest text-[10px] hover:text-blue-700 transition-colors">Download Kit</button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* DOCUMENT LAYOUT */}
          {page.type === 'document' && (
            <div className="max-w-5xl mx-auto space-y-12">
              {page.articles.map((article: any, i: number) => (
                <motion.div key={i} className="glass p-12 md:p-16 rounded-[3rem] md:rounded-[4rem] group hover:shadow-2xl transition-all">
                  <div className="flex flex-col md:flex-row gap-10 md:gap-16">
                    <div className="shrink-0">
                      <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] mb-4">Article</div>
                      <div className="text-5xl md:text-6xl font-medium text-slate-200 dark:text-slate-800 tracking-tighter transition-colors">0{i + 1}</div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl md:text-3xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight">{article.title}</h2>
                      <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{article.content}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* FAQ LIST */}
          {page.type === 'faq-list' && (
            <div className="max-w-4xl mx-auto space-y-6">
              {page.items.map((item: any, i: number) => (
                <motion.div key={i} onClick={() => setActiveFaq(activeFaq === i ? null : i)} className={`cursor-pointer transition-all duration-500 rounded-[2.5rem] overflow-hidden ${activeFaq === i ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xl scale-[1.02]' : 'bg-slate-50 dark:bg-slate-900/50'}`}>
                  <div className="p-8 md:p-10 flex items-center justify-between gap-6">
                    <h3 className="text-xl md:text-2xl font-medium tracking-tight">{item.q}</h3>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center border border-current transition-all shrink-0">
                      {activeFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                    </div>
                  </div>
                  <motion.div animate={{ height: activeFaq === i ? 'auto' : 0, opacity: activeFaq === i ? 1 : 0 }} className="overflow-hidden">
                    <div className="px-8 md:px-10 pb-10">
                      <p className="text-lg leading-relaxed font-medium opacity-70">{item.a}</p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          )}

          {/* FALLBACK */}
          {page.type === 'generic' && (
            <motion.div className="max-w-4xl mx-auto glass p-12 md:p-24 rounded-[4rem] text-center">
              <p className="text-2xl text-slate-500 font-medium leading-relaxed">{page.content}</p>
            </motion.div>
          )}

        </motion.div>
      </motion.section>

      {/* Atmospheric Branding */}
      <motion.div className="fixed bottom-0 right-0 pointer-events-none select-none overflow-hidden opacity-[0.03] -z-10">
        <motion.span className="text-blue-600 font-black text-[50rem] leading-none translate-x-32 translate-y-32">DX</motion.span>
      </motion.div>
    </motion.div>
  );
};

export default StaticPage;
