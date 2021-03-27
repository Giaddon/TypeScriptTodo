import React, { useState } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
import AddTodoButton from './AddTodoButton';
import StorageAPI from './storageAPI';
import { TodoListComponent, TodoType } from './types';
import DeleteListButton from './DeleteListButton';

function TodoList({ id, label, todos, nextId, updateListLabel, deleteList } : TodoListComponent) {
  const [todosObject, setTodosObject] = useState<{[id:number]: TodoType}>(todos);
  //const [labelText, setLabelText] = useState<string>(label);
  const [nextIdVal, setNextIdVal] = useState<number>(nextId);  

  function addNewTodo(): void {
    let newTodo: TodoType = {id: nextIdVal, listId: id, label: "New item", completed: false}
    let newTodos: {[id:number]: TodoType} = {...todosObject}
    newTodos[nextIdVal] = newTodo;
    setNextIdVal(nextIdVal + 1);
    setTodosObject(newTodos);
    //saveNewTodo(id, newTodo);
  }

  function changeLabel(newLabel: string): void {
    //setLabelText(newLabel);
    updateListLabel(id, newLabel)
  }

  function callDeleteList() {
    deleteList(id);
  }

  function deleteTodo(listId: number, todoId: number): void {
    let newTodos: {[id:number]: TodoType} = {...todosObject};
    delete newTodos[todoId];
    setTodosObject(newTodos);
    //deleteTodoFromStorage(listId, todoId);
  }

  let todosArray: TodoType[] = Object.values(todosObject); 

  return (
    <div className="TodoList">
      <input
        className="TodoList-Title" 
        type='text' 
        value={label} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeLabel(e.currentTarget.value)} 
      />
      {todosArray.length > 0 
        ? todosArray.map((i) => 
          <TodoItem id={i.id} listId={id} label = {i.label} completed = {i.completed} key={i.id} del={deleteTodo} />)
        : null}
      <AddTodoButton newTodo={addNewTodo} />
      <DeleteListButton deleteList={callDeleteList} />
    </div>
  )
}

export default TodoList;