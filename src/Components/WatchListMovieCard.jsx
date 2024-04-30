import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineBookmarkRemove } from "react-icons/md";
import { WatchListContext } from '../App';



const WatchListMovieCard = ({movie}) => {

    const {title , language , poster , id} = movie
      const {watchList , setWatchList} = useContext(WatchListContext)

    // const storedData = localStorage.getItem('movies')
    // const parsedStoredData = JSON.parse(storedData)

    const removeFromWatchList = (id) => {
        const newWatchList = watchList.filter((movie) => movie.id !== id)
         if(newWatchList.length === 0) {
        localStorage.clear()
        setWatchList([])
    }
        setWatchList(newWatchList)
    }

   

     useEffect(() => { 
            localStorage.setItem('movies' , JSON.stringify(watchList))
        }, [watchList])

  return (
    <div className='movie-card bg-white cursor-pointer  relative w-[15rem] h-fit mx-6 my-8 p-0 shadow-lg rounded-lg pb-2'>
       <img  src={ poster ? `https://image.tmdb.org/t/p/w500/${poster}` : '../src/assets/PosterImage.jpg'}  className='movie-poster border-none rounded-tl-lg rounded-tr-lg object-fill w-full h-full md:min-w-[12rem] md:h-[18rem]'  alt="movie poster" />
        <NavLink to={`/movie/${id}`}>
        <h1 className='font-bold p-2 text-[1.15rem] leading-6 hover:text-[#6366F1]'>{title}</h1>
        </NavLink>

        <MdOutlineBookmarkRemove size={32} className='absolute top-2 left-2 rounded-[50%] bg-blue-300 p-[4px]' onClick={() => removeFromWatchList(id)} />

        <p className='absolute font-bold text-base tracking-wider top-2 right-2 bg-blue-300 text-black p-1 rounded-tr-lg rounded-bl-lg'>{language}</p>
    </div> 
  )
}

export default WatchListMovieCard
