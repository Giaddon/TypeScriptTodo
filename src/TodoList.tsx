import React, { useState } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
import AddTodoButton from './AddTodoButton';
import { deleteTodoFromStorage, saveListLabel, saveNewTodo } from './storageAPI';
import { TodoListComponent, TodoType } from './types';
import DeleteListButton from './DeleteListButton';

/**
 * App
 *  - ListManager
 *    - add and delete list logic
 *    - ListContainer
 *      - Lists
 *         - TodoManager
 *         - Todos 
 * 
 */


function TodoList({ id, label, todos, nextId, del } : TodoListComponent) {
  const [todosMap, setTodosMap] = useState<Map<number, TodoType>>(todos);
  const [labelText, setLabelText] = useState<string>(label);
  const [nextIdVal, setNextIdVal] = useState<number>(nextId);  

  function addNewTodo(): void {
    let newTodo: TodoType = {id: nextIdVal, listId: id, label: "New item", completed: false}
    let newTodosMap: Map<number, TodoType> = {...todosMap}
    newTodosMap.set(nextIdVal, newTodo);
    setNextIdVal(nextIdVal + 1);
    setTodosMap(newTodosMap);
    saveNewTodo(id, newTodo);
  }

  function changeLabel(newLabel: string): void {
    setLabelText(newLabel);
    saveListLabel(id, newLabel);
  }

  function deleteList() {
    del(id);
  }

  function deleteTodo(listId: number, todoId: number): void {
    let newTodos: Map<number, TodoType> = {...todosMap};
    newTodos.delete(todoId);
    setTodosMap(newTodos);
    deleteTodoFromStorage(listId, todoId);
  }

  let todosArray: TodoType[]|null = todosMap.size > 0 ? Array.from(todosMap.values()) : null; 

  return (
    <div className="TodoList">
      <input
        className="TodoList-Title" 
        type='text' 
        value={labelText} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeLabel(e.currentTarget.value)} 
      />
      {todosArray 
        ? todosArray.map((i) => 
          <TodoItem id={i.id} listId={id} label = {i.label} completed = {i.completed} key={i.id} del={deleteTodo} />)
        : null}
      <AddTodoButton newTodo={addNewTodo} />
      <DeleteListButton del={deleteList} />
    </div>
  )
}

export default TodoList;