import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input value={input} onChange={handleChange} name='text' className='todo-input edit' />
          <button onClick={handleSubmit} className='todo-button edit'> Update </button>
        </>
      ) : (
        <>
          <input value={input} onChange={handleChange} name='text' className='todo-input' />
          <button onClick={handleSubmit} className='todo-button'> Add </button>
        </>
      )}
    </form>
  );
}
export default TodoForm;