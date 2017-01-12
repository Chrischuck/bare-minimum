import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class Header extends React.Component {

  componentDidMount() {
    $(document).on('click', () => {
      $('.collapse').collapse('hide');
    });
  }
  render() {
    const { path } = this.props;

    return (
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
            <Link to='/grade-calculator' className='navbar-brand'>Bare Minimum</Link>
          </div>
          <div id='navbar' className='collapse navbar-collapse'>
            <ul className='nav navbar-nav'>
              <li className={ classNames({ active: path === '/' }) }><Link to='/'>Home</Link></li>
              <li className={ classNames({ active: path === 'grade-calculator' || path === '/grade-calculator' }) }><Link to='grade-calculator'>Grade Calculator</Link></li>
              <li className={ classNames({ active: path === 'gpa-calculator' || path === '/gpa-calculator' }) }><Link to='gpa-calculator'>GPA Calculator</Link></li>
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
