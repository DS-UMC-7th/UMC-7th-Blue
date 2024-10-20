import { useParams } from "react-router-dom";
import useCustomFetch from "../../hooks/useCustomFetch";
import styled from "styled-components";
import avatarImg from "../../assets/avatar.png";

const CreditsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1;
  margin-left: 20px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 20px;
  text-align: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: auto 10px;
  width: 120px;
  height: 200px;

  p {
    margin: 5px auto; 
  }

  .small {
    font-size: 0.8em;
  }
`;

const ImgDiv = styled.div`
  width: 100px;
  height: 100px; 
  border-radius: 70%;
  overflow: hidden;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Credits = () => {

  const params = useParams();

  const { data: credits, isLoading, isError } = useCustomFetch(`/movie/${params.movieId}/credits`);
  // console.log("credits: ", credits.data)

  // 로딩 상태 처리
  if (isLoading) return <div>로딩중...</div>;

  // 에러 상태 처리
  if (isError) return <div>에러입니다</div>;

  const casts = credits.data?.cast;
  const crews = credits.data?.crew;

  const IMG_URL = "https://image.tmdb.org/t/p/w500";

  // console.log("casts: ", casts);
  // console.log("crews: ", crews);

  const ImgError = (e) => {
    e.target.src = avatarImg;
  }

  return(
    <CreditsContainer>
          <h1>감독/출연</h1>
          <CardContainer>
            {casts?.map(cast => (
              <Card key={cast.cast_id}>
                <ImgDiv>
                  <ProfileImg src={`${IMG_URL}${cast.profile_path}`} alt="프로필" onError={ImgError} />
                </ImgDiv>
                <p>{cast.name}</p>
                <p className="small">{cast.character}</p>
              </Card>
            ))}
          </CardContainer>
          <CardContainer>
          {crews?.map(crew => (
              <Card key={crew.credit_id}>
                <ImgDiv>
                  <ProfileImg src={`${IMG_URL}${crew.profile_path}`} alt="프로필" onError={ImgError} />
                </ImgDiv>
                <p>{crew.name}</p>
                <p className="small">{crew.job}</p>
              </Card>
            ))}
          </CardContainer>
    </CreditsContainer>
  );
}

export default Credits;