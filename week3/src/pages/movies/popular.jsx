import MovieData from "./moviedata";
import useCustomFetch from "../../hooks/useCustomFetch";

const Popular = () => {

  const { data: movies, isLoading, isError } = useCustomFetch('/movie/popular');

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

export default Popular;