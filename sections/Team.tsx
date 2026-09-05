import React from 'react';
import { motion as m } from 'framer-motion';

const motion = m as any;

// Authentic team member portraits uploaded by user
import gaganPortrait from '../src/assets/images/gagan_chouhan_1787155556813.jpg';
import sandeepPortrait from '../src/assets/images/sandeep_barupal_1787155579146.jpg';
import jaspalPortrait from '../src/assets/images/jaspal_byavat_1787155617742.jpg';
import sahiramPortrait from '../src/assets/images/sahiram_nayak_1787155597072.jpg';

interface TeamSectionMember {
  name: string;
  role: string;
  experience: string;
  image: string;
}

interface SquadSection {
  title: string;
  subtitle: string;
  badge: string;
  members: TeamSectionMember[];
}

const teamSections: SquadSection[] = [
  {
    title: 'Design & Frontend Leadership',
    subtitle: 'Interface design, visual architecture & high-speed frontend engineering',
    badge: '01 / CREATIVE CORE',
    members: [
      {
        name: 'Mira Kapoor',
        role: 'Lead Web & UI/UX Designer',
        experience: '6+ Years Experience',
        image: gaganPortrait,
      },
      {
        name: 'Aarav Mehta',
        role: 'Lead Frontend Engineer',
        experience: '5+ Years Experience',
        image: sandeepPortrait,
      },
    ],
  },
  {
    title: 'Backend Architecture & Cloud Systems',
    subtitle: 'Distributed services, database schemas & secure cloud infrastructure',
    badge: '02 / SYSTEMS CORE',
    members: [
      {
        name: 'Rohan Verma',
        role: 'Senior Backend Architect',
        experience: '5+ Years Experience',
        image: jaspalPortrait,
      },
      {
        name: 'Nisha Rao',
        role: 'Senior Backend & Cloud Engineer',
        experience: '5+ Years Experience',
        image: sahiramPortrait,
      },
    ],
  },
  {
    title: 'Growth, Delivery & Product Operations',
    subtitle: 'Strategy, delivery coordination, QA, and customer success across every sprint',
    badge: '03 / DELIVERY CORE',
    members: [
      { name: 'Ishita Sen', role: 'Product Marketing Lead', experience: '4+ Years Experience', image: gaganPortrait },
      { name: 'Dev Malhotra', role: 'QA & Release Engineer', experience: '4+ Years Experience', image: sandeepPortrait },
      { name: 'Kavya Iyer', role: 'Customer Success Partner', experience: '5+ Years Experience', image: jaspalPortrait },
      { name: 'Arjun Rao', role: 'Cloud Support Engineer', experience: '4+ Years Experience', image: sahiramPortrait },
    ],
  },
];

const Team: React.FC = () => {
  return (
    <motion.section
      id="team"
      className="py-20 md:py-28 px-6 bg-white dark:bg-slate-950 overflow-hidden border-t border-slate-100 dark:border-slate-900 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto">
        {/* Compressed Two Sections Layout */}
        <div className="team-section-container">
          {teamSections.map((section, sIdx) => (
            <div key={section.title} className="team-sub-section">
              <div className="team-sub-header">
                <div className="team-sub-header-left">
                  <span className="sub-badge">{section.badge}</span>
                  <h3>{section.title}</h3>
                  <p>{section.subtitle}</p>
                </div>
                <span className="team-sub-badge">
                  {section.members.length} Core Specialists
                </span>
              </div>

              <div className="team-compressed-grid">
                {section.members.map((member, mIdx) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (sIdx * 2 + mIdx) * 0.08, duration: 0.4 }}
                    className="team-compact-card"
                  >
                    {/* ONLY Photo */}
                    <div className="team-compact-avatar-wrap">
                      <img
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    {/* ONLY Name, Experience, and Role */}
                    <div className="team-compact-body">
                      <div className="team-compact-header-row">
                        <h4 className="team-compact-name">{member.name}</h4>
                        <span className="team-compact-exp">{member.experience}</span>
                      </div>
                      <p className="team-compact-role">{member.role}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Team;

