import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import Routes from './components/routes';
import Body from './components/body';
import Header from './components/header';



function App() {  

  return (
    <div className="App">
      <header className="App-header">
        <span>Tetyana Yarish Project</span>
        <Link to="/">Home</Link>
        <Link to="/about">Add_Note</Link>
              <Link to="/contact">Favorite color</Link>
          </header>
          <Routes />         
      </div>

  );
}

export default App;
