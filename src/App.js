import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './assets/pages/Home'
import './App.css';
import SingUp from './assets/pages/SingUp';
import SingIn from './assets/pages/SingIn';
import Profile from './assets/pages/Profile';
import About from './assets/pages/About';

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/sing-up' element={<SingUp/>}></Route>
      <Route path='/sing-in' element={<SingIn/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
