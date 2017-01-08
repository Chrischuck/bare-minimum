import React from 'react';

export default class InputBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      course: '',
      grade: '',
      units: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.setInParent = this.setInParent.bind(this);
  }

  onInputChange(event, name) {
    let val = '';

    if (name === 'grade') {
      val = this.gradeToNumber(event.target.value);
    } else {
      val = event.target.value;
    }
    this.setState({ [name]: val },
      () => this.setInParent(),
    );
  }

  setInParent() {
    const { course, grade, units } = this.state;
    if (typeof grade === 'number' && units) {
      if (typeof grade !== 'number') {
        this.setState({ grade: '' });
        swal({
          title: 'Ugh oh!',
          text: `We dodn't recognize the grade of '${grade}'!`,
          confirmButtonColor: '#009688',
          animation: 'slide-from-top',
          type: 'warning',
        });
      } else {
        this.props.stateToParent(this.createId(), course, grade, units);
      }
    }
  }

  createId() {
    const { inputCount } = this.props;
    return `courseGpa${inputCount}`;
  }

  gradeToNumber(grade) {
    const parsedGrade = grade.toUpperCase();
    switch (parsedGrade) {
      case 'A+':
        return 4;
      case 'A':
        return 4;
      case 'A-':
        return 3.7;
      case 'B+':
        return 3.3;
      case 'B':
        return 3.0;
      case 'B-':
        return 2.7;
      case 'C+':
        return 2.3;
      case 'C':
        return 2.0;
      case 'C-':
        return 1.7;
      case 'D+':
        return 1.3;
      case 'D':
        return 1.0;
      case 'D-':
        return 0;
      case 'F+':
        return 0;
      case 'F':
        return 0;
      case 'F-':
        return 0;
      default:
        return grade;
    }
  }

  createRandGrades() {
    const grade = Math.floor((Math.random() * 6) + 1);
    switch (grade) {
      case 1:
        return 'A+';
      case 2:
        return 'A';
      case 3:
        return 'A-';
      case 4:
        return 'B+';
      case 5:
        return 'B';
      default:
        return 'A-';
    }
  }

  renderCourses(index) {
    const courses = [
      {
        name: 'Math 133A',
        grade: this.createRandGrades(),
        units: '3',
      },
      {
        name: 'Astro 10',
        grade: this.createRandGrades(),
        units: '2',
      },
      {
        name: 'Phys 50',
        grade: this.createRandGrades(),
        units: '4',
      },
      {
        name: 'Math 129A',
        grade: this.createRandGrades(),
        units: '3',
      },
      {
        name: 'Math 42',
        grade: this.createRandGrades(),
        units: '3',
      },
      {
        name: 'CS 46B',
        grade: this.createRandGrades(),
        units: '4',
      },
      {
        name: 'Engl 18',
        grade: this.createRandGrades(),
        units: '2',
      },
      {
        name: 'Kin 08',
        grade: this.createRandGrades(),
        units: '2',
      },
    ];
    if (index < courses.length) {
      return courses[index];
    }
    return {
      name: 'ClassyMcClassFace',
      grade: 'A++',
      units: '4.20',
    };
  }

  render() {
    const { inputCount } = this.props;
    const course = this.renderCourses(inputCount);
    return (
      <div className='row' >
        <div className='form-group has-success is-empty col-md-4 col-xs-4 col-xs-offset-1' style={ { paddingLeft: '5px', paddingRight: '5px' } }>
          <label
            htmlFor={ `${inputCount}grade` }
            className='form-label'
          >
            { 'Class ' }
            <span className='semi-bold' style={ { color: '#99999c', fontSize: '1.3vh', fontWeight: 500 } } >(optional)</span>
          </label>
          <input
            type='text'
            className='form-control'
            id={ `${inputCount}grade` }
            autoComplete='off'
            onChange={ event => this.onInputChange(event, 'course') }
            placeholder={ course.name }
            style={ { fontSize: '1.3vh' } }
          />
        </div>

        <div className='form-group has-success is-empty col-md-3 col-xs-3' style={ { paddingLeft: '5px', paddingRight: '5px' } } >
          <label
            htmlFor={ `${inputCount}grade` }
            className='form-label'
          >Grade</label>
          <input
            maxLength='2'
            type='text'
            className='form-control'
            id={ `${inputCount}grade` }
            autoComplete='off'
            onChange={ event => this.onInputChange(event, 'grade') }
            placeholder={ course.grade }
            style={ { fontSize: '1.3vh' } }
          />
        </div>

        <div className='form-group has-success is-empty col-md-3 col-xs-3' style={ { paddingLeft: '5px', paddingRight: '5px' } } >
          <label
            htmlFor={ `${inputCount}grade` }
            className='form-label'
          >Units</label>
          <input
            type='number'
            maxLength='1'
            className='form-control'
            id={ `${inputCount}grade` }
            autoComplete='off'
            onChange={ event => this.onInputChange(event, 'units') }
            placeholder={ course.units }
            style={ { fontSize: '1.3vh' } }
          />
        </div>
      </div>
    );
  }
}

InputBox.propTypes = {
  inputCount: React.PropTypes.number,
  stateToParent: React.PropTypes.func,
};
