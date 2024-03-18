import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { v4 as uuidv4 } from 'uuid';
import MovieLists from '../Components/MovieLists';

  const popularUrl = 'https://api.themoviedb.org/3/movie/popular'
  const topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated'
  const upcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming'
  const nowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing'


const options = {
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGFjMTgwMjM2MTIxZTRhYmVjZDdiMzcyMWI0Njg0MSIsInN1YiI6IjY1OWQwOGU1Zjg1OTU4MDFhODExOTY0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jl4vuS9kr0mczRAsBrD65L9yj0qZRMJ6OW_59d896zc'
  }
};


const queryFunc = async() => {
        const popularResponse = await axios.get(popularUrl , options)
        const topRatedResponse = await axios.get(topRatedUrl , options)
        const nowPlayingResponse = await axios.get(nowPlayingUrl , options)
        const upcomingResponse = await axios.get(upcomingUrl , options)
     return [{name : 'Popular Movies' ,response : popularResponse},
            {name : 'Top Rated Movies' ,response : topRatedResponse},
            {name : 'Now Playing Movies' ,response : nowPlayingResponse},
            {name : 'Upcoming Movies' ,response : upcomingResponse}
      ]
}

function Home() {
    const {data} = useQuery({queryKey : ['movies'],queryFn : queryFunc})

  return (
    <>
    <div className='intro pt-20 md:pt-28 flex flex-col justify-around items-center md:flex-row md:justify-around md:item-center'>
      <div className='p-8'>
      <h1 className='text-3xl font-bold tracking-widest pb-4'>WatchWise</h1>
      <p className='tracking-wider'>Introducing WatchWise, your ultimate destination for unraveling the enchanting world of cinema!
      Immerse yourself in a cinematic journey like never before with our comprehensive movie database site. 
      WatchWise is designed to be your go-to hub for all things movies, offering an extensive collection of film details at your fingertips. </p>
      </div>
      <img src="src/assets/hero-svg.svg" className='sm:mr-10' alt="hero image" width={350}height={350}/>
    </div>
    {/* border-2 border-solid border-black */}
    
    <section className='movielist-content p-0 mt-16'>
      <div class="custom-shape-divider-tringle">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
    </svg>
</div>
      {
        data?.map((resObj) => {
        const id = uuidv4()
        return <MovieLists resObj={resObj} key={id}/>          
        })
      }
      <div class="custom-shape-divider-tringle-asymmetrical">
     <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
    </svg>
</div>
    </section>
    </>
  )
}

export default Home
