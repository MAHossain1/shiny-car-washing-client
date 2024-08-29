import { useState } from 'react';
import MaximumWidthWrapper from '../components/shared/MaximumWidthWrapper';
import { TService } from '../components/types/component.types';
import ServiceCard from '../components/ui/ServiceCard';
import { useGetAllServicesQuery } from '../redux/features/services/serviceApi';

const Services = () => {
  const [sort, setSort] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterByPrice, setFilterByPrice] = useState();

  const { data = [] } = useGetAllServicesQuery(undefined);

  const handleSort = (e: any) => {
    setSort(e.target.value);
  };

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterPrice = (e: any) => {
    setFilterByPrice(e.target.value);
  };

  const filteredServicesData = data?.data?.length
    ? data.data
        .filter((service: TService) =>
          service.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((service: TService) =>
          filterByPrice ? service.price <= filterByPrice : true
        )
        .sort((a: any, b: any) => {
          if (sort === 'price') {
            return a.price - b.price;
          } else if (sort === 'duration') {
            return a.duration - b.duration;
          } else {
            return a.name.localeCompare(b.name);
          }
        })
    : [];

  // console.log({ sort, searchTerm, filterByPrice });
  // console.log(data.data);

  return (
    <MaximumWidthWrapper>
      <h1 className="text-4xl text-center font-semibold my-6">
        Choose Your Best Choice
      </h1>
      <div className="mb-6  flex flex-col md:flex-row  gap-4">
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto ml-auto">
          <select
            value={sort}
            onChange={handleSort}
            className="p-2 border rounded-md w-full md:w-auto"
          >
            <option value="name">Sort by Name</option>
            <option value="price">Sort by Price</option>
            <option value="duration">Sort by Duration</option>
          </select>

          <input
            type="text"
            placeholder="Enter Service Name..."
            value={searchTerm}
            onChange={handleSearch}
            className="p-2 border rounded-md w-full md:w-auto"
          />

          <input
            type="number"
            placeholder="Filter by max price"
            value={filterByPrice}
            onChange={handleFilterPrice}
            className="p-2 border rounded-md w-full md:w-auto"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredServicesData?.map((service: TService) => (
          <ServiceCard {...service} />
        ))}
      </div>
    </MaximumWidthWrapper>
  );
};

export default Services;
