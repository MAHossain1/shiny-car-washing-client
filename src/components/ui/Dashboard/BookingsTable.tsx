import { useGetAllBookingsQuery } from '../../../redux/features/booking/booking';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../Card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';

const BookingsTable = () => {
  const { data: bookingsData = [], isLoading } = useGetAllBookingsQuery({});
  console.log('bookingsData', bookingsData);

  if (isLoading) <div>Loading...</div>;

  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>Customers Bookings</CardTitle>
        <CardDescription>List all bookings.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {/* <TableHead>Service Name</TableHead> */}
              <TableHead className="w-[100px] sm:table-cell">
                Customer Name
              </TableHead>
              <TableHead className="w-[100px] sm:table-cell">
                Transaction ID
              </TableHead>
              <TableHead className="w-[100px] sm:table-cell">
                Payment Status
              </TableHead>
              {/* <TableHead className="">Start Time</TableHead> */}
              <TableHead className="">Vehicle Type</TableHead>
              <TableHead className="">Vehicle Brand</TableHead>
              <TableHead className="">Vehicle Model</TableHead>
              <TableHead className="">Registration Plate</TableHead>
              <TableHead className="">Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookingsData?.data?.map((booking: any) => {
              const {
                // serviceId: { name: serviceName = 'No Service' } = {},
                customerId: { name: customerName = 'Unknown' } = {},
                // slotId = {},
                transactionId,
                paymentStatus,
                vehicleType,
                vehicleBrand,
                vehicleModel,
                registrationPlate,
                createdAt,
              } = booking;

              const paymentDisplayStatus =
                paymentStatus === 'Paid' ? 'Paid' : 'Pending';
              //   const { startTime = 'Not Specified' } = slotId || {};

              //   console.log('come on baby🚀🚀🚀🚀🚀', booking.customerId);
              return (
                <TableRow>
                  {/* <TableCell className="font-medium">{serviceName}</TableCell> */}
                  <TableCell className="sm:table-cell">
                    {customerName}
                  </TableCell>
                  {/* <TableCell>{startTime}</TableCell> */}
                  <TableCell>{transactionId}</TableCell>
                  <TableCell>{paymentDisplayStatus}</TableCell>
                  <TableCell>{vehicleType}</TableCell>
                  <TableCell>{vehicleBrand}</TableCell>
                  <TableCell>{vehicleModel}</TableCell>
                  <TableCell>{registrationPlate}</TableCell>
                  <TableCell>
                    {new Date(createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default BookingsTable;
