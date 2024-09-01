import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { CarouselPlugin } from './ui/ImageContainer';

const Branding = () => {
  return (
    <div className="relative">
      <CarouselPlugin />
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 md:gap-7 text-center md:text-left">
        <p className="text-2xl md:text-4xl font-bold text-yellow-400 uppercase">
          Limited-Time Offer
        </p>
        <h1 className="text-3xl md:text-6xl font-bold text-blue-500 uppercase">
          Safeguard Your <br /> Valuable Asset
        </h1>
        <Button
          asChild
          className="bg-gray-500 hover:bg-gray-700 px-10 py-5 md:px-20 md:py-7 text-lg md:text-2xl uppercase"
        >
          <Link to={'/services'}>Choose your service</Link>
        </Button>
      </div>
    </div>
  );
};

export default Branding;
