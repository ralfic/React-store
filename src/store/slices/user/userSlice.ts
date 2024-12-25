import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: number | null;
  name: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

const initialState: UserState = {
  id: null,
  name: '',
  email: '',
  firstName: '',
  lastName: '',
  password: ' ',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.firstName = action.payload.firstName || '';
      state.lastName = action.payload.lastName || '';
    },
    clearUser: (state) => {
      state.id = null;
      state.name = '';
      state.email = '';
      state.firstName = '';
      state.lastName = '';
      state.password = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
