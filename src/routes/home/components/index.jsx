import React from 'react';

import AboutMe from './aboutMe';
import FrontPane from './frontPane';
import FinalGradeIntro from './finalGradeIntro';
import GPAIntro from './gpaIntro';


import Divider from '../../../components/divider';

const Home = () =>
  <div>
    <FrontPane />
    <br />
    <br />
    <div className='col-md-10 col-md-offset-1'>
      <FinalGradeIntro />
      <br />
      <Divider />
      <br />
      <GPAIntro />
      <br />
      <Divider />
      <br />
      <AboutMe />
    </div>
  </div>;

export default Home;
