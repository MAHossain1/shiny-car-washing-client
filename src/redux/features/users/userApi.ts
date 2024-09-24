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
      providesTags: ['users'],
    }),

    updateUser: builder.mutation({
      query: ({ email, data }) => ({
        url: `/users/${email}`,
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
