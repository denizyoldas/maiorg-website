import React from 'react'

interface Props {
  type: string
  placeholder: string
  name: string
}

const inputClass =
  'w-full rounded-xl border border-border bg-white px-4 py-3.5 text-sm text-warm-dark placeholder-warm-light outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/10'

const Input = ({ type, placeholder, name }: Props) => {
  if (type === 'textarea') {
    return (
      <textarea
        className={inputClass}
        placeholder={placeholder}
        name={name}
        rows={5}
      />
    )
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      className={inputClass}
    />
  )
}

export default Input
