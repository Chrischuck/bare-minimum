import React from 'react';

import SimpleInput from './simpleInput';

export default class FinalGrade extends React.Component {
  render() {
    return (
      <div
        className='container col-md-12'
        style={ { marginTop: '10%' } }
      >
        <div className='well infobox' style={ { margin: 'auto', width: '50%' } }>
          <SimpleInput />
        </div>
      </div>
    );
  }
}
