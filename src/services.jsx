import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import HeroCanvas from './components/heroCanvas';

const services = [
  {
    id: 'infrastructure',
    title: 'IT Consulting & Infrastructure',
    shortTitle: 'IT Infrastructure',
    logo: '/consult logo.png',
    tagline: 'A dependable foundation for your daily operations.',
    description:
      'We help businesses and individuals plan, configure, and improve their technology environment. From a single workstation to servers and office systems, we focus on practical recommendations, compatibility, and a setup that supports the way you work.',
    capabilities: [
      {
        title: 'Technology Planning',
        text:
          'Review your current equipment, applications, and requirements. Identify upgrade priorities, compare hardware options, and define a practical implementation plan.',
      },
      {
        title: 'Servers & Storage',
        text:
          'Server hardware configuration, firmware updates, storage and RAID planning, virtualization setup, and operating system deployment for the agreed environment.',
      },
      {
        title: 'Workstations & Home Offices',
        text:
          'Desktop and laptop setup, application installation, monitors, docking stations, printers, peripherals, and account configuration for business or home use.',
      },
      {
        title: 'POS & Business Equipment',
        text:
          'Workstation, receipt printer, scanner, and network setup for supported POS platforms, with connectivity testing and coordination with your POS provider.',
      },
    ],
    technologies: [
      'Windows',
      'Windows Server',
      'Microsoft Intune',
      'Microsoft Entra ID',
      'Hyper-V',
      'Dell PowerEdge',
      'HPE ProLiant',
      'iDRAC / iLO',
    ],
    deliverables: [
      'An agreed equipment and configuration plan',
      'Configured devices and applications within the project scope',
      'Hardware, peripheral, and access checks',
      'Configuration notes and a practical handover',
    ],
    example:
      'Opening an office: configure employee workstations, printers, shared resources, and business equipment, then verify the setup before the team starts using it.',
  },
  {
    id: 'ai',
    title: 'AI Consulting & Integrations',
    shortTitle: 'AI Consulting',
    logo: '/ai.png',
    tagline: 'Useful AI, built around real business tasks.',
    description:
      'We help you identify where AI can make work easier and select tools that fit your existing processes. Projects can include team onboarding, internal assistants, document workflows, and integrations with business applications.',
    capabilities: [
      {
        title: 'Use-Case Planning',
        text:
          'Identify repetitive tasks, compare suitable tools, and define a focused pilot with clear expectations for quality, time savings, and human review.',
      },
      {
        title: 'Team Tools & Adoption',
        text:
          'Help teams get started with Microsoft 365 Copilot, ChatGPT, or Gemini through practical workflows, reusable prompts, and guidance for everyday tasks.',
      },
      {
        title: 'Assistants & Knowledge',
        text:
          'Configure assistants around approved business information and defined tasks, with attention to access permissions, source quality, and how answers are reviewed.',
      },
      {
        title: 'Workflow Integrations',
        text:
          'Connect AI-assisted steps to forms, documents, email, or CRM workflows. Include review points and exception handling where automated results need confirmation.',
      },
    ],
    technologies: [
      'Microsoft 365 Copilot',
      'Copilot Studio',
      'ChatGPT',
      'OpenAI API',
      'Google Gemini',
      'Power Automate',
      'Zapier',
      'Make',
    ],
    deliverables: [
      'A prioritized AI use case and pilot scope',
      'Configured tools or integrations agreed for the project',
      'Example workflows and checks for output quality',
      'Team guidance on use, permissions, and human review',
    ],
    example:
      'Reduce repetitive intake work: summarize incoming inquiries, organize the details, and prepare a draft response for a team member to review before sending.',
  },
  {
    id: 'cloud',
    title: 'Cloud Consulting & Solutions',
    shortTitle: 'Cloud Solutions',
    logo: '/cloud.png',
    tagline: 'Connect your people, applications, and information.',
    description:
      'We help businesses adopt and organize cloud services around their operational needs. From business email and collaboration to Azure resources and hybrid access, we plan the setup, migration, and handover with your team.',
    capabilities: [
      {
        title: 'Business Productivity',
        text:
          'Microsoft 365 and Google Workspace setup, business domains, email accounts, groups, and collaboration tools configured for your organization.',
      },
      {
        title: 'Identity & Access',
        text:
          'User and group configuration, multi-factor authentication, access permissions, and onboarding or offboarding workflows suited to the selected platform.',
      },
      {
        title: 'Cloud Migration',
        text:
          'Plan email and file moves, review dependencies and permissions, agree on a cutover approach, and validate access and data after migration.',
      },
      {
        title: 'Azure & Hybrid Planning',
        text:
          'Plan and configure cloud compute, storage, and connectivity for defined workloads, including resource organization and visibility into usage and costs.',
      },
    ],
    technologies: [
      'Microsoft 365',
      'Google Workspace',
      'Microsoft Azure',
      'Microsoft Entra ID',
      'Exchange Online',
      'SharePoint',
      'OneDrive',
      'Microsoft Teams',
    ],
    deliverables: [
      'A platform setup or migration plan',
      'Configured accounts, groups, and agreed resources',
      'Access and migration validation checks',
      'Administrative documentation and handover guidance',
    ],
    example:
      'Move from scattered personal accounts to business email, shared files, and collaboration tools with organized access for each team member.',
  },
  {
    id: 'web',
    title: 'Web Design & Development',
    shortTitle: 'Web Development',
    logo: '/web-design.png',
    tagline: 'A professional digital presence connected to your business.',
    description:
      'We design and develop websites that make your business clear, credible, and easy to contact. From a focused landing page to a custom business website, we combine responsive design with the integrations needed behind the scenes.',
    capabilities: [
      {
        title: 'Design & Structure',
        text:
          'Plan your pages, content hierarchy, and customer journeys. Develop a visual direction that reflects your brand and makes key information easy to find.',
      },
      {
        title: 'Responsive Development',
        text:
          'Build layouts for phones, tablets, and desktop screens with attention to performance, readable content, keyboard navigation, and maintainable code.',
      },
      {
        title: 'Business Integrations',
        text:
          'Connect inquiry forms, appointment booking, CRM tools, analytics, and relevant automation so the website supports your actual business processes.',
      },
      {
        title: 'Launch & Handover',
        text:
          'Configure hosting and domains, test forms and navigation, establish basic search metadata, and explain how to manage the delivered website.',
      },
    ],
    technologies: [
      'React',
      'Next.js',
      'WordPress',
      'JavaScript / TypeScript',
      'Tailwind CSS',
      'Figma',
      'Google Analytics',
      'CRM & Booking Integrations',
    ],
    deliverables: [
      'An agreed page structure and design direction',
      'Responsive pages and project-specific integrations',
      'Pre-launch checks across key screen sizes',
      'Deployment and website management guidance',
    ],
    example:
      'Build a business website that explains your services, captures inquiries, and sends the relevant details to your booking or customer management system.',
  },
  {
    id: 'network',
    title: 'Network Setup & Infrastructure',
    shortTitle: 'Networking',
    logo: '/network.png',
    tagline: 'Reliable connections across your workplace or home.',
    description:
      'We plan and configure networks for homes, offices, and business environments. Our work covers Wi-Fi, switching, routing, segmentation, and remote connectivity, with testing and documentation tailored to the project.',
    capabilities: [
      {
        title: 'Network Planning',
        text:
          'Review device counts, coverage needs, internet connectivity, and existing equipment. Define a topology, addressing plan, and suitable equipment choices.',
      },
      {
        title: 'Switching & Routing',
        text:
          'Configure switches, router interfaces, VLANs, trunks, DHCP, and related network settings for the agreed design and supported equipment.',
      },
      {
        title: 'Business & Home Wi-Fi',
        text:
          'Configure access points, wireless networks, guest access, and device connectivity. Check coverage and performance in the areas that matter to you.',
      },
      {
        title: 'Firewalls & VPN Access',
        text:
          'Configure agreed firewall rules, network separation, and supported remote-access or site-to-site VPN connections, then verify intended traffic flows.',
      },
    ],
    technologies: [
      'Cisco Catalyst',
      'Cisco Meraki',
      'Ubiquiti UniFi',
      'Aruba',
      'VLANs',
      'DHCP / DNS',
      'Wi-Fi',
      'VPN Connectivity',
    ],
    deliverables: [
      'A network topology and addressing plan',
      'Configured network devices within the agreed scope',
      'Connectivity, segmentation, and wireless checks',
      'Configuration records and handover documentation',
    ],
    example:
      'Separate staff, guest, and POS traffic in a small business while providing dependable wireless coverage and appropriate access between systems.',
  },
];

