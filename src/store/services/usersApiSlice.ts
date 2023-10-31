import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UserType } from '../../screens/UsersScreen/model';
import { APP_URL } from '@env';
import { GET_USERS_PATH } from './helpers';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${APP_URL}` }),
  endpoints: builder => ({
    getUsers: builder.query({
      query: () => `${GET_USERS_PATH}`,
      transformResponse: (response: UserType[]) => response,
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
