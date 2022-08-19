import React, { useState } from 'react'
import { BsImage } from 'react-icons/bs'
import { Lightbox } from 'react-modal-image'

interface Props {
  id?: string
  title?: string
  image: string
  alt: string
}

function GaleryItem({ image, alt }: Props) {
  const [isOpen, setIsOpen] = useState(false)

  const imageClick = () => {
    setIsOpen(true)
  }

  return (
    <div className="col-sm-6 col-md-4 col-lg-3 mx-auto">
      <div className="box ">
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

export default GaleryItem
