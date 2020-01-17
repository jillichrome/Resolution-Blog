import React from 'react';
import './tree.jpg';
import './App.css';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='header'>
        <span><p>Resolutions are easy to make.</p></span>
        <span><img src={require('./tree.jpg')} alt=''/></span>
        <span><p>Difficult to keep.</p></span>
      </div>
      <div className='home'>
        <h1>New Year! New Goal!</h1>
        <p>At the start of every year, I make a resolution that I know deep down I won't actually do.</p>
        <p>I blame the wording. Resolutions is a daunting word so I've changed it to goal to sound less daunting.</p>
        <p>And I've decided to log it for shaming reasons. Everyone will, at least silently, agree avoiding shame is a strong motivator.</p>
        <p>Bring it on 2020!!</p>
      </div>
      <div className='row'>
        <div className='column'>
          <h4>EXERCISE</h4><i class='fa fa-bicycle'></i>
          <h4>HEALTH</h4><i class='fa fa-plus-square'></i>
        </div>
        <div className='column'>
          <h4>COMMUNICATION</h4><i class='fa fa-phone'></i>
          <h4>VOLUNTEER</h4><i class='fa fa-heart'></i>
        </div>
        <div className='column'>
          <h4>TRAVEL</h4><i class='fa fa-plane'></i>
          <h4>HOBBIES</h4><i class='fa fa-edit'></i>
        </div>
      </div>
    </div>
  );
}

export default App;
