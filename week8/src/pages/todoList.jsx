import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { deleteTodo, getTodoList, patchTodo } from "../apis/todo";
import Spinner from "./spinner";

const ListContainer = styled.div`
  width: 30%;
`;

const List = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  margin-bottom: 20px;
  height: 100px;
`;

const Todo = styled.div`
  flex: 1;
`;

const TodoView = styled.div`
  padding: 0 10px;
`;

const TodoEdit = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  input {
    height: 40%;
    width: 80%;
    margin: 5px;
  }
`;

const Btn = styled.div`
  height: 100%;
  align-content: center;

  .end {
    height: 50%;
    border: none;
    border-radius: 10px;
    background-color: #FFB7D3;
    margin-right: 5px;
  }
`;

const BtnView = styled.div`
  button {
    padding: 10px;
    margin: 5px;
    border: none;
    border-radius: 10px;
  }

  .edit {
    background-color: #FFB7D3;
  }
`;

const TodoList = ({ todos, setTodos }) => {
  // const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // todo 불러오기
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await getTodoList();
        setTodos(data[0]);
        // console.log(data[0]);
      } catch(err) {
        setError(true);
        console.log("에러", err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [setTodos]);

    // 수정
    const [editingId, setEditingId] = useState('');
    const [editingTitle, setEditingTitle] = useState('');
    const [editingContent, setEditingContent] = useState('');

  const handleEdit = async (id, title, content) => {
    const EditTodo = {
      id,
      title,
      content,
      checked: false
    };

    try {
      const EdittedTodo = await patchTodo(EditTodo);
      console.log("EdittedTodo: ",EdittedTodo);
      setTodos((prev) => prev.map((item) => item.id === id ? {...item, title: EdittedTodo.title, content: EdittedTodo.content} : item));
      
      setEditingId('');
      // setEditingTitle('');
      // setEditingContent('');
    } catch(err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    const data = await deleteTodo({ id });
    setTodos((prev) => prev.filter((item) => item.id !== id));
    console.log(data);
  };

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return(
      <>
        <h4>에러입니다.</h4>
      </>
    );
  }

  return(
    <ListContainer>
      {todos?.map((todo) => (
        <List key={todo.id}>
          <Todo key={todo.id}>
            {/* 수정 아닐 때 */}
            {editingId !== todo.id && (
              <TodoView>
                <p onClick={() => navigate(`/${todo.id}`)}>{todo.title}</p>
                <p>{todo.content}</p>
              </TodoView>
            )}

            {/* 수정중 일 때 */}
            {editingId === todo.id && (
              <TodoEdit>
                <input 
                  type="text" 
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)} />
                <input 
                  type="text" 
                  value={editingContent}
                  onChange={(e) => setEditingContent(e.target.value)} />
              </TodoEdit>
            )}
          </Todo>

          <Btn>
            {editingId === todo.id ? (
              <button className="end" onClick={() => handleEdit(editingId, editingTitle, editingContent)}>수정 완료</button>
            ) : (
              <BtnView>
                <button className="edit" onClick={() => {setEditingId(todo.id); setEditingTitle(todo.title); setEditingContent(todo.content)}}>수정</button>
                <button className="delete" onClick={() => handleDelete(todo.id)}>삭제</button>
              </BtnView>
            )}
          </Btn>
        </List>
      ))}
    </ListContainer>
  );
}

export default TodoList;