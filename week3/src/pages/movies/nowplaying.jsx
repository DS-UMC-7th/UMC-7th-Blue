import useQueryFetch from "../../hooks/useQueryFetch";
import MovieData from "./moviedata";
// import useCustomFetch from "../../hooks/useCustomFetch";

const NowPlaying = () => {

  // const { data: movies, isLoading, isError } = useCustomFetch('/movie/now_playing');

  const { data: movies, isLoading, isError } = useQueryFetch('/movie/now_playing');

  if (isLoading) {
    return(
      <>
        <h1>로딩중</h1>
      </>
    );
  }

  if (isError) {
    return(
      <>
        <h1>에러</h1>
      </>
    );
  }

  return(
    <>
      <MovieData movies={movies} />
    </>
  );
}

export default NowPlaying;