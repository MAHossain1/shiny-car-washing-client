import { Pencil, Trash } from 'lucide-react';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../Card';
import {
  useDeleteServiceMutation,
  useGetAllServicesQuery,
} from '../../../redux/features/services/serviceApi';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './table';
import { TService } from '../../types/component.types';
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
import { Dialog, DialogTrigger } from './dialog';
import EditServiceModal from '../DashboardModal/EditServiceModal';
import { toast } from 'sonner';

const ServiceDataTable = () => {
  const [openServiceId, setOpenServiceId] = useState<string | null>(null); // State for opening dialogs
  const { data: serviceData = [], isLoading } = useGetAllServicesQuery({});
  const [deleteService] = useDeleteServiceMutation();

  if (isLoading) return <div>Loading...</div>;

  const handleDelete = async (id: string) => {
    const res = await deleteService(id);
    if (res?.data?.success) {
      toast.success('Service successfully deleted.');
    }
  };

  const handleDialogOpen = (id: string | null) => setOpenServiceId(id);
  const handleDialogClose = () => setOpenServiceId(null);

  return (
    <Card x-chunk="dashboard-06-chunk-0">
      <CardHeader>
        <CardTitle>Services</CardTitle>
        <CardDescription>
          Manage your services and view their sales performance.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">img</span>
              </TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead className="hidden md:table-cell">Duration</TableHead>
              <TableHead className="hidden md:table-cell">Price</TableHead>
              <TableHead className="hidden md:table-cell">Created at</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {serviceData?.data?.map((service: TService) => {
              const {
                _id,
                name,
                imgUrl,
                description,
                price,
                duration,
                createdAt,
              } = service;
              return (
                <TableRow key={_id}>
                  <TableCell className="hidden sm:table-cell">
                    <img
                      alt="Product img"
                      className="aspect-square rounded-md object-cover"
                      height="64"
                      src={imgUrl}
                      width="64"
                    />
                  </TableCell>
                  <TableCell className="font-medium">{name}</TableCell>
                  <TableCell>{description}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {new Date(createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {duration}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    ${price}
                  </TableCell>

                  <TableCell>
                    <div className="flex gap-2">
                      <Dialog
                        open={openServiceId === _id}
                        onOpenChange={() => handleDialogOpen(_id)}
                        // onOpenChange={isOpen => {
                        //   if (!isOpen) handleDialogClose(); // Close the modal if 'isOpen' is false
                        // }}
                      >
                        <DialogTrigger asChild>
                          <Pencil
                            strokeWidth={2.5}
                            className="text-green-500 border-2 rounded border-green-500 cursor-pointer"
                          />
                        </DialogTrigger>

                        <EditServiceModal
                          data={service}
                          //   setOpen={() => handleDialogOpen(null)}
                          setOpen={handleDialogClose}
                        />
                      </Dialog>

                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Trash
                            strokeWidth={3}
                            className="text-red-500 cursor-pointer border-2 border-red-500 rounded p-0.5"
                          />
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Are you sure you want to delete this service?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This action will soft delete the service on the
                              server.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(_id)}
                            >
                              Delete
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
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          Showing <strong>1-10</strong> of{' '}
          <strong>{serviceData?.data?.length}</strong> services
        </div>
      </CardFooter>
    </Card>
  );
};

export default ServiceDataTable;
