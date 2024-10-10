import React from 'react'
import Header from '../Header/Header'
import MyLogin from '../Login/Login'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Header />
      <MyLogin />
      <div id="detail" className='mt-5'>
        <Outlet />
      </div>
      <h3>Este es un footer</h3>
    </>
  )
}
