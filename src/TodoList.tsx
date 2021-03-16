import React from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
import AddTodoButton from './AddTodoButton';

interface Todo {
  label: string
  completed: boolean
}

type AppProps = { 
  label: string, 
  todos: Todo[], 
};

function TodoList({ label, todos } : AppProps) {
  
  return (
    <div className="TodoList">
      <h1>{label}</h1>
      {todos.length > 0 
        ? todos.map((i) => <TodoItem label = {i.label} completed = {i.completed} />)
        : null}
      <AddTodoButton />
    </div>
  )
}

export default TodoList;