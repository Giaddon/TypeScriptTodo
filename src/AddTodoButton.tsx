import React from 'react';

type AppProps = { 
  newTodo: () => void
};

function AddTodoButton({ newTodo }: AppProps) {

  function createNewTodo() {
    newTodo();
  }

  return (
    <button onClick={createNewTodo}>New Todo</button>
  )
}

export default AddTodoButton;