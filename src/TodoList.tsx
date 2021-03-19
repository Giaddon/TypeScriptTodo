import React, { useState } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
import AddTodoButton from './AddTodoButton';
import { saveListLabel, saveNewTodo } from './storageAPI';
import { TodoListComponent, TodoListType, TodoType } from './types';
import DeleteListButton from './DeleteListButton';

function TodoList({ id, label, todos, nextId, del } : TodoListComponent) {
  const [todosArray, setTodosArray] = useState<TodoType[]>(todos);
  const [labelText, setLabelText] = useState<string>(label);
  const [nextIdVal, setNextIdVal] = useState<number>(nextId);  

  function addNewTodo(): void {
    let newTodo: TodoType = {id: nextIdVal, listId: id, label: "New item", completed: false}
    let newTodosArray: TodoType[] = [...todosArray]
    newTodosArray.push(newTodo);
    setNextIdVal(nextIdVal + 1);
    setTodosArray(newTodosArray);
    saveNewTodo(id, newTodo);
  }

  function changeLabel(newLabel: string): void {
    setLabelText(newLabel);
    saveListLabel(id, newLabel);
  }

  function deleteList() {
    del(id);
  }

  function deleteTodo(id: number): void {
    let newTodos: TodoType[] = todosArray.filter(t => t.id !== id );
    setTodosArray(newTodos);
  }

  return (
    <div className="TodoList">
      <input
        className="TodoList-Title" 
        type='text' 
        value={labelText} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeLabel(e.currentTarget.value)} 
      />
      {todosArray.length > 0 
        ? todosArray.map((i) => 
          <TodoItem id={i.id} listId={id} label = {i.label} completed = {i.completed} key={i.id} del={deleteTodo} />)
        : null}
      <AddTodoButton newTodo={addNewTodo} />
      <DeleteListButton del={deleteList} />
    </div>
  )
}

export default TodoList;