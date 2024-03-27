import React from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import MovieCard from '../Components/MovieCard'
import ReviewCard from '../Components/ReviewCard'
import { v4 as uuidv4 } from 'uuid';



function Movie() {

  const {id} = useParams()
  const url = `https://api.themoviedb.org/3/movie/${id}`
  const urlForRecommendations = `https://api.themoviedb.org/3/movie/${id}/recommendations`
  const urlForReviews = `https://api.themoviedb.org/3/movie/${id}/reviews`

  const options = {
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGFjMTgwMjM2MTIxZTRhYmVjZDdiMzcyMWI0Njg0MSIsInN1YiI6IjY1OWQwOGU1Zjg1OTU4MDFhODExOTY0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jl4vuS9kr0mczRAsBrD65L9yj0qZRMJ6OW_59d896zc'
  }
};

  const queryFunc = async() => {
    const response = await axios.request(url , options)
    return response
  }

  const {data , isLoading , isError , error} = useQuery({
    queryKey : ['movie' , {id}],
    queryFn : queryFunc
  })

// Movie Reviews


  const queryFuncForReviews = async() => {
    const response = await axios.request(urlForReviews , options)
    return response?.data?.results
  }

  const {data : reviewsData , isLoading : reviewsIsLoading , isError :reviewsIsError} = useQuery({
    queryKey : ['movieReviews' , {id}],
    queryFn : queryFuncForReviews,
  })
  console.log(reviewsData)
  let Reviews = reviewsData?.length > 10 ? reviewsData.slice(0,10) : reviewsData


  //  recommendations

  const optionsForRecommendations = {
  method: 'GET',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGFjMTgwMjM2MTIxZTRhYmVjZDdiMzcyMWI0Njg0MSIsInN1YiI6IjY1OWQwOGU1Zjg1OTU4MDFhODExOTY0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jl4vuS9kr0mczRAsBrD65L9yj0qZRMJ6OW_59d896zc'
  }
};

  const queryFuncForRecommendations = async() => {
    const responseForRecommendations = await axios.request(urlForRecommendations , optionsForRecommendations)
    return responseForRecommendations
  }


  const {data : recommendationsData , isLoading : recommendationsIsLoading  , isError : recommendationsIsError , error : recommendationsError} = useQuery({
    queryKey : ['recommendations' , {id}],
    queryFn : queryFuncForRecommendations,
    
  })


// Loading Screen

if(isLoading || recommendationsIsLoading || reviewsIsLoading){
  return (
  <section className='details-page'>
   <div className="loader"></div>
  </section>
  )
}

// 404 Error Image

if(error?.response?.status || recommendationsError?.response?.status === 404){
  return(
    <section className='details-page flex items-center justify-center'>
      <img src='../src/assets/404-error.svg' alt='404 error image' className='object-cover w-fit h-fit' />
    </section>
  )
}

// For anyother error excluding 404

