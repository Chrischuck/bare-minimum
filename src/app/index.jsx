/* eslint-disable */
import React, { Component } from 'react';
import Home from '../routes/home/components';
//import 'bootstrap/dist/css/bootstrap.css';
import 'sweetalert/dist/sweetalert.css';
import './styles.css'

import Header from '../components/header'

export default class App extends Component {
  render() {
    return (
        <div id='globalWrapper'>
          <Header path={ this.props.location.pathname } />

          <div
            className='container'
            style={ {
            width: '100%',
            margin: '0 auto',
            paddingLeft: 0,
            paddingRight: 0
            } }
          >
            { this.props.children || <Home /> }
          </div>
        </div>
    );
  }
}
