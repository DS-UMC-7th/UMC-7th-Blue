import useQueryFetch from "../../hooks/useQueryFetch";
import { useParams } from "react-router-dom";
// import useCustomFetch from "../../hooks/useCustomFetch";
import styled from "styled-components";

const InfoContainer = styled.div`
  display: flex;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 40%;
  margin-left: 20px;
  flex: 1;
  padding-right: 40px;

  p {
    margin: 5px 0;
  }
`;

const Right = styled.div`
  flex: 1;
  height: 100%;
`;

const BackImg = styled.img`
  width: 100%;
`;

const Info = () => {

  const params = useParams();

  // const { data: details, isLoading, isError } = useCustomFetch(`/movie/${params.movieId}`);

  const { data: details, isLoading, isError } = useQueryFetch(`/movie/${params.movieId}`);

    // 로딩 상태 처리
    if (isLoading) return <div>로딩중...</div>;

    // 에러 상태 처리
    if (isError) return <div>에러입니다</div>;

  const movie = details.data;

  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  return(
    <InfoContainer>
      <Left>
        <h1>{movie?.title}</h1>
        <p>평균 {Math.round(movie?.vote_average * 10) / 10}</p>
        <p>{movie?.release_date.substring(0, 4)}</p>
        <p>{movie?.runtime}분</p>
        <p>{movie?.overview}</p>
      </Left>
      <Right>
        <BackImg src={`${IMG_URL}${movie?.backdrop_path}`} alt="이미지"/>
      </Right>
    </InfoContainer>
  );
}

export default Info;