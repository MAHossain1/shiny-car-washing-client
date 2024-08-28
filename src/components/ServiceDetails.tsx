import { useState } from 'react';
import { useGetAllSlotsQuery } from '../redux/features/slots/slotApi';
import { Link } from 'react-router-dom';

const ServiceDetails = ({ service }) => {
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [selectedSlot, setSelectedSlot] = useState({});

  // console.log(selectedSlot);

  const {
    data = [],
    isLoading,
    refetch,
  } = useGetAllSlotsQuery([
    { name: 'service', value: service._id },
    { name: 'date', value: selectedDate },
  ]);

  const handleDateChange = event => {
    setSelectedDate(event.target.value);
    refetch();
  };

  const handleSlotClick = slot => {
    setSelectedSlot(slot);
    console.log('selected slot', selectedSlot);
  };

  return (
    <div className="p-6">
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-start">
        <div className="lg:flex-1 lg:mr-8 text-center mt-10">
          <h1 className="text-3xl font-bold mb-4">{service.name}</h1>
          <p className="mb-4">{service.description}</p>
          <p className="mb-4">Price: ${service.price}</p>
          <p className="mb-4">Duration: {service.duration} mins</p>
        </div>
        <div className="flex justify-center mb-4 lg:mb-0 lg:flex-none">
          <img className="h-96 w-96" src={service.imgUrl} alt="Car Wash" />
        </div>
      </div>

      {!service ? (
        <div className="text-red-500">No service found.</div>
      ) : isLoading ? (
        <div>Loading available slots...</div>
      ) : null}

      <div className="my-4 flex justify-center items-center">
        <label className="block font-semibold my-2 pr-4">Pick A Date</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="p-2 border rounded-md"
        />
      </div>
      {!data?.data?.length ? (
        <p className="mb-2 font-semibold">No slots available for this date.</p>
      ) : null}

      <div className="mb-4">
        <label className="block font-semibold text-center mb-2">
          The Slots Are Available
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-4">
          {data?.data?.length &&
            data?.data?.map(slot => (
              <button
                key={slot._id}
                onClick={() => handleSlotClick(slot)}
                className={`p-2 border rounded-md  ${
                  slot.isBooked !== 'available'
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-green-500 text-white'
                } ${selectedSlot?._id === slot._id && 'bg-yellow-500'} `}
                disabled={slot.isBooked !== 'available'}
              >
                {slot.startTime} - {slot.endTime}
              </button>
            ))}
        </div>
      </div>

      {selectedSlot?._id && (
        <Link to={'/bookings'} state={selectedSlot}>
          <button className="mt-4 w-1/2  py-2 bg-blue-500 text-white rounded-md mx-auto block">
            Book This Service
          </button>
        </Link>
      )}
    </div>
  );
};

export default ServiceDetails;
