import React from 'react';
import Helmet from 'preact-helmet';

import AboutMe from './aboutMe';
import Donate from './donate';

const Home = () =>
  <div
    style={ {
      marginTop: '7vh',
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
      <hr className='featurette-divider' style={ { borderTop: '1px solid #333333' } } />
      <Donate />
      <hr className='featurette-divider' style={ { borderTop: '1px solid #333333' } } />
      <AboutMe />
      <br />
      <hr className='featurette-divider' style={ { borderTop: '1px solid #333333' } } />
      <p className='text-center'>
            Email us at <span style={ { fontWeight: 'bold' } }>BareMinimumDonations@gmail.com</span> for any suggestions for charities or our site!
      </p>
    </div>
  </div>;

export default Home;
