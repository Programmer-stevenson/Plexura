import React from 'react';
import { Code, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, staggerContainer, AnimatedSection } from '../components/ui';

export default function CTA({ isMobile }) {
  return (
    <>
      {/* CTA — full-bleed red panel */}
      {/* ============================================ */}
      <AnimatedSection isMobile={isMobile} className="relative py-20 lg:py-28 px-6">
        <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-white px-8 py-16 lg:px-16 lg:py-24 border border-white/60 shadow-2xl shadow-black/40">

          {/* texture */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(115deg, #14B8A6 0, #14B8A6 1px, transparent 1px, transparent 80px)'
            }}
          />
          <div className="absolute -bottom-16 -right-10 font-display font-extrabold text-[#14B8A6]/[0.07] text-[10rem] lg:text-[16rem] leading-none select-none pointer-events-none tracking-tight">
            BUILD
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative max-w-3xl text-center lg:text-left"
          >
            <motion.p variants={fadeInDown}  className="font-mono text-xs tracking-[0.3em] uppercase text-[#0D9488] mb-6">
              Start Your Project
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-[#142433] leading-[1.02] mb-6">
              Ready to Build Something That Actually Scales?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg md:text-xl text-[#51606E] max-w-2xl mb-10">
              Let's talk about your project. Custom web development, enterprise applications, and platforms that drive real results.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="group px-9 py-4 bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] text-[#06201C] text-lg font-bold rounded-full flex items-center justify-center gap-2 shadow-xl shadow-[#2DD4BF]/30"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Get a Quote
                <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowRight size={20} />
                </motion.span>
              </motion.a>
              <motion.a
                href="tel:+18013478072"
                className="group px-9 py-4 border-2 border-[#EA580C]/30 hover:border-[#EA580C] text-[#EA580C] text-lg font-semibold rounded-full flex items-center justify-center gap-2 transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={20} />
                Schedule a Call
              </motion.a>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-x-10 gap-y-4 mt-12 pt-8 border-t border-[#142433]/10"
            >
              {[
                { value: "100%", label: "Custom Code" },
                { value: "Full", label: "Stack Expertise" },
                { value: "SEO", label: "Included" }
              ].map((item, i) => (
                <div key={i} className="flex items-baseline gap-2.5">
                  <span className="font-display text-2xl lg:text-3xl font-bold text-[#0D9488]">{item.value}</span>
                  <span className="text-sm text-[#51606E]">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>
{/* ============================================ */}
    </>
  );
}
