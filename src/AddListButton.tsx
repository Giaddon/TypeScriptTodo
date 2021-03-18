import React from 'react';
import './AddListButton.css';

type AppProps = { 
  newList: () => void
};

function AddListButton({ newList }: AppProps) {

  function createNewList(): void {
    newList();
  }

  return (
    <button className='AddListButton' onClick={createNewList}>New List</button>
  )
}

export default AddListButton;