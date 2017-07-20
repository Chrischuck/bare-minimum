import React from 'react';

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
    if (pathname === '/') {
      history.replace('/grade-calculator');
      this.setState({ currentPath: this.props.history.pathname });
    }
    const FinalGradeComponent = routes.childRoutes.FinalGradeRoute;
    const DamageCalculatorComponent = routes.childRoutes.DamageCalculator;
    const WeightedGradeComponent = routes.childRoutes.WeightedGradeRoute;
    const DonateComponent = routes.childRoutes.DonateRoute;
    const GpaComponent = routes.childRoutes.GPARoute;
    const NotFoundComponent = routes.childRoutes.NotFoundRoute;

    let component = null;
    switch (pathname) {
      case '/grade-calculator':
        component = <FinalGradeComponent />;
        break;
      case '/damage-calculator':
        component = <DamageCalculatorComponent />;
        break;
      case '/weighted-grade-calculator':
        component = <WeightedGradeComponent />;
        break;
      case '/donate':
        component = <DonateComponent />;
        break;
      case '/gpa-calculator':
        component = <GpaComponent />;
        break;
      default:
        component = <NotFoundComponent push={ this.push } />;
    }
    return (
      <div>
        <App pathname={ this.state.currentPath } component={ component } push={ this.push } />
      </div>
    );
  }
}

export default Router;
