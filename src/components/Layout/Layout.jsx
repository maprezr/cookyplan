import React from 'react'
import Header from '../Header/Header'
import MyLogin from '../Login/Login'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'
import { Container, Card } from 'react-bootstrap'


export const Layout = () => {
  return (
    <>
      <Header />
      <MyLogin />
      <Container id="detail" className='mt-2'>
        <Card className='py-5'>
          <Outlet />
        </Card>
      </Container>
      <Footer />
    </>
  )
}
