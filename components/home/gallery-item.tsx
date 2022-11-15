import { BsImage } from 'react-icons/bs'
import cx from 'classnames'

interface Props {
  id?: string
  title?: string
  image: string
  alt: string
  type?: string
}

function GalleryItem({ image, alt, type = 'grid' }: Props) {
  return (
    <div className="border-2 border-white relative group">
      <img src={image} alt={alt} />
      {type === 'grid' && (
        <div className="absolute w-full h-full group-hover:flex hidden top-0 bg-slate-300/50 transition duration-300 items-center justify-center cursor-pointer">
          <a
            data-toggle="lightbox"
            className="bg-white rounded-full w-12 h-12 flex items-center justify-center"
          >
            <BsImage size={24} />
          </a>
        </div>
      )}
    </div>
  )
}

export default GalleryItem
