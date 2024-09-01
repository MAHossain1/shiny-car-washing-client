import { useAddServiceMutation } from '../../../redux/features/services/serviceApi';
import { createServiceValidationSchema } from '../../schemas/serviceSchemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import ServiceModal from './ServiceModal';

const AddServiceModal = ({ setOpen }: any) => {
  const [addService] = useAddServiceMutation();

  const title = 'Add Service';

  const form = useForm({
    resolver: zodResolver(createServiceValidationSchema),
    defaultValues: {
      name: '',
      price: '',
      duration: '',
      description: '',
      imgUrl: '',
    },
  });

  async function onSubmit(data: any) {
    // Add service to the database here
    try {
      const res = await addService(data);
      if (res.data.success) {
        //toast message
        console.log('Service added successfully');
        console.log(res);
      }

      // Close modal after adding service
      setOpen(false);
      // Reset form fields
      form.reset();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <ServiceModal form={form} title={title} onSubmit={onSubmit} />
    </>
  );
};

export default AddServiceModal;
