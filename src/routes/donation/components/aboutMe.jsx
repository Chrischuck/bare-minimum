import React from 'react';

import chris from '../../../assets/chris.jpg';
import kimchi from '../../../assets/kimchi.jpg';


const AboutMe = () =>
  <div className='row text-center'>
    <h1>Le Team</h1>
    <div className='col-md-6' >
      <img className='img-circle' src={ chris } alt='Generic placeholder image' width='150' height='150' />
      <h2>Chris</h2>
      <p>
        I decided to make this page because I needed to know what I needed on my differentials test to get an A and other sites didn't do what I needed.
        So I built this with some javascript and love and things.
      </p>
    </div>
    <div className='col-md-6' >
      <img className='img-circle' src={ kimchi } alt='Generic placeholder image' width='150' height='150' />
      <h2>Kimchi</h2>
      <p>
        I was helping Chris with some essays and he decided to make me do more work and now here I am.
      </p>
    </div>
  </div>;

export default AboutMe;
