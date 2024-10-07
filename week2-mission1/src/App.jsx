import { useState } from 'react'
import './App.css'
import Input from './components/Input';
import Button from './components/Button';

function App() {

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

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
          <Input
            className="todoinput"
            value={text}
            onChange={(e) => setText(e.target.value)} />
          <Button className="registerbtn" type="submit" onClick={addTodo}>할 일 등록</Button>
      </form>
      <div className='list'>
        {todos.map((todo) => (
          <div className='todo' key={todo.id}>
          {/* 수정이 아닐 때 */}
          {editingId !== todo.id && (
            <div className='todotitle' key={todo.id}>
              <p className='todoid'>{todo.id}. </p>
              <p>{todo.task}</p>
            </div>
          )}
          {/* 수정중일때 */}
          {editingId === todo.id && (
            <div className='todotitle' key={todo.id}>
              <p className='todoid'>{todo.id}. </p>
              <Input className="updateinput" value={editingtext} onChange={(e) => setEditingText(e.target.value)} />
            </div>
          )}
          <div className='todobtn'>
          <Button onClick={() => deleteTodo(todo.id)}>삭제하기</Button>

          {/* editingId === todo.id -> 수정중인 상태 */}
          {editingId === todo.id ? (
            <Button onClick={() => updateTodo(editingId, editingtext)}>수정 완료</Button>
          ) : (
            <Button onClick={() => {setEditingId(todo.id), setEditingText(todo.task)}}>수정 진행</Button>
          )}
          </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
