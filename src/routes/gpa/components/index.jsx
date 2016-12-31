import React from 'react';

export default class GPA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className='container col-md-12'
        style={ { marginTop: '10%' } }
      >
        <div className='well infobox' style={ { margin: 'auto', width: '50%' } }>

        </div>
      </div>
    );
  }
}
