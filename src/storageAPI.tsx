/** Helper class with static functions for managing the persistent browser storage. */

import { AppDataType, TodoListType, TodoType } from './types';

class StorageAPI {

  static loadAppData(): AppDataType {
    let stringData: string|null = localStorage.getItem('todos');
    if (stringData) {
      return JSON.parse(stringData);;
    } else {
      return {'lists': {}, 'nextId': 0};
    }
  }

  static parseAppData(): AppDataType|undefined {
    let stringData: string|null = localStorage.getItem('todos');
    if (stringData) return JSON.parse(stringData);
  }

  static saveAppData(data: string): void {
    localStorage.setItem('todos', data);
  }

  static saveNewList(newList: TodoListType): void {
    let parsedData = this.parseAppData();
    if (parsedData) {
      parsedData.lists[newList.id] = newList;
      parsedData.nextId += 1;
      this.saveAppData(JSON.stringify(parsedData));
    }
  }

  static deleteList(id: number): void {
    let parsedData = this.parseAppData();
    if (parsedData) {
      delete parsedData.lists[id];
      this.saveAppData(JSON.stringify(parsedData));
    }
  }

  static deleteTodo(listId: number, todoId: number): void {
    let parsedData = this.parseAppData();
    if (parsedData) { 
      delete parsedData.lists[listId].todos[todoId];
      this.saveAppData(JSON.stringify(parsedData));
    }
  }

  static saveNewTodo(listId: number, newTodo: TodoType): void {
    let parsedData = this.parseAppData();
    if (parsedData) {
      parsedData.lists[listId].todos[newTodo.id] = newTodo;      
      parsedData.lists[listId].nextId += 1;
      this.saveAppData(JSON.stringify(parsedData));
    }
  };

  static saveListLabel(id: number, label: string): void {
    let parsedData = this.parseAppData();
    if (parsedData) {
      parsedData.lists[id].label = label;
      this.saveAppData(JSON.stringify(parsedData));
    }
  };

  static saveTodoLabel(listId: number, todoId: number, newLabel: string): void {
    let parsedData = this.parseAppData();
    if (parsedData) {
      parsedData.lists[listId].todos[todoId].label = newLabel;
      this.saveAppData(JSON.stringify(parsedData));
    }
  };

  static saveTodoCompleted(listId: number, todoId: number, newCompleted: boolean): void {
    let parsedData = this.parseAppData();
    if (parsedData) {
      parsedData.lists[listId].todos[todoId].completed = newCompleted;
      this.saveAppData(JSON.stringify(parsedData));
    }
  };

}

export default StorageAPI;