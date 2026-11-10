import type { StaticImageData } from 'next/image'
import { img } from './images'

export type Service = {
  slug: string
  title: string
  seoTitle: string
  short: string
  intro: string
  includes: string[]
  faq: { q: string; a: string }[]
  image: StaticImageData
  alt: string
}

export const services: Service[] = [
  {
    slug: 'dugun-organizasyonu',
    title: 'Düğün Organizasyonu',
    seoTitle: 'Düğün Organizasyonu Hizmeti',
    short: 'Mekân seçiminden son dansa kadar düğününüzün her detayını tek elden planlıyoruz.',
    intro:
      'Düğün, bir ömür hatırlanacak tek gün. Mai Organizasyon olarak Tuzla ve İstanbul Anadolu Yakası’nda kır, kır bahçesi, sahil ve salon düğünlerini baştan sona planlıyoruz. Bütçenize uygun mekânı buluyor, dekoru, menüyü, müziği ve çekimi tek bir takvimde topluyor; büyük gün geldiğinde siz misafirlerinizle ilgilenirken sahnenin arkasındaki her şeyi biz yönetiyoruz.',
    includes: [
      'Mekân danışmanlığı ve keşif',
      'Konsept, renk paleti ve dekor tasarımı',
      'Nikah masası, tak ve sahne kurulumu',
      'Fotoğraf, video ve drone çekimi',
      'DJ, ses-ışık ve canlı müzik',
      'Yemek ve ikram koordinasyonu',
      'Gün boyu organizasyon sorumlusu'
    ],
    faq: [
      {
        q: 'Düğün organizasyonunu ne kadar önceden planlamalıyız?',
        a: 'Özellikle Mayıs–Eylül arası için 3–6 ay önceden planlamaya başlamanızı öneriyoruz; böylece mekân ve tedarikçilerde istediğiniz tarihi garantilemek kolaylaşır.'
      },
      {
        q: 'Kendi bulduğumuz mekânda da çalışıyor musunuz?',
        a: 'Evet. Anlaşmalı mekânlarımızın yanı sıra sizin seçtiğiniz salon, bahçe veya sahil mekânında da kurulum yapıyoruz.'
      }
    ],
    image: img.yatNikah,
    alt: 'Tuzla’da deniz kenarında kurulmuş nikah takı'
  },
  {
    slug: 'dugun-susleme-ve-dekor',
    title: 'Düğün Süsleme & Dekor',
    seoTitle: 'Düğün Süsleme ve Dekor',
    short: 'Tak, nikah masası, çiçek ve ışık tasarımıyla mekânınıza büyüleyici bir ambiyans katıyoruz.',
    intro:
      'Doğru dekor, mekânı sizin hikâyenize dönüştürür. Tak ve nikah masası tasarımından masa düzenine, canlı çiçek aranjmanlarından ışıklandırmaya kadar tüm süslemeyi konseptinize göre hazırlıyor, kurulum ve söküm dahil eksiksiz teslim ediyoruz.',
    includes: [
      'Çiçekli tak ve nikah masası',
      'Gelin–damat masası ve sahne dekoru',
      'Masa düzeni, örtü ve centerpiece',
      'Canlı ve yapay çiçek aranjmanları',
      'Işık, mum ve fener dekorasyonu',
      'Kurulum ve söküm'
    ],
    faq: [
      {
        q: 'Dekor için hazır paketleriniz var mı?',
        a: 'Farklı bütçelere uygun hazır paketlerimiz var; dilerseniz tamamen size özel bir tasarım da hazırlıyoruz.'
      },
      {
        q: 'Canlı çiçek kullanıyor musunuz?',
        a: 'Evet, mevsimine göre canlı çiçek ve yeşillik kullanıyoruz. Bütçeye göre canlı ve yapay çiçeği birlikte kullanmak da mümkün.'
      }
    ],
    image: img.beyazTak,
    alt: 'Beyaz çiçekli düğün takı ve pasta masası'
  },
  {
    slug: 'nisan-organizasyonu',
    title: 'Nişan Organizasyonu',
    seoTitle: 'Nişan Organizasyonu ve Süsleme',
    short: 'Evde, bahçede ya da salonda; isim harfli, kişiselleştirilmiş nişan kurulumu.',
    intro:
      'Nişan, iki ailenin ilk büyük buluşması. Evinizde, bahçenizde veya seçtiğiniz mekânda; isim harfleri, tül perdeler, çiçek ve ışıklarla size özel bir nişan sahnesi kuruyoruz. Yüzük tepsisi, nişan pastası ve ikramlar da dahil tüm detayları birlikte planlıyoruz.',
    includes: [
      'İsim harfli arka fon ve sahne',
      'Tül perde, çiçek ve ışık dekoru',
      'Yüzük tepsisi ve nişan kurdelesi',
      'Pasta ve ikram masası',
      'Evde veya mekânda kurulum'
    ],
    faq: [
      {
        q: 'Evde nişan süslemesi yapıyor musunuz?',
        a: 'Evet, ev ve bahçe nişanları en sık yaptığımız organizasyonlar arasında. Alanı önceden görüp ölçüye göre tasarım hazırlıyoruz.'
      }
    ],
    image: img.nisanDekor,
    alt: 'İsim harfli gri tül perdeli nişan dekoru'
  },
  {
    slug: 'kina-ve-sunnet-organizasyonu',
    title: 'Kına & Sünnet Organizasyonu',
    seoTitle: 'Kına Gecesi ve Sünnet Organizasyonu',
    short: 'Taht, sahne, gösteri ve eğlenceyle geleneği en güzel haliyle yaşatıyoruz.',
    intro:
      'Kına gecesi ve sünnet düğünü, gelenekle eğlencenin buluştuğu özel geceler. Kırmızı tül perdeli taht ve sahne kurulumundan kına tepsisine, dans gösterilerinden DJ’e kadar gecenin tüm akışını hazırlıyoruz.',
    includes: [
      'Taht, sahne ve kına masası',
      'Kına tepsisi, bindallı ve aksesuar',
      'Dans ve meşale gösterileri',
      'Sünnet yatağı ve kostüm dekoru',
      'DJ ve ses sistemi'
    ],
    faq: [
      {
        q: 'Kına gecesi için gösteri ekibi sağlıyor musunuz?',
        a: 'Evet, tüylü yelpaze ve meşale gösterileri gibi farklı seçenekleri organizasyonunuza ekleyebiliyoruz.'
      }
    ],
    image: img.kirmiziTaht,
    alt: 'Kırmızı tül perdeli kına ve sünnet tahtı'
  },
  {
    slug: 'dogum-gunu-ve-baby-shower',
    title: 'Doğum Günü & Baby Shower',
    seoTitle: 'Doğum Günü ve Baby Shower Organizasyonu',
    short: 'Temalı süsleme, pasta masası ve ikramlarla unutulmaz kutlamalar.',
    intro:
      'Bebeğinizi karşılarken ya da bir yaşı kutlarken her detayın tatlı olması gerekir. Temaya özel balon, çiçek ve masa süslemesi, pasta ve kurabiye masası, cinsiyet partisi sürprizleri ile evde veya mekânda kutlamanızı hazırlıyoruz.',
    includes: [
      'Temalı balon ve çiçek süslemesi',
      'Pasta, kurabiye ve ikram masası',
      'Cinsiyet partisi sürprizleri',
      'İsim panosu ve fotoğraf köşesi',
      'Çocuklar için animasyon'
    ],
    faq: [
      {
        q: 'Küçük, ev içi kutlamalar için de çalışıyor musunuz?',
        a: 'Kesinlikle. Ev içi baby shower ve doğum günleri için kompakt paketlerimiz bulunuyor.'
      }
    ],
    image: img.babyShower,
    alt: 'Güllerle süslenmiş baby shower aranjmanı'
  },
  {
    slug: 'fotograf-ve-video',
    title: 'Fotoğraf & Video',
    seoTitle: 'Düğün Fotoğrafçısı ve Video Çekimi',
    short: 'Profesyonel kadromuzla en güzel anlarınızı ölümsüzleştiriyoruz.',
    intro:
      'Yıllar sonra geriye dönüp baktığınızda o günü yeniden yaşatacak olan şey fotoğraflarınız. Dış çekim, tören ve after party için fotoğraf, sinematik düğün klibi ve drone çekimiyle hikâyenizi doğal ve zamansız bir dille anlatıyoruz.',
    includes: [
      'Dış çekim ve hikâye çekimi',
      'Tören ve davet fotoğrafları',
      'Sinematik düğün klibi',
      'Drone çekimi',
      'Albüm ve dijital teslim'
    ],
    faq: [
      {
        q: 'Fotoğraflar ne zaman teslim ediliyor?',
        a: 'Seçki fotoğraflarını ilk hafta, düzenlenmiş tüm arşivi ve klibi ortalama 3–5 hafta içinde teslim ediyoruz.'
      }
    ],
    image: img.ciftTepe,
    alt: 'Gün batımında gelin ve damat fotoğraf çekimi'
  },
  {
    slug: 'dj-ve-muzik',
    title: 'DJ & Müzik',
    seoTitle: 'Düğün DJ ve Müzik Hizmeti',
    short: 'Profesyonel DJ, ses ve ışık sistemiyle dans pistini coşku içinde bırakın.',
    intro:
      'İlk danstan son şarkıya kadar gecenin ritmini doğru kurmak bir uzmanlık işi. Müzik zevkinizi önceden dinliyor, profesyonel DJ, ses ve ışık sistemiyle, istenirse canlı müzik ve gösterilerle gecenin enerjisini zirvede tutuyoruz.',
    includes: [
      'Profesyonel DJ',
      'Ses ve ışık sistemi',
      'İlk dans ve giriş müzikleri',
      'Canlı müzik ve gösteri seçenekleri',
      'Duman, konfeti ve özel efektler'
    ],
    faq: [
      {
        q: 'Şarkı listesini biz belirleyebilir miyiz?',
        a: 'Elbette. Olmazsa olmazlarınızı ve kesinlikle çalınmamasını istediklerinizi önceden alıp geceyi buna göre kurguluyoruz.'
      }
    ],
    image: img.kinaGosteri,
    alt: 'Açık hava davetinde dans gösterisi'
  },
  {
    slug: 'yemek-ve-ikram',
    title: 'Yemek & İkram',
    seoTitle: 'Düğün Yemeği ve İkram Hizmeti',
    short: 'Anlaşmalı restoranlarımızda özenle hazırlanmış menüler ve şık sunum.',
    intro:
      'Misafirlerinizin en çok hatırlayacağı şeylerden biri sofra. Anlaşmalı restoran ve catering partnerlerimizle kokteyl, açık büfe veya servisli menü seçenekleri hazırlıyor, masa düzeni ve servis ekibiyle birlikte koordine ediyoruz.',
    includes: [
      'Kokteyl ve açık büfe menüler',
      'Servisli akşam yemeği',
      'Düğün pastası',
      'Masa düzeni ve servis ekibi',
      'Tadım organizasyonu'
    ],
    faq: [
      {
        q: 'Menü tadımı yapabiliyor muyuz?',
        a: 'Evet, seçtiğiniz menü için partner restoranımızda tadım ayarlıyoruz.'
      }
    ],
    image: img.yatMasa,
    alt: 'Deniz kenarında hazırlanmış davet masası'
  },
  {
    slug: 'kurumsal-organizasyon',
    title: 'Kurumsal Organizasyon',
    seoTitle: 'Kurumsal Etkinlik ve Davet Organizasyonu',
    short: 'Lansman, yılbaşı partisi ve şirket davetleri için uçtan uca planlama.',
    intro:
      'Şirket davetleri, lansmanlar, yıl sonu partileri ve açılışlar için mekân, dekor, ikram, müzik ve çekimi tek noktadan yönetiyoruz. Markanızın kimliğine uygun bir deneyim tasarlıyor, zamanında ve bütçe içinde teslim ediyoruz.',
    includes: [
      'Lansman ve açılış organizasyonu',
      'Yılbaşı ve yıl sonu partileri',
      'Marka uyumlu dekor ve sahne',
      'Catering ve kokteyl',
      'Fotoğraf, video ve sunum teknik altyapısı'
    ],
    faq: [
      {
        q: 'Fatura kesiyor musunuz?',
        a: 'Evet, kurumsal müşterilerimize tüm hizmetler için fatura düzenliyoruz.'
      }
    ],
    image: img.cicekMasa,
    alt: 'Çiçek aranjmanlı uzun davet masası'
  }
]

export const getService = (slug: string) => services.find(s => s.slug === slug)
