import React from 'react'
import { NavLink } from 'react-router-dom';

function MovieCard({movie}) {
    const {original_title : title , original_language : language , poster_path : poster , id} = movie;
  return (
    <div className='movie-card bg-white cursor-pointer hover:text-[#6366F1] relative min-w-[16rem] min-h-[16rem] mx-6 my-8 p-0 shadow-lg rounded-lg '>
        <img  src={`https://image.tmdb.org/t/p/w500/${poster}`} className='movie-poster border-none rounded-tl-lg rounded-tr-lg object-cover w-full h-full'  alt="movie poster" />
        <NavLink to={`/movie/${id}`}>
        <h1 className='font-bold p-2 break-normal text-[1.15rem] leading-6 '>{title}</h1>
        </NavLink>
        <p className='absolute font-bold text-base tracking-wider top-2 right-2 bg-blue-300 text-black p-1 rounded-tr-lg rounded-bl-lg'>{language}</p>
    </div> 
  )
}

export default MovieCard
