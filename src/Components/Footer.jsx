import React from 'react'
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { RiMovie2Fill } from "react-icons/ri";

function Footer() {
  return (
   <footer className="footer footer-center p-10 bg-base-200 text-base-content">
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a target='_blank' href='https://github.com/Darshan-Pandya10/WatchWise'><FaGithub size={26} /></a>
      <a target='_blank' href='www.linkedin.com/in/darshanpandya811'><BsLinkedin size={26} /></a>
      <a target='_blank' href='https://www.themoviedb.org/'><RiMovie2Fill size={26} /></a>
    </div>
  </nav> 
  <aside>
    <p className='mb-8 tracking-wider'>Copyright © 2024 - All right reserved by <span className='text-[#6366f1] font-bold'>W</span>
        atch
        <span className='text-[#6366f1] font-bold'>W</span>
        ise</p>
  </aside>
</footer>
  )
}

export default Footer
