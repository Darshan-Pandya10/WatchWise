import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function Movie() {
  const {id} = useParams()
  const url = `https://api.themoviedb.org/3/movie/${id}`

  const options = {
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGFjMTgwMjM2MTIxZTRhYmVjZDdiMzcyMWI0Njg0MSIsInN1YiI6IjY1OWQwOGU1Zjg1OTU4MDFhODExOTY0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jl4vuS9kr0mczRAsBrD65L9yj0qZRMJ6OW_59d896zc'
  }
};

const queryFunc = async() => {
  const response = await axios.get(url , options)
  return response
}

const {data , isLoading , isError , error} = useQuery({
  queryKey : ['movie' , {id}],
  queryFn : queryFunc
})

// Loading Screen

if(isLoading){
  return (
  <section className='details-page'>
   <div className="loader"></div>
  </section>
  )
}

// 404 Error Image

if(error?.response?.status === 404){
  return(
    <section className='details-page flex items-center justify-center'>
      <img src='../src/assets/404-error.svg' alt='404 error image' className='object-cover w-fit h-fit' />
    </section>
  )
}

// For anyother error excluding 404

if(isError){
  return (
  <section className='details-page'>
   <h1 className='font-bold text-xl tracking-wider'>Error : {error.message}</h1>
  </section>
  )
}
      console.log(data)
      const {original_title : title , original_language : language , overview , poster_path : poster , release_date ,status , budget , revenue , homepage } = data.data
  return (
    <section className='details-page'>
      <h1 className='title text-2xl tracking-wider font-semibold w-[100vw] bg-black text-white sm:w-fit sm:mx-auto sm:px-8 sm:py-4 md:w-fit text-center mb-8'>{title}</h1>
      <div className="container w-[100vw] sm:w-[100vw] md:w-[90vw] shadow-lg rounded-lg mb-12 md:mb-16 mx-auto p-8 pb-16 flex flex-col justify-center items-center md:flex md:flex-row md:justify-around md:items-center">
        <div className="poster w-fit mr-0 md:mr-8 flex items-center justify-center">
          <img src={`https://image.tmdb.org/t/p/w500/${poster}`} className='poster-image object-cover w-fit h-fit sm:object-cover sm:w-[20rem] sm:h-[30rem]' alt={`Poster Image of ${title} Movie`}/>
        </div>
        <div className="details w-fit md:w-[30rem] mt-12 md:mt-0 h-full p-4">
          <p className='label'><span className='label-span'>Overview : </span> {overview}</p>
          <p className='label'><span className='label-span'>Original Language : </span> {language}</p>
          <p className='label'><span className='label-span'>Release Date : </span> {release_date}</p>
          <p className='label'><span className='label-span'>Status : </span> {status}</p>
          <p className='label'><span className='label-span'>Budget : </span> {budget}</p>
          <p className='label'><span className='label-span'>Revenue : </span> {revenue}</p>
          <a className='px-4 py-2 my-2 font-semibold tracking-wide inline-block bg-[#6366F1] hover:bg-[#9193f7]' href={homepage}>Movie Homepage</a>
        </div>
      </div>
    </section>
  )
} 

export default Movie
