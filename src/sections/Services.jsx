import React from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Code,
  Globe,
  Layers,
  Megaphone,
  Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  fadeInUp,
  fadeInDown,
  staggerContainer,
  AnimatedSection
} from '../components/ui';

const services = [
  {
    icon: Globe,
    title: "Customer Acquisition Systems",
    description:
      "More than a website—we build connected growth systems that help businesses capture leads, manage opportunities, automate follow-up, and convert more visitors into customers.",
    features: [
      "Lead Capture Systems",
      "CRM Integration",
      "Conversion-Focused Websites",
      "Customer Journey Strategy"
    ],
    highlights: [
      "Turn Visitors Into Customers",
      "Built Around Leads, Not Just Looks",
      "Website + CRM + Automation Connected"
    ],
    color: "from-[#B88348] to-[#C98072]"
  },
  {
    icon: Layers,
    title: "CRM & Lead Management",
    description:
      "We organize every lead, call, form submission, and opportunity inside a managed CRM so businesses can track prospects, follow up faster, and stop losing customers in the gaps.",
    features: [
      "CRM Setup & Management",
      "Lead Pipelines",
      "Contact Management",
      "Opportunity Tracking"
    ],
    highlights: [
      "Track Every Lead in One Place",
      "Clear Sales Pipeline Visibility",
      "Designed for Local Business Growth"
    ],
    color: "from-[#D6A84A] to-[#C98072]"
  },
  {
    icon: Megaphone,
    title: "Booking & Automated Follow-Up",
    description:
      "We install booking systems, automated text message reminders, email follow-up, and customer communication workflows that help businesses book more appointments and reduce no-shows.",
    features: [
      "Online Booking Systems",
      "Automated Text Reminders",
      "Email Follow-Up",
      "Customer Notifications"
    ],
    highlights: [
      "Book More Appointments",
      "Reduce Missed Opportunities",
      "Automated Customer Communication"
    ],
    color: "from-[#F1D078] to-[#B88348]"
  },
  {
    icon: Code,
    title: "Premium Website Development",
    description:
      "We design and engineer high-performance websites built to support lead generation, automation, booking, and long-term growth—not just look good on the surface.",
    features: [
      "Custom Website Design",
      "Landing Page Development",
      "Lead Capture Forms",
      "Performance Optimization"
    ],
    highlights: [
      "Built to Convert",
      "Mobile-First Experience",
      "Custom-Coded When Needed"
    ],
    color: "from-[#C98072] to-[#D6A84A]"
  },
  {
    icon: Search,
    title: "Lead Recovery & Reputation Growth",
    description:
      "We help businesses recover missed calls, generate more reviews, monitor reputation, and re-engage prospects with systems designed to turn lost opportunities into revenue.",
    features: [
      "Missed Call Recovery",
      "Review Generation",
      "Reputation Monitoring",
      "Lead Re-Engagement"
    ],
    highlights: [
      "Recover Lost Leads Automatically",
      "Generate More Google Reviews",
      "Protect and Grow Your Reputation"
    ],
    color: "from-[#B88348] to-[#F1D078]"
  }
];

