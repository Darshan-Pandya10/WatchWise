import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { RiMovie2Fill } from "react-icons/ri";

function Footer() {
  return (
   <footer className="footer bg-black p-10 w-screen">
    <p className=' tracking-wider font-semibold text-white'>Copyright © 2024 - All right reserved by WatchWise.</p>
    <div className="icons flex items-center justify-self-end">
      <a target='_blank' href='https://github.com/Darshan-Pandya10/WatchWise' className='text-white hover:text-[#6366F1]'><FaGithub size={26} /></a>
      <a target='_blank' href='www.linkedin.com/in/darshanpandya811' className='text-white hover:text-[#6366F1]'><BsLinkedin size={26} /></a>
      <a target='_blank' href='https://www.themoviedb.org/' className='text-white hover:text-[#6366F1]'><RiMovie2Fill size={26} /></a>
    </div>
</footer>
  )
}

export default Footer
