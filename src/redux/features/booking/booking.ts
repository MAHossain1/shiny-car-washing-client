import { baseApi } from '../../api/baseApi';

const bookingApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    createBooking: builder.mutation({
      query: data => {
        return {
          url: '/bookings',
          method: 'POST',
          body: data,
        };
      },
    }),
    getAllBookings: builder.query({
      query: () => ({
        url: '/bookings',
      }),
      providesTags: ['bookings'],
    }),
    getMyBookings: builder.query({
      query: () => ({
        url: '/bookings/my-bookings',
      }),
      providesTags: ['bookings'],
    }),
    getSingleUserBookings: builder.query({
      query: (id: string) => ({
        url: `/bookings/${id}`,
      }),
      providesTags: ['bookings'],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetSingleUserBookingsQuery,
  useGetMyBookingsQuery,
  useGetAllBookingsQuery,
} = bookingApi;
