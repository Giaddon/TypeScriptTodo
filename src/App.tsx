import React, { useState } from 'react';
import AddListButton from './AddListButton';
import './App.css';
import { 
  deleteListFromStorage, 
  loadAppData, 
  saveNewList } from './storageAPI';
import TodoList from './TodoList';
import { AppDataType, TodoListType, } from './types';

function App() {
  const [appData, setAppData] = useState<AppDataType>(loadAppData())

  function addNewList(): void {
    let newAppData = {...appData}
    newAppData.lists.push({label: "New List", todos:[], id: newAppData.nextId, nextId: 0});
    newAppData.nextId += 1;
    setAppData(newAppData);
    saveNewList();
  }

  function deleteList(id: number): void {
    let newAppData = {...appData}
    newAppData.lists = newAppData.lists.filter((l) => l.id !== id)
    setAppData(newAppData);
    deleteListFromStorage(id);
  }

  return (
    <div className="App">
      <AddListButton newList= {addNewList} />
      <div className='ListContainer'>
        {appData.lists.length > 0 
          ? appData.lists.map((l: TodoListType) => 
            <TodoList id={l.id} label={l.label} todos={l.todos} nextId={l.nextId} key={l.id} del={deleteList} /> )
          : null}
        </div>
    </div>
  );
}

export default App;
