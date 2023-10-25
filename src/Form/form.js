import React from 'react';
import './form.css';
import {useState} from 'react';

const Form=(props)=>{
    const [value,setValue]=useState('');
    return(
        <form className="forma" onSubmit={e=>{
            e.preventDefault();
            props.putTodo(value);
            setValue('');
        }}>
            <input type='text' maxLength="50" placeholder='Add a todo' className='input' id='input' value={value} onChange={e=> setValue(e.target.value)}/>
            <button class='button'>Add Todo</button>
        </form>
    )
}

export default Form;