const process = [
  ['Discover', 'Review your current environment, priorities, and requirements.'],
  ['Plan', 'Agree on scope, equipment, platform choices, and timing.'],
  ['Implement', 'Configure the solution and test the agreed functionality.'],
  ['Hand Over', 'Provide documentation and explain how to use your setup.'],
];

function DetailSection({ title, children, defaultOpen = false }) {
  return (
    <details className="sv-accordion" open={defaultOpen || undefined}>
      <summary>
        <span>{title}</span>
        <ChevronDown size={19} aria-hidden="true" />
      </summary>
      <div className="sv-accordion-body">{children}</div>
    </details>
  );
}

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const contactTimer = useRef(null);
  const currentService = services[activeService];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleScroll();
    handleResize();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.clearTimeout(contactTimer.current);
    };
  }, []);

  const goToContact = () => {
    window.clearTimeout(contactTimer.current);
    navigate('/#contact');

    const tryScroll = (attempt = 0) => {
      const section = document.getElementById('contact');

      if (section) {
        const reduced = window.matchMedia(
          '(prefers-reduced-motion: reduce)'
        ).matches;

        section.scrollIntoView({
          behavior: reduced ? 'auto' : 'smooth',
          block: 'start',
        });
      } else if (attempt < 20) {
        contactTimer.current = window.setTimeout(
          () => tryScroll(attempt + 1),
          100
        );
      }
    };

    contactTimer.current = window.setTimeout(() => tryScroll(), 100);
  };

  return (
    <div id="top" className="plexura-services-page">
      <style>{`
        .plexura-services-page {
          background: #F2F1ED;
          color: #142433;
          min-height: 100vh;
        }

        .plexura-services-page .sv-main,
        .plexura-services-page .sv-main * {
          box-sizing: border-box;
        }

        .sv-main .sv-container {
          width: min(100% - 48px, 1200px);
          margin-inline: auto;
        }

        .sv-main .sv-hero {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          background: #091525;
          color: #F5F7FA;
          padding: 150px 0 64px;
        }

        .sv-main .sv-hero-background {
          position: absolute;
          inset: 0;
          z-index: 0;
          display: block;
          pointer-events: none;
          user-select: none;
        }

        .sv-main .sv-hero-background img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .sv-main .sv-hero-background::before {
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

        .sv-main .sv-hero-background::after {
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

        @media (max-width: 900px) {
          .sv-main .sv-hero-background::before {
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

        .sv-main .sv-hero-layout {
          position: relative;
          z-index: 3;
        }

        .sv-main .sv-hero-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.5fr) minmax(0, .7fr);
          align-items: center;
          gap: 32px;
        }

        .sv-main .sv-eyebrow {
          margin: 0 0 16px;
          color: #B8440A;
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.6;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .sv-main .sv-hero .sv-eyebrow {
          color: #FDBA74;
        }

        .sv-main .sv-hero h1 {
          margin: 0;
          max-width: 760px;
          color: #F5F7FA;
          font-size: clamp(38px, 4.7vw, 66px);
          font-weight: 700;
          line-height: 1.06;
          letter-spacing: -.045em;
        }

        .sv-main .sv-hero h1 span {
          display: block;
          color: #BDD1EA;
        }

        .sv-main .sv-hero-copy {
          max-width: 630px;
          margin: 24px 0;
          color: #D0DAE6;
          font-size: 16px;
          line-height: 1.8;
        }

        .sv-main .sv-cube {
          position: relative;
          height: 280px;
          width: 100%;
          max-width: 320px;
          justify-self: center;
          pointer-events: none;
        }

        .sv-main .sv-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 48px;
          padding: 13px 21px;
          border: 0;
          border-radius: 10px;
          background: linear-gradient(110deg, #C2410C, #EA580C);
          color: white;
          font: inherit;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          cursor: pointer;
          transition: transform 200ms ease, box-shadow 200ms ease;
        }

        .sv-main .sv-content {
          padding-block: 54px 64px;
        }

        .sv-main .sv-section-heading {
          margin-bottom: 24px;
        }

        .sv-main .sv-section-heading h2 {
          margin: 0 0 12px;
          color: #142433;
          font-size: clamp(28px, 3vw, 38px);
          font-weight: 650;
          line-height: 1.15;
          letter-spacing: -.035em;
        }

        .sv-main .sv-section-heading p {
          margin: 0;
          color: #586575;
          font-size: 15px;
          line-height: 1.75;
        }

        .sv-main .sv-selector {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
          margin-bottom: 30px;
        }

        .sv-main .sv-service-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-width: 0;
          padding: 20px 12px;
          border: 2px solid transparent;
          border-radius: 16px;
          background: linear-gradient(135deg, #192F4D, #12243D);
          color: #F5F7FA;
          font: inherit;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
          text-align: center;
          cursor: pointer;
          transition: border-color 200ms ease, box-shadow 200ms ease;
        }

        .sv-main .sv-service-button[aria-pressed="true"] {
          border-color: #EA580C;
          box-shadow: 0 6px 20px #14243318;
        }

        .sv-main .sv-service-button img {
          display: block;
          width: 72px;
          height: 72px;
          object-fit: contain;
          transition: transform 300ms ease, filter 300ms ease;
        }

        .sv-main .sv-service-button[aria-pressed="true"] img {
          filter: drop-shadow(0 0 10px #7DB5F050);
        }

        .sv-main .sv-summary {
          padding: 34px;
          border: 1px solid #FFFFFF18;
          border-radius: 22px;
          background:
            radial-gradient(ellipse at 100% 0, #35598760, transparent 65%),
            linear-gradient(135deg, #192F4D, #101D31);
          color: #F5F7FA;
          margin-bottom: 18px;
        }

        .sv-main .sv-summary h2 {
          margin: 0;
          color: #F5F7FA;
          font-size: clamp(28px, 3.2vw, 42px);
          font-weight: 650;
          line-height: 1.15;
          letter-spacing: -.035em;
        }

        .sv-main .sv-tagline {
          margin: 14px 0;
          color: #FDBA74;
          font-size: 17px;
          font-weight: 600;
          line-height: 1.5;
        }

        .sv-main .sv-description {
          margin: 0;
          max-width: 900px;
          color: #CDD7E4;
          font-size: 15px;
          line-height: 1.85;
        }

        .sv-main .sv-accordion {
          margin-top: 14px;
          border: 1px solid #14243320;
          border-radius: 16px;
          background: #E9EDF0;
        }

        .sv-main .sv-accordion summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 21px 24px;
          color: #243F61;
          font-size: 17px;
          font-weight: 650;
          line-height: 1.4;
          list-style: none;
          cursor: pointer;
        }

        .sv-main .sv-accordion summary::-webkit-details-marker {
          display: none;
        }

        .sv-main .sv-accordion summary svg {
          flex-shrink: 0;
          color: #B8440A;
          transition: transform 200ms ease;
        }

        .sv-main .sv-accordion[open] > summary svg {
          transform: rotate(180deg);
        }

        .sv-main .sv-accordion-body {
          padding: 24px;
          border-top: 1px solid #14243315;
        }

        .sv-main .sv-capabilities {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
        }

        .sv-main .sv-capability {
          min-width: 0;
          padding-left: 16px;
          border-left: 2px solid #EA580C;
        }

        .sv-main .sv-capability h3 {
          margin: 0 0 9px;
          color: #243F61;
          font-size: 18px;
          font-weight: 650;
          line-height: 1.3;
        }

        .sv-main .sv-capability p,
        .sv-main .sv-example p {
          margin: 0;
          color: #586575;
          font-size: 14px;
          line-height: 1.8;
        }

        .sv-main .sv-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .sv-main .sv-tools li {
          padding: 9px 13px;
          border: 1px solid #35598725;
          border-radius: 8px;
          background: #F2F1ED;
          color: #243F61;
          font-size: 13px;
          line-height: 1.5;
        }

        .sv-main .sv-platform-note {
          margin: 18px 0 0;
          color: #586575;
          font-size: 12px;
          line-height: 1.7;
        }

        .sv-main .sv-deliverables {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .sv-main .sv-deliverables li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #35475C;
          font-size: 14px;
          line-height: 1.7;
        }

        .sv-main .sv-deliverables svg {
          flex-shrink: 0;
          margin-top: 3px;
          color: #B8440A;
        }

        .sv-main .sv-example {
          margin-top: 20px;
          padding: 22px 24px;
          border-left: 3px solid #355987;
          background: #E9EDF0;
          border-radius: 0 12px 12px 0;
        }

        .sv-main .sv-example h3 {
          margin: 0 0 8px;
          color: #243F61;
          font-size: 16px;
          font-weight: 650;
        }

        .sv-main .sv-process {
          margin-top: 44px;
        }

        .sv-main .sv-process-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
          padding: 0;
          margin: 22px 0 0;
          list-style: none;
        }

        .sv-main .sv-process-grid li {
          padding-top: 16px;
          border-top: 2px solid #35598740;
        }

        .sv-main .sv-process-grid h3 {
          margin: 0 0 10px;
          font-size: 18px;
          color: #243F61;
        }

        .sv-main .sv-process-grid p {
          margin: 0;
          color: #586575;
          font-size: 14px;
          line-height: 1.75;
        }

        .sv-main .sv-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          margin-top: 40px;
          padding: 30px;
          border-radius: 20px;
          background: #12243D;
          color: #F5F7FA;
        }

        .sv-main .sv-cta h2 {
          margin: 0 0 10px;
          color: #F5F7FA;
          font-size: 27px;
          line-height: 1.2;
          letter-spacing: -.03em;
        }

        .sv-main .sv-cta p {
          margin: 0;
          max-width: 600px;
          color: #C3CDDB;
          font-size: 14px;
          line-height: 1.75;
        }

        .sv-main .sv-cta .sv-button {
          flex-shrink: 0;
        }

        .sv-main button:focus-visible,
        .sv-main a:focus-visible,
        .sv-main summary:focus-visible {
          outline: 3px solid #EA580C;
          outline-offset: 4px;
        }

        @media (hover: hover) and (pointer: fine) {
          .sv-main .sv-service-button:hover img {
            transform: translateY(-3px) scale(1.04);
          }

          .sv-main .sv-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 22px #EA580C25;
          }
        }

        @media (max-width: 900px) {
          .sv-main .sv-hero {
            padding-top: 125px;
          }

          .sv-main .sv-hero-layout {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 12px;
          }

          .sv-main .sv-hero h1,
          .sv-main .sv-hero-copy {
            margin-inline: auto;
          }

          .sv-main .sv-cube {
            height: 260px;
          }

          .sv-main .sv-selector {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 12px;
          }

          .sv-main .sv-service-button {
            grid-column: span 2;
          }

          .sv-main .sv-service-button:last-child {
            grid-column: 2 / span 2;
          }

          .sv-main .sv-process-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sv-main .sv-cta {
            flex-direction: column;
            text-align: center;
          }
        }

        @media (max-width: 620px) {
          .sv-main .sv-container {
            width: calc(100% - 32px);
          }

          .sv-main .sv-hero {
            padding: 112px 0 32px;
          }

          .sv-main .sv-hero h1 {
            font-size: clamp(34px, 9vw, 46px);
          }

          .sv-main .sv-hero-copy {
            font-size: 14px;
            margin-block: 20px;
          }

          .sv-main .sv-content {
            padding-block: 34px 40px;
          }

          .sv-main .sv-service-button {
            padding: 16px 10px;
            font-size: 13px;
            border-radius: 13px;
          }

          .sv-main .sv-service-button img {
            width: 58px;
            height: 58px;
          }

          .sv-main .sv-summary {
            padding: 24px 20px;
            border-radius: 17px;
            text-align: center;
          }

          .sv-main .sv-summary h2 {
            font-size: 28px;
          }

          .sv-main .sv-tagline {
            font-size: 15px;
          }

          .sv-main .sv-description {
            font-size: 14px;
            line-height: 1.75;
          }

          .sv-main .sv-accordion summary {
            padding: 18px 16px;
            font-size: 16px;
          }

          .sv-main .sv-accordion-body {
            padding: 20px 16px;
          }

          .sv-main .sv-capabilities {
            gap: 24px 14px;
          }

          .sv-main .sv-capability {
            padding-left: 10px;
          }

          .sv-main .sv-capability h3 {
            font-size: 15px;
            overflow-wrap: break-word;
          }

          .sv-main .sv-capability p {
            font-size: 12px;
            line-height: 1.7;
          }

          .sv-main .sv-deliverables {
            grid-template-columns: 1fr;
          }

          .sv-main .sv-example {
            padding: 20px;
          }

          .sv-main .sv-process-grid {
            gap: 20px 16px;
          }

          .sv-main .sv-process-grid p {
            font-size: 13px;
          }

          .sv-main .sv-cta {
            padding: 26px 20px;
          }

          .sv-main .sv-cta .sv-button {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sv-main *,
          .sv-main *::before,
          .sv-main *::after {
            transition: none;
          }

          .sv-main .sv-service-button:hover img,
          .sv-main .sv-button:hover {
            transform: none;
          }
        }
      `}</style>

      <Navbar
        isScrolled={isScrolled}
        isMobile={isMobile}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="sv-main">
        <section className="sv-hero">
          <picture className="sv-hero-background" aria-hidden="true">
            <source media="(min-width: 1024px)" srcSet="/hero-desktop.png" />
            <img
              src="/hero-mobile.png"
              alt=""
              fetchPriority="high"
              decoding="async"
              draggable={false}
            />
          </picture>

          <div className="sv-container sv-hero-layout">
            <div>
              <p className="sv-eyebrow">Plexura Services</p>

              <h1>
                Technology that works.
                <span>From your desk to the cloud.</span>
              </h1>
<div className="sv-cube" aria-hidden="true">
              <HeroCanvas
                size={136}
                showOrbit={false}
                showParticles={false}
                showGlow
              />
            </div>
              <p className="sv-hero-copy">
                IT consulting, infrastructure, networking, cloud and
                AI solutions, and custom web development. Practical
                expertise for the systems your business depends on.
              </p>

              <a className="sv-button" href="#service-explorer">
                Explore our services
                <ArrowRight size={18} aria-hidden="true" />
              </a>
            </div>


          </div>
        </section>

        <section
          id="service-explorer"
          className="sv-content"
          style={{ scrollMarginTop: 100 }}
          aria-labelledby="sv-explorer-title"
        >
          <div className="sv-container">
            <div className="sv-section-heading">
              <p className="sv-eyebrow">Explore Our Expertise</p>
              <h2 id="sv-explorer-title">Find the right support.</h2>
              <p>
                Select a service to explore its capabilities,
                platforms, and project deliverables.
              </p>
            </div>

            <div className="sv-selector" aria-label="Choose a service">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  id={`sv-select-${service.id}`}
                  type="button"
                  className="sv-service-button"
                  aria-pressed={activeService === index}
                  aria-controls="sv-service-details"
                  onClick={() => setActiveService(index)}
                >
                  <img
                    src={service.logo}
                    alt=""
                    width="72"
                    height="72"
                    loading="lazy"
                    decoding="async"
                  />
                  <span>{service.shortTitle}</span>
                </button>
              ))}
            </div>

            <section
              id="sv-service-details"
              aria-labelledby="sv-current-title"
            >
              <div className="sv-summary">
                <h2 id="sv-current-title">{currentService.title}</h2>
                <p className="sv-tagline">{currentService.tagline}</p>
                <p className="sv-description">
                  {currentService.description}
                </p>
              </div>

              <div key={currentService.id}>
                <DetailSection title="How we can help" defaultOpen>
                  <div className="sv-capabilities">
                    {currentService.capabilities.map((capability) => (
                      <div className="sv-capability" key={capability.title}>
                        <h3>{capability.title}</h3>
                        <p>{capability.text}</p>
                      </div>
                    ))}
                  </div>
                </DetailSection>

                <DetailSection title="Platforms & technologies">
                  <ul className="sv-tools">
                    {currentService.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                  <p className="sv-platform-note">
                    Platform selection, licensing, compatibility, and
                    implementation scope are confirmed during discovery.
                  </p>
                </DetailSection>

                <DetailSection title="Project deliverables">
                  <ul className="sv-deliverables">
                    {currentService.deliverables.map((deliverable) => (
                      <li key={deliverable}>
                        <Check size={18} aria-hidden="true" />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </DetailSection>
              </div>

              <aside className="sv-example">
                <h3>Example project</h3>
                <p>{currentService.example}</p>
              </aside>
            </section>

            <section className="sv-process" aria-labelledby="sv-process-title">
              <div className="sv-section-heading">
                <h2 id="sv-process-title">From requirements to a working setup.</h2>
                <p>
                  We agree on the scope before implementation and
                  build the handover into the project.
                </p>
              </div>

              <ol className="sv-process-grid">
                {process.map(([title, description]) => (
                  <li key={title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </li>
                ))}
              </ol>
            </section>

            <div className="sv-cta">
              <div>
                <h2>Tell us what needs to work better.</h2>
                <p>
                  Share your current setup, your priorities, and
                  what you want to accomplish. We’ll help define
                  the next steps.
                </p>
              </div>

              <button
                type="button"
                className="sv-button"
                onClick={goToContact}
              >
                Discuss your project
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}