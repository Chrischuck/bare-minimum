import React from 'react';
import Helmet from 'preact-helmet';

import Modal from '../../../components/modal';
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
      inputCount: 4,
      gpa: '',
      isModalOpen: false,
      title: null,
      message: null,
      type: null,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.inputCount !== nextState.inputCount || this.state.isModalOpen !== nextState.isModalOpen;
  }

  onPastGpaChange = (event) => {
    const { courses, pastGpa, pastUnits } = this.state;
    if (Number(event.target.value) > 4) {
      this.openModal('Impossible!', 'You can\'t have a gpa higher than a 4.0!', 'warning');
    } else if (Number(event.target.value) < 0) {
      this.openModal('Hmm!', 'I don\'t think anyone\'s gpa can be that bad!', 'warning');
    } else {
      this.setState({ pastGpa: event.target.value }, () => {
        const gpa = this.gpaCalculate(courses, pastGpa, pastUnits);
        this.setState({ gpa });
      });
    }
  }

  onUnitsChange = (event) => {
    const { courses, pastGpa, pastUnits } = this.state;
    if (Number(event.target.value) < 0) {
      this.openModal('Oh dear!', 'You can\'t have negative units!', 'warning');
    } else {
      this.setState({ pastUnits: event.target.value }, () => {
        const gpa = this.gpaCalculate(courses, pastGpa, pastUnits);
        this.setState({ gpa });
      });
    }
  }

  stateFromChild = (id, course, grade, units) => {
    const { courses, pastGpa, pastUnits } = this.state;
    const previousCourse = courses[id];

    courses[id] = { course, grade, units };
    if (previousCourse && previousCourse.course !== course) {
      this.setState({ courses });
    } else {
      this.setState({ courses }, () => {
        const gpa = this.gpaCalculate(courses, pastGpa, pastUnits);
        this.setState({ gpa });
      });
    }
  }

  gpaCalculate = (courses, pastGpa, pastUnits) => {
    const keys = Object.keys(courses);
    let totalPoints = 0;
    let totalCredits = 0;
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const { grade, units, course } = courses[key];
      const numericGrade = gradeToNumber(grade);

      if (typeof numericGrade === 'number' && grade && units) {
        totalPoints += numericGrade * Number(units);
        totalCredits += Number(units);
      } else if (typeof numericGrade !== 'number' && grade && units) {
        this.openModal(
          'Oops!',
          course ?
          `Your grade for ${course} doesn't look right!` :
          'One of your grades doesn\'t look right!',
          'warning');
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
    return (calculatedGpa * 10) % 10 !== 0 ?
      calculatedGpa.toFixed(2) :
      calculatedGpa.toFixed(1);
  }

  openModal = (title, message, type) => {
    this.setState({
      title,
      message,
      type,
      isModalOpen: true,
    });
  }

  closeModal = () => {
    this.setState({
      title: null,
      message: null,
      type: null,
      isModalOpen: false,
    });
  }

  addClass = () => {
    const { inputCount } = this.state;
    this.setState({ inputCount: inputCount + 1 });
  }

  showGpa = () => {
    const { gpa } = this.state;
    if (gpa) {
      this.setState({
        title: 'Nice!',
        message: gpaStringBuilder(gpa),
        type: null,
        isModalOpen: true,
      });
    } else {
      this.setState({
        title: 'Ugh oh!',
        message: 'It appears you haven\'t added any classes!',
        type: 'warning',
        isModalOpen: true,
      });
      this.openModal('Ugh oh!', 'It appears you haven\'t added any classes!', 'warning');
    }
  }

  render() {
    const { inputCount, isModalOpen, title, message, type } = this.state;
    const inputs = [];
    for (let i = 0; i < inputCount; i += 1) {
      inputs.push(
        <InputBox
          inputCount={ i }
          stateToParent={ this.stateFromChild }
        />,
      );
    }
    return (
      <div
        className='container col-md-12 wrapperClass'
        style={ {
          marginTop: '15vh',
          paddingLeft: '0px',
          paddingRight: '0px',
          marginBottom: 10,
        } }
      >
        { isModalOpen && <Modal closeModal={ this.closeModal } title={ title } message={ message } type={ type } /> }
        <Helmet
          title='Bare Minimum | GPA Calculator'
          meta={ [
            { name: 'description', content: 'See how you\'ve done so far!' },
          ] }
        />

        <div className='well infobox' >
          <h3
            className='text-center'
            style={ {
              marginTop: 0,
              marginBottom: 10,
              fontSize: '5vw 5h',
              color: '#2e2d2d',
            } }
          >GPA Calculator</h3>

          <div className='row'>
            <div className='form-group has-success is-empty col-md-5 col-xs-5 col-xs-offset-1' style={ { paddingLeft: '5px', paddingRight: '5px', marginBottom: 5 } }>
              <label
                htmlFor='pastGPA'
                className='form-label'
                style={ { fontWeight: 500 } }
              >
                { 'Past GPA ' }
                <span className='semi-bold' style={ { color: '#99999c', fontSize: '10px', fontWeight: 500 } } >(optional)</span>
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

            <div className='form-group has-success is-empty col-md-5 col-xs-5' style={ { paddingLeft: '5px', paddingRight: '5px', marginBottom: 5 } }>
              <label
                htmlFor='pastUnits'
                className='form-label'
                style={ { fontWeight: 500 } }
              >
                { 'Past Units ' }
                <span className='semi-bold' style={ { color: '#99999c', fontSize: '10px', fontWeight: 500 } } >(optional)</span>
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

          <div className='row' style={ { paddingTop: '1px' } } >
            <div className='col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1' style={ { padding: 0 } }>
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
