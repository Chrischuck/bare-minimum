import React from 'react';
import { Link } from 'react-router';

import sword from '../../../assets/sword.png';

const NotFound = () =>
  <div className='col-md-6 col-md-offset-3 text-center' style={ { paddingTop: '15%' } } >
    <div className='bs-component'>
      <h2>404 Not Found</h2>

      <h4>
        Looks like you've wandered into mysterious lands.
      </h4>

      <h4>
        It's dangerous to alone! Here take this!
      </h4>

      <Link to='/'>
        <img className='featurette-image img-responsive center-block' role='presentation' src={ sword } />
      </Link>

    </div>
  </div>;

export default NotFound;
