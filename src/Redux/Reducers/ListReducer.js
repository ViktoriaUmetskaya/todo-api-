import { ADD_NEW_USER } from '../Actions/ListActions'

const initialState = {
    users: [] 
}

const ListReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_NEW_USER:
        return {
          ...state,
          users: [...state.users, { ...action.payload }] 
        }
      default:
        return state
    }
  }
  
  export default ListReducer