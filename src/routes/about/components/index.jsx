import React from 'react';
import Helmet from 'react-helmet';

import AboutMe from './aboutMe';

import Divider from '../../../components/divider';

const Home = () =>
  <div style={ { marginTop: '2%' } }>
    <Helmet
      title='Bare Minimum'
      meta={ [
        { name: 'description', content: 'See who we are!' },
      ] }
    />
    <div className='col-md-10 col-md-offset-1'>
      <Divider />
      <br />
      <AboutMe />
      <br />
      <Divider />
    </div>
  </div>;

export default Home;
