import { motion } from 'framer-motion';
import { useState } from 'react';
import MaximumWidthWrapper from './shared/MaximumWidthWrapper';

const ReviewSection = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([
    {
      rating: 5,
      feedback: 'Excellent service, loved the atmosphere!',
    },
    {
      rating: 4,
      feedback: 'Good service, but the waiting area was not good.',
    },
    {
      rating: 3,
      feedback: 'Service was average, but the atmosphere was good.',
    },
  ]);
  const [isLoggedIn] = useState(true); // Change this based on actual login status

  const handleRating = (value: any) => {
    setRating(value);
  };

  const handleSubmit = () => {
    console.log('clicked');
    if (feedback && rating) {
      const newReview = { rating, feedback };
      setReviews([...reviews, newReview]);
      setFeedback('');
      setRating(0);
    }
  };

  const averageRating = reviews.length
    ? (
        reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      ).toFixed(1)
    : 0;

  return (
    <section className="h-screen flex flex-col justify-center">
      <MaximumWidthWrapper className="">
        <div className="text-center">
          <h1 className="text-5xl font-semibold">What our client say</h1>
        </div>

        <div className="my-10 ">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="col-span-1 border rounded-md">
              <div className="bg-white p-2">
                {!isLoggedIn && (
                  <motion.div
                    className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <button
                      className="bg-white text-black px-4 py-2 rounded"
                      onClick={() => (window.location.href = '/login')}
                    >
                      Login
                    </button>
                  </motion.div>
                )}
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
              {reviews.slice(-2).map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex-1"
                >
                  <div className="bg-white p-2 h-[180px] border rounded-md">
                    <div className="flex gap-5 p-0">
                      <div className="flex flex-col justify-between">
                        {review.feedback}
                        <div>
                          <p className="font-semibold">Arman Hossain</p>
                          <p className="text-gray-300">Instructor</p>
                        </div>
                      </div>
                      <img
                        src="/CarWash.jpg"
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
