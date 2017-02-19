import React, { Component } from 'react';
import GradeCalculator from '../routes/finalGrade/components';
import './styles.css';
import Header from '../components/header';

export default class App extends Component {
  render() {
    return (
      <div id='globalWrapper' className='globalWrapper'>
        <Header path={ this.props.location.pathname } />

        <div
          className='container'
          style={ {
            paddingTop: '2%',
            width: '100%',
            margin: '0 auto',
            paddingLeft: 0,
            paddingRight: 0,
            overflow: 'scroll',
          } }
        >
          { this.props.children || <GradeCalculator /> }
        </div>
      </div>
    );
  }
}
