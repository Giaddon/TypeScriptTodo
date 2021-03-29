/** Container component that holds top-level app data and renders the todo lists. */

import React, { useState } from 'react';
import AddListButton from './AddListButton';
import TodoList from './TodoList';
import StorageAPI from './storageAPI';
import { AppDataType, TodoListType } from './types';

function TodoManager() {
  const [appData, setAppData] = useState(StorageAPI.loadAppData());

  function addNewList(): void {
    let newAppData: AppDataType = {...appData};
    let newList = {label: "New List", todos:{}, id: appData.nextId, nextId: 0};
    newAppData.lists[appData.nextId] = newList; 
    newAppData.nextId += 1;
    setAppData(newAppData);
    StorageAPI.saveNewList(newList);
  }

  function deleteList(id: number): void {
    let newAppData: AppDataType = {...appData};
    delete newAppData.lists[id];
    setAppData(newAppData)
    StorageAPI.deleteList(id);
  }

  let listArray: TodoListType[] = Object.values(appData.lists)
  listArray.sort((a, b) => a.id - b.id);

  return (
    <div>
      <AddListButton newList= {addNewList} />
      <div className='ListContainer'>
        {listArray.length > 0 
          ? listArray.map((l: TodoListType) => 
            <TodoList 
              id={l.id} 
              label={l.label} 
              todos={l.todos} 
              nextId={l.nextId} 
              key={l.id} 
              deleteList={deleteList}
              /> )
          : null}
        </div>
    </div>
  )
}

export default TodoManager