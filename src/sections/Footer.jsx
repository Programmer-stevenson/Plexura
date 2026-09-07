import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  ArrowUp
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const goToHomeSection = (sectionId) => {
    if (location.pathname !== '/') {
      navigate('/');

      const tryScroll = (attempts = 0) => {
        const el = document.getElementById(sectionId);

        if (el) {
          el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        } else if (attempts < 12) {
          setTimeout(() => tryScroll(attempts + 1), 100);
        }
      };

      setTimeout(() => tryScroll(), 150);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const goToServicesPage = () => {
    navigate('/services');

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return (
    <>
      {/* ============================================ */}
      {/* FOOTER — metallic orbital atmosphere */}
      {/* ============================================ */}

      <footer
        className="
          relative
          overflow-hidden
          border-t
          border-[#D6A84A]/10
          bg-[#050608]
        "
      >

        {/* ============================================ */}
        {/* ANIMATED ORB BACKGROUND */}
        {/* ============================================ */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            overflow-hidden
          "
          aria-hidden="true"
        >

          {/* subtle background gradient */}
          <div
            className="
              absolute
              inset-0
              bg-[radial-gradient(circle_at_50%_10%,#22252A_0%,#111318_35%,#080A0D_68%,#050608_100%)]
            "
          />

          {/* faint grid */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(214,168,74,0.28) 1px, transparent 1px), linear-gradient(90deg, rgba(214,168,74,0.28) 1px, transparent 1px)',
              backgroundSize: '72px 72px'
            }}
          />

          {/* GOLD ORB */}
          <div
            className="
              footer-orb
              footer-orb-gold
              absolute
              -left-24
              top-[8%]
              h-[260px]
              w-[260px]
              rounded-full
              sm:h-[360px]
              sm:w-[360px]
              lg:h-[500px]
              lg:w-[500px]
            "
          >
            <div
              className="
                absolute
                inset-0
                rounded-full
                blur-[55px]
                sm:blur-[75px]
              "
              style={{
                background:
                  'radial-gradient(circle at 35% 35%, rgba(241,208,120,0.42) 0%, rgba(214,168,74,0.23) 30%, rgba(184,131,72,0.10) 50%, transparent 72%)'
              }}
            />

            <div
              className="
                absolute
                inset-[28%]
                rounded-full
                border
                border-[#F1D078]/15
                shadow-[0_0_50px_rgba(214,168,74,0.12)]
              "
            />
          </div>

          {/* ROSE GOLD ORB */}
          <div
            className="
              footer-orb
              footer-orb-rose
              absolute
              -right-20
              top-[30%]
              h-[230px]
              w-[230px]
              rounded-full
              sm:h-[340px]
              sm:w-[340px]
              lg:h-[460px]
              lg:w-[460px]
            "
          >
            <div
              className="
                absolute
                inset-0
                rounded-full
                blur-[55px]
                sm:blur-[75px]
              "
              style={{
                background:
                  'radial-gradient(circle at 40% 40%, rgba(224,164,149,0.34) 0%, rgba(201,128,114,0.22) 32%, rgba(136,81,74,0.08) 55%, transparent 74%)'
              }}
            />

            <div
              className="
                absolute
                inset-[30%]
                rounded-full
                border
                border-[#C98072]/15
                shadow-[0_0_50px_rgba(201,128,114,0.10)]
              "
            />
          </div>

          {/* SILVER ORB — hidden on the smallest phones */}
          <div
            className="
              footer-orb
              footer-orb-silver
              absolute
              bottom-[5%]
              left-[42%]
              hidden
              h-[300px]
              w-[300px]
              rounded-full
              sm:block
              lg:h-[420px]
              lg:w-[420px]
            "
          >
            <div
              className="
                absolute
                inset-0
                rounded-full
                blur-[70px]
              "
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, rgba(226,230,234,0.20) 0%, rgba(151,158,166,0.12) 34%, rgba(90,96,104,0.05) 58%, transparent 74%)'
              }}
            />
          </div>

          {/* ambient center glow */}
          <div
            className="
              absolute
              left-1/2
              top-[20%]
              h-[420px]
              w-[420px]
              -translate-x-1/2
              rounded-full
              bg-[#D6A84A]/[0.025]
              blur-[110px]
              sm:h-[650px]
              sm:w-[650px]
            "
          />

          {/* bottom vignette */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-56
              bg-gradient-to-t
              from-[#050608]
              via-[#050608]/80
              to-transparent
            "
          />
        </div>

        {/* ============================================ */}
        {/* ORB ANIMATION CSS */}
        {/* ============================================ */}

        <style>{`

          .footer-orb {
            will-change: transform;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
          }

          .footer-orb-gold {
            animation: footer-orbit-gold 20s ease-in-out infinite alternate;
          }

          .footer-orb-rose {
            animation: footer-orbit-rose 24s ease-in-out infinite alternate;
          }

          .footer-orb-silver {
            animation: footer-orbit-silver 28s ease-in-out infinite alternate;
          }

          @keyframes footer-orbit-gold {
            0% {
              transform:
                translate3d(-8px, 10px, 0)
                scale(0.96);
            }

            35% {
              transform:
                translate3d(24px, -18px, 0)
                scale(1.03);
            }

            70% {
              transform:
                translate3d(10px, 22px, 0)
                scale(1.08);
            }

            100% {
              transform:
                translate3d(38px, -4px, 0)
                scale(1);
            }
          }

          @keyframes footer-orbit-rose {
            0% {
              transform:
                translate3d(10px, -8px, 0)
                scale(1);
            }

            35% {
              transform:
                translate3d(-28px, 18px, 0)
                scale(1.07);
            }

            72% {
              transform:
                translate3d(-10px, -25px, 0)
                scale(0.97);
            }

            100% {
              transform:
                translate3d(-36px, 12px, 0)
                scale(1.04);
            }
          }

          @keyframes footer-orbit-silver {
            0% {
              transform:
                translate3d(-18px, 12px, 0)
                scale(0.95);
            }

            33% {
              transform:
                translate3d(16px, -20px, 0)
                scale(1.04);
            }

            70% {
              transform:
                translate3d(28px, 12px, 0)
                scale(1);
            }

            100% {
              transform:
                translate3d(-12px, -10px, 0)
                scale(1.06);
            }
          }

          @media (max-width: 640px) {

            .footer-orb-gold {
              animation-duration: 18s;
            }

            .footer-orb-rose {
              animation-duration: 22s;
            }
          }

          @media (prefers-reduced-motion: reduce) {

            .footer-orb-gold,
            .footer-orb-rose,
            .footer-orb-silver {
              animation: none !important;
            }
          }

        `}</style>

        {/* ============================================ */}
        {/* CONTENT */}
        {/* ============================================ */}

        <div
          className="
            relative
            z-10
            mx-auto
            max-w-7xl
            px-6
            pb-10
            pt-20
          "
        >

          {/* ============================================ */}
          {/* WORDMARK ROW */}
          {/* ============================================ */}

          <div
            className="
              relative
              border-b
              border-[#D9DEE3]/10
              pb-8
              lg:pb-10
            "
          >
            <div className="flex items-center justify-center">

              <button
                type="button"
                onClick={() => goToHomeSection('home')}
                className="
                  group
                  flex
                  cursor-pointer
                  items-center
                "
                aria-label="Go to homepage"
              >
                <span
                  className="
                    relative
                    text-3xl
                    font-bold
                    tracking-tight
                    md:text-4xl
                  "
                >
                  <span className="flex items-center">

                    <span
                      className="
                        relative
                        inline-block
                        h-[2.4em]
                        w-[2.4em]
                      "
                    >
                      <img
                        src="/plexxx.png"
                        alt="Plexura"
                        className="
                          h-[2.4em]
                          w-[2.4em]
                          object-contain
                          transition-all
                          duration-300
                          group-hover:scale-110
                          group-hover:drop-shadow-[0_0_14px_rgba(214,168,74,0.35)]
                        "
                      />
                    </span>

                    {['l', 'e', 'x', 'u', 'r', 'a'].map(
                      (letter, index) => (
                        <span
                          key={index}
                          className="
                            inline-block
                            text-[#F4F5F6]
                            transition-colors
                            group-hover:text-[#F1D078]
                          "
                          style={{
                            marginLeft:
                              index === 0 ? '-0.6em' : '0'
                          }}
                        >
                          {letter}
                        </span>
                      )
                    )}
                  </span>
                </span>
              </button>
            </div>

            {/* BACK TO TOP */}
            <motion.button
              type="button"
              onClick={scrollToTop}
              className="
                absolute
                right-0
                top-1/2
                flex
                h-11
                w-11
                -translate-y-1/2
                flex-shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#D6A84A]/25
                bg-[#D6A84A]/[0.03]
                text-[#F4F5F6]
                transition-all
                hover:border-[#F1D078]
                hover:bg-[#D6A84A]
                hover:text-[#08090B]
                hover:shadow-[0_0_20px_rgba(214,168,74,0.25)]
                lg:h-12
                lg:w-12
              "
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Back to top"
            >
              <ArrowUp size={22} />
            </motion.button>
          </div>

          {/* ============================================ */}
          {/* LINK GRID */}
          {/* ============================================ */}

          <div className="py-14 text-center lg:py-16">

            {/* intro */}
            <div
              className="
                mx-auto
                mb-14
                flex
                max-w-md
                flex-col
                items-center
                space-y-6
                lg:mb-16
              "
            >
              <p
                className="
                  max-w-xs
                  leading-relaxed
                  text-[#AEB4BB]
                "
              >
                Websites, automation, and growth systems built to help
                businesses capture and convert more leads.
              </p>

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  font-mono
                  text-[11px]
                  uppercase
                  tracking-[0.2em]
                  text-[#969DA5]
                "
              >
                <span
                  className="
                    h-1.5
                    w-1.5
                    animate-pulse
                    rounded-full
                    bg-[#D6A84A]
                    shadow-[0_0_8px_rgba(214,168,74,0.7)]
                  "
                />

                Accepting new projects
              </div>

              {/* ============================================ */}
              {/* SOCIAL */}
              {/* ============================================ */}

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-3
                  pt-1
                "
              >

                <a
                  href="https://www.linkedin.com/company/plexura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="
                    group
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D6A84A]/20
                    bg-white/[0.025]
                    transition-all
                    hover:border-[#F1D078]
                    hover:bg-[#D6A84A]
                    hover:shadow-[0_0_18px_rgba(214,168,74,0.20)]
                  "
                >
                  <Linkedin
                    size={16}
                    className="
                      text-[#D4D7DB]
                      transition-colors
                      group-hover:text-[#08090B]
                    "
                  />
                </a>

                <a
                  href="https://www.facebook.com/profile.php?id=61582922265027"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="
                    group
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#C98072]/20
                    bg-white/[0.025]
                    transition-all
                    hover:border-[#C98072]
                    hover:bg-[#C98072]
                    hover:shadow-[0_0_18px_rgba(201,128,114,0.20)]
                  "
                >
                  <Facebook
                    size={16}
                    className="
                      text-[#D4D7DB]
                      transition-colors
                      group-hover:text-[#08090B]
                    "
                  />
                </a>

                <a
                  href="https://www.google.com/search?q=plexura"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Google Business Profile"
                  className="
                    group
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#D9DEE3]/20
                    bg-white/[0.025]
                    transition-all
                    hover:border-[#D9DEE3]/60
                    hover:bg-[#D9DEE3]
                  "
                >
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* ============================================ */}
            {/* LISTS */}
            {/* ============================================ */}

            <div
              className="
                grid
                grid-cols-2
                gap-10
                sm:flex
                sm:flex-row
                sm:flex-wrap
                sm:justify-center
                sm:gap-20
                lg:gap-28
              "
            >

              {/* SERVICES */}
              <div>

                <h3
                  className="
                    mb-6
                    font-mono
                    text-[11px]
                    uppercase
                    tracking-[0.3em]
                    text-[#D6A84A]
                  "
                >
                  Services
                </h3>

                <div className="space-y-3.5">
                  {[
                    'Website + Growth System',
                    'Website Redesign',
                    'CRM Automation',
                    'Booking + Reminders'
                  ].map((label, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={goToServicesPage}
                      className="
                        group
                        flex
                        w-full
                        items-center
                        justify-center
                        text-[#AEB4BB]
                        transition-colors
                        hover:text-[#F4F5F6]
                      "
                    >
                      <span
                        className="
                          mr-0
                          h-px
                          w-0
                          bg-gradient-to-r
                          from-[#C98072]
                          to-[#F1D078]
                          transition-all
                          duration-300
                          group-hover:mr-2
                          group-hover:w-4
                        "
                      />

                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* EXPLORE */}
              <div>

                <h3
                  className="
                    mb-6
                    font-mono
                    text-[11px]
                    uppercase
                    tracking-[0.3em]
                    text-[#D6A84A]
                  "
                >
                  Explore
                </h3>

                <div className="space-y-3.5">

                  {[
                    {
                      label: 'Home',
                      action: () => goToHomeSection('home')
                    },
                    {
                      label: 'About Us',
                      action: () => goToHomeSection('about')
                    },
                    {
                      label: 'Services',
                      action: goToServicesPage
                    },
                    {
                      label: 'Contact',
                      action: () => goToHomeSection('contact')
                    }
                  ].map((item, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={item.action}
                      className="
                        group
                        flex
                        w-full
                        items-center
                        justify-center
                        text-[#AEB4BB]
                        transition-colors
                        hover:text-[#F4F5F6]
                      "
                    >
                      <span
                        className="
                          mr-0
                          h-px
                          w-0
                          bg-gradient-to-r
                          from-[#C98072]
                          to-[#F1D078]
                          transition-all
                          duration-300
                          group-hover:mr-2
                          group-hover:w-4
                        "
                      />

                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* CONTACT */}
              <div className="col-span-2 sm:col-span-1">

                <h3
                  className="
                    mb-6
                    font-mono
                    text-[11px]
                    uppercase
                    tracking-[0.3em]
                    text-[#D6A84A]
                  "
                >
                  Contact
                </h3>

                <div
                  className="
                    space-y-3.5
                    text-[#AEB4BB]
                  "
                >

                  <button
                    type="button"
                    onClick={() => goToHomeSection('contact')}
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      transition-colors
                      hover:text-[#F4F5F6]
                    "
                  >
                    <MapPin
                      size={15}
                      className="
                        flex-shrink-0
                        text-[#D6A84A]
                      "
                    />

                    Las Vegas, Nevada
                  </button>

                  <a
                    href="mailto:contact@plexura.com"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-3
                      transition-colors
                      hover:text-[#F4F5F6]
                    "
                  >
                    <Mail
                      size={15}
                      className="
                        flex-shrink-0
                        text-[#D6A84A]
                      "
                    />

                    contact@plexura.com
                  </a>

                  <a
                    href="tel:+18013478072"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-3
                      transition-colors
                      hover:text-[#F4F5F6]
                    "
                  >
                    <Phone
                      size={15}
                      className="
                        flex-shrink-0
                        text-[#C98072]
                      "
                    />

                    (801) 347-8072
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* ============================================ */}
          {/* BOTTOM RULE */}
          {/* ============================================ */}

          <div
            className="
              flex
              flex-col
              items-center
              justify-between
              gap-4
              border-t
              border-[#D9DEE3]/10
              pt-8
              font-mono
              text-[11px]
              uppercase
              tracking-[0.15em]
              text-[#969DA5]/80
              md:flex-row
            "
          >
            <span>
              © 2026 Plexura — All rights reserved
            </span>

            <div className="flex items-center gap-6">

              <Link
                to="/terms"
                onClick={scrollToTop}
                className="
                  transition-colors
                  hover:text-[#F1D078]
                "
              >
                Terms of Service
              </Link>

              <Link
                to="/privacy"
                onClick={scrollToTop}
                className="
                  transition-colors
                  hover:text-[#F1D078]
                "
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