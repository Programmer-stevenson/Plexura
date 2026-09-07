import React from 'react';
import {
  Code,
  Smartphone,
  Globe,
  Layers,
  TrendingUp,
  Target,
  ArrowUpRight,
  Database,
  Calendar,
  MessageSquare,
  PhoneCall,
  Star,
  Workflow
} from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeInDown,
  fadeInRight,
  staggerContainer,
  staggerContainerFast,
  AnimatedSection
} from '../components/ui';

export default function About({ isMobile }) {
  return (
    <>
      {/* ABOUT — growth systems, capabilities, process */}
      {/* ============================================ */}

      <AnimatedSection
        isMobile={isMobile}
        id="about"
        className="
          relative
          py-24
          lg:py-32
          px-6
          bg-[radial-gradient(circle_at_50%_0%,#25282D_0%,#14171B_38%,#090B0E_72%,#050608_100%)]
        "
      >
        <div className="max-w-7xl mx-auto">

          {/* header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-14 lg:mb-20 text-center lg:text-left"
          >
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
              How We Build
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
              More Than a Website.{' '}

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
                A Growth System.
              </span>
            </motion.h2>
          </motion.div>

          {/* manifesto + performance rail */}
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-16 lg:mb-24">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="
                lg:col-span-7
                space-y-8
                bg-gradient-to-br
                from-[#1B1E23]
                via-[#111419]
                to-[#090B0E]
                rounded-3xl
                p-8
                lg:p-10
                border
                border-[#D6A84A]/20
                shadow-2xl
                shadow-black/50
              "
            >
              <motion.p
                variants={fadeInUp}
                className="
                  text-xl
                  md:text-2xl
                  lg:text-[1.7rem]
                  leading-snug
                  text-[#E8EAED]
                  font-medium
                "
              >
                Plexura builds{' '}

                <span
                  className="
                    text-[#F1D078]
                    underline
                    decoration-[#C98072]
                    decoration-4
                    underline-offset-4
                  "
                >
                  Customer Acquisition Systems
                </span>{' '}

                that connect your website, CRM, booking flow, text reminders,
                missed-call recovery, and follow-up into one growth engine.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="
                  text-lg
                  md:text-xl
                  leading-relaxed
                  text-[#AEB4BB]
                "
              >
                A modern website should do more than look good. It should
                capture leads, organize opportunities, automate customer
                communication, and help turn interest into booked appointments.
              </motion.p>

              <motion.p
                variants={fadeInUp}
                className="
                  text-lg
                  md:text-xl
                  leading-relaxed
                  text-[#AEB4BB]
                "
              >
                We combine premium web design, custom development, CRM
                automation, online booking, review generation, and lead recovery
                systems to help businesses stop losing opportunities and grow
                with more clarity.
              </motion.p>

              {/* system rule */}
              <motion.div
                variants={fadeInUp}
                className="
                  flex
                  flex-wrap
                  gap-2.5
                  pt-6
                  border-t
                  border-[#D9DEE3]/10
                "
              >
                {[
                  "Websites",
                  "CRM Automation",
                  "Booking Systems",
                  "Text Reminders",
                  "Lead Recovery"
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="
                      font-mono
                      text-[11px]
                      uppercase
                      tracking-[0.15em]
                      px-3.5
                      py-2
                      rounded-full
                      bg-[#D6A84A]/[0.07]
                      border
                      border-[#D6A84A]/25
                      text-[#E2B65A]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* growth systems rail */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="
                lg:col-span-5
                bg-gradient-to-br
                from-[#1B1E23]
                via-[#111419]
                to-[#090B0E]
                rounded-3xl
                p-8
                lg:p-10
                border
                border-[#D6A84A]/20
                shadow-2xl
                shadow-black/50
              "
            >
              <motion.p
                variants={fadeInDown}
                className="
                  font-mono
                  text-[11px]
                  tracking-[0.25em]
                  uppercase
                  text-[#969DA5]
                  mb-2
                "
              >
                Growth System Components
              </motion.p>

              <div
                className="
                  divide-y
                  divide-[#D9DEE3]/10
                  border-y
                  border-[#D9DEE3]/10
                "
              >
                {[
                  {
                    icon: Database,
                    title: 'CRM & Lead Management',
                    description: 'Track every call, form, contact, and opportunity'
                  },
                  {
                    icon: Calendar,
                    title: 'Appointment Booking',
                    description: 'Make it easier for customers to schedule'
                  },
                  {
                    icon: MessageSquare,
                    title: 'Automated Follow-Up',
                    description: 'Text and email workflows that keep leads engaged'
                  },
                  {
                    icon: PhoneCall,
                    title: 'Missed-Call Recovery',
                    description: 'Automatically respond when calls are missed'
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInRight}
                    className="
                      group
                      flex
                      items-center
                      gap-5
                      py-5
                      cursor-default
                    "
                    whileHover={!isMobile ? { x: 8 } : undefined}
                  >
                    <div
                      className="
                        w-11
                        h-11
                        rounded-xl
                        bg-gradient-to-br
                        from-[#B88348]
                        via-[#D6A84A]
                        to-[#C98072]
                        flex
                        items-center
                        justify-center
                        flex-shrink-0
                        shadow-lg
                        shadow-[#D6A84A]/10
                      "
                    >
                      <value.icon
                        size={20}
                        className="text-[#090B0E]"
                      />
                    </div>

                    <div>
                      <h4
                        className="
                          text-base
                          font-bold
                          text-[#F4F5F6]
                        "
                      >
                        {value.title}
                      </h4>

                      <p
                        className="
                          text-sm
                          text-[#969DA5]
                        "
                      >
                        {value.description}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className="
                        ml-auto
                        text-[#F1D078]
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                      "
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* capability cells */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainerFast}
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              rounded-3xl
              overflow-hidden
              mb-16
              lg:mb-24
              bg-gradient-to-br
              from-[#1B1E23]
              via-[#111419]
              to-[#090B0E]
              border
              border-[#D6A84A]/20
              shadow-2xl
              shadow-black/50
            "
          >
            {[
              {
                icon: TrendingUp,
                title: 'Premium Websites',
                description: 'Designed to capture and convert leads'
              },
              {
                icon: Workflow,
                title: 'CRM Automation',
                description: 'Pipelines, workflows, and lead tracking'
              },
              {
                icon: Calendar,
                title: 'Booking Systems',
                description: 'Appointments, reminders, and scheduling'
              },
              {
                icon: Star,
                title: 'Reputation Growth',
                description: 'Reviews, recovery, and customer follow-up'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`
                  p-6
                  lg:p-8
                  ${index % 2 === 1 ? 'border-l' : ''}
                  ${index >= 2 ? 'border-t lg:border-t-0' : ''}
                  ${index > 0 ? 'lg:border-l' : ''}
                  border-[#D9DEE3]/10
                  group
                  hover:bg-[#D6A84A]/[0.04]
                  transition-colors
                `}
              >
                <item.icon
                  size={22}
                  className="
                    text-[#D6A84A]
                    mb-5
                    group-hover:text-[#F1D078]
                    transition-colors
                  "
                />

                <h4
                  className="
                    font-display
                    text-lg
                    font-bold
                    text-[#F4F5F6]
                    mb-1.5
                  "
                >
                  {item.title}
                </h4>

                <p
                  className="
                    text-sm
                    text-[#969DA5]
                    leading-relaxed
                  "
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </AnimatedSection>
    </>
  );
}