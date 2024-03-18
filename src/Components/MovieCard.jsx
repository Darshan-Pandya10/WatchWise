import React from 'react'

function MovieCard({movie}) {
    const {original_title : title , original_language : language , poster_path : poster} = movie;
  return (
    <div className='movie-card relative min-w-[16rem] min-h-[16rem] mx-6 my-8 p-2 pb-4 shadow-lg rounded-lg'>
        <img  src={`https://image.tmdb.org/t/p/w500/${poster}`} className='object-cover w-full h-full'  alt="movie poster" />
        <h1 className='font-bold p-2 break-normal tracking-wider text-[1.15rem] leading-6 '>{title}</h1>
        <p className='absolute font-bold text-base tracking-wider top-2 right-2 bg-blue-300 text-black p-1 rounded-bl-lg'>{language}</p>
    </div>
  )
}

export default MovieCard
// width={250} height={300}