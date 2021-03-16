export function saveTodos(todos: any) {
  let stringTodos: string = JSON.stringify(todos); 
  localStorage.setItem('todos', stringTodos);
}

export function loadTodos() {
  let stringTodos = localStorage.getItem('todos');
  return stringTodos ? JSON.parse(stringTodos) : []
}