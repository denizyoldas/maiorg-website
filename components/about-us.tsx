/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from 'react'

function AboutUs() {
  return (
    <section className="about_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <div className="detail-box">
              <div className="heading_container ">
                <h2>Hakkımızda</h2>
              </div>
              <p>
                Mai Organizasyon olarak hayatınızın her anında yanınızda olmak
                ve bu anları mükemmel bir şekilde doldurmak bizim en büyük
                ilkemizidir. Sizin hayallerinizi gerçeğe dönüştürmek için her
                imkanı ve fırsatı değerlendirerek olanakları sonsuza indirgemeyi
                hedefliyoruz.
              </p>
              <div className="btn-box">
                <a href="">Daha Fazla</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 img_container">
            <div className="row">
              <div className="col-6">
                <img
                  src="images/a1.jpg"
                  className="about_img1"
                  alt="düğün çifti bir arada"
                />
              </div>
              <div className="col-6 px-0">
                <img
                  src="images/a2.jpg"
                  className="about_img2"
                  alt="düğün organizasyonunda çiftler"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
