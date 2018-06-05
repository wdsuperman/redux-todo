export const addTodo = text => ({
  type:'ADD_TODO',
  text
})
export const complete = id =>({
  type:'COMPLETE',
  id
})