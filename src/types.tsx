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
  todos: Map<number, TodoType>,
  nextId: number,
}

export interface TodoListComponent {
  id: number,
  label: string,
  todos: Map<number, TodoType>,
  nextId: number,
  del: (id: number) => void,
}

export interface AppDataType {
  lists: Map<number, TodoListType>
  nextId: number,
}