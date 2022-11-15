import React from 'react'
import Footer from '../footer'
import Header from '../header'

interface Props {
  children: React.ReactNode
}

const BlogLayout = ({ children }: Props) => {
  return (
    <main>
      <Header />

      <div className="prose py-24 max-w-none">{children}</div>

      <Footer />
    </main>
  )
}

export default BlogLayout
