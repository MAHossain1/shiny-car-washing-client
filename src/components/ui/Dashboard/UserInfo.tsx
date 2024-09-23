import { useState } from 'react';

import { PlusCircle } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '../Card';
import { Dialog, DialogTrigger } from './dialog';
import { Button } from '../button';
import UpdateUserInfo from './UpdateUserInfo';

const UserInfo = ({ userData }: any) => {
  const [open, setOpen] = useState(false);

  const { name, email, phone, address } = userData;

  return (
    <Card className="max-w-[280px]">
      <CardHeader>User Information</CardHeader>
      <CardContent>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Address: {address}</p>
      </CardContent>
      <CardFooter>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="h-8 gap-1">
              <PlusCircle className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Update
              </span>
            </Button>
          </DialogTrigger>
          <UpdateUserInfo data={userData} />
        </Dialog>
      </CardFooter>
    </Card>
  );
};

export default UserInfo;
