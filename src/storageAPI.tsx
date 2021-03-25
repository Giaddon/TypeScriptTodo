import { AppDataType, TodoType } from './types';

export function saveNewList(): void {
  let parsedData = parseAppData();
  if (parsedData) {
    parsedData.lists.set(parsedData.nextId, {label: "New List", todos: new Map(), id: parsedData.nextId, nextId: 0});
    parsedData.nextId += 1;
    saveAppData(JSON.stringify(parsedData));
  }
}

export function deleteListFromStorage(id: number): void {
  let parsedData = parseAppData();
  if (parsedData) {
    parsedData.lists.delete(id);
    saveAppData(JSON.stringify(parsedData));
  }
}

export function deleteTodoFromStorage(listId: number, todoId: number): void {
  let parsedData = parseAppData();
  if (parsedData) { 
    parsedData.lists.get(listId).todos.delete(todoId);
    saveAppData(JSON.stringify(parsedData));
  }
}

export function loadAppData(): AppDataType {
  let stringData: string|null = localStorage.getItem('todos');
  if (stringData) {
    return JSON.parse(stringData);
  } else {
    let intitialData: AppDataType = {'lists':new Map(), 'nextId': 0};
    localStorage.setItem('todos', JSON.stringify(intitialData))
    return intitialData;
  }
}

function parseAppData(): AppDataType|undefined {
  let stringData: string|null = localStorage.getItem('todos');
  if (stringData) return JSON.parse(stringData);
}

function saveAppData(data: string): void {
  localStorage.setItem('todos', data);
}

export function saveNewTodo(id: number, newTodo: TodoType): void {
  let parsedData = parseAppData();
  if (parsedData) {
    parsedData.lists.get(id).todos.set(newTodo.id, newTodo);      
    parsedData.lists.get(id).nextId += 1;
    saveAppData(JSON.stringify(parsedData));
  }
};

export function saveListLabel(id: number, label: string): void {
  let parsedData = parseAppData();
  if (parsedData) {
    parsedData.lists.get(id).label = label;
    saveAppData(JSON.stringify(parsedData));
  }
};

export function saveTodoLabel(id: number, listId: number, label: string): void {
  let parsedData = parseAppData();
  if (parsedData) {
    parsedData.lists.get(listId).todos.get(id).label = label;
    saveAppData(JSON.stringify(parsedData));
  }
};

// Map datatype for lists and todos? 
// Refactor so there is only a write step for persistent storage (one context)

export function saveTodoCompleted(id: number, listId: number, completed: boolean): void {
  let parsedData = parseAppData();
  if (parsedData) {
    parsedData.lists.get(listId).todos.get(id).completed = completed;
    saveAppData(JSON.stringify(parsedData));
  }
};