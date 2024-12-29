import { IOrder, IUser } from '@/types';
import { api } from '../api';
import {
  GetUserRequest,
  AddAccountDetailsRequest,
  ChangeUserPasswordRequest,
  CreateOrderRequest,
  GetNewOrderRequest,
  ChangeUserPasswordResponse,
} from './types';
import { BD_JSON_API_URL } from '@/constants/constants';

export const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.query<IUser, Partial<GetUserRequest>>({
      keepUnusedDataFor: 0,
      query: ({ token, id }) => {
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
    addAccountDetails: builder.mutation<
      IUser,
      Partial<AddAccountDetailsRequest>
    >({
      query: ({ token, id, userData }) => {
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
    changeUserPassword: builder.mutation<
      ChangeUserPasswordResponse,
      ChangeUserPasswordRequest
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
    createOrder: builder.mutation<void, CreateOrderRequest>({
      query: ({ token, order, userId }) => {
        return {
          url: BD_JSON_API_URL + `/orders`,
          method: 'POST',
          headers: new Headers({
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
          }),
          body: JSON.stringify({ ...order, userId: userId }),
        };
      },
    }),
    getOrders: builder.query<IOrder[], string | null>({
      keepUnusedDataFor: 0,
      query: (token) => {
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
    getNewOrder: builder.query<IOrder, GetNewOrderRequest>({
      query: ({ token, id }) => {
        return {
          url: BD_JSON_API_URL + `/orders/${id}`,
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
  useChangeUserPasswordMutation,
  useCreateOrderMutation,
} = userApi;
