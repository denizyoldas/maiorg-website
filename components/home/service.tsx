import Link from 'next/link'
import shortid from 'shortid'
import Title from '../UI/title'

const SERVICES = [
  {
    id: shortid(),
    title: 'Düğün Planı',
    subtitle:
      'Düğünlerinizi yapacağınız yerlerin belirlenmesinin ardından sizlere istekleriniz doğrultusunda süsleme ve DJ hizmetleri ile birlikte düğün planınızı hazırlıyoruz.',
    image: 'images/s1.webp'
  },
  {
    id: shortid(),
    title: 'Düğün Dekoru',
    subtitle:
      'Düğünlerde istediğiniz dekor tag seçimi ile sizlere günlük kurulumlar yapıyoruz.',
    image: 'images/s2.webp'
  },
  {
    id: shortid(),
    title: 'Düğün Fotografları',
    subtitle:
      'Düğünlerinizde sizlere profesyonel fotoğrafçılarımız ile birlikte hizmet veriyoruz.',
    image: 'images/s3.webp'
  },
  {
    id: shortid(),
    title: 'Düğün DJ',
    subtitle:
      'Düğünlerinizde sizlere profesyonel DJ ekibimiz ile birlikte hizmet veriyoruz.',
    image: 'images/s4.webp'
  },
  {
    id: shortid(),
    title: 'Yemek Servisi',
    subtitle:
      'Anlaşmalı mekanlarımızıda 2 farkı yemek servisi uygulamamızdan seçtiğinizi sizlere sunuyoruz.',
    image: 'images/s5.webp'
  },
  {
    id: shortid(),
    title: 'Nişan Organizasyonu',
    subtitle:
      ' Nişan organizasyonlarınızda sizlere istediğiniz mekanda kendi aracımızla gelip tag kurulumu ve süslemesi yapıyoruz.',
    image: 'images/s6.webp'
  }
]

interface Props {
  showMore?: boolean
}

function Service({ showMore = true }: Props) {
  return (
    <section className="py-24" id="services">
      <div className="flex flex-col items-center">
        <Title
          type="center"
          title="Hizmetlerimiz"
          subtitle="Mai Organizasyon olarak sizlere verdiğimiz hizmetlerin kalitesini
              arttırmaya ve bu hizmetleri daha iyi bir şekilde sunmaya devam
              ediyoruz."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-24">
          {SERVICES.map(service => (
            <div key={service.id} className="flex flex-col items-center p-4">
              <div className="rounded-md bg-rose-600 p-5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h16 w-16"
                />
              </div>
              <h3 className="mt-4 text-2xl font-bold">{service.title}</h3>
              <p className="mt-4 text-center">{service.subtitle}</p>
            </div>
          ))}
        </div>
        {showMore && (
          <div className="btn-box">
            <Link href="/services" className="link">
              Daha Fazlası
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default Service
