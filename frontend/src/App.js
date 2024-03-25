import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import Login from '../src/Pages/Login/Login'
import Signup from '../src/Pages/SignUp/SignUp'
import {ToastContainer,toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  /* const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    fetch('/api/data')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

 return (
    <div>
      <h1>Data from the Backend:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
  */



    
  return (



    <BrowserRouter>
    <div className="App">
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/dash' element={<Home/>}/>
      </Routes>
    </div>

    </BrowserRouter>
  );
}

export default App;
