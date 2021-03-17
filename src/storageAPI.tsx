import { AppDataType, TodoType } from './types';

export function saveAppData(appData: AppDataType): void {
  let stringData: string = JSON.stringify(appData); 
  localStorage.setItem('todos', stringData);
}

export function loadAppData(): AppDataType {
  let stringData: string|null = localStorage.getItem('todos');
  return stringData ? JSON.parse(stringData) : {'lists':[], 'nextId': 0}
}

export function saveTodoListData( id: number, todos: TodoType[]) {
  let stringData: string|null = localStorage.getItem('todos');
  if (stringData) {
    let parsedData: AppDataType = JSON.parse(stringData);
    parsedData.lists.forEach(element => {if (element.id === id) {
      element.todos = todos;
      element.nextId += 1;
    }})
    localStorage.setItem('todos', JSON.stringify(parsedData));
  }
};