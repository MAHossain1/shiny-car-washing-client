import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import DashboardLayout from '../components/layout/DashboardLayout/DashboardLayout';
import NotFound from '../pages/NotFound';
import Signup from '../pages/Signup';
import { routeGenerator } from '../utils/routesGenerator';
import { adminPaths } from './admin.routes';
import { commonPaths } from './common.routes';
import { userPaths } from './user.routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routeGenerator(commonPaths),
  },
  {
    path: '/admin',
    element: <DashboardLayout />,
    children: routeGenerator(adminPaths),
  },
  {
    path: '/user',
    element: <DashboardLayout />,
    children: routeGenerator(userPaths),
  },

  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
