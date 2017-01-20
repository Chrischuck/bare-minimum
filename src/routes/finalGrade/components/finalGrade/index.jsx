import React from 'react';

import sweetalert from '../../../../util/sweetalert';

export default class SimpleInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGrade: '',
      finalWeight: '',
      requiredGrade: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.calculateGrade = this.calculateGrade.bind(this);
    this.onCalculate = this.onCalculate.bind(this);
    this.errorStringBuilder = this.errorStringBuilder.bind(this);
  }

  onInputChange(event, name) {
    this.setState({ [name]: event.target.value });
  }

  onCalculate() {
    const { currentGrade, finalWeight, requiredGrade } = this.state;
    if (currentGrade === '' || finalWeight === '' || requiredGrade === '' || Number(finalWeight) > 100) {
      this.missingFormElements();
    } else {
      this.noMissingElements();
    }
  }

  calculateGrade() {
    const grade = Number(this.state.requiredGrade) / 100;
    const examWorth = Number(this.state.finalWeight) / 100;
    const currentGrade = Number(this.state.currentGrade) / 100;

    const finalGrade = ((grade - ((1 - examWorth) * currentGrade)) / examWorth) * 100;

    return finalGrade.toFixed(2);
  }

  errorStringBuilder() {
    const { currentGrade, finalWeight, requiredGrade } = this.state;

    if (currentGrade === '' && finalWeight !== '' && requiredGrade !== '') {
      return 'Please input your current grade.';
    }
    if (currentGrade !== '' && finalWeight === '' && requiredGrade !== '') {
      return 'Please input your final percentage.';
    }
    if (currentGrade !== '' && finalWeight !== '' && requiredGrade === '') {
      return 'Please input your target goal grade.';
    }
    if (currentGrade === '' && requiredGrade === '' && finalWeight !== '') {
      return 'Please input your current grade and target goal grade.';
    }
    if (currentGrade === '' && requiredGrade !== '' && finalWeight === '') {
      return 'Please input your current grade and final percentage.';
    }
    if (currentGrade !== '' && requiredGrade === '' && finalWeight === '') {
      return 'Please input your target goal grade and final percentage';
    }
    if (currentGrade === '' && finalWeight === '' && requiredGrade === '') {
      return 'Please input your current grade, target goal grade, and final percentage.';
    }
    if (Number(finalWeight) > 100) {
      return 'Your final percentage can\'t be more than 100%';
    }
    return '';
  }

  calculatorStringBuilder(finalScore) {
    let answerString = '';

    if (Number(finalScore) <= 50) {
      answerString += 'You only need ';
    } else {
      answerString += 'You will nead at least ';
    }

    answerString += `${`${finalScore}` +
                    '% on your final to get a '}${
                    this.state.requiredGrade
                    }% overall.`;


    const score = Number(finalScore);
    if (score > 100) {
      answerString += ' May the force be with you!';
    }
    if (score <= 100 && score >= 90) {
      answerString += ' You can do it!';
    }
    if (score < 90 && score >= 70) {
      answerString += ' You got this in the bag!';
    }
    if (score < 70 && score >= 0) {
      answerString += ' What\'s the point of studying honestly?';
    }
    if (score < 0) {
      answerString += ' Just stay in bed at this point!';
    }
    return answerString;
  }

  missingFormElements() {
    sweetalert('Ugh Oh!', this.errorStringBuilder(), 'warning');
  }

  noMissingElements() {
    sweetalert('You can do it!', this.calculatorStringBuilder(this.calculateGrade()), null);
  }

  render() {
    return (
      <div style={ { marginTop: 10 } } >

        <h3
          className='text-center'
          style={ {
            marginTop: 25,
            marginBottom: 15,
            fontSize: '5vw 5h',
            color: '#2e2d2d',
          } }
        >Final Grade Calculator</h3>

        <div className='row' >

          <div className='row form-group has-success is-empty' style={ { margin: 10 } } >
            <label
              htmlFor='currentGrade'
              className='col-xs-5 col-form-label semi-bold'
              style={ {
                paddingRight: '.8vw',
                textAlign: 'right',
                paddingLeft: 0,
                fontSize: '1.3vw 2vh',
                lineHeight: '2.2vh',
                paddingTop: '.8vh',
                fontWeight: 400,
              } }
            >Your current grade:</label>
            <div className='col-xs-2' style={ { paddingLeft: 0, paddingRight: 0 } } >
              <input
                className='form-control'
                type='number'
                value={ this.state.currentGrade }
                onChange={ event => this.onInputChange(event, 'currentGrade') }
                placeholder='92.4'
                id='currentGrade'
              />
            </div>
            <label className='col-md-2' htmlFor='currentGrade' style={ { paddingTop: '10px', paddingLeft: 8, fontWeight: 400 } } >%.</label>
          </div>

          <div className='row form-group has-success is-empty' style={ { margin: 10 } } >
            <label
              htmlFor='requiredGrade'
              className='col-xs-5 col-form-label semi-bold'
              style={ {
                paddingRight: '.8vw',
                textAlign: 'right',
                fontSize: 14,
                paddingLeft: 0,
                paddingTop: '.8vh',
                fontWeight: 400,
              } }
            >You want a:</label>
            <div className='col-xs-2' style={ { paddingLeft: 0, paddingRight: 0 } } >
              <input
                className='form-control'
                type='number'
                value={ this.state.requiredGrade }
                onChange={ event => this.onInputChange(event, 'requiredGrade') }
                placeholder='90'
                id='requiredGrade'
              />
            </div>
            <label htmlFor='requiredGrade' style={ { paddingTop: '10px', paddingLeft: 8, fontWeight: 400 } } >% in the class.</label>
          </div>

          <div className='row form-group has-success is-empty' style={ { margin: '10px' } } >
            <label
              htmlFor='final'
              className='col-xs-5 col-form-label semi-bold text-left'
              style={ {
                paddingRight: '.8vw',
                textAlign: 'right',
                fontSize: 14,
                paddingLeft: 0,
                paddingTop: '.8vh',
                fontWeight: 400,
              } }
            >Final's worth:</label>
            <div className='col-xs-2' style={ { paddingLeft: 0, paddingRight: 0 } } >
              <input
                className='form-control'
                type='number'
                value={ this.state.finalWeight }
                onChange={ event => this.onInputChange(event, 'finalWeight') }
                placeholder='10'
                id='final'
              />
            </div>
            <label htmlFor='final' style={ { paddingTop: '10px', paddingLeft: 4, fontWeight: 400 } } >% of your grade.</label>
          </div>

          <div className='row' style={ { marginLeft: '4%', marginRight: '4%', textAlign: 'center' } } >
            <a
              className='btn btn-primary col-md-6 col-xs-6 col-md-offset-3 col-xs-offset-3'
              onClick={ this.onCalculate }
              style={ {
                backgroundColor: '#009688',
              } }
            >
                Calculate
            </a>
          </div>

        </div>

      </div>
    );
  }
}
