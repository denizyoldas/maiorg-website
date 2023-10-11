import Image from 'next/image'
import Title from '../UI/title'

const TEAM = [
  {
    name: 'Tuğçe Çakır',
    position: 'Nedime',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d'
  },
  {
    name: 'Merve Çakır',
    position: 'Nedime',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704f'
  },
  {
    name: 'Aslı Balcı',
    position: 'Nedime',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704x'
  },
  {
    name: 'Ahmet Genç',
    position: 'Kameraman',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704a'
  },
  {
    name: 'Mehmet Yılmaz',
    position: 'Kameraman',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704a'
  },
  {
    name: 'Ayşe Yılmaz',
    position: 'Garson',
    image: 'https://i.pravatar.cc/150?u=a042581f4e290267043'
  },
  {
    name: 'Ceren Sönmez',
    position: 'Garson',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704c'
  },
  {
    name: 'Erhan Yalçın',
    position: 'Garson',
    image: 'https://i.pravatar.cc/150?u=a042581f4e290267042'
  }
]

const Team = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-10 md:px-32">
      <Title
        title="Ekip üyelerimizle tanışın"
        subtitle="Ekibimizi oluşturan her bir üyemiz, kendi alanında uzman ve deneyimli kişilerden oluşmaktadır."
      />
      <div className="grid grid-cols-1 gap-10 p-12 sm:grid-cols-2 md:grid-cols-4">
        {TEAM.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center rounded-md p-4 text-center"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={128}
              height={128}
              className="rounded-full border-4 border-rose-600"
            />
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <span className="text-gray-500">{member.position}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
