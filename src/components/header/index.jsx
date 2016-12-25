import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'home',
    };
    this.changeTab = this.changeTab.bind(this);
  }

  changeTab(name) {
    this.setState({ active: name });
  }

  render() {
    const { active } = this.state;

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
            <a className='navbar-brand'>Bare Minimum</a>
          </div>
          <div id='navbar' className='collapse navbar-collapse'>
            <ul className='nav navbar-nav'>
              <li className={ classNames({ active: active === 'home' }) }><Link onClick={ () => this.changeTab('home') } to='/'>Home</Link></li>
              <li className={ classNames({ active: active === 'grade' }) }><Link onClick={ () => this.changeTab('grade') } to='grade-calculator'>Grade Calculator</Link></li>
              <li className={ classNames({ active: active === 'gpa' }) }><Link onClick={ () => this.changeTab('gpa') } to='gpa-calculator'>GPA Calculator</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
