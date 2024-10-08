import UserBookingsDataTable from '../../components/ui/Dashboard/UserBookingsDataTable';
import { selectUser } from '../../redux/features/auth/authSlice';
import { useGetMyBookingsQuery } from '../../redux/features/booking/booking';
import { useAppSelector } from '../../redux/hooks';

const UserDashboard = () => {
  const user = useAppSelector(selectUser);
  const { data: bookingsData = [], isLoading } = useGetMyBookingsQuery({});

  const bookingsDataSend = bookingsData?.data;

  if (isLoading) return <p>Loading...</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <h1 className="text-3xl font-bold text-gray-900 capitalize">
          {user?.name} Dashboard
        </h1>
        <p className="text-sm text-gray-500">Welcome, {user?.name}</p>

        {isLoading ? (
          <p>Loading bookings...</p>
        ) : (
          <>
            <div>
              <UserBookingsDataTable bookingsData={bookingsDataSend} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
