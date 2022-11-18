import Image from 'next/image'

function WhatsappButton() {
  return (
    <div className="fixed right-4 bottom-4 z-40">
      <a target="_blank" rel="noreferrer" href="https://wa.me/+905343489348">
        <Image
          width={60}
          height={60}
          className="transform transition duration-300 ease-in-out hover:scale-110"
          src="https://img.icons8.com/color/80/000000/whatsapp.png"
          alt="Whatsapp"
        />
      </a>
    </div>
  )
}

export default WhatsappButton
