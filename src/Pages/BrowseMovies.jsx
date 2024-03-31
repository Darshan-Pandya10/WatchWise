import React , {useState} from 'react';
import { useQuery } from '@tanstack/react-query';
import Form from '../Components/Form';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import MovieCard from '../Components/MovieCard';

function BrowseMovies() {

  let responseId = null

  const [searchInput , setSearchInput ] = useState({
     query : 'iron man',
     includeAdult : false,
     language : 'en-US',
     year : 2008
  })

   const queryFunc = async (options) => {
    const response = await axios.request(options);
    responseId = response?.data?.results[0]?.id
    console.log(response)
    return response.data.results;
  };


  const getOptions = (userInput) => {
    console.log(userInput)
    setSearchInput(userInput)
  let params = {
    query: searchInput.query,
    include_adult: searchInput.includeAdult.toString(),
    language: searchInput.language,
    // primary_release_year: searchInput.year.toString(),
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
  return options
};

    console.log(searchInput)


 const {data , isLoading , isError , error , refetch} = useQuery({
  queryKey : ['searchedMovie' , responseId],
  queryFn: () => queryFunc(getOptions(searchInput)),
  enabled:false,
  refetchOnWindowFocus:false,
})
console.log(data)
// console.log(error)


//   //Loading Screen

if(isLoading){
  return (
  <section className='browse-movies pt-20'>
   <div className="loader"></div>
  </section>
  )
}

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

    <div className='browse-movies min-h-screen pt-20 px-4 pb-32'>
      <Form getOptions={getOptions} searchInput={searchInput} refetch={refetch}/>
       { data && <h1 className='text-xl mt-8 md:mt-16 mx-4 md:mx-8 tracking-wider mb-8 border-8 rounded-tr-md rounded-br-md border-solid border-t-0 border-r-0 border-b-0 border-l-black font-semibold bg-[#6366f1] w-fit pr-5 drop-shadow-sm p-2 text-white'>{data.length === 1 ? 'Result' : 'Results'}</h1>}
      <div className='movie-slide flex justify-start mx-4 md:mx-8 items-start overflow-x-scroll overflow-y-hidden'>
        {
        data?.map((movie) => {
        const id = uuidv4()
        return <MovieCard movie={movie} key={id}/>
      })}
      </div>
    </div>
  );
}

export default BrowseMovies;
