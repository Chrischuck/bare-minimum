import React from 'react';
import { connect } from 'react-redux'
import * as gradeActions from '../actions';

const mapStateToProps = state => ({

})

const actions = Object.assign({}, gradeActions);

@connect(mapStateToProps, actions)
export default class FinalGradeModal extends React.Component {
  render() {
    return (
      <div className='modal'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' data-dismiss='modal' aria-hidden='true'>×</button>
              <h4 className='modal-title'>Modal title</h4>
            </div>
            <div className='modal-body'>
              <p>One fine body…</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
