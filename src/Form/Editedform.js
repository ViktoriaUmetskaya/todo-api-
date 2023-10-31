import {useState} from 'react';
import Delete from '../Img/Delete.png';
import Edit from '../Img/Edit.png';

const Editedform=({todos,todo,setTodos,setAllTodos,allTodos})=>{

    const[editingTodo, setEditingTodo]=useState(null);
    const[editingText, setEditingText]=useState('');

    const editTodo=(id)=>{
        const todoToEdit = todos.find((todo)=>todo.id === id)
        if(todoToEdit){
            setEditingTodo(id);
            setEditingText(todoToEdit.text)
        }
    }

    const saveEditedTodo = (id) => {
        if(editingText.trim() !==''){
        const updatedTodos = todos.map((todo) => {
          if (todo.id === id) {
            return { ...todo, text: editingText };
          }
          return todo;
        });
        setTodos(updatedTodos);
        setEditingTodo(null); 
      }};

    const handleKeyPress = (e, id) => {
        if (e.key === "Enter") {
            saveEditedTodo(id);
        }
    };

    const removeTodo=(id)=>{
        setTodos(todos.filter(todo=>todo.id!==id))
        setAllTodos(allTodos-1)
    }

    return <div>
        {todo.id === editingTodo ? (
        <>
            <input className='editingInput'
                id='editingInput'
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e, todo.id)} 
                onBlur={() => saveEditedTodo(todo.id)}
            />
            <button className='button-update'
                onKeyPress={(e) => handleKeyPress(e, todo.id)} 
            >Update</button>
        </>
        ) : (
        <>
            {todo.text}
            <img src={Edit} alt='edit' className='edit' onClick={(e)=>{
                e.stopPropagation();
                editTodo(todo.id);
            }}/>
            <img src={Delete} alt='delete' className='delete' onClick={(e)=>{
                e.stopPropagation();
                removeTodo(todo.id);
            }}/>
        </>
        )}
    </div>
}

export default Editedform;