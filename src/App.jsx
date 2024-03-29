import './App.css'
import AppLayout from './Pages/AppLayout'
import Home from './Pages/Home'
import BrowseMovies from './Pages/BrowseMovies'
import Movie from './Pages/Movie'
import About from './Pages/About'
import Error from './Pages/Error'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

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
        path:'about',
        element: <About/>
      }
    ]
  }
])


function App() {
 

  return (
    <div className='app'>
      <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}/>
      </QueryClientProvider>
    </div>
  )
}

export default App
