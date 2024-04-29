import './App.css'
import AppLayout from './Pages/AppLayout'
import Home from './Pages/Home'
import BrowseMovies from './Pages/BrowseMovies'
import Movie from './Pages/Movie'
import About from './Pages/About'
import Error from './Pages/Error'
import WatchList from './Pages/WatchList'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createContext } from 'react';
import { useState } from 'react'




    
const storedData = localStorage.getItem('movies')
const parsedStoredData = JSON.parse(storedData)
export const WatchListContext = createContext(parsedStoredData);



const queryClient = new QueryClient({
  defaultOptions : {
    queries : {
      staleTime : 1000 * 60 * 2,
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement:<Error/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'browse-movies',
        element: <BrowseMovies/>
      },
      {
        path:'movie/:id',
        element: <Movie/>
      },
      {
        path:'watchlist',
        element: <WatchList/>
      },
      {
        path:'about',
        element: <About/>
      }
    ]
  }
])


function App() {
 
  const [watchList , setWatchList] = useState(parsedStoredData)

  return (
    <div className='app'>
      <QueryClientProvider client={queryClient}>
      <WatchListContext.Provider value={{watchList , setWatchList}}>
      <RouterProvider router={router}/>
      </WatchListContext.Provider>
      </QueryClientProvider>
    </div>
  )
}

export default App
