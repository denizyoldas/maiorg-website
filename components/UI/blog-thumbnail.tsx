import React from 'react'

interface Props {
  title?: string
  description?: string
}

const BlogThumbnail: React.FC<Props> = ({ title, description }) => {
  return (
    <div className="h-52 w-full bg-thumb-pattern bg-cover bg-center bg-no-repeat">
      <div className="mx-auto flex h-full items-center justify-center backdrop-brightness-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">{title}</h1>
          {description && <p className="text-white">{description}</p>}
        </div>
      </div>
    </div>
  )
}

export default BlogThumbnail
