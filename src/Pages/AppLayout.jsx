import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

function AppLayout() {
  return (
    <div className='page bg-slate-100'>
      <Header/>
      <div className="content">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  )
}

export default AppLayout
