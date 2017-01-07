const NotFoundRoute = {
  path: '*',
  getComponents(location, callback) {
    require.ensure([
      './components/',
    ], (require) => {
      const NotFound = require('./components/').default;
      callback(null, NotFound);
    });
  },
};

export default NotFoundRoute;
