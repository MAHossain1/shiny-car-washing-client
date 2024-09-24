import { Link } from 'react-router-dom';
import { Button } from '../button';
import { Card, CardContent, CardFooter, CardHeader } from '../Card';

const UserInfo = ({ userData }: any) => {
  const { name, email, phone, address } = userData;
  console.log(userData);

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
        <Button size="sm" className="h-8 gap-1" asChild>
          <Link to="/user/me" state={userData._id}>
            Update
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default UserInfo;
