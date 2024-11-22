import { useState } from "react"
import { useMutation, useQuery } from "@tanstack/react-query"
import styled from "styled-components";
import { deleteTodo, getTodoList, patchTodo, postTodo } from "../apis/todo";
import { queryClient } from "../main";

const UseQueryTodo = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const { data: todos, isPending } = useQuery({
    queryFn: () => getTodoList(),
    queryKey: ['todos'],
  });

  const { mutate: postTodoMutation } = useMutation({
    mutationFn: postTodo,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries({
        queryKey:['todos']
      })
    },
    onError: (error) => {
      console.log(error);
    },
    onSettled: () => {
      console.log('항상 실행')
    }
  });

  const { mutate: deleteTodoMutation } = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos']
      })
    }
  });

  const { mutate: patchTodoMutation } = useMutation({
    mutationFn: patchTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['todos']
      })
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    postTodoMutation({ title, content });
    setTitle('');
    setContent('');
  }

  return(
    <>
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
          <Button type="submit">TODO 생성</Button>
        </form>
        <TodoList>
          {isPending ? (
            <div>로딩중</div>
          ) : (
            <>
              {todos[0]?.map((todo) => (
                <List key={todo.id}>
                  <input type='checkbox' />
                  <div>
                    <p>{todo.title}</p>
                    <p>{todo.content}</p>
                  </div>
                  <button onClick={() => deleteTodoMutation({ id: todo.id })}>삭제</button>
                  <button onClick={() => patchTodoMutation({ id: todo.id, title: todo.title, content: todo.content, checked: todo.checked })}>수정</button>
                </List>
              ))}
            </>
          )}
        </TodoList>
      </TodoContainer>
    </>
  );
}

export default UseQueryTodo;

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

const TodoList = styled.div`

`;

const List = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  margin-bottom: 20px;
  height: 100px;
  display: flex;
`;