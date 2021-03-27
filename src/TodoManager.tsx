import React, { useState, useEffect } from 'react';
import AddListButton from './AddListButton';
import TodoList from './TodoList';
import StorageAPI from './storageAPI';
import { AppDataType, TodoListType, TodoType } from './types';

function TodoManager() {
  const [appData, setAppData] = useState(StorageAPI.loadAppData());

  useEffect(function saveDataToStorage() {
    localStorage.setItem('todos', JSON.stringify(appData));
  }, [appData])

  function addNewList(): void {
    let newAppData: AppDataType = {...appData};
    newAppData.lists[appData.nextId] = {label: "New List", todos:{}, id: appData.nextId, nextId: 0}
    newAppData.nextId += 1;
    setAppData(newAppData);
  }

  function deleteList(id: number): void {
    let newAppData: AppDataType = {...appData};
    delete newAppData.lists[id];
    setAppData(newAppData)
  }

  function updateListLabel(listId:number, label:string): void {
    let newAppData: AppDataType = {...appData};
    newAppData.lists[listId].label = label;
    setAppData(newAppData)
  }

  let listArray: TodoListType[] = Object.values(appData.lists);

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
              updateListLabel={updateListLabel} /> )
          : null}
        </div>
    </div>
  )
}

export default TodoManager