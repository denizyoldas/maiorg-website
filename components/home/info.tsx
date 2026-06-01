'use client'

import { motion } from 'framer-motion'
import { meta } from '../../site.config'
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi'

const INFO = [
  { icon: FiMapPin, title: 'Adresimiz', content: meta.contact.address, href: undefined },
  { icon: FiPhone, title: 'Telefon', content: meta.contact.phone, href: `tel:${meta.contact.phone}` },
  { icon: FiMail, title: 'E-Posta', content: meta.contact.email, href: `mailto:${meta.contact.email}` }
]

export default function Info() {
  return (
    <section id="info" className="py-20 px-8 sm:px-12 lg:px-20 bg-white border-t border-border/40">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-10">
        {INFO.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center text-center group cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <Icon className="text-primary group-hover:text-white transition-colors duration-300" size={22} />
              </div>
              <h3 className="font-serif text-base font-semibold text-warm-dark mb-2">{item.title}</h3>
              {item.href ? (
                <a href={item.href} className="text-sm text-warm-dark/60 hover:text-primary transition-colors font-sans">
                  {item.content}
                </a>
              ) : (
                <p className="text-sm text-warm-dark/60 font-sans">{item.content}</p>
              )}
              {/* Gold bottom dot */}
              <div className="mt-4 w-1 h-1 rounded-full bg-gold/50 group-hover:bg-gold transition-colors duration-300" />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
