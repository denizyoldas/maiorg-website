import React from 'react'

const Hero = () => {
  return (
    <section className="relative bg-hero-pattern bg-cover bg-no-repeat">
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center sm:text-left">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            en güzel anlarınız
            <strong className="block font-extrabold text-rose-700">
              Mai Organizasyon
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">
            Sizin hayallerinizi gerçeğe dönüştürmek için her imkanı ve fırsatı
            değerlendirerek olanakları sonsuza indirgemeyi hedefliyoruz.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
            >
              Hizmetlerimiz
            </a>

            <a
              href="#"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:bg-gray-100 hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
            >
              Daha Fazla
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
