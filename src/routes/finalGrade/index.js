/* eslint-disable */
import { injectAsyncReducer } from '../../store';

const FinalGradeRoute = store => ({
  path: 'grade-calculator',
  getComponents(location, callback) {
    require.ensure([
      './components/',
      './reducer',
    ], function(require) {
        const FinalGrade = require('./components/').default;
        const reducer = require('./reducer').default;
        injectAsyncReducer(store, 'finalGrade', reducer);
        callback(null, FinalGrade);
     });
   },
});

export default FinalGradeRoute;
