import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useSpring, AnimatePresence, useMotionValue, useMotionTemplate } from 'framer-motion';

// ============================================
// MOBILE DETECTION
// ============================================
const getIsMobile = () => typeof window !== 'undefined' && window.innerWidth < 1024;

// ============================================
// WRAPPER COMPONENTS - Static on mobile, animated on desktop
// ============================================

// Motion div wrapper - renders plain div on mobile
const MotionDiv = ({ children, className = "", style = {}, isMobile, ...motionProps }) => {
  if (isMobile) {
    return <div className={className} style={style}>{children}</div>;
  }
  return <motion.div className={className} style={style} {...motionProps}>{children}</motion.div>;
};

// Motion section wrapper
const MotionSection = ({ children, className = "", isMobile, ...motionProps }) => {
  if (isMobile) {
    return <section className={className}>{children}</section>;
  }
  return <motion.section className={className} {...motionProps}>{children}</motion.section>;
};

// Motion span wrapper
const MotionSpan = ({ children, className = "", isMobile, ...motionProps }) => {
  if (isMobile) {
    return <span className={className}>{children}</span>;
  }
  return <motion.span className={className} {...motionProps}>{children}</motion.span>;
};

// Motion anchor wrapper
const MotionA = ({ children, href, className = "", isMobile, ...motionProps }) => {
  if (isMobile) {
    return <a href={href} className={className}>{children}</a>;
  }
  return <motion.a href={href} className={className} {...motionProps}>{children}</motion.a>;
};

// Motion button wrapper
const MotionButton = ({ children, type, disabled, className = "", isMobile, ...motionProps }) => {
  if (isMobile) {
    return <button type={type} disabled={disabled} className={className}>{children}</button>;
  }
  return <motion.button type={type} disabled={disabled} className={className} {...motionProps}>{children}</motion.button>;
};

// ============================================
// ANIMATION VARIANTS (Desktop only)
// ============================================

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInDown = {
  hidden: { opacity: 0, y: -40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.04,
      ease: [0.22, 1, 0.36, 1]
    }
  })
};

// Magnetic button hook - DESKTOP ONLY
const useMagneticEffect = () => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x, y, handleMouseMove, handleMouseLeave };
};

// Section wrapper - STATIC on mobile
const AnimatedSection = ({ children, className = "", delay = 0, isMobile, id }) => {
  if (isMobile) {
    return <section id={id} className={className}>{children}</section>;
  }
  return <AnimatedSectionDesktop id={id} className={className} delay={delay}>{children}</AnimatedSectionDesktop>;
};

const AnimatedSectionDesktop = ({ children, className = "", delay = 0, id }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
};

// Counter - STATIC on mobile (shows final value)
const AnimatedCounter = ({ value, suffix = "", prefix = "", isMobile }) => {
  if (isMobile) {
    return <span>{prefix}{value}{suffix}</span>;
  }
  return <AnimatedCounterDesktop value={value} suffix={suffix} prefix={prefix} />;
};

const AnimatedCounterDesktop = ({ value, suffix = "", prefix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
};

// Floating element - STATIC on mobile
const FloatingElement = ({ children, offset = 50, className = "", isMobile }) => {
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }
  return <FloatingElementDesktop offset={offset} className={className}>{children}</FloatingElementDesktop>;
};

const FloatingElementDesktop = ({ children, offset = 50, className = "" }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

// Glow card - STATIC on mobile (no mouse tracking)
const GlowCard = ({ children, className = "", isMobile }) => {
  if (isMobile) {
    return <div className={`relative ${className}`}>{children}</div>;
  }
  return <GlowCardDesktop className={className}>{children}</GlowCardDesktop>;
};

const GlowCardDesktop = ({ children, className = "" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const background = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(125, 211, 252, 0.1), transparent 80%)`;

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      className={`relative group ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background }}
      />
      {children}
    </motion.div>
  );
};

export {
  getIsMobile,
  MotionDiv, MotionSection, MotionSpan, MotionA, MotionButton,
  fadeInUp, fadeInDown, fadeInLeft, fadeInRight, scaleIn,
  staggerContainer, staggerContainerFast, letterAnimation,
  useMagneticEffect,
  AnimatedSection, AnimatedCounter, FloatingElement, GlowCard,
};
