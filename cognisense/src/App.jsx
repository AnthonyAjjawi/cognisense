import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Navbar from './components/Navbar';
import './App.css'
import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Aichat from './pages/Aichat';
import Contact from './pages/Contact';
import Telephone from './assets/telephone.jpg'

function App() {
  return (
    <>
   
     {Header}
      
      {Navbar}
      
    
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/aichat" element={<Aichat />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

   
      <Footer></Footer>
    </>
  );
}

export default App;
