import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { MdBookmarkAdd } from "react-icons/md";
import { WatchListContext } from '../App';



function MovieCard({movie}) {

  const {watchList , setWatchList} = useContext(WatchListContext)
  const moviesArray = watchList
  // console.log(watchList)


    const {original_title : title , original_language : language , poster_path : poster , id} = movie;

  const addToWatchList = () => {
    const movieData = {title , language, poster , id}
    moviesArray.push(movieData)
    localStorage.setItem('movies' , JSON.stringify(watchList))
    setWatchList(watchList)
  }

  return (
    <div className='movie-card bg-white cursor-pointer  relative min-w-[16rem] min-h-[16rem] mx-6 my-8 p-0 shadow-lg rounded-lg pb-2'>
       <img  src={ poster ? `https://image.tmdb.org/t/p/w500/${poster}` : '../src/assets/PosterImage.jpg'}  className='movie-poster border-none rounded-tl-lg rounded-tr-lg object-fill w-full h-full md:min-w-[12rem] md:h-[25rem]'  alt="movie poster" />
        <NavLink to={`/movie/${id}`}>
        <h1 className='font-bold p-2 text-[1.15rem] leading-6 hover:text-[#6366F1]'>{title}</h1>
        </NavLink>

        <MdBookmarkAdd size={26} onClick={() => addToWatchList()} />

        <p className='absolute font-bold text-base tracking-wider top-2 right-2 bg-blue-300 text-black p-1 rounded-tr-lg rounded-bl-lg'>{language}</p>
    </div> 
  )
}

export default MovieCard
