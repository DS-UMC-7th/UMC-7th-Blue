import { useContext } from 'react'
import './App.css'
import Input from './components/Input';
import Button from './components/Button';
import { TodoContext } from './context/TodoContext';

function App() {
  const {      
    todos,
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
  } = useContext(TodoContext);

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
