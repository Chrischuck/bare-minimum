import React from 'react';

export default class InputBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      grade: 0,
      units: 0,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  gradeToNumber(grade) {
    switch (grade) {
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
      default:
        return 0;
    }
  }

  onInputChange() {

  }

  render() {
    const { inputCount } = this.props;
    return (
      <div className='row'>

        <div className='form-group has-success label-floating is-empty col-md-3'>
          <label htmlFor={ `${inputCount}grade` } className='control-label'>Class</label>
          <input type='text' className='form-control' id={ `${inputCount}grade` } autoComplete='off' />
        </div>

        <div className='form-group has-success label-floating is-empty col-md-3'>
          <label htmlFor={ `${inputCount}grade` } className='control-label'>Grade</label>
          <input maxLength='1' type='text' className='form-control' id={ `${inputCount}grade` } autoComplete='off' />
        </div>

        <div className='form-group has-success label-floating is-empty col-md-3'>
          <label htmlFor={ `${inputCount}grade` } className='control-label'>Units</label>
          <input type='number' maxLength='1' className='form-control' id={ `${inputCount}grade` } autoComplete='off' />
        </div>

      </div>
    );
  }
}

InputBox.propTypes = {
  inputCount: React.PropTypes.string,
};
