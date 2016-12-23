import React from 'react';

import SimpleInput from './simpleInput';

export default class FinalGrade extends React.Component {
  render() {
    return (
      <div
        className='container col-md-6 col-md-offset-3'
        style={ {
          backgroundColor: '#eceeef',
          marginTop: '5%',
        } }
      >

        <div className='well infobox'>
          <SimpleInput />
        </div>
      </div>
    );
  }
}
