import React from 'react';
import {useState} from 'react';
import './Registration.css';
import { Link } from 'react-router-dom';

const Registration =()=>{
    
    const [data, setData] = useState({})

    const Registration= async(e)=>{
      e.preventDefault()
      try{
        let response= await fetch('https://todo-redev.herokuapp.com/api/users/register',{
            method:"POST",
            headers:{
              'Content-Type': 'application/json'
            },
            body:JSON.stringify({
              username: "Vlad",
              email: "vlad8@mail.ru",
              password: "Hello_34",
              gender:"male",
              age:"30"    
                    })  
          })
          let result= await response.json();
          console.log(result)
      }
      catch(err){
        console.log(err)
      }  
        }
        
    return (
        <div className='register'>
            <h1 className='register_title'>Registration</h1>
            <form class='form' onSubmit={e=>Registration(e)}>
            <input
                type='text'
                placeholder='username'
                className='username'
                value={data.username}
                onChange={e=>setData({...data, username:e.target.value})}
                />
                <input
                type='text'
                placeholder='Email'
                className='email'
                value={data.email}
                onChange={e=>setData({...data, email:e.target.value})}
                />
                <input
                type='text'
                placeholder='Password'
                className='password'
                value={data.password}
                onChange={e=>setData({...data, password:e.target.value})}
                />
                <div className='radio'>
                    <input className='gender-input' type='radio' id='1' value={data.male} onClick={e=>setData({...data, gender:e.target.value})}/>
                    <label className='gender' for='1'>Male</label>
                    <input className='gender-input' type='radio' id='2' value={data.female} onClick={e=>setData({...data, gender:e.target.value})}/>
                    <label className='gender' for='2'>Female</label> 
                </div>
                <input
                type='number'
                placeholder='age'
                className='age'
                value={data.age}
                onChange={e=>setData({...data, password2:e.target.value})}
                />
                <button
                type='submit'
                className='btn'>
                Registration
                </button>
                <div className='link-login'> 
                    <Link className='link-log' to='/todo'>Login</Link> 
                </div> 
            </form>
        </div>
    )

}
export default Registration