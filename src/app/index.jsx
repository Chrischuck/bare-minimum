import React, { Children, cloneElement } from 'react';
import GradeCalculator from '../routes/finalGrade/components';
import './styles.css';
import Header from '../components/header';
import Modal from '../components/modal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false, // schema: ({ title: 'string', messge: 'string', type: null or something})
      modalData: {
        title: '',
        message: '',
        type: '',
      }
    };
  }
  openModal = ({ title, message, type }) => {
    this.setState({
      isModalOpen: true,
      modalData: {
        title,
        message,
        type,
      },
    });
  }

  closeModal = () => {
    this.setState({
      isModalOpen: false,
      modalData: {
        title: '',
        message: '',
        type: '',
      },
    });
  }

  render() {
    const { pathname, component, push } = this.props;
    const { isModalOpen, modalData } = this.state;
    return (
      <div id='globalWrapper' className='globalWrapper'>
        {
          Header({ path: pathname, push })
        }
        {
          Modal({
            isModalOpen,
            modalData,
            closeModal: this.closeModal,
          })
        }

        <div
          className='container'
          style={ {
            paddingTop: '2%',
            width: '100%',
            margin: '0 auto',
            paddingLeft: 0,
            paddingRight: 0,
            overflow: 'scroll',
          } }
        >
          { Children.map(component, child => cloneElement(child, { closeModal: this.closeModal, openModal: this.openModal })) || <GradeCalculator /> }
        </div>
      </div>
    );
  }
}
export default App;
