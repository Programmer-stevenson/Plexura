import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, staggerContainer, AnimatedSection } from '../components/ui';

export default function CTA({ isMobile }) {
  return (
    <>
      {/* ============================================ */}
      {/* CTA — compact circular panel */}
      {/* ============================================ */}
      <AnimatedSection
        isMobile={isMobile}
        className="relative px-4 py-10 sm:px-6 lg:py-20"
      >
        <div className="relative mx-auto flex aspect-square w-full max-w-[350px] items-center justify-center overflow-hidden rounded-full border border-white/70 bg-white px-7 shadow-2xl shadow-black/25 sm:max-w-[460px] md:max-w-[540px] lg:max-w-[620px]">

          {/* texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(115deg, #14B8A6 0, #14B8A6 1px, transparent 1px, transparent 80px)'
            }}
          />

          {/* inner teal glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2DD4BF]/20 blur-3xl" />

          {/* accent glow */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#14B8A6]/20 blur-3xl" />

          {/* decorative word */}
          <div className="pointer-events-none absolute bottom-3 left-1/2 hidden -translate-x-1/2 select-none font-display text-[5rem] font-extrabold leading-none tracking-tight text-[#0D9488]/[0.06] md:block lg:text-[8rem]">
            GROW
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative z-10 mx-auto max-w-[390px] text-center"
          >
            <motion.div
              variants={fadeInDown}
              className="mx-auto mb-3 inline-flex rounded-full border border-[#14B8A6]/20 bg-[#14B8A6]/10 px-3 py-1.5 backdrop-blur"
            >
              <p className="font-mono text-[0.5rem] font-semibold uppercase tracking-[0.18em] text-[#0D9488] sm:text-[0.62rem]">
                Growth System
              </p>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="mx-auto mb-3 max-w-[340px] font-display text-[1.45rem] font-bold leading-[1.03] tracking-tight text-[#142433] sm:text-[2rem] md:text-[2.45rem] lg:text-[3rem]"
            >
              Turn More Visitors Into Customers
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="mx-auto mb-5 max-w-[310px] text-xs leading-relaxed text-[#344554] sm:max-w-[360px] sm:text-sm md:text-base"
            >
              Build a sharper website and follow-up system that captures and converts more leads.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:gap-3"
            >
              <motion.a
                href="#contact"
                className="group inline-flex w-fit items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] px-4 py-2.5 text-xs font-bold text-[#06201C] shadow-lg shadow-[#2DD4BF]/25 sm:px-5 sm:py-3 sm:text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Build System
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={15} />
                </motion.span>
              </motion.a>

              <motion.a
                href="tel:+18013478072"
                className="group inline-flex w-fit items-center justify-center gap-1.5 rounded-full border-2 border-[#EA580C]/35 bg-white/70 px-4 py-2.5 text-xs font-semibold text-[#EA580C] backdrop-blur transition-colors hover:border-[#EA580C] hover:bg-[#EA580C]/5 sm:px-5 sm:py-3 sm:text-sm"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={15} />
                Call
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>
      {/* ============================================ */}
    </>
  );
}