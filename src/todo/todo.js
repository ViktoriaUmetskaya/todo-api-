import './Todo.css';
import {useEffect, useState} from 'react';
import Form from '../Form/Form.js';
import Editedform from '../Form/Editedform.js'

function Todo(){

    const[todos,setTodos]=useState([]);
    const[allTodos,setAllTodos]=useState(0);
    const[allComplete,setAllComplete]=useState(0);

    useEffect(()=>{
        setAllComplete(todos.filter(todo=>todo.done).length)
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

    const clearTodos=()=>{
        setTodos([])
        setAllTodos(0)
    }

    return(
        <div className='wrapper'>
            <div className='container'>
                <h1 className='title'>What's the plan for Today?</h1>
                <Form className='forma' putTodo={putTodo} />
                <ul className='todos'>
                    {
                        todos.map(todo=>{
                            return (
                                <li className={todo.done ? 'todo done' : 'todo'} key={todo.id} onClick={()=>toggleTodo(todo.id)}>
                                <Editedform todos={todos} todo={todo} setTodos={setTodos} setAllTodos={setAllTodos} allTodos={allTodos}/>
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
  export default Todo;