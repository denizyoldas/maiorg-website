import React from 'react'

interface Props {
  type: string
  placeholder: string
  name: string
}

const Input = ({ type, placeholder, name }: Props) => {
  if (type === 'textarea') {
    return (
      <textarea
        className="w-full rounded-md border border-gray-300 p-4 text-sm"
        placeholder={placeholder}
        name={name}
      ></textarea>
    )
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className="w-full rounded-md border-gray-300 p-4 outline-none"
    />
  )
}

export default Input
