/* eslint-disable */

const FinalGradeRoute = {
  path: 'weighted-grade-calculator',
  getComponents(location, callback) {
    require.ensure([
      './components/',
    ], function(require) {
        const WeightedGrade = require('./components/').default;
        callback(null, WeightedGrade);
     });
   },
};

export default FinalGradeRoute;
