import React from 'react';
import Helmet from 'preact-helmet';

import Modal from '../../../components/modal';
import InputBox from './inputBox';
import { calculatorStringBuilder } from '../../../util/stringBuilders';

export default class WeightedGrade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {},
      requiredGrade: '',
      finalWeight: '',
      inputCount: 3,
      isModalOpen: false,
      title: null,
      message: null,
      type: null,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.inputCount !== nextState.inputCount || this.state.isModalOpen !== nextState.isModalOpen;
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Get data from the children....maybe use redux for this
  stateFromChild = (id, category, grade, weight) => {
    const { categories } = this.state;
    const previousCategory = categories[id];
    categories[id] = { category, grade, weight };
    if (previousCategory && previousCategory.category !== category) {
      this.setState({ categories });
    } else {
      this.setState({ categories });
    }
  }

  // All logic
  calculate = () => {
    const { categories, requiredGrade, finalWeight } = this.state;
    const keys = Object.keys(categories);
    const requiredPercent = Number(requiredGrade) / 100;
    const finalPercent = Number(finalWeight) / 100;
    let contributions = 0;
    let totalWeights = 0;
    let totalPercentage = Number(finalWeight);

    if (!requiredPercent) {
      this.openModal('Ugh Oh!', 'The grade you want doesn\'t look right!', 'warning');
      return;
    }
    if (!finalPercent) {
      this.openModal('Ugh Oh!', 'The final\'s weight doesn\'t look right!', 'warning');
      return;
    }

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const { category, grade, weight } = categories[key];
      const numericalGrade = Number(grade) / 100;
      const numericalWeight = Number(weight) / 100;
      totalPercentage += Number(weight);
      if (!numericalGrade && category) {
        this.openModal(
          'Oops!',
          `Your grade for ${category} doesn't look right!`,
          'warning',
       );
        return;
      }
      if (!numericalWeight && category) {
        this.openModal(
          'Oops!',
          `Your weight for ${category} doesn't look right!`,
          'warning',
       );
        return;
      }
      if (numericalGrade && numericalWeight) {
        totalWeights += numericalWeight;
        contributions += (numericalGrade * numericalWeight);
      }
    }
    if (totalWeights === 0) {
      this.openModal('Oh no!', 'Looks like you haven\'t added any categories!', 'warning');
      return;
    }
    if ((totalPercentage) !== 100) {
      this.openModal(
        'Oops!',
        totalPercentage > 100 ?
          'Your total percentage can\'t be greater than 100!' :
          'Your total percentage can\'t be less than 100!',
        'warning');
      return;
    }

    const finalGrade = ((requiredPercent - contributions) / finalPercent) * 100;

    const toRound = ((finalGrade) * 1000) % 10 >= 5;
    const calculatedGrade = toRound ?
      Math.ceil(finalGrade * 100) / 100 :
      Math.floor(finalGrade * 100) / 100;

    if (!isNaN(calculatedGrade)) {
      this.openModal('You can do it!', calculatorStringBuilder(calculatedGrade, this.state.requiredGrade), null);
    } else {
      this.openModal('Ugh Oh!', 'Something went wrong, make sure your inputs are right!', 'warning');
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

  addCategory = () => {
    const { inputCount } = this.state;
    this.setState({ inputCount: inputCount + 1 });
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
        className='container'
        style={ { marginTop: '15vh' } }
      >
        { isModalOpen && <Modal closeModal={ this.closeModal } title={ title } message={ message } type={ type } /> }
        <Helmet
          title='Bare Minimum | Weighted Final Grade Calculator'
          meta={ [
            { name: 'description', content: 'Weighted Final grade calculator to help you pass your classes!' },
          ] }
        />
        <div className='well infobox' >

          <div>
            <h3
              className='text-center'
              style={ {
                marginTop: 15,
                marginBottom: 2,
                fontSize: '5vw 5h',
                color: '#2e2d2d',
              } }
            >Weighted Final Grade Calculator</h3>

            <p
              className='text-center'
              style={ {
                marginBottom: 8,
                marginTop: 0,
                fontSize: '13px',
                color: '#5d5d5d',
              } }
            >% sign is not neccesary</p>
            <div className='row input-row' >
              <div className='form-group has-success is-empty col-md-6 col-xs-6 col-sm-6' style={ { paddingLeft: '0px', paddingRight: '2.5px', marginBottom: 5 } } >
                <label
                  htmlFor={ 'requiredGrade' }
                  className='form-label'
                  style={ { fontWeight: 500 } }
                >You want a:</label>
                <input
                  maxLength='3'
                  type='number'
                  className='form-control'
                  id={ 'requiredGrade' }
                  autoComplete='off'
                  name='requiredGrade'
                  value={ this.state.requiredGrade }
                  onChange={ this.onInputChange }
                  placeholder={ '93%' }
                  style={ { fontSize: '14px', fontWeight: '450', color: '#000000' } }
                />
              </div>
              <div className='form-group has-success is-empty col-md-6 col-xs-6 col-sm-6' style={ { paddingLeft: '2.5px', paddingRight: '0px', marginBottom: 5 } } >
                <label
                  htmlFor={ 'finalWeight' }
                  className='form-label'
                  style={ { fontWeight: 500 } }
                >Final's worth:</label>
                <input
                  maxLength='3'
                  type='number'
                  className='form-control'
                  id={ 'finalWeight' }
                  autoComplete='off'
                  value={ this.state.finalWeight }
                  name='finalWeight'
                  onChange={ this.onInputChange }
                  placeholder={ '20%' }
                  style={ { fontSize: '14px', fontWeight: '450', color: '#000000' } }
                />
              </div>
            </div>

            { inputs }


            <div className='row input-row' style={ { paddingTop: '1px' } } >
              <div className='col-md-12 col-xs-12' style={ { padding: 0 } } >
                <div
                  className='pull-left col-md-6 col-xs-6'
                  style={ {
                    paddingLeft: '0px',
                    paddingRight: '2.5px',
                  } }
                >
                  <a
                    className='btn btn-primary no-padding col-md-12 col-xs-12'
                    onClick={ this.addCategory }
                    style={ {
                      backgroundColor: '#009688',
                    } }
                  >
                      Add Category
                  </a>
                </div>

                <div
                  className='pull-right col-md-6 col-xs-6'
                  style={ {
                    paddingLeft: '2.5px',
                    paddingRight: '0px',
                  } }
                >
                  <a
                    className='btn btn-primary no-padding col-md-12 col-xs-12'
                    onClick={ this.calculate }
                  >
                      Calculate
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
