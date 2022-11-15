import { meta } from '../site.config'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  const year = new Date().getFullYear()
  return (
    <section className="bg-footer px-24 py-12 flex items-center justify-between flex-col md:flex-row text-center sm:text-left gap-10 sm:gap-0">
      <p className="text-white">
        &copy; <span>{year}</span> All Rights Reserved By{' '}
        <a
          href="https://denizaksu.dev/"
          className="hover:underline hover:opacity-75"
        >
          Deniz Aksu
        </a>
      </p>
      <div className="grid grid-cols-4 gap-4">
        <a href={'https://facebook.com/' + meta.social.facebook} rel="nofollow">
          <FaFacebookF color="white" size={22} />
        </a>
        <a href={'https://twitter.com/' + meta.social.twitter} rel="nofollow">
          <FaTwitter color="white" size={24} />
        </a>
        <a
          href={'https://instagram.com/' + meta.social.instagram}
          rel="nofollow"
        >
          <FaInstagram color="white" size={24} />
        </a>
        <a href={'https://youtube.com/' + meta.social.youtube} rel="nofollow">
          <FaYoutube color="white" size={24} />
        </a>
      </div>
    </section>
  )
}

export default Footer
