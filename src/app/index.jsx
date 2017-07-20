import React from 'react';
import GradeCalculator from '../routes/finalGrade/components';
import './styles.css';
import Header from '../components/header';

const App = ({ pathname, component, push }) =>
  <div id='globalWrapper' className='globalWrapper'>
    <Header path={ pathname } push={ push } />

    <div
      className='container'
      style={ {
        paddingTop: '2%',
        width: '100%',
        margin: '0 auto',
        paddingLeft: 0,
        paddingRight: 0,
        overflow: 'scroll',
      } }
    >
      { component || <GradeCalculator /> }
    </div>
  </div>;

export default App;
