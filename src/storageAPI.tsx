import { AppDataType, TodoType } from './types';

export function saveNewList(): void {
  let parsedData = parseAppData();
  if (parsedData) {
    parsedData.lists.push({label: "New List", todos:[], id: parsedData.nextId, nextId: 0});
    parsedData.nextId += 1;
    localStorage.setItem('todos', JSON.stringify(parsedData));
  }
}

export function loadAppData(): AppDataType {
  let stringData: string|null = localStorage.getItem('todos');
  if (stringData) {
    return JSON.parse(stringData);
  } else {
    let intitialData: AppDataType = {'lists':[], 'nextId': 0};
    localStorage.setItem('todos', JSON.stringify(intitialData))
    return intitialData;
  }
}

function parseAppData(): AppDataType|undefined {
  let stringData: string|null = localStorage.getItem('todos');
  if (stringData) return JSON.parse(stringData);
}

export function saveNewTodo(id: number, newTodo: TodoType) {
  let parsedData = parseAppData();
  if (parsedData) {
    parsedData.lists.forEach(list => {if (list.id === id) {
      list.todos.push(newTodo);
      list.nextId += 1;
    }})
    localStorage.setItem('todos', JSON.stringify(parsedData));
  }
};

export function saveListLabel(id: number, label: string): void {
  let parsedData = parseAppData();
  if (parsedData) {
    parsedData.lists.forEach(list => {if (list.id === id) {
      list.label = label;
    }})
    localStorage.setItem('todos', JSON.stringify(parsedData));
  }
};

export function saveTodoLabel(id: number, listId: number, label: string): void {
  let parsedData = parseAppData();
  if (parsedData) {
    parsedData.lists.forEach(list => {if (list.id === listId) {
      list.todos.forEach(todo => {if (todo.id === id) {
        todo.label = label;
      }})
    }})
    localStorage.setItem('todos', JSON.stringify(parsedData));
  }
};

export function saveTodoCompleted(id: number, listId: number, completed: boolean): void {
  let parsedData = parseAppData();
  if (parsedData) {
    parsedData.lists.forEach(list => {if (list.id === listId) {
      list.todos.forEach(todo => {if (todo.id === id) {
        todo.completed = completed;
      }})
    }})
    localStorage.setItem('todos', JSON.stringify(parsedData));
  }
};