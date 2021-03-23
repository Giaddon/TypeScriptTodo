import { AppDataType, TodoType } from './types';

export function saveNewList(): void {
  let parsedData = parseAppData();
  if (parsedData) {
    parsedData.lists.push({label: "New List", todos:[], id: parsedData.nextId, nextId: 0});
    parsedData.nextId += 1;
    saveAppData(JSON.stringify(parsedData));
  }
}

export function deleteListFromStorage(id: number): void {
  let parsedData = parseAppData();
  if (parsedData) {
    parsedData.lists = parsedData.lists.filter((l) => l.id !== id)
    saveAppData(JSON.stringify(parsedData));
  }
}

export function deleteTodoFromStorage(listId: number, todoId: number): void {
  let parsedData = parseAppData();
  if (parsedData) {
    parsedData.lists.forEach(list => {if (list.id === listId) {
      list.todos = list.todos.filter(todo => todo.id !== todoId)
    }});
    saveAppData(JSON.stringify(parsedData));
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

function saveAppData(data: string): void {
  localStorage.setItem('todos', data);
}

export function saveNewTodo(id: number, newTodo: TodoType): void {
  let parsedData = parseAppData();
  if (parsedData) {
    parsedData.lists.forEach(list => {if (list.id === id) {
      list.todos.push(newTodo);
      list.nextId += 1;
    }})
    saveAppData(JSON.stringify(parsedData));
  }
};

export function saveListLabel(id: number, label: string): void {
  let parsedData = parseAppData();
  if (parsedData) {
    parsedData.lists.forEach(list => {if (list.id === id) {
      list.label = label;
    }})
    saveAppData(JSON.stringify(parsedData));
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
    saveAppData(JSON.stringify(parsedData));
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
    saveAppData(JSON.stringify(parsedData));
  }
};