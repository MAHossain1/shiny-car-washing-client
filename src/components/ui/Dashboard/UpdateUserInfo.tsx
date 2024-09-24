import { FieldValues, useForm } from 'react-hook-form';
import { TUser } from '../../../redux/features/auth/authSlice';
import { useUpdateUserMutation } from '../../../redux/features/users/userApi';
import UserForm from '../DashboardForms/UserForm';
import { toast } from 'sonner';

const UpdateUserInfo = ({ data }: { data: TUser }) => {
  const [updateUser] = useUpdateUserMutation();

  const form = useForm({
    defaultValues: {
      name: data?.name || '',
      email: data?.email || '',
      phone: data?.phone || '',
      address: data?.address || '',
    },
  });

  const onSubmit = async (data: FieldValues) => {
    const updatedUserData = {
      email: data.email,
      data: data,
    };

    const res = await updateUser(updatedUserData).unwrap();

    if (res.success) {
      toast.success('User updated successfully');
    } else {
      toast.error('Failed to update user');
    }
  };

  return (
    <div>
      <UserForm form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default UpdateUserInfo;
