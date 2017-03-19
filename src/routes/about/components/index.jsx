import React from 'react';
import Helmet from 'preact-helmet';

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
      <hr className='featurette-divider' style={ { borderTop: '1px solid #333333' } } />
      <br />
      <AboutMe />
      <br />
      <hr className='featurette-divider' style={ { borderTop: '1px solid #333333' } } />
    </div>
  </div>;

export default Home;
