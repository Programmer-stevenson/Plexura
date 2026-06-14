import React from 'react';
import { Code, ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { letterAnimation } from '../components/ui';
import HeroCanvas from '../components/heroCanvas';

export default function Hero({ mobileMenuOpen }) {
  return (
    <>
      {/* ============================================ */}
      {/* HERO — editorial, oversized display type */}
      {/* ============================================ */}
      <section
        id="home"
        className={`relative min-h-screen flex flex-col justify-center pt-32 lg:pt-40 overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'lg:pt-40 pt-[420px]' : ''}`}
      >
        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">

          {/* mono meta strip */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start items-center gap-x-5 gap-y-2 font-mono text-[11px] tracking-[0.25em] uppercase text-[#AEBAC4] mb-8 lg:mb-12"
          >
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
              Accepting Projects
            </span>
            <span className="hidden sm:inline text-[#F4FAFB]/20">/</span>
            <span>Las Vegas · Salt Lake City</span>
            <span className="hidden sm:inline text-[#F4FAFB]/20">/</span>
            <span className="hidden md:inline">Full-Stack Web Studio</span>
          </motion.div>

          {/* headline + overlapping cube */}
          <div className="relative">
            <h1 className="font-display font-extrabold leading-[0.96] tracking-tight text-[clamp(2.9rem,8vw,7.5rem)] text-[#F4FAFB] text-center lg:text-left lg:pr-[24rem] xl:pr-[26rem]">
              <motion.span className="block">
                {"Make It Work.".split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterAnimation}
                    initial="hidden"
                    animate="visible"
                    className={char === " " ? "inline-block w-[0.3em]" : "inline-block"}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-[#5EEAD4] via-[#2DD4BF] to-[#14B8A6] bg-clip-text text-transparent pb-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Make it Brilliant!
              </motion.span>
            </h1>

            {/* cube — desktop, breaking the grid on the right */}
            <motion.div
              className="hidden lg:block absolute -top-24 xl:-top-28 -right-10 w-[26rem] h-[26rem] xl:w-[29rem] xl:h-[29rem] pointer-events-none"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <HeroCanvas className="absolute inset-0" />
            </motion.div>
          </div>

          {/* cube — mobile, between headline and copy */}
          <motion.div
            className="lg:hidden relative w-full h-72 my-6"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <HeroCanvas className="absolute inset-0" />
          </motion.div>

          {/* baseline rule: copy left, actions right */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="mt-10 lg:mt-16 grid lg:grid-cols-12 gap-8 items-end border-t border-[#F4FAFB]/10 pt-8"
          >
            <p className="lg:col-span-6 text-lg md:text-xl text-[#1B222A] leading-relaxed max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              Plexura designs and engineers high-performance websites, brands, and digital platforms for growing companies—custom-built, fully integrated, and engineered for results.
            </p>
            <div className="lg:col-span-6 flex flex-wrap justify-center lg:justify-end items-center gap-4">
              <motion.a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] rounded-full text-black font-bold text-base overflow-hidden shadow-xl shadow-[#2DD4BF]/30"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-[#0D9488] to-[#14B8A6]"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative flex items-center gap-2">
                  Start Your Project
                  <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                    <ArrowRight size={18} />
                  </motion.span>
                </span>
              </motion.a>
              <motion.a
                href="#services"
                className="group inline-flex items-center gap-2 font-semibold text-[#C2410C] border-b-2 border-[#142433]/20 hover:border-[#FB923C] pb-1 transition-colors"
                whileTap={{ scale: 0.98 }}
              >
                View Services
                <ArrowUpRight size={18} className="text-[#FB923C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* marquee ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-14 lg:mt-20 border-y border-[#2DD4BF]/30 bg-[#11161C] overflow-hidden relative z-10"
        >
          <div
            className="pl-anim flex w-max whitespace-nowrap py-4 font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-[#CFFAF4]"
            style={{ animation: 'pl-marquee 32s linear infinite', '--pl-anim': 'pl-marquee 32s linear infinite' }}
          >
            {[0, 1].map((dup) => (
              <div key={dup} className="flex items-center shrink-0">
                {["React", "Node.js", "MongoDB", "Express", "WordPress", "Custom Code", "SEO Engineered", "Web Apps", "UI Engineering", "E-Commerce"].map((w, i) => (
                  <span key={i} className="flex items-center">
                    <span className="px-7">{w}</span>
                    <span className="text-[#5EEAD4] text-base leading-none">✳</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ============================================ */}
    </>
  );
}