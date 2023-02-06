import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../footer'
import Header from '../header'
import MobileMenu from '../mobile-menu'
import BlogThumbnail from '../UI/blog-thumbnail'
import cx from 'classnames'

interface Props {
  children: React.ReactNode
  meta: {
    title: string
    description: string
    author: string
  }
}

const POSTS = [
  {
    title: 'Tuzla Mai Organizasyon',
    date: '2022-11-01',
    description: `Tuzla'da Mai Organizasyon olarak Canan hanımın kontrolünde büyümekte olan bir organizasyon firmasıdır. Bir çok çiftin güzel günlerinde yanlarında bulunan ve bu günleri güzelleştiren Mai Organizasyon olarak ...`,
    image: 'https://picsum.photos/seed/picsum/200/300?key=1',
    slug: 'tuzla-organizasyon'
  },
  {
    title:
      'Düğün Planlamasında Organizasyon Yöneticisi Açısından Dikkat Edilmesi Gereken 6 Şey',
    date: '2022-11-01',
    description:
      'Düğünler sadece çiftler için özel ve anısı kalıcı günler değildir, aynı zamanda düğün planlamacıları için de zor ve meşakkatli bir iş olabilirler.',
    image: 'https://picsum.photos/seed/picsum/200/300?key=2',
    slug: 'dugun-planlamasinda-organizasyon-yoneticisi-acisindan-dikkat-edilmesi-gereken-5-sey'
  },
  {
    title: 'Evlilik Organizasyonu Nasıl Yapılır?',
    date: '2023-01-12',
    description: `Evlilik, hayatımızın en önemli ve anısı kalıcı olaylarından biridir. Bu nedenle,
    evlilik organizasyonlarına doğru bir şekilde odaklanmak önemlidir.`,
    image: 'https://picsum.photos/seed/picsum/200/300?key=3',
    slug: 'evlilik-organizasyonu-nasil-yapilir'
  }
]

const BlogLayout = ({ children, meta }: Props) => {
  const router = useRouter()
  const { pathname } = router
  const path = pathname.split('/')[2]

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Header />
      <MobileMenu />

      <BlogThumbnail />

      <main className="justify-center p-12 sm:p-24 md:flex">
        <div className="prose">{children}</div>

        <div className="w-1/6 pt-20 pl-4">
          <h4 className="pb-4 text-2xl font-bold underline">Diğer Yazılar</h4>
          <ul className="grid grid-cols-1 gap-4">
            {POSTS.map(post => (
              <li key={post.slug}>
                <a
                  href={`/blog/${post.slug}`}
                  className={cx('hover:text-primary', {
                    'text-primary': path === post.slug
                  })}
                >
                  {post.title.slice(0, 50)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default BlogLayout
