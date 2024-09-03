
import React from 'react';
import Headers from './components/Header';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import About from './pages/About';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <div className='flex'>
          <Sidebar />
          <div className='flex-1'>
            <Headers />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<About />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
