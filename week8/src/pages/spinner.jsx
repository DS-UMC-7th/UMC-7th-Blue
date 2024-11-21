import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Spinner = () => {
  return(
    <SpinnerContainer>
      <ClipLoader color="blue" />
      <h4>게시글을 불러오는 중입니다.</h4>
    </SpinnerContainer>
  );
}

export default Spinner;