import { PlusCircle } from 'lucide-react';
import {
  useGetUsersQuery,
  useUpdateUserMutation,
} from '../../../redux/features/users/userApi';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../Card';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './alertDialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';
import { toast } from 'sonner';

const UsersTable = () => {
  const { data: usersData = [], isLoading } = useGetUsersQuery({});
  const [updateUser] = useUpdateUserMutation();

  const updateUserRole = async (email: string, role: string) => {
    const updatedUserData = {
      email,
      data: {
        role,
      },
    };

    try {
      const res = await updateUser(updatedUserData).unwrap();
      if (res?.success) {
        toast.success('User role updated successfully');
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (isLoading) return <div>Loading...</div>;
  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>Users</CardTitle>
        <CardDescription>Manage users and view their bookings.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] sm:table-cell">Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead className="">Address</TableHead>
              <TableHead className="">Role</TableHead>
              <TableHead className="">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {usersData?.data?.map((user: any) => {
              const { name, email, address, phone, role } = user;
              return (
                <TableRow>
                  <TableCell className="sm:table-cell">{name}</TableCell>
                  <TableCell className="font-medium">{email}</TableCell>
                  <TableCell>{phone}</TableCell>
                  <TableCell>{address}</TableCell>
                  <TableCell>{role}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <div className="flex gap-1 text-blue-500 items-center cursor-pointer">
                            <PlusCircle />
                            Update Role
                          </div>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you absolutely sure to change this user role?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This will change the user role.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() =>
                                updateUserRole(
                                  email,
                                  role === 'user' ? 'admin' : 'user'
                                )
                              }
                            >
                              {`Update to ${
                                role === 'user' ? 'admin' : 'user'
                              }`}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default UsersTable;
