import React, { useState } from 'react';
import './TodoItem.css';

type AppProps = { 
  label: string, 
  completed: boolean, 
};

function TodoItem({ label, completed } : AppProps) {
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