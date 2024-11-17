import styled from "styled-components";
import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import useCustomFetch from "../hooks/useCustomFetch";
import MovieData from "./movies/moviedata";
import Skeleton from "./skeleton";

const SearchContainer = styled.div`

`;

const Search = styled.div`
  justify-content: center;
  display: flex;
  margin: 40px;
`;

const Input = styled.input`
  flex: 1;
  height: 50px;
  box-sizing: border-box;
  padding-left: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 0;
`;

const Button = styled.button`
  background-color: #ea345c;
  color: white;
  width: 4vw;
  height: 50px;
  box-sizing: border-box;
  padding: 0;
  border: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  `;

const Result = styled.div`
  margin: 30px;
  h1 {
    text-align: center;
  }
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-top: 20px;
  margin-left: 10px;
`;

const SearchPage = () => {

  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const [searchParams, setSearchParams] = useSearchParams({
    mq: ''
  })

  const mq = searchParams.get('mq');

  const handleSearchMovie = () => {
    if (mq === query) return;
    navigate(`/search?mq=${query}`);
  }

  const handleClickEnter = (e) => {
    if (e.key === 'Enter') {
      handleSearchMovie();
    }
  }

  const url = `/search/movie?query=${mq}&include_adult=false&language=en-US&page=1`;

  const { data: movies, isLoading, isError } = useCustomFetch(url);

  let content;

  if (isError) {
    content = <h1>에러입니다.</h1>
  }

  if (isLoading) {
    content = (Array(20).fill(0).map((_, index) =>
      <Skeleton key={index} />
    ))
  } else if (mq && movies.data?.results.length === 0) {
    content = <h1>해당하는 검색어 {mq}에 해당하는 데이터가 없습니다.</h1>
  } else {
    content = <MovieData movies={movies} />
  }

  return(
    <SearchContainer>
      <Search>
        <Input 
          type="text"
          value={query} 
          placeholder="영화 제목을 입력해주세요"
          onChange={handleChange}
          onKeyDown={handleClickEnter}
          />
        <Button 
          type="button"
          onClick={handleSearchMovie}
          >검색</Button>
      </Search>
      <Result>
        {content}
      </Result>
    </SearchContainer>
  );
}

export default SearchPage;