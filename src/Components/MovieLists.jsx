import React from 'react'
import MovieCard from './MovieCard'
import { v4 as uuidv4 } from 'uuid';


function MovieLists({resObj}) {

    const listName = resObj.name;
    const result = resObj.response.data.results
  return (
    <div className='movie-section pb-16 px-12'>
      <h1 className='text-xl tracking-wider mb-8 border-8 rounded-tr-md rounded-br-md border-solid border-t-0 border-r-0 border-b-0 border-l-black font-semibold bg-[#6366f1] w-fit pr-5 drop-shadow-sm p-2 text-white'>{listName}</h1>
      <div className='movie-slide flex justify-start items-start overflow-x-scroll overflow-y-hidden'>
        {result.map((movie) => {
        const id = uuidv4()
        return <MovieCard movie={movie} key={id}/>
      })}
      </div>
    
    </div>
  )
}
export default MovieLists
