import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar({
  isScrolled,
  isMobile,
  mobileMenuOpen,
  setMobileMenuOpen,
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const [localScrolled, setLocalScrolled] = useState(false);
  const [localIsMobile, setLocalIsMobile] = useState(false);
  const [localMobileMenuOpen, setLocalMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setLocalScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setLocalIsMobile(window.innerWidth < 768);
    };

    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const resolvedScrolled =
    typeof isScrolled === 'boolean' ? isScrolled : localScrolled;

  const resolvedIsMobile =
    typeof isMobile === 'boolean' ? isMobile : localIsMobile;

  const resolvedMobileMenuOpen =
    typeof mobileMenuOpen === 'boolean'
      ? mobileMenuOpen
      : localMobileMenuOpen;

  const resolvedSetMobileMenuOpen =
    typeof setMobileMenuOpen === 'function'
      ? setMobileMenuOpen
      : setLocalMobileMenuOpen;

  const closeMobileMenu = () => {
    resolvedSetMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(sectionId);

      if (el) {
        el.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      } else if (attempts < 12) {
        setTimeout(() => tryScroll(attempts + 1), 100);
      }
    };

    setTimeout(() => tryScroll(), 120);
  };

  const goToHomeSection = (sectionId) => {
    closeMobileMenu();

    if (location.pathname !== '/') {
      navigate('/');
      scrollToSection(sectionId);
      return;
    }

    scrollToSection(sectionId);
  };

  const goToServicesPage = () => {
    closeMobileMenu();
    navigate('/services');

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 100);
  };

  return (
    <>
      {/* ============================================ */}
      {/* NAVIGATION */}
      {/* ============================================ */}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          resolvedScrolled
            ? resolvedIsMobile
              ? 'bg-[#08090B]/95 shadow-md shadow-black/50 border-b border-[#D6A84A]/15'
              : 'bg-[#08090B]/80 backdrop-blur-xl shadow-lg shadow-black/40 border-b border-[#D6A84A]/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-3 lg:py-4">
          <div className="flex items-center justify-between">

            {/* LOGO */}
            <div
              className="flex items-center group cursor-pointer"
              onClick={() => goToHomeSection('home')}
            >
              <span className="text-3xl md:text-4xl font-bold tracking-tight relative">
                <span className="flex items-center">

                  <span className="relative inline-block w-[2.4em] h-[2.4em]">
                    <img
                      src="/plexxx.png"
                      alt="Plexura"
                      className="logo-anim w-[2.4em] h-[2.4em] object-contain"
                      style={{
                        animation:
                          'logo-tech-pulse 4s ease-in-out infinite, glow-mint 10s ease-in-out infinite',
                        '--logo-anim':
                          'logo-tech-pulse 4s ease-in-out infinite, glow-mint 10s ease-in-out infinite',
                      }}
                    />
                  </span>

                  {['l', 'e', 'x', 'u', 'r', 'a'].map((letter, index) => (
                    <span
                      key={index}
                      className="logo-anim inline-block text-[#F4F5F6]"
                      style={{
                        marginLeft: index === 0 ? '-0.6em' : '0',
                        animation: `glow-mint 10s ease-in-out infinite ${
                          (index + 1) * 0.05
                        }s`,
                        '--logo-anim': `glow-mint 10s ease-in-out infinite ${
                          (index + 1) * 0.05
                        }s`,
                      }}
                    >
                      {letter}
                    </span>
                  ))}
                </span>
              </span>
            </div>

            {/* LOGO ANIMATIONS */}
            <style>{`
              @keyframes logo-swap {
                0%, 40% {
                  opacity: 1;
                  transform: scale(1) rotateY(0deg);
                  filter:
                    drop-shadow(0 0 14px rgba(214, 168, 74, 0.65))
                    drop-shadow(0 0 24px rgba(241, 208, 120, 0.25));
                }

                45%, 55% {
                  opacity: 0;
                  transform: scale(0.7) rotateY(90deg);
                  filter:
                    drop-shadow(0 0 24px rgba(201, 128, 114, 0.85));
                }

                60%, 90% {
                  opacity: 0;
                  transform: scale(0.7) rotateY(-90deg);
                  filter:
                    drop-shadow(0 0 0 rgba(214, 168, 74, 0));
                }

                93%, 97% {
                  opacity: 0;
                  transform: scale(0.7) rotateY(-90deg);
                  filter:
                    drop-shadow(0 0 28px rgba(241, 208, 120, 0.9));
                }

                100% {
                  opacity: 1;
                  transform: scale(1) rotateY(0deg);
                  filter:
                    drop-shadow(0 0 14px rgba(214, 168, 74, 0.65))
                    drop-shadow(0 0 24px rgba(201, 128, 114, 0.25));
                }
              }

              @keyframes p-swap {
                0%, 40% {
                  opacity: 0;
                  transform: scale(0.7) rotateY(-90deg);
                  filter:
                    drop-shadow(0 0 0 rgba(214, 168, 74, 0));
                }

                45%, 55% {
                  opacity: 0;
                  transform: scale(0.7) rotateY(-90deg);
                  filter:
                    drop-shadow(0 0 26px rgba(201, 128, 114, 0.9));
                }

                60%, 90% {
                  opacity: 1;
                  transform: scale(1) rotateY(0deg);
                  filter:
                    drop-shadow(0 0 18px rgba(214, 168, 74, 0.75));
                }

                93%, 97% {
                  opacity: 0;
                  transform: scale(0.7) rotateY(90deg);
                  filter:
                    drop-shadow(0 0 30px rgba(241, 208, 120, 0.9));
                }

                100% {
                  opacity: 0;
                  transform: scale(0.7) rotateY(90deg);
                  filter:
                    drop-shadow(0 0 0 rgba(214, 168, 74, 0));
                }
              }

              @keyframes letter-shift {
                0%, 55% {
                  transform: translateX(0);
                }

                60%, 90% {
                  transform: translateX(-9px);
                }

                95%, 100% {
                  transform: translateX(0);
                }
              }

              @keyframes glow-mint {
                0%, 58% {
                  text-shadow: none;
                }

                60%, 63% {
                  text-shadow:
                    0 0 10px rgba(214, 168, 74, 0.95),
                    0 0 22px rgba(241, 208, 120, 0.7),
                    0 0 36px rgba(201, 128, 114, 0.5);
                }

                65%, 95% {
                  text-shadow: none;
                }

                97%, 100% {
                  text-shadow:
                    0 0 10px rgba(214, 168, 74, 0.95),
                    0 0 22px rgba(241, 208, 120, 0.7),
                    0 0 36px rgba(201, 128, 114, 0.5);
                }
              }
            `}</style>

            {/* ============================================ */}
            {/* DESKTOP NAV */}
            {/* ============================================ */}

            <div className="hidden md:flex items-center space-x-8">

              <button
                onClick={() => goToHomeSection('home')}
                className="
                  text-[#AEB4BB]
                  hover:text-[#F1D078]
                  transition-colors
                  duration-200
                  relative
                  group
                "
              >
                Home

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-0.5
                    bg-gradient-to-r
                    from-[#C98072]
                    via-[#D6A84A]
                    to-[#F1D078]
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                />
              </button>

              <button
                onClick={() => goToHomeSection('services')}
                className="
                  text-[#AEB4BB]
                  hover:text-[#F1D078]
                  transition-colors
                  duration-200
                  relative
                  group
                "
              >
                Solutions

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-0.5
                    bg-gradient-to-r
                    from-[#C98072]
                    via-[#D6A84A]
                    to-[#F1D078]
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                />
              </button>

              <button
                onClick={goToServicesPage}
                className="
                  text-[#AEB4BB]
                  hover:text-[#F1D078]
                  transition-colors
                  duration-200
                  relative
                  group
                "
              >
                Services

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-0.5
                    bg-gradient-to-r
                    from-[#C98072]
                    via-[#D6A84A]
                    to-[#F1D078]
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                />
              </button>

              <button
                onClick={() => goToHomeSection('about')}
                className="
                  text-[#AEB4BB]
                  hover:text-[#F1D078]
                  transition-colors
                  duration-200
                  relative
                  group
                "
              >
                About

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-0.5
                    bg-gradient-to-r
                    from-[#C98072]
                    via-[#D6A84A]
                    to-[#F1D078]
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                />
              </button>

              <button
                onClick={() => goToHomeSection('team')}
                className="
                  text-[#AEB4BB]
                  hover:text-[#F1D078]
                  transition-colors
                  duration-200
                  relative
                  group
                "
              >
                Our Team

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    w-0
                    h-0.5
                    bg-gradient-to-r
                    from-[#C98072]
                    via-[#D6A84A]
                    to-[#F1D078]
                    group-hover:w-full
                    transition-all
                    duration-300
                  "
                />
              </button>

              <button
                onClick={() => goToHomeSection('contact')}
                className="
                  px-6
                  py-2
                  bg-gradient-to-r
                  from-[#B88348]
                  via-[#E2B65A]
                  to-[#F1D078]
                  text-[#08090B]
                  font-bold
                  rounded-lg
                  border
                  border-[#F1D078]/30
                  hover:shadow-[0_0_24px_rgba(214,168,74,0.35)]
                  hover:brightness-110
                  transition-all
                  duration-300
                "
              >
                Contact Us
              </button>
            </div>

            {/* ============================================ */}
            {/* MOBILE MENU BUTTON */}
            {/* ============================================ */}

            <button
              type="button"
              className="
                md:hidden
                p-2
                text-[#E2B65A]
                hover:text-[#F1D078]
                drop-shadow-[0_0_8px_rgba(214,168,74,0.35)]
                transition-colors
              "
              onClick={() => resolvedSetMobileMenuOpen(true)}
              aria-label="Open mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* ============================================ */}
      {/* MOBILE NAVIGATION */}
      {/* ============================================ */}

      {resolvedMobileMenuOpen && (
        <>
          {/* BACKDROP */}
          <div
            className="
              fixed
              inset-0
              bg-black/70
              backdrop-blur-sm
              z-[60]
              md:hidden
            "
            onClick={closeMobileMenu}
          />

          {/* DRAWER */}
          <div
            className="
              fixed
              top-0
              right-0
              bottom-0
              w-[85%]
              max-w-sm
              z-[70]
              md:hidden
              animate-slideInRight
            "
          >
            {/* BACKGROUND */}
            <div
              className="
                absolute
                inset-0
                bg-gradient-to-br
                from-[#050608]/98
                via-[#101216]/97
                to-[#202329]/96
                backdrop-blur-2xl
              "
            />

            {/* GRID */}
            <div className="absolute inset-0 opacity-[0.07]">
              <div className="grid-pattern" />
            </div>

            {/* METALLIC SIDE STRIP */}
            <div
              className="
                absolute
                top-0
                left-0
                bottom-0
                w-1
                bg-gradient-to-b
                from-[#F1D078]
                via-[#C98072]
                to-[#6B7077]
                shadow-[0_0_20px_rgba(214,168,74,0.35)]
              "
            />

            <div className="relative h-full flex flex-col">

              {/* MOBILE HEADER */}
              <div className="px-8 pt-8 pb-6">

                <div className="flex items-center justify-between mb-6">

                  <button
                    type="button"
                    onClick={() => goToHomeSection('home')}
                    className="text-3xl font-bold tracking-tight text-left"
                    aria-label="Go home"
                  >
                    <span className="flex items-center">

                      <img
                        src="/plexxx.png"
                        alt="P"
                        className="w-[2em] h-[2em] object-contain inline-block"
                      />

                      {['l', 'e', 'x', 'u', 'r', 'a'].map(
                        (letter, index) => (
                          <span
                            key={index}
                            className="inline-block text-[#F4F5F6]"
                            style={{
                              marginLeft:
                                index === 0 ? '-0.5em' : '0',
                            }}
                          >
                            {letter}
                          </span>
                        )
                      )}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={closeMobileMenu}
                    className="
                      w-10
                      h-10
                      flex
                      items-center
                      justify-center
                      rounded-full
                      bg-white/5
                      hover:bg-white/10
                      border
                      border-[#D6A84A]/20
                      hover:border-[#F1D078]/50
                      hover:shadow-[0_0_18px_rgba(214,168,74,0.15)]
                      transition-all
                      duration-300
                      group
                    "
                    aria-label="Close mobile menu"
                  >
                    <X
                      size={20}
                      className="
                        text-[#AEB4BB]
                        group-hover:text-[#F1D078]
                        transition-colors
                      "
                    />
                  </button>
                </div>

                <p className="text-sm text-[#AEB4BB] font-light tracking-wide">
                  Growth Systems
                </p>
              </div>

              {/* ============================================ */}
              {/* MOBILE LINKS */}
              {/* ============================================ */}

              <div className="flex-1 px-6 py-8 space-y-3 overflow-y-auto">

                {/* HOME */}
                <button
                  type="button"
                  onClick={() => goToHomeSection('home')}
                  className="group block relative w-full text-left"
                >
                  <div
                    className="
                      relative
                      px-6
                      py-5
                      rounded-2xl
                      bg-white/[0.035]
                      border
                      border-white/10
                      backdrop-blur-sm
                      hover:bg-white/[0.07]
                      hover:border-[#D6A84A]/40
                      hover:shadow-[0_0_30px_rgba(214,168,74,0.08)]
                      transition-all
                      duration-300
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-[#C98072]/0
                        via-[#D6A84A]/10
                        to-[#F1D078]/0
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                      "
                    />

                    <div className="relative flex items-center justify-between">
                      <div>
                        <span
                          className="
                            block
                            text-xl
                            font-semibold
                            text-[#F4F5F6]
                            group-hover:text-[#F1D078]
                            transition-colors
                            duration-300
                          "
                        >
                          Home
                        </span>

                        <span className="block text-xs text-[#969DA5] mt-1">
                          Welcome page
                        </span>
                      </div>

                      <div
                        className="
                          w-8
                          h-8
                          rounded-full
                          bg-gradient-to-br
                          from-[#C98072]/20
                          to-[#D6A84A]/20
                          border
                          border-[#D6A84A]/10
                          flex
                          items-center
                          justify-center
                          group-hover:scale-110
                          transition-transform
                          duration-300
                        "
                      >
                        <span
                          className="
                            text-[#E2B65A]
                            group-hover:text-[#F1D078]
                            group-hover:translate-x-0.5
                            transition-all
                            duration-300
                          "
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                {/* SOLUTIONS */}
                <button
                  type="button"
                  onClick={() => goToHomeSection('services')}
                  className="group block relative w-full text-left"
                >
                  <div
                    className="
                      relative
                      px-6
                      py-5
                      rounded-2xl
                      bg-white/[0.035]
                      border
                      border-white/10
                      backdrop-blur-sm
                      hover:bg-white/[0.07]
                      hover:border-[#D6A84A]/40
                      hover:shadow-[0_0_30px_rgba(214,168,74,0.08)]
                      transition-all
                      duration-300
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-[#C98072]/0
                        via-[#D6A84A]/10
                        to-[#F1D078]/0
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                      "
                    />

                    <div className="relative flex items-center justify-between">
                      <div>
                        <span
                          className="
                            block
                            text-xl
                            font-semibold
                            text-[#F4F5F6]
                            group-hover:text-[#F1D078]
                            transition-colors
                            duration-300
                          "
                        >
                          Solutions
                        </span>

                        <span className="block text-xs text-[#969DA5] mt-1">
                          Homepage overview
                        </span>
                      </div>

                      <div
                        className="
                          w-8
                          h-8
                          rounded-full
                          bg-gradient-to-br
                          from-[#C98072]/20
                          to-[#D6A84A]/20
                          border
                          border-[#D6A84A]/10
                          flex
                          items-center
                          justify-center
                          group-hover:scale-110
                          transition-transform
                          duration-300
                        "
                      >
                        <span
                          className="
                            text-[#E2B65A]
                            group-hover:text-[#F1D078]
                            group-hover:translate-x-0.5
                            transition-all
                            duration-300
                          "
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                {/* SERVICES */}
                <button
                  type="button"
                  onClick={goToServicesPage}
                  className="group block relative w-full text-left"
                >
                  <div
                    className="
                      relative
                      px-6
                      py-5
                      rounded-2xl
                      bg-white/[0.035]
                      border
                      border-white/10
                      backdrop-blur-sm
                      hover:bg-white/[0.07]
                      hover:border-[#D6A84A]/40
                      hover:shadow-[0_0_30px_rgba(214,168,74,0.08)]
                      transition-all
                      duration-300
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-[#C98072]/0
                        via-[#D6A84A]/10
                        to-[#F1D078]/0
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                      "
                    />

                    <div className="relative flex items-center justify-between">
                      <div>
                        <span
                          className="
                            block
                            text-xl
                            font-semibold
                            text-[#F4F5F6]
                            group-hover:text-[#F1D078]
                            transition-colors
                            duration-300
                          "
                        >
                          Services
                        </span>

                        <span className="block text-xs text-[#969DA5] mt-1">
                          What we offer
                        </span>
                      </div>

                      <div
                        className="
                          w-8
                          h-8
                          rounded-full
                          bg-gradient-to-br
                          from-[#C98072]/20
                          to-[#D6A84A]/20
                          border
                          border-[#D6A84A]/10
                          flex
                          items-center
                          justify-center
                          group-hover:scale-110
                          transition-transform
                          duration-300
                        "
                      >
                        <span
                          className="
                            text-[#E2B65A]
                            group-hover:text-[#F1D078]
                            group-hover:translate-x-0.5
                            transition-all
                            duration-300
                          "
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                {/* ABOUT */}
                <button
                  type="button"
                  onClick={() => goToHomeSection('about')}
                  className="group block relative w-full text-left"
                >
                  <div
                    className="
                      relative
                      px-6
                      py-5
                      rounded-2xl
                      bg-white/[0.035]
                      border
                      border-white/10
                      backdrop-blur-sm
                      hover:bg-white/[0.07]
                      hover:border-[#D6A84A]/40
                      hover:shadow-[0_0_30px_rgba(214,168,74,0.08)]
                      transition-all
                      duration-300
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-[#C98072]/0
                        via-[#D6A84A]/10
                        to-[#F1D078]/0
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                      "
                    />

                    <div className="relative flex items-center justify-between">
                      <div>
                        <span
                          className="
                            block
                            text-xl
                            font-semibold
                            text-[#F4F5F6]
                            group-hover:text-[#F1D078]
                            transition-colors
                            duration-300
                          "
                        >
                          About
                        </span>

                        <span className="block text-xs text-[#969DA5] mt-1">
                          How we build
                        </span>
                      </div>

                      <div
                        className="
                          w-8
                          h-8
                          rounded-full
                          bg-gradient-to-br
                          from-[#C98072]/20
                          to-[#D6A84A]/20
                          border
                          border-[#D6A84A]/10
                          flex
                          items-center
                          justify-center
                          group-hover:scale-110
                          transition-transform
                          duration-300
                        "
                      >
                        <span
                          className="
                            text-[#E2B65A]
                            group-hover:text-[#F1D078]
                            group-hover:translate-x-0.5
                            transition-all
                            duration-300
                          "
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                {/* OUR TEAM */}
                <button
                  type="button"
                  onClick={() => goToHomeSection('team')}
                  className="group block relative w-full text-left"
                >
                  <div
                    className="
                      relative
                      px-6
                      py-5
                      rounded-2xl
                      bg-white/[0.035]
                      border
                      border-white/10
                      backdrop-blur-sm
                      hover:bg-white/[0.07]
                      hover:border-[#D6A84A]/40
                      hover:shadow-[0_0_30px_rgba(214,168,74,0.08)]
                      transition-all
                      duration-300
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-[#C98072]/0
                        via-[#D6A84A]/10
                        to-[#F1D078]/0
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                      "
                    />

                    <div className="relative flex items-center justify-between">
                      <div>
                        <span
                          className="
                            block
                            text-xl
                            font-semibold
                            text-[#F4F5F6]
                            group-hover:text-[#F1D078]
                            transition-colors
                            duration-300
                          "
                        >
                          Our Team
                        </span>

                        <span className="block text-xs text-[#969DA5] mt-1">
                          Meet the founders
                        </span>
                      </div>

                      <div
                        className="
                          w-8
                          h-8
                          rounded-full
                          bg-gradient-to-br
                          from-[#C98072]/20
                          to-[#D6A84A]/20
                          border
                          border-[#D6A84A]/10
                          flex
                          items-center
                          justify-center
                          group-hover:scale-110
                          transition-transform
                          duration-300
                        "
                      >
                        <span
                          className="
                            text-[#E2B65A]
                            group-hover:text-[#F1D078]
                            group-hover:translate-x-0.5
                            transition-all
                            duration-300
                          "
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                {/* CONTACT */}
                <button
                  type="button"
                  onClick={() => goToHomeSection('contact')}
                  className="group block relative w-full text-left"
                >
                  <div
                    className="
                      relative
                      px-6
                      py-5
                      rounded-2xl
                      bg-white/[0.035]
                      border
                      border-white/10
                      backdrop-blur-sm
                      hover:bg-white/[0.07]
                      hover:border-[#D6A84A]/40
                      hover:shadow-[0_0_30px_rgba(214,168,74,0.08)]
                      transition-all
                      duration-300
                      overflow-hidden
                    "
                  >
                    <div
                      className="
                        absolute
                        inset-0
                        bg-gradient-to-r
                        from-[#C98072]/0
                        via-[#D6A84A]/10
                        to-[#F1D078]/0
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-500
                      "
                    />

                    <div className="relative flex items-center justify-between">
                      <div>
                        <span
                          className="
                            block
                            text-xl
                            font-semibold
                            text-[#F4F5F6]
                            group-hover:text-[#F1D078]
                            transition-colors
                            duration-300
                          "
                        >
                          Contact
                        </span>

                        <span className="block text-xs text-[#969DA5] mt-1">
                          Get in touch
                        </span>
                      </div>

                      <div
                        className="
                          w-8
                          h-8
                          rounded-full
                          bg-gradient-to-br
                          from-[#C98072]/20
                          to-[#D6A84A]/20
                          border
                          border-[#D6A84A]/10
                          flex
                          items-center
                          justify-center
                          group-hover:scale-110
                          transition-transform
                          duration-300
                        "
                      >
                        <span
                          className="
                            text-[#E2B65A]
                            group-hover:text-[#F1D078]
                            group-hover:translate-x-0.5
                            transition-all
                            duration-300
                          "
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              {/* ============================================ */}
              {/* MOBILE BOTTOM CTA */}
              {/* ============================================ */}

              <div className="px-6 pb-8">

                <div
                  className="
                    relative
                    rounded-2xl
                    bg-gradient-to-br
                    from-[#C98072]
                    via-[#D6A84A]
                    to-[#F1D078]
                    p-[2px]
                    overflow-hidden
                    group
                  "
                >
                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-[#C98072]
                      via-[#F1D078]
                      to-[#C98072]
                      animate-gradient-shift
                    "
                  />

                  <button
                    type="button"
                    onClick={() => goToHomeSection('contact')}
                    className="
                      relative
                      block
                      w-full
                      px-6
                      py-4
                      bg-[#0B0D10]
                      rounded-2xl
                      text-[#F4F5F6]
                      font-semibold
                      text-lg
                      hover:bg-[#101216]/95
                      transition-all
                      duration-300
                      group-hover:shadow-[0_0_30px_rgba(214,168,74,0.25)]
                    "
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      <span>Get Started</span>

                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </span>
                  </button>
                </div>

                {/* LEGAL LINKS */}
                <div className="mt-6 flex items-center justify-center space-x-6 text-xs text-[#969DA5]">

                  <Link
                    to="/privacy"
                    onClick={closeMobileMenu}
                    className="hover:text-[#F1D078] transition-colors"
                  >
                    Privacy
                  </Link>

                  <span className="text-[#6B7077]">•</span>

                  <Link
                    to="/terms"
                    onClick={closeMobileMenu}
                    className="hover:text-[#F1D078] transition-colors"
                  >
                    Terms
                  </Link>

                  <span className="text-[#6B7077]">•</span>

                  <button
                    type="button"
                    onClick={() => goToHomeSection('contact')}
                    className="hover:text-[#F1D078] transition-colors"
                  >
                    Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}