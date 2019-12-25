import { h, Component } from 'preact'

import styles from './index.module.css'

const Modal = ({ isModalOpen, modalData, closeModal }) => (
  <div
    className={`${styles.modalBackground} ${
      isModalOpen ? styles.modalVisible : ''
    }`}
  >
    <div
      className={`${styles.modalContent} ${
        isModalOpen ? styles.modalContentVisible : ''
      }`}
    >
      {modalData.type && (
        <div className="modal-icon modal-warning">
          <span className="modal-body" />
          <span className="modal-dot" />
        </div>
      )}
      <h2 className="modal-h2">{modalData.title}</h2>
      <p className="modal-p">{modalData.message}</p>
      <div className="modal-button-container">
        <a
          className="btn"
          onClick={closeModal}
          style={{
            fontWeight: 500,
            fontSize: '18px',
            padding: '8px 20px',
            margin: '26px 5px 0'
          }}
        >
          ok
        </a>
      </div>
    </div>
  </div>
)

export default Modal
