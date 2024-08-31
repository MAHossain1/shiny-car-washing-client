import { baseApi } from '../../api/baseApi';

const userApi = baseApi.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => ({
        url: '/users',
      }),
      providesTags: ['users'],
    }),

    getSingleUser: builder.query({
      query: (email: string) => ({
        url: `/users/${email}`,
      }),
    }),

    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['users'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
} = userApi;
