export const getPastBookings = (bookingsData: any) => {
  //   console.log(bookingsData, 'past utilss booking props');
  const pastBookings = bookingsData?.filter((booking: any) => {
    const { date, startTime } = booking.slotId;

    if (!date || !startTime) {
      console.warn('Invalid date or startTime', date, startTime);
      return false;
    }

    // Parse the slot's date and time without converting to UTC (keep the local time)
    const startDateTimeString = `${
      new Date(date).toISOString().split('T')[0]
    }T${startTime}:00.000Z`; // Adding seconds and Zulu time to match the format

    const startTimeInMs = new Date(startDateTimeString).getTime();

    if (isNaN(startTimeInMs)) {
      console.warn('Invalid startTimeInMs', startTimeInMs);
      return false;
    }

    // Present time in milliseconds
    const presentTimeInMs = new Date().getTime();

    // Return bookings where the start time is in the past
    return startTimeInMs < presentTimeInMs;
  });

  return pastBookings;
};
