// import useQueryFetch from "../../hooks/useQueryFetch";
// import useCustomFetch from "../../hooks/useCustomFetch";

import useInfiniteQueryFetch from "../../hooks/useInfiniteQueryFetch";
import { useInView } from "react-intersection-observer";
import MovieData from "./moviedata";
import styled from "styled-components";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 20px;
  margin-top: 20px;
  margin-left: 10px;
`;

const InviewContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

const TopRated = () => {

  // const { data: movies, isLoading, isError } = useCustomFetch('/movie/top_rated');

  // const { data: movies, isLoading, isError } = useQueryFetch('/movie/top_rated');

  const { 
    data: movies,
    isLoading,
    isError,
    isFetching,
    isPending,
    fetchNextPage,
    hasNextPage
    } = useInfiniteQueryFetch('/movie/top_rated');

    const {ref, inView} = useInView({
      threshold: 0,
    })

    useEffect(() => {
      if (inView) {
        !isFetching && hasNextPage && fetchNextPage();
      }
    }, [inView, isFetching, hasNextPage, fetchNextPage])

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
    <MovieContainer>
      {/* <MovieData movies={movies} /> */}
      {movies?.pages?.map((page) => {
        return page?.data.results?.map((movie, _) => {
          return <MovieData movie={movie} key={movie.id} />
        })
      })}
    </MovieContainer>
      <InviewContainer ref={ref}>
        {isFetching && <ClipLoader color="white" />}
      </InviewContainer>
    </>
  );
}

export default TopRated;