import styled, { keyframes } from "styled-components";

const skeleton = keyframes`
  0% {
    opacity: 1;
  }
  30% {
    opacity: 0.7;
  }
  50% {
    opacity: 0.4;
  }
  80% {
    opacity: 0.7;
  }
  100% {
  opacity: 1;  
  }
`;

const SkeletonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-left: 10px;
`;

const Movie = styled.div`
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;
  overflow: hidden;
  animation: ${skeleton} 3s 1s infinite linear alternate;
`;

const MovieImg = styled.div`
  background-color: gray;
  width: 100%;
  height: 250px;
  border-radius: 10px;
  animation: ${skeleton} 3s 1s infinite linear alternate;
`;

const MovieTitle = styled.div`
  background-color: gray;
  height: 10px;
  margin: 7px 0;
  border-radius: 10px;
  animation: ${skeleton} 3s 1s infinite linear alternate;`;

const MovieDate = styled.div`
  background-color: gray;
  height: 10px;
  margin: 0;
  border-radius: 10px;
  animation: ${skeleton} 3s 1s infinite linear alternate;`;

export default function Skeleton() {
  return(
    <SkeletonContainer>
      <Movie>
        <MovieImg/>
        <MovieTitle/>
        <MovieDate/>
      </Movie>
    </SkeletonContainer>
  );
}