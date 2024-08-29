import { baseApi } from '../../api/baseApi';

const slotApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllSlots: builder.query({
      query: args => {
        const params = new URLSearchParams();
        // console.log('slot params', { params });

        if (args) {
          args.forEach((item: { name: string; value: string }) => {
            // console.log('search from slotApi', item.name, item.value);
            params.append(item.name, item.value as string);
          });
        }

        return {
          url: '/slots/availability',
          method: 'GET',
          params,
        };
      },
      providesTags: ['slots'],
    }),
    updateSlot: builder.mutation({
      query: ({ id, data }) => {
        console.log('api2', data);
        return {
          url: `/slots/update-slot/${id}`,
          method: 'PUT',
          body: data,
        };
      },
      invalidatesTags: ['slots'],
    }),
    deleteSlot: builder.mutation({
      query: id => ({
        url: `/slots/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['slots'],
    }),
  }),
});

export const {
  useGetAllSlotsQuery,
  useUpdateSlotMutation,
  useDeleteSlotMutation,
} = slotApi;
