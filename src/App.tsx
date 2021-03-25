import React, { useState } from 'react';
import AddListButton from './AddListButton';
import './App.css';
import { 
  deleteListFromStorage, 
  loadAppData, 
  saveNewList } from './storageAPI';
import TodoList from './TodoList';
import { AppDataType, TodoListComponent, TodoListType, } from './types';

function App() {
  const [appData, setAppData] = useState<AppDataType>(loadAppData())
// differentiate variable names for lists and todos
  function addNewList(): void {
    let newAppData = {...appData}
    newAppData.lists.set(newAppData.nextId, {label: "New List", todos:new Map(), id: newAppData.nextId, nextId: 0});
    newAppData.nextId += 1;
    setAppData(newAppData);
    saveNewList();
  }

  function deleteList(id: number): void {
    let newAppData = {...appData}
    newAppData.lists.delete(id);
    setAppData(newAppData);
    deleteListFromStorage(id);
  }

  let listArray: TodoListType[]|null = appData.lists.size > 0 ? Array.from(appData.lists.values()) : null;  

  return (
    <div className="App">
      <AddListButton newList= {addNewList} />
      <div className='ListContainer'>
        {listArray 
          ? listArray.map((l: TodoListType) => 
            <TodoList id={l.id} label={l.label} todos={l.todos} nextId={l.nextId} key={l.id} del={deleteList} /> )
          : null}
        </div>
    </div>
  );
}

export default App;
