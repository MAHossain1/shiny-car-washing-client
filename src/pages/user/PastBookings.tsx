import UserBookingsDataTable from '../../components/ui/Dashboard/UserBookingsDataTable';
import { useGetMyBookingsQuery } from '../../redux/features/booking/booking';
import { getPastBookings } from '../../utils/getPastBookings';

const PastBookings = () => {
  const { data: bookingsData = [], isLoading } = useGetMyBookingsQuery({});

  if (isLoading) return <p>Loading...</p>;

  const pastBookings = getPastBookings(bookingsData?.data);

  return (
    <div>
      <UserBookingsDataTable bookingsData={pastBookings} />
    </div>
  );
};

export default PastBookings;
