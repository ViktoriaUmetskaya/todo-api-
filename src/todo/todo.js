import './todo.css';
import {useEffect, useState} from 'react';
import Form from '../Form/form.js';
import Delete from '../Img/delete.png'
import Edit from '../Img/edit.png'

function TODO(){

    const[todos,setTodos]=useState([]);
    const[allTodos,setAllTodos]=useState(0);
    const[allComplete,setAllComplete]=useState(0);
    const[editingTodo,setEditingTodo]=useState(null);
    const[editingText, setEditingText]=useState('')

    useEffect(()=>{
        setAllComplete(todos.filter(todo=>todo.done === true).length)
    },[todos])

    const putTodo=(value)=>{
        if(value){
            setTodos([...todos,{id:Date.now(), text:value, done:false}])
            setAllTodos(allTodos + 1)
        } else {
            console.log('Введите текс')
        }
    }

    const toggleTodo=(id)=>{
        setTodos(todos.map(todo=>{
            if(todo.id!==id) return todo;
            return{
                ...todo,
                done:!todo.done
            }
        }))
    }

    const editTodo=(id)=>{
        const todoToEdit = todos.find((todo)=>todo.id === id)
        if(todoToEdit){
            console.log("Editing Todo ID:", id);
            setEditingTodo(id);
            setEditingText(todoToEdit.text)
        }
    }

    const saveEditedTodo = (id) => {
        if(editingText.trim() !==''){
            console.log("Updating Todo ID:", id, "Text:", editingText);
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

    const clearTodos=()=>{
        setTodos([])
        setAllTodos(0)
    }

    return(
        <div className='wrapper'>
            <div className='container'>
                <h1 className='title'>What's the plan for Today?</h1>
                <Form putTodo={putTodo} />
                <ul className='todos'>
                    {
                        todos.map(todo=>{
                            return (
                                <li className={todo.done ? 'todo done' : 'todo'} key={todo.id} onClick={()=>toggleTodo(todo.id)}>
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
                                </li>
                            )
                        })                        
                    }
                    <div className='info'>
                        <span>All todos: {allTodos}</span>
                        <span>Complete: {allComplete}</span>
                    </div>
                    <button className='btnn' onClick={clearTodos} >Clear all</button>
                    
                </ul>
            </div>
        </div>
    )
  }
  export default TODO;