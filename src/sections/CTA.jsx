import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeInDown,
  staggerContainer,
  AnimatedSection
} from '../components/ui';

export default function CTA({ isMobile }) {
  return (
    <>
      {/* ============================================ */}
      {/* CTA — compact circular panel */}
      {/* ============================================ */}

      <AnimatedSection
        isMobile={isMobile}
        className="
          relative
          px-4
          py-10
          sm:px-6
          lg:py-20
          bg-[radial-gradient(circle_at_50%_50%,#1B1E23_0%,#101216_45%,#07090B_78%,#050608_100%)]
        "
      >
        <div
          className="
            relative
            mx-auto
            flex
            aspect-square
            w-full
            max-w-[350px]
            items-center
            justify-center
            overflow-hidden
            rounded-full
            border
            border-[#D6A84A]/25
            bg-gradient-to-br
            from-[#1B1E23]
            via-[#111419]
            to-[#090B0E]
            px-7
            shadow-2xl
            shadow-black/50
          "
        >

          {/* texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                'repeating-linear-gradient(115deg, rgba(214,168,74,0.7) 0, rgba(214,168,74,0.7) 1px, transparent 1px, transparent 80px)'
            }}
          />

          {/* inner gold glow */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[70%]
              w-[70%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#D6A84A]/10
              blur-3xl
            "
          />

          {/* accent rose-gold glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-16
              -top-16
              h-44
              w-44
              rounded-full
              bg-[#C98072]/15
              blur-3xl
            "
          />

          {/* decorative word */}
          <div
            className="
              pointer-events-none
              absolute
              bottom-3
              left-1/2
              hidden
              -translate-x-1/2
              select-none
              font-display
              text-[5rem]
              font-extrabold
              leading-none
              tracking-tight
              text-[#F1D078]/[0.035]
              md:block
              lg:text-[8rem]
            "
          >
            GROW
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative z-10 mx-auto max-w-[390px] text-center"
          >

            <motion.div
              variants={fadeInDown}
              className="
                mx-auto
                mb-3
                inline-flex
                rounded-full
                border
                border-[#D6A84A]/25
                bg-[#D6A84A]/[0.07]
                px-3
                py-1.5
                backdrop-blur
              "
            >
              <p
                className="
                  font-mono
                  text-[0.5rem]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#E2B65A]
                  sm:text-[0.62rem]
                "
              >
                Growth System
              </p>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="
                mx-auto
                mb-3
                max-w-[340px]
                font-display
                text-[1.45rem]
                font-bold
                leading-[1.03]
                tracking-tight
                text-[#F4F5F6]
                sm:text-[2rem]
                md:text-[2.45rem]
                lg:text-[3rem]
              "
            >
              Turn More Visitors Into Customers
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="
                mx-auto
                mb-5
                max-w-[310px]
                text-xs
                leading-relaxed
                text-[#AEB4BB]
                sm:max-w-[360px]
                sm:text-sm
                md:text-base
              "
            >
              Build a sharper website and follow-up system that captures and
              converts more leads.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-2.5
                sm:flex-row
                sm:gap-3
              "
            >

              <motion.a
                href="#contact"
                className="
                  group
                  inline-flex
                  w-fit
                  items-center
                  justify-center
                  gap-1.5
                  rounded-full
                  bg-gradient-to-r
                  from-[#B88348]
                  via-[#D6A84A]
                  to-[#F1D078]
                  px-4
                  py-2.5
                  text-xs
                  font-bold
                  text-[#08090B]
                  shadow-lg
                  shadow-[#D6A84A]/20
                  sm:px-5
                  sm:py-3
                  sm:text-sm
                "
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Build System

                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity
                  }}
                >
                  <ArrowRight size={15} />
                </motion.span>
              </motion.a>

              <motion.a
                href="tel:+18013478072"
                className="
                  group
                  inline-flex
                  w-fit
                  items-center
                  justify-center
                  gap-1.5
                  rounded-full
                  border-2
                  border-[#C98072]/35
                  bg-[#C98072]/[0.06]
                  px-4
                  py-2.5
                  text-xs
                  font-semibold
                  text-[#D69282]
                  backdrop-blur
                  transition-colors
                  hover:border-[#C98072]
                  hover:bg-[#C98072]/10
                  hover:text-[#E3A092]
                  sm:px-5
                  sm:py-3
                  sm:text-sm
                "
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={15} />
                Call
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* ============================================ */}
    </>
  );
}