import styled from "styled-components";
import Credits from "./detail-credits";
import Info from "./detail-info";

const DetailContainer = styled.div`
  width: 100%;
  min-height: 100%;
  background-color: black;
`;

const MovieDetailPage = () => {

  return(
    <DetailContainer>
      <Info/>
      <Credits/>
    </DetailContainer>
  );
}

export default MovieDetailPage;