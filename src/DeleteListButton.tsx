import React from 'react';
import './DeleteListButton.css';

type AppProps = { 
  deleteList: () => void
};

function DeleteListButton({ deleteList }: AppProps)  {

  function callDeleteList() {
    deleteList();
  }

  return (
    <button className='DeleteListButton' onClick={callDeleteList}>Delete List</button>
  )
}

export default DeleteListButton;