import React from 'react';
import './navbar.css';

export default class NavBar extends React.Component {
  render() {
    return(
      <div id='nav'>
        <ul>
          <li id='title'>Resolution Keeper<i class='fa fa-leaf fa-fw'></i></li>
          <li><a href='/year'>Year</a></li>
        </ul>
      </div>
    )
  }
}
