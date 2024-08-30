import Bookings from '../pages/Bookings';
import Home from '../pages/Home';
import Login from '../pages/Login';
import PaymentSuccess from '../pages/PaymentSuccess';
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
        name: 'Payment Success',
        path: '/payment-success',
        element: <PaymentSuccess />,
      },
      {
        name: 'Login',
        path: '/login',
        element: <Login />,
      },
    ],
  },
];
