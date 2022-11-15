/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Title from '../UI/title'

function AboutUs() {
  return (
    <section className="items-center py-24 p-4 sm:px-24" id="about">
      <div className="grid grid-cols-1 sm:grid-cols-2">
        <div className="px-2 flex flex-col justify-center">
          <Title title="Hakkımızda" />
          <p className="my-4">
            Mai Organizasyon olarak hayatınızın her anında yanınızda olmak ve bu
            anları mükemmel bir şekilde doldurmak bizim en büyük ilkemizidir.
            Sizin hayallerinizi gerçeğe dönüştürmek için her imkanı ve fırsatı
            değerlendirerek olanakları sonsuza indirgemeyi hedefliyoruz.
          </p>
          <div className="text-center">
            <a className="link">Daha Fazla</a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-10 sm:pt-0">
          <div className="pt-10">
            <img
              className="w-full"
              src="images/a1.webp"
              alt="düğün çifti bir arada"
            />
          </div>
          <div>
            <img
              className="w-full"
              src="images/a2.jpg"
              alt="düğün organizasyonunda çiftler"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
