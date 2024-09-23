import UpcomingBookings from '../pages/user/UpComingBookings';
import Profile from '../pages/user/Profile';
import UserDashboard from '../pages/user/UserDashboard';

export const userPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <UserDashboard />,
  },
  {
    title: 'User Bookings',
    children: [
      // {
      //   name: "Past Bookings",
      //   path: "past-bookings",
      //   element: <PastBookings />
      // },
      {
        name: 'Upcoming Bookings',
        path: 'my-bookings',
        element: <UpcomingBookings />,
      },
      {
        name: 'My Profile',
        path: 'me',
        element: <Profile />,
      },
    ],
  },
];
