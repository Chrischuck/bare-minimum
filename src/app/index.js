import { h, Fragment } from 'preact'
import { useState } from 'preact/hooks'

import Header from 'Components/Header'
import Modal from 'Components/Modal'

import styles from './index.module.css'

const App = ({ pathname, push, Component }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalData, setModalData] = useState({
    title: '',
    message: '',
    type: ''
  })

  const openModal = ({ title, message, type }) => {
    setIsModalOpen(true)
    setModalData({ title, message, type })
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalData({ title: '', message: '', type: '' })
  }

  return (
    <Fragment>
      {Header({ path: pathname, push })}
      {Modal({
        isModalOpen,
        modalData,
        closeModal
      })}

      <div className={styles.container}>
        <Component
          push={push}
          openModal={openModal}
          closeModal={closeModal}
        />
      </div>
    </Fragment>
  )
}
export default App
