import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className='browse-movies pt-20 px-12 font-semibold text-xl tracking-wider w-screen h-screen bg-white'>
      <h1 className="">Oops! An Error Occurred</h1>
      <p>Please return to the <Link className="text-blue-600" to="/">HomePage</Link>.</p>

    </section>
  )
}

export default Error
