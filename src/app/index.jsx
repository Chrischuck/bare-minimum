/* eslint-disable */
import React, { Component } from 'react';
import Home from '../routes/home/components';

export default class App extends Component {
  render() {
    return (
      <div>
        { this.props.children || <Home /> }
      </div>
    );
  }
}
