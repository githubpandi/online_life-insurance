import React from 'react';
import './assets/css/App.css';
import './assets/css/LoginSignup.css'
import Login from './components/Login';
import SignUp from './components/SignUp';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/aboutus' element={<AboutUs></AboutUs>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        
      </Routes>
    </div>
  );
}

export default App;
