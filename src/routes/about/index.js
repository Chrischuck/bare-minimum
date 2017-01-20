/* eslint-disable */

const AboutRoute = {
  path: 'about',
  getComponents(location, callback) {
    require.ensure([
      './components/',
      ], function (require) {
        const About = require('./components/').default;
       callback(null, About);
     });
   },
};

export default AboutRoute;
