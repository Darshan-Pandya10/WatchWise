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
    <div className='intro relative pb-16 pt-20 md:pt-32 flex flex-col justify-around items-center md:flex-row md:justify-around md:item-center'>
      <div className='p-8'>
      <h1 className='text-3xl font-bold tracking-widest pb-4'>WatchWise</h1>
      <p className='tracking-wider text-[1.05rem]'>Introducing WatchWise, your ultimate destination for unraveling the enchanting world of cinema!
      Immerse yourself in a cinematic journey like never before with our comprehensive movie database site. 
      WatchWise is designed to be your go-to hub for all things movies, offering an extensive collection of film details at your fingertips. </p>
      </div>
      <img src="src/assets/hero-svg.svg" className='sm:mr-14' alt="hero image" width={350}height={350}/>
    </div>
    {/* border-2 border-solid border-black */}
    
    <section className='movielist-content p-0'>
      <div className="custom-shape-divider-wave mb-20">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
    </svg>
</div>
      {
        data?.map((resObj) => {
        const id = uuidv4()
        return <MovieLists resObj={resObj} key={id}/>          
        })
      }
    </section>
    </>
  )
}

export default Home
