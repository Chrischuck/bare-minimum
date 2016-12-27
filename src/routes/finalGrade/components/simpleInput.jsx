import React from 'react';
import { connect } from 'react-redux';
import * as gradeActions from '../actions';

const mapStateToProps = state => ({
  isModalOpen: state.finalGrade.isModalOpen,
});


const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (grade) => {
      dispatch(gradeActions.openFinalGradeModal(grade));
    },
  };
};

class SimpleInput extends React.Component {
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

    answerString +=  finalScore +
                    '% on your final to get a ' +
                    this.state.requiredGrade +
                    '% overall.';


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
    swal({
      title: 'Ugh oh!',
      text: this.errorStringBuilder(),
      confirmButtonColor: '#009688',
      animation: 'slide-from-top',
      type: 'warning',
    });
  }

  noMissingElements() {
    swal({
      title: 'You can do it!',
      text: this.calculatorStringBuilder(this.calculateGrade()),
      confirmButtonColor: '#009688',
      animation: 'slide-from-top',
    });
  }

  onCalculate() {
    const { currentGrade, finalWeight, requiredGrade } = this.state;
    if (currentGrade === '' || finalWeight === '' || requiredGrade === '' || Number(finalWeight) > 100) {
      this.missingFormElements();
    } else {
      this.noMissingElements();
    }
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

        <div className='row' >

          <div className='row form-group' style={ { margin: 10 } } >
            <label
              htmlFor='currentGrade'
              className='col-xs-5 col-form-label semi-bold'
              style={ {
                paddingRight: '15px',
                textAlign: 'right',
                paddingTop: 10,
                fontSize: 14,
              } }
            >You current grade:</label>
            <div className='col-xs-3' style={ { paddingLeft: 0, paddingRight: 0 } } >
              <input
                className='form-control'
                type='number'
                value={ this.state.currentGrade }
                onChange={ event => this.onInputChange(event, 'currentGrade') }
                placeholder='90'
                id='currentGrade'
              />
            </div>
            <label className='col-md-2' htmlFor='currentGrade' style={ { paddingTop: '10px', paddingLeft: 8 } } >%.</label>
          </div>

          <div className='row form-group' style={ { margin: 10 } } >
            <label
              htmlFor='requiredGrade'
              className='col-xs-5 col-form-label semi-bold'
              style={ {
                paddingRight: '15px',
                paddingTop: 10,
                textAlign: 'right',
                fontSize: 14,
              } }
            >You need a:</label>
            <div className='col-xs-3' style={ { paddingLeft: 0, paddingRight: 0 } } >
              <input
                className='form-control'
                type='number'
                value={ this.state.requiredGrade }
                onChange={ event => this.onInputChange(event, 'requiredGrade') }
                placeholder='90'
                id='requiredGrade'
              />
            </div>
            <label htmlFor='requiredGrade' style={ { paddingTop: '10px', paddingLeft: 8 } } >% in the class.</label>
          </div>

          <div className='row form-group' style={ { margin: '10px' } } >
            <label
              htmlFor='final'
              className='col-xs-5 col-form-label semi-bold text-left'
              style={ {
                paddingRight: '15px',
                textAlign: 'right',
                paddingTop: 10,
                fontSize: 14,
              } }
            >Final's worth:</label>
            <div className='col-xs-3' style={ { paddingLeft: 0, paddingRight: 0 } } >
              <input
                className='form-control'
                type='number'
                value={ this.state.finalWeight }
                onChange={ event => this.onInputChange(event, 'finalWeight') }
                placeholder='10'
                id='final'
              />
            </div>
            <label htmlFor='final' style={ { paddingTop: '10px', paddingLeft: 4 } } >% of your grade.</label>
          </div>

          <div className='row' style={ { marginLeft: '8%', marginRight: '8%' } } >
            <a className='btn btn-primary col-md-12' onClick={ this.onCalculate } >
              Calculate <span className='glyphicon glyphicon-heart' />
            </a>
          </div>

        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleInput);
