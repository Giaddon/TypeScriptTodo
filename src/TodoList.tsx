import React, { useState } from 'react';
import './TodoList.css';
import TodoItem from './TodoItem';
import AddTodoButton from './AddTodoButton';
import { saveListLabel, saveTodoListData } from './storageAPI';
import { TodoListType, TodoType } from './types';

function TodoList({ id, label, todos, nextId } : TodoListType) {
  const [todosArray, setTodosArray] = useState<TodoType[]>(todos);
  const [labelText, setLabelText] = useState<string>(label);
  const [nextIdVal, setNextIdVal] = useState<number>(nextId);  

  function addNewTodo(): void {
    let newTodosArray: TodoType[] = [...todosArray]
    newTodosArray.push({id: nextIdVal, listId: id, label: "New item", completed: false});
    setNextIdVal(nextIdVal + 1);
    setTodosArray(newTodosArray);
    saveTodoListData(id, newTodosArray);
  }

  function changeLabel(newLabel: string): void {
    setLabelText(newLabel);
    saveListLabel(id, newLabel);
  }

  return (
    <div className="TodoList">
      <input 
        type='text' 
        value={labelText} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeLabel(e.currentTarget.value)} 
      />
      {todosArray.length > 0 
        ? todosArray.map((i) => 
          <TodoItem id={i.id} listId={id} label = {i.label} completed = {i.completed} key={i.id} />)
        : null}
      <AddTodoButton newTodo={addNewTodo} />
    </div>
  )
}

export default TodoList;