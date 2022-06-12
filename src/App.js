import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Navbar from './components/Navbar';
import UserGuide from './components/UserGuide';
import ContactUs from './components/ContactUs';
import Explore from './components/Explore';
import Games from './components/Games';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='container'>
      <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="ContactUs" element={<ContactUs/>}/>
        <Route path="UserGuide" element={<UserGuide/>}/>
        <Route path="Games" element={<Games/>}/>
        <Route path="Explore" element={<Explore/>}/>
      </Routes>
      </div>
      
    </div>
  );
}

export default App;
