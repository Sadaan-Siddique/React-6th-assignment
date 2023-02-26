import React, { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import NewTodo from './NewTodo';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <>
      <div className='container text-center'>
        <h1>What's the Plan for Today?</h1>
        <NewTodoForm onSubmit={addTodo} />
        <NewTodo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
      </div>
    </>
  );
}

export default TodoList;