import { h } from 'preact'

import Button from 'Components/Button'

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
        <div className={`${styles.modalIcon} ${styles.modalWarning}`}>
          <span className={styles.modalBody} />
          <span className={styles.modalDot} />
        </div>
      )}
      <h2 className={styles.modalH2} >{modalData.title}</h2>
      <p className={styles.modalP}>{modalData.message}</p>
      <div className={styles.buttonContainer}>
        <Button onClick={closeModal}>
          ok
        </Button>
      </div>
    </div>
  </div>
)

export default Modal
