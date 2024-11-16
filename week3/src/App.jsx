import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import NotFound from './pages/not-found';
import Movies from './pages/movies/movies';
import RootLayout from './layout/root-layout';
import HomePage from './pages/home';
import SearchPage from './pages/search';
import Login from './pages/login';
import SignUp from './pages/signup';
import NowPlaying from './pages/movies/nowplaying';
import Popular from './pages/movies/popular';
import TopRated from './pages/movies/toprated';
import UpComing from './pages/movies/upcoming';
import MovieLayout from './layout/movie-layout';
import MovieDetailPage from './pages/movies/moviedetail';

function App() {

  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout/>,
      errorElement: <NotFound/>,
      // 1. Navbar 밑에 path에 해당하는 element를 보여주고 싶으면 아래와 같이 children을 활용
      children: [
        {
          // 2. index: true는 위의 path: '/' 즉, 홈 경로를 의미한다.
          index: true,
          element: <HomePage/>
        },
        {
          // 3. 부모의 path가 '/'이니, /를 붙이지 않아도 /movies랑 동일하게 동작한다.
          path: 'movies',
          element: <MovieLayout/>,
          children: [
            {
              index: true,
              element: <Movies/>
            },
            {
              path: ':movieId',
              element: <MovieDetailPage/>
            },
            {
              path: 'now_playing',
              element: <NowPlaying/>
            },
            {
              path: 'popular',
              element: <Popular/>
            },
            {
              path: 'top_rated',
              element: <TopRated/>
            },
            {
              path: 'upcoming',
              element: <UpComing/>
            }
          ]
        },
        {
          path: 'search',
          element: <SearchPage/>
        },
        {
          path: 'login',
          element: <Login/>
        },
        {
          path: 'signup',
          element: <SignUp/>
        }
      ]
    },
  ])

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
