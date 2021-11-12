import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation'
import Friends from './routes/Friends';
import './reset.css'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Friends />} />
      </Routes>
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
