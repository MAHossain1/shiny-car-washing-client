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
  }),
});

export const { useGetAllServicesQuery, useGetSingleServiceQuery } = serviceApi;
