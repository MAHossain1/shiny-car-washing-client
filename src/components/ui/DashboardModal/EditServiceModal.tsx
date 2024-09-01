import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useEditServiceMutation } from '../../../redux/features/services/serviceApi';
import { createServiceValidationSchema } from '../../schemas/serviceSchemas';
import ServiceModal from './ServiceModal';
import { TFormProps } from '../../types/component.types';

const EditServiceModal = ({ data, setOpen }: TFormProps) => {
  console.log(data, 'edit service modal');
  const [editService] = useEditServiceMutation();

  const { _id, name, price, duration, description, imgUrl } = data || {};

  //   console.log({ data });

  const title = 'Edit The Service';

  const form = useForm({
    resolver: zodResolver(createServiceValidationSchema),
    defaultValues: {
      name: name || '',
      price: price || '',
      duration: duration || '',
      description: description || '',
      imgUrl: imgUrl || '',
    },
  });

  async function onSubmit(data: any) {
    const updatedData = {
      id: _id,
      service: data,
    };

    // edit service
    try {
      const res = await editService(updatedData);
      if (res.data.success) {
        toast.success('Successfully updated the service!');
      }

      setOpen(false);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <ServiceModal form={form} title={title} onSubmit={onSubmit} />
    </>
  );
};

export default EditServiceModal;
