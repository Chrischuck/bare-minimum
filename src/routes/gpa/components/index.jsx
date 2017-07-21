import React from 'react';
import Helmet from 'preact-helmet';

import InputBox from './inputBox';
import { gradeToNumber } from '../../../util/calculations';
import { gpaStringBuilder } from '../../../util/stringBuilders';

export default class GPA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: {},
      pastGpa: '',
      pastUnits: '',
      APlusCounts: false,
      greaterThan4: false,
      goesToHundreth: false,
      inputCount: 3,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.inputCount !== nextState.inputCount || this.state.isModalOpen !== nextState.isModalOpen;
  }

  onPastGpaChange = (event) => {
    if (Number(event.target.value) > 4 && !this.state.APlusCounts && !this.state.greaterThan4) {
      this.props.openModal({
        title: 'Impossible!',
        message: 'You can\'t have a gpa higher than a 4.0!',
        type: 'warning',
      });
    } else if (Number(event.target.value) < 0) {
      this.props.openModal({
        title: 'Hmm!',
        message: 'I don\'t think anyone\'s gpa can be that bad!',
        type: 'warning',
      });
    } else {
      this.setState({ pastGpa: event.target.value });
    }
  }

  onUnitsChange = (event) => {
    if (Number(event.target.value) < 0) {
      this.props.openModal({
        title: 'Oh dear!',
        message: 'You can\'t have negative units!',
        type: 'warning',
      });
    } else {
      this.setState({ pastUnits: event.target.value });
    }
  }

  toggleInput = (event) => {
    this.setState({ [event.target.id]: !this.state[event.target.id] });
  }

  stateFromChild = (id, course, grade, units) => {
    const { courses } = this.state;
    const previousCategory = courses[id];
    courses[id] = { course, grade, units };
    if (previousCategory && previousCategory.course !== course) {
      this.setState({ courses });
    } else {
      this.setState({ courses });
    }
  }

  calculate = () => {
    const { courses, pastGpa, pastUnits, APlusCounts, greaterThan4, goesToHundreth } = this.state;

    const keys = Object.keys(courses);
    let totalPoints = 0;
    let totalCredits = 0;
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const { grade, units, course } = courses[key];
      const numericGrade = gradeToNumber(grade, APlusCounts, goesToHundreth);

      if (typeof numericGrade === 'number' && grade && units) {
        totalPoints += numericGrade * Number(units);
        totalCredits += Number(units);
      } else if (typeof numericGrade !== 'number' && grade && units) {
        this.props.openModal({
          title: 'Oops!',
          message: course ?
          `Your grade for ${course} doesn't look right!` :
          'One of your grades doesn\'t look right!',
          type: 'warning',
        });
        return 0;
      }
    }

    if (!isNaN(Number(pastGpa)) && !isNaN(Number(pastUnits))) {
      totalPoints += Number(pastGpa) * pastUnits;
      totalCredits += Number(pastUnits);
    }

    const toRound = ((totalPoints / totalCredits) * 1000) % 10 >= 5;
    const calculatedGpa = toRound ?
      Math.ceil((totalPoints / totalCredits) * 100) / 100 :
      Math.floor((totalPoints / totalCredits) * 100) / 100;
    if (isNaN(calculatedGpa)) {
      return 0;
    }
    const finalGpa = (calculatedGpa * 10) % 10 !== 0 ?
      calculatedGpa.toFixed(2) :
      calculatedGpa.toFixed(1);
    return finalGpa > 4 && !greaterThan4 ?
      '4.0' :
      finalGpa;
  }

  showGpa = () => {
    const gpa = this.calculate();
    if (gpa !== 0) {
      this.props.openModal({
        title: 'Nice!',
        message: gpaStringBuilder(gpa),
        type: null,
      });
    } else {
      this.props.openModal({
        title: 'Oh no!',
        message: 'Oh my you haven\'t added any classes',
        type: 'warning',
      });
    }
  }

  addClass = () => {
    const { inputCount } = this.state;
    this.setState({ inputCount: inputCount + 1 });
  }

  render() {
    const { inputCount, APlusCounts, greaterThan4, goesToHundreth } = this.state;
    const inputs = [];
    for (let i = 0; i < inputCount; i++) {
      inputs.push(
        <InputBox
          inputCount={ i }
          stateToParent={ this.stateFromChild }
        />,
      );
    }

    return (
      <div
        className='container wrapperClass'
        style={ { marginBottom: 5 } }
      >
        <Helmet
          title='Bare Minimum | Universal GPA Calculator'
          meta={ [
            { name: 'description', content: 'See how you\'ve done so far!' },
          ] }
        />

        <div className='well infobox' >
          <h3
            className='text-center'
            style={ {
              marginTop: 14,
              marginBottom: 8,
              fontSize: '5vw 5h',
              color: '#2e2d2d',
            } }
          >Universal GPA Calculator</h3>

          <div className='row input-switch-row text-center switch-body' style={ { marginBottom: '5px' } }>
            <p
              className='col-md-10 col-sm-10 col-xs-10'
              style={ {
                display: 'inline',
                verticalAlign: 'middle',
                paddingRight: '0px',
                paddingLeft: '2%',
                marginTop: 0,
                marginBottom: 0,
                marginRight: 0,
              } }>A+ is a 4.33 at your school.</p>
            <div className='col-md-2 col-sm-2 col-xs-2' style={ { paddingLeft: '0px', float: 'left' } }>
              <input type='checkbox' id='checkbox1' name='set-name' checked={ APlusCounts } className='switch-input' />
              <label htmlFor='checkbox1' className='switch-label' id='APlusCounts' onClick={ this.toggleInput } />
            </div>
          </div>

          <div className='row input-switch-row text-center switch-body' style={ { marginBottom: '5px' } }>
            <p
              className='col-md-10 col-sm-10 col-xs-10'
              style={ {
                display: 'inline',
                verticalAlign: 'middle',
                paddingRight: '0px',
                paddingLeft: '0px',
                marginTop: 0,
                marginBottom: 0,
                marginRight: 0,
              } }>Grade scale goes to the hundreth place.</p>
            <div className='col-md-2 col-sm-2 col-xs-2' style={ { paddingLeft: '0px' } }>
              <input type='checkbox' id='checkbox2' name='set-name' checked={ goesToHundreth } className='switch-input' />
              <label htmlFor='checkbox2' className='switch-label' id='goesToHundreth' onClick={ this.toggleInput } />
            </div>
          </div>

          <div className='row input-switch-row text-center switch-body' style={ { marginBottom: '6px' } }>
            <p
              className='col-md-10 col-sm-10 col-xs-10'
              style={ {
                display: 'inline',
                verticalAlign: 'middle',
                paddingRight: '0px',
                paddingLeft: '0px',
                marginTop: 0,
                marginBottom: 0,
                marginRight: 0,
              } }>Greater than a 4.0 is attainable.</p>
            <div className='col-md-2 col-sm-2 col-xs-2' style={ { paddingLeft: '0px' } }>
              <input type='checkbox' id='checkbox3' name='set-name' checked={ greaterThan4 } className='switch-input' />
              <label htmlFor='checkbox3' className='switch-label' id='greaterThan4' onClick={ this.toggleInput } />
            </div>
          </div>

          <div className='row input-row'>
            <div className='form-group has-success is-empty col-md-6 col-xs-6' style={ { paddingLeft: '5px', paddingRight: '5px', marginBottom: 5 } }>
              <label
                htmlFor='pastGPA'
                className='form-label'
                style={ { fontWeight: 500 } }
              >
                { 'Past GPA ' }
                <span className='semi-bold' style={ { color: '#99999c', fontSize: '14px', fontWeight: 500 } } >(optional)</span>
              </label>
              <input
                type='number'
                className='form-control'
                id='pastGPA'
                autoComplete='off'
                placeholder='3.8'
                value={ this.state.pastGpa }
                onChange={ this.onPastGpaChange }
                style={ { fontSize: '14px', fontWeight: '450', color: '#000000' } }
              />
            </div>

            <div className='form-group has-success is-empty col-md-6 col-xs-6' style={ { paddingLeft: '5px', paddingRight: '5px', marginBottom: 5 } }>
              <label
                htmlFor='pastUnits'
                className='form-label'
                style={ { fontWeight: 500 } }
              >
                { 'Past Units ' }
                <span className='semi-bold' style={ { color: '#99999c', fontSize: '14px', fontWeight: 500 } } >(optional)</span>
              </label>
              <input
                type='number'
                className='form-control'
                id='pastUnits'
                autoComplete='off'
                placeholder='60'
                value={ this.state.pastUnits }
                onChange={ this.onUnitsChange }
                style={ { fontSize: '14px', fontWeight: '450', color: '#000000' } }
              />
            </div>
          </div>

          { inputs }

          <div className='row input-row' style={ { paddingTop: '1px' } } >
            <div className='col-md-12 col-xs-12' style={ { padding: 0 } }>
              <div
                className='pull-left col-md-6 col-xs-6'
                style={ {
                  paddingLeft: '5px',
                  paddingRight: '5px',
                } }
              >
                <a
                  className='btn btn-primary no-padding col-md-12 col-xs-12'
                  onClick={ this.addClass }
                >
                  Add Class
                </a>
              </div>

              <div
                className='pull-right col-md-6 col-xs-6'
                style={ {
                  paddingLeft: '5px',
                  paddingRight: '5px',
                } }
              >
                <a
                  className='btn btn-primary no-padding col-md-12 col-xs-12'
                  onClick={ this.showGpa }
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
