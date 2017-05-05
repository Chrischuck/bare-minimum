/* eslint-disable */

const DonateRoute = {
  path: 'donate',
  getComponents(location, callback) {
    require.ensure([
      './components/',
      ], function (require) {
        const Donate= require('./components/').default;
       callback(null, Donate);
     });
   },
};

export default DonateRoute;
