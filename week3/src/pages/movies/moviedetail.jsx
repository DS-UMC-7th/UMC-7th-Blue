import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 20px;
  margin-left: 10px;
`;

const Movie = styled.div`
  width: 8vw;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;
`;

const MovieImg = styled.img`
  width: 100%;
  height: 250px;
  border-radius: 10px;
`;

const MovieTitle = styled.p`
  font-size: 0.9em;
  margin: 7px 0;
`;

const MovieDate = styled.p`
  font-size: 0.7em;
  margin: 0;
`;

const MovieDetail = ({ movies }) => {

  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  return(
    <MovieContainer>
      {movies.map((movie) => (
        <Movie key={movie.id}>
          <MovieImg src={`${IMG_URL}${movie.poster_path}`} alt={movie.title}/>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieDate>{movie.release_date}</MovieDate>
        </Movie>
      ))}
    </MovieContainer>
  );
}

export default MovieDetail;