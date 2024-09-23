import UserInfo from '../../components/ui/Dashboard/UserInfo';
import { selectUser } from '../../redux/features/auth/authSlice';
import { useGetSingleUserBookingsQuery } from '../../redux/features/booking/booking';
import { useGetSingleUserQuery } from '../../redux/features/users/userApi';
import { useAppSelector } from '../../redux/hooks';

const UserDashboard = () => {
  const user = useAppSelector(selectUser);
  const { data: userData = {}, isLoading } = useGetSingleUserQuery(
    user?.email!
  );

  const { isLoading: bookingIsLoading } = useGetSingleUserBookingsQuery(
    userData?.data?._id
  );

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <h1 className="text-3xl font-bold text-gray-900 capitalize">
          {user?.name} Dashboard
        </h1>
        <p className="text-sm text-gray-500">Welcome, {user?.name}</p>

        {/* <UserInfo userData={userData.data} />
        {!bookingIsLoading && bookingData?.data?.length > 0 &&
          bookingData.data.map((booking) => <BookingInfo booking={booking} />)} */}
        {bookingIsLoading ? (
          <p>Loading bookings...</p>
        ) : (
          <>
            {/* <UpcomingBookings bookingsData={bookingsData?.data} /> */}

            {/* <UserBookingsDataTable bookingsData={bookingsData.data} /> */}
          </>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
