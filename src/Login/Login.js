import React, { useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css'; 
 
const Login = () => { 
    const [data, setData] = useState({}) 
    const navigate = useNavigate() 
    const SendPromises = async (e) => { 
        e.preventDefault() 
        try { 
            const response = await fetch('https://todo-redev.herokuapp.com/api/auth/login', { 
                method: "POST", 
                headers: { 
                    "Content-Type": "application/json" 
                }, 
                body: JSON.stringify({ 
                    email: "vlad8@mail.ru", 
                    password: "Hello_34" 
                }) 
            }) 
            const { token } = await response.json(); 
            if (token) { 
                localStorage.setItem("token", token); 
                console.log("token:", token) 
                navigate("/todo-list") 
            }else{
                navigate('/todo')
            }
        } catch (err) { 
            console.log(err) 
        } 
    } 
 
    return ( 
        <div className='login'> 
            <h1 className='login_title'>Authorization</h1> 
            <form className='form' onSubmit={(e) => SendPromises(e)}> 
                <input 
                    type='text' 
                    placeholder='Email' 
                    className='email' 
                    value={data.email} 
                    onChange={e => setData({ ...data, email: e.target.value })} 
                /> 
                <input 
                    type='password' 
                    placeholder='Password' 
                    className='password' 
                    value={data.password} 
                    onChange={e => setData({ ...data, password: e.target.value })} 
                /> 
                <button 
                    className='btn' 
                    type='submit' 
                >Sign in</button> 
                <div className='reg-btn'> 
                    <Link className='link1' to='/registration'>I want register</Link> 
                </div> 
            </form> 
        </div> 
    ) 
} 
 
export default Login