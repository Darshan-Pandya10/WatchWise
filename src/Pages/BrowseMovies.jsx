import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Form from '../Components/Form';
import axios from 'axios';

function BrowseMovies() {

    let responseId = null

  const queryFunc = async (options) => {
    const response = await axios.request(options);
    responseId = response?.data?.results[0]?.id
    console.log(response)
    return response;
  };

  
  const onSubmit = (searchInput) => {
  console.log(searchInput);
  const params = {
    query: searchInput.query,
    include_adult: searchInput.includeAdult.toString(),
    language: searchInput.language,
    primary_release_year: searchInput.year.toString(),
    page: '1',
    year: searchInput.year.toString(),
  };

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: params,
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNGFjMTgwMjM2MTIxZTRhYmVjZDdiMzcyMWI0Njg0MSIsInN1YiI6IjY1OWQwOGU1Zjg1OTU4MDFhODExOTY0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jl4vuS9kr0mczRAsBrD65L9yj0qZRMJ6OW_59d896zc',
    },
  };
  console.log(options);
  queryFunc(options);
};

 const {data , isError , error , refetch} = useQuery({
  queryKey : ['searchedMovie' , responseId],
  queryFn: queryFunc,
  enabled:false,
  refetchOnWindowFocus:false,
})

console.log(data)
console.log(error)

  //Loading Screen

// if(isLoading){
//   return (
//   <section className='browse-movies pt-20'>
//    <div className="loader"></div>
//   </section>
//   )
// }

//404 Error Image

if(error?.response?.status === 404){
  return(
    <section className='browse-movies flex items-center justify-center'>
      <img src='../src/assets/404-error.svg' alt='404 error image' className='object-cover w-fit h-fit' />
    </section>
  )
}

//For anyother error excluding 404

if(isError){
  return (
  <section className='browse-movies pt-20 px-12'>
   <h1 className='font-bold text-xl tracking-wider'>Error : {error.message}</h1>
  </section>
  )
}

  return (

    <div className='browse-movies min-h-screen pt-20 px-4'>
      <Form onSubmit={onSubmit} refetch={refetch}/>
      <div className='movie-slide flex justify-start items-start overflow-x-scroll overflow-y-hidden'>
        {/* { data?.data?.results?.length >=1 && 
        data?.data?.results.map((movie) => {
        const id = uuidv4()
        return <MovieCard movie={movie} key={id}/>
      })} */}
      </div>
    </div>
  );
}

export default BrowseMovies;
