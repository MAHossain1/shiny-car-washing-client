import { useGetReviewsQuery } from '../redux/features/review/reviewApi';

const Reviews = () => {
  const { data: reviews = [], isLoading } = useGetReviewsQuery(undefined);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-wrap gap-6 justify-center mt-10">
      {reviews?.data?.map((item: any) => (
        <div
          key={item._id}
          className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
        >
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">
              {item.customerId.name}
            </h3>
            <p className="text-gray-500">{item.customerId.email}</p>
            <div className="flex items-center mt-2">
              <div className="flex text-yellow-500">
                {Array.from(
                  { length: Math.round(item.ratting) },
                  (_, index) => (
                    <svg
                      key={index}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.713 1.812 8.076L12 18.347l-7.748 4.748 1.812-8.076L.587 9.306l8.332-1.151L12 .587z" />
                    </svg>
                  )
                )}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {item.ratting.toFixed(1)}
              </span>
            </div>
            <p className="mt-2 text-gray-600">{item.reviewText}</p>
          </div>
          <div className="p-4 bg-gray-100 border-t border-gray-200">
            <span className="text-sm text-gray-500">
              Reviewed on {new Date(item.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
