/** A todo list component. Has a label, an object of todos, a nextID, and a delete list button component. */

import React, { useState } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
import AddTodoButton from './AddTodoButton';
import StorageAPI from './storageAPI';
import { TodoListProps, TodoType } from './types';
import DeleteListButton from './DeleteListButton';

function TodoList({ id, label, todos, nextId, deleteList } : TodoListProps) {
  const [labelText, setLabelText] = useState<string>(label);
  const [todosObject, setTodosObject] = useState<{[id:number]: TodoType}>(todos);
  const [nextIdVal, setNextIdVal] = useState<number>(nextId);  

  function changeLabel(newLabel: string): void {
    setLabelText(newLabel);
    StorageAPI.saveListLabel(id, newLabel);
  }

  function callDeleteList() {
    deleteList(id);
  }

  function addNewTodo(): void {
    let newTodo: TodoType = {id: nextIdVal, listId: id, label: "New item", completed: false}
    let newTodos: {[id:number]: TodoType} = {...todosObject}
    newTodos[nextIdVal] = newTodo;
    setNextIdVal(nextIdVal + 1);
    setTodosObject(newTodos);
    StorageAPI.saveNewTodo(id, newTodo);
  }

  function deleteTodo(listId: number, todoId: number): void {
    let newTodos = {...todosObject};
    delete newTodos[todoId];
    setTodosObject(newTodos);
    StorageAPI.deleteTodo(listId, todoId)
  }

  let todosArray: TodoType[] = Object.values(todosObject); 
  todosArray.sort((a, b) => a.id - b.id);

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
          <TodoItem 
            id={i.id} 
            listId={id} 
            label={i.label} 
            completed={i.completed} 
            key={i.id} 
            deleteTodo={deleteTodo} />)
        : null}
      <AddTodoButton newTodo={addNewTodo} />
      <DeleteListButton deleteList={callDeleteList} />
    </div>
  )
}

export default TodoList;