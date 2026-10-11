import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { letterAnimation } from '../components/ui';
import HeroCanvas from '../components/heroCanvas';
import TechnologyPartners from '../components/TechnologyPartners';

export default function Hero({ mobileMenuOpen }) {
  return (
    <section
      id="home"
      className={`relative isolate min-h-screen flex flex-col justify-center overflow-hidden transition-all duration-500 ${
        mobileMenuOpen ? 'pt-[420px] lg:pt-40' : 'pt-32 lg:pt-40'
      }`}
    >
      <style>{`
        #home .plexura-hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          display: block;
          pointer-events: none;
          user-select: none;
        }

        #home .plexura-hero-background img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        #home .plexura-hero-background::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background:
            linear-gradient(
              90deg,
              rgba(18, 19, 20, .99) 0%,
              rgba(20, 21, 22, .97) 17%,
              rgba(23, 24, 25, .87) 34%,
              rgba(25, 26, 27, .55) 49%,
              rgba(25, 26, 27, .14) 68%,
              rgba(25, 26, 27, 0) 82%
            ),
            linear-gradient(
              180deg,
              rgba(5, 19, 33, .08) 0%,
              rgba(4, 17, 30, .02) 49%,
              rgba(4, 17, 30, .18) 69%,
              rgba(4, 17, 30, .60) 100%
            );
        }

        #home .plexura-hero-background::after {
          content: '';
          position: absolute;
          inset: auto 0 0 0;
          height: 36%;
          z-index: 2;
          pointer-events: none;
          background:
            radial-gradient(
              110% 115% at 20% 130%,
              rgba(15, 43, 70, .56) 0 34%,
              transparent 34.4%
            ),
            linear-gradient(
              180deg,
              rgba(5, 18, 31, 0) 0%,
              rgba(5, 18, 31, .34) 48%,
              rgba(5, 18, 31, .72) 100%
            );
        }

        #home .plexura-heading-group {
          width: 100%;
          margin-inline: auto;
        }

        #home .plexura-heading {
          margin: 0;
          max-width: none;
          font-size: clamp(2.9rem, 8vw, 7.5rem);
          line-height: 1.02;
          text-align: center;
        }

        #home .plexura-cube-slot {
          position: relative;
          width: 100%;
          height: 288px;
          margin: 24px 0;
          pointer-events: none;
          user-select: none;
        }

        #home .plexura-cube-art {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 320px;
          max-width: 100%;
          height: 360px;
          transform: translate(-50%, -50%);
        }

        #home .plexura-cube-art .plexura-cube {
          width: 100%;
          height: 100%;
          min-height: 0;
        }

        #home .plexura-cube-art .plexura-cube__stage {
          min-height: 0;
        }

        @media (min-width: 768px) {
          #home .plexura-heading-group {
            width: fit-content;
            max-width: 100%;
            margin-left: 0;
            margin-right: auto;
          }

          #home .plexura-heading {
            font-size: clamp(3rem, 4.5vw, 4.5rem);
            text-align: left;
          }

          #home .plexura-heading-line {
            white-space: nowrap;
          }

          #home .plexura-cube-slot {
            height: 280px;
            margin-top: 16px;
            margin-bottom: 0;
          }
        }

        @media (max-width: 900px) {
          #home .plexura-hero-background::before {
            background:
              linear-gradient(
                90deg,
                rgba(18, 19, 20, .98) 0%,
                rgba(22, 23, 24, .91) 46%,
                rgba(24, 25, 26, .30) 76%,
                rgba(24, 25, 26, .08) 100%
              ),
              linear-gradient(
                180deg,
                rgba(4, 17, 30, .05) 0%,
                rgba(4, 17, 30, .10) 50%,
                rgba(4, 17, 30, .82) 100%
              );
          }
        }
      `}</style>

      {/* Background */}
      <picture className="plexura-hero-background" aria-hidden="true">
        <source
          media="(min-width: 1024px)"
          srcSet="/hero-desktop.png"
        />

        <img
          src="/hero-mobile.png"
          alt=""
          fetchPriority="high"
          decoding="async"
          draggable={false}
        />
      </picture>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Meta strip */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center md:justify-start items-center gap-x-5 gap-y-2 font-mono text-[11px] tracking-[0.25em] uppercase text-[#AEBAC4] mb-8 lg:mb-12"
        >
         <span className="text-[#EA580C] flex items-center gap-2">
  <span className="w-1.5 h-1.5 rounded-full bg-[#EA580C] animate-pulse" />
  Accepting Projects
</span>

          <span className="hidden sm:inline text-[#EA580CE6]/20">
            /
          </span>

<span className="text-[#EA580C]">Las Vegas · Salt Lake City</span>
          <span  className="hidden sm:inline text-[#F4FAFB]/20">
            
          </span>

          <span className="hidden md:inline">
            
          </span>
        </motion.div>

        {/* Heading and cube */}
        <div className="plexura-heading-group">
          <h1 className="plexura-heading font-display font-extrabold tracking-tight text-[#F4FAFB]">
            <motion.span className="plexura-heading-line block">
              {'Make It Work.'.split('').map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                  className={
                    char === ' '
                      ? 'inline-block w-[0.3em]'
                      : 'inline-block'
                  }
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>

            <motion.span
              className="plexura-heading-line block bg-gradient-to-r from-[#5EEAD4] via-[#2DD4BF] to-[#14B8A6] bg-clip-text text-transparent pb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Make it Brilliant!
            </motion.span>
          </h1>

          <div className="plexura-cube-slot" aria-hidden="true">
            <div className="plexura-cube-art">
              <HeroCanvas
                className="w-full h-full"
                size={136}
                showOrbit={false}
              />
            </div>
          </div>
        </div>

        {/* Summary, then buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="mt-10 md:mt-6 flex flex-col items-center md:items-start gap-6 border-t border-[#F4FAFB]/10 pt-8"
        >
          <p className="m-0 text-lg md:text-base text-[#B7BDC4] leading-relaxed max-w-xl text-center md:text-left">
            Plexura Designs and Develops High-Performance Websites and
            Delivers IT Consulting Across End-User Hardware, Workstation
            Setup, Enterprise Infrastructure &amp; Networking. Our Cloud
            and AI Solutions Help Businesses Modernize Operations,
            Improve Efficiency, and Scale With Confidence.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
            <motion.a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-[#14B8A6] to-[#2DD4BF] rounded-full text-black font-bold text-base overflow-hidden shadow-xl shadow-[#2DD4BF]/30"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />

              <span className="relative flex items-center gap-2">
                Start Your Project

                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                >
                  <ArrowRight size={18} aria-hidden="true" />
                </motion.span>
              </span>
            </motion.a>

            <motion.a
              href="#services"
              className="group inline-flex items-center gap-2 font-semibold text-[#C2410C] border-b-2 border-[#142433]/20 hover:border-[#FB923C] pb-1 transition-colors"
              whileTap={{ scale: 0.98 }}
            >
              View Services

              <ArrowUpRight
                size={18}
                aria-hidden="true"
                className="text-[#FB923C] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </motion.a>
          </div>
        </motion.div>

        {/* Technology ribbon below the buttons */}
        <div className="mt-14 lg:mt-20 pb-8">
          <TechnologyPartners />
        </div>
      </div>
    </section>
  );
}