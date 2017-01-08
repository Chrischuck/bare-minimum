import React from 'react';

import SimpleInput from './simpleInput';

export default class FinalGrade extends React.Component {
  render() {
    return (
      <div
        className='container col-md-12'
        style={ {
          marginTop: '10vh',
          paddingLeft: '2%',
          paddingRight: '2%',
        } }
      >
        <div className='well infobox col-md-6 col-md-offset-3' >
          <SimpleInput />
        </div>
      </div>
    );
  }
}
