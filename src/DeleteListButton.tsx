import React from 'react';
import './DeleteListButton.css';

type AppProps = { 
  del: () => void
};

function DeleteListButton({ del }: AppProps)  {

  function deleteList() {
    del();
  }

  return (
    <button className='DeleteListButton' onClick={deleteList}>Delete List</button>
  )
}

export default DeleteListButton;