import Head from 'next/head'
import MainLayout from '../../components/layout/main-layout'
import PageThumbnail from '../../components/UI/page-thumbnail'

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

const BlogPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Mai Organizasyon | Blog</title>

        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nunc, nec ultricies elit nisl eu nunc. Sed euismod, nisl vel ultricies lacinia, nunc nisl ultricies nunc, nec ultricies elit nisl eu nunc."
        />
      </Head>
      <PageThumbnail title="Blog" />

      <section className="mb-72 p-12 sm:p-24">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {POSTS.map(post => (
            <div key={post.slug}>
              <div className="h-48 w-full overflow-hidden rounded-t-lg bg-cover bg-center">
                <img
                  className="h-full w-full object-cover object-center"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="rounded-b-lg bg-gray-300 p-4">
                <h3 className="text-lg font-medium text-gray-700">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{post.date}</p>
                <p className="mt-2 text-sm text-gray-600">{post.description}</p>

                <a
                  href={`/blog/${post.slug}`}
                  className="mt-2 block text-sm font-medium text-blue-500"
                >
                  Devamını Oku →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </MainLayout>
  )
}

export default BlogPage
