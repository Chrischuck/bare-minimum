/* eslint-disable */

const GPARoute = {
  path: 'gpa-calculator',
  getComponents(location, callback) {
    require.ensure([
      './components/',
      ], function (require) {
        const GPA = require('./components/').default;
       callback(null, GPA);
     });
   },
};

export default GPARoute;
