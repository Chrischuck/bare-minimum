import React from 'react';

const Modal = ({ closeModal, title, message, type }) =>
  <div className='modal-background'>
    <div className='modal-content'>
      {
        type &&
        <div className='modal-icon modal-warning'>
          <span className='modal-body' />
          <span className='modal-dot' />
        </div>
      }
      <h2 className='modal-h2'>{ title }</h2>
      <p className='modal-p'>{ message }</p>
      <div className='modal-button-container'>
        <a
          className='btn btn-primary'
          onClick={ closeModal }
          style={ {
            fontWeight: 500,
            fontSize: '17px',
            padding: '10px 32px',
            margin: '26px 5px 0',
          } }
        >
          ok
        </a>
      </div>
    </div>
  </div>;

export default Modal;
