'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { FiArrowDown } from 'react-icons/fi'

const STATS = [
  { number: '500+', label: 'Mutlu Çift' },
  { number: '10+', label: 'Yıl Deneyim' },
  { number: '1000+', label: 'Organizasyon' }
]

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Layer 1 – background image (slowest)
  const bgY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['0%', '35%'])
  // Layer 2 – decorative shapes (medium, opposite direction)
  const deco1Y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['0%', '-20%'])
  const deco2Y = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['0%', '-12%'])
  // Layer 3 – content fades out
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])
  const contentY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['0%', '15%'])

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
  }
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } }
  }

  return (
    <section ref={ref} className="relative h-screen min-h-[680px] overflow-hidden bg-cream">

      {/* ─── LAYER 1: Parallax background image ─── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 will-change-transform">
        <div className="absolute inset-0 bg-hero-pattern bg-cover bg-center scale-110" />
        {/* Dual gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream/60 via-transparent to-transparent" />
      </motion.div>

      {/* ─── LAYER 2: Floating decorative shapes ─── */}
      <motion.div style={{ y: deco1Y }} className="absolute inset-0 pointer-events-none will-change-transform">
        {/* Large blurred circle top-right */}
        <motion.div
          animate={prefersReducedMotion ? {} : { scale: [1, 1.08, 1], opacity: [0.5, 0.7, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-16 right-8 sm:right-24 w-56 h-56 rounded-full bg-primary/10 blur-3xl"
        />
        {/* Gold shimmer mid-right */}
        <motion.div
          animate={prefersReducedMotion ? {} : { scale: [1, 1.12, 1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute top-1/3 right-16 w-40 h-40 rounded-full bg-gold/8 blur-2xl"
        />
        {/* Thin decorative gold circle outline */}
        <div className="absolute top-1/4 right-12 sm:right-40 w-64 h-64 rounded-full border border-gold/20 hidden sm:block" />
        <div className="absolute top-1/4 right-16 sm:right-44 w-48 h-48 rounded-full border border-primary/15 hidden sm:block" />
      </motion.div>

      <motion.div style={{ y: deco2Y }} className="absolute inset-0 pointer-events-none will-change-transform">
        {/* Bottom-left blob */}
        <motion.div
          animate={prefersReducedMotion ? {} : { scale: [1, 1.06, 1], y: [0, -8, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-28 left-8 w-72 h-72 rounded-full bg-secondary/10 blur-3xl"
        />
        {/* Small gold dot accent */}
        <div className="absolute top-32 left-1/3 w-2 h-2 rounded-full bg-gold/40 animate-float hidden sm:block" />
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 rounded-full bg-primary/30 animate-float-slow hidden sm:block" />
        <div className="absolute bottom-40 right-1/3 w-2 h-2 rounded-full bg-gold/30 animate-float-delay hidden sm:block" />
      </motion.div>

      {/* ─── LAYER 3: Main content ─── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex h-full items-center will-change-transform"
      >
        <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            {/* Eyebrow */}
            <motion.div variants={item} className="eyebrow">
              <span className="eyebrow-line" />
              <span className="eyebrow-text">Mai Organizasyon</span>
              <span className="eyebrow-line" />
            </motion.div>

            {/* Headline */}
            <motion.div variants={item}>
              <p className="font-script text-6xl sm:text-7xl lg:text-8xl text-primary leading-none mb-2">
                En Güzel
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-dark leading-tight">
                Anlarınız İçin<br />
                <span className="text-foreground">Buradayız</span>
              </h1>
            </motion.div>

            {/* Gold divider */}
            <motion.div variants={item} className="flex items-center gap-4 my-7 max-w-xs">
              <span className="h-px flex-1 bg-gold/40" />
              <span className="text-gold text-lg">✦</span>
              <span className="h-px flex-1 bg-gold/40" />
            </motion.div>

            {/* Subtitle */}
            <motion.p variants={item} className="font-serif text-lg text-warm-dark/70 leading-relaxed max-w-sm italic">
              &ldquo;Sizin hayallerinizi gerçeğe dönüştürmek için her imkanı ve fırsatı değerlendiriyoruz.&rdquo;
            </motion.p>

            {/* CTAs */}
            <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
              <a href="#services" className="btn-primary">
                Hizmetlerimiz
              </a>
              <a href="#about" className="btn-outline-gold">
                Hikayemiz
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="mt-14 flex items-center gap-8 sm:gap-12">
              {STATS.map((s, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="font-script text-3xl sm:text-4xl text-primary leading-none">{s.number}</div>
                  <div className="text-xs text-warm-dark/50 mt-1 uppercase tracking-wider font-sans">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-warm-dark/40"
      >
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={18} />
        </motion.div>
        <span className="text-[10px] tracking-[0.3em] uppercase font-sans">Kaydır</span>
      </motion.div>
    </section>
  )
}
