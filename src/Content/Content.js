import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from '../Login/Login';
import Registration from '../Registration/Registration';
import Todo from '../Todo/Todo';

const Content=()=>{
    return(
        <div className='content'>
            <Router>
                <Routes>
                    <Route exact path='/todo-redux' element={<Login/>}/>
                    <Route exact path='/registration' element={<Registration/>}/>
                    <Route exact path='/todo-list' element={<Todo/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default Content