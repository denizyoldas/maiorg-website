import { BsImage } from 'react-icons/bs'

interface Props {
  id?: string
  title?: string
  image: string
  alt: string
  type?: string
}

function GalleryItem({ image, alt, type = 'grid' }: Props) {
  return (
    <div className="group relative border-2 border-white">
      <img src={image} alt={alt} />
      {type === 'grid' && (
        <div className="absolute top-0 hidden h-full w-full cursor-pointer items-center justify-center bg-slate-300/50 transition duration-300 group-hover:flex">
          <a
            data-toggle="lightbox"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-white"
          >
            <BsImage size={24} />
          </a>
        </div>
      )}
    </div>
  )
}

export default GalleryItem
