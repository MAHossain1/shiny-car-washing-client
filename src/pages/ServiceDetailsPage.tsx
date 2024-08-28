import { useParams } from 'react-router-dom';
import ServiceDetails from '../components/ServiceDetails';
import MaximumWidthWrapper from '../components/shared/MaximumWidthWrapper';
import { useGetSingleServiceQuery } from '../redux/features/services/serviceApi';

const ServiceDetailsPage = () => {
  const { id } = useParams();
  const { data = [], error, isLoading } = useGetSingleServiceQuery(id!);

  if (error || !data?.data) {
    return (
      <MaximumWidthWrapper className="p-5">
        {isLoading && (
          <div>Error loading service details. Please try again later.</div>
        )}
      </MaximumWidthWrapper>
    );
  }

  console.log('Service Data:', data.data);

  return (
    <MaximumWidthWrapper className="p-5">
      <ServiceDetails service={data.data} />
    </MaximumWidthWrapper>
  );
};

export default ServiceDetailsPage;
