const initialState = [
  {
    id: 1,
    text: 'hello',
    complete:false
  },
  {
    id: 2,
    text: 'hi',
    complete:false
  }
]

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    const todo ={
        id:state.length + 1,
        text:action.text,
        complete:false
      }
    const newState = [...state,todo]
      
    return newState

    case 'COMPLETE':
    const complete = state.map(t => {
      if(t.id === action.id){
        t.complete = true
      }
      return t
    })
    return complete
    
    default:
      return state
  }
}

export default rootReducer