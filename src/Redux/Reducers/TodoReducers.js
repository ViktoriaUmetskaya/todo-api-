import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO, EDIT_TODO, EDIT_TEXT, CLEAR_EDIT,UPDATE_TODO} from '../Actions/TodoActions'

const initialState={
    todos: [],
    allTodos: 0,
    allComplete: 0,
    editingTodo:null,
    editingText:'',
}

const TodoReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos:[...state.todos, action.payload],
                allTodos: state.allTodos+1,
            };
        case TOGGLE_TODO:
            const newTodos=state.todos.map(todo=>
                todo.id === action.payload ? {...todo, done: !todo.done}: todo)
            const newAllComplete=newTodos.filter(todo=>todo.done).length
            return {
                ...state,
                todos: newTodos,
                allComplete: newAllComplete,
            };
         case REMOVE_TODO:
            return {
                ...state,
                todos: []
        }
        case EDIT_TODO:
            return {
                ...state,
                editingTodo:action.payload
            }
        case EDIT_TEXT:
            return {
                ...state,
                editingText:action.payload
            }   
        case CLEAR_EDIT:
            const updatedtodos = state.todos.filter(todo => todo.id !== action.payload);
            const updatedAllComplete = updatedtodos.filter(todo => todo.done).length;
            return {
                ...state,
                todos:updatedtodos,
                allTodos: state.allTodos - 1,
                allComplete: updatedAllComplete,
                editingTodo: null
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo =>
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
                ),
                editingTodo:null
            };
        default:
            return state;
    }
}


export default TodoReducer