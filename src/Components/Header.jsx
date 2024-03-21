import React, { useState } from 'react'
import { NavLink , Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import '../App.css'

function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  
  const handleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  }

  return (  
    <div className='header fixed h-fit z-50 backdrop-blur-lg w-screen shadow-lg flex flex-col justify-around items-start p-4 sm:flex-row sm:justify-between sm:items-center'>
      <Link to='/'>
      <h1 className='font-semibold text-xl md:text-2xl'>
        <span className='text-[#6366f1] font-bold'>W</span>
        atch
        <span className='text-[#6366f1] font-bold'>W</span>
        ise
      </h1>
      </Link>
      <div className='sm:hidden'> 
      <button onClick={handleNavbar} className='absolute top-4 right-4'> {isNavbarVisible ? <RxCross1 className='hover:text-[#6366F1]' size={26} /> : <RxHamburgerMenu className='hover:text-[#6366F1]'  size={26} />}</button>
      </div>
        <nav className='mt-3 sm:mt-0 hidden sm:flex sm:justify-center sm:items-center font-semibold text-[1rem]'>
          <NavLink className='navlink mb-1 sm:mr-3 sm:mb-0' to='/'>Home</NavLink>
          <NavLink className='navlink mb-1 sm:mr-3 sm:mb-0' to='browse-movies'>BrowseMovies</NavLink>
          <NavLink className='navlink mb-1 sm:mr-3 sm:mb-0' to='about'>About</NavLink>
        </nav>
        {isNavbarVisible && <nav className='mt-4 tracking-wider font-semibold'>
          <NavLink className='navlink mb-1' to='/'>Home</NavLink>
          <NavLink className='navlink mb-1 block' to='browse-movies'>BrowseMovies</NavLink>
          <NavLink className='navlink mb-1 block' to='about'>About</NavLink>
        </nav>}
    </div>
  )
}

export default Header
