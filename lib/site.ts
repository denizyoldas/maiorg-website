export const site = {
  name: 'Mai Organizasyon',
  url: 'https://www.maiorganizasyon.com',
  slogan: "Mavi'nin ışıltısı gecenizle buluşsun",
  description:
    "Tuzla ve İstanbul Anadolu Yakası'nda düğün, nişan, kına, sünnet, doğum günü, baby shower ve kurumsal organizasyon. Planlama, dekor, fotoğraf, DJ ve yemek servisi tek elden.",
  phone: '+90 534 348 93 48',
  phoneHref: 'tel:+905343489348',
  whatsapp: '905343489348',
  email: 'info@maiorganizasyon.com',
  address: {
    street: 'Postane Mah., Rauf Orbay Cd. No:136',
    district: 'Tuzla',
    city: 'İstanbul',
    postalCode: '34940',
    country: 'TR'
  },
  geo: { lat: 40.82393847819526, lng: 29.289593544637256 },
  instagram: 'https://www.instagram.com/maiorganizasyon_/',
  ga: 'G-NYT4W4Z9ZG',
  gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d188.69895295162297!2d29.289593544637256!3d40.82393847819526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caddab2b90b567%3A0xc22124b6477b4440!2sMai%20Organizasyon!5e0!3m2!1str!2str!4v1659709115471!5m2!1str!2str',
  areaServed: ['Tuzla', 'Pendik', 'Kartal', 'Maltepe', 'Ataşehir', 'Kadıköy']
}

export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.district}/${site.address.city}`

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const nav = [
  { href: '/', label: 'Anasayfa' },
  { href: '/hizmetler', label: 'Hizmetler' },
  { href: '/galeri', label: 'Galeri' },
  { href: '/hakkimizda', label: 'Hakkımızda' },
  { href: '/iletisim', label: 'İletişim' }
]

export const testimonials = [
  {
    name: 'Emre & Selin',
    event: 'Düğün',
    quote:
      'Her anımızda yanımızda olan Mai Organizasyon’a çok teşekkür ederiz. Bütün isteklerimizi eksiksiz yerine getirdiler. Hayallerimizin ötesinde bir düğün yaşadık.'
  },
  {
    name: 'Mustafa & Gülşen',
    event: 'Düğün',
    quote:
      'Harika bir ekip, harika bir organizasyon. Her çiftin hayali olan düğünü yaşadık; tek yapmamız gereken anın tadını çıkarmaktı.'
  },
  {
    name: 'Tunç Ailesi',
    event: 'Sünnet',
    quote:
      'Oğlumuzun sünnet organizasyonunu Mai Organizasyon ile yaptık. İstediğimiz her şeyi eksiksiz yerine getirdiler. Kesinlikle tavsiye ediyoruz.'
  }
]

export const steps = [
  { title: 'Tanışalım', text: 'Hayalinizi, tarihinizi ve bütçenizi dinliyor; size en uygun mekân ve konsept seçeneklerini sunuyoruz.' },
  { title: 'Planlayalım', text: 'Dekor, menü, müzik ve çekim detaylarını tek bir planda topluyor, her adımı birlikte netleştiriyoruz.' },
  { title: 'Hazırlayalım', text: 'Tedarikçileri, ekibi ve kurulumu biz koordine ediyoruz; siz yalnızca son provaya geliyorsunuz.' },
  { title: 'Kutlayalım', text: 'Büyük günde sahnenin arkasındayız. Siz misafirlerinizle anın tadını çıkarın, gerisini bize bırakın.' }
]

export const faqs = [
  {
    q: 'Organizasyon için ne kadar önceden iletişime geçmeliyiz?',
    a: 'Düğün ve nişanlar için 2–4 ay önce görüşmeye başlamanızı öneriyoruz; yaz sezonu ve hafta sonları hızlı doluyor. Daha küçük kutlamalarda birkaç hafta genellikle yeterli.'
  },
  {
    q: 'Sadece Tuzla’da mı hizmet veriyorsunuz?',
    a: 'Merkezimiz Tuzla’da; Pendik, Kartal, Maltepe, Ataşehir, Kadıköy başta olmak üzere İstanbul Anadolu Yakası’nın tamamında organizasyon yapıyoruz.'
  },
  {
    q: 'Mekânı siz mi buluyorsunuz?',
    a: 'İsterseniz anlaşmalı mekânlarımız arasından seçim yapmanıza yardımcı oluyoruz; kendi seçtiğiniz mekânda da kurulum ve dekor hizmeti veriyoruz.'
  },
  {
    q: 'Fiyat teklifi nasıl alabilirim?',
    a: 'WhatsApp veya iletişim formu üzerinden tarih, kişi sayısı ve etkinlik türünü paylaşmanız yeterli; size özel paket ve fiyatı kısa sürede iletiyoruz.'
  }
]
