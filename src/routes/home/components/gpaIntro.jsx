import React from 'react';

import picture from '../../../assets/cat1.jpg';


const GPAIntro = () =>
  <div className='row featurette'>
    <div className='col-md-7 col-md-push-5'>
      <h2 className='featurette-heading'>GPA Calculator. <span className='text-muted'>The grind never stops.</span></h2>
      <p className='lead'>See what your college grade point average comes out to.</p>
    </div>
    <div className='col-md-5 col-md-pull-7'>
      <img className='featurette-image img-responsive center-block' src={ picture } alt='300x300' data-holder-rendered='true' />
    </div>
  </div>;

export default GPAIntro;
