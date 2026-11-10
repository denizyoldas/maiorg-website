import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70dvh] flex-col items-start justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="display mt-6 text-6xl sm:text-8xl">Bu sayfa <em className="text-gold-deep">bulunamadı.</em></h1>
      <p className="mt-6 max-w-md text-lg text-muted">Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.</p>
      <Link href="/" className="btn-dark mt-10">Anasayfaya dön</Link>
    </section>
  )
}
