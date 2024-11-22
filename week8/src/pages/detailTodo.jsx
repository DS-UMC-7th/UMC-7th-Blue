import { useEffect, useState } from "react";
import { getTodoDetail } from "../apis/todo";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import Spinner from "./spinner";

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const DetailTodo = () => {

  const [todo, setTodo] = useState([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getTodoDetail({ id });
        // console.log(data);
        setTodo(data);
      } catch(err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [id]);

  if (loading) {
    return <Spinner />
  }

  return(
    <DetailContainer>
      <h1>할 일</h1>
      <p>{todo.title}</p>
      <p>{todo.content}</p>
    </DetailContainer>
  );
}

export default DetailTodo;