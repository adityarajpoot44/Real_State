import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './assets/pages/Home'
import './App.css';
import SignUp from './assets/pages/SignUp';
import SignIn from './assets/pages/SignIn';
import Profile from './assets/pages/Profile';
import About from './assets/pages/About';
import Header from './assets/component/Header';
// import Footer from './assets/component/Footer';

function App() {
  
  return (
    <BrowserRouter>     
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
      <Route path='/sign-in' element={<SignIn/>}></Route>
    </Routes>
    {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;
