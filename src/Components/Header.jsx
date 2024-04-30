import React, { useState } from 'react'
import { NavLink , Link } from 'react-router-dom'
import '../App.css'
import TabSvg from '../assets/TabSvg.svg'

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { HiOutlineHome } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";

function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  
  const handleNavbar = () => {
    setIsNavbarVisible(!isNavbarVisible);
  }

    const closeNavbar = () => {
    setIsNavbarVisible(false);
  };


  return (  
    <div className='header fixed h-fit z-50 backdrop-blur-2xl w-screen shadow-lg flex flex-col justify-around items-start p-4 sm:flex sm:flex-row sm:justify-between sm:items-center'>
      <Link to='/' className='flex'>
      <h1 className='font-semibold text-xl md:text-2xl'>
        <span className='text-[#6366f1] font-bold'>W</span>
        atch
        <span className='text-[#6366f1] font-bold'>W</span>
        ise
      </h1>
      <img src={TabSvg} className='w-[2rem] h-[2rem]' alt="" />
      </Link>



      <div className='sm:hidden'> 
      <button onClick={handleNavbar} className='absolute top-4 right-4'> {isNavbarVisible ? <RxCross1 className='hover:text-[#6366F1]' size={26} /> : <RxHamburgerMenu className='hover:text-[#6366F1]'  size={26} />}</button>
      </div>
        <nav className={`mt-3 sm:mt-0 ${
          isNavbarVisible ? '' : 'hidden'} flex flex-col items-left justify-center justify-self-center place-items-center
          w-[90vw] mx-auto min-h-screen sm:flex sm:flex-row sm:justify-end sm:items-end  sm:min-h-fit sm:ml-4 font-semibold text-[1rem]`}>


          <NavLink onClick={closeNavbar} className='navlink text-2xl tracking-widest sm:tracking-normal sm:text-base mb-1 sm:mr-3 sm:mb-0' to='/'> 
          <HiOutlineHome  className='inline-block sm:hidden mr-1' /> Home
          </NavLink>
          <NavLink onClick={closeNavbar} className='navlink text-2xl tracking-widest sm:tracking-normal sm:text-base  mb-1 sm:mr-3 sm:mb-0' to='browse-movies'> <FiSearch className='inline-block sm:hidden mr-1'  /> BrowseMovies
          </NavLink>
          <NavLink onClick={closeNavbar} className='navlink text-2xl tracking-widest sm:tracking-normal sm:text-base  mb-1 sm:mr-3 sm:mb-0' to='watchlist'> <MdOutlineBookmarkAdd className='inline-block sm:hidden mr-1'  /> WatchList
          </NavLink>
          <NavLink onClick={closeNavbar} className='navlink text-2xl tracking-widest sm:tracking-normal sm:text-base  mb-1 sm:mr-3 sm:mb-0' to='about'> <CgDetailsMore className='inline-block sm:hidden mr-1'  /> About
          </NavLink>
        </nav>
    </div>

  )
}

export default Header
