import { FieldValues, useForm } from 'react-hook-form';
import { TUser } from '../../../redux/features/auth/authSlice';
import { useUpdateUserMutation } from '../../../redux/features/users/userApi';
import UserForm from '../DashboardForms/UserForm';

const UpdateUserInfo = ({ user }: { user: TUser }) => {
  const [updateUser] = useUpdateUserMutation();

  const form = useForm({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      address: user?.address || '',
    },
  });

  const onSubmit = async (data: FieldValues) => {
    const updatedUserData = {
      id: user._id,
      data: data,
    };
    const res = await updateUser(updatedUserData).unwrap();
    console.log('data', res);
    if (res.success) {
      console.log('User updated successfully');
    } else {
      console.error('Failed to update user');
    }
  };

  return (
    <div>
      <UserForm form={form} onSubmit={onSubmit} />
    </div>
  );
};

export default UpdateUserInfo;
