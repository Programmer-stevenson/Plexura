import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Check, Zap, Globe, Clock, Send, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact({ formSubmitted, isSubmitting, submitError, handleFormSubmit }) {
  return (
    <>
{/* CONTACT — split editorial on deep emerald */}
{/* ============================================ */}
<section id="contact" className="relative py-28 lg:py-36 px-6 overflow-hidden bg-[#0A0E12]">
  {/* quiet grid + glow */}
  <div className="absolute inset-0 pointer-events-none">
    <div
      className="absolute inset-0 opacity-[0.05]"
      style={{
        backgroundImage: 'linear-gradient(rgba(45,212,191,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.35) 1px, transparent 1px)',
        backgroundSize: '72px 72px'
      }}
    />
    <div
      className="absolute -top-40 left-1/3 w-[44rem] h-[44rem] rounded-full"
      style={{ background: 'radial-gradient(circle, rgba(125,211,252,0.10) 0%, transparent 65%)' }}
    />
  </div>

  <div className="relative max-w-7xl mx-auto">

    {/* header */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 lg:mb-24 text-center lg:text-left"
    >
      <p className="font-mono text-xs tracking-[0.3em] uppercase text-[#2DD4BF] mb-6">Contact</p>
      <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.98] tracking-tight">
        <span className="text-[#F2F9FF]">Let's Create</span>
        <br />
        <span className="bg-gradient-to-r from-[#5EEAD4] via-[#2DD4BF] to-[#CFFAF4] bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_4s_ease_infinite]">
          Something Amazing
        </span>
      </h2>
    </motion.div>

    <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">

      {/* left — channels */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-5"
      >
        <p className="text-lg text-[#9FB6B2] leading-relaxed max-w-md mb-12">
          Transform your vision into a digital masterpiece. We craft experiences that captivate, convert, and scale. No templates, no shortcuts—just results.
        </p>

        <div className="border-t border-white/10">
          {[
            { label: "Email", value: "contact@plexura.com", href: "mailto:contact@plexura.com" },
            { label: "Phone", value: "(801) 347-8072", href: "tel:+18013478072" },
            { label: "Locations", value: "Las Vegas, NV · Salt Lake City, UT", href: null }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-white/10"
            >
              {item.href ? (
                <a href={item.href} className="group flex items-center justify-between gap-4 py-6">
                  <div>
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#2DD4BF]/70 mb-1.5">{item.label}</p>
                    <p className="font-display text-xl lg:text-2xl font-semibold text-[#F2F9FF] group-hover:text-[#2DD4BF] transition-colors">
                      {item.value}
                    </p>
                  </div>
                  <span className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-[#F2F9FF] group-hover:border-[#F97316] group-hover:bg-[#F97316] transition-all flex-shrink-0">
                    <ArrowUpRight size={18} />
                  </span>
                </a>
              ) : (
                <div className="py-6">
                  <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-[#2DD4BF]/70 mb-1.5">{item.label}</p>
                  <p className="font-display text-xl lg:text-2xl font-semibold text-[#F2F9FF]">{item.value}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-10 font-mono text-[11px] tracking-[0.2em] uppercase text-[#9FB6B2] flex flex-col items-center gap-3 lg:flex-row lg:flex-wrap lg:items-start lg:gap-x-7 lg:gap-y-3">
          <div className="flex items-center gap-x-7 lg:contents">
            <span className="flex items-center gap-2"><Zap size={13} className="text-[#2DD4BF]" /> 24hr Response</span>
            <span className="flex items-center gap-2"><Globe size={13} className="text-[#2DD4BF]" /> Remote Worldwide</span>
          </div>
          <span className="flex items-center gap-2"><Clock size={13} className="text-[#2DD4BF]" /> Flexible Timeline</span>
        </div>
      </motion.div>

      {/* right — form */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-7"
      >
        <AnimatePresence mode="wait">
          {formSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center py-24 border border-white/10 rounded-3xl"
            >
              <motion.div
                className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-[#2DD4BF] to-[#EA580C] rounded-full flex items-center justify-center"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              >
                <Check size={40} className="text-[#0A0E12]" />
              </motion.div>
              <h3 className="font-display text-3xl font-bold text-[#F2F9FF] mb-3">Message Sent!</h3>
              <p className="text-[#9FB6B2] text-lg">We'll be in touch within 24 hours.</p>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={handleFormSubmit} className="space-y-10">
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/15 border border-red-500/40 rounded-xl text-red-300 text-sm flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse flex-shrink-0" />
                  {submitError}
                </motion.div>
              )}

              <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-[#2DD4BF] mb-1">
                    Full Name <span className="text-[#FB923C]">*</span>
                  </label>
                  <input type="text" name="name" required disabled={isSubmitting} className="peer w-full bg-transparent border-0 border-b-2 border-white/15 rounded-none px-0 py-4 text-lg text-[#F2F9FF] placeholder-white/25 focus:border-[#2DD4BF] focus:outline-none focus:ring-0 transition-colors duration-300 disabled:opacity-50" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-[#2DD4BF] mb-1">
                    Email Address <span className="text-[#FB923C]">*</span>
                  </label>
                  <input type="email" name="email" required disabled={isSubmitting} className="peer w-full bg-transparent border-0 border-b-2 border-white/15 rounded-none px-0 py-4 text-lg text-[#F2F9FF] placeholder-white/25 focus:border-[#2DD4BF] focus:outline-none focus:ring-0 transition-colors duration-300 disabled:opacity-50" placeholder="john@company.com" />
                </div>
                <div>
                  <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-[#2DD4BF] mb-1">
                    Phone Number
                  </label>
                  <input type="tel" name="phone" disabled={isSubmitting} className="peer w-full bg-transparent border-0 border-b-2 border-white/15 rounded-none px-0 py-4 text-lg text-[#F2F9FF] placeholder-white/25 focus:border-[#2DD4BF] focus:outline-none focus:ring-0 transition-colors duration-300 disabled:opacity-50" placeholder="(702) 555-1234" />
                </div>
                <div className="relative">
                  <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-[#2DD4BF] mb-1">
                    Service <span className="text-[#FB923C]">*</span>
                  </label>
                  <select
                    name="service"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-0 border-b-2 border-white/15 rounded-none px-0 py-4 text-lg text-[#F2F9FF] focus:border-[#2DD4BF] focus:outline-none focus:ring-0 transition-colors duration-300 disabled:opacity-50 appearance-none cursor-pointer [&>option]:bg-[#0A0E12]"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-web-development">Custom Web Development</option>
                    <option value="wordpress">WordPress Website</option>
                    <option value="web-application">Web Application / SaaS</option>
                    <option value="ecommerce">E-Commerce Development</option>
                    <option value="consultation">Technical Consultation</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-0 bottom-5 text-[#2DD4BF] pointer-events-none" />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] tracking-[0.3em] uppercase text-[#2DD4BF] mb-1">
                  Project Details <span className="text-[#FB923C]">*</span>
                </label>
                <textarea name="message" required rows={4} disabled={isSubmitting} className="peer w-full bg-transparent border-0 border-b-2 border-white/15 rounded-none px-0 py-4 text-lg text-[#F2F9FF] placeholder-white/25 focus:border-[#2DD4BF] focus:outline-none focus:ring-0 transition-colors duration-300 disabled:opacity-50" placeholder="Tell us about your vision, goals, and timeline..." style={{ resize: 'none' }} />
              </div>

              <div className="flex items-start gap-4">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  disabled={isSubmitting}
                  className="mt-1 w-5 h-5 bg-transparent border-2 border-white/25 rounded focus:ring-2 focus:ring-[#2DD4BF]/30 cursor-pointer accent-[#2DD4BF]"
                />
                <label htmlFor="terms" className="text-sm text-[#9FB6B2] cursor-pointer">
                  I agree to the <Link to="/terms" className="text-[#2DD4BF] hover:underline">terms and conditions</Link> and <Link to="/privacy" className="text-[#2DD4BF] hover:underline">privacy policy</Link>
                </label>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group px-10 py-5 bg-gradient-to-r from-[#EA580C] to-[#F97316] text-white font-bold text-lg rounded-full overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <span className="relative flex items-center justify-center gap-3">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <motion.div animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                          <Send size={20} />
                        </motion.div>
                      </>
                    )}
                  </span>
                </motion.button>

                <div className="flex items-center justify-center gap-5 font-mono text-[11px] tracking-[0.15em] uppercase text-[#9FB6B2]">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#2DD4BF] rounded-full animate-pulse" /> 24hr Response
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full animate-pulse" /> 100% Secure
                  </span>
                </div>
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  </div>
</section>
    </>
  );
}