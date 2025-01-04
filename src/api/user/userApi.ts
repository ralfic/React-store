import { IOrder, IUser } from '@/types';
import { api } from '../api';
import { BD_JSON_API_URL } from '@/constants/constants';
import getAuthData from '@/helpers/getAuthData';
import { ChangePasswordResponse, ChangePasswordRequest } from './types';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<IUser, null>({
      keepUnusedDataFor: 0,
      query: () => {
        const { token, id } = getAuthData();
        if (!token || !id) {
          throw new Error('Token or ID is missing');
        }

        return {
          url: BD_JSON_API_URL + `/users/${id}`,
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          }),
        };
      },
    }),
    addAccountDetails: builder.mutation<IUser, Partial<IUser>>({
      query: (userData) => {
        const { token, id } = getAuthData();
        if (!token || !id) {
          throw new Error('Token or ID is missing');
        }
        return {
          url: BD_JSON_API_URL + `/users/${id}`,
          method: 'PATCH',
          headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          }),
          body: JSON.stringify(userData),
        };
      },
    }),
    changePassword: builder.mutation<
      ChangePasswordResponse,
      ChangePasswordRequest
    >({
      query: (data) => {
        return {
          url: BD_JSON_API_URL + `/change-password`,
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
          }),
          body: JSON.stringify(data),
        };
      },
    }),
    createOrder: builder.mutation<void, IOrder>({
      query: (order) => {
        const { token, id } = getAuthData();
        if (!token || !id) {
          throw new Error('Token or ID is missing');
        }
        return {
          url: BD_JSON_API_URL + `/orders`,
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          }),
          body: JSON.stringify({ ...order, userId: id }),
        };
      },
    }),
    getOrders: builder.query<IOrder[], null>({
      keepUnusedDataFor: 0,
      query: () => {
        const { token } = getAuthData();
        if (!token) {
          throw new Error('Token is missing');
        }

        return {
          url: BD_JSON_API_URL + `/orders`,
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          }),
        };
      },
    }),
    getNewOrder: builder.query<IOrder, string | null>({
      query: (orderId) => {
        const { token, id } = getAuthData();
        if (!token || !id) {
          throw new Error('Token or ID is missing');
        }
        return {
          url: BD_JSON_API_URL + `/orders/${orderId}`,
          method: 'GET',
          headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          }),
        };
      },
    }),
  }),
});

export const {
  useGetUserQuery,
  useLazyGetUserQuery,
  useLazyGetNewOrderQuery,
  useGetOrdersQuery,
  useAddAccountDetailsMutation,
  useChangePasswordMutation,
  useCreateOrderMutation,
} = userApi;
