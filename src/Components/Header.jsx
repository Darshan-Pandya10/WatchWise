import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className='header shadow-lg flex flex-col justify-around items-start p-4 sm:flex-row sm:justify-between sm:items-center'>
      <h1 className='font-semibold text-xl md:text-2xl'>WatchWise</h1>
      <nav className='mt-3 sm:mt-0 flex flex-col justify-around items-start sm:flex-row sm:justify-center sm:items-center'>
                <NavLink className='mb-1 sm:mr-3 sm:mb-0' to='/'>Home</NavLink>
                <NavLink className='mb-1 sm:mr-3 sm:mb-0' to='browse-movies'>BrowseMovies</NavLink>
                <NavLink className='mb-1 sm:mr-3 sm:mb-0' to='about'>About</NavLink>
      </nav>
    </div>
  )
}

export default Header
