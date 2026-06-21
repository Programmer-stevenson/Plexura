import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Zap, Users, ArrowRight, CheckCircle, Layers, Globe, Terminal, FileCode, Settings, Search, BarChart, TrendingUp, Activity, Eye, Palette, Layout, Sparkles, Target, Mail, Bell, Calendar, Star } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import HeroCanvas from './components/heroCanvas';
export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const navigate = useNavigate();

  // Navigate to home page and scroll to a section
  const goToSection = (sectionId) => {
    navigate('/');
    // Try scrolling after page mounts; retry if element not found yet
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


  const mainServices = [
    {
      id: 0,
      icon: TrendingUp,
      accentIcon: Target,
      title: "Customer Acquisition Systems",
      tagline: "Turn Your Website Into a Growth Engine",
      description: "We build connected systems that help businesses capture leads, automate follow-up, book appointments, and convert more visitors into paying customers.",
      fullDescription: "A website should do more than look professional. Plexura designs and engineers customer acquisition systems that connect your website, CRM, lead forms, booking tools, missed-call recovery, automated text reminders, review generation, and follow-up workflows into one managed growth system. The goal is simple: help your business stop losing opportunities and turn more interest into revenue.",
      keyFeatures: [
        {
          icon: Target,
          title: "Lead Capture Strategy",
          description: "Conversion-focused pages, calls-to-action, and forms designed to turn visitors into real leads"
        },
        {
          icon: Database,
          title: "CRM Integration",
          description: "Every form submission, call, and inquiry is organized inside a clear lead management system"
        },
        {
          icon: Zap,
          title: "Automated Follow-Up",
          description: "Text and email workflows that respond quickly, nurture leads, and keep opportunities moving"
        },
        {
          icon: BarChart,
          title: "Lead Tracking",
          description: "Track calls, forms, appointments, and customer activity so growth is easier to measure"
        },
        {
          icon: TrendingUp,
          title: "Conversion Optimization",
          description: "Ongoing improvements to messaging, layout, and user flow to help increase lead volume"
        },
        {
          icon: Users,
          title: "Customer Journey System",
          description: "A connected path from first click to booked appointment, follow-up, review, and retention"
        }
      ],
      technologies: [
        "React & Next.js",
        "GoHighLevel CRM",
        "Lead Capture Forms",
        "Booking Calendars",
        "SMS Automation",
        "Email Automation",
        "Call Tracking",
        "Analytics & Reporting"
      ],
      process: [
        {
          step: "01",
          title: "Audit & Strategy",
          description: "Review your website, lead flow, calls-to-action, follow-up process, and customer journey"
        },
        {
          step: "02",
          title: "System Buildout",
          description: "Connect the website, CRM, booking tools, forms, automations, and tracking systems"
        },
        {
          step: "03",
          title: "Launch & Test",
          description: "Test every form, call flow, text reminder, booking path, and lead notification before launch"
        },
        {
          step: "04",
          title: "Optimize Monthly",
          description: "Monitor performance, improve conversion points, and refine the system as leads come in"
        }
      ],
      outcomes: [
        "More website visitors converted into leads",
        "Faster response times and stronger follow-up",
        "Clear visibility into calls, forms, and appointments",
        "A managed growth system instead of a static website"
      ]
    },
    {
      id: 1,
      icon: Layers,
      accentIcon: Database,
      title: "CRM & Lead Management",
      tagline: "Organize Every Lead in One Place",
      description: "We set up and manage CRM systems that track leads, contacts, calls, appointments, and opportunities so nothing slips through the cracks.",
      fullDescription: "Most small businesses lose money because leads are scattered across phone calls, emails, forms, DMs, and notes. Plexura centralizes those opportunities into a CRM pipeline so your team can see who contacted you, what they need, where they are in the sales process, and what follow-up needs to happen next.",
      keyFeatures: [
        {
          icon: Database,
          title: "CRM Setup",
          description: "A structured customer database for leads, contacts, appointments, and conversations"
        },
        {
          icon: Activity,
          title: "Pipeline Management",
          description: "Custom sales stages that show where every opportunity stands from new lead to won customer"
        },
        {
          icon: Users,
          title: "Contact Management",
          description: "Centralized customer profiles with calls, messages, forms, notes, and appointment history"
        },
        {
          icon: Bell,
          title: "Lead Notifications",
          description: "Instant alerts when new leads come in so your team can respond before competitors do"
        },
        {
          icon: BarChart,
          title: "Performance Reporting",
          description: "Simple reporting around calls, forms, booked appointments, and lead activity"
        },
        {
          icon: Settings,
          title: "Workflow Management",
          description: "Custom automations that move leads through the pipeline and trigger the right next step"
        }
      ],
      technologies: [
        "GoHighLevel CRM",
        "Pipelines",
        "Contact Records",
        "Opportunity Tracking",
        "Lead Notifications",
        "Workflow Automation",
        "Call & Form Tracking",
        "Reporting Dashboards"
      ],
      process: [
        {
          step: "01",
          title: "Map Your Lead Flow",
          description: "Identify where leads come from and how your team currently handles new opportunities"
        },
        {
          step: "02",
          title: "Build the Pipeline",
          description: "Create CRM stages, contact fields, notifications, and lead ownership rules"
        },
        {
          step: "03",
          title: "Connect Lead Sources",
          description: "Connect website forms, booking tools, phone calls, and other lead capture points"
        },
        {
          step: "04",
          title: "Train & Maintain",
          description: "Show your team how to use the system and continue refining it as the business grows"
        }
      ],
      outcomes: [
        "Fewer leads lost in inboxes, voicemails, or spreadsheets",
        "A clear sales pipeline your team can actually use",
        "Faster lead response and better customer communication",
        "Better visibility into what is generating opportunities"
      ]
    },
    {
      id: 2,
      icon: Smartphone,
      accentIcon: Zap,
      title: "Booking & Automated Follow-Up",
      tagline: "Book More Appointments With Less Manual Work",
      description: "We install online booking systems, automated text message reminders, email follow-up, and customer communication workflows that help convert leads into scheduled appointments.",
      fullDescription: "Speed matters when someone is ready to book. Plexura builds appointment and follow-up systems that make it easier for customers to take action while reducing the manual work on your team. From online calendars to automated text reminders, confirmation messages, and follow-up sequences, we help keep leads engaged until they become customers.",
      keyFeatures: [
        {
          icon: Calendar,
          title: "Online Booking Systems",
          description: "Simple appointment scheduling flows that let prospects book without back-and-forth messages"
        },
        {
          icon: Smartphone,
          title: "Automated Text Reminders",
          description: "SMS confirmations and reminders that reduce no-shows and keep customers informed"
        },
        {
          icon: Mail,
          title: "Email Follow-Up",
          description: "Automated email sequences that keep leads warm and answer common questions"
        },
        {
          icon: Zap,
          title: "Speed-to-Lead Automation",
          description: "Immediate responses when someone fills out a form or requests more information"
        },
        {
          icon: Users,
          title: "Customer Notifications",
          description: "Internal and customer-facing alerts for bookings, updates, and next steps"
        },
        {
          icon: Activity,
          title: "Appointment Tracking",
          description: "Track scheduled appointments, completed bookings, and missed opportunities"
        }
      ],
      technologies: [
        "Booking Calendars",
        "SMS Reminders",
        "Email Workflows",
        "GoHighLevel Automation",
        "Form Triggers",
        "Appointment Pipelines",
        "Lead Notifications",
        "Customer Messaging"
      ],
      process: [
        {
          step: "01",
          title: "Define the Booking Flow",
          description: "Map the exact path from website visitor to booked appointment"
        },
        {
          step: "02",
          title: "Configure Calendars",
          description: "Set availability, appointment types, reminders, confirmation messages, and routing"
        },
        {
          step: "03",
          title: "Automate Follow-Up",
          description: "Build text and email workflows for new leads, reminders, no-shows, and re-engagement"
        },
        {
          step: "04",
          title: "Monitor & Improve",
          description: "Review appointment activity and optimize the flow to improve booking rates"
        }
      ],
      outcomes: [
        "More leads turning into booked appointments",
        "Fewer no-shows with automated text reminders",
        "Less manual follow-up for your team",
        "A smoother customer experience from inquiry to appointment"
      ]
    },
    {
      id: 3,
      icon: Code,
      accentIcon: Layout,
      title: "Premium Website Development",
      tagline: "Websites Built to Convert, Not Just Exist",
      description: "We design and build premium websites that support lead generation, CRM automation, booking systems, and long-term business growth.",
      fullDescription: "Plexura creates high-performance websites with the strategy and infrastructure needed to generate real business opportunities. Instead of building a digital brochure, we build a conversion-focused web experience connected to forms, calls, booking tools, CRM systems, automations, analytics, and follow-up workflows.",
      keyFeatures: [
        {
          icon: Palette,
          title: "Premium Visual Design",
          description: "Modern, polished web design that builds trust and positions your business professionally"
        },
        {
          icon: Layout,
          title: "Conversion-Focused Layouts",
          description: "Page structures built around calls-to-action, service clarity, lead capture, and booking flow"
        },
        {
          icon: Zap,
          title: "Fast Performance",
          description: "Optimized pages built for speed, mobile experience, and reliable user interaction"
        },
        {
          icon: Smartphone,
          title: "Mobile-First Experience",
          description: "Designed for the customers who find you, call you, and book from their phones"
        },
        {
          icon: FileCode,
          title: "Custom Development",
          description: "React, Next.js, WordPress, or custom solutions depending on the business need"
        },
        {
          icon: Search,
          title: "SEO-Ready Structure",
          description: "Clean page structure, metadata, service pages, and technical foundations for local visibility"
        }
      ],
      technologies: [
        "React.js & Next.js",
        "WordPress",
        "Tailwind CSS",
        "Lead Capture Forms",
        "Landing Pages",
        "GoHighLevel Integration",
        "Analytics",
        "Performance Optimization"
      ],
      process: [
        {
          step: "01",
          title: "Website Strategy",
          description: "Define the offer, target customer, conversion goals, and lead capture points"
        },
        {
          step: "02",
          title: "Design & Build",
          description: "Create a premium website experience that looks professional and supports conversion"
        },
        {
          step: "03",
          title: "Integrate Systems",
          description: "Connect forms, booking, CRM, automations, tracking, and customer communication tools"
        },
        {
          step: "04",
          title: "Launch & Support",
          description: "Deploy the site, test the lead system, and provide ongoing updates and maintenance"
        }
      ],
      outcomes: [
        "A premium website that supports real business growth",
        "More effective lead capture and appointment paths",
        "Improved trust, clarity, and customer experience",
        "A scalable foundation for CRM, automation, and marketing"
      ]
    },
    {
      id: 4,
      icon: Search,
      accentIcon: TrendingUp,
      title: "Lead Recovery & Reputation Growth",
      tagline: "Recover Missed Opportunities and Build Trust",
      description: "We help businesses recover missed calls, generate more reviews, monitor reputation, and re-engage prospects with systems designed to turn lost opportunities into revenue.",
      fullDescription: "Many businesses lose leads simply because they miss a call, respond too slowly, forget to follow up, or fail to request reviews after a successful job. Plexura builds lead recovery and reputation systems that automatically respond to missed calls, re-engage prospects, request reviews, and give your business a stronger online presence.",
      keyFeatures: [
        {
          icon: Smartphone,
          title: "Missed Call Recovery",
          description: "Automatically text missed callers so your business can recover leads before they call a competitor"
        },
        {
          icon: Star,
          title: "Review Generation",
          description: "Automated review requests that help happy customers share their experience online"
        },
        {
          icon: Eye,
          title: "Reputation Monitoring",
          description: "Track new reviews, customer feedback, and reputation signals that influence buying decisions"
        },
        {
          icon: Mail,
          title: "Lead Re-Engagement",
          description: "Follow-up campaigns for old leads, unbooked prospects, and customers who may return"
        },
        {
          icon: BarChart,
          title: "Results Reporting",
          description: "Monitor recovered calls, review activity, form leads, bookings, and follow-up performance"
        },
        {
          icon: TrendingUp,
          title: "Retention Workflows",
          description: "Stay connected with customers after the first appointment, job, or consultation"
        }
      ],
      technologies: [
        "Missed Call Text Back",
        "Review Requests",
        "SMS Campaigns",
        "Email Campaigns",
        "Reputation Monitoring",
        "Google Business Profile",
        "Lead Re-Engagement",
        "Reporting Dashboards"
      ],
      process: [
        {
          step: "01",
          title: "Identify Lost Opportunities",
          description: "Audit missed calls, slow follow-up, weak review flow, and gaps in customer communication"
        },
        {
          step: "02",
          title: "Install Recovery Systems",
          description: "Set up missed-call text back, review requests, re-engagement campaigns, and alerts"
        },
        {
          step: "03",
          title: "Connect Reporting",
          description: "Track recovered leads, review activity, customer responses, and conversion points"
        },
        {
          step: "04",
          title: "Improve Over Time",
          description: "Refine messaging, timing, and automation based on what customers respond to"
        }
      ],
      outcomes: [
        "More missed calls recovered before leads are lost",
        "More Google reviews and stronger social proof",
        "Improved customer follow-up and retention",
        "Better visibility into lost and recovered opportunities"
      ]
    }
  ];

  const currentService = mainServices[activeService];

  return (
    <div id='top' className="min-h-screen bg-[#0A0E12] text-[#F4FAFB] overflow-x-hidden">
      {/* Enhanced Animated Background with Mint Green */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #0A0E12 0%, #11161C 45%, #181E25 70%, #0D1217 100%)' }} />
        <div className="absolute -top-56 right-[-12%] w-[64rem] h-[64rem] rounded-full" style={{ background: 'radial-gradient(circle, rgba(45,212,191,0.22) 0%, transparent 68%)' }} />
        <div className="absolute bottom-[-18rem] left-[-12%] w-[44rem] h-[44rem] rounded-full" style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 65%)' }} />
        {/* Desktop Version - Complex Animations */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2DD4BF] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#2DD4BF] rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#2DD4BF] rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-3/4 left-1/2 w-72 h-72 bg-[#2DD4BF] rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-[#2DD4BF] rounded-full blur-3xl animate-pulse delay-1500"></div>
        </div>

        {/* Mobile Version - Simplified Animations */}
        <div className="md:hidden absolute top-0 left-0 w-full h-full opacity-15">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#2DD4BF] rounded-full blur-2xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-[#2DD4BF] rounded-full blur-2xl animate-pulse-slow delay-1000"></div>
          <div className="absolute top-2/3 left-1/2 w-36 h-36 bg-[#2DD4BF] rounded-full blur-2xl animate-pulse-slow delay-2000"></div>
        </div>
        
        {/* Animated Grid with Mint Tint */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(#2DD4BF 1px, transparent 1px), linear-gradient(90deg, #2DD4BF 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>


      {/* Shared Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 lg:pt-40 pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative">
            <div className="max-w-5xl mx-auto text-center space-y-6">
              {/* Eyebrow */}
              <motion.p
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-mono text-xs tracking-[0.3em] uppercase text-[#2DD4BF]"
              >
                Our Services
              </motion.p>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.98] tracking-tight text-center"
              >
                <span className="text-[#F4FAFB]">
                  Growth Systems
                </span>
                <br />
                <span className="bg-gradient-to-r from-[#5EEAD4] via-[#2DD4BF] to-[#14B8A6] bg-clip-text text-transparent">
                  Built to Convert
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.7 }}
                className="text-xl text-[#AEBAC4] leading-relaxed max-w-3xl mx-auto border-t border-[#F4FAFB]/10 pt-6 mt-2 text-center"
              >
                Plexura designs and engineers customer acquisition systems that combine premium websites, CRM automation, booking systems, automated text reminders, missed-call recovery, review generation, and lead management to help businesses capture more opportunities and convert more customers.
              </motion.p>
            </div>

            {/* cube — same layout on mobile and desktop */}
            <motion.div
              className="relative w-full max-w-[28rem] md:max-w-[36rem] lg:max-w-[48rem] xl:max-w-[56rem] h-72 md:h-96 lg:h-[34rem] xl:h-[40rem] mt-10 mx-auto"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[22rem] h-[22rem] md:w-[34rem] md:h-[34rem] lg:w-[48rem] lg:h-[48rem] xl:w-[56rem] xl:h-[56rem] rounded-full bg-[#2DD4BF]/10 blur-3xl pointer-events-none" />
              <HeroCanvas className="absolute inset-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Selector */}
      <section className="relative py-8 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 gap-4 max-w-5xl mx-auto">
            {mainServices.map((service, index) => {
              const Icon = service.icon;
              const isLast = index === mainServices.length - 1;

              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`
                    group relative p-6 rounded-2xl transition-all duration-300
                    ${isLast ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full' : ''}
                    ${
                      activeService === index
                        ? 'bg-gradient-to-br from-[#2DD4BF]/20 to-[#2DD4BF]/20 border-2 border-[#2DD4BF] shadow-xl shadow-[#2DD4BF]/20'
                        : 'bg-white/90 backdrop-blur-sm border-2 border-gray-200 hover:border-[#2DD4BF] shadow-md'
                    }
                  `}
                >
                  <div className="flex flex-col items-center text-center space-y-3">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeService === index
                        ? 'bg-gradient-to-br from-[#5EEAD4] to-[#14B8A6] shadow-lg shadow-[#2DD4BF]/30'
                        : 'bg-[#2DD4BF]/10 group-hover:bg-[#2DD4BF]/20'
                    }`}>
                      <Icon size={28} className={`${activeService === index ? 'text-white' : 'text-[#14B8A6]'}`} />
                    </div>
                    <h3 className={`font-bold text-sm md:text-base ${
                      activeService === index ? 'text-[#F4FAFB]' : 'text-[#0A0E12] group-hover:text-[#142433]'
                    }`}>
                      {service.title}
                    </h3>
                  </div>
                  {activeService === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/10 via-[#2DD4BF]/10 to-transparent rounded-2xl animate-pulse-slow"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service Detail Section */}
      <section className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Service Header */}
          <div className="mb-16 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#5EEAD4] to-[#14B8A6] rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-all"></div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-[#5EEAD4] to-[#14B8A6] rounded-2xl flex items-center justify-center shadow-2xl">
                  {React.createElement(currentService.icon, { size: 40, className: "text-white" })}
                </div>
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#F4FAFB] mb-2">
                  {currentService.title}
                </h2>
                <p className="text-xl text-[#2DD4BF] font-semibold">
                  {currentService.tagline}
                </p>
              </div>
            </div>
            
            <p className="text-lg text-[#AEBAC4] leading-relaxed max-w-4xl">
              {currentService.fullDescription}
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#F4FAFB] mb-8 flex items-center gap-3">
              <Sparkles className="text-[#2DD4BF]" size={28} />
              Key Capabilities
            </h3>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              {currentService.keyFeatures.map((feature, index) => {
                const FeatureIcon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-4 md:p-6 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl hover:border-[#2DD4BF] transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-[#2DD4BF]/10"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#2DD4BF]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#2DD4BF]/20 to-[#2DD4BF]/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <FeatureIcon size={24} className="text-[#14B8A6]" />
                      </div>
                      <h4 className="text-xl font-bold text-[#0A0E12] mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-[#475569] leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technologies */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#F4FAFB] mb-8 flex items-center gap-3">
              <Terminal className="text-[#2DD4BF]" size={28} />
              Technologies We Use
            </h3>
            <div className="flex flex-wrap gap-3">
              {currentService.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="group px-6 py-3 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm hover:border-[#2DD4BF] hover:bg-[#2DD4BF]/5 transition-all duration-300 cursor-default"
                >
                  <span className="text-[#0A0E12] font-medium group-hover:text-[#14B8A6] transition-colors">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>


          {/* Expected Outcomes */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-[#F4FAFB] mb-8 flex items-center gap-3">
              <TrendingUp className="text-[#2DD4BF]" size={28} />
              Expected Outcomes
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {currentService.outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-md hover:border-[#2DD4BF] transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#5EEAD4] to-[#14B8A6] rounded-full flex items-center justify-center mt-1">
                    <CheckCircle size={16} className="text-white" />
                  </div>
                  <p className="text-[#0A0E12] text-lg leading-relaxed">
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="relative mt-20 p-12 rounded-3xl bg-gradient-to-br from-[#2DD4BF]/10 via-[#2DD4BF]/10 to-[#2DD4BF]/10 border-2 border-[#2DD4BF]/30 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2DD4BF]/5 to-transparent animate-pulse-slow"></div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-bold text-[#F4FAFB] mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-xl text-[#AEBAC4] mb-8">
                Let's discuss how {currentService.title.toLowerCase()} can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a
    href="#"
    onClick={(e) => { e.preventDefault(); goToSection('contact'); }}
    className="group px-8 py-4 bg-gradient-to-r from-[#5EEAD4] to-[#14B8A6] hover:from-[#2DD4BF] hover:to-[#2DD4BF] text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2 font-semibold"
  >
    <span>Start Your Project</span>
    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
  </a>
  <a
    href="#"
    onClick={(e) => { e.preventDefault(); goToSection('contact'); }}
    className="group px-8 py-4 bg-transparent border-2 border-[#2DD4BF] text-[#2DD4BF] hover:bg-[#2DD4BF]/10 hover:border-[#2DD4BF] hover:text-[#2DD4BF] rounded-lg transition-all duration-300 font-semibold"
  >
    Schedule Consultation
  </a>
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.25; transform: scale(1.05); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        .delay-1500 {
          animation-delay: 1500ms;
        }

        .delay-2000 {
          animation-delay: 2000ms;
        }

        html {
          scroll-behavior: smooth;
        }

        /* Navbar-specific animations */
        @keyframes plexura-glow-slow {
          0% { 
            color: #F4FAFB;
            text-shadow: none;
            filter: drop-shadow(0 0 0px transparent);
          }
          3% {
            color: #2DD4BF;
            text-shadow: 0 0 10px #2DD4BF, 0 0 15px #2DD4BF;
            filter: drop-shadow(0 0 10px #2DD4BF) drop-shadow(0 0 15px #2DD4BF);
          }
          6% { 
            color: #2DD4BF;
            text-shadow: 0 0 20px #2DD4BF, 0 0 30px #2DD4BF, 0 0 40px #2DD4BF;
            filter: drop-shadow(0 0 20px #2DD4BF) drop-shadow(0 0 30px #2DD4BF);
          }
          9% {
            color: #2DD4BF;
            text-shadow: 0 0 10px #2DD4BF, 0 0 15px #2DD4BF;
            filter: drop-shadow(0 0 10px #2DD4BF) drop-shadow(0 0 15px #2DD4BF);
          }
          12% { 
            color: #F4FAFB;
            text-shadow: none;
            filter: drop-shadow(0 0 0px transparent);
          }
          100% { 
            color: #F4FAFB;
            text-shadow: none;
            filter: drop-shadow(0 0 0px transparent);
          }
        }
        
        .plexura-glow-slow {
          animation: plexura-glow-slow 10s ease-in-out infinite;
        }

        @keyframes logo-tech-pulse {
          0%, 100% {
            filter: drop-shadow(0 0 2px rgba(125, 211, 252, 0.3)) 
                    drop-shadow(0 0 8px rgba(234, 88, 12, 0.2))
                    brightness(1);
            transform: scale(1) rotate(0deg);
          }
          25% {
            filter: drop-shadow(0 0 8px rgba(125, 211, 252, 0.6)) 
                    drop-shadow(0 0 16px rgba(234, 88, 12, 0.4))
                    drop-shadow(0 0 24px rgba(61, 43, 95, 0.3))
                    brightness(1.15);
            transform: scale(1.03) rotate(1deg);
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(125, 211, 252, 0.8)) 
                    drop-shadow(0 0 20px rgba(234, 88, 12, 0.5))
                    drop-shadow(0 0 32px rgba(61, 43, 95, 0.4))
                    brightness(1.2);
            transform: scale(1.05) rotate(0deg);
          }
          75% {
            filter: drop-shadow(0 0 8px rgba(125, 211, 252, 0.6)) 
                    drop-shadow(0 0 16px rgba(234, 88, 12, 0.4))
                    drop-shadow(0 0 24px rgba(61, 43, 95, 0.3))
                    brightness(1.15);
            transform: scale(1.03) rotate(-1deg);
          }
        }
        
        .logo-tech-pulse {
          animation: logo-tech-pulse 4s ease-in-out infinite;
          transform-origin: center;
          will-change: filter, transform;
        }

        .logo-tech-pulse:hover {
          animation-duration: 2s;
        }

        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes gradient-shift {
          0%, 100% {
            transform: translateX(-100%);
          }
          50% {
            transform: translateX(100%);
          }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
        }

        .grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          height: 100%;
          width: 100%;
        }
      `}</style>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}