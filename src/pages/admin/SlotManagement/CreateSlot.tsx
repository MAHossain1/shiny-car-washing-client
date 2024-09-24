import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { useCreateSlotMutation } from '../../../redux/features/services/serviceApi';
import { createSlotValidationSchema } from '../../../components/schemas/serviceSchemas';
import SlotForm from '../../../components/ui/DashboardForms/SlotForm';
import { toast } from 'sonner';

const CreateSlot = () => {
  const [createSlot] = useCreateSlotMutation();
  const [error, setError] = useState('');

  const form = useForm({
    resolver: zodResolver(createSlotValidationSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await createSlot(data).unwrap();
      if (res.success) {
        toast.success('Slot created successfully.');
      } else {
        setError(res.message || 'Failed to create slot.');
      }
    } catch (error: any) {
      // Handle the error from the rejected promise
      if (error.data && !error.data.success) {
        setError(error.data.message);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  };

  return (
    <div className="p-8 w-[380px] mx-auto bg-white rounded mt-5">
      <h1 className="text-2xl font-semibold mb-2">Create Slot</h1>
      <SlotForm form={form} onSubmit={onSubmit} />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default CreateSlot;
