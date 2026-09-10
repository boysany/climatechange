import React from 'react';
import { motion as m } from 'framer-motion';
import TiltCard from '../components/TiltCard.tsx';
import { AUTHENTIC_TEAM_MEMBERS, TeamMember } from '../lib/teamData.ts';

const motion = m as any;

interface SquadSection {
  title: string;
  subtitle: string;
  badge: string;
  members: TeamMember[];
}

const teamSections: SquadSection[] = [
  {
    title: 'Design & Frontend Leadership',
    subtitle: 'Interface design, visual architecture & high-speed frontend engineering',
    badge: '01 / CREATIVE CORE',
    members: AUTHENTIC_TEAM_MEMBERS.slice(0, 2),
  },
  {
    title: 'Backend Architecture & Cloud Systems',
    subtitle: 'Distributed services, database schemas & secure cloud infrastructure',
    badge: '02 / SYSTEMS CORE',
    members: AUTHENTIC_TEAM_MEMBERS.slice(2, 4),
  },
  {
    title: 'Growth, Delivery & Product Operations',
    subtitle: 'Strategy, delivery coordination, QA, and customer success across every sprint',
    badge: '03 / DELIVERY CORE',
    members: AUTHENTIC_TEAM_MEMBERS.slice(4, 8),
  },
];

const Team: React.FC = () => {
  return (
    <motion.section
      id="team"
      className="py-20 md:py-28 px-6 bg-white dark:bg-slate-950 overflow-hidden border-t border-slate-100 dark:border-slate-900 transition-colors duration-700"
    >
      <div className="max-w-6xl mx-auto">
        {/* Compressed Squad Sections Layout */}
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
                  >
                    <TiltCard
                      className="team-compact-card"
                      maxTilt={8}
                      scale={1.02}
                      glare={true}
                    >
                      <div
                        className="team-compact-avatar-wrap"
                        data-cursor="PROFILE"
                        aria-label={`${member.name} — ${member.role}`}
                      >
                        {member.image ? (
                          <img src={member.image} alt={`${member.name} — ${member.role}`} loading="lazy" />
                        ) : (
                          <>
                            <span aria-hidden="true">{member.name.split(' ').map((part) => part[0]).join('')}</span>
                            <small aria-hidden="true">INDIA</small>
                          </>
                        )}
                      </div>

                      {/* Name, Experience, and Role */}
                      <div className="team-compact-body">
                        <div className="team-compact-header-row">
                          <h4 className="team-compact-name">{member.name}</h4>
                          <span className="team-compact-exp">{member.experience}</span>
                        </div>
                        <p className="team-compact-role">{member.role}</p>
                      </div>
                    </TiltCard>
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
