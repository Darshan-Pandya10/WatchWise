import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { RiMovie2Fill } from "react-icons/ri";

function Footer() {
  return (
   <footer className="footer flex flex-col items-center justify-center bg-black w-screen">
  <div className="icons flex items-center justify-center mt-2 -mb-8">
    <a target='_blank' href='https://github.com/Darshan-Pandya10/WatchWise' className='m-2 text-white hover:text-[#6366F1]'><FaGithub size={26} /></a>
    <a target='_blank' href='www.linkedin.com/in/darshanpandya811' className='m-2 text-white hover:text-[#6366F1]'><BsLinkedin size={26} /></a>
    <a target='_blank' href='https://www.themoviedb.org/' className='m-2 text-white hover:text-[#6366F1]'><RiMovie2Fill size={26} /></a>
  </div>
  <p className='tracking-wider px-2 font-semibold text-center text-white mb-4'>Copyright © 2024 - All rights reserved by WatchWise.</p>
</footer>

  )
}

export default Footer
