import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Smartphone,
  Database,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Layers,
  Terminal,
  FileCode,
  Settings,
  Search,
  BarChart,
  TrendingUp,
  Activity,
  Eye,
  Palette,
  Layout,
  Sparkles,
  Target,
  Mail,
  Bell,
  Calendar,
  Star,
  ChevronDown,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import HeroCanvas from './components/heroCanvas';

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const [openSections, setOpenSections] = useState({
    capabilities: true,
    technologies: false,
    process: false,
    outcomes: false,
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
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

  const goToSection = (sectionId) => {
    navigate('/');

    const tryScroll = (attempts = 0) => {
      const el = document.getElementById(sectionId);

      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else if (attempts < 10) {
        setTimeout(() => tryScroll(attempts + 1), 100);
      }
    };

    setTimeout(() => tryScroll(), 150);
  };

  const selectService = (index) => {
    setActiveService(index);
    setOpenSections({
      capabilities: true,
      technologies: false,
      process: false,
      outcomes: false,
    });
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const mainServices = [
    {
      id: 0,
      icon: TrendingUp,
      accentIcon: Target,
      title: 'Customer Acquisition Systems',
      shortTitle: 'Growth Systems',
      tagline: 'Turn your website into a growth engine.',
      description:
        'Connected websites, CRM, booking, follow-up, and lead recovery systems built to turn more visitors into customers.',
      keyFeatures: [
        {
          icon: Target,
          title: 'Lead Capture',
          description: 'Conversion-focused pages, forms, and calls-to-action.',
        },
        {
          icon: Database,
          title: 'CRM Integration',
          description: 'Every lead, call, and form submission organized in one place.',
        },
        {
          icon: Zap,
          title: 'Automated Follow-Up',
          description: 'SMS and email workflows that respond quickly.',
        },
        {
          icon: BarChart,
          title: 'Lead Tracking',
          description: 'Track calls, forms, appointments, and activity.',
        },
      ],
      technologies: [
        'React',
        'Next.js',
        'GoHighLevel',
        'Booking Forms',
        'SMS Automation',
        'Email Automation',
        'Call Tracking',
        'Analytics',
      ],
      process: [
        {
          step: '01',
          title: 'Audit',
          description: 'Review your site, lead flow, and follow-up gaps.',
        },
        {
          step: '02',
          title: 'Build',
          description: 'Connect website, CRM, booking, forms, and automations.',
        },
        {
          step: '03',
          title: 'Optimize',
          description: 'Improve conversion points after launch.',
        },
      ],
      outcomes: [
        'More visitors converted into leads',
        'Faster response times',
        'Clearer lead tracking',
        'A real growth system, not just a website',
      ],
    },
    {
      id: 1,
      icon: Layers,
      accentIcon: Database,
      title: 'CRM & Lead Management',
      shortTitle: 'CRM Setup',
      tagline: 'Organize every lead in one place.',
      description:
        'CRM systems that track leads, contacts, calls, appointments, notes, and opportunities so nothing slips through the cracks.',
      keyFeatures: [
        {
          icon: Database,
          title: 'CRM Setup',
          description: 'Structured contact and lead database.',
        },
        {
          icon: Activity,
          title: 'Pipeline Stages',
          description: 'Clear sales stages from new lead to won customer.',
        },
        {
          icon: Users,
          title: 'Contact Records',
          description: 'Calls, messages, forms, and notes in one profile.',
        },
        {
          icon: Bell,
          title: 'Lead Alerts',
          description: 'Instant notifications when a new lead comes in.',
        },
      ],
      technologies: [
        'GoHighLevel',
        'Pipelines',
        'Contact Records',
        'Lead Alerts',
        'Workflow Automation',
        'Call Tracking',
        'Form Tracking',
        'Reports',
      ],
      process: [
        {
          step: '01',
          title: 'Map Flow',
          description: 'Identify where leads come from and where they go.',
        },
        {
          step: '02',
          title: 'Build CRM',
          description: 'Create fields, stages, automations, and notifications.',
        },
        {
          step: '03',
          title: 'Train',
          description: 'Show your team how to use and maintain it.',
        },
      ],
      outcomes: [
        'Fewer lost leads',
        'Cleaner sales pipeline',
        'Better team follow-up',
        'Improved visibility into opportunities',
      ],
    },
    {
      id: 2,
      icon: Smartphone,
      accentIcon: Zap,
      title: 'Booking & Automated Follow-Up',
      shortTitle: 'Booking',
      tagline: 'Book more appointments with less manual work.',
      description:
        'Online booking, SMS reminders, email follow-up, and customer communication workflows that help leads take action.',
      keyFeatures: [
        {
          icon: Calendar,
          title: 'Online Booking',
          description: 'Simple appointment flows without back-and-forth messages.',
        },
        {
          icon: Smartphone,
          title: 'Text Reminders',
          description: 'SMS confirmations and reminders to reduce no-shows.',
        },
        {
          icon: Mail,
          title: 'Email Follow-Up',
          description: 'Automated emails that keep leads warm.',
        },
        {
          icon: Zap,
          title: 'Speed-to-Lead',
          description: 'Fast responses after forms or appointment requests.',
        },
      ],
      technologies: [
        'Booking Calendars',
        'SMS Reminders',
        'Email Workflows',
        'Form Triggers',
        'Appointment Pipelines',
        'Lead Alerts',
        'Customer Messaging',
        'Automation',
      ],
      process: [
        {
          step: '01',
          title: 'Define Flow',
          description: 'Map visitor to booked appointment.',
        },
        {
          step: '02',
          title: 'Configure',
          description: 'Set calendars, reminders, confirmations, and routing.',
        },
        {
          step: '03',
          title: 'Automate',
          description: 'Build follow-up for leads, no-shows, and re-engagement.',
        },
      ],
      outcomes: [
        'More booked appointments',
        'Fewer no-shows',
        'Less manual follow-up',
        'Smoother customer experience',
      ],
    },
    {
      id: 3,
      icon: Code,
      accentIcon: Layout,
      title: 'Premium Website Development',
      shortTitle: 'Websites',
      tagline: 'Websites built to convert, not just exist.',
      description:
        'Premium websites connected to forms, booking tools, CRM systems, analytics, and automation.',
      keyFeatures: [
        {
          icon: Palette,
          title: 'Premium Design',
          description: 'Modern visuals that build trust fast.',
        },
        {
          icon: Layout,
          title: 'Conversion Layouts',
          description: 'Pages structured around calls-to-action and clarity.',
        },
        {
          icon: Zap,
          title: 'Performance',
          description: 'Fast, mobile-friendly pages built for users.',
        },
        {
          icon: FileCode,
          title: 'Custom Build',
          description: 'React, Next.js, WordPress, or custom solutions.',
        },
      ],
      technologies: [
        'React',
        'Next.js',
        'WordPress',
        'Tailwind CSS',
        'Landing Pages',
        'Forms',
        'Analytics',
        'SEO Structure',
      ],
      process: [
        {
          step: '01',
          title: 'Strategy',
          description: 'Define offer, audience, pages, and conversion goals.',
        },
        {
          step: '02',
          title: 'Design',
          description: 'Create a polished web experience.',
        },
        {
          step: '03',
          title: 'Launch',
          description: 'Connect forms, tracking, CRM, and automations.',
        },
      ],
      outcomes: [
        'Stronger online presence',
        'Better lead capture',
        'Improved customer trust',
        'Scalable foundation for growth',
      ],
    },
    {
      id: 4,
      icon: Search,
      accentIcon: Star,
      title: 'Lead Recovery & Reputation Growth',
      shortTitle: 'Lead Recovery',
      tagline: 'Recover missed opportunities and build trust.',
      description:
        'Missed-call text back, review requests, reputation monitoring, and re-engagement workflows for old leads.',
      keyFeatures: [
        {
          icon: Smartphone,
          title: 'Missed Call Text Back',
          description: 'Automatically text missed callers before they move on.',
        },
        {
          icon: Star,
          title: 'Review Requests',
          description: 'Ask happy customers for reviews at the right time.',
        },
        {
          icon: Eye,
          title: 'Reputation Monitoring',
          description: 'Track reviews and customer feedback.',
        },
        {
          icon: Mail,
          title: 'Re-Engagement',
          description: 'Bring old leads and customers back into the pipeline.',
        },
      ],
      technologies: [
        'Missed Call Text Back',
        'Review Requests',
        'SMS Campaigns',
        'Email Campaigns',
        'Google Reviews',
        'Reputation Monitoring',
        'Reporting',
        'Lead Re-Engagement',
      ],
      process: [
        {
          step: '01',
          title: 'Find Gaps',
          description: 'Audit missed calls, weak reviews, and slow follow-up.',
        },
        {
          step: '02',
          title: 'Install',
          description: 'Set up recovery, review, and re-engagement workflows.',
        },
        {
          step: '03',
          title: 'Improve',
          description: 'Refine timing and messaging based on results.',
        },
      ],
      outcomes: [
        'More missed calls recovered',
        'More reviews and social proof',
        'Better follow-up',
        'More recovered opportunities',
      ],
    },
  ];

  const currentService = mainServices[activeService];
  const CurrentIcon = currentService.icon;

  const AccordionSection = ({ id, title, icon: Icon, children }) => {
    const isOpen = openSections[id];

    return (
      <div className="overflow-hidden rounded-2xl border border-[#D9DEE3]/10 bg-white/[0.035] backdrop-blur">
        <button
          type="button"
          onClick={() => toggleSection(id)}
          className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-5"
        >
          <span className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#D6A84A]/10 text-[#E2B65A] shadow-[0_0_16px_rgba(214,168,74,0.08)]">
              <Icon size={18} />
            </span>

            <span className="font-display text-lg font-bold text-[#F4F5F6] sm:text-xl">
              {title}
            </span>
          </span>

          <ChevronDown
            size={20}
            className={`shrink-0 text-[#E2B65A] transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="border-t border-[#D9DEE3]/10 px-4 pb-4 pt-4 sm:px-5">
                {children}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div id="top" className="min-h-screen overflow-x-hidden bg-[#050608] text-[#F4F5F6]">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, #050608 0%, #0B0D10 24%, #121419 52%, #1A1D22 76%, #0A0C0F 100%)',
          }}
        />

        <div
          className="absolute -top-56 right-[-12%] h-[48rem] w-[48rem] rounded-full md:h-[64rem] md:w-[64rem]"
          style={{
            background:
              'radial-gradient(circle, rgba(241,208,120,0.20) 0%, rgba(214,168,74,0.11) 34%, transparent 68%)',
          }}
        />

        <div
          className="absolute bottom-[-18rem] left-[-12%] h-[34rem] w-[34rem] rounded-full md:h-[44rem] md:w-[44rem]"
          style={{
            background:
              'radial-gradient(circle, rgba(201,128,114,0.10) 0%, rgba(184,131,72,0.07) 28%, transparent 65%)',
          }}
        />

        <div
          className="absolute left-1/2 top-[22%] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full md:h-[34rem] md:w-[34rem]"
          style={{
            background:
              'radial-gradient(circle, rgba(214,168,74,0.09) 0%, transparent 70%)',
          }}
        />

        <div className="absolute inset-0 opacity-[0.04]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(rgba(214,168,74,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(214,168,74,0.7) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </div>

      <Navbar
        isScrolled={isScrolled}
        isMobile={isMobile}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Hero */}
      <section className="relative px-4 pb-8 pt-28 sm:px-6 sm:pb-12 sm:pt-32 lg:pt-40">
        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <motion.p
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-4 font-mono text-[0.65rem] uppercase tracking-[0.28em] text-[#D6A84A] sm:text-xs"
            >
              Our Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="font-display text-[2.75rem] font-bold leading-[0.98] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl"
            >
              <span className="text-[#F4F5F6]">Growth Systems</span>
              <br />
              <span className="bg-gradient-to-r from-[#F8E6A0] via-[#F1D078] to-[#C98072] bg-clip-text text-transparent">
                Built to Convert
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="mx-auto mt-5 max-w-2xl border-t border-[#D9DEE3]/10 pt-5 text-sm leading-relaxed text-[#AEB4BB] sm:text-lg"
            >
              Websites, CRM, booking, follow-up, and lead recovery systems built to help
              businesses capture and convert more opportunities.
            </motion.p>
          </div>

          {/* Hero cube — mobile + desktop */}
          <motion.div
            className="relative mx-auto mt-8 h-[260px] w-full max-w-[22rem] sm:h-[320px] sm:max-w-[30rem] md:mt-10 md:h-80 md:max-w-[36rem] lg:h-[28rem] lg:max-w-[44rem]"
            initial={{ opacity: 0, scale: 0.9, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[20rem] w-[20rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D6A84A]/12 blur-3xl sm:h-[28rem] sm:w-[28rem] md:h-[34rem] md:w-[34rem] lg:h-[44rem] lg:w-[44rem]" />

            <HeroCanvas className="absolute inset-0" />
          </motion.div>
        </div>
      </section>

      {/* Service selector */}
      <section className="relative px-4 py-5 sm:px-6 lg:py-8">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;
              const isLast = index === mainServices.length - 1;

              return (
                <button
                  key={service.id}
                  type="button"
                  onClick={() => selectService(index)}
                  className={`group relative min-h-[112px] rounded-2xl border p-3 text-center transition-all duration-300 sm:min-h-[130px] sm:p-4 ${
                    isLast
                      ? 'col-span-2 mx-auto w-[calc(50%-0.375rem)] sm:col-span-1 sm:w-full'
                      : ''
                  } ${
                    isActive
                      ? 'border-[#D6A84A] bg-[#D6A84A]/12 shadow-xl shadow-[#D6A84A]/12'
                      : 'border-[#D9DEE3]/10 bg-white/[0.05] hover:border-[#D6A84A]/50 hover:bg-white/[0.075]'
                  }`}
                >
                  <div
                    className={`mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 sm:h-12 sm:w-12 ${
                      isActive
                        ? 'bg-gradient-to-br from-[#F8E6A0] via-[#D6A84A] to-[#B88348] text-[#08090B] shadow-[0_0_18px_rgba(214,168,74,0.18)]'
                        : 'bg-[#D6A84A]/10 text-[#E2B65A] group-hover:bg-[#D6A84A]/18'
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  <h3
                    className={`font-display text-sm font-bold leading-tight sm:text-base ${
                      isActive ? 'text-[#F4F5F6]' : 'text-[#D4D7DB]'
                    }`}
                  >
                    {service.shortTitle}
                  </h3>

                  {isActive && (
                    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-r from-[#F1D078]/12 via-[#D6A84A]/10 to-transparent" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service details */}
      <section className="relative px-4 py-8 sm:px-6 lg:py-14">
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Active service summary */}
          <motion.div
            key={currentService.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="mb-5 rounded-3xl border border-[#D6A84A]/20 bg-gradient-to-br from-[#1B1E23] via-[#111419] to-[#090B0E] p-5 backdrop-blur sm:p-7 lg:p-8 shadow-2xl shadow-black/40"
          >
            <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
              <div className="relative shrink-0">
                <div className="absolute -inset-3 rounded-2xl bg-[#D6A84A]/18 blur-xl" />
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F8E6A0] via-[#D6A84A] to-[#B88348] shadow-xl shadow-[#D6A84A]/10 sm:h-20 sm:w-20">
                  <CurrentIcon size={34} className="text-[#08090B]" />
                </div>
              </div>

              <div>
                <h2 className="font-display text-3xl font-bold leading-tight text-[#F4F5F6] sm:text-4xl lg:text-5xl">
                  {currentService.title}
                </h2>

                <p className="mt-2 text-base font-semibold text-[#F1D078] sm:text-lg">
                  {currentService.tagline}
                </p>

                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#AEB4BB] sm:text-base">
                  {currentService.description}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Accordions */}
          <div className="space-y-4">
            <AccordionSection id="capabilities" title="Key Capabilities" icon={Sparkles}>
              <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                {currentService.keyFeatures.map((feature, index) => {
                  const FeatureIcon = feature.icon;

                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-[#D9DEE3]/10 bg-gradient-to-br from-[#1B1E23] via-[#111419] to-[#090B0E] p-3 shadow-md transition-all duration-300 hover:border-[#D6A84A]/50 sm:p-4"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#D6A84A]/10 text-[#E2B65A]">
                        <FeatureIcon size={20} />
                      </div>

                      <h4 className="font-display text-sm font-bold leading-tight text-[#F4F5F6] sm:text-base">
                        {feature.title}
                      </h4>

                      <p className="mt-2 hidden text-sm leading-relaxed text-[#969DA5] sm:block">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </AccordionSection>

            <AccordionSection id="technologies" title="Tools & Integrations" icon={Terminal}>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
                {currentService.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="rounded-full border border-[#D9DEE3]/10 bg-white/[0.04] px-3 py-2 text-center text-xs font-semibold text-[#D4D7DB] shadow-sm transition-all duration-300 hover:border-[#D6A84A]/50 hover:text-[#F1D078] sm:text-sm"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </AccordionSection>

            <AccordionSection id="process" title="Simple Process" icon={Settings}>
              <div className="grid gap-3 md:grid-cols-3">
                {currentService.process.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-[#D9DEE3]/10 bg-gradient-to-br from-[#1B1E23] via-[#111419] to-[#090B0E] p-4 shadow-md"
                  >
                    <div className="mb-3 font-mono text-xs font-bold tracking-[0.2em] text-[#F1D078]">
                      {item.step}
                    </div>

                    <h4 className="font-display text-lg font-bold text-[#F4F5F6]">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-relaxed text-[#969DA5]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </AccordionSection>

            <AccordionSection id="outcomes" title="Expected Outcomes" icon={TrendingUp}>
              <div className="grid gap-3 sm:grid-cols-2">
                {currentService.outcomes.map((outcome, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 rounded-2xl border border-[#D9DEE3]/10 bg-gradient-to-br from-[#1B1E23] via-[#111419] to-[#090B0E] p-4 shadow-md"
                  >
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#F8E6A0] via-[#D6A84A] to-[#B88348]">
                      <CheckCircle size={15} className="text-[#08090B]" />
                    </div>

                    <p className="text-sm font-medium leading-relaxed text-[#F4F5F6] sm:text-base">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </AccordionSection>
          </div>

          {/* CTA */}
          <div className="relative mt-8 overflow-hidden rounded-3xl border border-[#D6A84A]/25 bg-gradient-to-br from-[#D6A84A]/[0.09] via-[#C98072]/[0.05] to-[#D6A84A]/[0.03] p-6 text-center sm:p-8 lg:mt-12">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#F1D078]/10 via-[#D6A84A]/10 to-transparent" />

            <div
              className="pointer-events-none absolute -top-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full blur-3xl"
              style={{
                background:
                  'radial-gradient(circle, rgba(214,168,74,0.16) 0%, rgba(201,128,114,0.08) 40%, transparent 72%)',
              }}
            />

            <div className="relative z-10 mx-auto max-w-2xl">
              <h3 className="font-display text-3xl font-bold text-[#F4F5F6] sm:text-4xl">
                Ready to Get Started?
              </h3>

              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#AEB4BB] sm:text-lg">
                Tell us what you need and we’ll help you choose the right system for your business.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    goToSection('contact');
                  }}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F8E6A0] via-[#D6A84A] to-[#B88348] px-6 py-3 text-sm font-bold text-[#08090B] shadow-xl shadow-[#D6A84A]/20 transition-all duration-300 hover:scale-[1.02] sm:text-base"
                >
                  Start Project
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    goToSection('contact');
                  }}
                  className="inline-flex items-center justify-center rounded-full border border-[#D6A84A]/70 px-6 py-3 text-sm font-bold text-[#F1D078] transition-all duration-300 hover:bg-[#D6A84A]/10 sm:text-base"
                >
                  Schedule Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <Footer />
    </div>
  );
}