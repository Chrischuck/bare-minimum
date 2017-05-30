import React from 'react';
import Link from 'react-router/lib/Link';

const Header = ({ path }) =>
  <nav className='navbar navbar-static-top'>
    <div className='container'>
      <div className='navbar-header'>
        <div className='navbar-brand'>Bare Minimum</div>
      </div>
      <div id='navbar' className='navbar-collapse'>
        <ul className='navbar-nav'>
          <li className={ path === 'grade-calculator' || path === '/grade-calculator' ? 'active' : '' }><Link to='grade-calculator'>Final Grade Calculator</Link></li>
          <li className={ path === 'damage-calculator' || path === '/damage-calculator' ? 'active' : '' }><Link to='damage-calculator'>Damage Calculator</Link></li>
          <li className={ path === 'weighted-grade-calculator' || path === '/weighted-grade-calculator' ? 'active' : '' }><Link to='weighted-grade-calculator'>Weighted Grade Calculator</Link></li>
          <li className={ path === 'gpa-calculator' || path === '/gpa-calculator' ? 'active' : '' }><Link to='gpa-calculator'>GPA Calculator</Link></li>
          <li className={ path === 'donate' || path === '/donate' ? 'active' : '' }><Link to='donate'>Donate</Link></li>
        </ul>
      </div>
    </div>
  </nav>;

export default Header;
