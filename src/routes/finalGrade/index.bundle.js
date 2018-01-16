import React from 'react';
import Helmet from 'preact-helmet';

import { calculatorStringBuilder, simpleErrorStringBuilder } from '../../util/stringBuilders';

export default class FinalGrade extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGrade: '',
      finalWeight: '',
      requiredGrade: '',
    };
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onCalculate = () => {
    const { currentGrade, finalWeight, requiredGrade } = this.state;
    if (currentGrade === '' || finalWeight === '' || requiredGrade === '' || Number(finalWeight) > 100) {
      this.props.openModal({
        title: 'Uh Oh!',
        message: this.errorStringBuilder(),
        type: 'warning',
      });
    } else {
      this.props.openModal({
        title: 'You can do it!',
        message: calculatorStringBuilder(this.calculateGrade(), this.state.requiredGrade),
        type: null,
      });
    }
  }

  calculateGrade = () => {
    const grade = Number(this.state.requiredGrade) / 100;
    const examWorth = Number(this.state.finalWeight) / 100;
    const currentGrade = Number(this.state.currentGrade) / 100;

    const finalGrade = ((grade - ((1 - examWorth) * currentGrade)) / examWorth) * 100;

    return finalGrade.toFixed(2);
  }

  errorStringBuilder = () => {
    const { currentGrade, finalWeight, requiredGrade } = this.state;
    const errorString = simpleErrorStringBuilder({
      'current grade': currentGrade,
      'final\'s weight': finalWeight,
      'target grade': requiredGrade });
    if (errorString) {
      return errorString;
    }
    if (Number(finalWeight) > 100) {
      return 'Your final percentage can\'t be more than 100%';
    }
    return '';
  }

  render() {
    return (
      <div className='container'>
        <Helmet
          title='Bare Minimum | Final Grade Calculator'
          meta={ [
            { name: 'description', content: 'Final grade calculator to help you pass your classes!' },
          ] }
        />
        <div className='well infobox' >
          <div style={ { marginTop: 10 } } >

            <h2
              className='text-center'
              style={ {
                marginTop: 15,
                marginBottom: 15,
                fontSize: '5vw 5h',
                color: '#2e2d2d',
              } }
            >Final Grade Calculator</h2>
            <div className='row' >

            <div className='row form-group has-success is-empty' style={ { marginLeft: '0px', marginRight: '0px', marginTop: '10px', marginBottom: '10px' } } >
              <label
                htmlFor='currentGrade'
                className='col-xs-5 col-form-label semi-bold'
                style={ {
                  paddingRight: '10px',
                  textAlign: 'right',
                  lineHeight: '2.2vh',
                  paddingTop: '.8vh',
                } }
              >Your current grade:</label>
              <div className='col-xs-2' style={ { paddingLeft: 0, paddingRight: 0 } } >
                <input
                  className='form-control'
                  type='number'
                  name='currentGrade'
                  value={ this.state.currentGrade }
                  onChange={ this.onInputChange }
                  placeholder='92'
                  id='currentGrade'
                />
              </div>
              <label className='col-md-2' htmlFor='currentGrade' style={ { paddingTop: '10px', paddingLeft: 8 } } >%.</label>
            </div>

              <div className='row form-group has-success is-empty' style={ { marginLeft: '0px', marginRight: '0px', marginTop: '10px', marginBottom: '10px' } } >
                <label
                  htmlFor='requiredGrade'
                  className='col-xs-5 col-form-label semi-bold'
                  style={ {
                    paddingRight: '10px',
                    textAlign: 'right',
                    paddingTop: '.8vh',
                  } }
                >You want a:</label>
                <div className='col-xs-2' style={ { paddingLeft: 0, paddingRight: 0 } } >
                  <input
                    className='form-control'
                    type='number'
                    name='requiredGrade'
                    value={ this.state.requiredGrade }
                    onChange={ this.onInputChange }
                    placeholder='90'
                    id='requiredGrade'
                  />
                </div>
                <label htmlFor='requiredGrade' style={ { paddingTop: '10px', paddingLeft: 8 } } >% in the class.</label>
              </div>

              <div className='row form-group has-success is-empty' style={ { marginLeft: '0px', marginRight: '0px', marginTop: '10px', marginBottom: '10px' } } >
                <label
                  htmlFor='final'
                  className='col-xs-5 col-form-label semi-bold text-left'
                  style={ {
                    paddingRight: '10px',
                    textAlign: 'right',
                    paddingTop: '.8vh',
                  } }
                >Final's worth:</label>
                <div className='col-xs-2' style={ { paddingLeft: 0, paddingRight: 0 } } >
                  <input
                    className='form-control'
                    type='number'
                    value={ this.state.finalWeight }
                    name='finalWeight'
                    onChange={ this.onInputChange }
                    placeholder='10'
                    id='final'
                  />
                </div>
                <label htmlFor='final' style={ { paddingTop: '10px', paddingLeft: 4 } } >% of your grade.</label>
              </div>

              <div className='row' style={ { marginLeft: '4%', marginRight: '4%', textAlign: 'center' } } >
                <a
                  className='btn col-md-6 col-xs-6 col-md-offset-3 col-xs-offset-3'
                  onClick={ this.onCalculate }
                >
                    Calculate
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}
