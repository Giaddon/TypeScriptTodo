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

export interface TodoProps {
  id: number,
  listId: number, 
  label: string, 
  completed: boolean, 
  deleteTodo: (listId: number, todoId: number) => void,
};

export interface TodoListType {
  id: number,
  label: string,
  todos: {[id:number]: TodoType},
  nextId: number,
}

export interface TodoListProps {
  id: number,
  label: string,
  todos: {[id:number]: TodoType}
  nextId: number,
  deleteList: (id: number) => void,
}

