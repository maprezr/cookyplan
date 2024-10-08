import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Header />
      <div id="detail" class='mt-5'>
        <Outlet />
      </div>
      <h3>Este es un footer</h3>
    </>
  )
}
