import React from 'react';

const Header = ({ path, push }) =>
  <nav className='navbar navbar-static-top'>
    <div className='container'>
      <div className='navbar-header'>
        <div className='navbar-brand'>Bare Minimum</div>
      </div>
      <div id='navbar' className='navbar-collapse'>
        <ul className='navbar-nav'>
          <li style={{ cursor: 'pointer' }} className={ path === 'grade-calculator' || path === '/grade-calculator' ? 'active' : '' }>
            <a name={ 'grade-calculator' } onClick={ push }>Final Grade Calculator</a>
          </li>
          <li style={{ cursor: 'pointer' }} className={ path === 'damage-calculator' || path === '/damage-calculator' ? 'active' : '' }>
            <a name={ 'damage-calculator' } onClick={ push }>Damage Calculator</a>
          </li>
          <li style={{ cursor: 'pointer' }} className={ path === 'weighted-grade-calculator' || path === '/weighted-grade-calculator' ? 'active' : '' }>
            <a name={ 'weighted-grade-calculator' } onClick={ push }>Weighted Grade Calculator</a>
          </li>
          <li style={{ cursor: 'pointer' }} className={ path === 'gpa-calculator' || path === '/gpa-calculator' ? 'active' : '' }>
            <a name={ 'gpa-calculator' } onClick={ push }>GPA Calculator</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>;

export default Header;
