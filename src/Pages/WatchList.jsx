import React from 'react'
import { useContext } from 'react'
import { WatchListContext } from '../App'
import { v4 as uuidv4 } from 'uuid';
import WatchListMovieCard from '../Components/WatchListMovieCard'


const WatchList = () => {

    const {watchList , setWatchList} = useContext(WatchListContext)


  return (
    <section className='watchlist min-h-screen pb-16 pt-20 md:pt-32 px-8 mb-20'>
        <section className="watchlist-contianer m-8 p-8 rounded-lg  flex justify-center items-center flex-wrap bg-slate-300">
            {watchList.length >= 1  ?  watchList.map((movie) => {
                const id = uuidv4()
                return <WatchListMovieCard movie={movie} key={id}/>
                }) :
                <h1 className='text-xl font-semibold tracking-widest text-center m-4'>Your WatchList Is Empty!</h1>
            }
        </section>
        
    </section>
  )
}

export default WatchList
