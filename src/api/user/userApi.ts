import { IOrder, IUser } from '@/types';
import { api } from '../api';
import {
  ChangePasswordResponse,
  ChangePasswordRequest,
  AddAccountDetailsRequest,
} from './types';
import getAuthData from '@/helpers/getAuthData';
import { BD_JSON_API_URL } from '@/constants/constants';

function getAuthHeaders() {
  const { token } = getAuthData();
  if (!token) {
    throw new Error('Token is missing');
  }
  return new Headers({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
  });
}

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({
      query: () => {
        const { id } = getAuthData();
        if (!id) {
          throw new Error('User ID is missing');
        }

        return {
          url: BD_JSON_API_URL + `/users/${id}`,
          method: 'GET',
          headers: getAuthHeaders(),
        };
      },
      providesTags: ['User'],
      keepUnusedDataFor: 300,
    }),
    addAccountDetails: builder.mutation<
      void,
      Partial<AddAccountDetailsRequest>
    >({
      query: (userData) => {
        const { id } = getAuthData();
        if (!id) {
          throw new Error('User ID is missing');
        }
        return {
          url: BD_JSON_API_URL + `/users/${id}`,
          method: 'PATCH',
          headers: getAuthHeaders(),
          body: JSON.stringify(userData),
        };
      },
      invalidatesTags: ['User'],
    }),
    changePassword: builder.mutation<
      ChangePasswordResponse,
      ChangePasswordRequest
    >({
      query: (data) => ({
        url: BD_JSON_API_URL + `/change-password`,
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }),
        body: JSON.stringify(data),
      }),
    }),
    createOrder: builder.mutation<void, IOrder>({
      query: (order) => {
        const { id } = getAuthData();
        if (!id) {
          throw new Error('User ID is missing');
        }
        return {
          url: BD_JSON_API_URL + `/orders`,
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify({ ...order, userId: id }),
        };
      },
    }),
    getOrders: builder.query<IOrder[], void>({
      query: () => ({
        url: BD_JSON_API_URL + `/orders`,
        method: 'GET',
        headers: getAuthHeaders(),
      }),
    }),
    getNewOrder: builder.query<IOrder, string>({
      query: (orderId) => {
        if (!orderId) {
          throw new Error('Order ID is required');
        }
        return {
          url: BD_JSON_API_URL + `/orders/${orderId}`,
          method: 'GET',
          headers: getAuthHeaders(),
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetUserQuery,
  useLazyGetUserQuery,
  useGetNewOrderQuery,
  useGetOrdersQuery,
  useAddAccountDetailsMutation,
  useChangePasswordMutation,
  useCreateOrderMutation,
} = userApi;
