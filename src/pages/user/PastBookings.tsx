import UserBookingsDataTable from '../../components/ui/Dashboard/UserBookingsDataTable';
import { selectUser } from '../../redux/features/auth/authSlice';
import { useGetMyBookingsQuery } from '../../redux/features/booking/booking';
import { useAppSelector } from '../../redux/hooks';
import { getPastBookings } from '../../utils/getPastBookings';

const PastBookings = () => {
  const user = useAppSelector(selectUser);
  const { data: bookingsData = [], isLoading } = useGetMyBookingsQuery({});

  // console.log(bookingsData, 'booking data');

  if (isLoading) return <p>Loading...</p>;

  //   const pastBookings = bookingsData?.data?.filter((booking: any) => {
  //     const startTimeInMs = new Date(
  //       `${booking.slotId.date}T${booking.slotId.startTime}`
  //     ).getTime();
  //     // Present time in milliseconds
  //     const presentTimeInMs = new Date().getTime();

  //     return startTimeInMs < presentTimeInMs;
  //   });

  //   console.log(pastBookings, 'pastbookings');

  const pastBookings = getPastBookings(bookingsData?.data);
  //   console.log(bookingsData, 'pastbookings');
  // console.log(upcomingBookings, 'herre whery');

  return (
    <div>
      <UserBookingsDataTable bookingsData={pastBookings} />
    </div>
  );
};

export default PastBookings;
