import React from 'react';

type AppProps = { 
  newList: () => void
};

function AddListButton({ newList }: AppProps) {

  function createNewList(): void {
    newList();
  }

  return (
    <button onClick={createNewList}>New List</button>
  )
}

export default AddListButton;