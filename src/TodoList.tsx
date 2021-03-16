import React, { useState } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
import AddTodoButton from './AddTodoButton';
import { saveTodos } from './storageAPI';

interface Todo {
  label: string
  completed: boolean
}

type AppProps = { 
  label: string, 
  todos: Todo[], 
};

function TodoList({ label, todos } : AppProps) {
  const [todosArray, setTodosArray] = useState(todos)  

  function addNewTodo() {
    let newTodosArray = [...todosArray]
    newTodosArray.push({label: "New item", completed: false});
    setTodosArray(newTodosArray);
    saveTodos(newTodosArray);
  }

  return (
    <div className="TodoList">
      <h1>{label}</h1>
      {todosArray.length > 0 
        ? todosArray.map((i) => <TodoItem label = {i.label} completed = {i.completed} />)
        : null}
      <AddTodoButton newTodo={addNewTodo} />
    </div>
  )
}

export default TodoList;