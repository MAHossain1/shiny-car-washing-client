import { useGetAllServicesQuery } from '../redux/features/services/serviceApi';

const Home = () => {
  const { data, isLoading, isFetching } = useGetAllServicesQuery(undefined);

  console.log(data);

  return (
    <div>
      <h1>This is Home page</h1>
    </div>
  );
};

export default Home;
