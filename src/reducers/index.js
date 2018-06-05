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
      if(t.id === action.id && t.complete === false){
        t.complete = true
      }else{
        t.complete = false
      }
      return t
    })
    return complete
    
    case 'COMPLETED':
    const completed = state.filter(c => c.complete === true)
    return completed

    case 'ACTIVE':
    const active = state.filter(c => c.complete === false)
    return active

    default:
      return state
  }
}

export default rootReducer