import { IUser } from '@/types';
import { api } from '../api';

const BD_JSON = import.meta.env.VITE_JSON_SERVER_API_URL;

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<
      IUser,
      Partial<{ token: string | null; id: number }>
    >({
      query: (userData) => {
        if (!userData?.token || !userData?.id) {
          throw new Error('Token and id are required');
        }
        return {
          url: BD_JSON + `/users/${userData.id}`,
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${userData.token}`,
          }),
        };
      },
    }),
  }),
});

export const {useGetUserQuery } = userApi;
