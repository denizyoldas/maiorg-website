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
    <div className={cx('box')}>
      <img src={image} alt={alt} />
      {type === 'grid' && (
        <div className="btn-box">
          <a
            style={{ cursor: 'pointer' }}
            data-toggle="lightbox"
            className="btn-1"
          >
            <BsImage />
          </a>
        </div>
      )}
    </div>
  )
}

export default GalleryItem
