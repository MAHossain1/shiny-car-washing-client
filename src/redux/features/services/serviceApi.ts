import { baseApi } from '../../api/baseApi';

const serviceApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getAllServices: builder.query({
      query: () => ({
        url: '/services',
      }),
      providesTags: ['services'],
    }),
  }),
});

export const { useGetAllServicesQuery } = serviceApi;
