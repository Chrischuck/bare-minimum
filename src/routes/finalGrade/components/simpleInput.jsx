import React from 'react';
import { connect } from 'react-redux';
import * as gradeActions from '../actions';

const mapStateToProps = state => ({
  isModalOpen: state.finalGrade.isModalOpen,
});


const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (grade) => {
      dispatch(gradeActions.openFinalGradeModal(grade));
    },
  };
};

class SimpleInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentGrade: '',
      finalWeight: '',
      requiredGrade: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event, name) {
    this.setState({ [name]: event.target.value });
  }

  render() {
    console.log(this.props);
    return (
      <div style={ { marginTop: 10 } } >

        <h1
          className='text-center'
          style={ {
            marginTop: 25,
            marginBottom: 15,
            color: '#2e2d2d',
          } }
        >Final Grade Calculator</h1>

        <div className='row' style={ { paddingLeft: '30%' } } >

          <div className='form-group row' style={ { margin: '10px' } } >
            <label
              htmlFor='currentGrade'
              className='col-xs-3 col-form-label semi-bold'
              style={ {
                paddingRight: 0,
                paddingTop: 10,
                fontSize: 14,
              } }
            >Current grade:</label>
            <div className='col-xs-3' style={ { paddingLeft: 0, paddingRight: 0 } } >
              <input
                className='form-control'
                type='number'
                value={ this.state.currentGrade }
                onChange={ event => this.onInputChange(event, 'currentGrade') }
                placeholder='92.4'
                id='currentGrade'
              />
            </div>
            <label htmlFor='currentGrade' style={ { paddingTop: '10px', paddingLeft: 8 } } >%</label>
          </div>

          <div className='row form-group' style={ { margin: '10px' } } >
            <label
              htmlFor='final'
              className='col-xs-3 col-form-label semi-bold'
              style={ {
                paddingRight: 0,
                paddingTop: 10,
                fontSize: 14,
              } }
            >Final's worth:</label>
            <div className='col-xs-3' style={ { paddingLeft: 0, paddingRight: 0 } } >
              <input
                className='form-control'
                type='number'
                value={ this.state.finalWeight }
                onChange={ event => this.onInputChange(event, 'finalWeight') }
                placeholder='90'
                id='final'
              />
            </div>
            <label htmlFor='final' style={ { paddingTop: '10px', paddingLeft: 8 } } >%</label>
          </div>

          <div className='row form-group' style={ { margin: 10 } } >
            <label
              htmlFor='requiredGrade'
              className='col-xs-3 col-form-label semi-bold'
              style={ {
                paddingRight: 0,
                paddingTop: 10,
                fontSize: 14,
              } }
            >You require:</label>
            <div className='col-xs-3' style={ { paddingLeft: 0, paddingRight: 0 } } >
              <input
                className='form-control'
                type='number'
                value={ this.state.requiredGrade }
                onChange={ event => this.onInputChange(event, 'requiredGrade') }
                placeholder='10'
                id='requiredGrade'
              />
            </div>
            <label htmlFor='requiredGrade' style={ { paddingTop: '10px', paddingLeft: 8 } } >%</label>
          </div>

          <div className='row' style={ { marginLeft: '8%', marginRight: '8%' } } >
            <a className='btn btn-primary col-md-6' onClick={ () => this.props.openModal(6) } >
              Calculate <span className='glyphicon glyphicon-heart' />
            </a>
          </div>

        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleInput);
