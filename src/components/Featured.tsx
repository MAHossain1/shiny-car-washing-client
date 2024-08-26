import { useGetAllServicesQuery } from '../redux/features/services/serviceApi';
import MaximumWidthWrapper from './shared/MaximumWidthWrapper';
import ServiceCard from './ui/ServiceCard';

const Featured = () => {
  const { data, isLoading, error } = useGetAllServicesQuery(undefined);

  console.log(data);

  return (
    <MaximumWidthWrapper>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="mt-10 space-y-10">
          <h1 className="text-4xl text-center font-semibold">Our Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.data.length &&
              data.data.map(service => <ServiceCard {...service} />)}
          </div>
        </div>
      )}
      {error && <div>Error: {error.message}</div>}
    </MaximumWidthWrapper>
  );
};

export default Featured;
