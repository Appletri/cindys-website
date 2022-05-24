import './NavBar.css';
import NavButton from './NavButton.js';
import React, { Component }  from 'react';
import { Link } from 'react-router-dom';

function NavBar(props) {
  return (
    <div className='nav-bar'>
      <div className='nav-left'>
        <Link to='Home' className='home'>{props.firstName + ' ' + props.lastName}</Link>
      </div>
      <div className='nav-right'>
        <NavButton title="About" />
        <NavButton title="Works" />
        <NavButton title="Writing" />
      </div>
    </div>
  );
}

export default NavBar;