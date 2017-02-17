import React from 'react';

export default class InputBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: '',
      grade: '',
      weight: '',
    };
  }

  onCategoryChange = (event) => {
    this.setState({ category: event.target.value }, () => this.setInParent());
  }

  onGradeChange = (event) => {
    this.setState({ grade: event.target.value }, () => this.setInParent());
  }

  onWeightChange = (event) => {
    this.setState({ weight: event.target.value }, () => this.setInParent());
  }

  setInParent = () => {
    const { category, grade, weight } = this.state;
    this.props.stateToParent(this.createId(), category, grade, weight);
  }

  createId = () => {
    const { inputCount } = this.props;
    return `weightedGrade${inputCount}`;
  }


  renderCategories(index) {
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
      category: 'Memetics',
      grade: '100%',
      weight: '100%',
    };
  }


  render() {
    const { inputCount } = this.props;
    const category = this.renderCategories(inputCount);
    return (
      <div className='row' >
        <div className='form-group has-success is-empty col-md-4 col-sm-4 col-xs-4 col-sm-offset-1 col-md-offset-1 col-xs-offset-1' style={ { paddingLeft: '5px', paddingRight: '5px', marginBottom: 5 } }>
          <label
            htmlFor={ `${inputCount}grade` }
            className='form-label'
            style={ { fontWeight: 500, fontSize: '1.4vh' } }
          >
            { 'Category ' }
            <span className='semi-bold' style={ { color: '#99999c', fontSize: '1.3vh', fontWeight: 500 } } >(optional)</span>
          </label>
          <input
            type='text'
            className='form-control'
            id={ `${inputCount}category` }
            autoComplete='off'
            value={ this.state.category }
            onChange={ this.onCategoryChange }
            placeholder={ category.category }
            style={ { fontSize: '1.6vh' } }
          />
        </div>

        <div className='form-group has-success is-empty col-sm-3 col-md-3 col-xs-3' style={ { paddingLeft: '5px', paddingRight: '5px', marginBottom: 5 } } >
          <label
            htmlFor={ `${inputCount}grade` }
            className='form-label'
            style={ { fontWeight: 500, fontSize: '1.4vh' } }
          >Current Grade</label>
          <input
            maxLength='3'
            type='number'
            className='form-control'
            id={ `${inputCount}grade` }
            autoComplete='off'
            value={ this.state.grade }
            onChange={ this.onGradeChange }
            placeholder={ category.grade }
            style={ { fontSize: '1.6vh' } }
          />
        </div>

        <div className='form-group has-success is-empty col-sm-3 col-md-3 col-xs-3' style={ { paddingLeft: '5px', paddingRight: '5px', marginBottom: 5 } } >
          <label
            htmlFor={ `${inputCount}weight` }
            className='form-label'
            style={ { fontWeight: 500, fontSize: '1.4vh' } }
          >Weight</label>
          <input
            type='number'
            maxLength='3'
            className='form-control'
            id={ `${inputCount}weight` }
            autoComplete='off'
            value={ this.state.weight }
            onChange={ this.onWeightChange }
            placeholder={ category.weight }
            style={ { fontSize: '1.6vh' } }
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
