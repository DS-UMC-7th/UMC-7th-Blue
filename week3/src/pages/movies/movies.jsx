import { Link } from "react-router-dom";
import styled from "styled-components";
import image1 from "../../assets/nowplaying.jpg";
import image2 from "../../assets/popular.jpg";
import image3 from "../../assets/toprated.jpg";
import image4 from "../../assets/upcoming.jpg";

const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Card = styled.div`
  padding: 10px;
  position: relative;
`;

const CardImg = styled.img`
  width: 18vw;
  height: 15vh;
  border-radius: 10px;
`;

const CardTitle = styled.p`
  position: absolute;
  bottom: 5px;
  left: 15px;
  border-radius: 10px;
  color: white; 
  background-color: rgba(0, 0, 0, 0.5); 
  padding: 5px;
`;

const Movies = () => {


  return (
    <>
      <h1>카테고리</h1>
      <CategoryContainer>
        <Card>
          <Link to="/movies/now_playing">
            <CardImg src={image1} alt="현재 상영중인" />
            <CardTitle>현재 상영중인</CardTitle>
          </Link>
        </Card>
        <Card>
          <Link to="/movies/popular">
            <CardImg src={image2} alt="인기있는" />
            <CardTitle>인기있는</CardTitle>
          </Link>
        </Card>
        <Card>
          <Link to="/movies/top_rated">
            <CardImg src={image3} alt="높은 평가를 받은" />
            <CardTitle>높은 평가를 받은</CardTitle>
          </Link>
        </Card>
        <Card>
          <Link to="/movies/upcoming">
            <CardImg src={image4} alt="개봉 예정중인" />
            <CardTitle>개봉 예정중인</CardTitle>
          </Link>
        </Card>
      </CategoryContainer>
    </>
  );
};

export default Movies;
