import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './containers/Home/Home';
import Photos from './containers/Photos/Photos';
import Work from './containers/Work/Work';
import Contact from './containers/Contact/Contact';
import Login from './containers/Login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/blog' element={<Photos/>} />
          <Route path='/work' element={<Work/>}  />
          <Route path='/contact' element={<Contact/>}  />
          <Route path='/login' element={<Login/>}  />
          <Route path='' element={<Home/>}  />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
