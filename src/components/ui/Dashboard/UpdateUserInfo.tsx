import { FieldValues, useForm } from 'react-hook-form';
import { TUser } from '../../../redux/features/auth/authSlice';
import { useUpdateUserMutation } from '../../../redux/features/users/userApi';
import UserForm from '../DashboardForms/UserForm';

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
      id: data._id,
      data: data,
    };
    const res = await updateUser(updatedUserData).unwrap();
    // console.log('data', res);
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
