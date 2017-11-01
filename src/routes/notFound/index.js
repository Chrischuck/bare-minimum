import React from 'react';
import sword from '../../assets/sword.png';

const NotFound = ({ push }) =>
  <div className='col-md-6 col-md-offset-3 text-center' style={ { paddingTop: '15%' } } >
    <div className='bs-component'>
      <h2>404 Not Found</h2>

      <h4>
        Looks like you've wandered into mysterious lands.
      </h4>

      <h4>
        It's dangerous to alone! Here take this!
      </h4>
      <a name={ 'grade-calculator' } onClick={ push }>
        <img className='featurette-image img-responsive center-block' role='presentation' src={ sword } />
      </a>
    </div>
  </div>;

export default NotFound;
