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
      const {original_title : title , original_language : language , overview , poster_path : poster , release_date ,status , budget , revenue , homepage , genres , production_companies ,runtime } = data.data

      const formattedBudget = budget.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });

      const formattedRevenue = revenue.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      });

      function NumToTime(runtime) { 
        var hours = Math.floor(runtime / 60);  
        var minutes = runtime % 60;
        if (minutes + ''.length < 2) {
          minutes = '0' + minutes; 
        }
        return hours + ":" + minutes;
     }

  return (
    <section className='details-page'>
      <h1 className='title text-2xl tracking-wider font-semibold bg-black text-white mx-auto my-2 px-8 py-4 w-fit sm:px-8 sm:py-4 md:w-fit text-center mb-8'>{title}</h1>
      <div className="container w-[90vw] sm:w-[90vw] md:w-[90vw] shadow-lg rounded-lg mb-12 md:mb-16 mx-auto p-8 pb-16 flex flex-col justify-center items-center md:flex md:flex-row md:justify-around md:items-center">
        <div className="poster relative w-fit mr-0 md:mr-8 flex items-center justify-center">
          <span className='absolute text-white top-2 px-4 -left-6 tracking-wider bg-green-500 -rotate-45 rounded-bl-lg rounded-tr-lg shadow-2xl pb-1'>{status}</span>
          <img src={`https://image.tmdb.org/t/p/w500/${poster}`} className='poster-image object-cover w-fit h-fit sm:object-cover sm:w-[20rem] sm:h-[30rem]' alt={`Poster Image of ${title} Movie`}/>
        </div>
        <div className="details w-fit md:w-[30rem] mt-12 md:mt-0 h-full p-4">
          <p className='label'><span className='label-span'>Overview : </span> {overview}</p>
          <p className='label'><span className='label-span'>Original Language : </span> {language.toUpperCase()}</p>
          <p className='label'><span className='label-span'>Genres : </span>{genres?.map((genre , index) => <p  key ={index} className='inline'>{genre.name} {index < genres.length - 1 ? ',' : ''} </p>)}</p>
          <p className='label'><span className='label-span'>RunTime : </span> {NumToTime(runtime)} hours</p>
          <p className='label'><span className='label-span'>Release Date : </span> {release_date}</p>
          {/* <p className='label'><span className='label-span'>Status : </span> {status}</p> */}
          <p className='label'><span className='label-span'>Budget : </span> {formattedBudget}</p>
          <p className='label'><span className='label-span'>Revenue : </span> {formattedRevenue}</p>
          <p className='label'><span className='label-span'>Production Company/Companies : </span>{production_companies?.map((company , index) => {
            return <p key ={index} className='inline'> {company.name} {index < production_companies.length - 1 ? ',' : ''} </p>
          })}</p>


          <a className='px-4 py-2 my-2 font-semibold tracking-wide inline-block bg-[#6366F1] hover:bg-[#9193f7]' href={homepage}>Movie Homepage</a>
        </div>
      </div>
    </section>
  )
} 

export default Movie
