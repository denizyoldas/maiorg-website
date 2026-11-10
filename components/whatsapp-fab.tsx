import { waLink } from '@/lib/site'
import { WhatsAppIcon } from './icons'

export function WhatsAppFab() {
  return (
    <a
      href={waLink('Merhaba, organizasyon hakkında bilgi almak istiyorum.')}
      target="_blank"
      rel="noopener"
      aria-label="WhatsApp ile yazın"
      className="fixed right-4 bottom-4 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition hover:scale-105 sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
