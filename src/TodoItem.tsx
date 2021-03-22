import React, { useState } from 'react';
import './TodoItem.css';
import { TodoComponent } from './types';
import { saveTodoLabel, saveTodoCompleted } from './storageAPI';

function TodoItem({ id, listId, label, completed, del } : TodoComponent) {
  const [itemCompleted, setItemCompleted] = useState(completed)
  const [labelText, setLabelText] = useState<string>(label)

  function toggleItem() {
    setItemCompleted(!itemCompleted);
    saveTodoCompleted(id, listId, !itemCompleted);
  }

  function changeLabel(newLabel: string): void {
    setLabelText(newLabel);
    saveTodoLabel(id, listId, newLabel);
  }

  function deleteTodo() {
    del(listId, id);
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
      <button aria-label="delete item" className="DeleteTodoButton" onClick={deleteTodo}>X</button>
    </div>
  )
}

export default TodoItem;