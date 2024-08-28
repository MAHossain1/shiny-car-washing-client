import { ArrowBigRightDash } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './Card';
import { Button } from './button';
import { TService } from '../types/component.types';

const ServiceCard = ({
  _id,
  name,
  description,
  imgUrl,
  price,
  duration,
}: TService) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardDescription>Price: ${price}</CardDescription>
        <p>Duration: {duration} mins</p>
      </CardHeader>
      <CardContent className="">
        <img src={imgUrl} alt="" />
      </CardContent>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link to={`/services/${_id}`}>
            View Details <ArrowBigRightDash className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
