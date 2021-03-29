/** Item for individual todo component, includes a checkbox, label, and delete button. */

import React, { useState } from 'react';
import './TodoItem.css';
import { TodoProps } from './types';
import StorageAPI from './storageAPI';

function TodoItem({ id, listId, label, completed, deleteTodo } : TodoProps) {
  const [labelText, setLabelText] = useState<string>(label);
  const [itemCompleted, setItemCompleted] = useState<boolean>(completed)

  function toggleItem() {
    setItemCompleted(!itemCompleted);
    StorageAPI.saveTodoCompleted(listId, id, !itemCompleted);
  }

  function changeLabel(newLabel: string): void {
    setLabelText(newLabel);
    StorageAPI.saveTodoLabel(listId, id, newLabel);
  }

  function callDeleteTodo() {
    deleteTodo(listId, id);
  }

  return (
    <div className='TodoItem'>
      <input 
        type="checkbox" 
        checked={itemCompleted}
        onChange={toggleItem}
      />
      <input 
        type='text'
        className={itemCompleted ? 'disabled' : ''} 
        value={labelText} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeLabel(e.currentTarget.value)}
        disabled={itemCompleted ? true : false} 
      />
      <button aria-label="delete item" className="DeleteTodoButton" onClick={callDeleteTodo}>X</button>
    </div>
  )
}

export default TodoItem;