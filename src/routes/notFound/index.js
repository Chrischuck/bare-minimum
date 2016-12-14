/* eslint-disable */

const NotFoundRoute = {
  path: '*',
  getComponents(location, callback) {
    require.ensure([
      './components/',
      ], function (require) {
        const NotFound = require('./components/').default;
       callback(null, NotFound);
     });
   },
};

export default NotFoundRoute;
