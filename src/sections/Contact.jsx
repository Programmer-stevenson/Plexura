import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Check, Zap, Globe, Clock, Send, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WEB3FORMS_ACCESS_KEY = '266a1737-79be-415a-9594-6d5a97a36efa';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const form = e.target;
    const formData = new FormData(form);

    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New inquiry from the Plexura website');
    formData.append('from_name', 'Plexura Website');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setFormSubmitted(true);
        form.reset();
      } else {
        setSubmitError(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setSubmitError('Network error — please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* ============================================ */}
      {/* CONTACT — split editorial on deep emerald */}
      {/* ============================================ */}
      <section id="contact" className="relative overflow-hidden bg-[#0A0E12] px-6 py-24 lg:py-32">
        {/* quiet grid + glow */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(45,212,191,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(45,212,191,0.35) 1px, transparent 1px)',
              backgroundSize: '72px 72px',
            }}
          />
          <div
            className="absolute -top-40 left-1/3 h-[44rem] w-[44rem] rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(125,211,252,0.10) 0%, transparent 65%)',
            }}
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-14 text-center lg:mb-20 lg:text-left"
          >
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-[#2DD4BF]">
              Contact
            </p>

            <h2 className="font-display text-5xl font-bold leading-[0.98] tracking-tight md:text-7xl lg:text-8xl">
              <span className="text-[#F2F9FF]">Let’s Build Your</span>
              <br />
              <span className="animate-[gradient_4s_ease_infinite] bg-gradient-to-r from-[#5EEAD4] via-[#2DD4BF] to-[#CFFAF4] bg-[length:200%_auto] bg-clip-text text-transparent">
                Growth System
              </span>
            </h2>
          </motion.div>

          <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-20">
            {/* left — channels */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <p className="mb-12 max-w-md text-lg leading-relaxed text-[#9FB6B2]">
                Need a better website, booking flow, CRM setup, or lead follow-up system?
                Tell us what you need and we’ll point you in the right direction.
              </p>

              <div className="border-t border-white/10">
                {[
                  {
                    label: 'Email',
                    value: 'contact@plexura.com',
                    href: 'mailto:contact@plexura.com',
                  },
                  {
                    label: 'Phone',
                    value: '(801) 347-8072',
                    href: 'tel:+18013478072',
                  },
                  {
                    label: 'Locations',
                    value: 'Las Vegas, NV · Salt Lake City, UT',
                    href: null,
                  },
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
                      <a
                        href={item.href}
                        className="group flex items-center justify-between gap-4 py-6"
                      >
                        <div>
                          <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-[#2DD4BF]/70">
                            {item.label}
                          </p>
                          <p className="font-display text-xl font-semibold text-[#F2F9FF] transition-colors group-hover:text-[#2DD4BF] lg:text-2xl">
                            {item.value}
                          </p>
                        </div>

                        <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-[#F2F9FF] transition-all group-hover:border-[#F97316] group-hover:bg-[#F97316]">
                          <ArrowUpRight size={18} />
                        </span>
                      </a>
                    ) : (
                      <div className="py-6">
                        <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-[#2DD4BF]/70">
                          {item.label}
                        </p>
                        <p className="font-display text-xl font-semibold text-[#F2F9FF] lg:text-2xl">
                          {item.value}
                        </p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 flex flex-col items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[#9FB6B2] lg:flex-row lg:flex-wrap lg:items-start lg:gap-x-7 lg:gap-y-3">
                <div className="flex items-center gap-x-7 lg:contents">
                  <span className="flex items-center gap-2">
                    <Zap size={13} className="text-[#2DD4BF]" />
                    24hr Response
                  </span>

                  <span className="flex items-center gap-2">
                    <Globe size={13} className="text-[#2DD4BF]" />
                    Remote Worldwide
                  </span>
                </div>

                <span className="flex items-center gap-2">
                  <Clock size={13} className="text-[#2DD4BF]" />
                  Flexible Timeline
                </span>
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
                    className="rounded-3xl border border-white/10 py-24 text-center"
                  >
                    <motion.div
                      className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#2DD4BF] to-[#EA580C]"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    >
                      <Check size={40} className="text-[#0A0E12]" />
                    </motion.div>

                    <h3 className="mb-3 font-display text-3xl font-bold text-[#F2F9FF]">
                      Message Sent!
                    </h3>

                    <p className="text-lg text-[#9FB6B2]">
                      We’ll be in touch within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleFormSubmit} className="space-y-10">
                    {/* Honeypot — hidden from users, catches bots */}
                    <input
                      type="checkbox"
                      name="botcheck"
                      className="hidden"
                      style={{ display: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 rounded-xl border border-red-500/40 bg-red-500/15 p-4 text-sm text-red-300"
                      >
                        <div className="h-2 w-2 flex-shrink-0 animate-pulse rounded-full bg-red-400" />
                        {submitError}
                      </motion.div>
                    )}

                    <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
                      <div>
                        <label className="mb-1 block font-mono text-[10px] uppercase tracking-[0.3em] text-[#2DD4BF]">
                          Full Name <span className="text-[#FB923C]">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          disabled={isSubmitting}
                          className="peer w-full rounded-none border-0 border-b-2 border-white/15 bg-transparent px-0 py-4 text-lg text-[#F2F9FF] placeholder-white/25 transition-colors duration-300 focus:border-[#2DD4BF] focus:outline-none focus:ring-0 disabled:opacity-50"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block font-mono text-[10px] uppercase tracking-[0.3em] text-[#2DD4BF]">
                          Email Address <span className="text-[#FB923C]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          disabled={isSubmitting}
                          className="peer w-full rounded-none border-0 border-b-2 border-white/15 bg-transparent px-0 py-4 text-lg text-[#F2F9FF] placeholder-white/25 transition-colors duration-300 focus:border-[#2DD4BF] focus:outline-none focus:ring-0 disabled:opacity-50"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block font-mono text-[10px] uppercase tracking-[0.3em] text-[#2DD4BF]">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          disabled={isSubmitting}
                          className="peer w-full rounded-none border-0 border-b-2 border-white/15 bg-transparent px-0 py-4 text-lg text-[#F2F9FF] placeholder-white/25 transition-colors duration-300 focus:border-[#2DD4BF] focus:outline-none focus:ring-0 disabled:opacity-50"
                          placeholder="(702) 555-1234"
                        />
                      </div>

                      <div className="relative">
                        <label className="mb-1 block font-mono text-[10px] uppercase tracking-[0.3em] text-[#2DD4BF]">
                          Service <span className="text-[#FB923C]">*</span>
                        </label>

                        <select
                          name="service"
                          required
                          disabled={isSubmitting}
                          className="w-full cursor-pointer appearance-none rounded-none border-0 border-b-2 border-white/15 bg-transparent px-0 py-4 text-lg text-[#F2F9FF] transition-colors duration-300 focus:border-[#2DD4BF] focus:outline-none focus:ring-0 disabled:opacity-50 [&>option]:bg-[#0A0E12]"
                        >
                          <option value="">Select a service</option>
                          <option value="growth-system">Website + Growth System</option>
                          <option value="website-redesign">Website Redesign</option>
                          <option value="crm-automation">CRM Automation</option>
                          <option value="booking-reminders">Booking + Reminders</option>
                          <option value="missed-call-recovery">Missed Call Recovery</option>
                          <option value="reviews-follow-up">Reviews + Follow-Up</option>
                          <option value="not-sure">Not Sure Yet</option>
                        </select>

                        <ChevronDown
                          size={18}
                          className="pointer-events-none absolute bottom-5 right-0 text-[#2DD4BF]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1 block font-mono text-[10px] uppercase tracking-[0.3em] text-[#2DD4BF]">
                        Project Details <span className="text-[#FB923C]">*</span>
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={4}
                        disabled={isSubmitting}
                        className="peer w-full rounded-none border-0 border-b-2 border-white/15 bg-transparent px-0 py-4 text-lg text-[#F2F9FF] placeholder-white/25 transition-colors duration-300 focus:border-[#2DD4BF] focus:outline-none focus:ring-0 disabled:opacity-50"
                        placeholder="Tell us what you need help with..."
                        style={{ resize: 'none' }}
                      />
                    </div>

                    <div className="flex items-start gap-4">
                      <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        required
                        disabled={isSubmitting}
                        className="mt-1 h-5 w-5 cursor-pointer rounded border-2 border-white/25 bg-transparent accent-[#2DD4BF] focus:ring-2 focus:ring-[#2DD4BF]/30"
                      />

                      <label htmlFor="terms" className="cursor-pointer text-sm text-[#9FB6B2]">
                        I agree to the{' '}
                        <Link to="/terms" className="text-[#2DD4BF] hover:underline">
                          terms and conditions
                        </Link>{' '}
                        and{' '}
                        <Link to="/privacy" className="text-[#2DD4BF] hover:underline">
                          privacy policy
                        </Link>
                      </label>
                    </div>

                    <div className="flex flex-col gap-6 pt-2 sm:flex-row sm:items-center">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[#EA580C] to-[#F97316] px-10 py-5 text-lg font-bold text-white disabled:cursor-not-allowed disabled:opacity-50"
                        whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      >
                        <motion.div
                          className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          animate={{ x: ['-100%', '200%'] }}
                          transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        />

                        <span className="relative flex items-center justify-center gap-3">
                          {isSubmitting ? (
                            <>
                              <motion.div
                                className="h-5 w-5 rounded-full border-2 border-white/30 border-t-white"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              />
                              <span>Sending...</span>
                            </>
                          ) : (
                            <>
                              <span>Send Message</span>
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                              >
                                <Send size={20} />
                              </motion.div>
                            </>
                          )}
                        </span>
                      </motion.button>

                      <div className="flex items-center justify-center gap-5 font-mono text-[11px] uppercase tracking-[0.15em] text-[#9FB6B2]">
                        <span className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2DD4BF]" />
                          24hr Response
                        </span>

                        <span className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#F97316]" />
                          Secure
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