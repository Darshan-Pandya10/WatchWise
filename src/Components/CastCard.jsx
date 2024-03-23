import React from 'react'

function CastCard({cast}) {
    const {original_name : name , profile_path : picture , character } = cast
    console.log(name)


  return ( picture && (
    <div className='CastCard m-4 w-[10rem]'>
      <img src={`https://image.tmdb.org/t/p/w500/${picture}`} alt="" className=' rounded-[50%] object-cover' />
      <h1 className='text-[#6366F1] font-semibold text-xl'>{name}</h1>
      <p>As {character}</p>
    </div>
  )
  )
}

export default CastCard 
