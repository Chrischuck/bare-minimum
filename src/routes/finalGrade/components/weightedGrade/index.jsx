import React from 'react';
import InputBox from './inputBox';

export default class WeightedGrade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: {},
      requiredGrade: '',
      finalWeight: '',
      inputCount: 2,
    };

    this.stateFromChild = this.stateFromChild.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  onInputChange(event, name) {
    this.setState({ [name]: event.target.value });
  }

  stateFromChild(id, category, grade, weight) {
    const { categories } = this.state;
    const previousCategory = categories[id];
    categories[id] = { category, grade, weight };
    if (previousCategory && previousCategory.category !== category) {
      this.setState({ categories });
    } else {
      this.setState({ categories });
    }
  }

  calculate() {
    const { categories, requiredGrade, finalWeight } = this.state;
    const keys = Object.keys(categories);
    const requiredPercent = this.inputToNumber(requiredGrade);
    const finalPercent = this.inputToNumber(finalWeight);
    let contributions = 0;
    let totalWeights = 0;

    if (!requiredPercent) {
      swal({
        title: 'Ugh Oh!',
        text: 'The grade you want doesn\'t look right!',
        confirmButtonColor: '#009688',
        animation: 'slide-from-top',
        type: 'warning',
      });
      return;
    }
    if (!finalPercent) {
      swal({
        title: 'Ugh Oh!',
        text: 'The final\'s weight doesn\'t look right!',
        confirmButtonColor: '#009688',
        animation: 'slide-from-top',
        type: 'warning',
      });
      return;
    }

    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const { category, grade, weight } = categories[key];
      const numericalGrade = this.inputToNumber(grade);
      const numericalWeight = this.inputToNumber(weight);
      if (!numericalGrade) {
        swal({
          title: 'Oops!',
          text: category ?
          `Your grade for ${category} doesn't look right!` :
          'One of your grades doesn\'t look right!',
          confirmButtonColor: '#009688',
          animation: 'slide-from-top',
          type: 'warning',
        });
        return;
      }
      if (!numericalWeight) {
        swal({
          title: 'Oops!',
          text: category ?
          `Your weight for ${category} doesn't look right!` :
          'One of your weights doesn\'t look right!',
          confirmButtonColor: '#009688',
          animation: 'slide-from-top',
          type: 'warning',
        });
        return;
      }
      if (numericalGrade && numericalWeight) {
        totalWeights += numericalWeight;
        contributions += (numericalGrade * numericalWeight);
      }
    }
    if (totalWeights === 0) {
      swal({
        title: 'Oops!',
        text: 'Looks like you haven\'t added any categories!',
        confirmButtonColor: '#009688',
        animation: 'slide-from-top',
        type: 'warning',
      });
      return;
    }

    if ((totalWeights + finalPercent) !== 1) {
      swal({
        title: 'Oops!',
        text: (totalWeights + finalPercent) > 1 ?
        'Your total percentage can\'t be greater than 100!' :
        'Your total percentage can\'t be less than 100!',
        confirmButtonColor: '#009688',
        animation: 'slide-from-top',
        type: 'warning',
      });
      return;
    }

    const finalGrade = ((requiredPercent - contributions) / finalPercent) * 100;

    const toRound = ((finalGrade) * 1000) % 10 >= 5;
    const calculatedGrade = toRound ?
      Math.ceil(finalGrade * 100) / 100 :
      Math.floor(finalGrade * 100) / 100;

    if (!isNaN(calculatedGrade)) {
      swal({
        title: 'You can do it!',
        text: this.calculatorStringBuilder(calculatedGrade),
        confirmButtonColor: '#009688',
        animation: 'slide-from-top',
      });
    } else {
      swal({
        title: 'Oops!',
        text: 'Something went wrong, make sure your inputs are right!',
        confirmButtonColor: '#009688',
        animation: 'slide-from-top',
        type: 'warning',
      });
    }
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

  inputToNumber(input) {
    if (input.substr(input.length - 1) === '%') {
      return Number(input.substr(0, input.length - 1)) / 100;
    } else if (!isNaN(Number(input))) {
      return Number(input) / 100;
    } else {
      return undefined;
    }
  }

  addCategory() {
    const { inputCount } = this.state;
    this.setState({ inputCount: inputCount + 1 });
  }

  render() {
    console.log(this.state);
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
      <div>
        <h3
          className='text-center'
          style={ {
            marginTop: 25,
            marginBottom: 2,
            fontSize: '5vw 5h',
            color: '#2e2d2d',
          } }
        >Weighted Final Grade Calculator</h3>

        <p
          className='text-center'
          style={ {
            marginBottom: 15,
            fontSize: '1.6vh',
            color: '#5d5d5d',
          } }
        >% sign is not neccesary</p>
        <div className='row'>
          <div className='form-group has-success is-empty col-md-5 col-xs-5 col-md-offset-1 col-xs-offset-1' style={ { paddingLeft: '5px', paddingRight: '5px' } } >
            <label
              htmlFor={ 'requiredGrade' }
              className='form-label'
              style={ { fontWeight: 500, fontSize: '1.8vh' } }
            >You want a:</label>
            <input
              maxLength='3'
              type='text'
              className='form-control'
              id={ 'requiredGrade' }
              autoComplete='off'
              onChange={ event => this.onInputChange(event, 'requiredGrade') }
              placeholder={ '93%' }
              style={ { fontSize: '1.7vh' } }
            />
          </div>
          <div className='form-group has-success is-empty col-md-5 col-xs-5 ' style={ { paddingLeft: '5px', paddingRight: '5px' } } >
            <label
              htmlFor={ 'finalWeight' }
              className='form-label'
              style={ { fontWeight: 500, fontSize: '1.8vh' } }
            >Final's worth:</label>
            <input
              maxLength='3'
              type='text'
              className='form-control'
              id={ 'finalWeight' }
              autoComplete='off'
              onChange={ event => this.onInputChange(event, 'finalWeight') }
              placeholder={ '20%' }
              style={ { fontSize: '1.7vh' } }
            />
          </div>
        </div>

        { inputs }


        <div className='row' style={ { paddingTop: '1px' } } >
          <div className='col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1' style={ { padding: 0 } } >
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
                style={ {
                  backgroundColor: '#009688',
                  fontSize: '2vh',
                } }
              >
                  Add Category <span className='glyphicon glyphicon-plus' />
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
                style={ {
                  backgroundColor: '#009688',
                  fontSize: '2vh',
                } }
              >
                  Calculate <span className='glyphicon glyphicon-heart' />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
