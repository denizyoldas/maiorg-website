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
                Mai Mis Organizasyon ve Danışmanlık olarak sizleri günlük
                yoğunluklarınızdan kurtararak küçük çaplı bir organizasyon veya
                büyük partileri profesyonel bir iş olarak ele alıp, özgün,
                yaratıcı ve kişiye özel yaklaşımlarla, organizasyon sürecine
                farklı bir bakış açısı getiriyor. Sizi mutlu ederek mutlu olmayı
                amaçlıyoruz.
              </p>
              <div className="btn-box">
                <a href="">Daha Fazla</a>
              </div>
            </div>
          </div>
          <div className="col-md-6 img_container">
            <div className="row">
              <div className="col-6">
                <img src="images/a1.jpg" className="about_img1" alt="" />
              </div>
              <div className="col-6 px-0">
                <img src="images/a2.jpg" className="about_img2" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
