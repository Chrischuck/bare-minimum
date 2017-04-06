import React from 'react';
import Helmet from 'preact-helmet';

import InputBox from './inputBox';
import sweetalert from '../../../util/sweetalert';

export default class WeightedGrade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {},
      requiredGrade: '',
      finalWeight: '',
      inputCount: 3,
    };
  }

  // Input methods
  onRequiredGradeChange = (event) => {
    this.setState({ requiredGrade: event.target.value });
  }

  onFinalWeightChange = (event) => {
    this.setState({ finalWeight: event.target.value });
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
      sweetalert('Ugh Oh!', 'The grade you want doesn\'t look right!', 'warning');
      return;
    }
    if (!finalPercent) {
      sweetalert('Ugh Oh!', 'The final\'s weight doesn\'t look right!', 'warning');
      return;
    }

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const { category, grade, weight } = categories[key];
      const numericalGrade = Number(grade) / 100;
      const numericalWeight = Number(weight) / 100;
      totalPercentage += Number(weight);
      if (!numericalGrade && category) {
        sweetalert(
          'Oops!',
          `Your grade for ${category} doesn't look right!`,
          'warning',
       );
        return;
      }
      if (!numericalWeight && category) {
        sweetalert(
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
      sweetalert('Oh no!', 'Looks like you haven\'t added any categories!', 'warning');
      return;
    }
    if ((totalPercentage) !== 100) {
      sweetalert(
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
      sweetalert('You can do it!', this.calculatorStringBuilder(calculatedGrade), null);
    } else {
      sweetalert('Ugh Oh!', 'Something went wrong, make sure your inputs are right!', 'warning');
    }
  }

  calculatorStringBuilder = (finalScore) => {
    let answerString = '';

    if (Number(finalScore) <= 50) {
      answerString += 'You only need ';
    } else {
      answerString += 'You will need at least ';
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

  addCategory = () => {
    const { inputCount } = this.state;
    this.setState({ inputCount: inputCount + 1 });
  }

  render() {
    const { inputCount } = this.state;
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
        className='container col-md-12'
        style={ {
          marginTop: '15vh',
          paddingLeft: '0',
          paddingRight: '0',
        } }
      >
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
                fontSize: '1.6vh',
                color: '#5d5d5d',
              } }
            >% sign is not neccesary</p>
            <div className='row'>
              <div className='form-group has-success is-empty col-md-5 col-xs-5 col-md-offset-1 col-xs-offset-1' style={ { paddingLeft: '5px', paddingRight: '5px', marginBottom: 5 } } >
                <label
                  htmlFor={ 'requiredGrade' }
                  className='form-label'
                  style={ { fontWeight: 500, fontSize: '1.4vh' } }
                >You want a:</label>
                <input
                  maxLength='3'
                  type='number'
                  className='form-control'
                  id={ 'requiredGrade' }
                  autoComplete='off'
                  value={ this.state.requiredGrade }
                  onChange={ this.onRequiredGradeChange }
                  placeholder={ '93%' }
                  style={ { fontSize: '1.6vh' } }
                />
              </div>
              <div className='form-group has-success is-empty col-md-5 col-xs-5 ' style={ { paddingLeft: '5px', paddingRight: '5px', marginBottom: 5 } } >
                <label
                  htmlFor={ 'finalWeight' }
                  className='form-label'
                  style={ { fontWeight: 500, fontSize: '1.4vh' } }
                >Final's worth:</label>
                <input
                  maxLength='3'
                  type='number'
                  className='form-control'
                  id={ 'finalWeight' }
                  autoComplete='off'
                  value={ this.state.finalWeight }
                  onChange={ this.onFinalWeightChange }
                  placeholder={ '20%' }
                  style={ { fontSize: '1.6vh' } }
                />
              </div>
            </div>

            { inputs }


            <div className='row' style={ { paddingTop: '1px' } } >
              <div className='col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1' style={ { padding: 0 } } >
                <div
                  className='pull-left col-md-6 col-xs-6'
                  style={ {
                    paddingLeft: '5px',
                    paddingRight: '5px',
                  } }
                >
                  <a
                    className='btn btn-primary no-padding col-md-12 col-xs-12'
                    onClick={ this.addCategory }
                  >
                      Add Category
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
