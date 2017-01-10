import React from 'react';
import InputBox from './inputBox';

export default class GPA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: {},
      pastGpa: '',
      pastUnits: '',
      inputCount: 4,
      gpa: '',
    };

    this.stateFromChild = this.stateFromChild.bind(this);
    this.addClass = this.addClass.bind(this);
    this.calculate = this.calculate.bind(this);
    this.showGpa = this.showGpa.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event, name) {
    this.setState({ [name]: event.target.value });
  }

  stateFromChild(id, course, grade, units) {
    const { courses } = this.state;
    courses[id] = { course, grade, units };
    this.setState({ courses }, () => this.calculate());
  }

  calculate() {
    const { courses, pastGpa, pastUnits } = this.state;
    const keys = Object.keys(courses);

    let totalPoints = 0;
    let totalCredits = 0;
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const { grade, units } = courses[key];

      totalPoints += grade * Number(units);
      totalCredits += Number(units);
    }
    console.log(pastGpa);
    console.log(pastUnits);
    if (typeof Number(pastGpa) === 'number' && typeof Number(pastUnits) === 'number') {
      totalPoints += Number(pastGpa) * pastUnits;
      totalCredits += Number(pastUnits);
    }
    const calculatedGpa = Math.ceil((totalPoints / totalCredits) * 100) / 100;
    if ((calculatedGpa * 10) % 10 !== 0) {
      const gpa = calculatedGpa.toFixed(2);
      this.setState({ gpa });
    } else {
      const gpa = calculatedGpa.toFixed(1);
      this.setState({ gpa });
    }
  }

  addClass() {
    const { inputCount } = this.state;
    this.setState({ inputCount: inputCount + 1 });
  }

  showGpa() {
    const { gpa } = this.state;
    if (gpa) {
      swal({
        title: 'Nice!',
        text: this.gpaStringBuilder(gpa),
        confirmButtonColor: '#009688',
        animation: 'slide-from-top',
      });
    } else {
      swal({
        title: 'Ugh oh!',
        text: 'It appears you haven\'t added any classes!',
        confirmButtonColor: '#009688',
        animation: 'slide-from-top',
        type: 'warning',
      });
    }
  }

  gpaStringBuilder(gpa) {
    const numbericGpa = Number(gpa);
    if (numbericGpa >= 4) {
      return `Damn you're rocking a ${gpa}`;
    }
    if (numbericGpa < 4 && numbericGpa >= 3.8) {
      return `Good job you have a solid ${gpa}`;
    }
    if (numbericGpa < 3.8 && numbericGpa >= 3) {
      return `Awesome you got a ${gpa}`;
    }
    if (numbericGpa < 3 && numbericGpa >= 2.5) {
      return `Not bad, you're getting a ${gpa}`;
    }
    if (numbericGpa < 2.5) {
      return `You have a ${gpa}`;
    }
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
          marginTop: '10vh',
          paddingLeft: '2%',
          paddingRight: '2%',
          marginBottom: 10,
        } }
      >

        <div className='well infobox col-md-6 col-md-offset-3' >
          <h2
            className='text-center'
            style={ {
              marginTop: 25,
              marginBottom: 15,
              fontSize: '5vw 5h',
              color: '#2e2d2d',
            } }
          >GPA Calculator</h2>

          <div className='row'>
            <div className='form-group has-success is-empty col-md-2 col-xs-5 col-xs-offset-1' style={ { paddingLeft: '5px', paddingRight: '5px' } }>
              <label
                htmlFor='pastGPA'
                className='form-label'
                style={ { fontWeight: 550 } }
              >
                { 'Past GPA ' }
                <span className='semi-bold' style={ { color: '#99999c', fontSize: '1.3vh', fontWeight: 500 } } >(optional)</span>
              </label>
              <input
                type='text'
                className='form-control'
                id='pastGPA'
                autoComplete='off'
                placeholder='3.8'
                onChange={ event => this.onInputChange(event, 'pastGpa') }
                style={ { fontSize: '1.3vh' } }
              />
            </div>

            <div className='form-group has-success is-empty col-md-2 col-xs-5' style={ { paddingLeft: '5px', paddingRight: '5px' } }>
              <label
                htmlFor='pastUnits'
                className='form-label'
                style={ { fontWeight: 550 } }
              >
                { 'Past Units ' }
                <span className='semi-bold' style={ { color: '#99999c', fontSize: '1.3vh', fontWeight: 500 } } >(optional)</span>
              </label>
              <input
                type='text'
                className='form-control'
                id='pastUnits'
                autoComplete='off'
                placeholder='60'
                onChange={ event => this.onInputChange(event, 'pastUnits') }
                style={ { fontSize: '1.3vh' } }
              />
            </div>
          </div>

          { inputs }

          <div className='row' style={ { paddingTop: '1px' } } >
            <div className='col-md-8 col-md-offset-2 col-xs-10 col-xs-offset-1'>
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
                  style={ {
                    backgroundColor: '#009688',
                  } }
                >
                  Add Class <span className='glyphicon glyphicon-plus' />
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
                  style={ {
                    backgroundColor: '#009688',
                  } }
                >
                  Calculate <span className='glyphicon glyphicon-heart' />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
