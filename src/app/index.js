import { h, Component } from 'preact';
import './styles.css';
import Header from '../components/header/index.js';
import Modal from '../components/modal/index.js';

class App extends Component {
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
    const { pathname, Component, push } = this.props;
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
        <Component openModal={this.openModal} closeModal={this.closeModal} />
        </div>
      </div>
    );
  }
}
export default App;
