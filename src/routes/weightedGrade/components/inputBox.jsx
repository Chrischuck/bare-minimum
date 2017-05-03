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

  onInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      const { category, grade, weight } = this.state;
      this.props.stateToParent(this.createId(), category, grade, weight);
    });
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
      category: 'Stuff',
      grade: '100%',
      weight: '100%',
    };
  }


  render() {
    const { inputCount } = this.props;
    const category = this.renderCategories(inputCount);
    return (
      <div className='row' style={ { margin: '13px' } }>
        <div className='form-group has-success is-empty col-md-5 col-sm-5 col-xs-5' style={ { paddingLeft: '0px', paddingRight: '5px', marginBottom: 5 } }>
          <label
            htmlFor={ `${inputCount}grade` }
            className='form-label'
            style={ { fontWeight: 500 } }
          >
            { 'Category ' }
            <span className='semi-bold' style={ { color: '#99999c', fontSize: '1.2vh', fontWeight: 500 } } >(optional)</span>
          </label>
          <input
            type='text'
            className='form-control'
            id={ `${inputCount}category` }
            autoComplete='off'
            value={ this.state.category }
            name='category'
            onChange={ this.onInputChange }
            placeholder={ category.category }
            style={ { fontSize: '14px', fontWeight: '450', color: '#000000' } }
          />
        </div>

        <div className='form-group has-success is-empty col-sm-4 col-md-4 col-xs-4' style={ { paddingLeft: '0px', paddingRight: '5px', marginBottom: 5 } } >
          <label
            htmlFor={ `${inputCount}grade` }
            className='form-label'
            style={ { fontWeight: 500 } }
          >Your Grade</label>
          <input
            maxLength='3'
            type='number'
            className='form-control'
            id={ `${inputCount}grade` }
            autoComplete='off'
            value={ this.state.grade }
            name='grade'
            onChange={ this.onInputChange }
            placeholder={ category.grade }
            style={ { fontSize: '14px', fontWeight: '450', color: '#000000' } }
          />
        </div>

        <div className='form-group has-success is-empty col-sm-3 col-md-3 col-xs-3' style={ { paddingLeft: '0px', paddingRight: '0px', marginBottom: 5 } } >
          <label
            htmlFor={ `${inputCount}weight` }
            className='form-label'
            style={ { fontWeight: 500 } }
          >Weight</label>
          <input
            type='number'
            maxLength='3'
            className='form-control'
            id={ `${inputCount}weight` }
            autoComplete='off'
            value={ this.state.weight }
            name='weight'
            onChange={ this.onInputChange }
            placeholder={ category.weight }
            style={ { fontSize: '14px', fontWeight: '450', color: '#000000' } }
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
