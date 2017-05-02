import React from 'react';
import Helmet from 'preact-helmet';

import Modal from '../../../components/modal';
import { simpleErrorStringBuilder } from '../../../util/stringBuilders';

export default class DamageCalculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGrade: '',
      assignmentWeight: '',
      assignmentGrade: '',
      isModalOpen: false,
      title: null,
      message: null,
      type: null,
    };
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onCalculate = () => {
    const { currentGrade, assignmentWeight, assignmentGrade } = this.state;
    if (currentGrade === '' || assignmentWeight === '' || assignmentGrade === '') {
      this.openModal('Ugh Oh!', this.errorStringBuilder(), 'warning');
    } else {
      this.openModal(
          'After consulting the magic 8 ball...',
          `It has been revealed your grade is now ${this.calculateGrade()}%.`,
          null);
    }
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

  calculateGrade = () => {
    const grade = Number(this.state.currentGrade) / 100;
    const assignmentWorth = Number(this.state.assignmentWeight) / 100;
    const assignmentGrade = Number(this.state.assignmentGrade) / 100;

    const finalGrade = ((assignmentWorth * assignmentGrade) + ((1 - assignmentWorth) * grade)) * 100;

    return finalGrade.toFixed(2);
  }

  errorStringBuilder = () => {
    const { currentGrade, assignmentWeight, assignmentGrade } = this.state;
    const errorString = simpleErrorStringBuilder({
      'current grade': currentGrade,
      'assignment\'s weight': assignmentWeight,
      'assignment\'s grade': assignmentGrade,
    });
    if (errorString) {
      return errorString;
    }
    if (Number(assignmentGrade) > 100) {
      return 'Your final percentage can\'t be more than 100%';
    }
    return '';
  }

  render() {
    const { isModalOpen, title, message, type } = this.state;
    return (
      <div
        className='container col-md-12'
        style={ {
          marginTop: '15vh',
          paddingLeft: '0',
          paddingRight: '0',
        } }
      >
        { isModalOpen && <Modal closeModal={ this.closeModal } title={ title } message={ message } type={ type } />}
        <Helmet
          title='Bare Minimum | Final Grade Calculator'
          meta={ [
            { name: 'description', content: 'Final grade calculator to help you pass your classes!' },
          ] }
        />
        <div className='well infobox' >
          <div style={ { marginTop: 10 } } >

            <h3
              className='text-center'
              style={ {
                marginTop: 15,
                marginBottom: 15,
                fontSize: '5vw 5h',
                color: '#2e2d2d',
              } }
            >Damage Calculator</h3>
            <p className='text-center'
              style={ {
                  marginBottom: 8,
                  marginTop: 0,
                  fontSize: '1.6vh',
                  color: '#5d5d5d',
              } }
            >
                Find out how an assignment will affect your grade.
            </p>
            <div className='row' >

            <div className='row form-group has-success is-empty' style={ { margin: 10 } } >
              <label
                htmlFor='currentGrade'
                className='col-xs-5 col-form-label semi-bold'
                style={ {
                  paddingRight: '.8vw',
                  textAlign: 'right',
                  lineHeight: '2.2vh',
                  paddingTop: '.8vh',
                  fontWeight: 400,
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
                  style={ { fontSize: '16px', fontWeight: '450', color: '#000000' } }
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
                    lineHeight: '2.2vh',
                    paddingTop: '.8vh',
                    fontWeight: 400,
                  } }
                >You plan on getting/got:</label>
                <div className='col-xs-2' style={ { paddingLeft: 0, paddingRight: 0 } } >
                  <input
                    className='form-control'
                    type='number'
                    name='assignmentGrade'
                    value={ this.state.assignmentGrade }
                    onChange={ this.onInputChange }
                    placeholder='90'
                    id='requiredGrade'
                    style={ { fontSize: '16px', fontWeight: '450', color: '#000000' } }
                  />
                </div>
                <label htmlFor='requiredGrade' style={ { paddingTop: '10px', paddingLeft: 8, fontWeight: 400 } } >%.</label>
              </div>

              <div className='row form-group has-success is-empty' style={ { margin: '10px' } } >
                <label
                  htmlFor='final'
                  className='col-xs-5 col-form-label semi-bold text-left'
                  style={ {
                    paddingRight: '.8vw',
                    textAlign: 'right',
                    lineHeight: '2.2vh',
                    paddingTop: '.8vh',
                    fontWeight: 400,
                  } }
                >Assignment's worth:</label>
                <div className='col-xs-2' style={ { paddingLeft: 0, paddingRight: 0 } } >
                  <input
                    className='form-control'
                    type='number'
                    value={ this.state.assignmentWeight }
                    name='assignmentWeight'
                    onChange={ this.onInputChange }
                    placeholder='10'
                    id='final'
                    style={ { fontSize: '16px', fontWeight: '450', color: '#000000' } }
                  />
                </div>
                <label htmlFor='final' style={ { paddingTop: '10px', paddingLeft: 4, fontWeight: 400 } } >% of your grade.</label>
              </div>

              <div className='row' style={ { marginLeft: '4%', marginRight: '4%', textAlign: 'center' } } >
                <a
                  className='btn btn-primary col-md-6 col-xs-6 col-md-offset-3 col-xs-offset-3'
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
