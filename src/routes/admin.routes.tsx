import AdminDashboard from '../pages/admin/AdminDashboard';
import ServicesList from '../pages/admin/ServiceManagement/ServicesList';
import CreateSlot from '../pages/admin/SlotManagement/CreateSlot';
import SlotsList from '../pages/admin/SlotManagement/SlotsList';
import UserBookings from '../pages/admin/UserManagement/UserBookings';
import UsersList from '../pages/admin/UserManagement/UsersList';

export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard />,
  },
  {
    name: 'Service Management',
    children: [
      {
        name: 'Service List',
        path: 'service-list',
        element: <ServicesList />,
      },
    ],
  },
  {
    name: 'Slot Management',
    children: [
      {
        name: 'Slot List',
        path: 'slot-list',
        element: <SlotsList />,
      },
      {
        name: 'Create Slot',
        path: 'create-slot',
        element: <CreateSlot />,
      },
    ],
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'User List',
        path: 'users',
        element: <UsersList />,
      },
      {
        name: 'User Bookings',
        path: 'bookings',
        element: <UserBookings />,
      },
    ],
  },
];
