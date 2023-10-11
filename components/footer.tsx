import { meta } from '../site.config'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <section className="flex justify-between bg-footer py-12 px-10 text-center md:px-24">
      <p className="w-2/3 text-white">
        &copy; <span>{year}</span> All Rights Reserved By{' '}
        <a
          href="https://denizaksu.dev/"
          className="hover:underline hover:opacity-75"
        >
          Deniz Aksu
        </a>
      </p>
      <a href={'https://instagram.com/' + meta.social.instagram} rel="nofollow">
        <FaInstagram color="white" size={24} />
      </a>
    </section>
  )
}

export default Footer
