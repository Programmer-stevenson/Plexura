import React, { useState, useEffect } from 'react';
import { Linkedin, Facebook, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  fadeInUp,
  fadeInDown,
  staggerContainer,
  AnimatedSection,
  GlowCard
} from '../components/ui';

// ── Team data ─────────────────────────────────────────────
// `accent` is kept as a literal string so Tailwind's JIT picks up the
// arbitrary gradient classes (needed for the image-fallback below).
const MEMBERS = [
  {
    name: 'Daniel V',
    role: 'Sales Engineer • Growth & Strategy',
    bio: 'Drives client relationships, business development, and marketing strategy. Turns vision into actionable plans that deliver measurable results.',
    img: '/daniel.png',
    initials: 'DV',
    accent: 'from-[#B88348] via-[#D6A84A] to-[#C98072]',
    linkedin: 'https://www.linkedin.com/in/daniel-velez-898195208/',
  },
  {
    name: 'Brandon S',
    role: 'Software Engineer • Product & Development',
    bio: 'Architects and builds every product from the ground up. Full stack engineer specializing in React, Node.js, and scalable cloud infrastructure.',
    img: '/brandon.jpg',
    initials: 'BS',
    accent: 'from-[#F1D078] via-[#D6A84A] to-[#B88348]',
    linkedin: 'https://www.linkedin.com/in/brandonstevensonprograms/',
  },
  {
    name: 'Ed O.',
    role: 'Application Support Analyst',
    bio: 'Keeps client applications running smoothly—handling support requests, troubleshooting issues, and making sure help is fast and reliable.',
    img: '/Ed.jpg',
    initials: 'ED',
    accent: 'from-[#C98072] via-[#D6A84A] to-[#F1D078]',
    linkedin: 'https://www.linkedin.com/in/edwardcoconnelliii/',
  },
];

