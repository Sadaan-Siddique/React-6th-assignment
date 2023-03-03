import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
// import { RiCloseCircleLine } from 'react-icons/ri';
// import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <NewTodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index} style={{display:'flex',justifyContent:'center' }}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <span className='icons'>
        {/* <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon' /> */}
        <i onClick={() => removeTodo(todo.id)} class="bi bi-trash-fill"></i>
        <i onClick={() => setEdit({ id: todo.id, value: todo.text })} class="bi bi-pencil-square"></i>
        {/* <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })} className='edit-icon' /> */}
      </span>
    </div>
  ));
};

export default Todo;