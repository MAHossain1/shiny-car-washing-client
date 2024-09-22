import { baseApi } from '../../api/baseApi';

const reviewApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getReviews: builder.query({
      query: () => ({
        url: '/review',
      }),
      providesTags: ['review'],
    }),

    createReview: builder.mutation({
      query: data => {
        return {
          url: '/review',
          method: 'POST',
          body: data,
        };
      },
    }),
  }),
});

export const { useCreateReviewMutation, useGetReviewsQuery } = reviewApi;
