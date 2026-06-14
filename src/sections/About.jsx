import React from 'react';
import { Code, Smartphone, Globe, Layers, TrendingUp, Target, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, fadeInRight, staggerContainer, staggerContainerFast, AnimatedSection } from '../components/ui';

export default function About({ isMobile }) {
  return (
    <>
      {/* ABOUT — manifesto, capabilities, process */}
      {/* ============================================ */}
      <AnimatedSection isMobile={isMobile} id="about" className="relative py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">

          {/* header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-14 lg:mb-20 text-center lg:text-left"
          >
            <motion.p variants={fadeInDown} className="font-mono text-xs tracking-[0.3em] uppercase text-[#2DD4BF] mb-5">
              How We Build
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold text-white leading-[1.02]">
              Custom Code. <span className="bg-gradient-to-r from-[#5EEAD4] to-[#2DD4BF] bg-clip-text text-transparent">Real Results.</span>
            </motion.h2>
          </motion.div>

          {/* manifesto + performance rail */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-24">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-7 space-y-8 bg-white rounded-3xl p-8 lg:p-10 border border-white/60 shadow-2xl shadow-black/30"
            >
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl lg:text-[1.7rem] leading-snug text-[#142433] font-medium">
                Every website we build is <span className="text-[#0D9488] underline decoration-[#2DD4BF] decoration-4 underline-offset-4">100% custom design</span> using the MERN stack—MongoDB, Headless CMS, Express.js, React, and Node.js. No templates, no page builders, no cookie-cutter solutions.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed text-[#51606E]">
                Our custom designs are crafted from scratch to match your brand identity. We create unique user experiences that set you apart from competitors using the same tired templates.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-lg md:text-xl leading-relaxed text-[#51606E]">
                Need something simpler? We also offer <span className="text-[#0D9488] font-semibold">Headless WordPress solutions</span> with custom Frontend Design In React for businesses that need speed to market with ongoing maintenance support.
              </motion.p>

              {/* tech rule */}
              <motion.div variants={fadeInUp} className="flex flex-wrap gap-2.5 pt-6 border-t border-[#142433]/10">
                {["MongoDB", "Express.js", "React", "Node.js", "WordPress"].map((tech, i) => (
                  <span key={i} className="font-mono text-[11px] uppercase tracking-[0.15em] px-3.5 py-2 rounded-full bg-[#FFF7ED] border border-[#EA580C]/20 text-[#0D9488]">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* SEO & performance rail */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-5 bg-white rounded-3xl p-8 lg:p-10 border border-white/60 shadow-2xl shadow-black/30"
            >
              <motion.p variants={fadeInDown} className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#51606E] mb-2">
                SEO & Site Performance
              </motion.p>
              <div className="divide-y divide-[#142433]/10 border-y border-[#142433]/10">
                {[
                  { icon: TrendingUp, title: 'Search Engine Optimization', description: 'Rank higher, get found organically' },
                  { icon: Target, title: 'Conversion Optimization', description: 'Turn visitors into customers' },
                  { icon: Globe, title: 'Performance Optimization', description: 'Fast loads, strong Core Web Vitals' },
                  { icon: Layers, title: 'Analytics & Tracking', description: 'Data-driven decisions' }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInRight}
                    className="group flex items-center gap-5 py-5 cursor-default"
                    whileHover={!isMobile ? { x: 8 } : undefined}
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C2410C] to-[#EA580C] flex items-center justify-center flex-shrink-0">
                      <value.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#142433]">{value.title}</h4>
                      <p className="text-sm text-[#51606E]">{value.description}</p>
                    </div>
                    <ArrowUpRight size={16} className="ml-auto text-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* capability cells */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainerFast}
            className="grid grid-cols-2 lg:grid-cols-4 rounded-3xl overflow-hidden mb-16 lg:mb-24 bg-white border border-white/60 shadow-2xl shadow-black/30"
          >
            {[
              { icon: Code, title: 'MERN Stack', description: 'MongoDB, Express, React, Node' },
              { icon: Smartphone, title: 'Custom Design', description: 'Unique, branded experiences' },
              { icon: Globe, title: 'WordPress Option', description: 'When you need speed to market' },
              { icon: TrendingUp, title: 'SEO Included', description: 'Built for search engines' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`p-6 lg:p-8 ${index % 2 === 1 ? 'border-l' : ''} ${index >= 2 ? 'border-t lg:border-t-0' : ''} ${index > 0 ? 'lg:border-l' : ''} border-[#142433]/10 group hover:bg-white/70 transition-colors`}
              >
                <item.icon size={22} className="text-[#0D9488] mb-5 group-hover:text-[#0D9488] transition-colors" />
                <h4 className="font-display text-lg font-bold text-[#142433] mb-1.5">{item.title}</h4>
                <p className="text-sm text-[#51606E] leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          
        </div>
      </AnimatedSection>

    </>
  );
}
