import { Variants } from 'framer-motion'

// Standard easing for smooth animations
const easeOut = [0.4, 0, 0.2, 1] as const;
const easeDramatic = [0.16, 1, 0.3, 1] as const;

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: easeOut,
    },
  }),
}

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: easeOut,
    },
  }),
}

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: easeOut,
    },
  }),
}

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: easeOut,
    },
  }),
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: easeDramatic,
    },
  }),
}

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
}

// Reveal animation for text/images
export const revealUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    clipPath: 'inset(100% 0 0 0)',
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    clipPath: 'inset(0% 0 0 0)',
    transition: {
      duration: 0.8,
      delay,
      ease: easeDramatic,
    },
  }),
}

// Parallax helper - returns transform value based on scroll
export const parallaxConfig = {
  slow: [0, 1] as const,
  medium: [0, 0.5] as const,
  fast: [0, 0.3] as const,
}

// Hover interactions
export const hoverScale = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
  transition: { duration: 0.2 },
}

export const hoverGlow = {
  whileHover: { 
    boxShadow: '0 0 30px rgba(212, 165, 116, 0.3)',
    borderColor: 'rgba(212, 165, 116, 0.5)',
  },
  transition: { duration: 0.3 },
}
