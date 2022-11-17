import React from 'react'
import Title from '../UI/title'

const TEAM = [
  {
    name: 'Tuğçe Çakır',
    position: 'Nedime',
    image: 'https://i.pravatar.cc/300',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  },
  {
    name: 'Tuğçe Çakır',
    position: 'Nedime',
    image: 'https://i.pravatar.cc/300',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  },
  {
    name: 'Tuğçe Çakır',
    position: 'Nedime',
    image: 'https://i.pravatar.cc/300',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  },
  {
    name: 'Tuğçe Çakır',
    position: 'Nedime',
    image: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
  }
]

const Team = () => {
  return (
    <div className="w-full flex flex-col py-10 items-center justify-center">
      <Title title="team" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 p-12">
        {TEAM.map((member, index) => (
          <div
            key={index}
            className="h-96 bg-gray-300 flex flex-col items-center rounded-md justify-center hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out text-center p-4"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full border-4 border-rose-600"
            />
            <h3 className="text-2xl font-bold">{member.name}</h3>
            <p className="text-gray-500">{member.position}</p>
            <p className="text-gray-500">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
