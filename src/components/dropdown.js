import React from 'react';
import {NavLink} from 'react-router-dom';
import './dropdown.css';

class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      display: false
    }

    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    this.setState({display: true}, () => {
      document.addEventListener('click', this.hideMenu);
    });
  }

  hideMenu() {
    this.setState({display: false}, () => {
      document.removeEventListener('click', this.hideMenu)
    });
  }

  render() {
    return(
      <div className='dropdown'>
        <div className='button' onClick={this.showMenu}>Year</div>
        {this.state.display ? (
          <ul>
            <li><NavLink to='/year'>2020</NavLink></li>
            <li>2021</li>
          </ul>
        ): (null)}
      </div>
    );
  }
}

export default Dropdown;
