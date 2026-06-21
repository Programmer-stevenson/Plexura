import React, { useState, useEffect } from 'react';
import { Linkedin, Facebook, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fadeInDown, staggerContainer, AnimatedSection, GlowCard } from '../components/ui';

// ── Team data ─────────────────────────────────────────────
// `accent` is kept as a literal string so Tailwind's JIT picks up the
// arbitrary gradient classes (needed for the image-fallback below).
const MEMBERS = [
  {
    name: 'Daniel V',
    role: 'Sales Engineer \u2022 Growth & Strategy',
    bio: 'Drives client relationships, business development, and marketing strategy. Turns vision into actionable plans that deliver measurable results.',
    img: '/daniel.png',
    initials: 'DV',
    accent: 'from-[#EA580C] to-[#F87171]',
    linkedin: 'https://www.linkedin.com/in/daniel-velez-898195208/',
  },
  {
    name: 'Brandon S',
    role: 'Software Engineer \u2022 Product & Development',
    bio: 'Architects and builds every product from the ground up. Full stack engineer specializing in React, Node.js, and scalable cloud infrastructure.',
    img: '/brandon.jpg',
    initials: 'BS',
    accent: 'from-[#EA580C] to-[#EA580C]',
    linkedin: 'https://www.linkedin.com/in/brandonstevensonprograms/',
  },
  {
    name: 'Ed O.',
    role: 'Application Support Analyst',
    bio: 'Keeps client applications running smoothly\u2014handling support requests, troubleshooting issues, and making sure help is fast and reliable.',
    img: '/Ed.jpg',
    initials: 'ED',
    accent: 'from-[#EA580C] to-[#F87171]',
    linkedin: 'https://www.linkedin.com/in/edwardcoconnelliii/',
  },
];

// ── Avatar (shared by card + popup) ───────────────────────
function Avatar({ member, size }) {
  return (
    <div className={`${size} rounded-full overflow-hidden border-2 border-[#EA580C]/40 shadow-lg shadow-[#EA580C]/10`}>
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-full object-cover object-top"
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.parentElement.innerHTML =
            `<div class="w-full h-full bg-gradient-to-br ${member.accent} flex items-center justify-center text-white text-4xl font-bold">${member.initials}</div>`;
        }}
      />
    </div>
  );
}

