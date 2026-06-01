'use client'

import { motion } from 'framer-motion'
import { ToastContainer, toast } from 'react-toastify'
import { meta } from '../../site.config'

const inputClass =
  'w-full rounded-xl border border-border bg-white px-4 py-3.5 text-sm text-warm-dark ' +
  'placeholder-warm-dark/30 outline-none font-sans ' +
  'transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/10'

export default function Contact() {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success('Mesajınız gönderildi! En kısa sürede size döneceğiz.', {
      style: { background: '#FDF2F8', color: '#831843', border: '1px solid #FBCFE8' }
    })
  }

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FDF2F8 0%, #FFF0F7 100%)' }}
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-primary/6 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-gold/6 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="eyebrow justify-center">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">İletişim</span>
            <span className="eyebrow-line" />
          </div>
          <h2 className="section-heading">
            Hayalinizi{' '}
            <span className="font-script text-primary" style={{ fontSize: '1.15em' }}>Anlat</span>
            <span className="font-serif">ın</span>
          </h2>
          <p className="mt-4 text-warm-dark/60 max-w-md mx-auto text-sm leading-relaxed font-sans">
            Organizasyonunuz için bizimle iletişime geçin, size özel bir teklif hazırlayalım.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 sm:p-10 border border-border shadow-sm"
          >
            <form onSubmit={submitHandler} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-warm-dark/60 mb-2 block tracking-wide uppercase font-sans">Ad Soyad</label>
                  <input type="text" placeholder="Adınız Soyadınız" name="name" required className={inputClass} />
                </div>
                <div>
                  <label className="text-xs font-semibold text-warm-dark/60 mb-2 block tracking-wide uppercase font-sans">Telefon</label>
                  <input type="tel" placeholder="0 5XX XXX XX XX" name="phone" className={inputClass} />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-warm-dark/60 mb-2 block tracking-wide uppercase font-sans">E-Posta</label>
                <input type="email" placeholder="ornek@email.com" name="email" required className={inputClass} />
              </div>
              <div>
                <label className="text-xs font-semibold text-warm-dark/60 mb-2 block tracking-wide uppercase font-sans">Mesajınız</label>
                <textarea placeholder="Organizasyonunuz hakkında bilgi verin..." name="message" rows={5} className={inputClass} />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="btn-primary w-full justify-center"
              >
                Gönder
              </motion.button>
            </form>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="rounded-2xl overflow-hidden shadow-sm border border-border"
            style={{ minHeight: '420px' }}
          >
            <iframe
              src={meta.gmap}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px', display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </section>
  )
}
