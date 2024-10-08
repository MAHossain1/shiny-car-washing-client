import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';
import { selectUser } from '../redux/features/auth/authSlice';
import {
  useCreateReviewMutation,
  useGetReviewsQuery,
} from '../redux/features/review/reviewApi';
import { useAppSelector } from '../redux/hooks';
import MaximumWidthWrapper from './shared/MaximumWidthWrapper';
import { Button } from './ui/button';

const ReviewSection = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const user = useAppSelector(selectUser);
  const [createReview] = useCreateReviewMutation();
  const { data, isLoading, refetch } = useGetReviewsQuery(undefined);

  const handleRating = (value: any) => {
    setRating(value);
  };

  const handleSubmit = async () => {
    if (feedback && rating && user) {
      const reviewData = {
        reviewText: feedback,
        ratting: rating,
      };

      await createReview(reviewData);
      refetch();
      toast.success('Review added successfully done.');
    }
  };

  const averageRating = data?.data?.length
    ? (
        data?.data?.reduce(
          (sum: number, review: any) => sum + review.ratting,
          0
        ) / data?.data?.length
      ).toFixed(1)
    : 0;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <section className="relative min-h-screen flex flex-col justify-center mt-10 pt-5 pb-10">
      {!user && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Button
            className="bg-white text-black px-8 py-2 rounded"
            onClick={() => (window.location.href = '/login')}
          >
            Login
          </Button>
        </motion.div>
      )}
      <MaximumWidthWrapper>
        <div className="text-center">
          <h1 className="text-5xl font-semibold">What our client say</h1>
        </div>

        <div className="my-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="col-span-1 border rounded-md">
              <div className="bg-white p-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <textarea
                    className="w-full p-2 border rounded mb-4"
                    placeholder="Leave your feedback here..."
                    value={feedback}
                    onChange={e => setFeedback(e.target.value)}
                  />
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span
                        key={star}
                        className={`cursor-pointer text-2xl ${
                          rating >= star ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                        onClick={() => handleRating(star)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center">
                    {' '}
                    <button
                      className="bg-blue-500  text-white px-6 py-2 rounded"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="col-span-2 flex flex-col md:flex-row gap-5 flex-wrap">
              {data?.data?.slice(-2).map((review: any) => (
                <motion.div
                  key={review._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1"
                >
                  <div className="bg-white p-2 h-[180px] border rounded-md">
                    <div className="flex gap-5 p-0">
                      <div className="flex flex-col gap-1 justify-between">
                        <div>
                          <p>{review?.reviewText}</p>
                        </div>

                        <div className="flex text-yellow-500">
                          {Array.from(
                            { length: Math.round(review.ratting) },
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
                          <span className="ml-2 text-sm text-gray-600">
                            {review.ratting.toFixed(1)}
                          </span>
                        </div>

                        <div>
                          <p className="font-semibold">
                            {review?.customerId.name}
                          </p>
                          <p className="text-gray-500">
                            Email: {review?.customerId?.email}
                          </p>
                        </div>
                      </div>
                      <img
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                        alt=""
                        className="w-32 h-36 object-cover rounded-2xl"
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-center font-semibold mb-2">
            Average rating from our clients.
          </p>
          <div className="flex items-center justify-center gap-5 mb-5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(star => (
                <span
                  key={star}
                  className={`cursor-pointer text-2xl ${
                    (averageRating as number) >= star
                      ? 'text-yellow-500'
                      : 'text-gray-300'
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-center text-lg font-bold">{averageRating}/5</p>
          </div>

          <button
            className="mx-auto uppercase bg-gray-900 text-white px-4 py-2 rounded w-[300px]"
            onClick={() => (window.location.href = '/reviews')}
          >
            Explore All Reviews
          </button>
        </div>
      </MaximumWidthWrapper>
    </section>
  );
};

export default ReviewSection;
