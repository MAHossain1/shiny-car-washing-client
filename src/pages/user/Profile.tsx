import UpdateUserInfo from '../../components/ui/Dashboard/UpdateUserInfo';
import { selectUser } from '../../redux/features/auth/authSlice';
import { useGetSingleUserQuery } from '../../redux/features/users/userApi';
import { useAppSelector } from '../../redux/hooks';
const Profile = () => {
  const user = useAppSelector(selectUser);

  const email = user?.email;

  const { data: userData = {}, isLoading } = useGetSingleUserQuery(email!, {
    refetchOnMountOrArgChange: true, // Automatically fetch fresh data when component mounts
  });

  if (isLoading) return <div>Loading...</div>;
  if (!userData) return <div>User not found.</div>;

  return (
    <div className="m-5 overflow-hidden">
      <h1 className="text-3xl font-semibold text-center">
        {userData?.data?.name}'s Profile
      </h1>
      <p className="text-center my-2">Update your info as your wish.</p>
      <div className="w-[380px] p-8 mx-auto bg-white rounded">
        <UpdateUserInfo data={userData.data} />
      </div>
    </div>
  );
};

export default Profile;
