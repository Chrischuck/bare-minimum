import React from 'react';
import Link from 'react-router/lib/Link';

export default class Header extends React.Component {
  render() {
    const { path } = this.props;

    return (
      <nav className='navbar navbar-inverse navbar-static-top'>
        <div className='container'>
          <div className='navbar-header'>
            <div className='navbar-brand'>Bare Minimum</div>
          </div>
          <div id='navbar' className='collapse navbar-collapse'>
            <ul className='nav navbar-nav'>
              <li className={ path === 'grade-calculator' || path === '/grade-calculator' ? 'active' : '' }><Link to='grade-calculator'>Grade Calculator</Link></li>
              <li className={ path === 'weighted-grade-calculator' || path === '/weighted-grade-calculator' ? 'active' : '' }><Link to='weighted-grade-calculator'>Weighted Grade Calculator</Link></li>
              <li className={ path === 'gpa-calculator' || path === '/gpa-calculator' ? 'active' : '' }><Link to='gpa-calculator'>GPA Calculator</Link></li>
              <li className={ path === 'about' || path === '/about' ? 'active' : '' }><Link to='about'>About</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  path: React.PropTypes.string,
};
