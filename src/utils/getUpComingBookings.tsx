export const getUpcomingBookings = (bookingsData: any) => {
  const upcomingBookings = bookingsData?.filter((booking: any) => {
    const { date, startTime } = booking.slotId;

    if (!date || !startTime) {
      console.warn('Invalid date or startTime', date, startTime);
      return false;
    }

    // Construct full date-time string from date and startTime
    const startDateTimeString = `${
      new Date(date).toISOString().split('T')[0]
    }T${startTime}:00.000Z`; // Adding seconds and Zulu time to match the format
    const startTimeInMs = new Date(startDateTimeString).getTime();

    if (isNaN(startTimeInMs)) {
      console.warn('Invalid startTimeInMs', startTimeInMs);
      return false;
    }

    // console.log(startTimeInMs, 'utils start time');

    // Present time in milliseconds
    const presentTimeInMs = new Date().getTime();

    return startTimeInMs > presentTimeInMs;
  });

  console.log(upcomingBookings, 'frrom utils');
  return upcomingBookings;
};
