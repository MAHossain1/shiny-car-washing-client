import { TFormProps } from '../types/component.types';
import { Button } from './button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './Dashboard/form';
import { Input } from './Dashboard/input';

const BookingForm = ({ form, onSubmit }: TFormProps) => {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-2 gap-4"
      >
        <FormField
          control={form.control}
          name="customerName"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your name"
                  {...field}
                  className="w-full"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email" {...field} className="w-full" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="serviceId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Service Id</FormLabel>
              <FormControl>
                <Input placeholder="service id" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="slotId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slot Id</FormLabel>
              <FormControl>
                <Input placeholder="slot id" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="vehicleType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vehicle Type</FormLabel>
              <FormControl>
                <Input placeholder="vehicle type" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="vehicleBrand"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vehicle Brand</FormLabel>
              <FormControl>
                <Input placeholder="vehicle brand" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="vehicleModel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Model</FormLabel>
              <FormControl>
                <Input placeholder="vehicle model" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="manufacturingYear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Manufacturing Year</FormLabel>
              <FormControl>
                <Input placeholder="manufacturing year" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="registrationPlate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Registration No</FormLabel>
              <FormControl>
                <Input placeholder="registration plate" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="mt-8 text-green">
          <Button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
          >
            Continue to Payment
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default BookingForm;
