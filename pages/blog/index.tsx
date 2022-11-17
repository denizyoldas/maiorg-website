import Head from 'next/head'
import React from 'react'
import MainLayout from '../../components/layout/main-layout'
import PageThumbnail from '../../components/UI/page-thumbnail'

const POSTS = [
  {
    title: 'Tuzla Mai Organizasyon',
    date: '2022-11-01',
    description: `Tuzla'da Mai Organizasyon olarak Canan hanımın kontrolünde büyümekte olan bir organizasyon firmasıdır. Bir çok çiftin güzel günlerinde yanlarında bulunan ve bu günleri güzelleştiren Mai Organizasyon olarak ...`,
    image: 'https://picsum.photos/seed/picsum/200/300',
    slug: 'tuzla-organizasyon'
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

      <section className="p-12 sm:p-24 mb-72">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {POSTS.map(post => (
            <div key={post.slug}>
              <div className="h-48 w-full bg-cover bg-center rounded-t-lg overflow-hidden">
                <img
                  className="h-full w-full object-cover object-center"
                  src={post.image}
                  alt={post.title}
                />
              </div>
              <div className="bg-gray-300 p-4 rounded-b-lg">
                <h3 className="text-lg text-gray-700 font-medium">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{post.date}</p>
                <p className="mt-2 text-sm text-gray-600">{post.description}</p>

                <a
                  href={`/blog/${post.slug}`}
                  className="block text-blue-500 text-sm font-medium mt-2"
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
