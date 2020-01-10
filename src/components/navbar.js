import React from 'react';
import './navbar.css';

export default class NavBar extends React.Component {
  render() {
    return(
      <div>
        <ul id='nav'>
          <li><a href='#'>Resolutions</a></li>
        </ul>
      </div>
    )
  }
}
