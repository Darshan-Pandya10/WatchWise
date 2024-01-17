import React from 'react'
import MovieCard from './MovieCard'
import { v4 as uuidv4 } from 'uuid';


function MovieLists({resObj}) {

    const listName = resObj.name;
    const result = resObj.response.data.results
    console.log(result)
  return (
    <div className='movie-section border-2 border-solid border-red-400 my-8 '>
      <h1 className='text-2xl tracking-wider font-semibold'>{listName}</h1>
      <div className='movie-slide grid grid-cols-4 grid-rows-5 '>
        {result.map((movie) => {
        const id = uuidv4()
        return <MovieCard movie={movie} key={id}/>
      })}
      </div>
    
    </div>
  )
}

export default MovieLists
