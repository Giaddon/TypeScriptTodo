export interface AppDataType {
  lists: {[id:number]: TodoListType}
  nextId: number,
}

export interface TodoType {
  id: number,
  listId: number, 
  label: string, 
  completed: boolean, 
};

export interface TodoComponent {
  id: number,
  listId: number, 
  label: string, 
  completed: boolean, 
  del: (listId: number, todoId: number) => void,
};

export interface TodoListType {
  id: number,
  label: string,
  todos: {[id:number]: TodoType},
  nextId: number,
}

export interface TodoListComponent {
  id: number,
  label: string,
  todos: {[id:number]: TodoType}
  nextId: number,
  updateListLabel: (id: number, label: string) => void,
  deleteList: (id: number) => void,
}

