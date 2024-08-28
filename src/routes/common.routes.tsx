import Bookings from '../pages/Bookings';
import Home from '../pages/Home';
import Login from '../pages/Login';
import ServiceDetailsPage from '../pages/ServiceDetailsPage';
import Services from '../pages/Services';

export const commonPaths = [
  {
    name: 'App',
    children: [
      {
        name: 'Home',
        path: '/',
        element: <Home />,
      },
      {
        name: 'Services',
        path: '/services',
        element: <Services />,
      },
      {
        name: 'Service Details',
        path: '/services/:id',
        element: <ServiceDetailsPage />,
      },
      {
        name: 'Bookings',
        path: '/bookings',
        element: <Bookings />,
      },
      {
        name: 'Login',
        path: '/login',
        element: <Login />,
      },
    ],
  },
];
