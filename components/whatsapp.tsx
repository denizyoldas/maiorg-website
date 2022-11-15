import Image from 'next/image'

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
        <Image
          width={60}
          height={60}
          className="hover:scale-110 transform transition duration-300 ease-in-out"
          src="https://img.icons8.com/color/80/000000/whatsapp.png"
          alt="Whatsapp"
        />
        {/* <img src="svg/whatsapp.svg" alt="" /> */}
        {/* <FaWhatsappSquare size={50} /> */}
      </a>
    </div>
  )
}

export default WhatsappButton
