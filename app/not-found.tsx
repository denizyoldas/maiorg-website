'use client'

import styled from 'styled-components'
import MainLayout from '../components/layout/main-layout'

const Text = styled.h1`
  font-size: 100px;
  font-weight: 700;
  color: #000;
`

const SubText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #000;
`

const Button = styled.button`
  font-size: 20px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`

const ErrorPage = () => {
  return (
    <MainLayout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <Text>404</Text>
        <SubText>Aradığınız sayfa bulunamadı.</SubText>
      </div>
    </MainLayout>
  )
}

export default ErrorPage
