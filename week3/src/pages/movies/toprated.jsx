import MovieData from "./moviedata";
import useCustomFetch from "../../hooks/useCustomFetch";

const TopRated = () => {

  const { data: movies, isLoading, isError } = useCustomFetch('/movie/top_rated');

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
      <MovieData movies={movies}/>
    </>
  );
}

export default TopRated;