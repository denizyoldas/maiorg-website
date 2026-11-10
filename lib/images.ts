import type { StaticImageData } from 'next/image'
import yatNikah from '@/public/images/gallery/yat-kulubu-nikah.jpeg'
import yatMasa from '@/public/images/gallery/yat-kulubu-masa.jpeg'
import beyazTak from '@/public/images/gallery/beyaz-cicek-tak-pasta.jpeg'
import bahceTak from '@/public/images/gallery/bahce-dugun-taki.jpeg'
import kirmiziTaht from '@/public/images/gallery/kirmizi-taht-dekor.jpeg'
import nisanDekor from '@/public/images/gallery/nisan-isimli-dekor.jpeg'
import kinaGosteri from '@/public/images/gallery/kina-gecesi-gosteri.jpeg'
import babyShower from '@/public/images/thumbnail.jpg'
import ciftOrman from '@/public/images/g1.webp'
import ciftSahil from '@/public/images/g2.webp'
import ciftKosu from '@/public/images/g3.webp'
import ciftGunbatimi from '@/public/images/g4.webp'
import cicekMasa from '@/public/images/g5.jpg'
import yuzukler from '@/public/images/a1.webp'
import ciftTepe from '@/public/images/a2.jpg'
import ciftGulus from '@/public/images/client.jpg'

export type Photo = { src: StaticImageData; alt: string; tag: string }

export const img = {
  yatNikah,
  yatMasa,
  beyazTak,
  bahceTak,
  kirmiziTaht,
  nisanDekor,
  kinaGosteri,
  babyShower,
  cicekMasa,
  yuzukler,
  ciftTepe,
  ciftGulus
}

export const gallery: Photo[] = [
  { src: yatNikah, alt: 'Tuzla yat kulübünde deniz manzaralı nikah takı ve masa düzeni', tag: 'Düğün' },
  { src: beyazTak, alt: 'Beyaz çiçeklerle süslü tak ve düğün pastası sahnesi', tag: 'Dekor' },
  { src: kirmiziTaht, alt: 'Kırmızı tül perdeli taht ve altın şamdanlı kına dekoru', tag: 'Kına' },
  { src: ciftGulus, alt: 'Düğün töreninde gülümseyen gelin ve damat', tag: 'Düğün' },
  { src: nisanDekor, alt: 'İsim harfli gri tül perdeli nişan dekoru', tag: 'Nişan' },
  { src: yatMasa, alt: 'Deniz kenarında mavi kadehlerle hazırlanmış yemek masası', tag: 'Yemek' },
  { src: bahceTak, alt: 'Bahçe düğünü için pampas otu ve beyaz çiçekli tak', tag: 'Dekor' },
  { src: kinaGosteri, alt: 'Kına gecesinde tüylü yelpazeli dans gösterisi', tag: 'Kına' },
  { src: cicekMasa, alt: 'Uzun davet masasında renkli çiçek aranjmanları', tag: 'Dekor' },
  { src: babyShower, alt: 'Pembe güller ve cipsofilli baby shower çiçek aranjmanı', tag: 'Baby Shower' },
  { src: ciftTepe, alt: 'Gün batımında tepede gelin ve damat fotoğraf çekimi', tag: 'Fotoğraf' },
  { src: yuzukler, alt: 'Gelin buketi üzerinde alyanslı eller', tag: 'Fotoğraf' },
  { src: ciftOrman, alt: 'Ormanda dış çekimde sarılan çift', tag: 'Fotoğraf' },
  { src: ciftSahil, alt: 'Gün batımında sahilde yürüyen gelin ve damat', tag: 'Fotoğraf' },
  { src: ciftGunbatimi, alt: 'Sisli vadide gün doğumunda gelin ve damat', tag: 'Fotoğraf' },
  { src: ciftKosu, alt: 'Sahilde koşan gelin ve damat', tag: 'Fotoğraf' }
]
