import { z } from 'zod';

export const Vehicle_types = {
  car: 'car',
  motorcycle: 'motorcycle',
  truck: 'truck',
  bus: 'bus',
  van: 'van',
  SUV: 'SUV',
  electricVehicle: 'electricVehicle',
  hybridVehicle: 'hybridVehicle',
  bicycle: 'bicycle',
  tractor: 'tractor',
} as const;

export const createBookingValidationSchema = z.object({
  customerName: z.string(),
  email: z.string(),
  serviceId: z.string(),
  slotId: z.string(),
  vehicleType: z.nativeEnum(Vehicle_types, { message: 'Invalid vehicle type' }),
  vehicleBrand: z.string().min(2, { message: 'Vehicle brand is required' }),
  vehicleModel: z.string().min(2, { message: 'Vehicle model is required' }),
  manufacturingYear: z
    .number()
    .min(1886, { message: 'Manufacturing year must be 1886 or later' })
    .positive({ message: 'Manufacturing year must be 1886 or later' })
    .or(z.string().regex(/^\d+$/).transform(Number)),
  registrationPlate: z
    .string()
    .min(5, { message: 'Registration plate is required' }),
});
