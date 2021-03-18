import React, { useState } from 'react';
import './TodoItem.css';
import { TodoType } from './types';
import { saveTodoLabel, saveTodoCompleted } from './storageAPI';

function TodoItem({ id, listId, label, completed } : TodoType) {
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
    </div>
  )
}

export default TodoItem;