const GPARoute = {
  path: '/gpa-calculator',
  getComponents(location, callback) {
    require.ensure([
      './components/',
    ], (require) => {
      const GPA = require('./components/').default;
      callback(null, GPA);
    });
  },
};

export default GPARoute;
