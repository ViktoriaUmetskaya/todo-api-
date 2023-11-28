import {ADD_NAME, ADD_EMAIL, ADD_PASSWORD, ADD_GENDER, ADD_AGE } from '../Actions/RegistrationAction';

const initialState={
    username:'',
    email: "",
    password: "",
    gender:"",
    age:""
}

const RegistrationReducer = (state=initialState, action)=>{
    switch (action.type){
        case ADD_NAME:
            return{
                ...state,
                username:action.payload
            }
        case ADD_EMAIL:
            return{
                ...state,
                email:action.payload
            }
        case ADD_PASSWORD:
            return{
                ...state,
                 password:action.payload
            }
        case ADD_GENDER:
            return{
                ...state,
                gender:action.payload
            }    
        case ADD_AGE:
            return{
                ...state,
                age:action.payload
            } 
            default:
                return state
    }
}

export default RegistrationReducer