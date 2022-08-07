import React from 'react'

function WhatsappButton() {
  return (
    <div
      style={{
        position: 'fixed',
        right: '15px',
        bottom: '15px',
        zIndex: '100'
      }}
    >
      <a target="_blank" rel="noreferrer" href="https://wa.me/+905343489348">
        <img
          className="whatsapp-button"
          src="https://img.icons8.com/color/48/000000/whatsapp.png"
        />
        {/* <img src="svg/whatsapp.svg" alt="" /> */}
        {/* <FaWhatsappSquare size={50} /> */}
      </a>
    </div>
  )
}

export default WhatsappButton
