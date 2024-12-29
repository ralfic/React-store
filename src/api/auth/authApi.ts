import { BD_JSON_API_URL } from '@/constants/constants';
import { api } from '../api';
import { AuthResponse, AuthRequest } from './types';

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<AuthResponse, AuthRequest>({
      query: (userData) => ({
        url: BD_JSON_API_URL + '/signin',
        method: 'POST',
        body: userData,
      }),
    }),
    signUp: builder.mutation<AuthResponse, AuthRequest>({
      query: (userData) => ({
        url: BD_JSON_API_URL + '/signup',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
