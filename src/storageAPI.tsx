import { AppDataType } from './types';

class StorageAPI {

  static loadAppData(): AppDataType {
    let stringData: string|null = localStorage.getItem('todos');
    if (stringData) {
      return JSON.parse(stringData);;
    } else {
      return {'lists': {}, 'nextId': 0};
    }
  }

  // static parseAppData(): AppDataType|undefined {
  //   let stringData: string|null = localStorage.getItem('todos');
  //   if (stringData) return JSON.parse(stringData);
  // }

  // static saveAppData(data: string): void {
  //   localStorage.setItem('todos', data);
  // }

  // static saveNewList(): void {
  //   let parsedData = this.parseAppData();
  //   if (parsedData) {
  //     parsedData.lists.set(parsedData.nextId, {label: "New List", todos: new Map(), id: parsedData.nextId, nextId: 0});
  //     parsedData.nextId += 1;
  //     this.saveAppData(JSON.stringify(parsedData));
  //   }
  // }

  // static deleteListFromStorage(id: number): void {
  //   let parsedData = this.parseAppData();
  //   if (parsedData) {
  //     parsedData.lists.delete(id);
  //     this.saveAppData(JSON.stringify(parsedData));
  //   }
  // }

  // static deleteTodoFromStorage(listId: number, todoId: number): void {
  //   let parsedData = this.parseAppData();
  //   if (parsedData) { 
  //     parsedData.lists.get(listId).todos.delete(todoId);
  //     this.saveAppData(JSON.stringify(parsedData));
  //   }
  // }





  // static saveNewTodo(id: number, newTodo: TodoType): void {
  //   let parsedData = this.parseAppData();
  //   if (parsedData) {
  //     parsedData.lists.get(id).todos.set(newTodo.id, newTodo);      
  //     parsedData.lists.get(id).nextId += 1;
  //     this.saveAppData(JSON.stringify(parsedData));
  //   }
  // };

  // static saveListLabel(id: number, label: string): void {
  //   let parsedData = this.parseAppData();
  //   if (parsedData) {
  //     parsedData.lists.get(id).label = label;
  //     this.saveAppData(JSON.stringify(parsedData));
  //   }
  // };

  // static saveTodoLabel(id: number, listId: number, label: string): void {
  //   let parsedData = this.parseAppData();
  //   if (parsedData) {
  //     parsedData.lists.get(listId).todos.get(id).label = label;
  //     this.saveAppData(JSON.stringify(parsedData));
  //   }
  // };

  // // Map datatype for lists and todos? 
  // // Refactor so there is only a write step for persistent storage (one context)

  // static saveTodoCompleted(id: number, listId: number, completed: boolean): void {
  //   let parsedData = this.parseAppData();
  //   if (parsedData) {
  //     parsedData.lists.get(listId).todos.get(id).completed = completed;
  //     this.saveAppData(JSON.stringify(parsedData));
  //   }
  // };

}

export default StorageAPI;