import { baseApi } from '../../api/baseApi';

const serviceApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllServices: builder.query({
      query: () => ({
        url: '/services',
      }),
      providesTags: ['services'],
    }),

    getSingleService: builder.query({
      query: (id: string) => ({
        url: `/services/${id}`,
      }),
    }),

    addService: builder.mutation({
      query: (service: any) => ({
        url: '/services',
        method: 'POST',
        body: service,
      }),
      invalidatesTags: ['services'],
    }),

    editService: builder.mutation({
      query: ({ id, service }) => ({
        url: `/services/${id}`,
        method: 'PUT',
        body: service,
      }),
      invalidatesTags: ['services'],
    }),

    deleteService: builder.mutation({
      query: id => ({
        url: `/services/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['services'],
    }),

    createSlot: builder.mutation({
      query: data => ({
        url: `/services/slots`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['slots'],
    }),
  }),
});

export const {
  useGetAllServicesQuery,
  useGetSingleServiceQuery,
  useAddServiceMutation,
  useEditServiceMutation,
  useDeleteServiceMutation,
  useCreateSlotMutation,
} = serviceApi;
