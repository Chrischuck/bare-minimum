/* eslint-disable */

const FinalGradeRoute = {
  path: 'grade-calculator',
  getComponents(location, callback) {
    require.ensure([
      './components/',
      ], function (require) {
        const FinalGrade = require('./components/').default;
       callback(null, FinalGrade);
     });
   },
};

export default FinalGradeRoute;
