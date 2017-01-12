import React from 'react';

export default class InputBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
      grade: '',
      weight: '',
      randPercentage: '',
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.setInParent = this.setInParent.bind(this);
  }


  onInputChange(event, name) {
    this.setState({ [name]: event.target.value },
      () => this.setInParent(),
    );
  }

  setInParent() {
    const { category, grade, weight } = this.state;
    this.props.stateToParent(this.createId(), category, grade, weight);
  }

  createId() {
    const { inputCount } = this.props;
    return `weightedGrade${inputCount}`;
  }


  renderCategories(index) {
    const { randGrade } = this.state;
    const courses = [
      {
        category: 'Homework',
        grade: '85%',
        weight: '30%',
      },
      {
        category: 'Midterm 1',
        grade: '90%',
        weight: '15%',
      },
      {
        category: 'Midterm 2',
        grade: '95%',
        weight: '15%',
      },
      {
        category: 'Participation',
        grade: '100%',
        weight: '5%',
      },
      {
        category: 'Clickers',
        grade: '98%',
        weight: '10%',
      },
      {
        category: 'Essays',
        grade: '87%',
        weight: '15%',
      },
      {
        category: 'Assignments',
        grade: '99%',
        weight: '25%',
      },
    ];
    if (index < courses.length) {
      return courses[index];
    }
    return {
      category: 'Classy McClassFace',
      grade: '100%',
      weight: '25%',
    };
  }


  render() {
    const { inputCount } = this.props;
    const category = this.renderCategories(inputCount);
    return (
      <div className='row' >
        <div className='form-group has-success is-empty col-md-4 col-xs-4 col-md-offset-1 col-xs-offset-1' style={ { paddingLeft: '5px', paddingRight: '5px' } }>
          <label
            htmlFor={ `${inputCount}grade` }
            className='form-label'
            style={ { fontWeight: 500, fontSize: '1.6vh' } }
          >
            { 'Category ' }
            <span className='semi-bold' style={ { color: '#99999c', fontSize: '1.3vh', fontWeight: 500 } } >(optional)</span>
          </label>
          <input
            type='text'
            className='form-control'
            id={ `${inputCount}category` }
            autoComplete='off'
            onChange={ event => this.onInputChange(event, 'category') }
            placeholder={ category.category }
            style={ { fontSize: '1.7vh' } }
          />
        </div>

        <div className='form-group has-success is-empty col-md-3 col-xs-3' style={ { paddingLeft: '5px', paddingRight: '5px' } } >
          <label
            htmlFor={ `${inputCount}grade` }
            className='form-label'
            style={ { fontWeight: 500, fontSize: '1.6vh' } }
          >Current Grade</label>
          <input
            maxLength='3'
            type='text'
            className='form-control'
            id={ `${inputCount}grade` }
            autoComplete='off'
            onChange={ event => this.onInputChange(event, 'grade') }
            placeholder={ category.grade }
            style={ { fontSize: '1.7vh' } }
          />
        </div>

        <div className='form-group has-success is-empty col-md-3 col-xs-3' style={ { paddingLeft: '5px', paddingRight: '5px' } } >
          <label
            htmlFor={ `${inputCount}weight` }
            className='form-label'
            style={ { fontWeight: 500, fontSize: '1.6vh' } }
          >Weight</label>
          <input
            type='text'
            maxLength='3'
            className='form-control'
            id={ `${inputCount}weight` }
            autoComplete='off'
            onChange={ event => this.onInputChange(event, 'weight') }
            placeholder={ category.weight }
            style={ { fontSize: '1.7vh' } }
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
