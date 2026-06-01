'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const TEAM = [
  { name: 'Tuğçe Çakır', position: 'Organizasyon Uzmanı', image: 'https://i.pravatar.cc/150?u=tugce_c' },
  { name: 'Merve Çakır', position: 'Dekor Tasarımcısı', image: 'https://i.pravatar.cc/150?u=merve_c' },
  { name: 'Aslı Balcı', position: 'Müşteri Temsilcisi', image: 'https://i.pravatar.cc/150?u=asli_b' },
  { name: 'Ahmet Genç', position: 'Fotoğrafçı', image: 'https://i.pravatar.cc/150?u=ahmet_g' },
  { name: 'Mehmet Yılmaz', position: 'Kameraman', image: 'https://i.pravatar.cc/150?u=mehmet_y' },
  { name: 'Ayşe Yılmaz', position: 'Koordinatör', image: 'https://i.pravatar.cc/150?u=ayse_y2' },
  { name: 'Ceren Sönmez', position: 'Etkinlik Asistanı', image: 'https://i.pravatar.cc/150?u=ceren_s' },
  { name: 'Erhan Yalçın', position: 'DJ & Ses Teknikeri', image: 'https://i.pravatar.cc/150?u=erhan_y' }
]

export default function Team() {
  return (
    <section className="py-28 sm:py-36 px-8 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="eyebrow justify-center">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Ekibimiz</span>
            <span className="eyebrow-line" />
          </div>
          <h2 className="section-heading">
            <span className="font-script text-primary" style={{ fontSize: '1.15em' }}>Uzman</span>{' '}
            Ekibimiz
          </h2>
          <p className="mt-4 text-warm-dark/60 max-w-xl mx-auto text-sm leading-relaxed font-sans">
            Her biri kendi alanında uzman ekibimiz, organizasyonunuzu mükemmel kılmak için çalışıyor.
          </p>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.07 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {TEAM.map(member => (
            <motion.div
              key={member.name}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-border/60 bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="relative mb-4">
                <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-primary/20 ring-offset-3">
                  <Image src={member.image} alt={member.name} width={80} height={80} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-white text-[8px]">✦</span>
                </div>
              </div>
              <h3 className="font-serif text-sm font-semibold text-warm-dark">{member.name}</h3>
              <span className="text-xs text-warm-dark/50 mt-1 font-sans">{member.position}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
