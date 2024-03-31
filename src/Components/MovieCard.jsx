import React from 'react'
import { NavLink } from 'react-router-dom';

function MovieCard({movie}) {
    const {original_title : title , original_language : language , poster_path : poster , id} = movie;
  return (
    <NavLink to={`/movie/${id}`}>
    <div className='movie-card bg-white cursor-pointer hover:text-[#6366F1] relative min-w-[16rem] min-h-[16rem] mx-6 my-8 p-0 shadow-lg rounded-lg pb-2'>
       <img  src={ poster ? `https://image.tmdb.org/t/p/w500/${poster}` : '../src/assets/PosterImage.jpg'}  className='movie-poster border-none rounded-tl-lg rounded-tr-lg object-fill w-full h-full md:min-w-[12rem] md:h-[25rem]'  alt="movie poster" />

        <h1 className='font-bold p-2 text-[1.15rem] leading-6'>{title}</h1>
        <p className='absolute font-bold text-base tracking-wider top-2 right-2 bg-blue-300 text-black p-1 rounded-tr-lg rounded-bl-lg'>{language}</p>
    </div> 
    </NavLink>
  )
}

export default MovieCard
