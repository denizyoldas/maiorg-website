'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { FiCheck } from 'react-icons/fi'

const FEATURES = [
  'Profesyonel ve deneyimli organizasyon ekibi',
  'Kişiselleştirilmiş planlama ve özel tasarım',
  '7/24 destek, aday tarih ve mekan danışmanlığı'
]

export default function AboutUs() {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  // Image parallax — moves up slightly as section scrolls
  const imgY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['8%', '-8%'])
  // Decorative circle moves opposite
  const decoY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['-5%', '5%'])

  return (
    <section ref={ref} className="relative py-28 sm:py-36 overflow-hidden bg-white" id="about">
      {/* Subtle background blob */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-ultra blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* ─── Images with parallax ─── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative order-2 lg:order-1"
        >
          {/* Main image with parallax */}
          <motion.div style={{ y: imgY }} className="relative will-change-transform">
            <div className="overflow-hidden rounded-2xl shadow-2xl aspect-[4/5]">
              <img src="/images/a2.jpg" alt="Mai Organizasyon düğün" className="w-full h-full object-cover scale-110" />
              {/* Rose gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
          </motion.div>

          {/* Floating small image */}
          <motion.div
            style={{ y: decoY }}
            className="absolute -bottom-8 -right-6 sm:-right-10 w-36 sm:w-44 overflow-hidden rounded-xl shadow-xl border-4 border-white will-change-transform"
          >
            <img src="/images/a1.webp" alt="düğün anları" className="w-full h-full object-cover aspect-square" />
          </motion.div>

          {/* Gold frame decoration */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gold/50 rounded-tl-xl pointer-events-none" />
          <div className="absolute -bottom-14 -right-4 sm:-right-14 w-24 h-24 border-r-2 border-b-2 border-gold/50 rounded-br-xl pointer-events-none" />

          {/* Stat badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute top-6 -right-4 sm:-right-8 bg-white rounded-xl shadow-lg px-4 py-3 border border-border"
          >
            <div className="font-script text-2xl text-primary leading-none">500+</div>
            <div className="text-xs text-warm-dark/60 font-sans uppercase tracking-wider mt-0.5">Mutlu Çift</div>
          </motion.div>
        </motion.div>

        {/* ─── Text content ─── */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="order-1 lg:order-2"
        >
          <div className="eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Hakkımızda</span>
          </div>

          <h2 className="section-heading">
            Hayatınızın En{' '}
            <span className="font-script text-primary" style={{ fontSize: '1.1em' }}>Özel</span>{' '}
            Anları İçin
          </h2>

          <div className="flex items-center gap-4 my-6">
            <span className="h-px w-12 bg-gold/50" />
            <span className="font-script text-gold text-xl">✦</span>
          </div>

          <p className="font-serif text-lg text-warm-dark/70 leading-relaxed italic">
            &ldquo;Mai Organizasyon olarak hayatınızın her anında yanınızda olmak ve bu anları
            mükemmel bir şekilde doldurmak bizim en büyük ilkemizidir.&rdquo;
          </p>

          <p className="mt-5 text-warm-dark/60 leading-relaxed font-sans text-sm">
            Sizin hayallerinizi gerçeğe dönüştürmek için her imkanı ve fırsatı
            değerlendirerek olanakları sonsuza indirgemeyi hedefliyoruz. On yılı aşkın
            deneyimimizle her organizasyonu özel kılıyoruz.
          </p>

          <ul className="mt-8 space-y-3">
            {FEATURES.map(f => (
              <li key={f} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <FiCheck className="text-primary" size={11} strokeWidth={3} />
                </span>
                <span className="text-sm text-warm-dark/70 font-sans">{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="btn-primary">Bizimle İletişime Geç</a>
            <a href="#services" className="btn-outline-gold">Hizmetlerimiz</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
