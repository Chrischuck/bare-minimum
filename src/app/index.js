import { h, Component, Fragment } from 'preact'

import Header from '../components/header/index.js'
import Modal from '../components/modal/index.js'

import styles from './index.module.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalOpen: false, // schema: ({ title: 'string', messge: 'string', type: null or something})
      modalData: {
        title: '',
        message: '',
        type: ''
      }
    }
  }
  openModal = ({ title, message, type }) => {
    this.setState({
      isModalOpen: true,
      modalData: {
        title,
        message,
        type
      }
    })
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      modalData: {
        title: '',
        message: '',
        type: ''
      }
    })
  }

  render() {
    const { pathname, Component, push } = this.props
    const { isModalOpen, modalData } = this.state

    return (
      <Fragment>
        {Header({ path: pathname, push })}
        {Modal({
          isModalOpen,
          modalData,
          closeModal: this.closeModal
        })}

        <div className={styles.container}>
          <Component
            push={this.props.push}
            openModal={this.openModal}
            closeModal={this.closeModal}
          />
        </div>
      </Fragment>
    )
  }
}
export default App
