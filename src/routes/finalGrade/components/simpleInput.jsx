import React from 'react';

export default class SimpleInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGrade: '',
      finalWeight: '',
      requiredGrade: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event, name) {
    this.setState({ [name]: event.target.value });
  }

  render() {
    return (
      <div style={ { marginTop: 10 } } >

        <h1
          className='text-center'
          style={ {
            marginTop: 25,
            marginBottom: 15,
            color: '#2e2d2d',
          } }
        >Final Grade Calculator</h1>

        <div className='row' style={ { paddingLeft: '30%' } } >

          <div className='form-group row' style={ { margin: '10px' } } >
            <label
              htmlFor='currentGrade'
              className='col-xs-3 col-form-label semi-bold'
              style={ {
                paddingRight: 0,
                paddingTop: 10,
                fontSize: 14,
              } }
            >Current grade:</label>
            <div className='col-xs-3' style={ { paddingLeft: 0, paddingRight: 0 } } >
              <input
                className='form-control'
                value={ this.state.currentGrade }
                onChange={ event => this.onInputChange(event, 'currentGrade') }
                placeholder='69'
                id='currentGrade'
              />
            </div>
            <p style={ { paddingTop: 5 } } >%</p>
          </div>

          <div className='row form-group' style={ { margin: '10px' } } >
            <label
              htmlFor='Final'
              className='col-xs-3 col-form-label semi-bold'
              style={ {
                paddingRight: 0,
                paddingTop: 10,
                fontSize: 14,
              } }
            >Final's worth:</label>
            <div className='col-xs-3' style={ { paddingLeft: 0, paddingRight: 0 } } >
              <input
                className='form-control'
                value={ this.state.finalWeight }
                onChange={ event => this.onInputChange(event, 'finalWeight') }
                placeholder='420'
                id='Final'
              />
            </div>
            <p style={ { paddingTop: 5 } } >%</p>
          </div>

          <div className='row form-group' style={ { margin: 10 } } >
            <label
              htmlFor='example-number-input'
              className='col-xs-3 col-form-label semi-bold'
              style={ {
                paddingRight: 0,
                paddingTop: 10,
                fontSize: 14,
              } }
            >You require:</label>
            <div className='col-xs-3' style={ { paddingLeft: 0, paddingRight: 0 } } >
              <input
                className='form-control'
                value={ this.state.requiredGrade }
                onChange={ event => this.onInputChange(event, 'requiredGrade') }
                placeholder='12'
                id='example-number-input'
              />
            </div>
            <p style={ { paddingTop: 5 } } >%</p>
          </div>

          <div className='center'>
            <a className='btn btn-primary' >Calculate <span className='glyphicon glyphicon-heart' /></a>
          </div>

        </div>

      </div>
    );
  }
}
