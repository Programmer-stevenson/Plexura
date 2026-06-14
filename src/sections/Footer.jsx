import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Linkedin, Facebook, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <>
{/* FOOTER — editorial, giant wordmark */}
<footer className="relative bg-[#0A0E12] border-t border-white/5 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative">

    {/* wordmark row */}
    <div className="relative border-b border-white/10 pb-8 lg:pb-10">
      <div className="flex items-center justify-center">
        <div className="flex items-center group cursor-pointer">
          <span className="text-3xl md:text-4xl font-bold tracking-tight relative">
            <span className="flex items-center">
              <span className="relative inline-block w-[2.4em] h-[2.4em]">
                <img 
                  src="/plexxx.png"
                  alt="Plexura" 
                  className="w-[2.4em] h-[2.4em] object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </span>
              {['l','e','x','u','r','a'].map((letter, index) => (
                <span
                  key={index}
                  className="inline-block text-[#F4FAFB] group-hover:text-[#2DD4BF] transition-colors"
                  style={{ marginLeft: index === 0 ? '-0.6em' : '0' }}
                >
                  {letter}
                </span>
              ))}
            </span>
          </span>
        </div>
      </div>
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-white/15 text-[#F2F9FF] hover:bg-[#14B8A6] hover:border-[#14B8A6] flex items-center justify-center transition-all flex-shrink-0"
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <ArrowUp size={22} />
      </motion.button>
    </div>

    {/* link grid */}
    <div className="py-14 lg:py-16 text-center">
      {/* intro — centered */}
      <div className="flex flex-col items-center space-y-6 max-w-md mx-auto mb-14 lg:mb-16">
        <p className="text-[#9FB6B2] leading-relaxed max-w-xs">
          Full stack web development agency. Custom code, scalable architecture, and craftsmanship that converts.
        </p>
        <div className="flex items-center justify-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-[#9FB6B2]">
          <span className="w-1.5 h-1.5 bg-[#2DD4BF] rounded-full animate-pulse" />
          Accepting new projects
        </div>
        <div className="flex items-center justify-center gap-3 pt-1">
          <a href="https://www.linkedin.com/company/plexura/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#F2F9FF] hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all">
            <Linkedin size={16} />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61582922265027" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#F2F9FF] hover:bg-[#1877F2] hover:border-[#1877F2] transition-all">
            <Facebook size={16} />
          </a>
          <a href="https://www.google.com/search?q=plexura" target="_blank" rel="noopener noreferrer" aria-label="Google Business Profile" className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-[#F2F9FF] bg-white/[0.04] hover:bg-white hover:border-white transition-all">
            <svg width="17" height="17" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
              <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
              <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
              <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* lists — centered cluster */}
      <div className="grid grid-cols-2 gap-10 sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-20 lg:gap-28">
        <div>
          <h3 className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#2DD4BF] mb-6">Services</h3>
          <div className="space-y-3.5">
            {["Custom Web Development", "WordPress Solutions", "Web Applications", "IT Consulting"].map((label, i) => (
              <Link key={i} to="/services" onClick={() => window.scrollTo(0, 0)} className="group flex items-center justify-center text-[#9FB6B2] hover:text-[#F2F9FF] transition-colors">
                <span className="w-0 group-hover:w-4 h-px bg-[#FB923C] mr-0 group-hover:mr-2 transition-all duration-300" />
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#2DD4BF] mb-6">Explore</h3>
          <div className="space-y-3.5">
            <a href="#home" className="group flex items-center justify-center text-[#9FB6B2] hover:text-[#F2F9FF] transition-colors">
              <span className="w-0 group-hover:w-4 h-px bg-[#FB923C] mr-0 group-hover:mr-2 transition-all duration-300" />Home
            </a>
            <a href="#about" className="group flex items-center justify-center text-[#9FB6B2] hover:text-[#F2F9FF] transition-colors">
              <span className="w-0 group-hover:w-4 h-px bg-[#FB923C] mr-0 group-hover:mr-2 transition-all duration-300" />About Us
            </a>
            <Link to="/services" onClick={() => window.scrollTo(0, 0)} className="group flex items-center justify-center text-[#9FB6B2] hover:text-[#F2F9FF] transition-colors">
              <span className="w-0 group-hover:w-4 h-px bg-[#FB923C] mr-0 group-hover:mr-2 transition-all duration-300" />Services
            </Link>
            <a href="#contact" className="group flex items-center justify-center text-[#9FB6B2] hover:text-[#F2F9FF] transition-colors">
              <span className="w-0 group-hover:w-4 h-px bg-[#FB923C] mr-0 group-hover:mr-2 transition-all duration-300" />Contact
            </a>
          </div>
        </div>

        <div className="col-span-2 sm:col-span-1">
          <h3 className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#2DD4BF] mb-6">Contact</h3>
          <div className="space-y-3.5 text-[#9FB6B2]">
            <div className="flex items-center justify-center gap-3"><MapPin size={15} className="text-[#2DD4BF] flex-shrink-0" /> Las Vegas, Nevada</div>
            <a href="mailto:contact@plexura.com" className="flex items-center justify-center gap-3 hover:text-[#F2F9FF] transition-colors">
              <Mail size={15} className="text-[#2DD4BF] flex-shrink-0" /> contact@plexura.com
            </a>
            <a href="tel:+18013478072" className="flex items-center justify-center gap-3 hover:text-[#F2F9FF] transition-colors">
              <Phone size={15} className="text-[#2DD4BF] flex-shrink-0" /> (801) 347-8072
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* bottom rule */}
    <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[11px] tracking-[0.15em] uppercase text-[#9FB6B2]/80">
      <span>© 2026 Plexura — All rights reserved</span>
      <div className="flex items-center gap-6">
        <Link to="/terms" className="hover:text-[#2DD4BF] transition-colors">Terms of Service</Link>
        <Link to="/privacy" className="hover:text-[#2DD4BF] transition-colors">Privacy Policy</Link>
      </div>
    </div>
  </div>
</footer>
    </>
  );
}