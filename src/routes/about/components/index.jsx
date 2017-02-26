import React from 'react';
import Helmet from 'preact-helmet';

import Divider from '../../../components/divider';

import AboutMe from './aboutMe';
import About from './about';

const Home = () =>
  <div
    style={ {
      marginTop: '10vh',
      paddingLeft: '2%',
      paddingRight: '2%',
    } }
  >
    <Helmet
      title='Bare Minimum'
      meta={ [
        { name: 'description', content: 'See who we are!' },
      ] }
    />
    <div className='col-md-10 col-md-offset-1'>
      <About />
      <Divider />
      <br />
      <AboutMe />
      <br />
      <Divider />
    </div>
  </div>;

export default Home;
