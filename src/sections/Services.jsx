import React, { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';

const showcaseSlides = [
  {
    src: '/laptop-showcase.png',
    alt: 'Plexura laptop showcase',
  },
  {
    src: '/phone-tab.png',
    alt: 'Plexura website displayed on a tablet and phone',
  },
];

const services = [
  {
    id: 'it-infrastructure',
    logo: '/consult logo.png',
    title: 'IT Infrastructure',
    description:
      'Reliable systems, workstations, and business hardware configured for your operations.',
    features: [
      'IT consulting and infrastructure planning',
      'Servers, storage, and virtualization',
      'Workstation, home office, and POS setup',
    ],
  },
  {
    id: 'ai-consulting',
    logo: '/ai.png',
    title: 'AI Consulting',
    description:
      'Practical AI tools and integrations that simplify work and connect your business processes.',
    features: [
      'Microsoft Copilot and AI tool adoption',
      'AI assistants and application integrations',
      'Workflow automation and onboarding',
    ],
  },
  {
    id: 'cloud-consulting',
    logo: '/cloud.png',
    title: 'Cloud Solutions',
    description:
      'Cloud platforms configured around how your team works, shares information, and connects.',
    features: [
      'Microsoft 365 and Google Workspace',
      'Azure planning and cloud migration',
      'Identity, access, and hybrid connectivity',
    ],
  },
  {
    id: 'web-development',
    logo: '/web-design.png',
    title: 'Web Design & Development',
    description:
      'Custom websites combining professional design, responsive development, and useful integrations.',
    features: [
      'Custom website design and development',
      'Responsive layouts and performance',
      'Forms, booking, and CRM integrations',
    ],
  },
  {
    id: 'network-setup',
    logo: '/network.png',
    title: 'Network Setup',
    description:
      'Dependable connectivity for your business or home, from Wi-Fi to enterprise networking.',
    features: [
      'Business and home Wi-Fi setup',
      'Switches, routers, and network segmentation',
      'Firewall and VPN configuration',
    ],
  },
];

function FeatureList({ features }) {
  return (
    <ul className="ps-checks">
      {features.map((feature) => (
        <li key={feature}>
          <Check size={15} aria-hidden="true" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Services() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [activeLogo, setActiveLogo] = useState(null);

  useEffect(() => {
    const mobile = window.matchMedia('(max-width: 900px)');
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    let timer;

    const updatePlayback = () => {
      window.clearInterval(timer);

      if (mobile.matches && !reducedMotion.matches && !paused) {
        timer = window.setInterval(() => {
          setActiveSlide((current) => (
            (current + 1) % showcaseSlides.length
          ));
        }, 6000);
      }
    };

    updatePlayback();

    mobile.addEventListener('change', updatePlayback);
    reducedMotion.addEventListener('change', updatePlayback);

    return () => {
      window.clearInterval(timer);
      mobile.removeEventListener('change', updatePlayback);
      reducedMotion.removeEventListener('change', updatePlayback);
    };
  }, [paused]);

  return (
    <section
      id="services"
      className="plexura-services"
      aria-labelledby="plexura-services-title"
    >
      <style>{`

        #services.plexura-services {
          position: relative;
          padding: 96px 24px;
          background: #F2F1ED;
          color: #142433;
          isolation: isolate;
          scroll-margin-top: 100px;
        }

        #services.plexura-services,
        #services.plexura-services * {
          box-sizing: border-box;
        }

        #services .ps-inner {
          width: 100%;
          max-width: 1280px;
          min-width: 0;
          margin-inline: auto;
        }

        #services .ps-header {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
          align-items: end;
          gap: 56px;
          margin-bottom: 36px;
        }

        #services .ps-eyebrow {
          margin: 0 0 18px;
          color: #B8440A;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.6;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        #services .ps-title {
          margin: 0;
          max-width: 720px;
          color: #142433;
          font-size: clamp(38px, 4.5vw, 64px);
          font-weight: 700;
          line-height: 1.04;
          letter-spacing: -.045em;
        }

        #services .ps-title span {
          display: block;
          color: #355987;
        }

        #services .ps-header-copy p {
          margin: 0 0 20px;
          color: #586575;
          font-size: 16px;
          line-height: 1.8;
        }

        #services .ps-text-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #B8440A;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
        }

        #services .ps-text-link svg,
        #services .ps-button svg,
        #services .ps-card-link svg {
          flex-shrink: 0;
        }

        #services .ps-mobile-showcase {
          display: none;
        }

        #services .ps-rail {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding: 22px 0;
          margin-bottom: 40px;
          border-block: 1px solid #14243320;
        }

        #services .ps-rail a {
          padding: 10px 15px;
          border: 1px solid #14243320;
          border-radius: 999px;
          background: #FFFFFF50;
          color: #35475C;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;
          text-decoration: none;
          transition: background .2s ease, color .2s ease;
        }

        #services .ps-rail a:hover {
          background: #152B49;
          color: #FFFFFF;
        }

        #services .ps-feature {
          display: grid;
          grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);
          align-items: center;
          gap: 32px;
          padding: 44px;
          border: 1px solid #FFFFFF14;
          border-radius: 26px;
          background:
            radial-gradient(
              ellipse at 95% 10%,
              #35598755,
              transparent 60%
            ),
            linear-gradient(135deg, #101D31, #193453);
          box-shadow: 0 24px 56px #14243315;
        }

        #services .ps-feature .ps-eyebrow {
          color: #FDBA74;
        }

        #services .ps-feature h3 {
          margin: 0 0 20px;
          color: #F5F7FA;
          font-size: clamp(30px, 3.3vw, 46px);
          font-weight: 650;
          line-height: 1.1;
          letter-spacing: -.035em;
        }

        #services .ps-feature-text {
          margin: 0 0 22px;
          color: #C3CDDB;
          font-size: 15px;
          line-height: 1.8;
        }

        #services .ps-checks {
          display: grid;
          gap: 10px;
          margin: 0 0 26px;
          padding: 0;
          list-style: none;
        }

        #services .ps-checks li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #DCE4EF;
          font-size: 13px;
          line-height: 1.6;
        }

        #services .ps-checks svg {
          flex-shrink: 0;
          margin-top: 3px;
          color: #FB923C;
        }

        #services .ps-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 46px;
          padding: 14px 20px;
          border-radius: 11px;
          background: linear-gradient(110deg, #C2410C, #EA580C);
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
          text-decoration: none;
          transition: transform .25s ease, box-shadow .25s ease;
        }

        /* Desktop layered images */
        #services .ps-showcase {
          position: relative;
          width: 100%;
          aspect-ratio: 1;
          min-width: 0;
          perspective: 1000px;
        }

        #services .ps-showcase img {
          position: absolute;
          display: block;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 20px 22px #00000035);
          transition:
            transform .65s cubic-bezier(.2,.7,.2,1),
            filter .65s ease;
        }

        #services .ps-laptop {
          width: 94%;
          top: 2%;
          left: 0;
          z-index: 1;
        }

        #services .ps-tablet {
          width: 70%;
          right: -2%;
          bottom: 0;
          z-index: 2;
        }

        #services .ps-grid-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 24px;
          margin: 56px 0 24px;
        }

        #services .ps-grid-heading h3 {
          margin: 0;
          color: #142433;
          font-size: clamp(27px, 3vw, 38px);
          font-weight: 650;
          line-height: 1.15;
          letter-spacing: -.035em;
        }

        #services .ps-grid-heading p {
          max-width: 320px;
          margin: 0;
          color: #586575;
          font-size: 14px;
          line-height: 1.7;
        }

        /* Two columns on desktop AND mobile */
        #services .ps-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-items: stretch;
          gap: 20px;
        }

        #services .ps-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 28px;
          border: 1px solid #FFFFFF16;
          border-radius: 22px;
          background:
            radial-gradient(ellipse at 30% 0, #35598735, transparent 65%),
            linear-gradient(135deg, #192F4D, #12243D);
          color: #FFFFFF;
          scroll-margin-top: 110px;
          transition:
            transform .35s ease,
            box-shadow .35s ease,
            border-color .35s ease;
        }

        #services .ps-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 18px;
        }

        #services .ps-card-logo {
          display: block;
          width: 110px;
          height: 110px;
          max-width: 100%;
          object-fit: contain;
          background: transparent;
          filter: drop-shadow(0 8px 12px #00000030);
          transition: transform .5s cubic-bezier(.2,.7,.2,1);
        }

        #services .ps-number {
          padding-top: 8px;
          color: #95A9C3;
          font-family: monospace;
          font-size: 11px;
          letter-spacing: .1em;
        }

        #services .ps-card h4 {
          margin: 0 0 12px;
          color: #F5F7FA;
          font-size: clamp(23px, 2.2vw, 29px);
          font-weight: 650;
          line-height: 1.15;
          letter-spacing: -.025em;
          overflow-wrap: break-word;
        }

        #services .ps-card > p {
          margin: 0 0 20px;
          color: #C3CDDB;
          font-size: 14px;
          line-height: 1.75;
        }

        #services .ps-mobile-details {
          display: none;
        }

        #services .ps-card-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          min-height: 44px;
          margin-top: auto;
          padding-top: 16px;
          border-top: 1px solid #FFFFFF18;
          color: #FDBA74;
          font-size: 13px;
          font-weight: 650;
          text-decoration: none;
        }

        #services .ps-closing {
          display: grid;
          grid-template-columns: minmax(0, .8fr) minmax(0, 1.2fr);
          align-items: center;
          gap: 48px;
          margin-top: 56px;
          padding: 36px;
          border: 1px solid #14243315;
          border-radius: 24px;
          background: #E7EBEF;
        }

        #services .ps-closing-visual {
          margin: 0;
          min-width: 0;
          perspective: 1000px;
        }

        #services .ps-closing-visual img {
          display: block;
          width: 100%;
          max-width: 330px;
          max-height: 350px;
          margin-inline: auto;
          object-fit: contain;
          filter: drop-shadow(0 16px 22px #14243318);
          transition:
            transform .65s cubic-bezier(.2,.7,.2,1),
            filter .65s ease;
        }

        #services .ps-closing h3 {
          margin: 0 0 18px;
          color: #142433;
          font-size: clamp(28px, 3.3vw, 44px);
          font-weight: 650;
          line-height: 1.1;
          letter-spacing: -.035em;
        }

        #services .ps-closing-copy > p:not(.ps-eyebrow) {
          margin: 0 0 24px;
          color: #586575;
          font-size: 15px;
          line-height: 1.8;
        }

        /* Hover movement only on desktop with a mouse */
        @media (min-width: 901px) and (hover: hover) and (pointer: fine) {
          #services .ps-showcase:hover .ps-laptop {
            transform: translate(-10px, -14px) rotate(-2deg) scale(1.025);
            filter: drop-shadow(0 30px 30px #00000045);
          }

          #services .ps-showcase:hover .ps-tablet {
            transform: translate(10px, 8px) rotate(3deg) scale(1.045);
            filter: drop-shadow(0 26px 28px #00000045);
          }

          #services .ps-closing-visual:hover img {
            transform: translateY(-12px) rotateY(-7deg) rotateZ(-2deg) scale(1.035);
            filter: drop-shadow(0 28px 28px #14243330);
          }

          #services .ps-card:hover {
            transform: translateY(-5px);
            border-color: #86A9D355;
            box-shadow: 0 20px 36px #14243320;
          }

          #services .ps-card:hover .ps-card-logo {
            transform: translateY(-5px) rotate(-4deg) scale(1.08);
          }

          #services .ps-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 24px #EA580C30;
          }
        }

        #services a:focus-visible,
        #services button:focus-visible,
        #services summary:focus-visible {
          outline: 3px solid #EA580C;
          outline-offset: 4px;
        }

        @media (max-width: 1000px) {
          #services .ps-header {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          #services .ps-feature {
            padding: 32px;
          }
        }

        @media (max-width: 900px) {
          #services.plexura-services {
            padding: 60px 20px;
          }

          #services .ps-header {
            gap: 20px;
            margin-bottom: 24px;
          }

          #services .ps-title {
            font-size: clamp(36px, 6.5vw, 54px);
          }

          #services .ps-header-copy p {
            font-size: 14px;
            line-height: 1.7;
            margin-bottom: 14px;
          }

          #services .ps-mobile-showcase {
            position: relative;
            display: block;
            width: 100%;
            height: 320px;
            margin-top: 24px;
            overflow: hidden;
          }

          #services .ps-mobile-slide {
            position: absolute;
            inset: 0 0 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transform: translateX(34px) scale(.98);
            pointer-events: none;
            transition:
              opacity .65s ease,
              transform .65s cubic-bezier(.2,.7,.2,1);
          }

          #services .ps-mobile-slide.is-active {
            opacity: 1;
            transform: translateX(0) scale(1);
          }

          #services .ps-mobile-slide img {
            display: block;
            width: min(94%, 570px);
            height: 100%;
            object-fit: contain;
            filter: drop-shadow(0 12px 16px #14243320);
          }

          #services .ps-slide-controls {
            position: absolute;
            left: 50%;
            bottom: 0;
            display: flex;
            align-items: center;
            transform: translateX(-50%);
          }

          #services .ps-slide-dot {
            display: grid;
            place-items: center;
            width: 32px;
            height: 32px;
            padding: 0;
            border: 0;
            background: transparent;
            cursor: pointer;
          }

          #services .ps-slide-dot::before {
            content: '';
            width: 7px;
            height: 7px;
            border-radius: 999px;
            background: #14243330;
          }

          #services .ps-slide-dot.is-active::before {
            width: 24px;
            background: #EA580C;
          }

          #services .ps-slide-toggle {
            min-height: 32px;
            padding: 4px 8px;
            border: 0;
            background: transparent;
            color: #586575;
            font-size: 11px;
            cursor: pointer;
          }

          #services .ps-rail {
            gap: 8px;
            padding: 16px 0;
            margin-bottom: 24px;
          }

          #services .ps-rail a {
            padding: 8px 11px;
            font-size: 11px;
          }

          #services .ps-showcase {
            display: none;
          }

          #services .ps-feature {
            grid-template-columns: 1fr;
            gap: 0;
            padding: 26px;
            border-radius: 20px;
          }

          #services .ps-feature h3 {
            font-size: 30px;
            margin-bottom: 16px;
          }

          #services .ps-feature-text {
            font-size: 14px;
            line-height: 1.7;
          }

          #services .ps-grid-heading {
            display: block;
            margin: 34px 0 20px;
          }

          #services .ps-grid-heading h3 {
            font-size: 28px;
          }

          #services .ps-grid-heading p {
            max-width: none;
            margin-top: 10px;
            font-size: 13px;
          }

          #services .ps-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
          }

          #services .ps-card {
            padding: 20px 16px;
            border-radius: 17px;
          }

          #services .ps-card-top {
            margin-bottom: 14px;
          }

          #services .ps-card-logo {
            width: 88px;
            height: 88px;
          }

          #services .ps-card h4 {
            font-size: 21px;
          }

          #services .ps-card > p {
            font-size: 13px;
            line-height: 1.6;
            margin-bottom: 12px;
          }

          #services .ps-desktop-features {
            display: none;
          }

          #services .ps-mobile-details {
            display: block;
            margin-bottom: 12px;
          }

          #services .ps-mobile-details summary {
            min-height: 44px;
            padding: 12px 0;
            color: #DCE4EF;
            font-size: 12px;
            font-weight: 600;
            cursor: pointer;
          }

          #services .ps-mobile-details .ps-checks {
            margin: 8px 0 0;
          }

          #services .ps-mobile-details .ps-checks li {
            font-size: 12px;
          }

          #services .ps-card-link {
            font-size: 12px;
            padding-top: 12px;
          }

          #services .ps-closing {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-top: 30px;
            padding: 26px;
            border-radius: 20px;
          }

          #services .ps-closing-visual img {
            max-width: 260px;
            max-height: 280px;
          }

          #services .ps-closing h3 {
            font-size: 28px;
          }

          #services .ps-closing-copy > p:not(.ps-eyebrow) {
            font-size: 14px;
            line-height: 1.7;
          }
        }

        @media (max-width: 620px) {
          #services.plexura-services {
            padding: 44px 16px;
          }

          #services .ps-eyebrow {
            font-size: 10px;
            letter-spacing: .12em;
            margin-bottom: 14px;
          }

          #services .ps-title {
            font-size: clamp(34px, 8.7vw, 46px);
          }

          #services .ps-mobile-showcase {
            height: 265px;
          }

          #services .ps-mobile-slide img {
            width: 100%;
          }

          #services .ps-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          #services .ps-card {
            padding: 16px 12px;
            border-radius: 15px;
          }

          #services .ps-card-top {
            position: relative;
            justify-content: center;
          }

          #services .ps-number {
            position: absolute;
            top: 0;
            right: 0;
            padding-top: 0;
            font-size: 9px;
          }

          #services .ps-card-logo {
            width: 80px;
            height: 80px;
          }

          #services .ps-card h4 {
            font-size: clamp(16px, 4.2vw, 20px);
            line-height: 1.18;
            letter-spacing: -.02em;
          }

          #services .ps-card > p {
            font-size: 12px;
            line-height: 1.6;
          }

          #services .ps-mobile-details summary {
            font-size: 11px;
          }

          #services .ps-card-link {
            font-size: 12px;
          }

          #services .ps-feature {
            padding: 24px 20px;
          }

          #services .ps-feature h3 {
            font-size: 27px;
          }

          #services .ps-text-link {
            font-size: 13px;
          }
        }

        @media (max-width: 430px) {
          #services .ps-mobile-showcase {
            height: 235px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #services .ps-showcase img,
          #services .ps-closing-visual img,
          #services .ps-card,
          #services .ps-card-logo,
          #services .ps-button,
          #services .ps-mobile-slide {
            transition: none;
          }

          #services .ps-showcase:hover img,
          #services .ps-closing-visual:hover img,
          #services .ps-card:hover,
          #services .ps-card:hover .ps-card-logo,
          #services .ps-button:hover {
            transform: none;
          }
        }
          /* Desktop: 3 equal cards, then 2 centered cards */
#services .ps-grid {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  grid-auto-rows: 1fr;
  align-items: stretch;
  gap: 20px;
}

#services .ps-grid > .ps-card {
  grid-column: auto / span 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 0;
  max-width: none;
  height: 100%;
  margin: 0;
  box-sizing: border-box;
}

#services .ps-grid > .ps-card:nth-child(4) {
  grid-column: 2 / span 2;
}

#services .ps-grid > .ps-card:nth-child(5) {
  grid-column: 4 / span 2;
}

/* Keep every logo area the same height */
#services .ps-card-top {
  height: 110px;
  flex-shrink: 0;
}

#services .ps-card-link {
  margin-top: auto;
}

/* Remove card numbers */
#services .ps-number {
  display: none;
}

/* Mobile/tablet: 2 equal cards, then 1 centered card */
@media (max-width: 900px) {
  #services .ps-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-auto-rows: 1fr;
    gap: 12px;
  }

  #services .ps-grid > .ps-card,
  #services .ps-grid > .ps-card:nth-child(4) {
    grid-column: auto / span 2;
  }

  #services .ps-grid > .ps-card:nth-child(5) {
    grid-column: 2 / span 2;
  }

  #services .ps-card-top {
    height: 88px;
  }
}

@media (max-width: 620px) {
  #services .ps-grid {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 10px;
  }

  #services .ps-card-top {
    height: 80px;
  }
}
 @media (max-width: 900px) {
  #services.plexura-services .ps-mobile-showcase .ps-mobile-slide {
    opacity: 0 !important;
    transform: none !important;
    animation: none !important;
    transition: opacity 1200ms ease-in-out !important;
    will-change: opacity;
  }

  #services.plexura-services
    .ps-mobile-showcase
    .ps-mobile-slide.is-active {
    opacity: 1 !important;
    transform: none !important;
  }
}

@media (prefers-reduced-motion: reduce) {
  #services.plexura-services .ps-mobile-showcase .ps-mobile-slide {
    transition: none !important;
  }
}
  @media (max-width: 620px) {
  #services .ps-grid {
    grid-auto-rows: auto;
    align-items: start;
  }

  #services .ps-grid > .ps-card {
    aspect-ratio: 1 / 1;
    height: auto;
    padding: 12px;
    border-radius: 12px;
  }

  #services .ps-card-top {
    height: 52px;
    margin-bottom: 8px;
    justify-content: center;
  }

  #services .ps-card-logo {
    width: 52px;
    height: 52px;
  }

  #services .ps-card h4 {
    margin-bottom: 8px;
    font-size: clamp(14px, 3.6vw, 18px);
    line-height: 1.15;
    text-align: center;
  }

  #services .ps-card > p {
    display: none;
  }

  #services .ps-mobile-details {
    margin-top: auto;
    margin-bottom: 0;
  }

  #services .ps-mobile-details summary {
    min-height: 32px;
    padding: 8px 0;
    font-size: 11px;
    text-align: center;
  }

  #services .ps-card:has(.ps-mobile-details[open]) {
    aspect-ratio: auto;
  }
}
  /* Clickable service logo */
#services .ps-logo-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  max-width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  border-radius: 12px;
  background: transparent;
  box-shadow: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
}

#services .ps-logo-button:focus-visible {
  outline: 2px solid #FDBA74;
  outline-offset: 4px;
}

/* Brief blue glow and gentle lift */
@keyframes ps-logo-tap {
  0%, 100% {
    transform: translateY(0) scale(1);
    filter: drop-shadow(0 8px 12px #00000030);
  }

  45% {
    transform: translateY(-4px) scale(1.05);
    filter:
      drop-shadow(0 0 10px #7DB5F080)
      drop-shadow(0 0 20px #5595DF50);
  }
}

#services .ps-card .ps-card-logo.ps-logo-clicked {
  animation: ps-logo-tap 650ms ease-in-out !important;
}

/* Respect reduced-motion settings */
@media (prefers-reduced-motion: reduce) {
  #services .ps-card .ps-card-logo.ps-logo-clicked {
    animation: none !important;
  }

  #services .ps-logo-button:active .ps-card-logo {
    filter: drop-shadow(0 0 10px #7DB5F080);
  }
}
      `}</style>

      <div className="ps-inner">
        <div className="ps-header">
          <div>
            <p className="ps-eyebrow">
              IT Consulting · Infrastructure · Digital Services
            </p>

            <h2 className="ps-title" id="plexura-services-title">
              Technology built for
              <span>your entire business.</span>
            </h2>

            <div
              className="ps-mobile-showcase"
              aria-label="Plexura showcase"
              aria-roledescription="carousel"
            >
              {showcaseSlides.map((slide, index) => (
                <div
                  key={slide.src}
                  className={`ps-mobile-slide ${
                    activeSlide === index ? 'is-active' : ''
                  }`}
                  aria-hidden={activeSlide !== index}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    loading="eager"
                    decoding="async"
                  />
                </div>
              ))}

              <div className="ps-slide-controls">
                {showcaseSlides.map((slide, index) => (
                  <button
                    key={slide.src}
                    type="button"
                    className={`ps-slide-dot ${
                      activeSlide === index ? 'is-active' : ''
                    }`}
                    aria-label={`Show image ${index + 1}`}
                    aria-pressed={activeSlide === index}
                    onClick={() => {
                      setActiveSlide(index);
                      setPaused(true);
                    }}
                  />
                ))}

              </div>
            </div>
          </div>

          <div className="ps-header-copy">
            <p>
              From infrastructure and networks to cloud platforms, AI,
              and custom websites, Plexura helps you plan, implement,
              and connect the technology your business relies on.
            </p>

            <a className="ps-text-link" href="#contact">
              Talk through your technology needs
              <ArrowUpRight size={18} aria-hidden="true" />
            </a>
          </div>
        </div>

        <nav className="ps-rail" aria-label="Explore our services">
          {services.map((service) => (
            <a href={`#${service.id}`} key={service.id}>
              {service.title}
            </a>
          ))}
        </nav>

        <div className="ps-feature">
          <div className="ps-feature-copy">
            <p className="ps-eyebrow">Consult. Configure. Connect.</p>

            <h3>
              A stronger foundation.
              <br />
              A better way to work.
            </h3>

            <p className="ps-feature-text">
              We help you select the right tools, configure them
              properly, and bring your devices, systems, and digital
              experiences together.
            </p>

            <FeatureList
              features={[
                'Guidance tailored to your business',
                'Hardware, software, and network setup',
                'Practical cloud and AI integrations',
                'Websites connected to your business tools',
              ]}
            />

            <a className="ps-button" href="#contact">
              Discuss your project
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>

          <div className="ps-showcase">
            <img
              className="ps-laptop"
              src={showcaseSlides[0].src}
              alt={showcaseSlides[0].alt}
              loading="eager"
              decoding="async"
            />

            <img
              className="ps-tablet"
              src={showcaseSlides[1].src}
              alt={showcaseSlides[1].alt}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>

        <div className="ps-grid-heading">
          <h3>Expertise across your technology.</h3>
          <p>
            Focused help for a single project or coordinated
            implementation across your business.
          </p>
        </div>

        <div className="ps-grid">
          {services.map((service) => (
            <article
  className="ps-card"
  id={service.id}
  key={service.id}
  onClick={(event) => {
    setActiveLogo(service.id);

    // The arrow already toggles the details itself.
    // Let links and buttons keep their normal behavior.
    if (event.target.closest('summary, a, button')) return;

    const details = event.currentTarget.querySelector(
      '.ps-mobile-details'
    );

    if (details && window.matchMedia('(max-width: 900px)').matches) {
      details.open = !details.open;
    }
  }}
>
             <div className="ps-card-top">
  <button
    type="button"
    className="ps-logo-button"
    aria-label={`Animate ${service.title} logo`}
    onClick={() => setActiveLogo(service.id)}
  >
    <img
      className={`ps-card-logo ${
        activeLogo === service.id ? 'ps-logo-clicked' : ''
      }`}
      src={service.logo}
      alt=""
      width="110"
      height="110"
      loading="lazy"
      decoding="async"
      draggable={false}
      onAnimationEnd={() => {
        setActiveLogo((current) =>
          current === service.id ? null : current
        );
      }}
    />
  </button>
</div>

              <h4>{service.title}</h4>
              <p>{service.description}</p>

              <div className="ps-desktop-features">
                <FeatureList features={service.features} />
              </div>

              <details className="ps-mobile-details">
                <summary>What’s included</summary>
                <FeatureList features={service.features} />
              </details>

              
            </article>
          ))}
        </div>

        {/* Phone/dashboard image stays in this closing section. */}
        <div className="ps-closing">
          <figure className="ps-closing-visual">
            <img
              src="/phone-dash.png"
              alt="Plexura mobile website and analytics dashboard concept"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="ps-closing-copy">
            <p className="ps-eyebrow">Your next step</p>

            <h3>Tell us what needs to work better.</h3>

            <p>
              Setting up an office, updating your network, moving to
              the cloud, or building a website? Let’s start with
              your priorities.
            </p>

            <a className="ps-button" href="#contact">
              Talk to Plexura
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}