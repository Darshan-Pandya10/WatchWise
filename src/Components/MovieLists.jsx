import React from 'react'
import MovieCard from './MovieCard'
import { v4 as uuidv4 } from 'uuid';


function MovieLists({resObj}) {

    const listName = resObj.name;
    const result = resObj.response.data.results
    console.log(result)
  return (
    // border-2 border-solid border-red-400
    // grid grid-cols-4 grid-rows-5
    <div className='movie-section my-16'>
      <h1 className='text-xl tracking-wider mb-8 border-8 border-solid border-t-0 border-r-0 border-b-0 border-l-black font-semibold bg-[#6366f1] w-fit pr-5 drop-shadow-sm p-2 text-white'>{listName}</h1>
      <div className='movie-slide flex overflow-scroll'>
        {result.map((movie) => {
        const id = uuidv4()
        return <MovieCard movie={movie} key={id}/>
      })}
      </div>
    
    </div>
  )
}
export default MovieLists
