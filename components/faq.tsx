export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map(f => (
        <details key={f.q} className="group py-6">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-xl sm:text-2xl">
            {f.q}
            <span className="mt-1 text-2xl leading-none text-gold transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 max-w-2xl leading-relaxed text-muted">{f.a}</p>
        </details>
      ))}
    </div>
  )
}
