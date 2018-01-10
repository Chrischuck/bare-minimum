import React from 'react';

export default class InputBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      course: '',
      grade: '',
      units: '',
    };
  }

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      const { course, grade, units } = this.state;
      this.props.stateToParent(this.createId(), course, grade, units);
    });
  }

  createId() {
    const { inputCount } = this.props;
    return `courseGpa${inputCount}`;
  }

  renderCourses = (index) => {
    const courses = [
      {
        name: 'Math 133A',
        grade: 'A+',
        units: '3',
      },
      {
        name: 'Astro 10',
        grade: 'A',
        units: '2',
      },
      {
        name: 'Phys 50',
        grade: 'B+',
        units: '4',
      },
      {
        name: 'Math 129A',
        grade: 'A-',
        units: '3',
      },
      {
        name: 'Math 42',
        grade: 'A-',
        units: '3',
      },
      {
        name: 'CS 46B',
        grade: 'A',
        units: '4',
      },
      {
        name: 'Engl 1B',
        grade: 'B',
        units: '2',
      },
      {
        name: 'Kin 08',
        grade: 'A',
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
      <div className='row input-row' >
        <div className='form-group has-success is-empty col-md-5 col-xs-5' style={ { paddingLeft: '5px', paddingRight: '5px', marginBottom: 5 } }>
          <label
            htmlFor={ `${inputCount}grade` }
            className='form-label'
            style={ { fontWeight: 550 } }
          >
            { 'Class ' }
            <span className='semi-bold' style={ { color: '#99999c', fontSize: '14px', fontWeight: 500 } } >(optional)</span>
          </label>
          <input
            type='text'
            className='form-control'
            id={ `${inputCount}grade` }
            autoComplete='off'
            name='course'
            onChange={ this.onInputChange }
            placeholder={ course.name }
          />
        </div>

        <div className='form-group has-success is-empty col-md-4 col-xs-4' style={ { paddingLeft: '5px', paddingRight: '5px', marginBottom: 5 } } >
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
            name='grade'
            onChange={ this.onInputChange }
            placeholder={ course.grade }
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
            name='units'
            onChange={ this.onInputChange }
            placeholder={ course.units }
          />
        </div>
      </div>
    );
  }
}
