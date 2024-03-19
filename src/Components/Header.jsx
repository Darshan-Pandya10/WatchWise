import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

function Header() {
  return (  
    <div className='header fixed z-50 backdrop-blur-lg w-screen shadow-lg flex flex-col justify-around items-start p-4 sm:flex-row sm:justify-between sm:items-center'>
      <h1 className='font-semibold text-xl md:text-2xl'>
        <span className='text-[#6366f1] font-bold'>W</span>
        atch
        <span className='text-[#6366f1] font-bold'>W</span>
        ise
        </h1>
      <nav className='mt-3 sm:mt-0 flex flex-col justify-around items-start sm:flex-row sm:justify-center sm:items-center'>
                <NavLink className='navlink mb-1 sm:mr-3 sm:mb-0 text-[1.1rem]' to='/'>Home</NavLink>
                <NavLink className='navlink mb-1 sm:mr-3 sm:mb-0 text-[1.1rem]' to='browse-movies'>BrowseMovies</NavLink>
                <NavLink className='navlink mb-1 sm:mr-3 sm:mb-0 text-[1.1rem]' to='about'>About</NavLink>
      </nav>
    </div>
  )
}

export default Header
