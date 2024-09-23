import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';
import { createBookingValidationSchema } from '../components/schemas/booking.schema';
import BookingForm from '../components/ui/BookingForm';
import { selectUser } from '../redux/features/auth/authSlice';
import { useCreateBookingMutation } from '../redux/features/booking/booking';
import { useGetSingleServiceQuery } from '../redux/features/services/serviceApi';
import { useAppSelector } from '../redux/hooks';

const Bookings = () => {
  const location = useLocation();
  const user = useAppSelector(selectUser);
  const [createBooking] = useCreateBookingMutation();
  const [error, setError] = useState('');

  const {
    _id: slotId = '',
    startTime = '',
    endTime = '',
    date = '',
    service: serviceId = '', // This is just the service ID
  } = location.state || {};

  // Fetch the service details using the ID
  const { data: serviceData, isLoading } = useGetSingleServiceQuery(serviceId);

  const { name, description, duration, price, imgUrl } = serviceData.data;

  if (isLoading) {
    return <p>Loading service details...</p>;
  }

  const form = useForm<z.infer<typeof createBookingValidationSchema>>({
    resolver: zodResolver(createBookingValidationSchema),
    defaultValues: {
      customerName: user?.name || '',
      email: user?.email || '',
      serviceId: serviceId || '',
      slotId: slotId || '',
      vehicleType: 'car',
      vehicleBrand: '',
      vehicleModel: '',
      manufacturingYear: 0,
      registrationPlate: '',
    },
  });

  const onSubmit = async (data: any) => {
    try {
      const res = await createBooking(data).unwrap();
      if (res.success) {
        console.log('res', res, 'booking create done.');
        toast.success('Payment is processing.');
        window.location.href = res.data.payment_url;
        // navigate('/payment-success');
      } else if (!res.success) {
        setError(res?.data.message);
      }
    } catch (err: any) {
      setError(err?.data.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-1/2 p-4">
            <h2 className="text-2xl text-center font-bold mb-4">
              Service Details
            </h2>
            <img src={imgUrl} className="w-1/2 ml-10 rounded-md" alt="" />
            <p className="mb-2">
              <strong>Service:</strong> {name}
            </p>
            <p className="mb-2">
              <strong>Description:</strong> {description}
            </p>
            <p className="mb-2">
              <strong>Date:</strong> {date}
            </p>
            <p className="mb-2">
              <strong>Time Slot:</strong> {startTime} to {endTime}
            </p>
            <p className="mb-2">
              <strong>Duration:</strong> {duration} minutes
            </p>
            <p className="mb-2">
              <strong>Price:</strong> ${price}
            </p>
          </div>

          <div className="w-1/2 p-4">
            <h2 className="text-2xl text-center font-bold mb-4">
              Booking Info
            </h2>
            <BookingForm form={form} onSubmit={onSubmit} />
            {error ? (
              <p className="text-red-500 font-semibold mt-5">{error}</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
