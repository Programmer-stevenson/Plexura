import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Facebook, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToHomeSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');

      const tryScroll = (attempts = 0) => {
        const el = document.getElementById(sectionId);

        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempts < 12) {
          setTimeout(() => tryScroll(attempts + 1), 100);
        }
      };

      setTimeout(() => tryScroll(), 150);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const goToServicesPage = () => {
    navigate('/services');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <>
      {/* FOOTER — editorial, giant wordmark */}
      <footer className="relative overflow-hidden border-t border-white/5 bg-[#0A0E12]">
        <div className="relative mx-auto max-w-7xl px-6 pb-10 pt-20">

          {/* wordmark row */}
          <div className="relative border-b border-white/10 pb-8 lg:pb-10">
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => goToHomeSection('home')}
                className="group flex cursor-pointer items-center"
                aria-label="Go to homepage"
              >
                <span className="relative text-3xl font-bold tracking-tight md:text-4xl">
                  <span className="flex items-center">
                    <span className="relative inline-block h-[2.4em] w-[2.4em]">
                      <img
                        src="/plexxx.png"
                        alt="Plexura"
                        className="h-[2.4em] w-[2.4em] object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </span>

                    {['l', 'e', 'x', 'u', 'r', 'a'].map((letter, index) => (
                      <span
                        key={index}
                        className="inline-block text-[#F4FAFB] transition-colors group-hover:text-[#2DD4BF]"
                        style={{ marginLeft: index === 0 ? '-0.6em' : '0' }}
                      >
                        {letter}
                      </span>
                    ))}
                  </span>
                </span>
              </button>
            </div>

            <motion.button
              type="button"
              onClick={scrollToTop}
              className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-[#F2F9FF] transition-all hover:border-[#14B8A6] hover:bg-[#14B8A6] lg:h-12 lg:w-12"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp size={22} />
            </motion.button>
          </div>

          {/* link grid */}
          <div className="py-14 text-center lg:py-16">

            {/* intro — centered */}
            <div className="mx-auto mb-14 flex max-w-md flex-col items-center space-y-6 lg:mb-16">
              <p className="max-w-xs leading-relaxed text-[#9FB6B2]">
                Websites, automation, and growth systems built to help businesses capture and convert more leads.
              </p>

              <div className="flex items-center justify-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#9FB6B2]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2DD4BF]" />
                Accepting new projects
              </div>

              <div className="flex items-center justify-center gap-3 pt-1">
                <a
                  href="https://www.linkedin.com/company/plexura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#0A66C2] bg-[#0A66C2] transition-all hover:bg-transparent"
                >
                  <Linkedin
                    size={16}
                    className="text-white transition-colors group-hover:text-[#0A66C2]"
                  />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61582922265027"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-[#1877F2] bg-[#1877F2] transition-all hover:bg-transparent"
                >
                  <Facebook
                    size={16}
                    className="text-white transition-colors group-hover:text-[#1877F2]"
                  />
                </a>

                <a
                  href="https://www.google.com/search?q=plexura"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Business Profile"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white transition-all hover:border-white hover:bg-transparent"
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
                    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
                    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
                    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* lists — centered cluster */}
            <div className="grid grid-cols-2 gap-10 sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-20 lg:gap-28">
              <div>
                <h3 className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-[#2DD4BF]">
                  Services
                </h3>

                <div className="space-y-3.5">
                  {[
                    'Website + Growth System',
                    'Website Redesign',
                    'CRM Automation',
                    'Booking + Reminders',
                  ].map((label, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={goToServicesPage}
                      className="group flex w-full items-center justify-center text-[#9FB6B2] transition-colors hover:text-[#F2F9FF]"
                    >
                      <span className="mr-0 h-px w-0 bg-[#FB923C] transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-[#2DD4BF]">
                  Explore
                </h3>

                <div className="space-y-3.5">
                  <button
                    type="button"
                    onClick={() => goToHomeSection('home')}
                    className="group flex w-full items-center justify-center text-[#9FB6B2] transition-colors hover:text-[#F2F9FF]"
                  >
                    <span className="mr-0 h-px w-0 bg-[#FB923C] transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                    Home
                  </button>

                  <button
                    type="button"
                    onClick={() => goToHomeSection('about')}
                    className="group flex w-full items-center justify-center text-[#9FB6B2] transition-colors hover:text-[#F2F9FF]"
                  >
                    <span className="mr-0 h-px w-0 bg-[#FB923C] transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                    About Us
                  </button>

                  <button
                    type="button"
                    onClick={goToServicesPage}
                    className="group flex w-full items-center justify-center text-[#9FB6B2] transition-colors hover:text-[#F2F9FF]"
                  >
                    <span className="mr-0 h-px w-0 bg-[#FB923C] transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                    Services
                  </button>

                  <button
                    type="button"
                    onClick={() => goToHomeSection('contact')}
                    className="group flex w-full items-center justify-center text-[#9FB6B2] transition-colors hover:text-[#F2F9FF]"
                  >
                    <span className="mr-0 h-px w-0 bg-[#FB923C] transition-all duration-300 group-hover:mr-2 group-hover:w-4" />
                    Contact
                  </button>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <h3 className="mb-6 font-mono text-[11px] uppercase tracking-[0.3em] text-[#2DD4BF]">
                  Contact
                </h3>

                <div className="space-y-3.5 text-[#9FB6B2]">
                  <button
                    type="button"
                    onClick={() => goToHomeSection('contact')}
                    className="flex w-full items-center justify-center gap-3 transition-colors hover:text-[#F2F9FF]"
                  >
                    <MapPin size={15} className="flex-shrink-0 text-[#2DD4BF]" />
                    Las Vegas, Nevada
                  </button>

                  <a
                    href="mailto:contact@plexura.com"
                    className="flex items-center justify-center gap-3 transition-colors hover:text-[#F2F9FF]"
                  >
                    <Mail size={15} className="flex-shrink-0 text-[#2DD4BF]" />
                    contact@plexura.com
                  </a>

                  <a
                    href="tel:+18013478072"
                    className="flex items-center justify-center gap-3 transition-colors hover:text-[#F2F9FF]"
                  >
                    <Phone size={15} className="flex-shrink-0 text-[#2DD4BF]" />
                    (801) 347-8072
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* bottom rule */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-[#9FB6B2]/80 md:flex-row">
            <span>© 2026 Plexura — All rights reserved</span>

            <div className="flex items-center gap-6">
              <Link
                to="/terms"
                onClick={scrollToTop}
                className="transition-colors hover:text-[#2DD4BF]"
              >
                Terms of Service
              </Link>

              <Link
                to="/privacy"
                onClick={scrollToTop}
                className="transition-colors hover:text-[#2DD4BF]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}