export default function Services({
  isMobile,
  activeService,
  setActiveService
}) {
  return (
    <>
      {/* SERVICES — numbered index, expanding rows */}
      {/* ============================================ */}

      <AnimatedSection
        isMobile={isMobile}
        id="services"
        className="
          overview
          relative
          py-24
          lg:py-32
          px-6
          bg-[radial-gradient(circle_at_50%_0%,#25282D_0%,#14171B_38%,#090B0E_72%,#050608_100%)]
        "
      >
        <div className="max-w-7xl mx-auto">

          {/* editorial header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid lg:grid-cols-12 gap-6 items-end mb-12 lg:mb-16"
          >
            <div className="lg:col-span-7 text-center lg:text-left">

              <motion.p
                variants={fadeInDown}
                className="
                  font-mono
                  text-xs
                  tracking-[0.3em]
                  uppercase
                  text-[#D6A84A]
                  mb-5
                "
              >
                What We Deliver
              </motion.p>

              <motion.h2
                variants={fadeInUp}
                className="
                  font-display
                  text-4xl
                  md:text-6xl
                  font-bold
                  text-[#F4F5F6]
                  leading-[1.02]
                "
              >
                Customer Acquisition{' '}

                <span
                  className="
                    bg-gradient-to-r
                    from-[#F1D078]
                    via-[#D6A84A]
                    to-[#C98072]
                    bg-clip-text
                    text-transparent
                  "
                >
                  Systems
                </span>
              </motion.h2>
            </div>

            <motion.p
              variants={fadeInUp}
              className="
                lg:col-span-5
                text-[#AEB4BB]
                text-lg
                leading-relaxed
                text-center
                lg:text-left
                lg:pb-2
              "
            >
              Websites, CRM automation, booking systems, missed-call recovery,
              text reminders, and lead management built to help businesses
              capture and convert more customers
            </motion.p>
          </motion.div>

          {/* mobile-only prompt — service rows start collapsed on mobile */}
          {activeService === null && (
            <div className="lg:hidden flex justify-center mb-8">
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  border
                  border-[#D6A84A]/40
                  bg-[#D6A84A]/[0.07]
                  font-mono
                  text-[11px]
                  tracking-[0.2em]
                  uppercase
                  text-[#F1D078]
                "
              >
                <Plus size={13} />
                Tap a service for details
              </span>
            </div>
          )}

          {/* index rows */}
          <div
            className="
              bg-gradient-to-br
              from-[#1B1E23]
              via-[#111419]
              to-[#090B0E]
              rounded-[2rem]
              px-6
              lg:px-10
              py-1
              border
              border-[#D6A84A]/20
              shadow-2xl
              shadow-black/50
            "
          >
            {services.map((service, index) => {
              const isActive = activeService === index;

              return (
                <div
                  key={index}
                  className="border-b border-[#D9DEE3]/10"
                >
                  <button
                    onClick={() =>
                      setActiveService(isActive ? null : index)
                    }
                    className="
                      w-full
                      group
                      grid
                      grid-cols-12
                      items-center
                      gap-3
                      lg:gap-4
                      py-7
                      lg:py-10
                      text-left
                    "
                  >
                    <span
                      className={`
                        col-span-10
                        lg:col-span-7
                        font-display
                        text-2xl
                        md:text-4xl
                        lg:text-[2.6rem]
                        font-bold
                        leading-tight
                        transition-colors
                        duration-300
                        ${
                          isActive
                            ? 'text-[#F1D078]'
                            : 'text-[#F4F5F6] group-hover:text-[#E2B65A]'
                        }
                      `}
                    >
                      {service.title}
                    </span>

                    <span className="hidden lg:flex col-span-4 flex-wrap gap-2">
                      {service.features.slice(0, 2).map((f, fi) => (
                        <span
                          key={fi}
                          className="
                            font-mono
                            text-[10px]
                            uppercase
                            tracking-[0.15em]
                            px-3
                            py-1.5
                            rounded-full
                            border
                            border-[#D9DEE3]/15
                            text-[#969DA5]
                          "
                        >
                          {f}
                        </span>
                      ))}
                    </span>

                    <span
                      className={`
                        col-span-2
                        lg:col-span-1
                        justify-self-end
                        w-11
                        h-11
                        rounded-full
                        border
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                        ${
                          isActive
                            ? 'bg-gradient-to-br from-[#B88348] via-[#D6A84A] to-[#C98072] border-[#D6A84A] text-[#090B0E] rotate-45 shadow-[0_0_20px_rgba(214,168,74,0.25)]'
                            : 'border-[#D9DEE3]/20 text-[#AEB4BB] group-hover:border-[#D6A84A] group-hover:text-[#F1D078]'
                        }
                      `}
                    >
                      <Plus size={18} />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{
                          height: 0,
                          opacity: 0
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1
                        }}
                        exit={{
                          height: 0,
                          opacity: 0
                        }}
                        transition={{
                          duration: 0.45,
                          ease: [0.22, 1, 0.36, 1]
                        }}
                        className="overflow-hidden"
                      >
                        <div className="grid lg:grid-cols-12 gap-8 pb-10 lg:pb-12">

                          <p
                            className="
                              lg:col-span-5
                              text-[#AEB4BB]
                              leading-relaxed
                              text-base
                              lg:text-lg
                            "
                          >
                            {service.description}
                          </p>

                          <div className="lg:col-span-4 space-y-2.5">
                            {service.features.map((feature, fi) => (
                              <div
                                key={fi}
                                className="
                                  flex
                                  items-start
                                  gap-2.5
                                  text-sm
                                  text-[#D4D7DB]
                                "
                              >
                                <Check
                                  size={15}
                                  className="
                                    text-[#D6A84A]
                                    mt-0.5
                                    flex-shrink-0
                                  "
                                />

                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>

                          <div className="lg:col-span-3 flex flex-col justify-between gap-6">

                            <div className="space-y-2.5">
                              {service.highlights.map((hl, hi) => (
                                <div
                                  key={hi}
                                  className="
                                    flex
                                    items-start
                                    gap-2.5
                                    text-sm
                                    text-[#AEB4BB]
                                  "
                                >
                                  <span
                                    className="
                                      w-1.5
                                      h-1.5
                                      mt-1.5
                                      bg-[#C98072]
                                      rounded-full
                                      flex-shrink-0
                                      shadow-[0_0_8px_rgba(201,128,114,0.45)]
                                    "
                                  />

                                  <span>{hl}</span>
                                </div>
                              ))}
                            </div>

                            <a
                              href="#contact"
                              className="
                                inline-flex
                                items-center
                                gap-2
                                font-semibold
                                text-[#E2B65A]
                                hover:text-[#F1D078]
                                hover:gap-3
                                transition-all
                              "
                            >
                              Get Started
                              <ArrowRight size={16} />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* view all */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-end mt-8"
          >
            <Link
              to="/services"
              onClick={() => window.scrollTo(0, 0)}
              className="
                group
                inline-flex
                items-center
                gap-2
                font-semibold
                text-[#D6A84A]
                hover:text-[#F1D078]
                transition-colors
              "
            >
              <span
                className="
                  font-mono
                  text-xs
                  tracking-[0.25em]
                  uppercase
                "
              >
                View All Services
              </span>

              <span
                className="
                  w-9
                  h-9
                  rounded-full
                  border
                  border-[#D6A84A]/40
                  group-hover:border-[#F1D078]
                  group-hover:bg-gradient-to-br
                  group-hover:from-[#B88348]
                  group-hover:via-[#D6A84A]
                  group-hover:to-[#C98072]
                  group-hover:text-[#090B0E]
                  group-hover:shadow-[0_0_20px_rgba(214,168,74,0.25)]
                  flex
                  items-center
                  justify-center
                  transition-all
                "
              >
                <ArrowUpRight size={16} />
              </span>
            </Link>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ============================================ */}
    </>
  );
}