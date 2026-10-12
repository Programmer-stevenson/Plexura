import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Facebook,
  ArrowUp,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  'IT Consulting & Infrastructure',
  'Workstation & Home Office Setup',
  'Network & POS Setup',
  'Cloud Solutions',
  'AI Consulting',
  'Web Design & Development',
];

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const scrollTimer = useRef(null);

  useEffect(() => {
    return () => window.clearTimeout(scrollTimer.current);
  }, []);

  const scrollBehavior = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? 'auto'
      : 'smooth';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: scrollBehavior(),
    });
  };

  const goToHomeSection = (sectionId) => {
    window.clearTimeout(scrollTimer.current);

    const tryScroll = (attempt = 0) => {
      const section = document.getElementById(sectionId);

      if (section) {
        section.scrollIntoView({
          behavior: scrollBehavior(),
          block: 'start',
        });
      } else if (attempt < 20) {
        scrollTimer.current = window.setTimeout(
          () => tryScroll(attempt + 1),
          100
        );
      }
    };

    if (location.pathname !== '/') {
      navigate(`/#${sectionId}`);
      scrollTimer.current = window.setTimeout(() => tryScroll(), 100);
    } else {
      tryScroll();
    }
  };

  const goToServicesPage = () => {
    window.clearTimeout(scrollTimer.current);
    navigate('/services');
    scrollTimer.current = window.setTimeout(scrollToTop, 100);
  };

  return (
    <footer className="plexura-footer">
      <style>{`
        .plexura-footer {
          position: relative;
          overflow: hidden;
          isolation: isolate;
          background: #091525;
          color: #F5F7FA;
          border-top: 1px solid #FFFFFF14;
        }

        .plexura-footer,
        .plexura-footer * {
          box-sizing: border-box;
        }

        /* Image beneath the tint */
        .plexura-footer .pf-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          user-select: none;
        }

        .plexura-footer .pf-background img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        /* Darker behind the links, lighter near the top */
        .plexura-footer .pf-background::after {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(9, 21, 37, .58) 0%,
              rgba(12, 28, 48, .79) 42%,
              rgba(9, 21, 37, .95) 100%
            ),
            linear-gradient(
              90deg,
              rgba(18, 36, 61, .35),
              rgba(18, 36, 61, .12)
            );
        }

        .plexura-footer .pf-inner {
          position: relative;
          z-index: 1;
          width: 100%;
          max-width: 1280px;
          margin-inline: auto;
          padding: 60px 24px 26px;
        }

        /* Centered logo and introduction */
        .plexura-footer .pf-brand-area {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding-bottom: 38px;
        }

        .plexura-footer .pf-brand {
          display: inline-flex;
          align-items: center;
          padding: 0;
          border: 0;
          background: transparent;
          color: #F5F7FA;
          font-family: inherit;
          font-size: 38px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: -.045em;
          cursor: pointer;
        }

        .plexura-footer .pf-brand img {
          display: block;
          flex-shrink: 0;
          width: 2.4em;
          height: 2.4em;
          object-fit: contain;
          transition: transform 300ms ease;
        }

        .plexura-footer .pf-brand-name {
          margin-left: -.6em;
          transition: color 200ms ease;
        }

        .plexura-footer .pf-description {
          max-width: 550px;
          margin: 16px 0 20px;
          color: #D0DAE6;
          font-size: 15px;
          line-height: 1.8;
        }

        .plexura-footer .pf-availability {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #FDBA74;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.6;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        .plexura-footer .pf-availability::before {
          content: '';
          width: 6px;
          height: 6px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #EA580C;
          box-shadow: 0 0 12px #EA580C55;
        }

        .plexura-footer .pf-socials {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: 22px;
        }

        .plexura-footer .pf-social {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 42px;
          border: 1px solid #FFFFFF25;
          border-radius: 50%;
          background: #12243D80;
          color: #F5F7FA;
          text-decoration: none;
          transition:
            background-color 200ms ease,
            border-color 200ms ease,
            transform 200ms ease;
        }

        .plexura-footer .pf-google {
          font-size: 19px;
          font-weight: 700;
          line-height: 1;
        }

        /* Footer navigation */
        .plexura-footer .pf-grid {
          display: grid;
          grid-template-columns:
            minmax(0, 1.15fr)
            minmax(0, .7fr)
            minmax(0, 1.15fr);
          gap: 48px;
          padding: 38px 0;
          border-top: 1px solid #FFFFFF20;
        }

        .plexura-footer .pf-column {
          min-width: 0;
        }

        .plexura-footer .pf-column h3 {
          margin: 0 0 18px;
          color: #FDBA74;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .plexura-footer .pf-list {
          display: grid;
          gap: 2px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .plexura-footer .pf-link {
          display: inline-flex;
          align-items: center;
          min-height: 38px;
          max-width: 100%;
          padding: 5px 0;
          border: 0;
          background: transparent;
          color: #CCD6E3;
          font-family: inherit;
          font-size: 14px;
          line-height: 1.6;
          text-align: left;
          text-decoration: none;
          cursor: pointer;
          transition: color 200ms ease;
        }

        .plexura-footer .pf-contact-list {
          display: grid;
          gap: 10px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .plexura-footer .pf-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          min-height: 38px;
          padding: 5px 0;
          color: #CCD6E3;
          font-size: 14px;
          line-height: 1.7;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .plexura-footer .pf-contact-item svg {
          flex-shrink: 0;
          margin-top: 4px;
          color: #FDBA74;
        }

        .plexura-footer .pf-contact-item span {
          min-width: 0;
        }

        .plexura-footer .pf-contact-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 44px;
          margin-top: 18px;
          padding: 11px 17px;
          border: 1px solid #FFFFFF30;
          border-radius: 9px;
          background: #192F4D80;
          color: #F5F7FA;
          font-family: inherit;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition:
            background-color 200ms ease,
            border-color 200ms ease;
        }

        /* Legal links and back-to-top */
        .plexura-footer .pf-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding-top: 24px;
          border-top: 1px solid #FFFFFF20;
        }

        .plexura-footer .pf-copyright {
          margin: 0;
          color: #AEBED0;
          font-size: 12px;
          line-height: 1.7;
        }

        .plexura-footer .pf-bottom-right {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .plexura-footer .pf-legal {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px 22px;
        }

        .plexura-footer .pf-legal a {
          display: inline-flex;
          align-items: center;
          min-height: 38px;
          color: #C3CDDB;
          font-size: 12px;
          line-height: 1.6;
          text-decoration: none;
          transition: color 200ms ease;
        }

        .plexura-footer .pf-top {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border: 1px solid #FFFFFF30;
          border-radius: 50%;
          background: #192F4D80;
          color: #F5F7FA;
          cursor: pointer;
          transition:
            background-color 200ms ease,
            border-color 200ms ease;
        }

        .plexura-footer a:focus-visible,
        .plexura-footer button:focus-visible {
          outline: 2px solid #FDBA74;
          outline-offset: 5px;
        }

        @media (hover: hover) and (pointer: fine) {
          .plexura-footer .pf-brand:hover img {
            transform: scale(1.04);
          }

          .plexura-footer .pf-brand:hover .pf-brand-name,
          .plexura-footer .pf-link:hover,
          .plexura-footer a.pf-contact-item:hover,
          .plexura-footer .pf-legal a:hover {
            color: #FDBA74;
          }

          .plexura-footer .pf-social:hover {
            transform: translateY(-2px);
            border-color: #EA580C;
            background: #C2410C;
          }

          .plexura-footer .pf-contact-cta:hover,
          .plexura-footer .pf-top:hover {
            border-color: #EA580C;
            background: #C2410C;
          }
        }

        @media (max-width: 900px) {
          .plexura-footer .pf-grid {
            gap: 28px;
          }

          .plexura-footer .pf-inner {
            padding-top: 46px;
          }

          .plexura-footer .pf-bottom {
            align-items: flex-start;
            flex-direction: column;
            gap: 14px;
          }

          .plexura-footer .pf-bottom-right {
            justify-content: space-between;
            width: 100%;
          }
        }

        @media (max-width: 620px) {
          .plexura-footer .pf-inner {
            padding: 38px 20px 22px;
          }

          .plexura-footer .pf-background img {
            object-position: 60% center;
          }

          .plexura-footer .pf-background::after {
            background: linear-gradient(
              180deg,
              rgba(9, 21, 37, .65) 0%,
              rgba(12, 28, 48, .87) 45%,
              rgba(9, 21, 37, .97) 100%
            );
          }

          .plexura-footer .pf-brand {
            font-size: 32px;
          }

          .plexura-footer .pf-brand-area {
            padding-bottom: 28px;
          }

          .plexura-footer .pf-description {
            margin-top: 12px;
            font-size: 13px;
            line-height: 1.75;
          }

          .plexura-footer .pf-availability {
            font-size: 9px;
            letter-spacing: .12em;
          }

          .plexura-footer .pf-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 28px 20px;
            padding: 28px 0;
          }

          .plexura-footer .pf-column h3 {
            margin-bottom: 12px;
            font-size: 10px;
          }

          .plexura-footer .pf-link {
            min-height: 40px;
            font-size: 12px;
          }

          .plexura-footer .pf-contact-column {
            grid-column: 1 / -1;
            padding-top: 24px;
            border-top: 1px solid #FFFFFF18;
          }

          .plexura-footer .pf-contact-item {
            font-size: 13px;
          }

          .plexura-footer .pf-copyright,
          .plexura-footer .pf-legal a {
            font-size: 11px;
          }

          .plexura-footer .pf-bottom-right {
            gap: 12px;
          }

          .plexura-footer .pf-legal {
            gap: 6px 16px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .plexura-footer *,
          .plexura-footer *::before,
          .plexura-footer *::after {
            transition: none;
          }

          .plexura-footer .pf-brand:hover img,
          .plexura-footer .pf-social:hover {
            transform: none;
          }
        }
          @media (max-width: 620px) {
  .plexura-footer .pf-column {
    text-align: center;
  }

  .plexura-footer .pf-column h3 {
    text-align: center;
  }

  .plexura-footer .pf-list {
    justify-items: center;
  }

  .plexura-footer .pf-link {
    justify-content: center;
    text-align: center;
  }

  .plexura-footer .pf-contact-list {
    justify-items: center;
  }

  .plexura-footer .pf-contact-item {
    justify-content: center;
    text-align: center;
  }

  .plexura-footer .pf-contact-cta {
    margin-inline: auto;
  }

  .plexura-footer .pf-bottom {
    align-items: center;
    text-align: center;
  }

  .plexura-footer .pf-bottom-right {
    flex-direction: column;
    justify-content: center;
    gap: 16px;
  }

  .plexura-footer .pf-legal {
    justify-content: center;
  }
}
  .plexura-footer .pf-background::after {
  display: none;
}
  
      `}</style>

      <div className="pf-background" aria-hidden="true">
        <img
          src="/footer-hero.png"
          alt=""
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      </div>

      <div className="pf-inner">
        <div className="pf-brand-area">
          <button
            type="button"
            className="pf-brand"
            onClick={() => goToHomeSection('home')}
            aria-label="Plexura home"
          >
            <img src="/plexxx.png" alt="" />
            <span className="pf-brand-name" aria-hidden="true">
              lexura
            </span>
          </button>

          <p className="pf-description">
            IT consulting, connected infrastructure, cloud and AI
            solutions, and custom websites—built around the way
            your business works.
          </p>

          <span className="pf-availability">
            Accepting new projects
          </span>

          <div className="pf-socials">
            <a
              className="pf-social"
              href="https://www.linkedin.com/company/plexura/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Plexura on LinkedIn"
            >
              <Linkedin size={17} aria-hidden="true" />
            </a>

            <a
              className="pf-social"
              href="https://www.facebook.com/profile.php?id=61582922265027"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Plexura on Facebook"
            >
              <Facebook size={17} aria-hidden="true" />
            </a>

            <a
              className="pf-social"
              href="https://www.google.com/search?q=plexura"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Find Plexura on Google"
            >
              <span className="pf-google" aria-hidden="true">
                G
              </span>
            </a>
          </div>
        </div>

        <div className="pf-grid">
          <nav className="pf-column" aria-label="Footer services">
            <h3>Services</h3>

            <ul className="pf-list">
              {services.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    className="pf-link"
                    onClick={goToServicesPage}
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="pf-column" aria-label="Footer navigation">
            <h3>Explore</h3>

            <ul className="pf-list">
              <li>
                <button
                  type="button"
                  className="pf-link"
                  onClick={() => goToHomeSection('home')}
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="pf-link"
                  onClick={() => goToHomeSection('about')}
                >
                  About Plexura
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className="pf-link"
                  onClick={goToServicesPage}
                >
                  Services
                </button>
              </li>

              <li>
                <Link
                  className="pf-link"
                  to="/team"
                  onClick={scrollToTop}
                >
                  Meet the Team
                </Link>
              </li>

              <li>
                <button
                  type="button"
                  className="pf-link"
                  onClick={() => goToHomeSection('contact')}
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          <div className="pf-column pf-contact-column">
            <h3>Get in touch</h3>

            <ul className="pf-contact-list">
              <li className="pf-contact-item">
                <MapPin size={16} aria-hidden="true" />
                <span>
                  Las Vegas, Nevada
                  <br />
                  Salt Lake City, Utah
                </span>
              </li>

              <li>
                <a
                  className="pf-contact-item"
                  href="mailto:contact@plexura.com"
                >
                  <Mail size={16} aria-hidden="true" />
                  <span>contact@plexura.com</span>
                </a>
              </li>

              <li>
                <a
                  className="pf-contact-item"
                  href="tel:+18013478072"
                >
                  <Phone size={16} aria-hidden="true" />
                  <span>(801) 347-8072</span>
                </a>
              </li>
            </ul>

            <button
              type="button"
              className="pf-contact-cta"
              onClick={() => goToHomeSection('contact')}
            >
              Discuss your project
              <ArrowUpRight size={17} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="pf-bottom">
          <p className="pf-copyright">
            © {new Date().getFullYear()} Plexura. All rights reserved.
          </p>

          <div className="pf-bottom-right">
            <nav className="pf-legal" aria-label="Legal">
              <Link to="/terms" onClick={scrollToTop}>
                Terms of Service
              </Link>

              <Link to="/privacy" onClick={scrollToTop}>
                Privacy Policy
              </Link>
            </nav>

            <button
              type="button"
              className="pf-top"
              onClick={scrollToTop}
              aria-label="Back to top"
            >
              <ArrowUp size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}