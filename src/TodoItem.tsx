import React, { useState } from 'react';
import './TodoItem.css';
import { TodoType } from './types';

function TodoItem({ id, label, completed } : TodoType) {
  const [itemCompleted, setItemCompleted] = useState(completed)

  function toggleItem() {
    setItemCompleted(!itemCompleted);
  }

  return (
    <div className="TodoItem">
      <input 
        type="checkbox" 
        checked={itemCompleted}
        onChange={toggleItem}
      />
      {label}
    </div>
  )
}

export default TodoItem;