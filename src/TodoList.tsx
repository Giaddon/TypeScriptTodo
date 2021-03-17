import React, { useState } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
import AddTodoButton from './AddTodoButton';
import { saveTodoListData } from './storageAPI';
import { TodoListType, TodoType } from './types';

function TodoList({ id, label, todos, nextId } : TodoListType) {
  const [todosArray, setTodosArray] = useState<TodoType[]>(todos)  

  function addNewTodo() {
    let newTodosArray: TodoType[] = [...todosArray]
    newTodosArray.push({id: nextId, label: "New item", completed: false});
    setTodosArray(newTodosArray);
    saveTodoListData(id, newTodosArray);
  }

  return (
    <div className="TodoList">
      <h1>{label}</h1>
      {todosArray.length > 0 
        ? todosArray.map((i) => <TodoItem id={i.id} label = {i.label} completed = {i.completed} key={i.id} />)
        : null}
      <AddTodoButton newTodo={addNewTodo} />
    </div>
  )
}

export default TodoList;