// ── Avatar (shared by card + popup) ───────────────────────
function Avatar({ member, size }) {
  return (
    <div
      className={`
        ${size}
        rounded-full
        overflow-hidden
        border-2
        border-[#D6A84A]/40
        shadow-lg
        shadow-[#D6A84A]/10
        ring-1
        ring-white/5
      `}
    >
      <img
        src={member.img}
        alt={member.name}
        className="w-full h-full object-cover object-top"
        onError={(e) => {
          e.target.style.display = 'none';

          e.target.parentElement.innerHTML =
            `<div class="w-full h-full bg-gradient-to-br ${member.accent} flex items-center justify-center text-[#08090B] text-4xl font-bold">${member.initials}</div>`;
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
      className="
        p-5
        md:p-8
        bg-gradient-to-br
        from-[#1B1E23]
        via-[#111419]
        to-[#090B0E]
        rounded-2xl
        border
        border-[#D6A84A]/20
        shadow-2xl
        shadow-black/50
        overflow-hidden
        h-full
      "
    >
      <div className="relative flex flex-col h-full">

        {/* Profile Image */}
        <div className="flex justify-center mb-4 md:mb-6">
          <Avatar
            member={member}
            size="w-24 h-24 md:w-32 md:h-32"
          />
        </div>

        {/* Info */}
        <div className="text-center mb-4 md:mb-6 flex-1">

          <h3
            className="
              text-lg
              md:text-2xl
              font-bold
              text-[#F4F5F6]
              mb-1
            "
          >
            {member.name}
          </h3>

          <p
            className="
              bg-gradient-to-r
              from-[#F1D078]
              via-[#D6A84A]
              to-[#C98072]
              bg-clip-text
              text-transparent
              font-semibold
              text-xs
              md:text-sm
              mb-0
              md:mb-3
            "
          >
            {member.role}
          </p>

          {/* Bio hidden on mobile (lives in the See more popup), full from md up */}
          <p
            className="
              hidden
              md:block
              text-[#AEB4BB]
              text-sm
              leading-relaxed
            "
          >
            {member.bio}
          </p>
        </div>

        {/* Buttons pinned to the bottom so every card lines up */}
        <div className="flex flex-col gap-2 mt-auto">

          {/* See more — mobile only */}
          <button
            onClick={onSeeMore}
            className="
              md:hidden
              w-full
              py-2.5
              bg-[#D6A84A]/[0.06]
              border
              border-[#D6A84A]/30
              rounded-xl
              text-[#E2B65A]
              font-semibold
              text-xs
              hover:bg-[#D6A84A]/10
              hover:border-[#F1D078]/50
              hover:text-[#F1D078]
              transition-all
            "
          >
            See more
          </button>

          {/* LinkedIn */}
          <motion.a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              justify-center
              gap-1.5
              w-full
              py-2.5
              md:py-3
              bg-white/[0.035]
              border
              border-[#D9DEE3]/15
              rounded-xl
              text-[#D4D7DB]
              font-semibold
              text-xs
              md:text-sm
              hover:bg-[#D6A84A]/10
              hover:border-[#D6A84A]/40
              hover:text-[#F1D078]
              hover:shadow-[0_0_20px_rgba(214,168,74,0.10)]
              transition-all
              min-w-0
            "
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Linkedin
              size={16}
              className="flex-shrink-0"
            />

            <span className="truncate">
              <span className="md:hidden">
                LinkedIn
              </span>

              <span className="hidden md:inline">
                Connect on LinkedIn
              </span>
            </span>

            <ExternalLink
              size={14}
              className="hidden md:block flex-shrink-0"
            />
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

    const onKey = (e) =>
      e.key === 'Escape' && setActiveMember(null);

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

      <AnimatedSection
        isMobile={isMobile}
        id="team"
        className="
          relative
          py-24
          px-6
          overflow-hidden
          bg-[radial-gradient(circle_at_50%_0%,#25282D_0%,#14171B_38%,#090B0E_72%,#050608_100%)]
        "
      >

        {/* subtle ambient background glow */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
          "
          aria-hidden="true"
        >
          <div
            className="
              absolute
              -top-56
              left-[12%]
              h-[32rem]
              w-[32rem]
              rounded-full
              bg-[#D6A84A]/[0.035]
              blur-[100px]
            "
          />

          <div
            className="
              absolute
              right-[8%]
              top-[28%]
              h-[28rem]
              w-[28rem]
              rounded-full
              bg-[#C98072]/[0.035]
              blur-[100px]
            "
          />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(214,168,74,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(214,168,74,0.25) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">

          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div
              variants={fadeInDown}
              className="mb-5"
            >
              <span
                className="
                  font-mono
                  text-xs
                  tracking-[0.3em]
                  uppercase
                  text-[#D6A84A]
                "
              >
                Our Team
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="
                font-display
                text-4xl
                md:text-6xl
                font-bold
                mb-4
              "
            >
              <span className="text-[#F4F5F6]">
                Meet the{' '}
              </span>

              <span
                className="
                  bg-gradient-to-r
                  from-[#F1D078]
                  via-[#D6A84A]
                  to-[#C98072]
                  bg-clip-text
                  text-transparent
                "
              >
                Team
              </span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="
                text-[#AEB4BB]
                text-xl
                max-w-2xl
                mx-auto
              "
            >
              Two entrepreneurs combining strategy and technology to build
              digital solutions that drive real business growth.
            </motion.p>
          </motion.div>

          {/* ============================================ */}
          {/* TEAM CARDS */}
          {/* ============================================ */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="
              grid
              grid-cols-2
              gap-4
              md:gap-8
              mb-16
            "
          >

            {/* Founders */}
            {MEMBERS.slice(0, 2).map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
              >
                <TeamCard
                  member={member}
                  isMobile={isMobile}
                  onSeeMore={() =>
                    setActiveMember(member)
                  }
                />
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
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
                className="
                  w-[calc(50%-0.5rem)]
                  md:w-[calc(50%-1rem)]
                "
              >
                <TeamCard
                  member={MEMBERS[2]}
                  isMobile={isMobile}
                  onSeeMore={() =>
                    setActiveMember(MEMBERS[2])
                  }
                />
              </motion.div>
            </div>
          </motion.div>

          {/* ============================================ */}
          {/* COMPANY SOCIAL LINKS */}
          {/* ============================================ */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="
              flex
              flex-col
              items-center
              gap-6
            "
          >
            <p
              className="
                text-[#D6A84A]
                text-sm
                uppercase
                tracking-wider
                font-semibold
              "
            >
              Follow Plexura
            </p>

            <div className="flex items-center gap-4">

              {/* LinkedIn */}
              <motion.a
                href="https://www.linkedin.com/company/plexura/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  bg-white/[0.035]
                  border
                  border-[#D6A84A]/25
                  rounded-xl
                  text-[#D4D7DB]
                  font-semibold
                  text-sm
                  hover:bg-[#D6A84A]
                  hover:border-[#D6A84A]
                  hover:text-[#08090B]
                  hover:shadow-[0_0_22px_rgba(214,168,74,0.18)]
                  transition-all
                "
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Linkedin size={18} />
                LinkedIn
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="https://www.facebook.com/profile.php?id=61582922265027"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  bg-white/[0.035]
                  border
                  border-[#C98072]/25
                  rounded-xl
                  text-[#D4D7DB]
                  font-semibold
                  text-sm
                  hover:bg-[#C98072]
                  hover:border-[#C98072]
                  hover:text-[#08090B]
                  hover:shadow-[0_0_22px_rgba(201,128,114,0.18)]
                  transition-all
                "
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Facebook size={18} />
                Facebook
              </motion.a>

              {/* Google */}
              <motion.a
                href="https://www.google.com/search?q=plexura"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  gap-2
                  px-6
                  py-3
                  bg-white/[0.035]
                  border
                  border-[#D9DEE3]/20
                  rounded-xl
                  text-[#D4D7DB]
                  font-semibold
                  text-sm
                  hover:bg-[#D9DEE3]
                  hover:border-[#D9DEE3]
                  hover:text-[#08090B]
                  transition-all
                "
                whileHover={{
                  scale: 1.05,
                  y: -2
                }}
                whileTap={{ scale: 0.98 }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="flex-shrink-0"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />

                  <path
                    fill="#FF3D00"
                    d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                  />

                  <path
                    fill="#4CAF50"
                    d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                  />

                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
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
            className="
              fixed
              inset-0
              z-[100]
              flex
              items-center
              justify-center
              p-4
            "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >

            {/* Backdrop — tap to close */}
            <motion.div
              className="
                absolute
                inset-0
                bg-[#050608]/85
                backdrop-blur-md
              "
              onClick={() =>
                setActiveMember(null)
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Popup card */}
            <motion.div
              className="
                relative
                z-10
                w-full
                max-w-sm
                bg-gradient-to-br
                from-[#1B1E23]
                via-[#111419]
                to-[#090B0E]
                rounded-2xl
                border
                border-[#D6A84A]/25
                shadow-2xl
                shadow-black/60
                p-6
                overflow-hidden
              "
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 20
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 10
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 26
              }}
            >

              {/* popup ambient glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -top-24
                  left-1/2
                  h-52
                  w-52
                  -translate-x-1/2
                  rounded-full
                  bg-[#D6A84A]/10
                  blur-[65px]
                "
              />

              {/* Close / exit button */}
              <button
                onClick={() =>
                  setActiveMember(null)
                }
                aria-label="Close"
                className="
                  absolute
                  top-3
                  right-3
                  z-20
                  w-9
                  h-9
                  flex
                  items-center
                  justify-center
                  rounded-full
                  bg-white/[0.05]
                  border
                  border-[#D9DEE3]/10
                  text-[#AEB4BB]
                  hover:bg-[#D6A84A]/10
                  hover:border-[#D6A84A]/40
                  hover:text-[#F1D078]
                  transition-all
                "
              >
                <X size={18} />
              </button>

              <div
                className="
                  relative
                  z-10
                  flex
                  flex-col
                  items-center
                  text-center
                  pt-2
                "
              >
                <div className="mb-4">
                  <Avatar
                    member={activeMember}
                    size="w-28 h-28"
                  />
                </div>

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#F4F5F6]
                    mb-1
                  "
                >
                  {activeMember.name}
                </h3>

                <p
                  className="
                    bg-gradient-to-r
                    from-[#F1D078]
                    via-[#D6A84A]
                    to-[#C98072]
                    bg-clip-text
                    text-transparent
                    font-semibold
                    text-sm
                    mb-4
                  "
                >
                  {activeMember.role}
                </p>

                <p
                  className="
                    text-[#AEB4BB]
                    text-sm
                    leading-relaxed
                    mb-6
                  "
                >
                  {activeMember.bio}
                </p>

                <motion.a
                  href={activeMember.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2
                    w-full
                    py-3
                    bg-[#D6A84A]/[0.07]
                    border
                    border-[#D6A84A]/30
                    rounded-xl
                    text-[#E2B65A]
                    font-semibold
                    text-sm
                    hover:bg-gradient-to-r
                    hover:from-[#B88348]
                    hover:via-[#D6A84A]
                    hover:to-[#F1D078]
                    hover:text-[#08090B]
                    hover:border-[#D6A84A]
                    hover:shadow-[0_0_24px_rgba(214,168,74,0.18)]
                    transition-all
                  "
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