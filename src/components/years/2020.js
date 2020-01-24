import React from 'react';
import './2020.css';

export default class Year20 extends React.Component {
  render() {
    return(
      <div className='year'>
        <div className='header'>
        <span><p>Resolutions are easy to make.</p></span>
        <span><img src={require('./tree.jpg')} alt='' /></span>
        <span><p>Difficult to keep.</p></span>
        </div>
        <div className='content'>
          <h1>2020</h1>
          <p>GOAL: Baking!</p>
          <div className='card'>
            <div className='container'>
              <h2>January</h2>
              <p>Savory Tart</p>
            </div>
          </div>
          <div className='card'>
            <div className='container'>
              <h2>Feburary</h2>
              <p>TBD</p>
            </div>
          </div>
          <div className='card'>
            <div className='container'>
              <h2>March</h2>
              <p>TBD</p>
            </div>
          </div>
          <div className='card'>
            <div className='container'>
              <h2>April</h2>
              <p>TBD</p>
            </div>
          </div>
          <div className='card'>
            <div className='container'>
              <h2>May</h2>
              <p>TBD</p>
            </div>
          </div>
          <div className='card'>
            <div className='container'>
              <h2>June</h2>
              <p>TBD</p>
            </div>
          </div>
          <div className='card'>
            <div className='container'>
              <h2>July</h2>
              <p>TBD</p>
            </div>
          </div>
          <div className='card'>
            <div className='container'>
              <h2>August</h2>
              <p>TBD</p>
            </div>
          </div>
          <div className='card'>
            <div className='container'>
              <h2>September</h2>
              <p>TBD</p>
            </div>
          </div>
          <div className='card'>
            <div className='container'>
              <h2>October</h2>
              <p>TBD</p>
            </div>
          </div>
          <div className='card'>
            <div className='container'>
              <h2>November</h2>
              <p>TBD</p>
            </div>
          </div>
          <div className='card'>
            <div className='container'>
              <h2>December</h2>
              <p>TBD</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
