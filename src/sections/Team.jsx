import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Target, Linkedin, Facebook, ExternalLink, LifeBuoy } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, fadeInDown, staggerContainer, AnimatedSection, GlowCard } from '../components/ui';

export default function Team({ isMobile }) {
  return (
    <>
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
              <span className="font-mono text-xs tracking-[0.3em] uppercase text-[#0D9488]">The Founders</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold mb-4">
              <span className="text-white">Meet the </span>
              <span className="bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] bg-clip-text text-transparent">
                Founders
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
            {/* Daniel Velez */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <GlowCard isMobile={isMobile} className="p-5 md:p-8 bg-white rounded-2xl border border-white/60 shadow-2xl shadow-[#0A1022]/30 overflow-hidden h-full">
                <div className="relative">
                  {/* Profile Image */}
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-[#EA580C]/40 shadow-lg shadow-[#EA580C]/10">
                        <img 
                          src="/daniel.png" 
                          alt="Daniel Velez"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-[#EA580C] to-[#F87171] flex items-center justify-center text-white text-4xl font-bold">DV</div>';
                          }}
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#EA580C] to-[#F87171] rounded-lg flex items-center justify-center shadow-lg">
                        <Target size={16} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg md:text-2xl font-bold text-[#142433] mb-1">Daniel Velez</h3>
                    <p className="text-[#0D9488] font-semibold text-xs md:text-sm mb-3">Co-Founder &bull; Director of Strategy & Sales</p>
                    <p className="text-[#51606E] text-sm leading-relaxed">
                      Drives client relationships, business development, and marketing strategy. Turns vision into actionable plans that deliver measurable results.
                    </p>
                  </div>

                  {/* LinkedIn Button */}
                 <motion.a
  href="https://www.linkedin.com/in/daniel-velez-898195208/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 w-full py-2.5 md:py-3 bg-[#0A66C2]/10 border border-[#0A66C2]/40 rounded-xl text-[#0A66C2] font-semibold text-xs md:text-sm hover:bg-[#0A66C2]/20 transition-all"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  <Linkedin size={18} />
  Connect on LinkedIn
  <ExternalLink size={14} className="hidden md:block" />
</motion.a>
                </div>
              </GlowCard>
            </motion.div>

            {/* Brandon Stevenson */}
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <GlowCard isMobile={isMobile} className="p-5 md:p-8 bg-white rounded-2xl border border-white/60 shadow-2xl shadow-[#0A1022]/30 overflow-hidden h-full">
                <div className="relative">
                  {/* Profile Image */}
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-[#EA580C]/40 shadow-lg shadow-[#EA580C]/10">
                        <img 
                          src="/brandon.jpg" 
                          alt="Brandon Stevenson"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-[#EA580C] to-[#EA580C] flex items-center justify-center text-white text-4xl font-bold">BS</div>';
                          }}
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#EA580C] to-[#EA580C] rounded-lg flex items-center justify-center shadow-lg">
                        <Code size={16} className="text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg md:text-2xl font-bold text-[#142433] mb-1">Brandon Stevenson</h3>
                    <p className="text-[#0D9488] font-semibold text-xs md:text-sm mb-3">Co-Founder &bull; Director of Technology</p>
                    <p className="text-[#51606E] text-sm leading-relaxed">
                      Architects and builds every product from the ground up. Full stack engineer specializing in React, Node.js, and scalable cloud infrastructure.
                    </p>
                  </div>

                  {/* LinkedIn Button */}
                  <motion.a
  href="https://www.linkedin.com/in/brandonstevensonprograms/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 w-full py-2.5 md:py-3 bg-[#0A66C2]/10 border border-[#0A66C2]/40 rounded-xl text-[#0A66C2] font-semibold text-xs md:text-sm hover:bg-[#0A66C2]/20 transition-all"
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
>
  <Linkedin size={18} />
  Connect on LinkedIn
  <ExternalLink size={14} className="hidden md:block" />
</motion.a>
                </div>
              </GlowCard>
            </motion.div>

            {/* Ed — Application Support Analyst, centered beneath the founders */}
            <div className="col-span-2 flex justify-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-[calc(50%-0.5rem)] md:w-[calc(50%-1rem)]"
              >
                <GlowCard isMobile={isMobile} className="p-5 md:p-8 bg-white rounded-2xl border border-white/60 shadow-2xl shadow-[#0A1022]/30 overflow-hidden h-full">
                  <div className="relative">
                    <div className="flex justify-center mb-4 md:mb-6">
                      <div className="relative">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden border-2 border-[#EA580C]/40 shadow-lg shadow-[#EA580C]/10">
                          <img 
                            src="/Ed.jpg" 
                            alt="Ed"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-[#EA580C] to-[#F87171] flex items-center justify-center text-white text-4xl font-bold">ED</div>';
                            }}
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#EA580C] to-[#F87171] rounded-lg flex items-center justify-center shadow-lg">
                          <LifeBuoy size={16} className="text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center mb-6">
                      <h3 className="text-lg md:text-2xl font-bold text-[#142433] mb-1">Ed</h3>
                      <p className="text-[#0D9488] font-semibold text-xs md:text-sm mb-3">Application Support Analyst</p>
                      <p className="text-[#51606E] text-sm leading-relaxed">
                        Keeps client applications running smoothly—handling support requests, troubleshooting issues, and making sure help is fast and reliable.
                      </p>
                    </div>

                    <motion.a
                      href="https://www.linkedin.com/in/edwardcoconnelliii/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 md:py-3 bg-[#0A66C2]/10 border border-[#0A66C2]/40 rounded-xl text-[#0A66C2] font-semibold text-xs md:text-sm hover:bg-[#0A66C2]/20 transition-all"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Linkedin size={18} />
                      Connect on LinkedIn
                      <ExternalLink size={14} className="hidden md:block" />
                    </motion.a>
                  </div>
                </GlowCard>
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
            <p className="text-[#5B6B7A] text-sm uppercase tracking-wider font-semibold">Follow Plexura</p>
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
    </>
  );
}