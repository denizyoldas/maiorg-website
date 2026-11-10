import Link from 'next/link'

export function PageHero({ eyebrow, title, intro, crumbs }: { eyebrow: string; title: React.ReactNode; intro?: string; crumbs: { href: string; label: string }[] }) {
  return (
    <header className="container-x pt-10 pb-14 sm:pt-16 sm:pb-20">
      <nav aria-label="Sayfa yolu" className="rise mb-10 text-xs text-muted">
        <ol className="flex flex-wrap gap-2">
          {crumbs.map((c, i) => (
            <li key={c.href} className="flex gap-2">
              {i > 0 && <span aria-hidden>/</span>}
              {i < crumbs.length - 1 ? <Link href={c.href} className="hover:text-ink">{c.label}</Link> : <span aria-current="page" className="text-ink">{c.label}</span>}
            </li>
          ))}
        </ol>
      </nav>
      <p className="eyebrow rise" style={{ '--d': '100ms' } as React.CSSProperties}>{eyebrow}</p>
      <h1 className="display rise mt-6 max-w-4xl text-5xl sm:text-7xl lg:text-8xl" style={{ '--d': '200ms' } as React.CSSProperties}>{title}</h1>
      {intro && <p className="rise mt-8 max-w-2xl text-lg leading-relaxed text-muted" style={{ '--d': '300ms' } as React.CSSProperties}>{intro}</p>}
    </header>
  )
}
