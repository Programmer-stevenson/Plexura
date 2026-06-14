import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight, ArrowUpRight, Plus, Code, Globe, Layers } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, fadeInDown, staggerContainer, AnimatedSection } from '../components/ui';

const services = [
    {
      icon: Code,
      title: "Custom Web Development",
      description: "Enterprise-grade full stack applications built from the ground up. Hand-coded, scalable solutions using React, Node.js, and modern frameworks—no templates, no shortcuts.",
      features: ["Full Stack Development", "Custom Code & Architecture", "Scalable Infrastructure", "API Development & Integrations"],
      highlights: ["100% Hand-Coded, No Templates", "MERN Stack (MongoDB, Express, React, Node)", "Ongoing Support & Maintenance Available"],
      color: "from-[#EA580C] to-[#EA580C]"
    },
    {
      icon: Globe,
      title: "WordPress Solutions",
      description: "Professional WordPress websites for businesses that need speed to market. Custom themes, plugins, and performance optimizations—built to launch fast and built to last.",
      features: ["Custom Theme Development", "Plugin Customization", "Speed Optimization", "WooCommerce Integration"],
      highlights: ["Custom Themes & Child Themes", "WooCommerce & Plugin Integration", "Launch-Ready in Weeks, Not Months"],
      color: "from-[#EA580C] to-[#EA580C]"
    },
    {
      icon: Layers,
      title: "Web Applications",
      description: "Complex web applications that power your business operations. From SaaS platforms to custom dashboards, we build production-ready systems that scale with your growth.",
      features: ["SaaS Development", "Database Architecture", "Real-time Features", "Cloud Deployment"],
      highlights: ["SaaS & Dashboard Platforms", "Real-Time Data & WebSocket Integration", "Cloud-Deployed & Auto-Scaling"],
      color: "from-[#EA580C] to-[#EA580C]"
    }
  ];

export default function Services({ isMobile, activeService, setActiveService }) {
  return (
    <>
      {/* SERVICES — numbered index, expanding rows */}
      {/* ============================================ */}
      <AnimatedSection isMobile={isMobile} id="services" className="overview relative py-24 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">

          {/* editorial header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-12 gap-6 items-end mb-12 lg:mb-16"
          >
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.p variants={fadeInDown} className="font-mono text-xs tracking-[0.3em] uppercase text-[#2DD4BF] mb-5">
                What We Build
              </motion.p>
              <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold text-white leading-[1.02]">
                Full Stack <span className="text-[#2DD4BF]">Web Solutions</span>
              </motion.h2>
            </div>
            <motion.p variants={fadeInUp} className="lg:col-span-5 text-[#5B6B7A] text-lg leading-relaxed text-center lg:text-left lg:pb-2">
              Custom-coded web applications, scalable architectures, and hand-built solutions that deliver measurable ROI
            </motion.p>
          </motion.div>

          {/* index rows */}
          <div className="bg-white rounded-[2rem] px-6 lg:px-10 py-1 border border-white/60 shadow-2xl shadow-black/40">
            {services.map((service, index) => {
              const isActive = activeService === index;
              return (
                <div key={index} className="border-b border-[#142433]/10">
                  <button
                    onClick={() => setActiveService(isActive ? null : index)}
                    className="w-full group grid grid-cols-12 items-center gap-3 lg:gap-4 py-7 lg:py-10 text-left"
                  >
                    <span className={`col-span-10 lg:col-span-7 font-display text-2xl md:text-4xl lg:text-[2.6rem] font-bold leading-tight transition-colors duration-300 ${isActive ? 'text-[#0D9488]' : 'text-[#142433] group-hover:text-[#0D9488]'}`}>
                      {service.title}
                    </span>
                    <span className="hidden lg:flex col-span-4 flex-wrap gap-2">
                      {service.features.slice(0, 2).map((f, fi) => (
                        <span key={fi} className="font-mono text-[10px] uppercase tracking-[0.15em] px-3 py-1.5 rounded-full border border-[#142433]/15 text-[#51606E]">
                          {f}
                        </span>
                      ))}
                    </span>
                    <span className={`col-span-2 lg:col-span-1 justify-self-end w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-[#FB923C] border-[#FB923C] text-white rotate-45' : 'border-[#142433]/20 text-[#142433] group-hover:border-[#EA580C] group-hover:text-[#0D9488]'}`}>
                      <Plus size={18} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="grid lg:grid-cols-12 gap-8 pb-10 lg:pb-12">
                          <p className="lg:col-span-5 text-[#51606E] leading-relaxed text-base lg:text-lg">
                            {service.description}
                          </p>
                          <div className="lg:col-span-4 space-y-2.5">
                            {service.features.map((feature, fi) => (
                              <div key={fi} className="flex items-start gap-2.5 text-sm text-[#142433]/80">
                                <Check size={15} className="text-[#0D9488] mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>
                          <div className="lg:col-span-3 flex flex-col justify-between gap-6">
                            <div className="space-y-2.5">
                              {service.highlights.map((hl, hi) => (
                                <div key={hi} className="flex items-start gap-2.5 text-sm text-[#51606E]">
                                  <span className="w-1.5 h-1.5 mt-1.5 bg-[#FB923C] rounded-full flex-shrink-0" />
                                  <span>{hl}</span>
                                </div>
                              ))}
                            </div>
                            <a
                              href="#contact"
                              className="inline-flex items-center gap-2 font-semibold text-[#0D9488] hover:gap-3 transition-all"
                            >
                              Get Started <ArrowRight size={16} />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* view all */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-end mt-8"
          >
            <Link
  to="/services"
  onClick={() => window.scrollTo(0, 0)}
  className="group inline-flex items-center gap-2 font-semibold text-[#EA580C] hover:text-[#FB923C] transition-colors"
>
  <span className="font-mono text-xs tracking-[0.25em] uppercase">View All Services</span>
  <span className="w-9 h-9 rounded-full border border-[#EA580C]/40 group-hover:border-[#EA580C] group-hover:bg-[#EA580C] group-hover:text-white flex items-center justify-center transition-all">
    <ArrowUpRight size={16} />
  </span>
</Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ============================================ */}
    </>
  );
}
