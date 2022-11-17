import React from 'react'
import Footer from '../footer'
import Header from '../header'
import BlogThumbnail from '../UI/blog-thumbnail'

interface Props {
  children: React.ReactNode
}

const BlogLayout = ({ children }: Props) => {
  return (
    <>
      <Header />

      <BlogThumbnail />

      <main className="flex justify-between p-24">
        <div className="prose max-w-none">{children}</div>

        <div className="pt-32 pl-10">
          Diğer Yazılar
          <ul>
            <li>
              <a href="/blog/tuzla-organizasyon">Tuzla Mai Organizasyon</a>
            </li>
            <li>
              <a href="/blog/lorem-ipsum-dolor-sit-amet">
                Lorem ipsum dolor sit amet
              </a>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default BlogLayout
