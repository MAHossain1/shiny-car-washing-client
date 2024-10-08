import { Card, CardContent, CardTitle } from './Card';

const UpcomingBookings = ({ bookingsData }: any) => {
  const getAmPm = (time: {
    split: (arg0: string) => {
      (): any;
      new (): any;
      map: { (arg0: NumberConstructor): [any, any]; new (): any };
    };
  }) => {
    const [hours] = time.split(':').map(Number);
    return hours < 12 ? 'AM' : 'PM';
  };

  const upcomingBookings = bookingsData.filter((booking: any) => {
    const startTimeInMs = new Date(
      `${booking.slot.date}T${booking.slot.startTime}`
    ).getTime();
    // Present time in milliseconds
    const presentTimeInMs = new Date().getTime();

    return startTimeInMs < presentTimeInMs;
  });

  return (
    <div>
      {upcomingBookings.length === 0 ? (
        <div>No upcoming bookings. </div>
      ) : (
        <div className="flex gap-10">
          {upcomingBookings.map((booking: any) => (
            <Card
              key={booking._id}
              className="w-[280px] p-4 flex flex-col items-center"
            >
              <CardTitle>{booking.service.name}</CardTitle>
              <CardContent>
                <p>
                  Slot:{' '}
                  {`${booking.slot.startTime} ${getAmPm(
                    booking.slot.startTime
                  )}`}
                </p>
                <p>Date: {booking.slot.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingBookings;
