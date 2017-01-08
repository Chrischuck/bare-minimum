/* eslint-disable */

const HomeRoute = {
  getComponents(location, callback) {
    require.ensure([
      './components/',
      ], function (require) {
        const Home = require('./components/').default;
       callback(null, Home);
     });
   },
};

export default HomeRoute;
