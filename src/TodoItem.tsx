import React, { useState } from 'react';
import './TodoItem.css';
import { TodoType } from './types';
import { saveTodoLabel } from './storageAPI';

function TodoItem({ id, listId, label, completed } : TodoType) {
  const [itemCompleted, setItemCompleted] = useState(completed)
  const [labelText, setLabelText] = useState<string>(label)

  function toggleItem() {
    setItemCompleted(!itemCompleted);
  }

  function changeLabel(newLabel: string): void {
    setLabelText(newLabel);
    saveTodoLabel(id, listId, newLabel);
  }

  return (
    <div className="TodoItem">
      <input 
        type="checkbox" 
        checked={itemCompleted}
        onChange={toggleItem}
      />
      <input 
        type='text' 
        value={labelText} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeLabel(e.currentTarget.value)} 
      />
    </div>
  )
}

export default TodoItem;