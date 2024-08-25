import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { routeGenerator } from '../utils/routesGenerator';
import { commonPaths } from './common.routes';
import DashboardLayout from '../components/layout/DashboardLayout/DashboardLayout';
import { adminPaths } from './admin.routes';
import { userPaths } from './user.routes';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import NotFound from '../pages/NotFound';

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
    path: '/login',
    element: <Login />,
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
