import React, { useState, useEffect } from 'react';
import './App.css';
import { loadTodos } from './storageAPI';
import TodoList from './TodoList';

function App() {
  const [todosData, setTodosData] = useState(loadTodos())

  return (
    <div className="App">
      <TodoList label="A list" todos={todosData} />
    </div>
  );
}

export default App;
