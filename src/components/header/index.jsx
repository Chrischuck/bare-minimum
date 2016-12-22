import React from 'react';
import { Link } from 'react-router';

const Header = () =>
  <nav className='navbar navbar-inverse navbar-fixed-top'>
    <div className='container'>
      <div className='navbar-header'>
        <button
          type='button'
          className='navbar-toggle collapsed'
          data-toggle='collapse'
          data-target='#navbar'
          aria-expanded='false'
          aria-controls='navbar'
        >
          <span className='sr-only'>Toggle navigation</span>
          <span className='icon-bar' />
          <span className='icon-bar' />
          <span className='icon-bar' />
        </button>
        <a className='navbar-brand'>Bare Minimum</a>
      </div>
      <div id='navbar' className='collapse navbar-collapse'>
        <ul className='nav navbar-nav'>
          <li className='active'><Link to='/'>Home</Link></li>
          <li><Link to='grade-calculator'>Grade Calculator</Link></li>
          <li><Link to='gpa-calculator'>GPA Calculator</Link></li>
        </ul>
      </div>
    </div>
  </nav>;


export default Header;
