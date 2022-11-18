import React from 'react'

const MobileMenu = () => {
  return (
    <div>
      <div className="absolute right-0 top-1 sm:hidden">
        <button className="focus:outline-none">
          <svg
            className="h-6 w-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="absolute top-0 left-0 z-50 flex h-screen w-screen flex-row-reverse bg-black/60">
        <div className="h-screen w-2/3 bg-white">
          <div className="flex h-full flex-col items-center pt-32">
            <ul className="flex flex-col gap-4">
              <li className="text-2xl font-bold text-rose-600">
                Mai Organizasyon
              </li>
              <li className="hover:underline">Anasayfa</li>
              <li className="hover:underline">Hakkımızda</li>
              <li className="hover:underline">Hizmetlerimiz</li>
              <li className="hover:underline">Referanslarımız</li>
              <li className="hover:underline">İletişim</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
