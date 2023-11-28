export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const EDIT_TEXT = 'EDIT_TEXT';
export const CLEAR_EDIT = 'CLEAR_EDIT';
export const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    };
};

export const removeTodos = (id) => {
    return {
        type: REMOVE_TODO
    };
};

export const toggleTodoAction = (id) => {
    return {
        type: TOGGLE_TODO,
        payload: id
    };
};

export const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        payload: id
    };
};

export const editText = (text) => {
    return {
        type: EDIT_TEXT,
        payload: text
    };
};
export const clearEdit = (id) => {
    return {
        type: CLEAR_EDIT,
        payload:id
    };
};

export const updateTodo = (id, text) => {
    return {
        type: UPDATE_TODO,
        payload: {id,text}
    };
};