if(isError || recommendationsIsError || reviewsIsError){
  return (
  <section className='details-page'>
   <h1 className='font-bold text-xl tracking-wider'>Error : {error.message}</h1>
  </section>
  )
}


  const {original_title : title , original_language : language , overview , poster_path : poster , release_date ,status , budget , revenue , homepage , genres , production_companies , runtime , belongs_to_collection } = data.data

      
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
        return hours + " : " + minutes;
      }

    // Input date in YYYY-MM-DD format
    let inputDate = release_date;

    // Split the input date into year, month, and day
    let parts = inputDate.split("-");
    let year = parts[0];
    let month = parts[1];
    let day = parts[2];

    // Format the date to DD-MM-YYYY format
    let outputDate = day + "-" + month + "-" + year;



  return (
    <section className='details-page'>

      <h1 className='title text-2xl tracking-wider font-semibold bg-black text-white mx-auto px-8 py-4 -mt-4 w-fit sm:px-8 sm:py-4 md:w-fit text-center mb-16'>{title}</h1>

      <div className="container md:w-[90vw] max-w-screen-xl mx-auto flex flex-col lg:flex-row lg:justify-center items-center md:shadow-lg rounded-lg mb-12 md:mb-20 pb-12 p-4">

  <div className="poster relative w-fit md:w-auto mr-0 md:mr-8 flex items-center justify-center">
    {/* <span className='absolute text-white top-3 px-4 -left-6 tracking-wider bg-green-500 -rotate-45 rounded-bl-lg rounded-tr-lg shadow-2xl pb-1'>{status}</span> */}
    <img src={`https://image.tmdb.org/t/p/w500/${poster}`} className='poster-image shadow-2xl object-cover mx-12 w-fit h-[35rem] sm:w-[25rem] md:w-fit md:h-[35rem]' alt={`Poster Image of ${title} Movie`} />
  </div>

  <div className="details w-full md:w-[30rem] mt-8 lg:mt-0 md:ml-4 p-0">
    {/* <h2 className="text-xl font-semibold mb-4">{title}</h2> */}
    <p className='label overview'>{overview}</p>
    <p className='label capitalize'><span className='label-span'>Original Language : </span> {language}</p>
    <div className='label genres flex flex-wrap items-center justify-start'><span className='label-span '>Genres :</span>{genres?.map((genre, index) => <span key={index} className='inline-block cursor-pointer mt-1 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-1'>{genre.name}</span>)}</div>
    {belongs_to_collection ? <p className='label'><span className='label-span'>Collection :</span>{belongs_to_collection.name}</p> : null}
    <p className='label'><span className='label-span'>RunTime :</span> {NumToTime(runtime)} hours</p>
    <p className='label'><span className='label-span'>Release Date :</span> {outputDate}</p>
    {/* <p className='label'><span className='label-span'>Status : </span> {status}</p> */}
    <p className='label'><span className='label-span'>Budget :</span> {formattedBudget}</p>
    <p className='label'><span className='label-span'>Revenue :</span> {formattedRevenue}</p>
    <div className='production-companies mb-4 ml-1'><span className='label-span'>Production Company(ies) :</span>{production_companies?.map((company, index) => {
      return <span key={index} className='inline-block mt-1 cursor-pointer bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold mr-1'>{company.name}</span>
    })}</div>
    <a target='_blank' rel="noopener noreferrer" className='px-4 py-2 my-2 font-semibold tracking-wide inline-block bg-[#6366F1] hover:bg-[#9193f7] text-white rounded-md' href={homepage}>Movie Homepage</a>
  </div>

</div>

{/* Reviews */}

      <h1 className='text-xl tracking-wider mb-8 border-8 rounded-tr-md rounded-br-md border-solid border-t-0 border-r-0 border-b-0 border-l-black font-semibold bg-[#6366f1] w-fit pr-5 ml-6 drop-shadow-sm p-2 text-white'>Reviews </h1>

    <div className={`reviewsContent ${Reviews.length === 1 ? 'sm:w-[35rem]' : 'w-auto'} w-auto flex overflow-x-scroll mb-16`}>
    {Reviews?.map((review) => {
      const id = uuidv4()
      return <ReviewCard reviewsCount={Reviews.length} review={review} key={id} />
    })}
    </div>


    {/* Recommendations movie list  */}
      <h1 className='text-xl tracking-wider mb-8 border-8 rounded-tr-md rounded-br-md border-solid border-t-0 border-r-0 border-b-0 border-l-black font-semibold bg-[#6366f1] w-fit pr-5 ml-6 drop-shadow-sm p-2 text-white'>Recommendations </h1>
    <div className="recommendations ml-6 movie-slide flex justify-start items-start overflow-x-scroll overflow-y-hidden mb-16">
      
      {recommendationsData?.data?.results?.map((movie , index) => {
          const id = uuidv4()
          return <MovieCard movie={movie} key={id} className='movie-card min-w-[12rem] min-h-[12rem] text-[0.75rem]'  />
      })}
    </div>


    </section>
  )
} 

export default Movie
