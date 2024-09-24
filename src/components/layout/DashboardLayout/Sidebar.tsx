import {
  BookCheck,
  CalendarPlus,
  ClipboardList,
  LayoutDashboard,
  ListTodo,
  UserRoundCheck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../../redux/hooks';
import { selectUser } from '../../../redux/features/auth/authSlice';

const DashboardSidebar = () => {
  const user = useAppSelector(selectUser);

  const sidebarItems = [
    {
      title: 'Dashboard',
      items: [
        {
          icon: <LayoutDashboard />,
          label: 'Dashboard',
          href: `/${user?.role}/dashboard`,
          visible: ['admin', 'user'],
        },
      ],
    },
    {
      title: 'Service Management',
      items: [
        {
          icon: <ClipboardList />,
          label: 'Service List',
          href: 'service-list',
          visible: ['admin'],
        },
      ],
    },
    {
      title: 'Slot Management',
      items: [
        {
          icon: <CalendarPlus />,
          label: 'Create Slot',
          href: 'create-slot',
          visible: ['admin'],
        },
        {
          icon: <ListTodo />,
          label: 'Slot List',
          href: 'slot-list',
          visible: ['admin'],
        },
      ],
    },
    {
      title: 'User Management',
      items: [
        {
          icon: <UserRoundCheck />,
          label: 'User List',
          href: 'users',
          visible: ['admin'],
        },
        {
          icon: <BookCheck />,
          label: 'Profile',
          href: 'me',
          visible: ['user'],
        },
        {
          icon: <BookCheck />,
          label: 'Bookings',
          href: 'bookings',
          visible: ['admin'],
        },

        {
          icon: <BookCheck />,
          label: 'Past Bookings',
          href: 'my-past-bookings',
          visible: ['user'],
        },
        {
          icon: <BookCheck />,
          label: 'Upcoming Bookings',
          href: 'my-bookings',
          visible: ['user'],
        },
      ],
    },
  ];

  return (
    <div className="sticky top-10 mt-4 text-sm">
      <Link to="/">SHINY Car Wash</Link>
      {sidebarItems?.map(i => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-500 font-light my-4">
            {i.title}
          </span>
          {i.items.map(item => {
            if (item.visible.includes(user?.role!)) {
              return (
                <Link
                  to={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-900 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  {item.icon}
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default DashboardSidebar;
