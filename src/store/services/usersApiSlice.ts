import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserType } from '../../screens/UsersScreen/model';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => '/users',
      transformResponse: (response: UserType[]) => response,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
