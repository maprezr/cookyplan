import React from 'react'
import Header from '../Header/Header'
import MyLogin from '../Login/Login'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'


export const Layout = () => {
  return (
    <>
      <Header />
      <MyLogin />
      <div id="detail" className='mt-2'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
