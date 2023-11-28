import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { addUsername, addEmail, addPassword, addGender, addAge } from '../Redux/Actions/RegistrationAction'
import { addNewUser } from '../Redux/Actions/ListActions'
import './Registration.css';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Registration =()=>{
    
    const dispatch = useDispatch()
    const {username, email, password, gender, age} = useSelector(state=>state.form || {})
    const SendPromises = e => {
        e.preventDefault()

        const userData={
          username: 'Vladaa',
          email: 'vladaa8@mail.ru',
          password: 'Hello_34',
          gender: 'male',
          age: '30'
          }

        axios.post('https://todo-redev.herokuapp.com/api/users/register', userData)
        .then(response => {
        console.log('Пользователь зарегистрирован успешно', response.data);
        dispatch(addNewUser(userData));
        dispatch(addUsername(''));
        dispatch(addEmail(''));
        dispatch(addPassword(''));
        dispatch(addGender(''));
        dispatch(addAge(''));
      })
      .catch(error => {
        console.error('Ошибка при регистрации пользователя', error);
        console.error('Дополнительная информация об ошибке', error.response.data);
      });
    }

    return (
        <div className='register'>
            <h1 className='register_title'>Registration</h1>
            <form className='form' onSubmit={e=>SendPromises(e)}>
            <input
                className='username'
                value={username}
                onChange={e=>dispatch(addUsername(e.target.value))}
                />
                <input
                className='email'
                value={email}
                onChange={e=>dispatch(addEmail(e.target.value))}
                />
                <input
                className='password'
                value={password}
                onChange={e=>dispatch(addPassword(e.target.value))}
                />
                <div className='radio'>
                    <input className='gender-input' type='radio' id='1' value={gender} onClick={e=>addGender(addGender(e.target.value))}/>
                    <label className='gender' for='1'>Male</label>
                    <input className='gender-input' type='radio' id='2' value={gender} onClick={e=>addGender(addGender(e.target.value))}/>
                    <label className='gender' for='2'>Female</label> 
                </div>
                <input
                className='age'
                value={age}
                onChange={e=>dispatch(addAge(e.target.value))}
                />
                <button
                type='submit'
                className='btn'>
                Registration
                </button>
                <div className='link-login'> 
                    <Link className='link-log' to='/todo-redux'>Login</Link> 
                </div> 
            </form>
        </div>
    )

}
export default Registration