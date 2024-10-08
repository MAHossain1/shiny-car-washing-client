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

const UserBookingsDataTable = ({ bookingsData }: any) => {
  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>Your Bookings</CardTitle>
        <CardDescription>All your bookings are listed here.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {/* <TableHead className="w-[100px] sm:table-cell">
                Service Name
              </TableHead> */}
              <TableHead>Service Name</TableHead>
              <TableHead className="">Start Time</TableHead>
              <TableHead className="">Vehicle Type</TableHead>
              <TableHead className="">Vehicle Brand</TableHead>
              <TableHead className="">Vehicle Model</TableHead>
              <TableHead className="">Registration Plate</TableHead>
              <TableHead className="">Payment Status</TableHead>
              <TableHead className="">Transaction ID</TableHead>
              {/* <TableHead className="">Created At</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {bookingsData?.map((booking: any) => {
              const {
                // customerId: { name: customerName },
                serviceId: { name: serviceName },
                slotId: { startTime },
                transactionId,
                paymentStatus,
                vehicleType,
                vehicleBrand,
                vehicleModel,
                registrationPlate,
                // createdAt,
              } = booking;
              return (
                <TableRow>
                  {/* <TableCell className="sm:table-cell">
                    {customerName}
                  </TableCell> */}
                  <TableCell className="font-medium">{serviceName}</TableCell>
                  <TableCell>{startTime}</TableCell>
                  <TableCell>{vehicleType}</TableCell>
                  <TableCell>{vehicleBrand}</TableCell>
                  <TableCell>{vehicleModel}</TableCell>
                  <TableCell>{registrationPlate}</TableCell>
                  <TableCell>{paymentStatus}</TableCell>
                  <TableCell>{transactionId}</TableCell>
                  {/* <TableCell>
                    {new Date(createdAt).toLocaleDateString()}
                  </TableCell> */}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UserBookingsDataTable;
