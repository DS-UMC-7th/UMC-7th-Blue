import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";

const SidebarContainer = styled.div`
  display: flex;
  background-color: #131517;
  height: 100vh;
  padding-left: 20px;
  box-sizing: border-box;
  flex-direction: column;
  color: white;
`;

const SearchContainer = styled.div`
  color: white;
  height: 50px;
  display: flex;
  align-items: center;
`;

const MovieContainer = styled.div`
  color: white;
  height: 50px;
  display: flex;
  align-items: center;
`;

const SearchLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 10px;
`;

const MovieLink = styled(Link)`
  text-decoration: none;
  color: white;
  margin-left: 10px;
`;

const Sidebar = () => {
  return(
    <SidebarContainer>
      <SearchContainer>
        <FaSearch/>
        <SearchLink to='/search'>찾기</SearchLink>
      </SearchContainer>

      <MovieContainer>
        <BiMoviePlay />
        <MovieLink to='/movies'>영화</MovieLink>
      </MovieContainer>
    </SidebarContainer>
  );
}

export default Sidebar;