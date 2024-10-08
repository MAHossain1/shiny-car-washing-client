import UserBookingsDataTable from '../../components/ui/Dashboard/UserBookingsDataTable';
import { useGetMyBookingsQuery } from '../../redux/features/booking/booking';
import { getUpcomingBookings } from '../../utils/getUpComingBookings';

const UpcomingBookings = () => {
  // const user = useAppSelector(selectUser);
  const { data: bookingsData = [], isLoading } = useGetMyBookingsQuery({});

  // console.log(bookingsData, 'booking data');

  if (isLoading) return <p>Loading...</p>;

  const upcomingBookings = getUpcomingBookings(bookingsData?.data);
  // console.log(upcomingBookings, 'herre whery');

  return (
    <div>
      {upcomingBookings?.length > 0 ? (
        <UserBookingsDataTable bookingsData={upcomingBookings} />
      ) : null}
    </div>
  );
};

export default UpcomingBookings;
