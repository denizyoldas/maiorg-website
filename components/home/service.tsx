'use client'

import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { FaCrown, FaCamera, FaMusic, FaUtensils, FaHeart, FaMagic } from 'react-icons/fa'
import shortid from 'shortid'

const SERVICES = [
  { id: shortid(), icon: FaCrown, title: 'Düğün Planı', subtitle: 'Hayalinizdeki düğünü planlar, mekân seçiminden süslemeye tüm detayları titizlikle organize ederiz.' },
  { id: shortid(), icon: FaMagic, title: 'Düğün Dekoru', subtitle: 'Tag seçimi ve günlük kurulumlarla mekanınıza büyüleyici bir ambiyans katıyoruz.' },
  { id: shortid(), icon: FaCamera, title: 'Fotoğraf & Video', subtitle: 'Profesyonel kadromuzla en güzel anlarınızı ölümsüzleştiriyoruz.' },
  { id: shortid(), icon: FaMusic, title: 'DJ & Müzik', subtitle: 'Profesyonel DJ ekibimizle dans pistini coşku içinde bırakın.' },
  { id: shortid(), icon: FaUtensils, title: 'Yemek Servisi', subtitle: 'Anlaşmalı restoranlarımızda özenle hazırlanmış menüler ve şık sunum.' },
  { id: shortid(), icon: FaHeart, title: 'Nişan Organizasyonu', subtitle: 'İstediğiniz mekânda kişiselleştirilmiş nişan kurulumu ve süslemesi.' }
]

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } }
}

export default function Service() {
  const ref = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? ['0%', '0%'] : ['-8%', '8%'])

  return (
    <section ref={ref} className="relative py-28 sm:py-36 overflow-hidden" id="services"
      style={{ background: 'linear-gradient(135deg, #FDF2F8 0%, #FFF0F7 50%, #FEF3C7 100%)' }}
    >
      {/* Parallax decorative background element */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none will-change-transform">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-primary/4 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="eyebrow justify-center">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Hizmetlerimiz</span>
            <span className="eyebrow-line" />
          </div>
          <h2 className="section-heading">
            Size Özel{' '}
            <span className="font-script text-primary" style={{ fontSize: '1.15em' }}>Deneyimler</span>
          </h2>
          <p className="mt-5 text-warm-dark/60 max-w-lg mx-auto text-sm leading-relaxed font-sans">
            Düğününüzden nişanınıza, özel gününüzün her detayını kusursuz bir şekilde planlıyoruz.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map(s => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.id}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-border/60 shadow-sm hover:shadow-xl transition-shadow duration-300 cursor-default overflow-hidden"
              >
                {/* Card hover background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-primary/8 group-hover:bg-primary transition-colors duration-300">
                    <Icon className="text-primary group-hover:text-white transition-colors duration-300" size={20} />
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-warm-dark mb-3">
                    {s.title}
                  </h3>
                  <p className="text-sm text-warm-dark/60 leading-relaxed font-sans">{s.subtitle}</p>

                  {/* Gold bottom accent */}
                  <div className="mt-6 h-px bg-gradient-to-r from-gold/40 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
