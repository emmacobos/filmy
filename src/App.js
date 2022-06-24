import React from 'react';
import Home from './Pages/Home';
import Kids from './Pages/Kids';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Kids' element={<Kids/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
