import React from 'react';

import picture from '../../../assets/clock.jpg';

const FrontPane = () =>
  <div className='jumbotron jumbotron-fluid img-responsive' style={ { minHeight: '400px', background: `url(${picture})` } } >
    <div style={ { color: 'white' } } >
      <h1 className='display-3'>Bare Minimum</h1>
      <p className='lead'>We're here to help you acheive the bare minimum for success.</p>
    </div>
  </div>;

export default FrontPane;
