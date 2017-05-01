/* eslint-disable */

const DamageCalculatorRoute = {
  path: 'damage-calculator',
  getComponents(location, callback) {
    require.ensure([
      './components/',
    ], function(require) {
        const DamageCalculator = require('./components/').default;
        callback(null, DamageCalculator);
     });
   },
};

export default DamageCalculatorRoute;
