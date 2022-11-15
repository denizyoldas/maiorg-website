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

function Service() {
  return (
    <section className="pb-24" id="services">
      <div className="flex items-center flex-col">
        <Title
          type="center"
          title="Hizmetlerimiz"
          subtitle="Mai Organizasyon olarak sizlere verdiğimiz hizmetlerin kalitesini
              arttırmaya ve bu hizmetleri daha iyi bir şekilde sunmaya devam
              ediyoruz."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:px-24">
          {SERVICES.map(service => (
            <div key={service.id} className="flex items-center flex-col p-4">
              <div className="bg-rose-600 p-5 rounded-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-16 h16"
                />
              </div>
              <h3 className="text-2xl font-bold mt-4">{service.title}</h3>
              <p className="text-center mt-4">{service.subtitle}</p>
            </div>
          ))}
        </div>
        <div className="btn-box">
          <a className="link">Daha Fazlası</a>
        </div>
      </div>
    </section>
  )
}

export default Service
