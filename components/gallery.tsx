'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import type { Photo } from '@/lib/images'

export function Gallery({ photos }: { photos: Photo[] }) {
  const tags = ['Tümü', ...new Set(photos.map(p => p.tag))]
  const [tag, setTag] = useState('Tümü')
  const [index, setIndex] = useState(0)
  const dialog = useRef<HTMLDialogElement>(null)
  const list = tag === 'Tümü' ? photos : photos.filter(p => p.tag === tag)
  const current = list[index]

  const open = (i: number) => {
    setIndex(i)
    dialog.current?.showModal()
  }
  const step = (n: number) => setIndex(i => (i + n + list.length) % list.length)

  return (
    <>
      <div role="group" aria-label="Kategori filtresi" className="container-x flex flex-wrap gap-2 pb-10">
        {tags.map(t => (
          <button key={t} type="button" aria-pressed={t === tag} onClick={() => setTag(t)} className="rounded-full border border-ink/15 px-4 py-2 text-sm transition hover:border-ink aria-pressed:border-ink aria-pressed:bg-ink aria-pressed:text-ivory">
            {t}
          </button>
        ))}
      </div>

      <ul className="container-x columns-2 gap-3 pb-24 sm:gap-5 lg:columns-3">
        {list.map((p, i) => (
          <li key={p.src.src} className="mb-3 break-inside-avoid sm:mb-5">
            <button type="button" onClick={() => open(i)} className="group relative block w-full overflow-hidden" aria-label={`Büyüt: ${p.alt}`}>
              <Image src={p.src} alt={p.alt} sizes="(min-width:1024px) 30vw, 50vw" placeholder="blur" className="h-auto w-full transition duration-700 group-hover:scale-105" />
              <span className="absolute bottom-3 left-3 rounded-full bg-ivory/90 px-3 py-1 text-xs opacity-0 transition group-hover:opacity-100">{p.tag}</span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        aria-label="Fotoğraf görüntüleyici"
        onClick={e => e.target === e.currentTarget && dialog.current?.close()}
        onKeyDown={e => {
          if (e.key === 'ArrowRight') step(1)
          if (e.key === 'ArrowLeft') step(-1)
        }}
        className="m-auto h-dvh max-h-none w-dvw max-w-none bg-transparent p-4 text-ivory sm:p-10"
      >
        {current && (
          <figure className="pointer-events-none flex h-full flex-col items-center justify-center gap-4">
            <Image key={current.src.src} src={current.src} loading="eager" alt={current.alt} sizes="100vw" className="pointer-events-auto h-auto max-h-[80dvh] w-auto object-contain" />
            <figcaption className="text-center text-sm text-ivory/80">{current.alt}</figcaption>
          </figure>
        )}
        <button type="button" onClick={() => dialog.current?.close()} className="absolute top-4 right-4 grid size-12 place-items-center rounded-full bg-ivory/10 text-2xl hover:bg-ivory/20" aria-label="Kapat">×</button>
        <button type="button" onClick={() => step(-1)} className="absolute top-1/2 left-2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-ivory/10 text-2xl hover:bg-ivory/20 sm:left-6" aria-label="Önceki">‹</button>
        <button type="button" onClick={() => step(1)} className="absolute top-1/2 right-2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-ivory/10 text-2xl hover:bg-ivory/20 sm:right-6" aria-label="Sonraki">›</button>
      </dialog>
    </>
  )
}
