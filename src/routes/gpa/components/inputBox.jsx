import React from 'react';

export default class InputBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: '',
      grade: '',
      units: '',
      randGrade: '',
    };
  }

  componentWillMount() {
    this.setState({ randGrade: this.createRandGrades() });
  }

  onCourseChange = (event) => {
    this.setState({ course: event.target.value }, () => this.setInParent());
  }

  onGradeChange = (event) => {
    this.setState({ grade: event.target.value }, () => this.setInParent());
  }

  onUnitsChange = (event) => {
    this.setState({ units: event.target.value }, () => this.setInParent());
  }

  setInParent = () => {
    const { course, grade, units } = this.state;
    this.props.stateToParent(this.createId(), course, grade, units);
  }

  createId() {
    const { inputCount } = this.props;
    return `courseGpa${inputCount}`;
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

  renderCourses = (index) => {
    const { randGrade } = this.state;
    const courses = [
      {
        name: 'Math 133A',
        grade: randGrade,
        units: '3',
      },
      {
        name: 'Astro 10',
        grade: randGrade,
        units: '2',
      },
      {
        name: 'Phys 50',
        grade: randGrade,
        units: '4',
      },
      {
        name: 'Math 129A',
        grade: randGrade,
        units: '3',
      },
      {
        name: 'Math 42',
        grade: randGrade,
        units: '3',
      },
      {
        name: 'CS 46B',
        grade: randGrade,
        units: '4',
      },
      {
        name: 'Engl 1B',
        grade: randGrade,
        units: '2',
      },
      {
        name: 'Kin 08',
        grade: randGrade,
        units: '2',
      },
    ];
    if (index < courses.length) {
      return courses[index];
    }
    return {
      name: 'Classy McClassFace',
      grade: 'A++',
      units: '4.20',
    };
  }

  render() {
    const { inputCount } = this.props;
    const course = this.renderCourses(inputCount);
    return (
      <div className='row' >
        <div className='form-group has-success is-empty col-md-4 col-xs-4 col-xs-offset-1' style={ { paddingLeft: '5px', paddingRight: '5px', marginBottom: 5 } }>
          <label
            htmlFor={ `${inputCount}grade` }
            className='form-label'
            style={ { fontWeight: 550 } }
          >
            { 'Class ' }
            <span className='semi-bold' style={ { color: '#99999c', fontSize: '1.3vh', fontWeight: 500 } } >(optional)</span>
          </label>
          <input
            type='text'
            className='form-control'
            id={ `${inputCount}grade` }
            autoComplete='off'
            onChange={ this.onCourseChange }
            placeholder={ course.name }
            style={ { fontSize: '1.2vh' } }
          />
        </div>

        <div className='form-group has-success is-empty col-md-3 col-xs-3' style={ { paddingLeft: '5px', paddingRight: '5px', marginBottom: 5 } } >
          <label
            htmlFor={ `${inputCount}grade` }
            className='form-label'
            style={ { fontWeight: 550 } }
          >Grade</label>
          <input
            maxLength='2'
            type='text'
            className='form-control'
            id={ `${inputCount}grade` }
            autoComplete='off'
            onChange={ this.onGradeChange }
            placeholder={ course.grade }
            style={ { fontSize: '1.2vh' } }
          />
        </div>

        <div className='form-group has-success is-empty col-md-3 col-xs-3' style={ { paddingLeft: '5px', paddingRight: '5px', marginBottom: 5 } } >
          <label
            htmlFor={ `${inputCount}grade` }
            className='form-label'
            style={ { fontWeight: 550 } }
          >Units</label>
          <input
            type='number'
            maxLength='1'
            className='form-control'
            id={ `${inputCount}grade` }
            autoComplete='off'
            onChange={ this.onUnitsChange }
            placeholder={ course.units }
            style={ { fontSize: '1.2vh' } }
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
