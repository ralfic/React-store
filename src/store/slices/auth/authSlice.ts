import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  id: number | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  id: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.accessToken;
      state.id = action.payload.user.id;
    },
    clearAuth: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.id = null;
    },
  },
});

export default authSlice.reducer;

export const { setAuth, clearAuth } = authSlice.actions;
