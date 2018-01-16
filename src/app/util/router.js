import { h, Component } from 'preact'
import Bundle from './bundle'

import asyncFinalGradeComponent from '../../routes/finalGrade/index.bundle.js';
import asyncDamageCalculatorComponent from '../../routes/damageControl/index.bundle.js';
import asyncWeightedGradeComponent from '../../routes/weightedGrade/index.bundle.js';
import asyncGpaComponent from '../../routes/gpa/index.bundle.js';
import asyncNotFoundComponent from '../../routes/notFound/index.bundle.js';

const FinalGradeComponent = props => (
  <Bundle load={ asyncFinalGradeComponent }>
    { Comp => <Comp { ...props } /> }
  </Bundle>
)
const DamageCalculatorComponent = props => (
  <Bundle load={ asyncDamageCalculatorComponent }>
    { Comp => <Comp { ...props } /> }
  </Bundle>
)
const WeightedGradeComponent = props => (
  <Bundle load={ asyncWeightedGradeComponent }>
    { Comp => <Comp { ...props } /> }
  </Bundle>
)

const GpaComponent = props => (
  <Bundle load={ asyncGpaComponent }>
    { Comp => <Comp { ...props } /> }
  </Bundle>
)
const NotFoundComponent = props => (
  <Bundle load={ asyncNotFoundComponent }>
    { Comp => <Comp push={ props.push } /> }
  </Bundle>
)

class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: props.history.location.pathname,
    };
  }

  componentWillMount() {
    this.props.history.listen((location) => {
      this.setState({ currentPath: location });
    });
  }

  push = (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.props.history.push(e.target.name);
    this.setState({ currentPath: e.target.name });
  }

  render() {
    const { history, routes } = this.props;
    const App = routes.component;
    const pathname = history.location.pathname;

    if (pathname === '/') {
      history.replace('/grade-calculator');
      this.setState({ currentPath: '/grade-calculator' });
      const component = <FinalGradeComponent />
      return <App pathname={ history.location.pathname } component={ component } push={ this.push } />
    }
    
    let component = null;

    switch (pathname) {
      case '/grade-calculator':
        component = FinalGradeComponent
        break;
      case '/damage-calculator':
        component = DamageCalculatorComponent
        break;
      case '/weighted-grade-calculator':
        component = WeightedGradeComponent
        break;
      case '/gpa-calculator':
        component = GpaComponent
        break;
      default:
        component = NotFoundComponent
    }
    return (
      <App pathname={ history.location.pathname } Component={ component } push={ this.push } />
    );
  }
}

export default Router;
