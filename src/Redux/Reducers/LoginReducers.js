import {ADD_EMAIL, ADD_PASSWORD} from '../Actions/LoginActions';


const initialState = {
    email: '',
    password: ''
  };
  const loginReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_EMAIL:
        return {
          ...state,
          email: action.payload
        };
      case ADD_PASSWORD:
        return {
          ...state,
          password: action.password
        };
      default:
        return state;
    }
  };
  
  export default loginReducer;