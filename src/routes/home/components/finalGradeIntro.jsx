import React from 'react';

import picture from '../../../assets/cat2.jpg';


const FinalGradeIntro = () =>
  <div className='row featurette' style={ { marginLeft: 0, marginRight: 0 } } >
    <div className='col-md-7'>
      <h2 className='featurette-heading'>
        Final Grade Calculator.
        <span className='text-muted'> Let's get that A.</span>
      </h2>
      <p className='lead'>
        Use this to know what you need on your final to achieve your desired grade.
      </p>
    </div>
    <div className='col-md-5'>
      <img className='featurette-image img-responsive center-block' src={ picture } alt='300x300' data-holder-rendered='true' />
    </div>
  </div>;

export default FinalGradeIntro;
