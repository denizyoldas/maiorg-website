'use client'

import React, { useEffect, useState } from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import styled from 'styled-components'

const Top = styled.a<{ show: boolean }>`
  display: ${props => (props.show ? 'block' : 'none')};
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 999;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background: #000;
    color: #fff;
  }
`

function GoToTop() {
  const [show, setShow] = useState(false)

  const handleScroll = () => {
    const position = window.pageYOffset

    if (position > 20) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const goToTopHandle = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Top show={show} onClick={goToTopHandle} className="bg-rose-700">
      <AiOutlineArrowUp size={20} fontWeight="bold" />
    </Top>
  )
}

export default GoToTop