// ── Card ──────────────────────────────────────────────────
function TeamCard({ member, isMobile, onSeeMore }) {
  return (
    <GlowCard
      isMobile={isMobile}
      className="p-5 md:p-8 bg-white rounded-2xl border border-white/60 shadow-2xl shadow-[#0A1022]/30 overflow-hidden h-full"
    >
      <div className="relative flex flex-col h-full">
        {/* Profile Image */}
        <div className="flex justify-center mb-4 md:mb-6">
          <Avatar member={member} size="w-24 h-24 md:w-32 md:h-32" />
        </div>

        {/* Info */}
        <div className="text-center mb-4 md:mb-6 flex-1">
          <h3 className="text-lg md:text-2xl font-bold text-[#142433] mb-1">{member.name}</h3>
          <p className="text-[#0D9488] font-semibold text-xs md:text-sm mb-0 md:mb-3">{member.role}</p>
          {/* Bio hidden on mobile (lives in the See more popup), full from md up */}
          <p className="hidden md:block text-[#51606E] text-sm leading-relaxed">
            {member.bio}
          </p>
        </div>

        {/* Buttons pinned to the bottom so every card lines up */}
        <div className="flex flex-col gap-2 mt-auto">
          {/* See more — mobile only (desktop already shows the full bio) */}
          <button
            onClick={onSeeMore}
            className="md:hidden w-full py-2.5 bg-[#F0FDFA] border border-[#14B8A6]/40 rounded-xl text-[#0D9488] font-semibold text-xs hover:bg-[#14B8A6]/10 transition-all"
          >
            See more
          </button>

          {/* LinkedIn — shrink-safe so it never overflows the card */}
          <motion.a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 w-full py-2.5 md:py-3 bg-[#0A66C2]/10 border border-[#0A66C2]/40 rounded-xl text-[#0A66C2] font-semibold text-xs md:text-sm hover:bg-[#0A66C2]/20 transition-all min-w-0"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Linkedin size={16} className="flex-shrink-0" />
            <span className="truncate">
              <span className="md:hidden">LinkedIn</span>
              <span className="hidden md:inline">Connect on LinkedIn</span>
            </span>
            <ExternalLink size={14} className="hidden md:block flex-shrink-0" />
          </motion.a>
        </div>
      </div>
    </GlowCard>
  );
}

export default function Team({ isMobile }) {
  const [activeMember, setActiveMember] = useState(null);

  // Lock background scroll + close on Escape while the popup is open
  useEffect(() => {
    if (!activeMember) return;
    const onKey = (e) => e.key === 'Escape' && setActiveMember(null);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [activeMember]);

  return (
    <>
      {/* ============================================ */}
      {/* OUR TEAM SECTION */}
      {/* ============================================ */}
      <AnimatedSection isMobile={isMobile} id="team" className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInDown} className="mb-5">
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#0D9488]">Our Team</span>
            </motion.div>

            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">Meet the </span>
              <span className="bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] bg-clip-text text-transparent">
                Team
              </span>
            </motion.h2>

            <motion.p variants={fadeInUp} className="text-[#5B6B7A] text-xl max-w-2xl mx-auto">
              Two entrepreneurs combining strategy and technology to build digital solutions that drive real business growth.
            </motion.p>
          </motion.div>

          {/* Team Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 gap-4 md:gap-8 mb-16"
          >
            {/* Founders */}
            {MEMBERS.slice(0, 2).map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <TeamCard member={member} isMobile={isMobile} onSeeMore={() => setActiveMember(member)} />
              </motion.div>
            ))}

            {/* Ed — centered beneath the founders */}
            <div className="col-span-2 flex justify-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="w-[calc(50%-0.5rem)] md:w-[calc(50%-1rem)]"
              >
                <TeamCard member={MEMBERS[2]} isMobile={isMobile} onSeeMore={() => setActiveMember(MEMBERS[2])} />
              </motion.div>
            </div>
          </motion.div>

          {/* Company Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-6"
          >
            <p className="text-[#EA580C] text-sm uppercase tracking-wider font-semibold">Follow Plexura</p>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://www.linkedin.com/company/plexura/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#F0FDFA] border border-[#14B8A6]/40 rounded-xl text-[#0D9488] font-semibold text-sm hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin size={18} />
                LinkedIn
              </motion.a>
              <motion.a
                href="https://www.facebook.com/profile.php?id=61582922265027"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#F0FDFA] border border-[#14B8A6]/40 rounded-xl text-[#0D9488] font-semibold text-sm hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Facebook size={18} />
                Facebook
              </motion.a>
              <motion.a
                href="https://www.google.com/search?q=plexura"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-[#F0FDFA] border border-[#14B8A6]/40 rounded-xl text-[#0D9488] font-semibold text-sm hover:bg-[#4285F4] hover:border-[#4285F4] hover:text-white transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg width="18" height="18" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="flex-shrink-0">
                  <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
                  <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
                  <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
                  <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
                </svg>
                Google
              </motion.a>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ============================================ */}
      {/* SEE-MORE POPUP */}
      {/* ============================================ */}
      <AnimatePresence>
        {activeMember && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop — tap to close */}
            <motion.div
              className="absolute inset-0 bg-[#0A1022]/70 backdrop-blur-sm"
              onClick={() => setActiveMember(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Popup card (zooms in) */}
            <motion.div
              className="relative z-10 w-full max-w-sm bg-white rounded-2xl border border-white/60 shadow-2xl shadow-[#0A1022]/40 p-6"
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26 }}
            >
              {/* Close / exit button */}
              <button
                onClick={() => setActiveMember(null)}
                aria-label="Close"
                className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-[#F1F5F9] text-[#51606E] hover:bg-[#E2E8F0] hover:text-[#142433] transition-all"
              >
                <X size={18} />
              </button>

              <div className="flex flex-col items-center text-center pt-2">
                <div className="mb-4">
                  <Avatar member={activeMember} size="w-28 h-28" />
                </div>

                <h3 className="text-2xl font-bold text-[#142433] mb-1">{activeMember.name}</h3>
                <p className="text-[#0D9488] font-semibold text-sm mb-4">{activeMember.role}</p>
                <p className="text-[#51606E] text-sm leading-relaxed mb-6">{activeMember.bio}</p>

                <motion.a
                  href={activeMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-[#0A66C2]/10 border border-[#0A66C2]/40 rounded-xl text-[#0A66C2] font-semibold text-sm hover:bg-[#0A66C2]/20 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Linkedin size={18} />
                  Connect on LinkedIn
                  <ExternalLink size={14} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}