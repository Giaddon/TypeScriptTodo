import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <TodoList label="A list" todos={[{label: "First item", completed: true}, {label: "Second item", completed: false}]} />
    </div>
  );
}

export default App;
