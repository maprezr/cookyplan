import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import MyLogin from '../Login/Login'
import { Footer } from '../Footer/Footer'


export const Layout = () => {
  return (
    <>
      <Header />
      <MyLogin />
      <div id="detail" class='m-5 card'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
