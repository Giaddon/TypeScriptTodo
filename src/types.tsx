export interface TodoType {
  id: number,
  listId: number, 
  label: string, 
  completed: boolean, 
};

export interface TodoListType {
  id: number,
  label: string,
  todos: TodoType[],
  nextId: number,
}

export interface AppDataType {
  lists: TodoListType[],
  nextId: number,
}