import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import { WatchListContext } from '../App';



function MovieCard({movie}) {

  const {watchList , setWatchList} = useContext(WatchListContext)
  const moviesArray = watchList
  // console.log(watchList)


    const {original_title : title , original_language : language , poster_path : poster , id} = movie;

    //  watchList.length >=1 && watchList.map((movie) => {
    //   if( movie.id === id){
    //     return
    //   }
    //   else
    //       moviesArray.push(movieData)
    // })

  const movieData = {title , language, poster , id}
  let uniqueMovieList = watchList.filter((movie) => movie.id === movieData.id)

  const addToWatchList = () => {

    console.log(uniqueMovieList)
    uniqueMovieList.length === 0 && moviesArray.push(movieData)
    
    localStorage.setItem('movies' , JSON.stringify(watchList))
    setWatchList(watchList)
  }

  // const isInWatchList = watchList.filter((movie) => movie.id === id) ? false : true
  // console.log(isInWatchList)

  return (
    <div className='movie-card bg-white cursor-pointer  relative min-w-[16rem] min-h-[14rem] mx-6 my-8 p-0 shadow-lg rounded-lg pb-2'>
       <img  src={ poster ? `https://image.tmdb.org/t/p/w500/${poster}` : '../src/assets/PosterImage.jpg'}  className='movie-poster border-none rounded-tl-lg rounded-tr-lg object-fill w-full h-full md:min-w-[12rem] md:h-[20rem]'  alt="movie poster" />
        <NavLink to={`/movie/${id}`}>
        <h1 className='font-bold p-2 text-[1.15rem] leading-6 hover:text-[#6366F1]'>{title}</h1>
        </NavLink>
          <MdOutlineBookmarkAdd
            size={32}
            className='absolute top-2 left-2 rounded-[50%] bg-blue-300 p-[4px]'
            onClick={() => addToWatchList()} />
        

        <p className='absolute font-bold text-base tracking-wider top-2 right-2 bg-blue-300 text-black p-1 rounded-tr-lg rounded-bl-lg'>{language}</p>
    </div> 
  )
}

export default MovieCard
