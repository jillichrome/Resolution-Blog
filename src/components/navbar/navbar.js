import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import Dropdown from './dropdown';

export default class NavBar extends React.Component {
  render() {
    return(
      <div className='nav'>
        <Link to='/' className='title'>Resolution Keeper<i class='fa fa-leaf fa-fw'></i></Link>
        <div className='menu'>
          <Dropdown />
        </div>
      </div>
    )
  }
}
