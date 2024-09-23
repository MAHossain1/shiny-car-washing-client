import UpcomingBookings from '../pages/user/UpComingBookings';
import Profile from '../pages/user/Profile';
import UserDashboard from '../pages/user/UserDashboard';
import PastBookings from '../pages/user/PastBookings';

type TUserPath =
  | {
      name: string;
      path: string;
      element: JSX.Element;
    }
  | {
      title: string;
      children: {
        name: string;
        path: string;
        element: JSX.Element;
      }[];
    };

export const userPaths: TUserPath[] = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <UserDashboard />,
  },
  {
    title: 'User Bookings',
    children: [
      {
        name: 'Upcoming Bookings',
        path: 'my-bookings',
        element: <UpcomingBookings />,
      },
      {
        name: 'Past Bookings',
        path: 'my-past-bookings',
        element: <PastBookings />,
      },
      {
        name: 'My Profile',
        path: 'me',
        element: <Profile />,
      },
    ],
  },
];
