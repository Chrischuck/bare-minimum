import React from 'react';

import AboutMe from './aboutMe';

import Divider from '../../../components/divider';

const Home = () =>
  <div style={ { marginTop: '2%' } }>
    <div className='col-md-10 col-md-offset-1'>
      <Divider />
      <br />
      <AboutMe />
      <br />
      <Divider />
    </div>
  </div>;

export default Home;
