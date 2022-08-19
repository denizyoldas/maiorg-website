import React from 'react'

function Service() {
  return (
    <section className="service_section layout_padding-bottom" id="services">
      <div className="service_container">
        <div className="container ">
          <div className="heading_container heading_center">
            <h2>Hizmetlerimiz</h2>
            <p>
              Mai Organizasyon olarak sizlere verdiğimiz hizmetlerin kalitesini
              arttırmaya ve bu hizmetleri daha iyi bir şekilde sunmaya devam
              ediyoruz.
            </p>
          </div>
          <div className="row">
            <div className="col-sm-6 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s1.png" alt="düğün" />
                </div>
                <div className="detail-box">
                  <h5>Düğün planı</h5>
                  <p>
                    Düğünlerinizi yapacağınız yerlerin belirlenmesinin ardından
                    sizlere istekleriniz doğrultusunda paket içeriklerini baz
                    alarak süsleme ve DJ hizmetleri ile birlikte düğün planınızı
                    hazırlıyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s2.png" alt="dekor" />
                </div>
                <div className="detail-box">
                  <h5>Düğün Dekoru</h5>
                  <p>
                    Düğünlerde istediğiniz dekor tag seçimi ile sizlere günlük
                    kurulumlar yapıyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s3.png" alt="nişan" />
                </div>
                <div className="detail-box">
                  <h5>Düğün Fotografları</h5>
                  <p>
                    Ek paket dahilinde sizlere özel düğün fotoğrafçısı ayarlıyor
                    ve bu güzel anlarınızı ölümsüzleştiriyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s4.png" alt="doğum günü" />
                </div>
                <div className="detail-box">
                  <h5>Düğün Mekanları</h5>
                  <p>
                    Anlaşmalı olduğumuz mekanlarımızdan sizlere en uygun olanı
                    seçtiriyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s5.png" alt="Yemek servisi" />
                </div>
                <div className="detail-box">
                  <h5>Yemek Servisi</h5>
                  <p>
                    Anlaşmalı mekanlarımızıda 2 farkı yemek servisi
                    uygulamamızdan seçtiğinizi sizlere sunuyoruz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 ">
              <div className="box ">
                <div className="img-box">
                  <img src="images/s6.png" alt="Baby" />
                </div>
                <div className="detail-box">
                  <h5>Nişan Organizasyonu</h5>
                  <p>
                    Nişan organizasyonlarınızda sizlere istediğiniz mekanda
                    kendi aracımızla gelip tag kurulumu ve süslemesi yapıyoruz.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href="">Daha Fazlası</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
