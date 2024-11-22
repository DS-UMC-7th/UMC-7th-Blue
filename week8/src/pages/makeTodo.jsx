import { useState } from "react"
import styled from "styled-components";
import TodoList from "../pages/todoList";
import { postTodo } from "../apis/todo";

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    display: flex;
    justify-content: center;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  margin: 30px auto;
`;

const Input = styled.input`
  height: 50px;
  border-radius: 10px;
  border: 1px solid gray;
  margin: 5px 0;
`;

const Button = styled.button`
  background-color: #80b5ff;
  border-radius: 10px;
  border: none;
  margin: 10px auto;
  padding: 15px;
  width: 50%;
`;

const MakeTodo = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // 할 일 만들기
  const addTodo = async () => {
    const newTodo = {
      title,
      content,
      checked: false,  // 기본값 설정
    };

    try {
      const addedTodo = await postTodo(newTodo);
      console.log("addedtodo", addedTodo);
      setTodos((prev) => [...prev, addedTodo]);
      // console.log(todos);
      setTitle('');
      setContent('');
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <TodoContainer>
      <Title>
        <h1>⚡ UMC TODOLIST ⚡</h1>
      </Title>
      <form onSubmit={handleSubmit}>
        <Input 
          type="text" 
          value={title}
          placeholder="제목을 입력해주세요"
          onChange={(e) => setTitle(e.target.value)}
          />
        <Input 
          type="text" 
          value={content}
          placeholder="내용을 입력해주세요"
          onChange={(e) => setContent(e.target.value)}
          />
        <Button onClick={addTodo}>TODO 생성</Button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} />
    </TodoContainer>
  );
}

export default MakeTodo;