'use client'

import { motion } from 'framer-motion'
import shortid from 'shortid'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    id: shortid.generate(),
    name: 'Emre & Selin',
    date: 'Haziran 2024',
    quote: 'Her anımızda yanımızda olan Mai Organizasyona çok teşekkür ederiz. Bütün isteklerimizi eksiksiz şekilde yerine getirdiler. Hayallerimizin ötesinde bir düğün yaşadık.',
    avatar: 'https://i.pravatar.cc/150?u=emre_selin_2024'
  },
  {
    id: shortid.generate(),
    name: 'Mustafa & Gülşen',
    date: 'Eylül 2024',
    quote: 'Düğünümüzde yanımızda olan Mai Organizasyona çok teşekkür ederiz. Harika bir ekip, harika bir organizasyon. Her çiftin hayali olan düğünü yaşadık.',
    avatar: 'https://i.pravatar.cc/150?u=mustafa_gulsen_2024'
  },
  {
    id: shortid.generate(),
    name: 'Tunç Ailesi',
    date: 'Mart 2024',
    quote: 'Oğlumuzun sünnet organizasyonunu Mai Organizasyon ile yaptık. İstediğimiz her şeyi eksiksiz yerine getirdiler. Kesinlikle tavsiye ediyoruz.',
    avatar: 'https://i.pravatar.cc/150?u=tunc_2024'
  }
]

export default function Client() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-primary-light">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <div className="eyebrow justify-center">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Referanslar</span>
            <span className="eyebrow-line" />
          </div>
          <h2 className="section-heading">
            <span className="font-script text-primary" style={{ fontSize: '1.15em' }}>Mutlu</span>{' '}
            Müşterilerimiz
          </h2>
        </motion.div>

        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 }
          }}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Autoplay]}
        >
          {testimonials.map(t => (
            <SwiperSlide key={t.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 border border-border shadow-sm h-full relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
              >
                {/* Gold top accent line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

                <FaQuoteLeft className="text-primary/15 mb-5" size={32} />

                <p className="font-serif italic text-warm-dark/75 leading-relaxed mb-8 text-[0.95rem]">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20 ring-offset-2">
                    <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="font-serif font-semibold text-warm-dark text-sm">{t.name}</div>
                    <div className="text-xs text-gold font-sans mt-0.5">{t.date}</div>
                  </div>
                  {/* Small gold star */}
                  <div className="ml-auto text-gold text-sm">✦</div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
