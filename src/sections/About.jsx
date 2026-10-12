import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const processSteps = [
  {
    title: 'Understand',
    description:
      'We learn how you work, review your current setup, and identify what needs to improve.',
    outcome: 'Clear priorities',
  },
  {
    title: 'Plan',
    description:
      'We recommend the right tools and define the scope, requirements, and implementation steps.',
    outcome: 'A practical roadmap',
  },
  {
    title: 'Implement',
    description:
      'We configure, integrate, and test your solution against the agreed requirements.',
    outcome: 'A tested setup',
  },
  {
    title: 'Hand Over',
    description:
      'We explain your setup, document key details, and walk your team through the next steps.',
    outcome: 'Confidence moving forward',
  },
];

export default function About() {
  const reducedMotion = useReducedMotion();

  const reveal = {
    initial: { opacity: 0, y: reducedMotion ? 0 : 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: reducedMotion ? 0 : 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  };

  return (
    <section
      id="about"
      className="plexura-about"
      aria-labelledby="pa-title"
    >
      <style>{`
        #about.plexura-about {
          position: relative;
          padding: 88px 24px;
          background: #F2F1ED;
          color: #142433;
          isolation: isolate;
          scroll-margin-top: 100px;
        }

        #about.plexura-about,
        #about.plexura-about * {
          box-sizing: border-box;
        }

        #about .pa-inner {
          width: 100%;
          max-width: 1280px;
          margin-inline: auto;
        }

        #about .pa-eyebrow {
          margin: 0 0 16px;
          color: #B8440A;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.6;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        #about .pa-heading {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(0, .8fr);
          align-items: end;
          gap: 48px;
          margin-bottom: 36px;
        }

        #about .pa-heading h2 {
          margin: 0;
          color: #142433;
          font-size: clamp(36px, 4.4vw, 60px);
          font-weight: 700;
          line-height: 1.06;
          letter-spacing: -.045em;
        }

        #about .pa-heading h2 span {
          display: block;
          color: #355987;
        }

        #about .pa-heading-copy {
          max-width: 470px;
          margin: 0;
          color: #586575;
          font-size: 16px;
          line-height: 1.8;
        }

        /* Image and company introduction */
        #about .pa-feature {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, .85fr);
          overflow: hidden;
          border: 1px solid #14243312;
          border-radius: 24px;
          background: #12243D;
          box-shadow: 0 20px 48px #14243312;
        }

        #about .pa-image {
          position: relative;
          min-width: 0;
          min-height: 440px;
          margin: 0;
          overflow: hidden;
          background: #101D31;
        }

        #about .pa-image img {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transition: transform 850ms cubic-bezier(.22, 1, .36, 1);
        }

        #about .pa-image::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: linear-gradient(
            180deg,
            transparent 55%,
            #08132145 100%
          );
        }

        #about .pa-intro {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
          padding: 44px;
          background:
            radial-gradient(
              ellipse at 100% 0,
              #35598755,
              transparent 65%
            ),
            linear-gradient(135deg, #192F4D, #101D31);
        }

        #about .pa-intro .pa-eyebrow {
          color: #FDBA74;
        }

        #about .pa-intro h3 {
          margin: 0 0 22px;
          color: #F5F7FA;
          font-size: clamp(27px, 2.8vw, 38px);
          font-weight: 650;
          line-height: 1.13;
          letter-spacing: -.035em;
        }

        #about .pa-intro > p:not(.pa-eyebrow) {
          margin: 0 0 18px;
          color: #C3CDDB;
          font-size: 15px;
          line-height: 1.8;
        }

        #about .pa-intro-note {
          margin-top: 8px;
          padding-top: 22px;
          border-top: 1px solid #FFFFFF20;
          color: #F5F7FA;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.7;
        }

        #about .pa-intro-note span {
          color: #FDBA74;
        }

        /* Process: one connected panel */
        #about .pa-process {
          margin-top: 56px;
        }

        #about .pa-process-heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 26px;
        }

        #about .pa-process-heading h3 {
          margin: 0;
          color: #142433;
          font-size: clamp(28px, 3vw, 38px);
          font-weight: 650;
          line-height: 1.12;
          letter-spacing: -.035em;
        }

        #about .pa-process-heading > p {
          max-width: 360px;
          margin: 0;
          color: #586575;
          font-size: 14px;
          line-height: 1.75;
        }

        #about .pa-steps {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          padding: 0;
          margin: 0;
          overflow: hidden;
          list-style: none;
          border: 1px solid #14243318;
          border-radius: 20px;
          background: #E9EDF0;
        }

        #about .pa-step {
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 30px 26px;
        }

        #about .pa-step + .pa-step {
          border-left: 1px solid #14243318;
        }

        #about .pa-step-marker {
          width: 28px;
          height: 3px;
          margin-bottom: 24px;
          border-radius: 2px;
          background: #EA580C;
        }

        #about .pa-step h4 {
          margin: 0 0 12px;
          color: #243F61;
          font-size: 22px;
          font-weight: 650;
          line-height: 1.2;
          letter-spacing: -.025em;
        }

        #about .pa-step p {
          margin: 0 0 24px;
          color: #586575;
          font-size: 14px;
          line-height: 1.75;
        }

        #about .pa-step-outcome {
          display: block;
          margin-top: auto;
          color: #355987;
          font-size: 12px;
          font-weight: 650;
          line-height: 1.6;
        }

        #about .pa-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          margin-top: 30px;
        }

        #about .pa-footer p {
          margin: 0;
          color: #586575;
          font-size: 14px;
          line-height: 1.7;
        }

        #about .pa-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          gap: 10px;
          min-height: 48px;
          padding: 14px 22px;
          border-radius: 11px;
          background: linear-gradient(110deg, #C2410C, #EA580C);
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.4;
          text-decoration: none;
          transition: transform 250ms ease, box-shadow 250ms ease;
        }

        #about .pa-button svg {
          flex-shrink: 0;
        }

        #about .pa-button:focus-visible {
          outline: 3px solid #EA580C;
          outline-offset: 5px;
        }

        @media (min-width: 901px) and (hover: hover) and (pointer: fine) {
          #about .pa-image:hover img {
            transform: scale(1.045);
          }

          #about .pa-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 24px #EA580C25;
          }
        }

        @media (max-width: 1100px) {
          #about .pa-intro {
            padding: 32px;
          }

          #about .pa-step {
            padding: 26px 20px;
          }
        }

        @media (max-width: 900px) {
          #about.plexura-about {
            padding: 64px 20px;
          }

          #about .pa-heading {
            grid-template-columns: 1fr;
            gap: 20px;
            margin-bottom: 28px;
          }

          #about .pa-heading-copy {
            max-width: 680px;
            font-size: 15px;
          }

          #about .pa-feature {
            grid-template-columns: 1fr;
          }

          #about .pa-image {
            min-height: 0;
            aspect-ratio: 3 / 2;
          }

          #about .pa-intro {
            padding: 32px;
          }

          #about .pa-process {
            margin-top: 40px;
          }

          #about .pa-process-heading {
            flex-direction: column;
            align-items: flex-start;
            gap: 14px;
          }

          #about .pa-process-heading > p {
            max-width: 600px;
          }

          #about .pa-steps {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          #about .pa-step + .pa-step {
            border-left: 0;
          }

          #about .pa-step:nth-child(even) {
            border-left: 1px solid #14243318;
          }

          #about .pa-step:nth-child(n + 3) {
            border-top: 1px solid #14243318;
          }
        }

        @media (max-width: 620px) {
          #about.plexura-about {
            padding: 48px 16px;
          }

          #about .pa-eyebrow {
            margin-bottom: 12px;
            font-size: 10px;
            letter-spacing: .13em;
          }

          #about .pa-heading h2 {
            font-size: clamp(33px, 8.5vw, 46px);
          }

          #about .pa-heading-copy {
            font-size: 14px;
            line-height: 1.75;
          }

          #about .pa-feature {
            border-radius: 18px;
          }

          #about .pa-intro {
            padding: 26px 20px;
          }

          #about .pa-intro h3 {
            margin-bottom: 18px;
            font-size: 28px;
          }

          #about .pa-intro > p:not(.pa-eyebrow) {
            font-size: 14px;
            line-height: 1.75;
          }

          #about .pa-intro-note {
            padding-top: 18px;
            font-size: 13px;
          }

          #about .pa-process {
            margin-top: 34px;
          }

          #about .pa-process-heading {
            margin-bottom: 20px;
          }

          #about .pa-process-heading h3 {
            font-size: 28px;
          }

          #about .pa-process-heading > p {
            font-size: 13px;
          }

          #about .pa-steps {
            border-radius: 16px;
          }

          #about .pa-step {
            padding: 22px 15px;
          }

          #about .pa-step-marker {
            width: 22px;
            margin-bottom: 18px;
          }

          #about .pa-step h4 {
            font-size: 19px;
            overflow-wrap: break-word;
          }

          #about .pa-step p {
            margin-bottom: 18px;
            font-size: 12px;
            line-height: 1.7;
          }

          #about .pa-step-outcome {
            font-size: 11px;
          }

          #about .pa-footer {
            flex-direction: column;
            align-items: stretch;
            gap: 18px;
            margin-top: 24px;
          }

          #about .pa-footer p {
            font-size: 13px;
          }

          #about .pa-button {
            width: 100%;
            font-size: 13px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #about .pa-image img,
          #about .pa-button {
            transition: none;
          }

          #about .pa-image:hover img,
          #about .pa-button:hover {
            transform: none;
          }
        }
      `}</style>

      <div className="pa-inner">
        <motion.header className="pa-heading" {...reveal}>
          <div>
            <p className="pa-eyebrow">About Plexura · Our Approach</p>

            <h2 id="pa-title">
              Thoughtful Planning.
              <span>Practical Implementation.</span>
            </h2>
          </div>

          <p className="pa-heading-copy">
            We help businesses make confident technology decisions
            and put them into practice—with clear guidance, defined
            priorities, and attention to how everything works together.
          </p>
        </motion.header>

        <motion.div className="pa-feature" {...reveal}>
          <figure className="pa-image">
            <img
              src="/process.png"
              alt="Technology planning workspace with network diagrams, infrastructure equipment, and a handwritten implementation plan."
              width="1536"
              height="1024"
              loading="lazy"
              decoding="async"
            />
          </figure>

          <div className="pa-intro">
            <p className="pa-eyebrow">Built Around Your Business</p>

            <h3>
              Good technology starts with understanding your work.
            </h3>

            <p>
              Plexura brings together IT consulting and digital
              development to help you improve the systems behind
              your business and the experiences your customers see.
            </p>

            <p>
              From a workstation setup to a connected business
              environment, we consider your existing tools, your
              team’s needs, and your next stage of growth before
              recommending a solution.
            </p>

            <div className="pa-intro-note">
              <span>Our focus:</span> sensible recommendations,
              careful implementation, and a clear handover.
            </div>
          </div>
        </motion.div>

        <div className="pa-process">
          <motion.div className="pa-process-heading" {...reveal}>
            <div>
              <p className="pa-eyebrow">How We Work</p>
              <h3>A clear path from planning to delivery.</h3>
            </div>

            <p>
              Each project follows a practical process, with the
              scope and next steps explained along the way.
            </p>
          </motion.div>

          <ol className="pa-steps">
            {processSteps.map((step) => (
              <motion.li
                className="pa-step"
                key={step.title}
                {...reveal}
              >
                <span className="pa-step-marker" aria-hidden="true" />

                <h4>{step.title}</h4>
                <p>{step.description}</p>

                <span className="pa-step-outcome">
                  {step.outcome}
                </span>
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.div className="pa-footer" {...reveal}>
          <p>
            Have a project in mind? Let’s start with what you need
            to work better.
          </p>

          <a className="pa-button" href="#contact">
            Discuss your project
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}