import React from 'react';

import AboutMe from './aboutMe';
import FrontPane from './frontPane';
import FinalGradeIntro from './finalGradeIntro';


import Divider from '../../../components/divider';

const Home = () =>
  <div>
    <FrontPane />
    <br />
    <br />
    <FinalGradeIntro />
    <Divider />
    <AboutMe />
  </div>;

export default Home;
