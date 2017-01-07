import React, { Component } from 'react';
import sweetAlert from 'sweetalert';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.min.css';
import 'bootstrap-material-design/dist/css/ripples.min.css';
import 'bootstrap-material-design/dist/js/material.min';
import 'bootstrap-material-design/dist/js/ripples.min';
import 'sweetalert/dist/sweetalert.css';

import Home from '../routes/home/components';
import Header from '../components/header';

$.material.init();
sweetAlert();

export default class App extends Component {
  render() {
    return (
      <div>
        <Header path={this.props.location.pathname} />

        <div
          className="container"
          style={{
            paddingTop: '3%',
            width: '100%',
            margin: '0 auto',
            paddingLeft: 0,
            paddingRight: 0
          }}
        >
          { this.props.children || <Home /> }
        </div>

      </div>

    );
  }
}
