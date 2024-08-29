import { CloudCog, Trash } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { cn } from '../../../lib/utils';
import {
  useDeleteSlotMutation,
  useGetAllSlotsQuery,
  useUpdateSlotMutation,
} from '../../../redux/features/slots/slotApi';
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

const SlotsTable = () => {
  const [status, setStatus] = useState('');
  const [updateSlot] = useUpdateSlotMutation({});
  const [deleteSlot] = useDeleteSlotMutation();

  const { data: slotData = [], isLoading } = useGetAllSlotsQuery([]);

  const handleUpdateSlotStatus = async (id: string) => {
    console.log(id, 'slot id from update clicked');
    console.log(status, 'seletecd status');
    if (status && id) {
      const slotUpdatedData = {
        id: id,
        data: { isBooked: status },
      };
      const res = await updateSlot(slotUpdatedData);
      console.log('res', res);
      if (res?.data?.success) {
        toast.success('Slot status updated successfully');
        console.log('Slot status updated successfully');
      }
    }
  };
  const handleDelete = async (id: string) => {
    const res = await deleteSlot(id);
    if (res.data.success) {
      toast.success('Slot deleted successfully');
    }
  };

  if (isLoading) return <div>Loading...</div>;
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
              <TableHead className="w-[100px] sm:table-cell">
                Service Id
              </TableHead>
              <TableHead>Slot Id</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="">Start Time</TableHead>
              <TableHead className="">End Time</TableHead>
              <TableHead className="">Created at</TableHead>
              <TableHead className="">Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {slotData?.data?.map((slot: any) => {
              const {
                _id: slotId,
                service,
                date,
                startTime,
                endTime,
                isBooked,
                createdAt,
              } = slot;
              return (
                <TableRow>
                  <TableCell className="sm:table-cell">{service}</TableCell>
                  <TableCell className="font-medium">{slotId}</TableCell>
                  <TableCell>{date}</TableCell>
                  <TableCell>{startTime}</TableCell>
                  <TableCell>{endTime}</TableCell>
                  <TableCell>
                    {new Date(createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell
                    className={cn(
                      isBooked === 'booked' ? 'text-green-500' : ''
                    )}
                  >
                    {isBooked} <br />
                    {!(isBooked === 'booked') && (
                      <>
                        <label htmlFor={`isBooked-${slot._id}`}>
                          Change status:
                        </label>
                        <select
                          name="isBooked"
                          id={`isBooked-${slot._id}`} // Use unique id
                          onChange={e => setStatus(e.target.value)} // Update state first
                          onBlur={() => handleUpdateSlotStatus(slot._id)} // Call function on blur or button click
                        >
                          <option value="available">available</option>
                          <option value="cancelled">cancelled</option>
                        </select>
                      </>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
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
                              Are you absolutely sure to delete this slot?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              This will soft delete the service in the slot.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction
                              onClick={() => handleDelete(slot._id)}
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
    </Card>
  );
};

export default SlotsTable;
