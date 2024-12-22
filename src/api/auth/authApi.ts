import { api } from '../api';
import { AuthResponse, AuthRequest } from './types';

const BD_JSON = import.meta.env.VITE_JSON_SERVER_API_URL;

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<AuthResponse, AuthRequest>({
      query: (userData) => ({
        url: BD_JSON + '/signin',
        method: 'POST',
        body: userData,
      }),
    }),
    signUp: builder.mutation<AuthResponse, AuthRequest>({
      query: (userData) => ({
        url: BD_JSON + '/signup',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;
