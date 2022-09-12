import React, { useState } from 'react'
import { BsImage } from 'react-icons/bs'
import { Lightbox } from 'react-modal-image'
import cx from 'classnames'

interface Props {
  id?: string
  title?: string
  image: string
  alt: string
  type?: string
}

function GalleryItem({ image, alt, type = 'grid' }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const imageClick = () => {
    setIsOpen(true)
  }

  return (
    <div
      className={cx('col-sm-6 col-md-4 col-lg-3 mx-auto', {
        'position-absolute top-50 start-50 translate-middle': type === 'modal'
      })}
    >
      <div className="box">
        <img src={image} alt={alt} />
        <div className="btn-box">
          <a
            style={{ cursor: 'pointer' }}
            onClick={imageClick}
            data-toggle="lightbox"
            className="btn-1"
          >
            <BsImage />
          </a>
        </div>
      </div>
      {isOpen && (
        <Lightbox hideDownload large={image} onClose={() => setIsOpen(false)} />
      )}
    </div>
  )
}

export default GalleryItem
