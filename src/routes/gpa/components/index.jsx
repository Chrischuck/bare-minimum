import React from 'react';
import InputBox from './inputBox';

export default class GPA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: {},
      inputCount: 4,
      gpa: '',
    };

    this.stateFromChild = this.stateFromChild.bind(this);
    this.addClass = this.addClass.bind(this);
    this.calculate = this.calculate.bind(this);
    this.showGpa = this.showGpa.bind(this);
  }

  stateFromChild(id, course, grade, units) {
    const { courses } = this.state;
  //  const totalPoints = (grade * units) + gradePoints;
  //  const totalCredits = credits + parseInt(units, 0);
    courses[id] = { course, grade, units };
    this.setState({ courses }, () => this.calculate());
  }

  calculate() {
    const { courses } = this.state;
    const keys = Object.keys(courses);

    let totalPoints = 0;
    let totalCredits = 0;
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      const { grade, units } = courses[key];

      totalPoints += grade * parseInt(units, 0);
      totalCredits += parseInt(units, 0);
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

          { inputs }

          <div className='row' >
            <div className='col-md-6 col-md-offset-3 col-xs-10 col-xs-offset-1'>
              <div className='pull-left' >
                <a
                  className='btn btn-primary no-padding'
                  onClick={ this.addClass }
                  style={ {
                    backgroundColor: '#009688',
                  } }
                >
                  Add Class <span className='glyphicon glyphicon-plus' />
                </a>
              </div>

              <div className='pull-right' >
                <a
                  className='btn btn-primary no-padding'
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
