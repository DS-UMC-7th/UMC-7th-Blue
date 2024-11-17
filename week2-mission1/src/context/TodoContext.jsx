import { createContext, useState } from "react";

// 데이터를 담음
export const TodoContext = createContext();

// 우산을 만듦
export function TodoContextProvider({ children }) {
  
  const [todos, setTodos] = useState([
    // 투두리스트, 화면에 출력되는 (추가, 삭제, 수정)
    { id: 1, task: "투두 만들기" },
    { id: 2, task: "영화 페이지 만들기" },
  ]);

  const [text, setText] = useState('');

  // 수정할 때 쓰는 변수
  const [editingId, setEditingId] = useState('');
  const [editingtext, setEditingText] = useState('');

  // 랜더링 방지
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // 1. 추가하기
  const addTodo = () => {
    setTodos((prev) => [
      ...prev,
      { id: Math.floor(Math.random() * 100) + 2, task: text },
    ]);
    setText('');
  };

  // 2. 삭제하기
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }

  // 3. 수정하기
  // id 비교 해서 맞는 애의 task를 text로 변경, 아님 그냥 냅두기
  const updateTodo = (id, text) => {
    setTodos((prev) => prev.map((item) => item.id === id ? {...item, task:text} : item));
    setEditingId('');
  }

  return<TodoContext.Provider 
    value={{ 
      todos, 
      setTodos, 
      text, 
      setText, 
      editingId,
      setEditingId,
      editingtext,
      setEditingText,
      handleSubmit,
      addTodo,
      deleteTodo,
      updateTodo,
    }}>{children}
  </TodoContext.Provider>
}