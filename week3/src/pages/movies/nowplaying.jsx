
// 포스터, 제목, 개봉일

import { useEffect, useState } from "react";
import axios from "axios"
import MovieDetail from "./moviedetail";

const NowPlaying = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
          params: { language: 'ko-KR', page: '1' },
          headers: {
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NmVhODk1ZWJhNDE2Yjc2YTk4MTZkOWQ1Nzc0ZDBjZSIsIm5iZiI6MTcyODU2ODc2My43MTAxMDUsInN1YiI6IjY2MWU5YWI4NmQ5ZmU4MDE3ZDYwNmM5OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dQ-ZmN4dyi4YyOW6fZPpRhY9R8rHMYvIkfGefftroH0',
          }
        });
        console.log(res.data.results);
        setMovies(res.data.results);
      }
      catch (error) {
        console.log(error);
      }
    }
    getMovies();
  }, [])

  return(
    <>
      <MovieDetail movies={movies} />
    </>
  );
}

export default NowPlaying;