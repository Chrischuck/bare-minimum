import React from 'react';

import chris from '../../../assets/chris.jpg';
import chaz from '../../../assets/chaz.png';


const AboutMe = () =>
  <div className='row text-center'>
    <div className='col-lg-6'>
      <img className='img-circle' src={ chris } alt='Generic placeholder image' width='140' height='140' />
      <h2>Chris</h2>
      <p>I decieded to make this page because I needed to know what I needed on my differentials test to get an A and other sites didn't do what I needed.
        So I built this with a modern stack and some javascript and things. I go to San Jose State and I hope this website will help you get through college!
      </p>
    </div>
    <div className='col-lg-6'>
      <img className='img-circle' src={ chaz } alt='Generic placeholder image' width='140' height='140' />
      <h2>Chaz</h2>
      <p>
        I'm majoring in Civil Engineering at Arizona State University, Class of 2019.
        I like running and hiking with my dog.
        I'm helping with this site to help other college students with their grades when the professors don't help.
     </p>
    </div>
  </div>;

export default AboutMe;
