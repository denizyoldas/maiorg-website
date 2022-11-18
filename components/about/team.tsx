import Title from '../UI/title'

const TEAM = [
  {
    name: 'Tuğçe Çakır',
    position: 'Nedime',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    description:
      'Uzun sürelere yayılan bir organizasyon için, her şeyin en iyi şekilde olması için çalışıyoruz.'
  },
  {
    name: 'Merve Çakır',
    position: 'Nedime',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704f',
    description:
      'Uzun sürelere yayılan bir organizasyon için, her şeyin en iyi şekilde olması için çalışıyoruz.'
  },
  {
    name: 'Aslı Balcı',
    position: 'Nedime',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704x',
    description:
      'Uzun sürelere yayılan bir organizasyon için, her şeyin en iyi şekilde olması için çalışıyoruz.'
  },
  {
    name: 'Ahmet Hamdi',
    position: 'Kameraman',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704a',
    description:
      'Uzun sürelere yayılan bir organizasyon için, her şeyin en iyi şekilde olması için çalışıyoruz.'
  }
]

const Team = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-10">
      <Title title="Takımımız" />
      <div className="grid grid-cols-1 gap-10 p-12 sm:grid-cols-2 md:grid-cols-4">
        {TEAM.map((member, index) => (
          <div
            key={index}
            className="flex h-96 flex-col items-center justify-center rounded-md bg-gray-300 p-4 text-center transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-32 w-32 rounded-full border-4 border-rose-600"
            />
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <span className="text-gray-500">{member.position}</span>
            <p className="text-gray-500">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
