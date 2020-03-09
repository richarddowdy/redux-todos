const INITIAL_STATE = { todos: [] };

function todoReducer(state = INITIAL_STATE, action){
  switch(action.type){
    case "ADD_TODO":
      const newTodo = action.payload;
      return { ...state, todos: [...state.todos, newTodo]}

    case "DEL_TODO":
      const todoText = action.payload
      const todos = state.todos.filter(todo => todo.text !== todoText );
      return { ...state, todos }

    default: 
      console.warn("this case is not defined", action.type)
      return state
  }
};

export default todoReducer;