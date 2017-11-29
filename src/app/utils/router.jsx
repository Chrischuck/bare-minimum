import React from 'react';
import Bundle from './bundle'

class Router extends React.Component {
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

    const asyncFinalGradeComponent = routes.childRoutes.FinalGradeRoute;
    const asyncDamageCalculatorComponent = routes.childRoutes.DamageCalculator;
    const asyncWeightedGradeComponent = routes.childRoutes.WeightedGradeRoute;
    const asyncGpaComponent = routes.childRoutes.GPARoute;
    const asyncNotFoundComponent = routes.childRoutes.NotFoundRoute;

    const FinalGradeComponent = () => (
      <Bundle load={ asyncFinalGradeComponent }>
        { Comp => <Comp /> }
      </Bundle>
    )
    const DamageCalculatorComponent = () => (
      <Bundle load={ asyncDamageCalculatorComponent }>
        { Comp => <Comp /> }
      </Bundle>
    )
    const WeightedGradeComponent = () => (
      <Bundle load={ asyncWeightedGradeComponent }>
        { Comp => <Comp /> }
      </Bundle>
    )

    const GpaComponent = () => (
      <Bundle load={ asyncGpaComponent }>
        { Comp => <Comp /> }
      </Bundle>
    )
    const NotFoundComponent = props => (
      <Bundle load={ asyncNotFoundComponent }>
        { Comp => <Comp { ...props } /> }
      </Bundle>
    )

    if (pathname === '/') {
      history.replace('/grade-calculator');
      this.setState({ currentPath: '/grade-calculator' });
      const component = <FinalGradeComponent />
      return <App pathname={ history.location.pathname } component={ component } push={ this.push } />
    }
    
    let component = null;

    switch (pathname) {
      case '/grade-calculator':
        component = <FinalGradeComponent />
        break;
      case '/damage-calculator':
        component = <DamageCalculatorComponent />;
        break;
      case '/weighted-grade-calculator':
        component = <WeightedGradeComponent />;
        break;
      case '/gpa-calculator':
        component = <GpaComponent />;
        break;
      default:
        component = <NotFoundComponent push={ this.push } />;
    }
    return (
      <App pathname={ history.location.pathname } component={ component } push={ this.push } />
    );
  }
}

export default Router;
