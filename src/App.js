import React from 'react';
import './App.css';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='header'>
        <h3>Resolution Keeper</h3>
        <p>Resolution are easy to set, but difficult to keep.</p>
      </div>
    </div>
  );
}

export default App;
