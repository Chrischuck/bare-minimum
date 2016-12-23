import React from 'react';

export default class SimpleInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className='well infobox' style={ { marginTop: 10 } } >

        <h1
          className='text-center'
          style={ {
            marginTop: 25,
            marginBottom: 25,
          } }
        >Final Grade Calculator</h1>

        <div className='form-group row' style={ { paddingLeft: '30%' } } >

          <div className='row'>
            <label
              htmlFor='example-number-input'
              className='col-xs-3 col-form-label semi-bold'
              style={ {
                paddingRight: 0,
                paddingTop: 5,
              } }
            >Current grade:</label>
            <div className='col-xs-3' style={ { paddingLeft: 0, paddingRight: 0 } } >
              <input className='form-control' placeholder='69' id='example-number-input' />
            </div>
            <p style={ { paddingTop: 5 } } >%</p>
          </div>

          <div className='row' style={ { paddingTop: 5 } } >
            <label
              htmlFor='example-number-input'
              className='col-xs-3 col-form-label semi-bold'
              style={ {
                paddingRight: 0,
                paddingTop: 5,
              } }
            >Final's worth:</label>
            <div className='col-xs-3' style={ { paddingLeft: 0, paddingRight: 0 } } >
              <input className='form-control' placeholder='420' id='example-number-input' />
            </div>
            <p style={ { paddingTop: 5 } } >%</p>
          </div>

          <div className='row' style={ { paddingTop: 5 } } >
            <label
              htmlFor='example-number-input'
              className='col-xs-3 col-form-label semi-bold'
              style={ {
                paddingRight: 0,
                paddingTop: 5,
              } }
            >You require:</label>
            <div className='col-xs-3' style={ { paddingLeft: 0, paddingRight: 0 } } >
              <input className='form-control' placeholder='420' id='example-number-input' />
            </div>
            <p style={ { paddingTop: 5 } } >%</p>
          </div>

          <button className='btn btn-default'>
             Primary button
          </button>

        </div>

      </div>
    );
  }
}
