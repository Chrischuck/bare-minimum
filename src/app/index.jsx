/* eslint-disable */
import React, { Component } from 'react';
import Home from '../routes/home/components';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Header from '../components/header'

export default class App extends Component {
  render() {
    return (
        <div className='container'>
          <Header/>

          <div className="container" style={{'padding-top': '70px'}}>
            { this.props.children || <Home /> }
          </div>

        </div>

    );
  }
}
