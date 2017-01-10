import App from './app';

import FinalGradeRoute from './routes/finalGrade';
import GPARoute from './routes/gpa';
import HomeRoute from './routes/home';
import NotFoundRoute from './routes/notFound';
import configureStore from './store';

export const store = configureStore();

export const routes = {
  path: '/',
  component: App,
  IndexRoute: HomeRoute,
  childRoutes: [
    FinalGradeRoute(store),
    GPARoute,
    NotFoundRoute,
  ],
};
