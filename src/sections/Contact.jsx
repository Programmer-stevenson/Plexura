import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  Send,
  ChevronDown,
  ArrowUpRight,
} from 'lucide-react';
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from 'framer-motion';

const WEB3FORMS_ACCESS_KEY = '266a1737-79be-415a-9594-6d5a97a36efa';

const serviceOptions = [
  'IT Consulting',
  'IT Infrastructure',
  'Workstation & Home Office Setup',
  'Network Setup',
  'POS System Setup',
  'Cloud Consulting & Solutions',
  'AI Consulting & Integrations',
  'Web Design & Development',
  'Not Sure Yet',
];

const contactDetails = [
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
  },
];

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const submittingRef = useRef(false);
  const reducedMotion = useReducedMotion();

  const reveal = {
    initial: { opacity: 0, y: reducedMotion ? 0 : 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: reducedMotion ? 0 : 0.55 },
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (submittingRef.current) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('subject', 'New inquiry from the Plexura website');
    formData.append('from_name', 'Plexura Website');

    submittingRef.current = true;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        form.reset();
        setFormSubmitted(true);
      } else {
        setSubmitError(
          data.message || 'Something went wrong. Please try again.'
        );
      }
    } catch {
      setSubmitError(
        'Unable to send your message. Please check your connection and try again.'
      );
    } finally {
      submittingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="plexura-contact"
      aria-labelledby="pc-title"
    >
      <style>{`
        #contact.plexura-contact {
          position: relative;
          padding: 88px 24px;
          background: #E9EDF0;
          color: #142433;
          isolation: isolate;
          scroll-margin-top: 100px;
        }

        #contact.plexura-contact,
        #contact.plexura-contact * {
          box-sizing: border-box;
        }

        #contact .pc-inner {
          width: 100%;
          max-width: 1280px;
          margin-inline: auto;
        }

        #contact .pc-eyebrow {
          margin: 0 0 16px;
          color: #B8440A;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.6;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        #contact .pc-header {
          margin-bottom: 42px;
        }

        #contact .pc-header h2 {
          margin: 0;
          color: #142433;
          font-size: clamp(38px, 4.8vw, 66px);
          font-weight: 700;
          line-height: 1.04;
          letter-spacing: -.045em;
        }

        #contact .pc-header h2 span {
          display: block;
          color: #355987;
        }

        #contact .pc-layout {
          display: grid;
          grid-template-columns: minmax(0, .85fr) minmax(0, 1.15fr);
          align-items: start;
          gap: 56px;
        }

        #contact .pc-info,
        #contact .pc-form-panel {
          min-width: 0;
        }

        #contact .pc-intro {
          max-width: 460px;
          margin: 0 0 32px;
          color: #586575;
          font-size: 16px;
          line-height: 1.85;
        }

        #contact .pc-channels {
          margin: 0;
          padding: 0;
          border-top: 1px solid #14243320;
          list-style: none;
        }

        #contact .pc-channel {
          border-bottom: 1px solid #14243320;
        }

        #contact .pc-channel a,
        #contact .pc-channel-static {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 23px 0;
          text-decoration: none;
        }

        #contact .pc-channel-text {
          min-width: 0;
        }

        #contact .pc-channel-label {
          display: block;
          margin-bottom: 7px;
          color: #B8440A;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        #contact .pc-channel-value {
          display: block;
          color: #243F61;
          font-size: clamp(17px, 1.8vw, 23px);
          font-weight: 600;
          line-height: 1.45;
          letter-spacing: -.02em;
          overflow-wrap: anywhere;
          transition: color 200ms ease;
        }

        #contact .pc-channel-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 42px;
          height: 42px;
          border: 1px solid #14243325;
          border-radius: 50%;
          color: #355987;
          transition:
            background-color 200ms ease,
            color 200ms ease,
            border-color 200ms ease;
        }

        #contact .pc-channel a:hover .pc-channel-value {
          color: #B8440A;
        }

        #contact .pc-channel a:hover .pc-channel-arrow {
          border-color: #C2410C;
          background: #C2410C;
          color: #FFFFFF;
        }

        #contact .pc-next {
          margin-top: 28px;
          padding: 24px;
          border: 1px solid #14243312;
          border-radius: 18px;
          background: #F2F1ED;
        }

        #contact .pc-next h3 {
          margin: 0 0 10px;
          color: #243F61;
          font-size: 18px;
          font-weight: 650;
          line-height: 1.3;
        }

        #contact .pc-next p {
          margin: 0;
          color: #586575;
          font-size: 14px;
          line-height: 1.75;
        }

        /* Midnight-blue form */
        #contact .pc-form-panel {
          padding: 36px;
          border: 1px solid #FFFFFF18;
          border-radius: 24px;
          background:
            radial-gradient(
              ellipse at 100% 0,
              #35598760,
              transparent 65%
            ),
            linear-gradient(135deg, #192F4D, #101D31);
          box-shadow: 0 24px 50px #14243318;
          color: #F5F7FA;
        }

        #contact .pc-form-heading {
          margin-bottom: 28px;
        }

        #contact .pc-form-heading h3 {
          margin: 0 0 10px;
          color: #F5F7FA;
          font-size: clamp(25px, 2.6vw, 32px);
          font-weight: 650;
          line-height: 1.15;
          letter-spacing: -.03em;
        }

        #contact .pc-form-heading p {
          margin: 0;
          color: #C3CDDB;
          font-size: 14px;
          line-height: 1.7;
        }

        #contact .pc-form-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px 18px;
        }

        #contact .pc-field {
          min-width: 0;
        }

        #contact .pc-field-full {
          grid-column: 1 / -1;
        }

        #contact .pc-label {
          display: block;
          margin-bottom: 9px;
          color: #E1E8F0;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.5;
        }

        #contact .pc-required {
          color: #FDBA74;
        }

        #contact .pc-input {
          display: block;
          width: 100%;
          min-width: 0;
          min-height: 50px;
          padding: 13px 14px;
          border: 1px solid #FFFFFF25;
          border-radius: 10px;
          background: #0B182B75;
          color: #F5F7FA;
          font-family: inherit;
          font-size: 16px;
          line-height: 1.5;
          box-shadow: none;
          transition:
            border-color 200ms ease,
            background-color 200ms ease,
            box-shadow 200ms ease;
        }

        #contact .pc-input::placeholder {
          color: #9CAFC5;
          opacity: 1;
        }

        #contact .pc-input:focus {
          outline: none;
          border-color: #FDBA74;
          background: #0B182B;
          box-shadow: 0 0 0 3px #FDBA741A;
        }

        #contact .pc-input:disabled {
          opacity: .6;
          cursor: not-allowed;
        }

        #contact textarea.pc-input {
          min-height: 140px;
          resize: vertical;
        }

        #contact .pc-select-wrap {
          position: relative;
        }

        #contact select.pc-input {
          appearance: none;
          padding-right: 40px;
          cursor: pointer;
        }

        #contact select.pc-input option {
          background: #12243D;
          color: #F5F7FA;
        }

        #contact .pc-chevron {
          position: absolute;
          top: 50%;
          right: 13px;
          transform: translateY(-50%);
          color: #FDBA74;
          pointer-events: none;
        }

        #contact .pc-terms {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-top: 24px;
        }

        #contact .pc-terms input {
          flex-shrink: 0;
          width: 18px;
          height: 18px;
          margin: 3px 0 0;
          accent-color: #EA580C;
          cursor: pointer;
        }

        #contact .pc-terms label {
          color: #C3CDDB;
          font-size: 13px;
          line-height: 1.7;
        }

        #contact .pc-terms a {
          color: #FDBA74;
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        #contact .pc-submit-row {
          margin-top: 26px;
        }

        #contact .pc-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 50px;
          padding: 14px 24px;
          border: 0;
          border-radius: 11px;
          background: linear-gradient(110deg, #C2410C, #EA580C);
          color: #FFFFFF;
          font-family: inherit;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.5;
          cursor: pointer;
          transition: transform 200ms ease, box-shadow 200ms ease;
        }

        #contact .pc-button:disabled {
          opacity: .65;
          cursor: not-allowed;
        }

        #contact .pc-button svg {
          flex-shrink: 0;
        }

        #contact .pc-error {
          margin-bottom: 22px;
          padding: 14px 16px;
          border: 1px solid #FCA5A555;
          border-radius: 10px;
          background: #7F1D1D40;
          color: #FECACA;
          font-size: 14px;
          line-height: 1.6;
        }

        #contact .pc-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 430px;
          text-align: center;
        }

        #contact .pc-success-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 70px;
          height: 70px;
          margin-bottom: 24px;
          border: 1px solid #FDBA7455;
          border-radius: 50%;
          background: #EA580C18;
          color: #FDBA74;
        }

        #contact .pc-success h3 {
          margin: 0 0 12px;
          color: #F5F7FA;
          font-size: 30px;
          font-weight: 650;
          line-height: 1.2;
          letter-spacing: -.03em;
        }

        #contact .pc-success p {
          max-width: 360px;
          margin: 0 0 28px;
          color: #C3CDDB;
          font-size: 15px;
          line-height: 1.8;
        }

        #contact a:focus-visible,
        #contact button:focus-visible,
        #contact input[type="checkbox"]:focus-visible {
          outline: 3px solid #EA580C;
          outline-offset: 4px;
        }

        @media (hover: hover) and (pointer: fine) {
          #contact .pc-button:hover:not(:disabled) {
            transform: translateY(-2px);
            box-shadow: 0 10px 24px #EA580C30;
          }
        }

        @media (max-width: 1100px) {
          #contact .pc-layout {
            gap: 32px;
          }

          #contact .pc-form-panel {
            padding: 28px;
          }
        }

        @media (max-width: 900px) {
          #contact.plexura-contact {
            padding: 64px 20px;
          }

          #contact .pc-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          #contact .pc-header {
            margin-bottom: 28px;
          }

          #contact .pc-intro {
            max-width: 680px;
            margin-bottom: 24px;
          }

          #contact .pc-channel-value {
            font-size: 21px;
          }

          #contact .pc-success {
            min-height: 340px;
          }
        }

        @media (max-width: 620px) {
          #contact.plexura-contact {
            padding: 48px 16px;
          }

          #contact .pc-eyebrow {
            margin-bottom: 12px;
            font-size: 10px;
          }

          #contact .pc-header h2 {
            font-size: clamp(34px, 9vw, 48px);
          }

          #contact .pc-intro {
            font-size: 14px;
            line-height: 1.75;
          }

          #contact .pc-channel a,
          #contact .pc-channel-static {
            padding: 19px 0;
          }

          #contact .pc-channel-value {
            font-size: 18px;
          }

          #contact .pc-channel-arrow {
            width: 38px;
            height: 38px;
          }

          #contact .pc-next {
            margin-top: 22px;
            padding: 20px;
            border-radius: 15px;
          }

          #contact .pc-next p {
            font-size: 13px;
          }

          #contact .pc-form-panel {
            padding: 26px 20px;
            border-radius: 18px;
          }

          #contact .pc-form-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          #contact .pc-form-heading h3 {
            font-size: 27px;
          }

          #contact .pc-form-heading p {
            font-size: 13px;
          }

          #contact .pc-button {
            width: 100%;
          }

          #contact .pc-terms label {
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #contact .pc-input,
          #contact .pc-button,
          #contact .pc-channel-arrow,
          #contact .pc-channel-value {
            transition: none;
          }

          #contact .pc-button:hover:not(:disabled) {
            transform: none;
          }
        }
      `}</style>

      <div className="pc-inner">
        <motion.header className="pc-header" {...reveal}>
          <p className="pc-eyebrow">Contact Plexura</p>

          <h2 id="pc-title">
            Let’s Talk Tech
            <span>And What’s Next For You.</span>
          </h2>
        </motion.header>

        <div className="pc-layout">
          <motion.div className="pc-info" {...reveal}>
            <p className="pc-intro">
              Planning an office setup, improving your network,
              exploring cloud or AI solutions, or building a website?
              Tell us what you need help with and we’ll discuss the
              next steps.
            </p>

            <ul className="pc-channels">
              {contactDetails.map((item) => (
                <li className="pc-channel" key={item.label}>
                  {item.href ? (
                    <a href={item.href}>
                      <span className="pc-channel-text">
                        <span className="pc-channel-label">
                          {item.label}
                        </span>
                        <span className="pc-channel-value">
                          {item.value}
                        </span>
                      </span>

                      <span className="pc-channel-arrow">
                        <ArrowUpRight size={18} aria-hidden="true" />
                      </span>
                    </a>
                  ) : (
                    <div className="pc-channel-static">
                      <span className="pc-channel-text">
                        <span className="pc-channel-label">
                          {item.label}
                        </span>
                        <span className="pc-channel-value">
                          {item.value}
                        </span>
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="pc-next">
              <h3>Not sure where to start?</h3>
              <p>
                Describe your current setup and what you want to
                improve. We’ll review your inquiry and follow up to
                discuss your priorities, scope, and timing.
              </p>
            </div>
          </motion.div>

          <motion.div className="pc-form-panel" {...reveal}>
            <AnimatePresence mode="wait" initial={false}>
              {formSubmitted ? (
                <motion.div
                  key="success"
                  className="pc-success"
                  role="status"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: reducedMotion ? 0 : 0.3 }}
                >
                  <div className="pc-success-icon">
                    <Check size={32} aria-hidden="true" />
                  </div>

                  <h3>Message received.</h3>
                  <p>
                    Thank you for contacting Plexura. We’ll review
                    your inquiry and get back to you to discuss
                    the next steps.
                  </p>

                  <button
                    type="button"
                    className="pc-button"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleFormSubmit}
                  aria-busy={isSubmitting}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.2 }}
                >
                  <div className="pc-form-heading">
                    <h3>Tell us about your project.</h3>
                    <p>
                      Share a few details to help us understand
                      what you need. Fields marked * are required.
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    name="botcheck"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {submitError && (
                    <div className="pc-error" role="alert">
                      {submitError}
                    </div>
                  )}

                  <div className="pc-form-grid">
                    <div className="pc-field">
                      <label className="pc-label" htmlFor="pc-name">
                        Full name <span className="pc-required">*</span>
                      </label>
                      <input
                        id="pc-name"
                        className="pc-input"
                        type="text"
                        name="name"
                        autoComplete="name"
                        placeholder="Your full name"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="pc-field">
                      <label className="pc-label" htmlFor="pc-email">
                        Email address <span className="pc-required">*</span>
                      </label>
                      <input
                        id="pc-email"
                        className="pc-input"
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="pc-field">
                      <label className="pc-label" htmlFor="pc-phone">
                        Phone number
                      </label>
                      <input
                        id="pc-phone"
                        className="pc-input"
                        type="tel"
                        name="phone"
                        autoComplete="tel"
                        placeholder="Your phone number"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="pc-field">
                      <label className="pc-label" htmlFor="pc-service">
                        Service <span className="pc-required">*</span>
                      </label>

                      <div className="pc-select-wrap">
                        <select
                          id="pc-service"
                          className="pc-input"
                          name="service"
                          defaultValue=""
                          required
                          disabled={isSubmitting}
                        >
                          <option value="" disabled>
                            Select a service
                          </option>

                          {serviceOptions.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>

                        <ChevronDown
                          className="pc-chevron"
                          size={18}
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    <div className="pc-field pc-field-full">
                      <label className="pc-label" htmlFor="pc-message">
                        Project details <span className="pc-required">*</span>
                      </label>
                      <textarea
                        id="pc-message"
                        className="pc-input"
                        name="message"
                        rows={5}
                        placeholder="What would you like to set up, improve, or build? Include your preferred timeline if you have one."
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="pc-terms">
                    <input
                      id="pc-terms"
                      type="checkbox"
                      name="terms"
                      required
                      disabled={isSubmitting}
                    />

                    <label htmlFor="pc-terms">
                      I agree to the{' '}
                      <Link to="/terms">terms and conditions</Link>
                      {' '}and{' '}
                      <Link to="/privacy">privacy policy</Link>.
                    </label>
                  </div>

                  <div className="pc-submit-row">
                    <button
                      type="submit"
                      className="pc-button"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending message…' : 'Send message'}
                      {!isSubmitting && (
                        <Send size={17} aria-hidden="true" />
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}