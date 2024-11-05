import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  gap: 20px;
  margin-top: 20px;
  margin-left: 10px;
`;

const Movie = styled.div`
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

const MovieData = ({ movies }) => {

  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  const navigate = useNavigate();

  return(
    <MovieContainer>
      {movies.data?.results.map((movie) => (
        <Movie key={movie.id}
          onClick={() => navigate(`/movies/${movie.id}`)}>
          <MovieImg src={`${IMG_URL}${movie.poster_path}`} alt={movie.title}/>
          <MovieTitle>{movie.title}</MovieTitle>
          <MovieDate>{movie.release_date}</MovieDate>
        </Movie>
      ))}
    </MovieContainer>
  );
}

export default MovieData;