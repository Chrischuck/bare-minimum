import React, { Children, cloneElement } from 'react';
import GradeCalculator from '../routes/finalGrade/components';
import './styles.css';
import Header from '../components/header';
import Modal from '../components/modal';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: null, // schema: ({ title: 'string', messge: 'string', type: null or something})
    };
  }
  openModal = ({ title, message, type }) => {
    this.setState({
      isModalOpen: {
        title,
        message,
        type,
      },
    });
  }

  closeModal = () => {
    this.setState({
      isModalOpen: null,
    });
  }

  render() {
    const { pathname, component, push } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div id='globalWrapper' className='globalWrapper'>
        <Header path={ pathname } push={ push } />
        { 
          isModalOpen &&
          <Modal closeModal={ this.closeModal } title={ isModalOpen.title } message={ isModalOpen.message } type={ isModalOpen.type } />
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
