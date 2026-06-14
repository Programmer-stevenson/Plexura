import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { getIsMobile } from './components/ui';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Team from './sections/Team';
import CTA from './sections/CTA';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(() => (getIsMobile() ? null : 0));
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);  
  const [submitError, setSubmitError] = useState('');
  const [isMobile, setIsMobile] = useState(getIsMobile);
  
  // Scroll hooks - only used on desktop
  const scrollData = useScroll();
  const smoothProgress = useSpring(scrollData.scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone') || '',
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      const isLocal = window.location.hostname === 'localhost' || 
                      window.location.hostname === '127.0.0.1';
      
      const API_URL = import.meta.env.VITE_API_URL || 
                      (isLocal ? 'http://localhost:5000' : 'https://plexura-backend.onrender.com');

      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      let result;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        throw new Error('Server returned invalid response');
      }

      if (!response.ok) {
        throw new Error(result?.message || `Server error: ${response.status}`);
      }

      setFormSubmitted(true);
      setTimeout(() => setFormSubmitted(false), 5000);
      e.target.reset();
      
    } catch (error) {
      let errorMessage = 'Failed to send message. ';
      if (error.message.includes('fetch')) {
        errorMessage += 'Cannot connect to server. Please check your internet connection.';
      } else if (error.message.includes('CORS')) {
        errorMessage += 'Connection blocked. Please contact support.';
      } else if (error.message.includes('Server error')) {
        errorMessage += error.message;
      } else {
        errorMessage += 'Please try again or email us at contact@plexura.com';
      }
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0E12] text-[#F4FAFB] overflow-x-hidden">
      {/* Scroll Progress Bar - DESKTOP ONLY */}
      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#EA580C] via-[#EA580C] to-[#EA580C] origin-left z-[100]"
          style={{ scaleX: smoothProgress }}
        />
      )}

      {/* Background — cobalt to sky gradient canvas */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0A0E12 0%, #0D1217 30%, #181E25 52%, #3A434D 72%, #8C97A1 88%, #E8ECEF 100%)' }} />
        <div
          className="absolute -top-56 right-[-12%] w-[64rem] h-[64rem] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.30) 0%, rgba(45,212,191,0.08) 45%, transparent 70%)' }}
        />
        <div
          className="absolute top-[55%] left-[-14%] w-[44rem] h-[44rem] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 65%)' }}
        />
        <div
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)',
            backgroundSize: '96px 96px'
          }}
        />
      </div>

      <Navbar isScrolled={isScrolled} isMobile={isMobile} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />

      <Hero isMobile={isMobile} mobileMenuOpen={mobileMenuOpen} />

      <Services isMobile={isMobile} activeService={activeService} setActiveService={setActiveService} />

      <About isMobile={isMobile} />

      <Team isMobile={isMobile} />

      <CTA isMobile={isMobile} />

      <Contact isMobile={isMobile} formSubmitted={formSubmitted} isSubmitting={isSubmitting} submitError={submitError} handleFormSubmit={handleFormSubmit} />

      <Footer />

      {/* Global Styles */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes slideInRight {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        .animate-slideInRight {
          animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes pl-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        ::selection {
          background: #EA580C;
          color: #0C4A6E;
        }
        @keyframes gradient-shift {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
        .animate-gradient-shift {
          animation: gradient-shift 3s linear infinite;
        }
        .grid-pattern {
          background-image: 
            linear-gradient(rgba(125, 211, 252, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(125, 211, 252, 0.1) 1px, transparent 1px);
          background-size: 30px 30px;
          width: 100%;
          height: 100%;
        }
        @keyframes logo-tech-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 2px rgba(125, 211, 252, 0.3)) drop-shadow(0 0 8px rgba(234, 88, 12, 0.2)) brightness(1);
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(125, 211, 252, 0.8)) drop-shadow(0 0 20px rgba(234, 88, 12, 0.5)) brightness(1.2);
            transform: scale(1.05);
          }
        }
        .logo-tech-pulse {
          animation: logo-tech-pulse 4s ease-in-out infinite;
        }
        @keyframes plexura-glow-slow {
          0%, 100% { color: #142433; text-shadow: none; }
          50% { color: #EA580C; text-shadow: 0 0 20px #EA580C, 0 0 30px #EA580C; }
        }
        .plexura-glow-slow {
          animation: plexura-glow-slow 10s ease-in-out infinite;
        }
        html {
          scroll-behavior: smooth;
        }
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: #FFF7ED;
        }
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #EA580C, #EA580C);
          border-radius: 5px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #EA580C, #EA580C);
        }

        /* ============================================ */
        /* MOBILE: KILL ALL ANIMATIONS & EFFECTS */
        /* ============================================ */
        @media (max-width: 1023px) {
          /* Kill ALL animations */
          *, *::before, *::after {
            animation: none !important;
            animation-duration: 0s !important;
            animation-delay: 0s !important;
            transition: none !important;
            transition-duration: 0s !important;
          }

          /* Kill all blur effects */
          .blur-xl, .blur-2xl, .blur-3xl,
          [class*="blur-"] {
            filter: none !important;
            -webkit-filter: none !important;
          }

          /* Kill all backdrop blur */
          .backdrop-blur-sm, .backdrop-blur-md, .backdrop-blur-lg, 
          .backdrop-blur-xl, .backdrop-blur-2xl,
          [class*="backdrop-blur"] {
            -webkit-backdrop-filter: none !important;
            backdrop-filter: none !important;
          }

          /* Kill CSS keyframe animations */
          .animate-pulse-slow,
          .animate-pulse,
          .animate-gradient-shift,
          .logo-tech-pulse,
          .plexura-glow-slow {
            animation: none !important;
          }

          /* Remove text shadows */
          .plexura-glow-slow {
            text-shadow: none !important;
          }

          /* Remove filter effects */
          .logo-tech-pulse {
            filter: none !important;
          }

          /* Keep the hero marquee moving on mobile (cheap transform) */
          .pl-anim {
            animation: var(--pl-anim, none) !important;
          }

          /* Keep the nav logo glow/pulse alive on mobile */
          .logo-anim {
            animation: var(--logo-anim, none) !important;
          }

          /* No backdrop-blur on mobile; nav background is controlled by its own
             classes (transparent at top, dark on scroll) */
          nav {
            backdrop-filter: none !important;
          }
        }
      `}</style>
    </div>
  );
}