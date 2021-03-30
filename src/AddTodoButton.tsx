/** Button to add a new todo item. */

import React from 'react';
import './AddTodoButton.css';

type AppProps = { 
  newTodo: () => void
};

function AddTodoButton({ newTodo }: AppProps) {

  function createNewTodo() {
    newTodo();
  }

  return (
    <button className='AddTodoButton' onClick={createNewTodo}>New Todo</button>
  )
}

export default AddTodoButton;